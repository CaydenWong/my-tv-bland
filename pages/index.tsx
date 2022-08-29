import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout
      metadata={{ title: "Homepage" }}
      header={<p>Home Page</p>}
      loading={false}
    >
      <p>This is coming soon</p>
    </Layout>
  );
};

export default HomePage;
