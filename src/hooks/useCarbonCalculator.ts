import { useState, useEffect } from 'react';
import { models } from '../components/ModelSelector';
import { regions } from '../components/RegionSelector';

export const useCarbonCalculator = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [tokens, setTokens] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('us-average');
  const [emissions, setEmissions] = useState(0);

  const calculateEmissions = () => {
    if (!selectedModel || !tokens || !selectedRegion) {
      setEmissions(0);
      return;
    }

    const model = models.find(m => m.id === selectedModel);
    const region = regions.find(r => r.id === selectedRegion);
    
    if (!model || !region) {
      setEmissions(0);
      return;
    }

    const tokenCount = parseInt(tokens);
    if (isNaN(tokenCount) || tokenCount <= 0) {
      setEmissions(0);
      return;
    }

    // Energy consumption per token (kWh)
    const energyPerToken = model.power / 1000; // Convert from per 1k tokens to per token
    
    // Total energy consumption (kWh)
    const totalEnergy = energyPerToken * tokenCount;
    
    // CO2 emissions (kg CO2e)
    const co2Kg = totalEnergy * region.co2Factor;
    
    // Convert to grams
    const co2Grams = co2Kg * 1000;
    
    setEmissions(co2Grams);
  };

  useEffect(() => {
    calculateEmissions();
  }, [selectedModel, tokens, selectedRegion]);

  const reset = () => {
    setSelectedModel('');
    setTokens('');
    setSelectedRegion('us-average');
    setEmissions(0);
  };

  const getSelectedModelName = () => {
    const model = models.find(m => m.id === selectedModel);
    return model ? model.name : '';
  };

  return {
    selectedModel,
    setSelectedModel,
    tokens,
    setTokens,
    selectedRegion,
    setSelectedRegion,
    emissions,
    reset,
    getSelectedModelName,
    hasResults: selectedModel && tokens && parseFloat(tokens) > 0
  };
};