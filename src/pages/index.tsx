/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getToken } from "@/utils/getToken";
import { PointsData, getPointsData } from "@/utils/getPointsData";
import Header from "@/components/Header/Header";
import BonusContainer from "@/components/BonusContainer/BonusContainer";

const Home: React.FC = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [bonusData, setBonusData] = useState<PointsData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setError("");
      try {
        const data = await getToken();

        setToken(data.accessToken);
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
    }
    if (!token) load();
  }, []);

  useEffect(() => {
    async function loadData() {
      if (token) {
        const pointsResponse = await getPointsData(token);
        setBonusData(pointsResponse.data);
        setLoading(false);
      }
    }
    loadData();
  }, [token]);

  return (
    <div className={styles.main}>
      {error && <div>{error}</div>}
      <h1 className={styles.header}>IPROBONUS</h1>
      <Header />
      {loading && <span>loading...</span>}
      {bonusData && (
        <BonusContainer
          currentQuantity={bonusData.currentQuantity}
          dateBurning={bonusData.dateBurning}
          forBurningQuantity={bonusData.forBurningQuantity}
          typeBonusName={bonusData.typeBonusName}
        />
      )}
    </div>
  );
};

export default Home;
