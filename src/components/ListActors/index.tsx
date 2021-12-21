import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import SwiperCore, { Grid, Navigation } from "swiper";
SwiperCore.use([Grid, Navigation]);

import { ActorCard } from "../ActorCard";

import styles from "./ListActors.module.scss";
import { SwiperButton } from "../SwiperButton";
import { Bio } from "../../interfaces";
import { dateToAge } from "../../Utils/DateToAge";

interface Props {
  id: string;
  title: string;
  actors: Bio[];
  onChangePosition?: () => void;
}

export const ListActors: React.FC<Props> = ({
  title,
  actors,
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
        spaceBetween: 28,
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
      <section className={styles["list-actors"]}>
        <h2>{title}</h2>
        <div className={styles["list-actors__swiper-wrapper"]}>
          <Swiper {...swiperConfig}>
            {actors.map((actor, index) => {
              return (
                <SwiperSlide key={index} className="swiper-auto">
                  <ActorCard
                    imageUrl={actor.image.url}
                    name={actor.name}
                    age={dateToAge(new Date(actor.birthDate))}
                    redirectLink={`/actor-detail/${actor.id}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SwiperButton
            className={styles["list-actors__swiper-button-next"]}
            color={"yellow"}
            direction="next"
            id={`${idModule}-next`}
          />
          <SwiperButton
            className={styles["list-actors__swiper-button-prev"]}
            color={"yellow"}
            direction="prev"
            id={`${idModule}-prev`}
          />
        </div>
      </section>
    </>
  );
};
