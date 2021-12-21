import Image from "next/image";
import Link from "next/link";

import styles from "./MovieCard.module.scss";

interface Props {
  name: string;
  year: number;
  imageUrl: string | null | undefined;
  redirectLink: string;
}

export const MovieCard: React.FC<Props> = ({
  name,
  year,
  imageUrl,
  redirectLink,
}) => {
  return (
    <>
      <Link href={redirectLink}>
        <a>
          <div className={styles["movie-card"]}>
            <div className={styles["movie-card__image-wrapper"]}>
              {!imageUrl ? (
                <Image
                  alt={"no image"}
                  src={"/no-image.png"}
                  layout="fill"
                  objectFit="cover"
                />
              ) : null}
              {imageUrl ? (
                <Image
                  alt={name}
                  src={imageUrl}
                  layout="fill"
                  objectFit="cover"
                />
              ) : null}
            </div>
            <div className={styles["movie-card__wrapper-text"]}>
              <h4>{name}</h4>
              <span>{year}</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
