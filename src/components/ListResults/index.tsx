import { Film } from "../../interfaces";
import { MovieCard } from "../MovieCard";
import styles from "./ListResults.module.scss";

interface Props {
  films: Film[];
}

export const ListResults: React.FC<Props> = ({ films }) => {
  return (
    <>
      <section className={styles["list-results"]}>
        <h2>Resultados</h2>
        <div className={styles["list-results__container"]}>
          {films.map((film, index) => (
            <MovieCard
              imageUrl={film.image ? film.image.url : undefined}
              name={film.title}
              year={film.year}
              redirectLink={`/detail/${film.id}`}
              key={index}
            />
          ))}

          {[1, 2, 3, 4, 5, 6].map((element, index) => {
            return (
              <div className={styles["invisible-element"]} key={index}></div>
            );
          })}
        </div>
      </section>
    </>
  );
};
