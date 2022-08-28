import Layout from "../components/layout";
import Schedule from "../components/schedule";
import styles from "../styles/schedule.module.scss";
import { useEffect, useState } from "react";

const SchedulesPage = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetch(`/api/schedules`);
      if (results.ok) {
        setSchedules(await results.json());
      }
    })();
  }, []);

  return (
    <Layout
      metadata={{ title: "schedule" }}
      header={
        <p className={styles.header_container}>
          TV Show and web series database. <br /> Create personalised schedules.
          Episode guide, cast, crew and character information.
        </p>
      }
    >
      <div className={styles.page__container}>
        <div className={styles.page__main_overlay} />
        <div className={styles.page__main}>
          <div className={styles.page__title}> Last Added Shows </div>
          <div className={styles.page__schedules}>
            {schedules.map((schedule) => (
              <Schedule key={schedule.id} schedule={schedule} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchedulesPage;
