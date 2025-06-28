import React from 'react';
import { Brain, HelpCircle } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

const models = [
  { id: 'gpt-4', name: 'GPT-4', power: 0.0047 }, // kWh per 1k tokens
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', power: 0.0016 },
  { id: 'claude-3', name: 'Claude 3 Opus', power: 0.0042 },
  { id: 'claude-3-sonnet', name: 'Claude 3 Sonnet', power: 0.0031 },
  { id: 'gemini-pro', name: 'Gemini Pro', power: 0.0035 },
  { id: 'llama-2', name: 'LLaMA 2 70B', power: 0.0029 },
];

export const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onModelChange }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-green-400" />
        <h3 className="text-lg font-semibold text-white">AI Model</h3>
        <div className="group relative">
          <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute bottom-6 left-0 bg-gray-900 text-white text-sm p-2 rounded-lg w-64 shadow-lg border border-gray-700 z-10">
            Different AI models consume varying amounts of energy per token generated. Larger models typically require more computational resources.
          </div>
        </div>
      </div>
      
      <select
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value)}
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
      >
        <option value="">Select an AI model</option>
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { models };