import { EIcons, Icon } from "@/icons/Icon";
import { PointsData } from "@/utils/getPointsData";
import React from "react";
import BurningData from "./BurningData/BurningData";
import styles from "./bonusContainer.module.scss";

type BonusContainerProps = PointsData;

const BonusContainer: React.FC<BonusContainerProps> = ({
  currentQuantity,
  dateBurning,
  forBurningQuantity,
}) => {
  return (
    <>
      <div>
        <span className={styles.quantity}>{currentQuantity} бонусов</span>
        <BurningData
          dateBurning={dateBurning}
          forBurningQuantity={forBurningQuantity}
        />
      </div>
      <button className={styles.infoBtn}>
        <Icon name={EIcons.nextIcon} width={35} height={35} />
      </button>
    </>
  );
};
export default BonusContainer;
