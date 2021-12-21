import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Image from "next/image";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useFilms } from "../../hooks/useFilms";

import styles from "./DetailFilm.module.scss";

export const DetailFilm: React.FC = function () {
  const router = useRouter();
  const { getDetailFilm, detailFilm } = useFilms();
  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id.toString();
      getDetailFilm(id);
    }
  }, [router]);

  return (
    <>
      <main className={styles["detail-film"]}>
        <div
          className={`${!detailFilm ? "loading" : null} ${
            styles["detail-film__banner-wrapper"]
          }`}
        >
          {detailFilm ? (
            <Image
              alt={detailFilm.title}
              src={detailFilm.banner.url}
              layout="fill"
              objectFit="cover"
            />
          ) : null}

          <div
            className={`${!detailFilm ? "loading" : null} ${
              styles["detail-film__card-wrapper"]
            }`}
          >
            {detailFilm ? (
              <Image
                alt={detailFilm.title}
                src={detailFilm.image.url}
                layout="fill"
                objectFit="cover"
              />
            ) : null}
          </div>
        </div>
        <div className={styles["detail-film__title"]}>
          <p>{detailFilm?.title}</p>
          <div className={styles["detail-film__classification"]}>
            <Image
              src={"/icons/star-icon.png"}
              alt="icone de estrela"
              width={33}
              height={33}
            />
            <span>{detailFilm ? detailFilm.ratings.rating : "?"}/10</span>
            <span>IMDb</span>
          </div>
        </div>
        <section className={styles["detail-film__text"]}>
          <h2>Visão geral</h2>
          {console.log(detailFilm)}
          <p>{detailFilm?.summary?.text}</p>
        </section>
      </main>
    </>
  );
};
