import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const country = "gb";
  const showResponse = await fetch(
    `https://api.tvmaze.com//schedule?country=${country}`
  );
  const show = await showResponse.json();

  res.json(show);
};

export default handler;
