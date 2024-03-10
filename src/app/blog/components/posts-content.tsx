import React, { useEffect, useState } from "react";
import Posts from "../page";
import { postsSection } from "@/services/hygraph-query";

export interface PostProps {
  description: string;
  id: string;
  introduction: string;
  url: string;
}

export default function PostsContent() {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const res = await postsSection();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };

    getPostsData();
  }, []);

  return (
    <div>
      {/* Verifique se data está definido antes de passá-lo para Posts */}
      {data && <Posts data={data} />}
    </div>
  );
}
