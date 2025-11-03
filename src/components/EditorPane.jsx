import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EditorPane() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex-1"
    >
      <div className="bg-white rounded-xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-neutral-200/70 overflow-hidden">
        <div className="px-6 pt-6 pb-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent font-serif text-3xl sm:text-4xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
        </div>
        <div className="px-6 pb-6">
          <textarea
            placeholder="Start writing your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[320px] sm:h-[420px] resize-none bg-transparent text-base leading-7 text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
          />
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleSave}
              className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm hover:bg-neutral-800 active:scale-[0.99] transition-all"
            >
              Publish
            </button>
            <button
              onClick={handleSave}
              className="rounded-full border border-neutral-300 bg-white text-neutral-900 px-5 py-2 text-sm hover:border-neutral-400 transition-colors"
            >
              Save draft
            </button>
            {saved && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-neutral-500"
              >
                Saved
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
