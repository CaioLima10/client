import Header from "../components/header";
import Image from "next/image";
import { getPosts } from "@/services/notion";
import Link from "next/link";
import Skeleton from "./skeleton";
import moment from "moment";
import { Concert_One } from "next/font/google";
import { HiArrowLongLeft } from "react-icons/hi2";
import Footer from "../components/footer";

const concert = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

export default async function Posts() {
  const posts = await getPosts();
  const ultimoPost = posts.slice(-1)[0];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-emerald-400 to-blue-500 shadow-sm  w-full h-screen flex flex-col h-screen-header-posts">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1
            className={`${concert.className} text-5xl  text-zinc-950 font-bold `}
          >
            Blog
          </h1>
          <h3 className={`mt-4 text-2xl  text-zinc-950`}>
            Informações sobre programação e novidades de cursos, <br />
            conquiste seus objetivos e aumente sua chance como dev
          </h3>
        </div>
      </div>
      <div className="w-full min-h-screen flex dark:bg-zinc-950 bg-zinc-50  relative">
        <div className="container m-auto px-5 sm:px-20">
          <div
            className="w-full min-h-96 hover:translate-y-2 duration-400 flex flex-col 
              dark:bg-zinc-900/10 rounded-xl dark:shadow-black/40 shadow-zinc-400 dark:shadow-xl shadow-md my-14"
          >
            {ultimoPost && (
              <div>
                {ultimoPost.text.rich_text.map((acc, index) => (
                  <div key={index}>
                    {ultimoPost.img &&
                      ultimoPost.img.files &&
                      ultimoPost.img.files.length > 0 && (
                        <div className="relative flex w-full h-56 rounded-md z-10">
                          <div>
                            <Image
                              className=" w-full h-96 rounded-tl-xl z-10 relative"
                              src={ultimoPost.img.files[0].file.url}
                              alt={ultimoPost.title.title[0].text.content}
                              width={600}
                              height={500}
                              priority={true}
                            />
                          </div>
                          <div className=" text-2xl"></div>
                          <div
                            className="flex items-center justify-center rounded-full h-8 w-36 text-zinc-100 font-medium 
                                          shadow-md bg-gradient-to-r from-red-700 via-cyan-800 
                                          to-cyan-500 z-50 absolute left-4 top-4"
                          >
                            Novo
                          </div>
                          <div className="w-1/2 flex-1 flex rounded-tr-xl flex-col px-10 py-14 gap-6">
                            {ultimoPost.title.title.map((acc, index) => (
                              <div key={index}>
                                <h1 className="text-3xl mb-2">
                                  {acc.text.content}
                                </h1>
                                <div className="w-full h-[1px] bg-zinc-100" />
                              </div>
                            ))}
                            <span className="text-xl text-zinc-700 dark:text-zinc-400">
                              {acc.text.content}
                            </span>
                            <Link
                              className="text-sm text-slate-500 mx-4 font-semibold"
                              href={`/blog/${ultimoPost.slug.rich_text.map(
                                (text) => text.plain_text
                              )}`}
                            >
                              <p className="flex items-center text-base gap-2">
                                <HiArrowLongLeft />
                                ler posts
                              </p>
                            </Link>
                            <p className="text-sm flex items-center justify-end mr-4 mb-4 text-slate-500">
                              {moment(ultimoPost.created_at)
                                .locale("pt")
                                .fromNow()}
                            </p>
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
            {posts.map((post) => (
              <ul
                className="w-full min-h-96 hover:translate-y-2 duration-400 flex flex-col 
              dark:bg-zinc-900/10 rounded-xl dark:shadow-black/40 shadow-zinc-400 dark:shadow-xl shadow-md mb-10"
                key={post.id}
              >
                <Skeleton>
                  {post.img.files.length > 0 && (
                    <div className="relative w-full h-56 rounded-md">
                      <Image
                        className="rounded-tl-xl rounded-tr-xl"
                        src={post.img.files[0].file.url}
                        alt={post.title.title[0].text.content}
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                      />
                    </div>
                  )}
                </Skeleton>
                <div className="w-full flex items-center justify-between mt-2">
                  <Link
                    className="text-sm text-slate-500 mx-4 font-semibold"
                    href={`/blog/${post.slug.rich_text.map(
                      (text) => text.plain_text
                    )}`}
                  >
                    {post.title.title.map((text) => text.plain_text)}
                  </Link>
                </div>
                <li className="flex space-x-2">
                  {post.tags.multi_select.map((tag) => (
                    <span
                      className="text-sm text-zinc-700 mx-4 mb-4"
                      key={tag.id}
                    >
                      {tag.name}
                    </span>
                  ))}
                </li>

                {post.text.rich_text.map((text, index) => (
                  <p
                    key={index}
                    className="mb-10 mt-4 ml-4 text-xl text-zinc-700 dark:text-zinc-400"
                  >
                    {text.text.content}
                  </p>
                ))}
                <p className="text-sm flex items-center justify-end mr-4 mb-4 text-slate-500">
                  {moment(post.created_at).locale("pt").fromNow()}
                </p>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
