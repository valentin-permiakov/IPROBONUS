import { ResultOperation } from "./getToken";

export type PointsData = {
  currentQuantity: number;
  dateBurning: string;
  forBurningQuantity: number;
  typeBonusName: string;
};
export type PointsResponse = {
  resultOperation: ResultOperation;
  data: PointsData;
};

export const getPointsData = async (token: string) => {
  if (!process.env.NEXT_PUBLIC_ACCESS_KEY) {
    throw new Error("Для работы необходим ключ досутпа");
  }

  const response = await fetch(
    `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`,
    {
      method: "GET",
      headers: {
        AccessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
        "content-type": "application/json",
      },
    }
  );

  const data: PointsResponse = await response.json();

  if (data.resultOperation.codeResult !== 0) {
    throw new Error("Что-то пошло не так");
  }
  return data;
};
