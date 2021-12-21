import { useState } from "react";
import { Detail } from "../interfaces";
import { FilmsServices } from "../services/FilmsService";

export const useFilms = () => {
  const [filmsIds, setFilmsIds] = useState<string[]>([]);
  const [releaseFilmsIds, setReleasesFilmsIds] = useState<string[]>([]);
  const [films, setFilms] = useState<Detail[]>([]);
  const [releaseFilms, setReleaseFilms] = useState<Detail[]>([]);
  const [banners, setBanners] = useState<Detail[]>([]);

  const [nextIndexFilm, setNextIndexFilm] = useState<number>(-1);
  const [nextIndexFilmRelease, setNextIndexFilmRelease] = useState<number>(-1);

  const [detailFilm, setDetailFilm] = useState<Detail>();

  function handleRemovePrefixID(id: string) {
    const PREFIX_BAR = /[\/]/g;
    const PREFIX_NAME = /\btitle/;
    return id.replace(PREFIX_BAR, "").replace(PREFIX_NAME, "");
  }

  const getAllFilms = async () => {
    const LIMIT_REQUEST = 6;
    let { data } = await FilmsServices.getMostPopularMovies();
    data = data.map((id) => handleRemovePrefixID(id));
    setFilmsIds((prevState) => data);
    for (let i = 0; i < LIMIT_REQUEST; i++) {
      let { data: film } = await FilmsServices.getMinDetail(data[i]);
      film = { ...film, id: handleRemovePrefixID(film.id) };
      setFilms((prevState) => [...prevState, film]);
      setNextIndexFilm((prevState) => i + 1);
    }
  };

  const getDetailFilm = async (id: string) => {
    let { data } = await FilmsServices.getDetail(id);
    const {
      data: { images },
    } = await FilmsServices.getImages(handleRemovePrefixID(id), 1);

    setDetailFilm((prevState) => ({
      id,
      title: data.title.title,
      image: data.title.image,
      banner: images[0],
      year: data.title.year,
      summary: data.plotSummary,
      ratings: data.ratings,
    }));
  };

  const getAllReleases = async () => {
    const LIMIT_REQUEST = 6;
    let { data } = await FilmsServices.getComingSoonMovies();
    const releases = data.map((release) => handleRemovePrefixID(release.id));
    setReleasesFilmsIds((prevState) => releases);
    for (let i = 0; i < LIMIT_REQUEST; i++) {
      let { data: film } = await FilmsServices.getMinDetail(releases[i]);
      film = { ...film, id: handleRemovePrefixID(film.id) };
      setReleaseFilms((prevState) => [...prevState, film]);
      setNextIndexFilmRelease((prevState) => i + 1);
    }
  };

  const addFilmIntoFilms = async () => {
    if (nextIndexFilm < filmsIds.length - 1) {
      let { data } = await FilmsServices.getMinDetail(filmsIds[nextIndexFilm]);
      data = { ...data, id: handleRemovePrefixID(data.id) };
      setFilms((prevState) => [...prevState, data]);
      setNextIndexFilm((prevState) => prevState + 1);
    }
  };

  const addFilmIntoFilmsRelease = async () => {
    if (nextIndexFilmRelease < releaseFilmsIds.length - 1) {
      let { data } = await FilmsServices.getMinDetail(
        releaseFilmsIds[nextIndexFilmRelease]
      );

      console.log(releaseFilmsIds[nextIndexFilmRelease]);
      data = { ...data, id: handleRemovePrefixID(data.id) };
      setReleaseFilms((prevState) => [...prevState, data]);
      setNextIndexFilmRelease((prevState) => prevState + 1);
    }
  };

  const findFilms = async (search: string) => {
    let {
      data: { results },
    } = await FilmsServices.find(search);
    results = results.map((result) => ({
      ...result,
      id: handleRemovePrefixID(result.id),
    }));
    setFilms(results);
  };

  const getBanners = async () => {
    const LIMIT_REQUEST = 3;

    let { data: ids } = await FilmsServices.getMostPopularMovies();
    ids = ids.map((id) => handleRemovePrefixID(id));
    setFilmsIds((prevState) => ids);
    for (let i = 0; i < LIMIT_REQUEST; i++) {
      let { data: detail } = await FilmsServices.getDetail(ids[i]);
      const {
        data: { images },
      } = await FilmsServices.getImages(handleRemovePrefixID(ids[i]), 1);
      setBanners((prevState) => [
        ...prevState,
        {
          id: ids[i],
          title: detail.title.title,
          image: detail.title.image,
          banner: images[0],
          year: detail.title.year,
          summary: detail.plotSummary,
          ratings: detail.ratings,
        },
      ]);
    }
  };

  return {
    films,
    releaseFilms,
    detailFilm,
    banners,
    getAllFilms,
    getDetailFilm,
    getAllReleases,
    addFilmIntoFilms,
    addFilmIntoFilmsRelease,
    getBanners,
    findFilms,
  };
};
