/* components/TikTokProfile.tsx */
"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function TikTokProfile({ username }: { username: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Inject the exact blockquote snippet TikTok expects
    wrapperRef.current.innerHTML = `
      <blockquote 
        class="tiktok-embed" 
        cite="https://www.tiktok.com/@${username}" 
        data-unique-id="${username}" 
        data-embed-type="creator" 
        style="max-width:780px;min-width:288px;"
      >
        <section>
          <a target="_blank" href="https://www.tiktok.com/@${username}?refer=creator_embed">
            @${username}
          </a>
        </section>
      </blockquote>`;

    // If the script has already run once, re-initialise embeds
    // (TikTok defines this helper when it loads)
    // @ts-ignore
    window?.tiktokEmbedInit?.();
  }, [username]);

  return (
    <>
      {/* TikTok injects <iframe>s when this script loads */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      <div ref={wrapperRef} />
    </>
  );
}
