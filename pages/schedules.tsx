import Layout from "../components/layout";
import ScheduleCard from "../components/scheduleCard";
import styles from "../styles/schedule.module.scss";
import { useEffect, useState } from "react";
import { Schedule } from "../interfaces";

const SchedulesPage = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const results = await fetch(`/api/schedules`);
      if (results.ok) {
        setSchedules(await results.json());
        setLoading(false);
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
      loading={loading}
    >
      <div className={styles.page__container}>
        <div className={styles.page__main_overlay} />
        <div className={styles.page__main}>
          <div className={styles.page__title}> Last Added Shows </div>
          <div className={styles.page__schedules}>
            {schedules.map((schedule) => (
              <ScheduleCard key={schedule.id} schedule={schedule} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchedulesPage;
