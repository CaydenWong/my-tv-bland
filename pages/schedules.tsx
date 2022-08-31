import Layout from "../components/layout";
import ScheduleComponent from "../components/schedule";
import styles from "../styles/page.module.scss";
import { Schedule } from "../interfaces";
import uniqBy from "lodash/uniqBy";
import { useContext, useEffect } from "react";
import { setCookie } from "cookies-next";
import { CountryContext } from "./_app";
import { useRouter } from "next/router";

export async function getServerSideProps({ req, res }) {
  const country = req.cookies["country"];
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const results = await fetch(
    `http://localhost:3000/api/schedules/?country=${country}`
  );
  return { props: { data: results.ok ? await results.json() : [] } };
}

const SchedulesPage = ({ data }) => {
  const router = useRouter();
  const schedules: Schedule[] = uniqBy(data, ({ show }) => show.id);
  const { country } = useContext(CountryContext);
  useEffect(() => {
    console.log("Country was set:", country);
    setCookie("country", country);
    (async () => {
      await router.replace(router.asPath);
    })();
  }, [country]);
  setCookie("country", country);

  return (
    <Layout
      metadata={{ title: "schedule" }}
      header={
        <p className={styles.schedule__header}>
          TV Show and web series database. <br /> Create personalised schedules.
          Episode guide, cast, crew and character information.
        </p>
      }
      loading={false}
    >
      <div className={styles.schedule__main__overlay} />
      <div className={styles.schedule__main}>
        <div className={styles.schedule__title}> Last Added Shows </div>
        <div className={styles.schedule__panel}>
          {schedules.map((schedule) => (
            <ScheduleComponent key={schedule.id} schedule={schedule} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SchedulesPage;
