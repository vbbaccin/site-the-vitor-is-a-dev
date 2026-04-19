import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function SEOHead({
  title = 'Vitor Baccin - Full-Stack Developer & Arquiteto de Sistemas',
  description = 'Transformo ideias complexas em soluções escaláveis. Especializado em arquitetura robusta, integrações com IA e interfaces modernas que entregam resultado.',
  image = 'https://the-vitor.is-a.dev/og-image.png',
  url = 'https://the-vitor.is-a.dev',
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="Vitor Baccin" />
      <meta name="keywords" content="Full-Stack Developer, React, TypeScript, C#, ASP.NET, IA, Automação, n8n" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
