import { Book, Users, Briefcase, Award, HeartHandshake, Calendar as CalendarIcon } from 'lucide-react';

export function OtherGuide() {
  const guides = [
    {
      icon: Book,
      title: 'Onboarding Checklist',
      items: [
        'Complete all mandatory training modules',
        'Schedule 1-on-1 with your manager',
        'Meet your team members',
        'Review department goals and objectives',
        'Set up your workspace',
      ],
    },
    {
      icon: Users,
      title: 'Team Structure',
      items: [
        'Report to your direct manager',
        'Attend weekly team meetings',
        'Participate in monthly all-hands',
        'Connect with your buddy/mentor',
        'Join relevant project teams',
      ],
    },
    {
      icon: Briefcase,
      title: 'Work Policies',
      items: [
        'Standard hours: 9:00 AM - 6:00 PM',
        'Flexible work arrangements available',
        'Remote work: 2 days per week',
        'Dress code: Business casual',
        'Review employee handbook',
      ],
    },
    {
      icon: Award,
      title: 'Benefits & Perks',
      items: [
        'Health insurance (medical, dental, vision)',
        'Retirement savings plan with company match',
        'Paid time off: 15 days per year',
        'Professional development budget',
        'Wellness programs and gym membership',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Company Events',
      items: [
        'Monthly team building activities',
        'Quarterly town hall meetings',
        'Annual company retreat',
        'Holiday celebrations',
        'Volunteer opportunities',
      ],
    },
    {
      icon: CalendarIcon,
      title: 'Important Dates',
      items: [
        'Performance reviews: Bi-annual',
        'Timesheet submission: Every Friday',
        'Payroll: Last business day of month',
        'Benefits enrollment: November',
        'Company holidays: Check calendar',
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">Other Guide</h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Additional important information to help you succeed in your new role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#0e2046] flex items-center justify-center text-white flex-shrink-0">
                  <guide.icon size={24} />
                </div>
                <h3 className="text-[#0e2046] text-lg">{guide.title}</h3>
              </div>
              <ul className="space-y-2">
                {guide.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0e2046] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0e2046] to-[#1a3566] rounded-lg p-8 text-white">
            <h3 className="mb-4 text-2xl">First Week Goals</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span>1</span>
                </div>
                <span>Complete all setup and orientation tasks</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span>2</span>
                </div>
                <span>Meet with your team and key stakeholders</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span>3</span>
                </div>
                <span>Understand your role and responsibilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span>4</span>
                </div>
                <span>Learn about current projects and priorities</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-[#0e2046]">
            <h3 className="text-[#0e2046] mb-4 text-2xl">Key Contacts</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-500 mb-1">HR Department</div>
                <div className="text-[#0e2046]">hr@company.com | ext. 1000</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">IT Support</div>
                <div className="text-[#0e2046]">it.support@company.com | ext. 1234</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Facilities</div>
                <div className="text-[#0e2046]">facilities@company.com | ext. 2000</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Security</div>
                <div className="text-[#0e2046]">security@company.com | ext. 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
