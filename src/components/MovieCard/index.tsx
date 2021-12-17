import Image from "next/image";

import styles from "./MovieCard.module.scss";

interface Props {
  name: string;
  year: string;
  imageUrl: string;
}

export const MovieCard: React.FC<Props> = ({ name, year, imageUrl }) => {
  return (
    <>
      <div className={styles["movie-card"]}>
        <div className={styles["movie-card__image-wrapper"]}>
          <Image alt={name} src={imageUrl} layout="fill" objectFit="contain" />
        </div>
        <div className={styles["movie-card__wrapper-text"]}>
          <h4>{name}</h4>
          <span>{year}</span>
        </div>
      </div>
    </>
  );
};
