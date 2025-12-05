import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '24/7', label: 'Uptime' },
    { value: '99.9%', label: 'Accuracy' },
    { value: 'Zero', label: 'Restrictions' },
    { value: 'Infinite', label: 'Possibilities' }
  ];

  return (
    <div className="bg-black py-16 border-b-2 border-red-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h3 className="text-4xl font-['Press_Start_2P'] text-red-600">{stat.value}</h3>
            <p className="font-['JetBrains_Mono'] text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
