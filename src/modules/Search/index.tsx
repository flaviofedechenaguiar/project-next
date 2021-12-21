import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListResults } from "../../components/ListResults";
import { useFilms } from "../../hooks/useFilms";

import styles from "./Search.module.scss";

export const Search: React.FC = () => {
  const { findFilms, films } = useFilms();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const search = router.query.search.toString();
      if (!search) {
        router.push("/");
        return;
      }
      findFilms(search);
    }
  }, [router]);

  return (
    <>
      <Header />
      <main className={styles["search"]}>
        <ListResults films={films} />
      </main>
      <Footer />
    </>
  );
};
