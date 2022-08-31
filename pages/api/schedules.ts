import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { country } = req.query;
  const response = await fetch(
    `https://api.tvmaze.com//schedule?country=${country}`
  );
  const schedules = await response.json();

  res.json(schedules);
};

export default handler;
