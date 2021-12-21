import { useEffect } from "react";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListActors } from "../../components/ListActors";
import { ListFilms } from "../../components/ListFilms";

import { useActors } from "../../hooks/useActors";
import { useFilms } from "../../hooks/useFilms";

import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  const { getAllActors, addActorIntoActors, actors } = useActors();
  const {
    getAllFilms,
    getAllReleases,
    getBanners,
    films,
    banners,
    releaseFilms,
    addFilmIntoFilms,
    addFilmIntoFilmsRelease,
  } = useFilms();

  useEffect(() => {
    getAllFilms();
    getAllReleases();
    getAllActors();
    getBanners();
  }, []);

  return (
    <>
      <main className={styles["home"]}>
        <Banner banners={banners} />
        <div className={styles["home__popular-films-wrapper"]}>
          <ListFilms
            id="popular-list"
            title="Filmes populares"
            films={films}
            onChangePosition={addFilmIntoFilms}
          />
        </div>
        <div className={styles["home__next-releases-wrapper"]}>
          <ListFilms
            id="next-releases-list"
            title="Próximos lançamentos"
            films={releaseFilms}
            onChangePosition={addFilmIntoFilmsRelease}
          />
        </div>
        <div className={styles["home__popular-actors-wrapper"]}>
          <ListActors
            id="actor-list"
            title="Atores populares"
            actors={actors}
            onChangePosition={addActorIntoActors}
          />
        </div>
      </main>
    </>
  );
};
