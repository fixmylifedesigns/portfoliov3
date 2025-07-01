/* components/SocialStatsCard.tsx */
"use client";
import Image from "next/image";

interface Props {
  avatarSrc: string;
  tiktokFollowers: string; // e.g. "47k"
  instagramFollowers: string; // e.g. "21k"
  tiktokUrl: string;
  instagramUrl: string;
}

export default function SocialStatsCard({
  avatarSrc,
  tiktokFollowers,
  instagramFollowers,
  tiktokUrl,
  instagramUrl,
}: Props) {
  return (
    <div className="bg-gray-800/40 rounded-xl p-4 flex items-center w-full max-w-xs mx-auto">
      {/* avatar */}
      <Image
        src={avatarSrc}
        alt="Profile avatar"
        width={56}
        height={56}
        className="rounded-full flex-shrink-0"
      />

      {/* follower counts */}
      <div className="ml-4 text-sm leading-6">
        <p className="text-white">
          <span className="font-semibold">{tiktokFollowers}</span> followers —{" "}
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            TikTok
          </a>
        </p>
        <p className="text-white">
          <span className="font-semibold">{instagramFollowers}</span> followers
          —{" "}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
