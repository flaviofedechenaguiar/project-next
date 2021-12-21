import Image from "next/image";
import Link from "next/link";
import styles from "./ActorCard.module.scss";

interface Props {
  imageUrl: string;
  name: string;
  age: number;
  redirectLink: string;
}

export const ActorCard: React.FC<Props> = ({
  imageUrl,
  name,
  age,
  redirectLink,
}) => {
  return (
    <>
      <Link href={redirectLink}>
        <a>
          <div className={styles["actor-card"]}>
            <div className={styles["actor-card__image-wrapper"]}>
              <Image
                alt={name}
                src={imageUrl}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h4>{name}</h4>
            <span>{age}</span>
          </div>
        </a>
      </Link>
    </>
  );
};
