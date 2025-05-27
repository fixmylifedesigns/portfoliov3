import React from "react";
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  summary: string;
}

const ShareButtons = ({ url, title, summary }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-400">Share:</span>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <button
        onClick={copyToClipboard}
        className="text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
};

export default ShareButtons;
