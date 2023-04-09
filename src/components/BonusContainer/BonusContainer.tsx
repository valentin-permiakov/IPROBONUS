import { EIcons, Icon } from "@/icons/Icon";
import { PointsData } from "@/utils/getPointsData";
import React from "react";
import BurningData from "./BurningData/BurningData";

type BonusContainerProps = PointsData;

const BonusContainer: React.FC<BonusContainerProps> = ({
  currentQuantity,
  dateBurning,
  forBurningQuantity,
}) => {
  return (
    <div>
      <span>{currentQuantity} бонусов</span>
      <Icon name={EIcons.nextIcon} width={35} height={35} />
      <BurningData
        dateBurning={dateBurning}
        forBurningQuantity={forBurningQuantity}
      />
    </div>
  );
};
export default BonusContainer;
