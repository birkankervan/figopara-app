// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  authenticated: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const token = req.query.token as string;

    if (token === "123456789") {
      res.status(200).json({
        token: "123456789",
        authenticated: true,
        message: "Login successful",
        user: { name: "Figopara Admin", email: "figopara@gmail.com" },
      });
    } else {
      res.status(401).json({
        authenticated: false,
        message: "Wrong token!",
      });
    }
  }
}
