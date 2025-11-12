import { Calendar, FileText, MessageSquare, TrendingUp, Users2, Clock } from 'lucide-react';

export function SystemGuide() {
  const systems = [
    {
      icon: MessageSquare,
      name: 'Communication Platform',
      description: 'Internal messaging and collaboration',
      access: 'Auto-provisioned on day one',
      tips: [
        'Join your department channels',
        'Set notification preferences',
        'Update your profile and status',
      ],
    },
    {
      icon: Calendar,
      name: 'Calendar & Scheduling',
      description: 'Meeting management and booking',
      access: 'Available via email login',
      tips: [
        'Share your calendar with team',
        'Set working hours',
        'Enable meeting reminders',
      ],
    },
    {
      icon: FileText,
      name: 'Document Management',
      description: 'File storage and sharing',
      access: 'Cloud drive linked to email',
      tips: [
        'Organize files in shared folders',
        'Use version control',
        'Set appropriate permissions',
      ],
    },
    {
      icon: TrendingUp,
      name: 'Project Management',
      description: 'Task tracking and workflows',
      access: 'Request access from manager',
      tips: [
        'Review active projects',
        'Update task status regularly',
        'Use templates for consistency',
      ],
    },
    {
      icon: Clock,
      name: 'Time & Attendance',
      description: 'Work hours and leave tracking',
      access: 'HR portal login',
      tips: [
        'Log hours daily',
        'Submit timesheets on time',
        'Request leave in advance',
      ],
    },
    {
      icon: Users2,
      name: 'HR Portal',
      description: 'Employee self-service platform',
      access: 'Credentials from HR',
      tips: [
        'Update personal information',
        'Access pay stubs',
        'Enroll in benefits',
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">System Guide</h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get familiar with our internal systems and platforms that you'll use daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-[#0e2046]"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-[#0e2046] flex items-center justify-center text-white flex-shrink-0">
                  <system.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0e2046] mb-2 text-xl">{system.name}</h3>
                  <p className="text-gray-600 mb-2">{system.description}</p>
                  <p className="text-gray-500">
                    <span className="text-[#0e2046]">Access:</span> {system.access}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-gray-700 mb-3">Quick Tips:</h4>
                <ul className="space-y-2">
                  {system.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0e2046] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#0e2046] to-[#1a3566] rounded-lg p-8 text-white">
          <h3 className="mb-4 text-2xl">System Access Timeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-white/60 mb-2">Day 1</div>
              <p>Email, Calendar, Communication Platform</p>
            </div>
            <div>
              <div className="text-white/60 mb-2">Week 1</div>
              <p>Document Management, HR Portal</p>
            </div>
            <div>
              <div className="text-white/60 mb-2">Week 2</div>
              <p>Project-specific tools and systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
