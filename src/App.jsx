import React from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import EditorPane from './components/EditorPane';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <HeroCover />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <EditorPane />
          <RightSidebar />
        </div>
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500">
        Crafted for calm, focused writing.
      </footer>
    </div>
  );
}

export default App;
