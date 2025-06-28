import React from 'react';
import { Globe, HelpCircle } from 'lucide-react';

interface RegionSelectorProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const regions = [
  { id: 'us-average', name: 'United States (Average)', co2Factor: 0.386 }, // kg CO2 per kWh
  { id: 'europe', name: 'Europe (Average)', co2Factor: 0.276 },
  { id: 'china', name: 'China', co2Factor: 0.555 },
  { id: 'india', name: 'India', co2Factor: 0.708 },
  { id: 'australia', name: 'Australia', co2Factor: 0.634 },
  { id: 'canada', name: 'Canada', co2Factor: 0.129 },
  { id: 'nordic', name: 'Nordic Countries', co2Factor: 0.045 },
];

export const RegionSelector: React.FC<RegionSelectorProps> = ({ selectedRegion, onRegionChange }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-green-400" />
        <h3 className="text-lg font-semibold text-white">Electricity Grid</h3>
        <div className="group relative">
          <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute bottom-6 left-0 bg-gray-900 text-white text-sm p-2 rounded-lg w-64 shadow-lg border border-gray-700 z-10">
            Different regions have varying electricity sources. Renewable energy results in lower carbon emissions than fossil fuels.
          </div>
        </div>
      </div>
      
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
      >
        <option value="">Select your region</option>
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { regions };