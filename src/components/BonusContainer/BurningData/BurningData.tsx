import { EIcons, Icon } from "@/icons/Icon";
import { formatDate } from "@/utils/formatDate";
import React from "react";

type BurningDataProps = {
  dateBurning: string;
  forBurningQuantity: number;
};

const BurningData: React.FC<BurningDataProps> = ({
  dateBurning,
  forBurningQuantity,
}) => {
  const date = new Date(dateBurning);
  const formatedDate = formatDate(date);
  return (
    <div>
      <span>{formatedDate} сгорит</span>
      <Icon name={EIcons.burnIcon} width={13} height={17} />
      <span>{forBurningQuantity} бонусов</span>
    </div>
  );
};
export default BurningData;
