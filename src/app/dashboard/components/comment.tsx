import { UserDataContext } from "@/hooks/user-context-custom";
import moment from "moment";
import Image from "next/image";

interface ICommentsData {
  id: number;
  comment_desc: string;
  comment_user_id: number;
  username: string;
  post_id: number;
  created_at: string;
}

export default function Comment(props: { comments: ICommentsData }) {
  const { comment_desc, created_at, username } = props.comments;

  const user = UserDataContext();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-1 mt-6">
        <Image
          width={28}
          height={28}
          className="rounded-full"
          src={
            user?.user?.userImg
              ? user?.user?.userImg
              : "https://img.freepik.com/free-icon/user_318-159711.jpg"
          }
          alt="FOTO-USUARIO"
        />
        <small>{username}</small>
      </div>
      <div
        className="flex flex-col min-h-20 px-4 py-1 ml-8 rounded-md dark:bg-zinc-800
        bg-zinc-200 text-zinc-950 dark:text-zinc-100 dark:ring-1 dark:ring-zinc-600"
      >
        <small className="mb-3 text-end text-xs">
          {moment(created_at).fromNow()}
        </small>
        <div className="bg-zinc-100 dark:bg-zinc-700 dark:ring-1 dark:ring-zinc-600 shadow-md p-2 rounded-md">
          <span className="font-semibold text-sm ">{comment_desc}</span>
        </div>
      </div>
    </div>
  );
}
