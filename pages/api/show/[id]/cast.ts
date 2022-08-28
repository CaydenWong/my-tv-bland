import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  const showResponse = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
  const casts = await showResponse.json();

  res.json(casts);
};

export default handler;
