/**
 * Robots.txt dinâmico para SEO
 */

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://adrianaborges.com.br/sitemap.xml',
  };
}
