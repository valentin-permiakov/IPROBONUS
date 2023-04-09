import { EIcons, Icon } from "@/icons/Icon";
import React from "react";
import styles from "./header.module.scss";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>ЛОГОТИП</h2>
      <button className={styles.infoBtn}>
        <Icon name={EIcons.infoIcon} width={24} height={24} />
      </button>
    </header>
  );
};
export default Header;
