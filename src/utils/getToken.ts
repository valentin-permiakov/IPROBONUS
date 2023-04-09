export type TokenResponse = {
  result: {
    status: 1 | 2 | 3;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  };
  accessToken: string;
};

export const getToken = async () => {
  if (!process.env.NEXT_PUBLIC_ACCESS_KEY) {
    throw new Error("Для работы необходим ключ досутпа");
  }
  const response = await fetch(
    "http://84.201.188.117:5021/api/v3/clients/accesstoken",
    {
      method: "POST",
      headers: {
        AccessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idClient: process.env.NEXT_PUBLIC_CLIENT_ID,
        accessToken: "",
        paramName: "device",
        paramValue: process.env.NEXT_PUBLIC_DEVICE_ID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      }),
    }
  );

  const data: TokenResponse = await response.json();
  return data;
};
