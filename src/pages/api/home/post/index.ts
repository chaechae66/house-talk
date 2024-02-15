import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const db = (await connectDB).db("house-talk");
    if (req.method == "POST") {
      const body = JSON.parse(req.body);
      if (!body.text) {
        res
          .status(400)
          .json({ success: false, message: "포스트 내용을 적어주세요." });
      }
      body.date = Date.now();
      db.collection("post").insertOne(body);
      return res.status(200).json({ success: true });
    } else if ((req.method = "GET")) {
      const result = await db
        .collection("post")
        .find()
        .sort({
          date: -1,
        })
        .toArray();
      return res.status(200).json({ success: true, result: result });
    } else {
      res
        .status(405)
        .json({ success: false, message: "메서드가 올바르지 않습니다." });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("서버에러");
  }
}
