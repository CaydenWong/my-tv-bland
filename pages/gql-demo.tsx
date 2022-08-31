import { dehydrate, useQuery } from "react-query";
import Layout from "../components/layout";

import { queryClient, getSchedules } from "../src/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("schedules", () => getSchedules());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function GqlDemo() {
  const { data } = useQuery(["schedules"], () => getSchedules());
  return (
    <Layout metadata={{ title: "testing" }} header={<div />} loading={false}>
      <h1>Query for schedules</h1>
      <h2>Results:</h2>

      <p>{JSON.stringify(data)}</p>
    </Layout>
  );
}
