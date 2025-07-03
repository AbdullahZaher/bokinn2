import React from 'react';

type Feature = {
  name: string;
  free: boolean | string;
  basic: boolean | string;
  professional: boolean | string;
};

type FeatureComparisonProps = {
  features: Feature[];
};

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ features }) => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full bg-white rounded-2xl shadow border border-border">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Free</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Basic</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Professional</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={feature.name} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{feature.name}</td>
              {[feature.free, feature.basic, feature.professional].map((val, i) => (
                <td key={i} className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  {val === true && <span className="text-green-500 font-bold">✔</span>}
                  {val === false && <span className="text-gray-300 font-bold">—</span>}
                  {typeof val === 'string' && <span>{val}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparison; 