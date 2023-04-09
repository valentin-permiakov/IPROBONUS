import { EIcons, Icon } from "@/icons/Icon";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <span>ЛОГОТИП</span>
      <Icon name={EIcons.infoIcon} width={24} height={24} />
    </header>
  );
};
export default Header;
