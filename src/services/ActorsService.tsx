import api from "../providers/api";
import { Bio, Filmography } from "../interfaces";

const getMostPopularActors = () =>
  api.get<string[]>("/actors/list-most-popular-celebs");

const getBio = (id: string) =>
  api.get<Bio>("/actors/get-bio", {
    params: { nconst: id },
  });

const getFilmography = (id: string) =>
  api.get<Filmography>("/actors/get-all-filmography", {
    params: { nconst: id },
  });

export const ActorsService = {
  getMostPopularActors,
  getBio,
  getFilmography,
};
