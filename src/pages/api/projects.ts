// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from "path";

type Data = {
  message: string
}

const buildPath = () => {
  return path.join(process.cwd(), "src/pages/data", "data.json");
};

const extractData = (filePath: any) => {
  const jsonData: any = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {

  const { method } = req;
  
  const filePath = buildPath()
  const { projects } = extractData(filePath);
  

  if (method === 'GET') {
    return res.status(200).json(projects)
  }

  // res.status(200).json({ message: 'Hello world!' })
}
