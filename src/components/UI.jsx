import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "portfolio-02",
  "portfolio-03",
  "portfolio-04",
  "portfolio-05",
  "portfolio-06",
  "portfolio-07",
  "portfolio-08",
  "portfolio-09",
  "portfolio-10",
  "portfolio-11",
  "portfolio-12",
  "portfolio-13",
  "portfolio-14",
  "portfolio-15",
  "portfolio-16",
  "portfolio-17",
  "portfolio-18",
  "portfolio-19",
  "portfolio-20",
  "portfolio-21",
  "portfolio-22",
  "portfolio-23",
  "portfolio-24",
  "portfolio-25",
  "portfolio-26",
  "portfolio-27",
  "portfolio-28",
  "portfolio-29",
  "portfolio-30",
  "portfolio-31",
  "portfolio-32",
  "portfolio-33",
  "portfolio-34",
  "portfolio-35",
  "portfolio-36",
  "portfolio-37"
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/PortfolioMaelys/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

};
