import React from 'react';
import { motion } from 'framer-motion';

const Stat = ({ label, value }) => (
  <div className="flex items-baseline justify-between py-2">
    <span className="text-neutral-500 text-sm">{label}</span>
    <span className="text-neutral-900 font-medium">{value}</span>
  </div>
);

const DraftItem = ({ title, date }) => (
  <div className="group rounded-lg border border-neutral-200/70 hover:border-neutral-300 bg-white p-3 transition-colors">
    <div className="font-medium text-neutral-900 group-hover:underline underline-offset-4">{title}</div>
    <div className="text-xs text-neutral-500 mt-1">{date}</div>
  </div>
);

export default function RightSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      className="w-full lg:w-[320px] flex-shrink-0"
    >
      <div className="space-y-6">
        <section className="rounded-xl bg-white ring-1 ring-neutral-200/70 p-4">
          <h3 className="font-serif text-lg text-neutral-900">Audience</h3>
          <div className="mt-2 divide-y divide-neutral-200/80">
            <Stat label="Subscribers" value="1,284" />
            <Stat label="Open rate" value="46%" />
            <Stat label="New this week" value="+32" />
          </div>
        </section>
        <section className="rounded-xl bg-white ring-1 ring-neutral-200/70 p-4">
          <h3 className="font-serif text-lg text-neutral-900">Drafts</h3>
          <div className="mt-3 grid gap-2">
            <DraftItem title="On creative routines" date="Edited 2 days ago" />
            <DraftItem title="What calm design feels like" date="Edited 5 days ago" />
            <DraftItem title="A small note on focus" date="Edited 1 week ago" />
          </div>
          <button className="mt-4 w-full rounded-full border border-neutral-300 bg-white text-neutral-900 px-4 py-2 text-sm hover:border-neutral-400 transition-colors">View all</button>
        </section>
      </div>
    </motion.aside>
  );
}
