import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import SwiperCore, { Grid, Navigation } from "swiper";
SwiperCore.use([Grid, Navigation]);

const swiperConfig: SwiperProps = {
  navigation: {
    nextEl: "#banner-next",
    prevEl: "#banner-prev",
  },
};

import Image from "next/image";
import { SwiperButton } from "../SwiperButton";
import styles from "./Banner.module.scss";
import { Detail } from "../../interfaces";

interface Props {
  banners: Detail[];
}

export const Banner: React.FC<Props> = ({ banners }) => {
  return (
    <>
      <section className={styles["banner"]}>
        <div className={styles["banner__swiper-wrapper"]}>
          <Swiper {...swiperConfig}>
            {banners.map((banner, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles["banner__image-wrapper"]}>
                    <Image
                      alt={banner.title}
                      src={banner.banner.url}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className={styles["banner__text-wrapper"]}>
                      <h2>{banner.title}</h2>
                      <p>{banner.summary ? banner.summary.text : "No Text"}</p>
                    </div>
                    <div className={styles["banner__film-classification"]}>
                      <Image
                        src={"/icons/star-icon.png"}
                        alt="icone de estrela"
                        width={33}
                        height={33}
                      />
                      <span>{banner.ratings.rating}/10</span>
                      <span>IMDb</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SwiperButton
            className={styles["button-next"]}
            color="white"
            direction="next"
            id="banner-next"
          />
          <SwiperButton
            className={styles["button-prev"]}
            color="white"
            direction="prev"
            id="banner-prev"
          />
        </div>
      </section>
    </>
  );
};
