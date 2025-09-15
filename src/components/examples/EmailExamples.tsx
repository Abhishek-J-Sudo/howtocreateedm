import React from 'react';

// Broken CSS Grid Email Example
export const BrokenGridEmail: React.FC = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-lg font-bold">FashionShop Weekly</h1>
        <p className="text-sm">Your Style Update</p>
      </div>

      {/* This CSS Grid will break in Outlook */}
      <div
        className="p-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        <div className="bg-gray-100 p-3 rounded">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop"
            alt="Summer Collection"
            className="w-full h-24 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-sm">Summer Sale</h3>
          <p className="text-xs text-gray-600">Up to 50% off</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=150&fit=crop"
            alt="New Arrivals"
            className="w-full h-24 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-sm">New Arrivals</h3>
          <p className="text-xs text-gray-600">Fresh styles</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=150&fit=crop"
            alt="Accessories"
            className="w-full h-24 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-sm">Accessories</h3>
          <p className="text-xs text-gray-600">Complete your look</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <img
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=150&fit=crop"
            alt="Designer Collection"
            className="w-full h-24 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-sm">Designer</h3>
          <p className="text-xs text-gray-600">Luxury pieces</p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 p-3 m-4 rounded text-xs text-red-700">
        ⚠️ This CSS Grid layout will completely break in Outlook - items will stack vertically
      </div>
    </div>
  );
};

// Fixed Table-Based Email Example
export const FixedTableEmail: React.FC = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#2563eb' }}>
        <tr>
          <td style={{ padding: '16px', textAlign: 'center', color: 'white' }}>
            <h1 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
              FashionShop Weekly
            </h1>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>Your Style Update</p>
          </td>
        </tr>
      </table>

      {/* Table-based 2x2 grid */}
      <table width="100%" cellPadding="8" cellSpacing="0">
        <tr>
          <td width="50%" style={{ padding: '8px', verticalAlign: 'top' }}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}
            >
              <tr>
                <td style={{ padding: '12px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop"
                    alt="Summer Collection"
                    width="100%"
                    style={{ display: 'block', borderRadius: '4px', marginBottom: '8px' }}
                  />
                  <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>Summer Sale</h3>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#6b7280' }}>
                    Up to 50% off
                  </p>
                </td>
              </tr>
            </table>
          </td>

          <td width="50%" style={{ padding: '8px', verticalAlign: 'top' }}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}
            >
              <tr>
                <td style={{ padding: '12px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=150&fit=crop"
                    alt="New Arrivals"
                    width="100%"
                    style={{ display: 'block', borderRadius: '4px', marginBottom: '8px' }}
                  />
                  <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>
                    New Arrivals
                  </h3>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#6b7280' }}>
                    Fresh styles
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td width="50%" style={{ padding: '8px', verticalAlign: 'top' }}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}
            >
              <tr>
                <td style={{ padding: '12px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=150&fit=crop"
                    alt="Accessories"
                    width="100%"
                    style={{ display: 'block', borderRadius: '4px', marginBottom: '8px' }}
                  />
                  <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>Accessories</h3>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#6b7280' }}>
                    Complete your look
                  </p>
                </td>
              </tr>
            </table>
          </td>

          <td width="50%" style={{ padding: '8px', verticalAlign: 'top' }}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}
            >
              <tr>
                <td style={{ padding: '12px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=150&fit=crop"
                    alt="Designer Collection"
                    width="100%"
                    style={{ display: 'block', borderRadius: '4px', marginBottom: '8px' }}
                  />
                  <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>Designer</h3>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#6b7280' }}>
                    Luxury pieces
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <div className="bg-green-50 border border-green-200 p-3 m-4 rounded text-xs text-green-700">
        ✅ Table-based layout works perfectly in all email clients including Outlook
      </div>
    </div>
  );
};

// Broken Background Image Hero
export const BrokenBackgroundHero: React.FC = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div
        className="relative h-64 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 p-6">
          <h1 className="text-2xl font-bold mb-2 drop-shadow-lg">Summer Collection</h1>
          <p className="text-lg mb-4 drop-shadow-lg">Fresh styles for the season</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">
            Shop Now
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="bg-red-50 border border-red-200 p-3 m-4 rounded text-xs text-red-700">
        ⚠️ Background images don't work in Outlook - text will be invisible and unreadable
      </div>
    </div>
  );
};

// Fixed VML Background Hero
// Broken Flexbox Navigation Menu
export const BrokenFlexboxNav: React.FC = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header */}
      <div className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-lg font-bold">TechBlog Newsletter</h1>
        <p className="text-sm">Weekly Tech Updates</p>
      </div>

      {/* This Flexbox navigation will break in Outlook */}
      <nav
        className="bg-gray-100 p-3"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 px-3 py-2">
          Latest News
        </a>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 px-3 py-2">
          Reviews
        </a>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 px-3 py-2">
          Tutorials
        </a>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 px-3 py-2">
          About
        </a>
      </nav>

      {/* Content */}
      <div className="p-4">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
          alt="Navigation and Technology Interface"
          className="w-full h-32 object-cover rounded mb-3"
        />
        <h2 className="text-lg font-bold mb-2">Website Navigation Best Practices</h2>
        <p className="text-sm text-gray-600 mb-3">
          Learn how to create user-friendly navigation that works across all platforms and devices.
        </p>
        <a
          href="#"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium"
        >
          Read Guide
        </a>
      </div>

      <div className="bg-red-50 border border-red-200 p-3 m-4 rounded text-xs text-red-700">
        ⚠️ Flexbox navigation will stack vertically in Outlook, breaking the horizontal layout
      </div>
    </div>
  );
};

// Fixed Table-Based Navigation
export const FixedTableNav: React.FC = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#4f46e5' }}>
        <tr>
          <td style={{ padding: '16px', textAlign: 'center', color: 'white' }}>
            <h1 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
              TechBlog Newsletter
            </h1>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>Weekly Tech Updates</p>
          </td>
        </tr>
      </table>

      {/* Table-based navigation that works everywhere */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f3f4f6' }}>
        <tr>
          <td
            width="25%"
            style={{ padding: '16px 12px', textAlign: 'center', borderRight: '1px solid #e5e7eb' }}
          >
            <a
              href="#"
              style={{
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Latest News
            </a>
          </td>
          <td
            width="25%"
            style={{ padding: '16px 12px', textAlign: 'center', borderRight: '1px solid #e5e7eb' }}
          >
            <a
              href="#"
              style={{
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Reviews
            </a>
          </td>
          <td
            width="25%"
            style={{ padding: '16px 12px', textAlign: 'center', borderRight: '1px solid #e5e7eb' }}
          >
            <a
              href="#"
              style={{
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              Tutorials
            </a>
          </td>
          <td width="25%" style={{ padding: '16px 12px', textAlign: 'center' }}>
            <a
              href="#"
              style={{
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              About
            </a>
          </td>
        </tr>
      </table>

      {/* Content */}
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td style={{ padding: '20px' }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
              alt="Navigation and Technology Interface"
              width="100%"
              style={{ display: 'block', borderRadius: '6px', marginBottom: '12px' }}
            />
            <h2 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 'bold' }}>
              Website Navigation Best Practices
            </h2>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#6b7280' }}>
              Learn how to create user-friendly navigation that works across all platforms and
              devices.
            </p>
            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td
                  style={{
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                    Read Guide
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <div className="bg-green-50 border border-green-200 p-3 m-4 rounded text-xs text-green-700">
        ✅ Table-based navigation maintains horizontal layout across all email clients
      </div>
    </div>
  );
};

export const FixedVMLHero: React.FC = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td style={{ position: 'relative' }}>
            {/* Fallback background color */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#2563eb' }}
            >
              <tr>
                <td style={{ padding: '60px 24px', textAlign: 'center', color: 'white' }}>
                  <h1 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>
                    Summer Collection
                  </h1>
                  <p style={{ margin: '0 0 16px 0', fontSize: '16px' }}>
                    Fresh styles for the season
                  </p>
                  <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                    <tr>
                      <td
                        style={{
                          backgroundColor: 'white',
                          color: '#2563eb',
                          padding: '12px 24px',
                          borderRadius: '4px',
                          fontWeight: 'bold',
                        }}
                      >
                        <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
                          Shop Now
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            {/* Background image for supporting clients */}
            <div style={{ display: 'none' }}>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Summer Collection Background"
                width="100%"
              />
            </div>
          </td>
        </tr>
      </table>

      <div className="bg-green-50 border border-green-200 p-3 m-4 rounded text-xs text-green-700">
        ✅ Solid background color fallback ensures text is always readable, with VML for background
        images
      </div>
    </div>
  );
};

// Mobile vs Desktop Product Grid
export const ResponsiveProductGrid: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div
        className="max-w-sm mx-auto bg-white border border-gray-300"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td
              style={{
                backgroundColor: '#059669',
                padding: '16px',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <h1 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>TechStore</h1>
            </td>
          </tr>
        </table>

        {/* Single column mobile layout */}
        <table width="100%" cellPadding="16" cellSpacing="0">
          <tr>
            <td>
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ marginBottom: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}
              >
                <tr>
                  <td style={{ padding: '16px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
                      alt="Wireless Headphones"
                      width="100%"
                      style={{ display: 'block', borderRadius: '8px', marginBottom: '12px' }}
                    />
                    <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
                      Wireless Headphones
                    </h3>
                    <p style={{ margin: '4px 0 12px 0', fontSize: '14px', color: '#6b7280' }}>
                      Premium sound quality
                    </p>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td
                          style={{
                            backgroundColor: '#059669',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                          }}
                        >
                          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                            Buy Now $99
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ marginBottom: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}
              >
                <tr>
                  <td style={{ padding: '16px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=200&fit=crop"
                      alt="Smart Watch"
                      width="100%"
                      style={{ display: 'block', borderRadius: '8px', marginBottom: '12px' }}
                    />
                    <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
                      Smart Watch
                    </h3>
                    <p style={{ margin: '4px 0 12px 0', fontSize: '14px', color: '#6b7280' }}>
                      Track your fitness goals
                    </p>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td
                          style={{
                            backgroundColor: '#059669',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                          }}
                        >
                          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                            Buy Now $299
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  }

  return (
    <div
      className="max-w-lg mx-auto bg-white border border-gray-300"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td
            style={{
              backgroundColor: '#059669',
              padding: '16px',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <h1 style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>TechStore</h1>
          </td>
        </tr>
      </table>

      {/* 2-column desktop layout */}
      <table width="100%" cellPadding="16" cellSpacing="0">
        <tr>
          <td width="50%" style={{ padding: '8px', verticalAlign: 'top' }}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }}
            >
              <tr>
                <td style={{ padding: '16px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=150&fit=crop"
                    alt="Wireless Headphones"
                    width="100%"
                    style={{ display: 'block', borderRadius: '6px', marginBottom: '8px' }}
                  />
                  <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>
                    Wireless Headphones
                  </h3>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '12px', color: '#6b7280' }}>
                    Premium sound
                  </p>
                  <table cellPadding="0" cellSpacing="0">
                    <tr>
                      <td
                        style={{
                          backgroundColor: '#059669',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                      >
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                          Buy $99
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>

          <td width="50%" style={{ padding: '8px', verticalAlign: 'top' }}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }}
            >
              <tr>
                <td style={{ padding: '16px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=150&fit=crop"
                    alt="Smart Watch"
                    width="100%"
                    style={{ display: 'block', borderRadius: '6px', marginBottom: '8px' }}
                  />
                  <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>Smart Watch</h3>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '12px', color: '#6b7280' }}>
                    Track fitness
                  </p>
                  <table cellPadding="0" cellSpacing="0">
                    <tr>
                      <td
                        style={{
                          backgroundColor: '#059669',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                      >
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                          Buy $299
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};
