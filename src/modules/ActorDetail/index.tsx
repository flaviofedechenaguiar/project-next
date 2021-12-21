import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Image from "next/image";

import styles from "./ActorDetail.module.scss";
import { ListFilms } from "../../components/ListFilms";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActors } from "../../hooks/useActors";
import { dateToAge } from "../../Utils/DateToAge";

export const ActorDetail: React.FC = () => {
  const router = useRouter();
  const { getBioActor, getAllFilmography, bioActor, filmography } = useActors();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id.toString();
      getBioActor(id);
      getAllFilmography(id);
    }
  }, [router]);

  return (
    <>
      <Header />
      <main className={styles["actor-detail"]}>
        <section className={styles["actor-detail__perfil"]}>
          <div className={styles["actor-detail__image-wrapper"]}>
            {bioActor ? (
              <Image
                alt={bioActor.name}
                src={bioActor.image.url}
                layout="fill"
                objectFit="cover"
              />
            ) : null}
          </div>
          <div className={styles["actor-detail__info"]}>
            <h2>{bioActor?.name}</h2>
            <span>
              {bioActor
                ? `${dateToAge(new Date(bioActor?.birthDate))} anos`
                : null}
            </span>
            <span>{bioActor?.birthPlace}</span>
          </div>
        </section>
        <section className={styles["actor-detail__bio"]}>
          <h2>Biografia</h2>
          <p>{bioActor?.miniBios[0].text}</p>
        </section>
        <section className={styles["actor-detail__filmography-wrapper"]}>
          <ListFilms
            id={"films-detail-actor"}
            title={"Filmografia"}
            films={filmography}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};
