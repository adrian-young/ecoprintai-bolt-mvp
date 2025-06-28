import React from 'react';
import { Hash, HelpCircle } from 'lucide-react';

interface TokenInputProps {
  tokens: string;
  onTokensChange: (tokens: string) => void;
}

export const TokenInput: React.FC<TokenInputProps> = ({ tokens, onTokensChange }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Hash className="w-5 h-5 text-green-400" />
        <h3 className="text-lg font-semibold text-white">Token Usage</h3>
        <div className="group relative">
          <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute bottom-6 left-0 bg-gray-900 text-white text-sm p-2 rounded-lg w-64 shadow-lg border border-gray-700 z-10">
            Tokens are units of text that AI models process. Roughly 750 words = 1,000 tokens. Check your API usage or estimate based on text length.
          </div>
        </div>
      </div>
      
      <input
        type="number"
        value={tokens}
        onChange={(e) => onTokensChange(e.target.value)}
        placeholder="Enter number of tokens"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
        min="0"
      />
      
      <div className="mt-3 text-sm text-gray-400">
        <p>Example: A typical conversation ≈ 500-2,000 tokens</p>
      </div>
    </div>
  );
};