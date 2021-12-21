import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchInput.module.scss";

interface Inputs {
  search: string;
}

export const SearchInput: React.FC = () => {
  const [input, setInput] = useState<Inputs>({ search: "" });
  const router = useRouter();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRedirect = () => {
    const URL_SEARCH = "/search";
    router.push(`${URL_SEARCH}?search=${input.search}`);
  };

  return (
    <>
      <div className={styles["search-input"]}>
        <input
          name="search"
          id="search"
          onChange={handleOnChange}
          value={input.search}
        ></input>
        <button onClick={handleRedirect}>
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
