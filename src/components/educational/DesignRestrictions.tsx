import React, { useState } from 'react';
import { AlertTriangle, X, Eye, EyeOff } from 'lucide-react';

interface RestrictionExampleProps {
  title: string;
  description: string;
  reason: string;
  children: React.ReactNode;
  showOverlay: boolean;
}

const RestrictionExample: React.FC<RestrictionExampleProps> = ({ 
  title, 
  description, 
  reason, 
  children, 
  showOverlay 
}) => {
  return (
    <div className="mb-12">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <X className="h-5 w-5 text-red-600 mr-2" />
          <h4 className="font-semibold text-lg text-text-primary">{title}</h4>
        </div>
        <p className="text-text-secondary text-sm mb-2">{description}</p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-start">
            <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-red-800 text-sm">{reason}</p>
          </div>
        </div>
      </div>
      
      <div className="relative bg-white border-2 border-red-300 rounded-lg overflow-hidden">
        {showOverlay && (
          <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center z-10">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
              ❌ CANNOT BE CODED IN EMAIL
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

const DesignRestrictions: React.FC = () => {
  const [showOverlays, setShowOverlays] = useState(false);

  return (
    <div className="card p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-2xl font-bold text-text-primary">Email Design Restrictions</h3>
          </div>
          <p className="text-text-secondary">
            Common design patterns that look great in mockups but can't be implemented in HTML emails.
          </p>
        </div>
        
        <button
          onClick={() => setShowOverlays(!showOverlays)}
          className="flex items-center space-x-2 btn btn-secondary text-sm"
        >
          {showOverlays ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span>{showOverlays ? 'Hide' : 'Show'} Restrictions</span>
        </button>
      </div>

      {/* Overlapping Elements */}
      <RestrictionExample
        title="Overlapping Elements & Z-Index Layers"
        description="Images or text overlapping across different content sections or table rows."
        reason="Email clients don't support CSS z-index or absolute positioning. Elements must stay within their table cells."
        showOverlay={showOverlays}
      >
        <div className="p-6 h-64 relative bg-gradient-to-br from-blue-100 to-purple-100">
          {/* Background content */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-lg font-bold mb-2">Main Content Section</h4>
            <p className="text-sm text-gray-600 mb-4">
              This is the main content area that should contain text and images...
            </p>
            <div className="w-full h-16 bg-gray-200 rounded"></div>
          </div>
          
          {/* Overlapping element */}
          <div className="absolute top-2 right-2 w-32 h-32 bg-red-500 rounded-full opacity-90 flex items-center justify-center text-white font-bold transform rotate-12">
            SALE!<br/>50% OFF
          </div>
          
          {/* Another overlapping element */}
          <div className="absolute bottom-4 left-4 bg-yellow-400 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform -rotate-6">
            Limited Time!
          </div>
        </div>
      </RestrictionExample>

      {/* Diagonal Layouts */}
      <RestrictionExample
        title="Diagonal Text & Image Layouts"
        description="Text following diagonal lines or images positioned at angles across content sections."
        reason="HTML tables only support rectangular grid layouts. Diagonal arrangements require CSS positioning that breaks in email clients."
        showOverlay={showOverlays}
      >
        <div className="p-6 h-64 relative bg-gradient-to-br from-green-100 to-teal-100 overflow-hidden">
          {/* Diagonal background stripes */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-2 bg-green-300 transform rotate-45 top-8"></div>
            <div className="absolute w-full h-2 bg-green-300 transform rotate-45 top-16"></div>
            <div className="absolute w-full h-2 bg-green-300 transform rotate-45 top-24"></div>
          </div>
          
          {/* Diagonal text layout */}
          <div className="relative z-10">
            <h4 className="text-2xl font-bold transform -rotate-12 absolute top-4 left-8 text-green-800">
              SUMMER
            </h4>
            <h4 className="text-2xl font-bold transform -rotate-12 absolute top-16 left-24 text-green-800">
              COLLECTION
            </h4>
            <h4 className="text-2xl font-bold transform -rotate-12 absolute top-28 left-40 text-green-800">
              2025
            </h4>
          </div>
          
          {/* Diagonal image */}
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-green-500 transform rotate-45"></div>
        </div>
      </RestrictionExample>

      {/* Complex Buttons and CTAs */}
      <RestrictionExample
        title="Complex Button Designs & Interactive CTAs"
        description="Buttons with complex gradients, animations, or interactive hover effects."
        reason="Complex buttons often need to be converted to PNG images, losing interactivity and accessibility. Hover effects don't work on mobile."
        showOverlay={showOverlays}
      >
        <div className="p-6 bg-gray-50 space-y-4">
          {/* Gradient button with shadow */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Shop Now - Animated Button</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Complex shaped button */}
          <div className="text-center">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 font-bold relative">
              <div className="absolute -left-3 top-0 w-0 h-0 border-t-[25px] border-b-[25px] border-r-[12px] border-t-transparent border-b-transparent border-r-blue-600"></div>
              <span>Arrow Button Design</span>
              <div className="absolute -right-3 top-0 w-0 h-0 border-t-[25px] border-b-[25px] border-l-[12px] border-t-transparent border-b-transparent border-l-blue-600"></div>
            </div>
          </div>
          
          {/* Multi-state interactive button */}
          <div className="text-center">
            <div className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold relative overflow-hidden group cursor-pointer">
              <span className="relative z-10 group-hover:hidden">Hover for Animation</span>
              <span className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-purple-700">
                ✨ Animated Text!
              </span>
            </div>
          </div>
        </div>
      </RestrictionExample>

      {/* Text Over Images */}
      <RestrictionExample
        title="Text Overlaid on Images"
        description="Text positioned directly over images without proper fallbacks."
        reason="If images are blocked (common in email), text becomes invisible. Email-safe approach requires text in separate table cells."
        showOverlay={showOverlays}
      >
        <div className="relative h-64">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center"
            alt="Store interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">GRAND OPENING</h3>
              <p className="text-xl mb-6">Visit Our New Store Location</p>
              <button className="bg-white text-black px-8 py-3 font-bold rounded-lg">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </RestrictionExample>

      {/* Complex Visual Effects */}
      <RestrictionExample
        title="Advanced Visual Effects & Animations"
        description="CSS transforms, animations, complex shadows, and visual effects."
        reason="Most email clients strip CSS animations and transforms. Complex effects rely on modern CSS not supported in email."
        showOverlay={showOverlays}
      >
        <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute w-32 h-32 bg-white/20 rounded-full animate-bounce top-4 left-4"></div>
            <div className="absolute w-24 h-24 bg-yellow-400/30 rounded-full animate-ping top-8 right-8"></div>
            <div className="absolute w-40 h-40 bg-pink-400/20 rounded-full animate-spin bottom-4 left-1/3"></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl font-bold mb-4 animate-pulse">Animated Header</h3>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-all">
              <p className="text-lg mb-4">Complex glassmorphism card with backdrop blur</p>
              <div className="w-full h-4 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-white animate-pulse w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </RestrictionExample>

      {/* Alternative Solutions */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
        <h4 className="font-semibold text-green-800 mb-4 flex items-center">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          Email-Safe Design Solutions
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-green-800 mb-2">✅ Instead of Overlapping:</h5>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Use separate table rows/columns</li>
              <li>• Place elements side-by-side</li>
              <li>• Use background colors for emphasis</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-green-800 mb-2">✅ Instead of Complex Buttons:</h5>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Simple rectangular buttons</li>
              <li>• Solid colors or simple gradients</li>
              <li>• Convert complex designs to images</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-green-800 mb-2">✅ Instead of Text Over Images:</h5>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Text above or below images</li>
              <li>• Use solid background colors</li>
              <li>• Ensure text works without images</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-green-800 mb-2">✅ Instead of Animations:</h5>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Static visual hierarchy</li>
              <li>• Use color and typography for emphasis</li>
              <li>• Animated GIFs for simple animations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignRestrictions;