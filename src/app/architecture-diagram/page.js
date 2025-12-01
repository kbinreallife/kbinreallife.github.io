'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ArchitectureDiagramPage() {
  const [showLegend, setShowLegend] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLegendToggle = () => {
    setShowLegend(!showLegend);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      {/* Back button */}
      <div className="max-w-7xl mx-auto mb-4">
        <Link href="/" className="inline-block px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
            Hackmud Upgrade System Architecture
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            A distributed, sharded database architecture for managing upgrades across 26 user accounts in Hackmud.
          </p>
          <button
            type="button"
            onClick={handleLegendToggle}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
          >
            {showLegend ? 'Hide' : 'Show'} Legend
          </button>
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="mb-8 p-6 bg-gray-800/70 border border-gray-700 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Component Legend</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 border-2 border-purple-400 rounded"></div>
                <span className="text-gray-300"><strong>Authorized Callers:</strong> Users who can access the system</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-700 border-2 border-blue-400 rounded"></div>
                <span className="text-gray-300"><strong>Central Orchestrator:</strong> The main coordination script</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-700 border-2 border-cyan-400 rounded"></div>
                <span className="text-gray-300"><strong>Internal Services:</strong> Query, routing, and coordination logic</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-900 border-2 border-blue-400 rounded"></div>
                <span className="text-gray-300"><strong>Shards:</strong> Individual user upgrade storage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-700 border-2 border-pink-400 rounded"></div>
                <span className="text-gray-300"><strong>Log Database:</strong> Distributed upgrade history logs</span>
              </div>
            </div>
          </div>
        )}

        {/* Diagram - Static pre-generated SVG */}
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 shadow-2xl overflow-x-auto">
          {imageError ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-2">Failed to load diagram</p>
              <p className="text-gray-400 text-sm">
                The diagram SVG may not have been generated. Run: <code className="bg-gray-800 px-2 py-1 rounded">pnpm run generate-diagram</code>
              </p>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src="/architecture-diagram.svg" 
              alt="Hackmud Architecture Diagram"
              className="w-full h-auto mx-auto"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* Key Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800/70 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Data Flow</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Query:</strong> Orchestrator dispatches to all 26 shards in parallel</li>
              <li>• <strong>Aggregation:</strong> Results collected and filtered centrally</li>
              <li>• <strong>Withdrawal:</strong> Targeted commands to specific shards</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-800/70 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Architecture Benefits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Scalable:</strong> Add more shards without central bottleneck</li>
              <li>• <strong>Resilient:</strong> No single point of failure</li>
              <li>• <strong>Auditable:</strong> Complete history via distributed logs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}