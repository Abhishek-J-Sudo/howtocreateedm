import React from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface ComparisonCardProps {
  title: string;
  description: string;
  badExample: {
    title: string;
    description: string;
    image?: string;
    code?: string;
  };
  goodExample: {
    title: string;
    description: string;
    image?: string;
    code?: string;
  };
  explanation: string;
  tip?: string;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  title,
  description,
  badExample,
  goodExample,
  explanation,
  tip
}) => {
  return (
    <div className="card p-6 mb-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Bad Example */}
        <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50 dark:bg-red-900/10 dark:border-red-800">
          <div className="flex items-center mb-3">
            <XCircle className="h-5 w-5 text-red-600 mr-2" />
            <h4 className="font-semibold text-red-800 dark:text-red-400">{badExample.title}</h4>
          </div>
          
          {badExample.image && (
            <div className="mb-3 bg-white rounded border overflow-hidden">
              <img 
                src={badExample.image} 
                alt={`Bad example: ${badExample.title}`}
                className="w-full h-auto"
              />
            </div>
          )}
          
          {badExample.code && (
            <div className="mb-3">
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>{badExample.code}</code>
              </pre>
            </div>
          )}
          
          <p className="text-sm text-red-700 dark:text-red-300">{badExample.description}</p>
        </div>

        {/* Good Example */}
        <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50 dark:bg-green-900/10 dark:border-green-800">
          <div className="flex items-center mb-3">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <h4 className="font-semibold text-green-800 dark:text-green-400">{goodExample.title}</h4>
          </div>
          
          {goodExample.image && (
            <div className="mb-3 bg-white rounded border overflow-hidden">
              <img 
                src={goodExample.image} 
                alt={`Good example: ${goodExample.title}`}
                className="w-full h-auto"
              />
            </div>
          )}
          
          {goodExample.code && (
            <div className="mb-3">
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                <code>{goodExample.code}</code>
              </pre>
            </div>
          )}
          
          <p className="text-sm text-green-700 dark:text-green-300">{goodExample.description}</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-bg-elevated p-4 rounded-lg border border-border-subtle">
        <h5 className="font-semibold text-text-primary mb-2">Why this matters:</h5>
        <p className="text-text-secondary">{explanation}</p>
        
        {tip && (
          <div className="mt-4 flex items-start">
            <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-700 dark:text-blue-300">{tip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonCard;