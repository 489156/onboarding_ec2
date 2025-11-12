import { Laptop, Mail, Key, Cloud, Shield, Download } from 'lucide-react';

export function EnvironmentSetting() {
  const steps = [
    {
      icon: Laptop,
      title: 'Hardware Setup',
      items: [
        'Collect your laptop and accessories from IT department',
        'Verify all equipment is working properly',
        'Connect to power and peripherals',
      ],
    },
    {
      icon: Mail,
      title: 'Email Account',
      items: [
        'Your email: firstname.lastname@company.com',
        'Check your inbox for welcome email',
        'Set up email signature with provided template',
      ],
    },
    {
      icon: Key,
      title: 'Account Credentials',
      items: [
        'Receive temporary password from IT',
        'Change password on first login',
        'Enable two-factor authentication',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      items: [
        'Access company drive and shared folders',
        'Install sync client on your device',
        'Review file organization structure',
      ],
    },
    {
      icon: Download,
      title: 'Required Software',
      items: [
        'Install communication tools (Slack, Teams, etc.)',
        'Download project management software',
        'Install any department-specific applications',
      ],
    },
    {
      icon: Shield,
      title: 'Security Setup',
      items: [
        'Complete security awareness training',
        'Install VPN client for remote access',
        'Review security policies and guidelines',
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">Environment Setting</h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Follow these steps to set up your workspace and get all the tools you need to start working.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0e2046] to-[#1a3566] flex items-center justify-center text-white flex-shrink-0">
                  <step.icon size={24} />
                </div>
                <h3 className="text-[#0e2046] text-lg">{step.title}</h3>
              </div>
              <ul className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0e2046] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-[#0e2046] shadow-sm">
          <h3 className="text-[#0e2046] mb-4 text-xl">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you encounter any issues during setup, please contact IT Support:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-500">Email:</span>{' '}
              <span className="text-[#0e2046]">it.support@company.com</span>
            </div>
            <div>
              <span className="text-gray-500">Phone:</span>{' '}
              <span className="text-[#0e2046]">ext. 1234</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
