import { Target, Eye, Heart, Users } from 'lucide-react';

export function CompanyIntro() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      content: 'To deliver innovative solutions that empower our clients to achieve their goals and drive sustainable growth.',
    },
    {
      icon: Eye,
      title: 'Vision',
      content: 'To be the global leader in our industry, recognized for excellence, innovation, and positive impact.',
    },
    {
      icon: Heart,
      title: 'Values',
      content: 'Integrity, Innovation, Collaboration, Excellence, and Customer Focus guide everything we do.',
    },
    {
      icon: Users,
      title: 'Culture',
      content: 'We foster an inclusive, supportive environment where everyone can grow and make meaningful contributions.',
    },
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">Company Introduction</h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Welcome to our company! We're thrilled to have you join our team. Here's what we stand for and what makes us unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-l-4 border-[#0e2046] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-[#0e2046] flex items-center justify-center text-white">
                    <value.icon size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0e2046] mb-3 text-xl">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0e2046] to-[#1a3566] rounded-lg p-8 sm:p-12 text-white">
          <h3 className="mb-6 text-2xl sm:text-3xl">Our Story</h3>
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              Founded with a vision to transform the industry, our company has grown from a small startup to a leading organization serving clients worldwide. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep respect for our people.
            </p>
            <p>
              Today, we're proud to be a team of passionate professionals dedicated to making a difference. Every member of our organization plays a vital role in our success, and we're excited for you to be part of our story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
