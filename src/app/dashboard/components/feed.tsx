import Posts from "./posts";
import api from "@/services/api";
import { IPostsData } from "@/utils/types/post-types";
import PostShare from "./post-share";
import { useQuery } from "@tanstack/react-query";

export default function Feed() {
  const { data, isLoading, error } = useQuery<IPostsData[]>({
    queryKey: ["post"],
    queryFn: () =>
      api.get("/post").then((result) => {
        return result.data.data;
      }),
  });

  if (error) {
    console.log(error);
  }

  return (
    <>
      <PostShare />
      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        <div className="w-full flex flex-col">
          {data?.map((post, id) => {
            return <Posts key={id} post={post} />;
          })}
        </div>
      )}
    </>
  );
}
