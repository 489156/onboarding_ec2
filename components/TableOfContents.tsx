import { Building2, Settings, Monitor, MapPin, FileText, HelpCircle } from 'lucide-react';

export function TableOfContents() {
  const sections = [
    {
      id: 'company',
      title: 'Company Introduction',
      description: 'Learn about our mission, vision, and values',
      icon: Building2,
    },
    {
      id: 'environment',
      title: 'Environment Setting',
      description: 'Set up your workspace and tools',
      icon: Settings,
    },
    {
      id: 'system',
      title: 'System Guide',
      description: 'Navigate our internal systems and platforms',
      icon: Monitor,
    },
    {
      id: 'facility',
      title: 'Facility Guide',
      description: 'Explore our office spaces and amenities',
      icon: MapPin,
    },
    {
      id: 'other',
      title: 'Other Guide',
      description: 'Additional resources and information',
      icon: FileText,
    },
    {
      id: 'faq',
      title: 'FAQ',
      description: 'Frequently asked questions',
      icon: HelpCircle,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">Table of Contents</h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left border-2 border-transparent hover:border-[#0e2046]"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0e2046] to-[#1a3566] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <section.icon size={24} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-400 mb-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-[#0e2046] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
