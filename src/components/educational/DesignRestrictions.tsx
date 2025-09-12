import React, { useState } from 'react';
import { AlertTriangle, X, Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [overlappingSliderPosition, setOverlappingSliderPosition] = useState(100);
  const [diagonalSliderPosition, setDiagonalSliderPosition] = useState(100);
  const [textOverImageSliderPosition, setTextOverImageSliderPosition] = useState(100);

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

      {/* Overlapping Elements with Before/After Slider */}
      <div className="mb-12">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <X className="h-5 w-5 text-red-600 mr-2" />
            <h4 className="font-semibold text-lg text-text-primary">Overlapping Elements</h4>
          </div>
          <p className="text-text-secondary text-sm mb-2">
            Images or text overlapping across different content sections or table rows.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-red-800 text-sm">
                Email clients don't support CSS z-index or absolute positioning. Elements must stay
                within their grid cells. Overlapping elements will either need to be moved out or
                moved in to fit into a grid section.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white border-2 border-red-300 rounded-lg overflow-hidden mb-4">
          <div className="relative h-120 overflow-hidden">
            {/* Before (Problematic Design) */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: `polygon(0% 0%, ${overlappingSliderPosition}% 0%, ${overlappingSliderPosition}% 100%, 0% 100%)`,
              }}
            >
              <div className="relative h-full bg-white overflow-visible">
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
                    <div className="border-2 border-dashed border-red-400 bg-red-50/30 rounded items-center justify-center text-red-600 font-mono text-xs grid grid-cols-2 gap-1">
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
            </div>

            {/* After (Email-Safe Design) */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: `polygon(${overlappingSliderPosition}% 0%, 100% 0%, 100% 100%, ${overlappingSliderPosition}% 100%)`,
              }}
            >
              <div className="relative h-full bg-white">
                {/* Grid overlay for email-safe structure */}
                {showOverlays && (
                  <div className="absolute inset-2 grid grid-rows-3 gap-1 pointer-events-none z-20">
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded grid grid-cols-3 gap-1">
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Header Left
                      </div>
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Header Center
                      </div>
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Header Right
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded grid grid-cols-2 gap-1">
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Left Image
                      </div>
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Right Image
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded grid grid-cols-2 gap-1">
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Left Text & CTA
                      </div>
                      <div className="border border-dashed border-green-300 rounded flex items-center justify-center text-green-500 font-mono text-xs">
                        Right Text & CTA
                      </div>
                    </div>
                  </div>
                )}

                {/* Header section with 3 columns: Image - Text - Image */}
                <div className="h-40 bg-gradient-to-r from-purple-600 to-purple-800 grid grid-cols-3">
                  {/* Left header image */}
                  <div className="flex items-center justify-center p-2">
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop&crop=center"
                      alt="Fashion model"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Center header text */}
                  <div className="flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-xs text-purple-200 tracking-wide mb-1">
                        EXCLUSIVE SUMMER COLLECTION
                      </div>
                      <div className="text-lg font-bold">STYLE REDEFINED</div>
                    </div>
                  </div>

                  {/* Right header image */}
                  <div className="flex items-center justify-center p-2">
                    <img
                      src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=200&fit=crop&crop=center"
                      alt="Luxury accessories"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>

                {/* Product images row - 2 columns */}
                <div className="grid grid-cols-2 h-40">
                  {/* Left product image */}
                  <div className="bg-gray-50 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=120&fit=crop&crop=center"
                      alt="Luxury watch collection"
                      className="w-full object-cover rounded"
                    />
                  </div>

                  {/* Right product image */}
                  <div className="bg-gray-100 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=120&fit=crop&crop=center"
                      alt="Designer handbags"
                      className="w-full object-cover rounded"
                    />
                  </div>
                </div>

                {/* Product text and CTA row - 2 columns */}
                <div className="grid grid-cols-2 h-40">
                  {/* Left product text & CTA */}
                  <div className="bg-gray-50 p-3 flex flex-col items-center justify-center">
                    <h4 className="font-bold text-base text-gray-800 mb-1">PREMIUM WATCHES</h4>
                    <p className="text-xs text-gray-600 text-center mb-2">Timeless elegance</p>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold">
                      Shop Watches
                    </button>
                  </div>

                  {/* Right product text & CTA */}
                  <div className="bg-gray-100 p-3 flex flex-col items-center justify-center">
                    <h4 className="font-bold text-base text-gray-800 mb-1">DESIGNER BAGS</h4>
                    <p className="text-xs text-gray-600 text-center mb-2">Handcrafted luxury</p>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold">
                      Shop Bags
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
              <div
                className="absolute w-1 bg-gray-400 h-full cursor-col-resize"
                style={{ left: `${overlappingSliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-btn-primary border-2 border-gray-400 rounded-full flex items-center justify-center shadow-lg">
                  <ChevronLeft className="w-6 h-6 text-white" />
                  <ChevronRight className="w-6 h-6 text-white -ml-1" />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={overlappingSliderPosition}
                onChange={(e) => setOverlappingSliderPosition(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-col-resize"
              />
            </div>

            {/* Labels */}
            {overlappingSliderPosition > 0 && (
              <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                ❌ Problematic (Before)
              </div>
            )}
            {overlappingSliderPosition < 100 && (
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-xs font-bold">
                ✅ Email-Safe (After)
              </div>
            )}
          </div>
        </div>

        {/* Slider instruction */}
        <div className="text-center text-sm text-gray-600 mb-4">
          Drag the slider to compare the problematic design with the email-safe version
        </div>
      </div>

      {/* Diagonal Layouts with Before/After Slider */}
      <div className="mb-12">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <X className="h-5 w-5 text-red-600 mr-2" />
            <h4 className="font-semibold text-lg text-text-primary">
              Diagonal Text & Image Layouts
            </h4>
          </div>
          <p className="text-text-secondary text-sm mb-2">
            Text following diagonal lines or images positioned at angles across content sections.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-red-800 text-sm">
                HTML tables only support rectangular grid layouts. Diagonal arrangements require CSS
                positioning that breaks in email clients.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white border-2 border-red-300 rounded-lg overflow-hidden mb-4">
          <div className="relative h-64 overflow-hidden">
            {/* Before (Problematic Design) */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: `polygon(0% 0%, ${diagonalSliderPosition}% 0%, ${diagonalSliderPosition}% 100%, 0% 100%)`,
              }}
            >
              <div className="relative h-full bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
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
                <div className="absolute left-0 top-0 w-2/3 h-full transform skew-x-22 origin-bottom-left overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&crop=center"
                    alt="Restaurant food"
                    className="w-full h-full object-cover transform -skew-x-12 scale-125"
                  />
                </div>

                {/* Text content on right */}
                <div className="absolute right-40 top-1/2 transform -translate-y-1/2 text-right z-10">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Navigators Club</h3>
                  <h4 className="text-lg font-semibold text-amber-800 mb-4">
                    FINE DINING EXPERIENCE
                  </h4>
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
            </div>

            {/* After (Email-Safe Design) */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: `polygon(${diagonalSliderPosition}% 0%, 100% 0%, 100% 100%, ${diagonalSliderPosition}% 100%)`,
              }}
            >
              <div className="relative h-full bg-gradient-to-br from-amber-50 to-orange-100">
                {/* Grid overlay for email-safe structure */}
                {showOverlays && (
                  <div className="absolute inset-2 grid grid-cols-2 gap-1 pointer-events-none z-20">
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                      Image Column
                    </div>
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                      Content Column
                    </div>
                  </div>
                )}

                {/* Email-safe 2-column layout */}
                <div className="grid grid-cols-2 h-full">
                  {/* Left column - Image */}
                  <div className="flex items-center justify-center p-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop&crop=center"
                      alt="Restaurant food"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right column - Content */}
                  <div className="flex flex-col justify-center p-6 text-left">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Navigators Club</h3>
                    <h4 className="text-md font-semibold text-amber-800 mb-3">
                      FINE DINING EXPERIENCE
                    </h4>
                    <p className="text-amber-700 text-sm leading-relaxed mb-4">
                      Dine in style at Navigators' Club with buffet or à la carte favorites.
                    </p>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded font-semibold hover:bg-amber-800 transition-colors w-fit">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
              <div
                className="absolute w-1 bg-gray-400 h-full cursor-col-resize"
                style={{ left: `${diagonalSliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-btn-primary border-2 border-gray-400 rounded-full flex items-center justify-center shadow-lg">
                  <ChevronLeft className="w-6 h-6 text-white" />
                  <ChevronRight className="w-6 h-6 text-white -ml-1" />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={diagonalSliderPosition}
                onChange={(e) => setDiagonalSliderPosition(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-col-resize"
              />
            </div>

            {/* Labels */}
            {diagonalSliderPosition > 0 && (
              <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                ❌ Problematic (Before)
              </div>
            )}
            {diagonalSliderPosition < 100 && (
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-xs font-bold">
                ✅ Email-Safe (After)
              </div>
            )}
          </div>
        </div>

        {/* Slider instruction */}
        <div className="text-center text-sm text-gray-600 mb-4">
          Drag the slider to compare the diagonal design with the email-safe grid version
        </div>
      </div>

      {/* Complex Buttons and CTAs */}
      <RestrictionExample
        title="Complex Button Designs & CTAs"
        description="Fancy buttons with gradients, custom shapes, or overlapping designs from PSD/Illustrator."
        reason="Fancy CTAs will be extracted as PNG images since the text links will get underlined in Outlook."
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

      {/* Text & CTA Overlaid on Images with Before/After Slider */}
      <div className="mb-12">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <X className="h-5 w-5 text-red-600 mr-2" />
            <h4 className="font-semibold text-lg text-text-primary">
              Text & CTA Overlaid on Images
            </h4>
          </div>
          <p className="text-text-secondary text-sm mb-2">
            Avoid white text positioned directly over images without proper fallbacks. CTAs over
            images cant be linked individually, developers will need to extract full image and link
            it as a whole.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-red-800 text-sm">
                If images are blocked (common in email), WHITE text becomes invisible. Email-safe
                approach requires text in separate table cells. If CTAs are to be tracked and linked
                individually, then add them separately along with copy keeping the image separate.
              </p>
              <p className="text-red-800 text-sm">
                Note: Such section can be still added, but the whole section will be added as an
                image and then devs will need to link the whole image, since link ctas over image is
                not possible.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white border-2 border-red-300 rounded-lg overflow-hidden mb-4">
          <div className="relative h-80 overflow-hidden">
            {/* Before (Problematic Design) */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: `polygon(0% 0%, ${textOverImageSliderPosition}% 0%, ${textOverImageSliderPosition}% 100%, 0% 100%)`,
              }}
            >
              <div className="relative h-full">
                {/* Grid overlay for problematic structure */}
                {showOverlays && (
                  <div className="absolute inset-2 pointer-events-none z-20">
                    <div className="border-2 border-dashed border-red-400 bg-red-50/30 rounded h-full flex items-center justify-center text-red-600 font-mono text-xs">
                      Single Cell with Overlaid Text
                    </div>
                  </div>
                )}

                <div className="relative h-full">
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
              </div>
            </div>

            {/* After (Email-Safe Design) */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: `polygon(${textOverImageSliderPosition}% 0%, 100% 0%, 100% 100%, ${textOverImageSliderPosition}% 100%)`,
              }}
            >
              <div className="relative h-full bg-white">
                {/* Grid overlay for email-safe structure */}
                {showOverlays && (
                  <div className="absolute inset-2 grid grid-rows-3 gap-1 pointer-events-none z-20">
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs row-span-2">
                      Image Row (Full Width)
                    </div>
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                      Text Row
                    </div>
                    <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded flex items-center justify-center text-green-600 font-mono text-xs">
                      CTA Row
                    </div>
                  </div>
                )}

                {/* Email-safe 3-row layout */}
                <div className="grid h-full">
                  {/* Row 1: Full-width image */}
                  <div className="bg-gray-100 flex h-40 items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&crop=center"
                      alt="Store interior"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Row 2: Headlines and subtext and cta */}
                  <div className="bg-white p-6 flex flex-col justify-center text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-0">GRAND OPENING</h3>
                    <p className="text-lg text-gray-700 mb-2">Visit Our New Store Location</p>
                    <button className="bg-blue-600 text-white px-8 py-2 font-bold rounded-lg hover:bg-blue-700 transition-colors w-1/4 mx-auto">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
              <div
                className="absolute w-1 bg-gray-400 h-full cursor-col-resize"
                style={{ left: `${textOverImageSliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-btn-primary border-2 border-gray-400 rounded-full flex items-center justify-center shadow-lg">
                  <ChevronLeft className="w-6 h-6 text-white" />
                  <ChevronRight className="w-6 h-6 text-white -ml-1" />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={textOverImageSliderPosition}
                onChange={(e) => setTextOverImageSliderPosition(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-col-resize"
              />
            </div>

            {/* Labels */}
            {textOverImageSliderPosition > 0 && (
              <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                ❌ Problematic (Before)
              </div>
            )}
            {textOverImageSliderPosition < 100 && (
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-xs font-bold">
                ✅ Email-Safe (After)
              </div>
            )}
          </div>
        </div>

        {/* Slider instruction */}
        <div className="text-center text-sm text-gray-600 mb-4">
          Drag the slider to compare overlaid text with the separated email-safe structure
        </div>
      </div>

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
