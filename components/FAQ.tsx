import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What should I bring on my first day?',
      answer: 'Bring a valid ID for security access, any completed paperwork from HR, and a positive attitude! Your laptop and equipment will be provided. Feel free to bring personal items to decorate your workspace.',
    },
    {
      question: 'How do I request time off?',
      answer: 'Submit time-off requests through the HR Portal at least 2 weeks in advance. Your manager will review and approve. For emergency situations, contact your manager directly and submit the request as soon as possible.',
    },
    {
      question: 'What is the dress code?',
      answer: 'We maintain a business casual dress code. This means professional but comfortable attire. Jeans are acceptable on Fridays. For client meetings or important presentations, business formal attire is recommended.',
    },
    {
      question: 'Can I work remotely?',
      answer: 'Yes, employees can work remotely up to 2 days per week after the initial onboarding period. Coordinate with your manager to establish your remote work schedule. Ensure you have a suitable home office setup.',
    },
    {
      question: 'When will I receive my first paycheck?',
      answer: 'Payroll is processed on the last business day of each month. Your first paycheck will be prorated based on your start date. Direct deposit information should be set up during your first week through the HR Portal.',
    },
    {
      question: 'How do I enroll in benefits?',
      answer: 'You have 30 days from your start date to enroll in benefits. Access the HR Portal to review options and make your selections. HR will schedule a benefits orientation session during your first week.',
    },
    {
      question: 'What training opportunities are available?',
      answer: 'We offer various training programs including technical skills, leadership development, and professional certifications. Each employee has an annual professional development budget. Discuss your goals with your manager.',
    },
    {
      question: 'How is performance evaluated?',
      answer: 'Performance reviews occur bi-annually in June and December. You\'ll set goals with your manager and receive regular feedback. We use a 360-degree review process that includes self-assessment and peer feedback.',
    },
    {
      question: 'What are the parking arrangements?',
      answer: 'Underground parking is available for all employees at no cost. Register your vehicle with security during your first week. Visitor parking is available on Level 1 and requires validation.',
    },
    {
      question: 'Who do I contact if I have questions?',
      answer: 'For HR-related questions, contact hr@company.com. For IT issues, reach out to it.support@company.com. Your manager and assigned buddy are also great resources for any questions during your onboarding.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#0e2046] mb-4 text-3xl sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#0e2046] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Find answers to common questions about your new role and our company.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-[#0e2046] pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-[#0e2046]" size={20} />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-[#0e2046]" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0e2046] to-[#1a3566] rounded-lg p-8 sm:p-12 text-white text-center">
          <h3 className="mb-4 text-2xl sm:text-3xl">Still Have Questions?</h3>
          <p className="mb-6 text-white/90 text-lg">
            We're here to help! Don't hesitate to reach out to HR or your manager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hr@company.com"
              className="px-6 py-3 bg-white text-[#0e2046] rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Contact HR
            </a>
            <a
              href="mailto:it.support@company.com"
              className="px-6 py-3 bg-white/10 text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors inline-block"
            >
              Contact IT Support
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>Welcome to the team! We're excited to have you here.</p>
          <p className="mt-2">Last updated: November 2025</p>
        </div>
      </div>
    </section>
  );
}
