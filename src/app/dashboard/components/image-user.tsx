import { IPostsData } from "@/utils/types/post-types";
import Image from "next/image";
import React from "react";

export default function ImageUser(post: { post: IPostsData }) {
  return (
    <Image
      width={30}
      height={30}
      src={
        post.post.userImg
          ? post.post.userImg
          : "https://img.freepik.com/free-icon/user_318-159711.jpg"
      }
      alt="IMAGE-DO-PERFIL"
    />
  );
}
