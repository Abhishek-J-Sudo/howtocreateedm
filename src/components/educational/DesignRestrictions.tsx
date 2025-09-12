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

      <div className="relative bg-white border-2 border-red-300 rounded-lg overflow-visible">
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
            Common design patterns that look great in mockups but can't be implemented in HTML
            emails.
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
        title="Overlapping Elements"
        description="Images or text overlapping across different content sections or table rows."
        reason="Email clients don't support CSS z-index or absolute positioning. Elements must stay within their grid cells. Overlapping elements will either need to be moved out or moved in to fit into a grid section."
        showOverlay={showOverlays}
      >
        <div className="relative h-80 bg-white overflow-visible mb-20">
          {/* Grid overlay to show 2-row table structure */}
          {showOverlays && (
            <div className="absolute inset-2 grid grid-rows-2 gap-1 pointer-events-none z-20">
              <div className="border-2 border-dashed border-red-400 bg-red-50/30 rounded text-red-600 font-mono text-xs grid grid-cols-3 gap-1">
                <div className="border border-dashed border-red-300 rounded flex items-center justify-center text-red-500 font-mono text-xs">
                  Header Left
                </div>
                <div className="border border-dashed border-red-300 rounded flex items-center justify-center text-red-500 font-mono text-xs">
                  Header Center
                </div>
                <div className="border border-dashed border-red-300 rounded flex items-center justify-center text-red-500 font-mono text-xs">
                  Header Right
                </div>
              </div>
              <div className="border-2 border-dashed h-54 border-red-400 bg-red-50/30 rounded items-center justify-center text-red-600 font-mono text-xs grid grid-cols-2 gap-1">
                <div className="border border-dashed border-red-300 rounded flex items-center justify-center text-red-500 font-mono text-xs">
                  Left Content
                </div>
                <div className="border border-dashed border-red-300 rounded flex items-center justify-center text-red-500 font-mono text-xs">
                  Right Content
                </div>
              </div>
            </div>
          )}

          {/* Header section with diagonal images and center headline */}
          <div className="relative h-40 bg-gradient-to-r from-purple-600 to-purple-800 overflow-hidden">
            {/* Left diagonal image - dramatic angle */}
            <div
              className="absolute left-0 top-0 w-80 h-full overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop&crop=center"
                alt="Fashion model"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right diagonal image - dramatic angle */}
            <div
              className="absolute right-0 top-0 w-80 h-full overflow-hidden"
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=200&fit=crop&crop=center"
                alt="Luxury accessories"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping headline text that spans across header only */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-xs text-purple-200 tracking-wide mb-1">
                  EXCLUSIVE SUMMER COLLECTION
                </div>
                <div className="text-2xl font-bold text-white">STYLE REDEFINED</div>
              </div>
            </div>
          </div>

          {/* Content section with two-column layout */}
          <div className="grid grid-cols-2">
            {/* Left content */}
            <div className="relative overflow-visible">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center"
                alt="Luxury watch collection"
                className="w-full h-56 object-cover"
              />

              {/* Overlapping white card extending outside */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-lg shadow-lg p-4 z-10 w-60 h-20 flex flex-col justify-center items-center">
                <h4 className="font-bold text-xs text-gray-800">PREMIUM WATCHES</h4>
                <p className="text-xs text-gray-600 text-center">Timeless elegance</p>
              </div>
            </div>

            {/* Right content */}
            <div className="relative overflow-visible">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center"
                alt="Designer handbags"
                className="w-full h-56  object-cover"
              />

              {/* Overlapping white card extending outside */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-lg shadow-lg p-4 z-10 w-60 h-20 flex flex-col justify-center items-center">
                <h4 className="font-bold text-xs text-gray-800">DESIGNER BAGS</h4>
                <p className="text-xs text-gray-600 text-center">Handcrafted luxury</p>
              </div>
            </div>
          </div>

          {/* Overlapping sale badge that spans across both content sections */}
          <div className="absolute top-32 right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl z-10 border-4 border-white transform rotate-12">
            <span className="text-2xl">🏆</span>
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
        <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
          {/* Two-column grid overlay to show proper email table structure */}
          {showOverlays && (
            <div
              className="absolute inset-2 grid gap-1 pointer-events-none z-20"
              style={{ gridTemplateColumns: '60% 40%' }}
            >
              <div className="border-2 border-dashed border-red-400 bg-red-50/30 rounded flex items-center justify-center text-red-600 font-mono text-xs">
                Left Column
              </div>
              <div className="border-2 border-dashed border-red-400 bg-red-50/30 rounded flex items-center justify-center text-red-600 font-mono text-xs">
                Right Column
              </div>
            </div>
          )}

          {/* Diagonal food image on left - skewed like in the reference */}
          <div className="absolute left-0 top-0 w-2/3 h-full transform skew-x-12 origin-bottom-left overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&crop=center"
              alt="Restaurant food"
              className="w-full h-full object-cover transform -skew-x-12 scale-125"
            />
          </div>

          {/* Text content on right */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-right z-10">
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Navigators Club</h3>
            <h4 className="text-lg font-semibold text-amber-800 mb-4">FINE DINING EXPERIENCE</h4>
            <p className="text-amber-700 text-sm leading-relaxed mb-6 max-w-xs">
              Dine in style at Navigators' Club
              <br />
              with buffet or à la carte favorites.
            </p>
            <button className="bg-amber-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-800 transition-colors">
              Reserve Now
            </button>
          </div>
        </div>
      </RestrictionExample>

      {/* Complex Buttons and CTAs */}
      <RestrictionExample
        title="Complex Button Designs & CTAs"
        description="Fancy buttons with gradients, custom shapes, or overlapping designs from PSD/Illustrator."
        reason="Fancy CTAs will be converted to PNG images, losing interactivity and accessibility."
        showOverlay={showOverlays}
      >
        <div className="p-6 bg-gray-50 space-y-6">
          {/* Gradient button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl">
              Gradient CTA Button
            </button>
          </div>

          {/* Custom shaped button */}
          <div className="text-center">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 font-bold relative">
              <div className="absolute -left-3 top-0 w-0 h-0 border-t-[25px] border-b-[25px] border-r-[12px] border-t-transparent border-b-transparent border-r-blue-600"></div>
              <span>Arrow Shape CTA</span>
              <div className="absolute -right-3 top-0 w-0 h-0 border-t-[25px] border-b-[25px] border-l-[12px] border-t-transparent border-b-transparent border-l-blue-600"></div>
            </div>
          </div>

          {/* Overlapping design button */}
          <div className="text-center relative">
            <div className="inline-block bg-black text-white px-12 py-5 rounded-none font-bold relative shadow-2xl">
              <span>SHOP NOW</span>
              {/* Clean geometric overlay - single accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-sm">
                50%
              </div>
            </div>
          </div>
        </div>
      </RestrictionExample>

      {/* Text Over Images */}
      <RestrictionExample
        title="Text & CTA Overlaid on Images"
        description="Avoid white text positioned directly over images without proper fallbacks. CTAs over images cant be linked individually, developers will need to extract full image and link it as a whole."
        reason="If images are blocked (common in email), WHITE text becomes invisible. Email-safe approach requires text in separate table cells. If CTAs are to be tracked and linked individually, then add them separately along with copy keeping the image separate."
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
            <h5 className="font-medium text-green-800 mb-2">✅ Instead of Videos:</h5>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Use Animated GIFs</li>
              <li>• Keep first frame and last frame same as fallback</li>
              <li>• Limit the gif sizes to under 1mb for better email loading</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignRestrictions;
