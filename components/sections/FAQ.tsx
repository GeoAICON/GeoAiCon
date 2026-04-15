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
    <section id="faq" className="section-padding bg-transparent">
      <div className="container-standard">
        <div className="bg-base-100/40 backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-20 border border-base-300/50 shadow-2xl relative overflow-hidden group">
          
          <StaggerContainer className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
            
            <div className="lg:col-span-4 space-y-6">
              <StaggerItem className="space-y-4">
                <span className="text-primary text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 border border-primary/20 rounded-full bg-primary/5 inline-block">
                  Support Hub
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Frequently <br />
                  <span className="text-base-content/30 italic font-medium">Asked Questions</span>
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-base-content/60 text-lg leading-relaxed">
                  Everything you need to know about the upcoming conference and the GeoAI ecosystem.
                </p>
              </StaggerItem>
            </div>
            
            <div className="lg:col-span-8 space-y-4">
              <StaggerContainer className="divide-y divide-base-300/30">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index} className="py-2">
                    <div className="collapse collapse-plus bg-transparent group/faq">
                      <input type="radio" name="faq-accordion" /> 
                      <div className="collapse-title text-xl font-bold tracking-tight group-hover/faq:pl-2 transition-all duration-300">
                        {faq.question}
                      </div>
                      <div className="collapse-content"> 
                        <p className="text-base-content/60 leading-relaxed max-w-2xl py-2">
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
