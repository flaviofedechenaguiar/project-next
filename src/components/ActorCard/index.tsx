import Image from "next/image";

import styles from "./ActorCard.module.scss";

interface Props {
  imageUrl: string;
  name: string;
  quantityMovies: number;
}

export const ActorCard: React.FC<Props> = ({
  imageUrl,
  name,
  quantityMovies,
}) => {
  return (
    <>
      <div className={styles["actor-card"]}>
        <div className={styles["actor-card__image-wrapper"]}>
          <Image alt={name} src={imageUrl} layout="fill" objectFit="contain" />
        </div>
        <h4>{name}</h4>
        <span>{quantityMovies}</span>
      </div>
    </>
  );
};
