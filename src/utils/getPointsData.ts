export type PointsData = {
  currentQuantity: number;
  dateBurning: string;
  forBurningQuantity: number;
  typeBonusName: string;
};
export type PointsResponse = {
  resultOperation: {
    status: 1 | 2 | 3;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  };
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
  return data;
};
