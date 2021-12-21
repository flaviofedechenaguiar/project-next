import React from "react";
import styles from "./Container.module.scss";
export const Container: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["container__content"]}>{children}</div>
      </div>
    </>
  );
};
