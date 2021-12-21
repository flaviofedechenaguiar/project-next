import {
  ComingSoonMovies,
  Detail,
  Find,
  Images,
  OverviewDetail,
  Synopses,
} from "../interfaces";
import api from "../providers/api";

const getMostPopularMovies = () =>
  api.get<string[]>("/title/get-most-popular-movies");
const getMinDetail = (id: string) =>
  api.get<Detail>("/title/get-details", {
    params: { tconst: id },
  });
const getDetail = (id: string) =>
  api.get<OverviewDetail>("/title/get-overview-details", {
    params: { tconst: id },
  });
const getImages = (id: string, limit: number) =>
  api.get<Images>("/title/get-images", { params: { tconst: id, limit } });
const getSynopses = (id: string) =>
  api.get<Synopses[]>("/title/get-synopses", { params: { tconst: id } });
const getComingSoonMovies = () =>
  api.get<ComingSoonMovies[]>("/title/get-coming-soon-movies");
const find = (search: string) =>
  api.get<Find>("/title/find", { params: { q: search } });

export const FilmsServices = {
  getMostPopularMovies,
  getMinDetail,
  getDetail,
  getImages,
  getSynopses,
  getComingSoonMovies,
  find,
};
