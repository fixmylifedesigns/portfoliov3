'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ArticleHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-white"
          >
            <Link href="/">
              <span className="font-mono">{"<"}</span>
              <span className="text-cyan-400">Articles</span>
              <span className="font-mono">{" />"}</span>
            </Link>
          </motion.div>

          <nav>
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
