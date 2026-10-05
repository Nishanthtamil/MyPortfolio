import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import { blogPosts } from '#constants/index.js';
import { ArrowUpRight } from 'lucide-react';

const ArticlesScreen = () => {
  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page">
      <IOSNavBar title="Articles" backText="Home" />

      <div className="px-4 py-6 space-y-5">
        <div className="space-y-1 px-1">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Latest Publications
          </h2>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <div
              key={post.id || index}
              className="bg-white dark:bg-[#1C1C1E] rounded-xl overflow-hidden shadow-sm border border-black/5 dark:border-white/5 flex flex-col"
            >
              {post.image && (
                <div className="w-full h-44 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                  {post.title}
                </h3>

                <div className="pt-3 mt-1 border-t border-[rgba(60,60,67,0.29)] dark:border-[rgba(84,84,88,0.65)]">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-sm font-medium text-[#007AFF] active:opacity-70"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm">
            No articles available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesScreen;
