import Image from "next/image";

import styles from "./SearchInput.module.scss";

export const SearchInput: React.FC = () => {
  return (
    <>
      <div className={styles["search-input"]}>
        <input></input>
        <button>
          <Image
            src="/icons/search-icon.svg"
            alt="icone de lupa"
            width={33}
            height={33}
          />
        </button>
      </div>
    </>
  );
};
