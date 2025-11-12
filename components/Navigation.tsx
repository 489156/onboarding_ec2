import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  show: boolean;
}

export function Navigation({ activeSection, show }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'cover', label: 'Home' },
    { id: 'toc', label: 'Contents' },
    { id: 'company', label: 'Company' },
    { id: 'environment', label: 'Environment' },
    { id: 'system', label: 'Systems' },
    { id: 'facility', label: 'Facilities' },
    { id: 'other', label: 'Other' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-[#0e2046]">Employee Guidebook</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#0e2046] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#0e2046]"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#0e2046] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
