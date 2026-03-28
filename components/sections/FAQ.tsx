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
    <section id="faq" className="section-padding bg-transparent border-b border-base-300/50">
      <div className="container-standard bg-base-100/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-base-200/50">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary uppercase text-sm font-semibold tracking-widest">Support</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h3>
        </FadeIn>
        
        <StaggerContainer className="max-w-4xl mx-auto divide-y divide-base-300">
          {faqs.map((faq, index) => (
            <StaggerItem key={index} className="py-6">
              <div className="collapse collapse-plus bg-base-200/50">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content"> 
                  <p className="text-base-content/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
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
