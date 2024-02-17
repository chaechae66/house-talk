import type { MongoClient, ObjectId } from "mongodb";

declare global {
  namespace globalThis {
    var _mongo: Promise<MongoClient>;
  }

  interface Window {
    kakao: any;
  }
}

interface Post {
  _id: ObjectId;
  user: User;
  src: null | string;
  text: string;
  date: number;
}

interface User {
  name?: string;
  email?: string;
  image?: string;
}
