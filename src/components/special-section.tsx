"use client";

import React from "react";
import Container from "./container";
import AnimeCard from "./anime-card";
import { useGetRecentAnime } from "@/query/get-recent-anime";
import { ROUTES } from "@/constants/routes";

const SpecialSection = () => {
  const { data, isLoading } = useGetRecentAnime();
  if (isLoading) return <LoadingSkeleton />;
  return (
    <Container className="flex flex-col gap-5 py-10 items-center lg:items-start lg:mt-[-10.125rem] z-20 ">
      <h5 className="text-2xl font-bold">Recent Releases</h5>
      <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 w-full gap-5 content-center">
        {data?.results.map((anime, idx) => (
          <AnimeCard
            anime={anime}
            key={idx}
            className="self-center justify-self-center"
            href={`${ROUTES.WATCH}?anime=${
              anime.id
            }&episode=${anime.episodeId?.replace("/", "")}`}
          />
        ))}
      </div>
    </Container>
  );
};

const LoadingSkeleton = () => {
  return (
    <Container className="flex flex-col gap-5 py-10 items-center lg:items-start lg:mt-[-10.125rem] z-20 ">
      <div className="h-10 w-[15.625rem] animate-pulse bg-slate-700"></div>
      <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 w-full gap-5 content-center">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, idx) => {
          return (
            <div
              key={idx}
              className="rounded-xl h-[15.625rem] min-w-[10.625rem] max-w-[12.625rem] md:h-[18.75rem] md:max-w-[12.5rem] animate-pulse bg-slate-700"
            ></div>
          );
        })}
      </div>
    </Container>
  );
};

export default SpecialSection;

