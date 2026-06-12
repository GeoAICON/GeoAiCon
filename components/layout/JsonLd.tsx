'use client';

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.geoaicon.com';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    'name': 'GeoAI CON',
    'url': baseUrl,
    'logo': `${baseUrl}/Logo1.png`,
    'sameAs': [
      'https://www.facebook.com/people/Geoaicon/61582803331985/',
      'https://www.instagram.com/geoaicon/',
      'https://www.linkedin.com/groups/15392053/',
      'https://github.com/GeoAICON'
    ],
    'description': 'The premier global conference series at the intersection of Geospatial AI and Intelligent Systems.'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    'url': baseUrl,
    'name': 'GeoAI CON Brand Portal',
    'publisher': { '@id': `${baseUrl}/#organization` },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': baseUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
