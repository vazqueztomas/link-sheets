import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await res.revalidate("/");

  return res.json({revalidate: true});
}