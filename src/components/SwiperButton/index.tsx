import Image from "next/image";

import styles from "./SwiperButton.module.scss";

interface Props {
  color: "white" | "yellow";
  direction: "next" | "prev";
  id?: string;
  className?: string;
}

export const SwiperButton: React.FC<Props> = ({
  color,
  direction,
  ...rest
}) => {
  const { className: classModule, id: idModule } = rest;
  return (
    <>
      {color === "white" ? (
        <>
          {direction === "next" ? (
            <>
              <button
                type={"button"}
                className={`
                swiper-button-next   
                ${styles["button"]}
                ${classModule ? classModule : null}`}
                id={`${idModule ? idModule : null}`}
              >
                <Image
                  src={"/icons/arrow-white-icon.png"}
                  alt="seta de proximo"
                  width={12}
                  height={19}
                />
              </button>
            </>
          ) : null}
          {direction === "prev" ? (
            <>
              <button
                type={"button"}
                className={`
                swiper-button-prev
                ${styles["button"]}
                ${classModule ? classModule : null}`}
                id={`${idModule ? idModule : null}`}
              >
                <Image
                  src={"/icons/arrow-white-icon.png"}
                  alt="seta de proximo"
                  width={12}
                  height={19}
                />
              </button>
            </>
          ) : null}
        </>
      ) : null}
      {color === "yellow" ? (
        <>
          {direction === "next" ? (
            <>
              <button
                type={"button"}
                className={`
                swiper-button-next
                ${styles["button"]}
                ${classModule ? classModule : null}`}
                id={`${idModule ? idModule : null}`}
              >
                <Image
                  src={"/icons/arrow-yellow-icon.png"}
                  alt="seta de proximo"
                  width={12}
                  height={19}
                />
              </button>
            </>
          ) : null}
          {direction === "prev" ? (
            <>
              <button
                type={"button"}
                className={`
                swiper-button-prev
                ${styles["button"]}
                ${classModule ? classModule : null}`}
                id={`${idModule ? idModule : null}`}
              >
                <Image
                  src={"/icons/arrow-yellow-icon.png"}
                  alt="seta de proximo"
                  width={12}
                  height={19}
                />
              </button>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};
