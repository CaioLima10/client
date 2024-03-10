import { UserDataContext } from "@/hooks/user-context-custom";
import api from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ImageUser from "./image-user";
import { IPostsData } from "@/utils/types/post-types";

export default function PostShare(post: IPostsData) {
  const { user } = UserDataContext();
  const [post_desc, setPost_desc] = useState("");

  const query = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newPost: {}) => {
      await api.post("/post", newPost).then((result) => {
        return result.data;
      });
    },
    onSuccess: () => {
      query.refetchQueries({ queryKey: ["post"] });
      setPost_desc("");
    },
  });
  const sharedPost = async () => {
    mutation.mutate({ post_desc, userId: user?.id });
    setPost_desc("");
  };

  return (
    <div className="w-full flex items-center justify-center mt-4">
      <div className="w-full sm:w-3/4 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-700 shadow-md p-5">
        <div className="mt-5 w-full flex items-center justify-center gap-2 bg-zinc-300 dark:bg-zinc-600 p-2 rounded-l-3xl">
          <ImageUser post={post} />
          <input
            placeholder={`No que esta pensando ${user?.username}`}
            type="text"
            value={post_desc}
            onChange={(event) => setPost_desc(event.target.value)}
            className="w-full h-12 px-4 shadow-xl rounded-3xl"
          />
          <button onClick={() => sharedPost()}>
            <FaPaperPlane size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
