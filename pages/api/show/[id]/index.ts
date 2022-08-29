import { NextApiRequest, NextApiResponse } from "next";
import { Show } from "../../../../interfaces";

type Props = {
  item?: Show;
  errors?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  const showResponse = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await showResponse.json();

  res.json(show);
};

export default handler;
