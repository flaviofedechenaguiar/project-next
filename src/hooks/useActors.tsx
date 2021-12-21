import { useState } from "react";
import { Bio, Film } from "../interfaces";
import { ActorsService } from "../services/ActorsService";

export const useActors = () => {
  const [actorsIds, setActorsIds] = useState<string[]>([]);
  const [nextIndexActor, setNextIndexActor] = useState<number>(-1);

  const [actors, setActors] = useState<Bio[]>([]);
  const [bioActor, setBioActor] = useState<Bio>();
  const [filmography, setFilmography] = useState<Film[]>([]);

  function handleRemovePrefixID(id: string) {
    const PREFIX_BAR = /[\/]/g;
    const PREFIX_NAME = /\bname/;
    return id.replace(PREFIX_BAR, "").replace(PREFIX_NAME, "");
  }

  const getAllActors = async () => {
    const LIMIT_REQUEST = 7;
    try {
      let { data } = await ActorsService.getMostPopularActors();
      data = data.map((id) => handleRemovePrefixID(id));
      setActorsIds((prevState) => data);
      for (let i = 0; i < LIMIT_REQUEST; i++) {
        let { data: celeb } = await ActorsService.getBio(data[i]);
        celeb = { ...celeb, id: handleRemovePrefixID(celeb.id) };
        setActors((prevState) => [...prevState, celeb]);
        setNextIndexActor((prevState) => i + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getBioActor = async (id: string) => {
    try {
      const { data } = await ActorsService.getBio(id);
      setBioActor((prevState) => data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllFilmography = async (id: string) => {
    try {
      let {
        data: { filmography },
      } = await ActorsService.getFilmography(id);
      filmography.map((film) => ({
        ...film,
        id: handleRemovePrefixID(film.id),
      }));
      setFilmography((prevState) => filmography);
    } catch (err) {
      console.log(err);
    }
  };

  const addActorIntoActors = async () => {
    if (nextIndexActor < actorsIds.length - 1) {
      let { data } = await ActorsService.getBio(actorsIds[nextIndexActor]);
      data = { ...data, id: handleRemovePrefixID(data.id) };
      setActors((prevState) => [...prevState, data]);
      setNextIndexActor((prevState) => prevState + 1);
    }
  };

  return {
    getAllActors,
    getBioActor,
    getAllFilmography,
    addActorIntoActors,
    actorsIds,
    actors,
    bioActor,
    filmography,
  };
};
