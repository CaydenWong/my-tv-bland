import Layout from "../components/layout";
import ScheduleComponent from "../components/schedule";
import styles from "../styles/page.module.scss";
import { Schedule } from "../interfaces";
import uniqBy from "lodash/uniqBy";

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=2"
  );
  const results = await fetch(`http://localhost:3000/api/schedules/`);
  return { props: { data: results.ok ? await results.json() : [] } };
}

const SchedulesPage = ({ data }) => {
  const schedules: Schedule[] = uniqBy(data, ({ show }) => show.id);

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
