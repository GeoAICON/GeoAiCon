'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';

const faqs = [
  {
    question: 'What is GeoAI CON?',
    answer: 'GeoAI CON is the premier international conference dedicated to the convergence of Geospatial Information Systems (GIS) and Artificial Intelligence. It brings together researchers, industry leaders, and policymakers to discuss the latest advancements in spatial AI.'
  },
  {
    question: 'When is the next GeoAI CON?',
    answer: 'The next edition, GeoAI CON 2026, is scheduled for December 2026. Stay tuned for official announcements regarding the exact dates and venue.'
  },
  {
    question: 'How can I partner with GeoAI CON?',
    answer: 'We offer various partnership opportunities for academic institutions, tech companies, and government organizations. You can reach out to us via the "Partner with us" button in the navigation bar.'
  },
  {
    question: 'Are past conference recordings available?',
    answer: 'Yes, retrospectives and select recordings from past editions like GeoAI CON 2025 are available through our archives and dedicated portal links on this site.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Light background radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-standard relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-20 border border-slate-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          
          <StaggerContainer className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
            
            <div className="lg:col-span-4 space-y-6">
              <StaggerItem className="space-y-4">
                <span className="text-blue-600 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 inline-block shadow-sm">
                  Support Hub
                </span>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-slate-900">
                  Frequently <br />
                  <span className="text-slate-400 italic font-medium">Asked Questions</span>
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Everything you need to know about the upcoming conference and the GeoAI ecosystem.
                </p>
              </StaggerItem>
            </div>
            
            <div className="lg:col-span-8 space-y-4">
              <StaggerContainer className="space-y-4">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <div className="collapse collapse-plus bg-white border border-slate-200 rounded-2xl group/faq hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 shadow-sm">
                      <input type="radio" name="faq-accordion" /> 
                      <div className="collapse-title text-base font-semibold tracking-tight text-slate-800 group-hover/faq:text-blue-600 transition-all duration-300 px-6">
                        {faq.question}
                      </div>
                      <div className="collapse-content px-6"> 
                        <p className="text-slate-600 leading-relaxed max-w-2xl pt-2 pb-4 font-normal text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </StaggerContainer>
        </div>
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map((faq) => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
