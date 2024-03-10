"use client";
import Header from "@/app/dashboard/components/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ImgAstronautSaturn from "../../assets/astronauta-sentado-no-planeta (1).png";
import CourseMenu from "./components/course-menu";
import VideoLessons from "./components/video-lessons";
import Feed from "./components/feed";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";

export default function Home() {
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const { data, error, isSuccess, isError } = useQuery({
    queryKey: ["refresh"],
    queryFn: () =>
      api.get("auth/refresh").then((response) => {
        return response.data;
      }),
    retry: false,
    refetchInterval: 60 * 50 * 1000,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data.msg);
      setTimeout(() => {
        setIsLoading(false);
        setIsUserAuthenticated(true);
      }, 3000);
    }
    if (isError) {
      console.log(error);
      navigate.push("/login");
    }
  }, [isSuccess, isError, data, error, navigate]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Image
            src={ImgAstronautSaturn}
            alt="ASTRONAUTA-SATURNO"
            width={140}
            height={140}
            loading="lazy"
            className="animate-bounce"
          />
        </div>
      ) : (
        isUserAuthenticated && (
          <>
            <Header />
            <VideoLessons>
              <CourseMenu
                title="AULA 00 | INTRODUÇÃO AO APRENDIZADO"
                time="tempo-total: 3hr e 10min"
              />
            </VideoLessons>
            <Feed />
          </>
        )
      )}
    </>
  );
}
