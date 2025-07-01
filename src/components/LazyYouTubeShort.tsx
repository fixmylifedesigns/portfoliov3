/* components/LazyYouTubeShort.tsx */
"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  url: string;
  title: string;
}

export default function LazyYouTubeShort({ url, title }: Props) {
  const [showIframe, setShowIframe] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  /* start loading when near viewport */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (wrapperRef.current) io.observe(wrapperRef.current);
    return () => io.disconnect();
  }, []);

  /* extract the video ID from /shorts/ID or ?v=ID */
  const id = url.split("/").pop()?.split("?")[0];

  /* YouTube thumbnail URL (hqdefault gives 480p) */
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div ref={wrapperRef} className="space-y-2 w-full">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      {showIframe ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&playsinline=1`}
          title={title}
          className="w-full aspect-[9/16] rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* placeholder thumbnail until iframe is swapped in */
        <img
          src={thumb}
          alt=""
          className="w-full aspect-[9/16] object-cover rounded-lg blur-[2px] brightness-75"
        />
      )}
    </div>
  );
}
