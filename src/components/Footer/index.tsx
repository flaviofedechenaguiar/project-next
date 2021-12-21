import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <p>
          GazinFilms<span> © 2021</span>
        </p>
        <address>
          Desenvolvido por{" "}
          <Link href="https://www.linkedin.com/in/flaviofedechen/">
            <a target="_blank">Flavio Fedechen Aguiar</a>
          </Link>
        </address>
      </footer>
    </>
  );
};
