/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getToken } from "@/utils/getToken";
import { PointsData, getPointsData } from "@/utils/getPointsData";
import Header from "@/components/Header/Header";
import BonusContainer from "@/components/BonusContainer/BonusContainer";
import Container from "@/components/Container/Container";
import Head from "next/head";

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
        try {
          const pointsResponse = await getPointsData(token);
          setBonusData(pointsResponse.data);
          setLoading(false);
        } catch (error: any) {
          console.log(error.message);
          setError(error.message);
        }
      }
    }
    loadData();
  }, [token]);

  return (
    <>
      <Head>
        <title>IPROBONUS</title>
      </Head>
      <div className={styles.main}>
        <Header />
        {error && <Container>{error}</Container>}
        {!error && loading && <Container>Загружаем данные...</Container>}
        {bonusData && (
          <Container>
            <BonusContainer
              currentQuantity={bonusData.currentQuantity}
              dateBurning={bonusData.dateBurning}
              forBurningQuantity={bonusData.forBurningQuantity}
              typeBonusName={bonusData.typeBonusName}
            />
          </Container>
        )}
      </div>
    </>
  );
};

export default Home;
