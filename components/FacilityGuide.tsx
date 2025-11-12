import { Coffee, Utensils, Car, Dumbbell, Wifi, Printer, DoorOpen, Shield } from 'lucide-react';

export function FacilityGuide() {
  const facilities = [
    {
      icon: DoorOpen,
      name: 'Office Access',
      description: 'Your access card works 24/7. Main entrance is on Level 1. Use your badge to enter after hours.',
      hours: '24/7 with access card',
    },
    {
      icon: Coffee,
      name: 'Cafeteria & Break Rooms',
      description: 'Free coffee, tea, and snacks available. Break rooms on each floor with refrigerators and microwaves.',
      hours: 'Mon-Fri, 7:00 AM - 6:00 PM',
    },
    {
      icon: Utensils,
      name: 'Dining Area',
      description: 'Main cafeteria on Level 2 serving breakfast and lunch. Vending machines on Levels 3, 5, and 7.',
      hours: 'Breakfast: 7:30-9:30 AM, Lunch: 11:30 AM-2:00 PM',
    },
    {
      icon: Car,
      name: 'Parking',
      description: 'Underground parking available. Register your vehicle with security. Visitor parking on Level 1.',
      hours: 'Access with employee card',
    },
    {
      icon: Dumbbell,
      name: 'Fitness Center',
      description: 'Fully equipped gym with showers and lockers. Free for all employees. Bring your own lock.',
      hours: 'Mon-Fri: 6:00 AM - 9:00 PM, Sat-Sun: 8:00 AM - 6:00 PM',
    },
    {
      icon: Wifi,
      name: 'Meeting Rooms',
      description: 'Book via calendar system. All rooms have video conferencing, whiteboards, and wireless displays.',
      hours: 'Book up to 2 weeks in advance',
    },
    {
      icon: Printer,
      name: 'Print & Copy',
      description: 'Printers on each floor. Use your employee ID to release print jobs. Scanner and copier available.',
      hours: 'Available during office hours',
    },
    {
      icon: Shield,
      name: 'Security',
      description: 'Security desk at main entrance. Emergency: dial 0. Report any safety concerns immediately.',
      hours: '24/7 security presence',
    },
  ];

  const floorPlan = [
    { floor: 'Level 1', areas: ['Reception', 'Security', 'Visitor Parking', 'Mail Room'] },
    { floor: 'Level 2', areas: ['Cafeteria', 'HR Department', 'Training Rooms'] },
    { floor: 'Level 3-7', areas: ['Office Spaces', 'Meeting Rooms', 'Break Rooms'] },
    { floor: 'Level 8', areas: ['Executive Offices', 'Conference Center', 'Terrace'] },
    { floor: 'Basement', areas: ['Parking', 'Fitness Center', 'Storage'] },
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">Facility Guide</h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Everything you need to know about our office facilities and amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0e2046] to-[#1a3566] flex items-center justify-center text-white flex-shrink-0">
                  <facility.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0e2046] mb-2 text-lg">{facility.name}</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">{facility.description}</p>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full">
                    <span className="text-gray-700">{facility.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-[#0e2046] mb-6 text-2xl">Office Floor Plan</h3>
          <div className="space-y-4">
            {floorPlan.map((floor, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center border-l-4 border-[#0e2046] pl-4 py-2"
              >
                <div className="sm:w-32 mb-2 sm:mb-0">
                  <span className="text-[#0e2046]">{floor.floor}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {floor.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
