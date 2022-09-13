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
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === "figopara@gmail.com" && password === "figopara") {
      res.status(200).json({
        token: "123456789",
        authenticated: true,
        message: "Login successful",
        user: { name: "Figopara Admin", email: "figopara@gmail.com" },
      });
    } else {
      res.status(401).json({
        authenticated: false,
        message: "Email veya Parola Hatalı!",
      });
    }
  }
}
