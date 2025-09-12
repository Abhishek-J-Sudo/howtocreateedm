import React, { useState } from 'react';
import { CheckCircle, X, AlertTriangle, Info } from 'lucide-react';

interface CompatibilityFeature {
  feature: string;
  description: string;
  clients: {
    [key: string]: 'supported' | 'partial' | 'not-supported';
  };
  workaround?: string;
}

const ClientCompatibilityMatrix: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const emailClients = [
    { key: 'outlook_desktop', name: 'Outlook (Desktop)', category: 'desktop' },
    { key: 'outlook_web', name: 'Outlook (Web)', category: 'web' },
    { key: 'gmail', name: 'Gmail', category: 'web' },
    { key: 'apple_mail', name: 'Apple Mail', category: 'desktop' },
    { key: 'yahoo', name: 'Yahoo Mail', category: 'web' },
    { key: 'ios_mail', name: 'iOS Mail', category: 'mobile' },
    { key: 'android_gmail', name: 'Android Gmail', category: 'mobile' },
  ];

  const features: CompatibilityFeature[] = [
    {
      feature: 'CSS Grid',
      description: 'Modern CSS Grid layout system',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'partial',
        gmail: 'partial',
        apple_mail: 'supported',
        yahoo: 'not-supported',
        ios_mail: 'supported',
        android_gmail: 'partial',
      },
      workaround: 'Use HTML tables for grid layouts'
    },
    {
      feature: 'Flexbox',
      description: 'CSS Flexible Box Layout',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'supported',
        gmail: 'supported',
        apple_mail: 'supported',
        yahoo: 'partial',
        ios_mail: 'supported',
        android_gmail: 'supported',
      },
      workaround: 'Use tables with align/valign attributes'
    },
    {
      feature: 'Position: Absolute',
      description: 'Absolute positioning for overlapping elements',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'partial',
        gmail: 'partial',
        apple_mail: 'supported',
        yahoo: 'partial',
        ios_mail: 'supported',
        android_gmail: 'partial',
      },
      workaround: 'Avoid overlapping elements, use separate table rows'
    },
    {
      feature: 'Custom Web Fonts',
      description: '@font-face and web font imports',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'supported',
        gmail: 'supported',
        apple_mail: 'supported',
        yahoo: 'supported',
        ios_mail: 'supported',
        android_gmail: 'supported',
      },
      workaround: 'Use web-safe font stacks with fallbacks'
    },
    {
      feature: 'Background Images',
      description: 'CSS background-image property',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'supported',
        gmail: 'partial',
        apple_mail: 'supported',
        yahoo: 'supported',
        ios_mail: 'supported',
        android_gmail: 'supported',
      },
      workaround: 'Use VML for Outlook, regular images for others'
    },
    {
      feature: 'CSS Animations',
      description: 'CSS keyframe animations and transitions',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'partial',
        gmail: 'not-supported',
        apple_mail: 'supported',
        yahoo: 'not-supported',
        ios_mail: 'supported',
        android_gmail: 'not-supported',
      },
      workaround: 'Use animated GIFs or hover effects only'
    },
    {
      feature: 'Media Queries',
      description: 'Responsive design with @media rules',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'supported',
        gmail: 'supported',
        apple_mail: 'supported',
        yahoo: 'supported',
        ios_mail: 'supported',
        android_gmail: 'supported',
      },
      workaround: 'Use fluid/hybrid design or conditional comments'
    },
    {
      feature: 'Box Shadow',
      description: 'CSS box-shadow property',
      clients: {
        outlook_desktop: 'not-supported',
        outlook_web: 'supported',
        gmail: 'supported',
        apple_mail: 'supported',
        yahoo: 'supported',
        ios_mail: 'supported',
        android_gmail: 'supported',
      },
      workaround: 'Use border or background images for shadows'
    }
  ];

  const getIcon = (support: string) => {
    switch (support) {
      case 'supported':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'partial':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'not-supported':
        return <X className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getSupportText = (support: string) => {
    switch (support) {
      case 'supported':
        return 'Full Support';
      case 'partial':
        return 'Partial Support';
      case 'not-supported':
        return 'Not Supported';
      default:
        return '';
    }
  };

  const getSupportClass = (support: string) => {
    switch (support) {
      case 'supported':
        return 'bg-green-50 border-green-200';
      case 'partial':
        return 'bg-yellow-50 border-yellow-200';
      case 'not-supported':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const filteredFeatures = features.filter(feature => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'problematic') {
      return Object.values(feature.clients).some(support => support === 'not-supported');
    }
    if (selectedFilter === 'safe') {
      return Object.values(feature.clients).every(support => support === 'supported');
    }
    return true;
  });

  return (
    <div className="card p-8 mb-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Email Client Compatibility Matrix
        </h3>
        <p className="text-text-secondary mb-6">
          See which CSS features are supported across different email clients. Use this as a reference when designing emails.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedFilter === 'all'
                ? 'bg-btn-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Features
          </button>
          <button
            onClick={() => setSelectedFilter('problematic')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedFilter === 'problematic'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Problematic Features
          </button>
          <button
            onClick={() => setSelectedFilter('safe')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedFilter === 'safe'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Universally Safe
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm text-gray-700">Full Support</span>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-600" />
          <span className="text-sm text-gray-700">Partial Support</span>
        </div>
        <div className="flex items-center gap-2">
          <X className="w-4 h-4 text-red-600" />
          <span className="text-sm text-gray-700">Not Supported</span>
        </div>
      </div>

      {/* Compatibility Matrix */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 bg-gray-100 border border-gray-200 font-semibold text-sm">
                CSS Feature
              </th>
              {emailClients.map(client => (
                <th
                  key={client.key}
                  className="text-center p-3 bg-gray-100 border border-gray-200 font-medium text-xs min-w-[100px]"
                >
                  {client.name}
                </th>
              ))}
              <th className="text-left p-3 bg-gray-100 border border-gray-200 font-semibold text-sm">
                Workaround
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredFeatures.map((feature, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200">
                  <div>
                    <div className="font-medium text-sm text-text-primary mb-1">
                      {feature.feature}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {feature.description}
                    </div>
                  </div>
                </td>
                {emailClients.map(client => (
                  <td
                    key={client.key}
                    className={`p-3 border text-center ${getSupportClass(feature.clients[client.key])}`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {getIcon(feature.clients[client.key])}
                      <span className="text-xs font-medium">
                        {getSupportText(feature.clients[client.key]).split(' ')[0]}
                      </span>
                    </div>
                  </td>
                ))}
                <td className="p-3 border border-gray-200">
                  {feature.workaround && (
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-text-secondary">
                        {feature.workaround}
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Key Takeaways
        </h4>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• <strong>Outlook Desktop</strong> is the most restrictive client - design for it first</li>
          <li>• <strong>HTML Tables</strong> are the most reliable layout method across all clients</li>
          <li>• Always provide <strong>fallbacks</strong> for modern CSS features</li>
          <li>• Test your emails in multiple clients before sending</li>
        </ul>
      </div>
    </div>
  );
};

export default ClientCompatibilityMatrix;