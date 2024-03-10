import { getPost } from "@/services/notion";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

import ReactMarkdown from "react-markdown";
import CopyCode from "./components/copy-code";
import { FaCode } from "react-icons/fa";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  console.log(post);

  return (
    <div className="w-full dark:bg-zinc-950 px-20 py-16 bg-zinc-100 min-h-screen ">
      <div className="mx-auto container  dark:bg-zinc-900 bg-zinc-200 shadow-md p-6 min-h-full">
        <div className="flex w-full items-center justify-end">
          <Link
            href={"/blog"}
            className="flex items-center text-end hover:text-slate-500"
          >
            <IoIosArrowRoundBack size={20} />
            voltar
          </Link>
        </div>
        <h1 className="text-4xl py-6">{post.title}</h1>
        <div className="w-full h-[1px] bg-zinc-950 dark:bg-zinc-500" />

        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-xl flex my-5" {...props} />
            ),
            code: ({ node, ...props }) => (
              <pre
                className=" flex p-6 pt-8 rounded-md bg-slate-700 text-zinc-100 dark:bg-slate-950 
                            shadow-md overflow-x-scroll overscroll-x-contain my-10 relative"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <FaCode className="absolute top-2 left-4 opacity-40" />
                <CopyCode>
                  <code
                    className="text-sm dark:text-slate-500 text-zinc-100 overflow-hidden p-1 rounded-md my-10"
                    {...props}
                  />
                </CopyCode>
              </pre>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
