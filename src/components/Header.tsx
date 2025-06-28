import React from 'react';
import { Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Leaf className="w-8 h-8 text-green-400" />
        <h1 className="text-4xl font-bold text-white">EcoPrint AI</h1>
      </div>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Calculate the carbon footprint of your AI model usage and make informed decisions about sustainable AI consumption
      </p>
    </header>
  );
};