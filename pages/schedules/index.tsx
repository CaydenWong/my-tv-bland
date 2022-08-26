import Layout from "../../components/layout";
import Schedule from "../../components/schedule";
import schedules from "../../schedules.json";
import styles from "../../styles/schedule.module.scss";

const SchedulesPage = () => {
  return (
    <Layout
      metadata={{ title: "schedule" }}
      header={
        <p>
          TV Show and web series database. <br /> Create personalised schedules.
          Episode guide, cast, crew and character information.
        </p>
      }
    >
      <div className={styles.page_title}> Last Added Shows </div>
      <div className={styles.page}>
        {schedules.map((schedule) => (
          <Schedule key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </Layout>
  );
};

export default SchedulesPage;
