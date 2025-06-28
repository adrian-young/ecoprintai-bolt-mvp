import React from 'react';
import { Header } from './components/Header';
import { ModelSelector } from './components/ModelSelector';
import { TokenInput } from './components/TokenInput';
import { RegionSelector } from './components/RegionSelector';
import { ResultsSection } from './components/ResultsSection';
import { Footer } from './components/Footer';
import { useCarbonCalculator } from './hooks/useCarbonCalculator';

function App() {
  const {
    selectedModel,
    setSelectedModel,
    tokens,
    setTokens,
    selectedRegion,
    setSelectedRegion,
    emissions,
    reset,
    getSelectedModelName,
    hasResults
  } = useCarbonCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ModelSelector 
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          
          <TokenInput 
            tokens={tokens}
            onTokensChange={setTokens}
          />
          
          <RegionSelector 
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
          />
        </div>

        {hasResults && (
          <div className="animate-in fade-in duration-500">
            <ResultsSection
              emissions={emissions}
              tokens={parseInt(tokens) || 0}
              modelName={getSelectedModelName()}
              onReset={reset}
            />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;