import React from "react";
import InfoIcon from "./InfoIcon";
import BurnIcon from "./BurnIcon";
import NextIcon from "./NextIcon";

export enum EIcons {
  infoIcon = "InfoIcon",
  burnIcon = "BurnIcon",
  nextIcon = "NextIcon",
}

interface IIconProps {
  name: EIcons;
  height?: number;
  width?: number;
}

export const Icon = ({ name, width = 24, height = 24 }: IIconProps) => {
  const icons = {
    InfoIcon: <InfoIcon width={width} height={height} />,
    BurnIcon: <BurnIcon width={width} height={height} />,
    NextIcon: <NextIcon width={width} height={height} />,
  };
  return <span style={{ width: width, height: height }}>{icons[name]}</span>;
};
