import React from 'react';

interface EmissionGaugeProps {
  emissions: number; // in grams CO2e
}

export const EmissionGauge: React.FC<EmissionGaugeProps> = ({ emissions }) => {
  const getEmissionLevel = (emissions: number) => {
    if (emissions <= 10) return { level: 'low', color: '#10B981', label: 'Low Impact' };
    if (emissions <= 50) return { level: 'medium', color: '#F59E0B', label: 'Medium Impact' };
    return { level: 'high', color: '#EF4444', label: 'High Impact' };
  };

  const { color, label } = getEmissionLevel(emissions);
  const percentage = Math.min((emissions / 100) * 100, 100);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="rgb(55, 65, 81)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 3.52} 352`}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{emissions.toFixed(1)}</span>
          <span className="text-xs text-gray-400">g CO₂e</span>
        </div>
      </div>
      <div 
        className="px-3 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {label}
      </div>
    </div>
  );
};