import Layout from "../../components/layout";

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
      <div>Schedule Contents</div>
    </Layout>
  );
};

export default SchedulesPage;
