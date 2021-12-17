import { SearchInput } from "../SearchInput";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>GazinFilms</h1>
        <SearchInput />
      </header>
    </>
  );
};
