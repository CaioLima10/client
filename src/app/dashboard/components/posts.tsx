import Image from "next/image";
import { FaPaperPlane, FaRegComment, FaThumbsUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IPostsData } from "@/utils/types/post-types";
import api from "@/services/api";
import Comment from "./comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { CommentsData } from "@/utils/types/comments-types";
import ImageUser from "./image-user";

interface LikesData {
  likes_user_id: number;
  likes_post_id: number;
  username: string;
}

export default function Posts({ post }: { post: IPostsData }) {
  const [user, setUser] = useState<IPostsData>();

  const [comment_desc, setComment_desc] = useState("");
  const [comments, setComments] = useState<CommentsData[]>([]);
  const [liked, setLiked] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const [limitComments, setLimitComments] = useState(3);
  const [showComments, setShowComments] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const query = useQueryClient();

  useEffect(() => {
    const valueUser = localStorage.getItem("site-courses:user");
    if (valueUser) {
      setUser(JSON.parse(valueUser));
    }
  }, []);

  const likesQuery = useQuery<LikesData[] | undefined>({
    queryKey: ["likes", post.id],
    queryFn: () =>
      api.get("/likes/?likes_post_id=" + post.id).then((res) => res.data.data),
    enabled: !!post.id,
  });

  useEffect(() => {
    if (likesQuery.data) {
      const likedByUser = likesQuery.data.some(
        (like) => like.likes_user_id === user?.id
      );
      setLiked(likedByUser);
    }
  }, [likesQuery.data, user]);

  if (likesQuery.error) {
    console.log(likesQuery.error);
  }

  const likesMutation = useMutation({
    mutationFn: async (newLikes: {}) => {
      if (liked) {
        await api
          .delete(`/likes/?likes_post_id=${post.id}&likes_user_id=${user?.id}`)
          .then((res) => {
            setLiked(false);
            return res.data;
          });
      } else {
        await api.post("/likes/", newLikes).then((res) => {
          setLiked(false);
          return res.data;
        });
      }
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["likes", post.id] });
    },
  });

  const shareLikes = async () => {
    likesMutation.mutate({
      likes_user_id: user?.id,
      likes_post_id: post.id,
      username: user?.id,
    });
  };

  // POST COMMENTS

  const commentsMutation = useMutation({
    mutationFn: async (newComment: {}) => {
      await api.post("comment/", newComment).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["comments", post.id] });
      setComment_desc("");
      setComments((prevComments: CommentsData[]) => [
        ...prevComments,
        {
          comment_desc,
          comment_user_id: user?.id,
          post_id: post.id,
        } as CommentsData,
      ]);
    },
  });

  const shareComment = () => {
    commentsMutation.mutate({
      comment_desc,
      comment_user_id: user?.id,
      post_id: post.id,
    });
    setComment_desc("");
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await api.get(`/comment/?post_id=${post.id}`);
        setComments(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [post.id]);

  const limitedComments = async () => {
    const newLimit = limitComments + 3;

    if (newLimit < 0) return;

    await api
      .get(`/comment?post_id=${post.id}&per_page=${newLimit}`)
      .then((response) => {
        setComments(response.data.data);
        setLimitComments(newLimit);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="w-full flex items-center justify-center mt-4 ">
      <div className="w-full sm:w-3/4 bg-zinc-100 dark:bg-zinc-700 shadow-md p-5">
        <div className="flex items-center gap-2">
          <ImageUser post={post} />
          <div className="flex flex-col">
            <span className="font-semibold text-sm ">{post.username}</span>
            <small>{moment(post.created_at).fromNow()}</small>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-400 dark:bg-slate-400 mt-2 mb-5" />

        <span className="font-medium text-lg ">{post.post_desc}</span>
        <span>{post.userImg}</span>
        {post.img && (
          <Image
            src={`./upload/${post.img}`}
            alt="IMAGE-DE-TESTE"
            width={300}
            height={300}
            priority
          />
        )}

        <div className="flex items-center justify-between gap-10 mt-5 w-64 ">
          <div>
            {likesQuery.data && likesQuery.data.length > 0 && (
              <div className="relative">
                <span className="flex items-center gap-2">
                  <FaThumbsUp
                    onMouseEnter={() => setShowLiked(true)}
                    onMouseLeave={() => setShowLiked(false)}
                    size={24}
                    className="bg-teal-500 p-1 rounded-full text-zinc-100 cursor-pointer"
                  />{" "}
                  <span>{likesQuery.data.length} </span>
                </span>
                {showLiked && (
                  <div className="absolute bg-zinc-50 dark:bg-zinc-600 p-2 shadow-md minh-20 min-w-32">
                    {likesQuery.data.map((like) => (
                      <small
                        key={like.likes_user_id}
                        className="flex p-1 gap-1"
                      >
                        <FaThumbsUp
                          size={20}
                          className="bg-teal-500 p-1 rounded-full text-zinc-100"
                        />
                        {like.username}
                      </small>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            onMouseEnter={() => setShowComments(!showComments)}
            className="flex items-center gap-2"
          >
            {showComments ? (
              <span className="text-blue-500 font-medium">
                Comentarios {comments.length}
              </span>
            ) : (
              <span>Comentarios {comments.length}</span>
            )}
          </button>
        </div>
        <div className="w-full h-[1px] bg-slate-400 dark:bg-slate-400 mt-2 mb-2" />

        <div className="mt-6 flex items-center justify-between w-64 ">
          <button
            className={`flex items-center gap-2 ${liked ? "text-blue-500" : ""}`}
            onClick={() => shareLikes()}
          >
            <FaThumbsUp /> Curtir
          </button>
          <button
            onClick={() => inputRef.current?.focus()}
            className="flex items-center justify-center gap-2 p-1 rounded-md
                      dark:focus:bg-zinc-800 focus:bg-blue-500 duration-700"
          >
            <FaRegComment /> Comentar
          </button>
        </div>

        {showComments && (
          <>
            {comments.slice(0, limitComments).map((comment) => (
              <Comment key={comment.id} comments={comment} />
            ))}
            {comments.length > limitComments && (
              <button
                onClick={limitedComments}
                className="w-full flex items-center justify-center rounded-md mt-4 
                      bg-gradient-to-br dark:from-zinc-600 from-customGreen to-blue-500  
                      text-zinc-50 text-sm py-1"
              >
                ver mais posts
              </button>
            )}
          </>
        )}
        <div
          className="mt-5 flex items-center justify-center gap-2
                      bg-zinc-300 dark:bg-zinc-600 p-2 rounded-l-3xl"
        >
          <ImageUser post={post} />
          <input
            ref={inputRef}
            type="text"
            className="w-full h-12 px-4 shadow-xl rounded-3xl"
            onChange={(event) => setComment_desc(event.target.value)}
            value={comment_desc}
          />
          <button onClick={() => shareComment()}>
            <FaPaperPlane size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
