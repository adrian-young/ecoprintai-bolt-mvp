import React from 'react';
import { Github, Info, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-700">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
        <a 
          href="#" 
          className="flex items-center gap-2 hover:text-green-400 transition-colors"
        >
          <Info className="w-4 h-4" />
          About
        </a>
        <a 
          href="#" 
          className="flex items-center gap-2 hover:text-green-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a 
          href="#" 
          className="flex items-center gap-2 hover:text-green-400 transition-colors"
        >
          <Users className="w-4 h-4" />
          Join the Movement
        </a>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Making AI usage more transparent and sustainable</p>
      </div>
    </footer>
  );
};