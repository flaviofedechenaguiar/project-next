import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import SwiperCore, { Grid, Navigation } from "swiper";
SwiperCore.use([Grid, Navigation]);

import { MovieCard } from "../MovieCard";
import { SwiperButton } from "../SwiperButton";
import { Film } from "../../interfaces";

import styles from "./ListFilms.module.scss";

interface Props {
  id: string;
  title: string;
  films: Film[];
  onChangePosition?: () => void;
}

export const ListFilms: React.FC<Props> = ({
  title,
  films,
  onChangePosition,
  ...rest
}) => {
  const { id: idModule } = rest;

  const swiperConfig: SwiperProps = {
    onSlideChange: onChangePosition,
    spaceBetween: 22,
    slidesPerView: "auto",
    navigation: {
      nextEl: `#${idModule}-next`,
      prevEl: `#${idModule}-prev`,
    },
    grid: {
      rows: 2,
      fill: "row",
    },
    breakpoints: {
      "376": {
        spaceBetween: 27,
        slidesPerView: 6,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
    },
  };

  return (
    <>
      <section className={styles["list-films"]}>
        <h2>{title}</h2>
        <div className={styles["list-films__swiper-wrapper"]}>
          <Swiper {...swiperConfig}>
            {films.length === 0
              ? [1, 2, 3, 4, 5, 6].map((element) => (
                  <SwiperSlide key={element} className="swiper-auto">
                    <div className={styles["loading-card"]}></div>
                  </SwiperSlide>
                ))
              : null}
            {films.map((film, index) => {
              return (
                <SwiperSlide key={index} className="swiper-auto">
                  <MovieCard
                    imageUrl={film?.image?.url}
                    name={film.title}
                    year={film.year}
                    redirectLink={`/detail/${film.id}`}
                  />
                </SwiperSlide>
              );
            })}
            <SwiperSlide className="swiper-auto">
              <div className={styles["loading-card"]}></div>
            </SwiperSlide>
          </Swiper>
          <SwiperButton
            className={`${styles["list-films__swiper-button-next"]}`}
            color={"yellow"}
            direction="next"
            id={`${idModule}-next`}
          />
          <SwiperButton
            className={`${styles["list-films__swiper-button-prev"]}`}
            color={"yellow"}
            direction="prev"
            id={`${idModule}-prev`}
          />
        </div>
      </section>
    </>
  );
};
