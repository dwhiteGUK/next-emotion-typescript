import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// @todo Change this to be the actual URL without trailing slash
const base = ''; //'https://gentingcasinos.co.uk';

const fallbacks = {
  title: 'Genting Casinos | UK Casinos | Find Your Nearest Casino | Genting Casino',
  description: 'Find a Genting UK Casino near you and plan your visit. Play casino games, from poker tournaments to slots and tables at your local Casino.',
  image: `${base}/assets/images/open-graph.jpg`,
};

type Props = {
  // Shows up on search engines
  seo_title?: string | null,
  seo_description?: string | null,
  seo_canonical?: string | null,
  // Shows up on shares
  share_title?: string | null,
  share_description?: string | null,
  share_image?: string | null,
  // Controls crawlers
  robots_noindex?: boolean,
  robots_nofollow?: boolean,
  robots_noarchive?: boolean,
  // FB only shit
  appId?: string | null,
  // All other crap
  children?: ReactNode,
};

// appId can be omitted. Facebook will whine if it is omitted, but that
// doesn't matter, s'all good man.

// Twitter _should_ read the OG tags for title, description, and image but
// we've left them in because some validators may bitch if they're missing.

// Canonical is optional - by default the current URL of the page minus
// query parameters will be used but can be overridden case-by-case purposes

export function SeoHead(props: Props) {
  const {
    seo_title, seo_description, seo_canonical,
    share_title, share_description, share_image,
    robots_noindex = false, robots_nofollow = false, robots_noarchive = false,
    appId,
    children,
  } = props;

  let { asPath } = useRouter();

  // Remove leading and trailing slashes
  asPath = asPath.replace(/^\/|\/$/g, '');

  const robots = [
    robots_noindex ? 'noindex' : 'index',
    robots_nofollow ? 'nofollow' : 'follow',
  ];

  if (robots_noarchive) {
    robots.push('noarchive');
  }

  return (
    <Head>
      {/* Standard Meta */}
      <title>{seo_title || fallbacks.title}</title>
      <meta name="description" content={seo_description || fallbacks.description} />
      <meta name="robots" content={robots.join(',')} />
      <link rel="canonical" href={`${base}/${seo_canonical || asPath.split('?')[0]}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Genting Casinos" />
      <meta property="og:url" content={`${base}/${asPath}`} />
      <meta property="og:title" content={share_title || fallbacks.title} />
      <meta property="og:description" content={share_description || fallbacks.description} />
      <meta property="og:image" content={share_image || fallbacks.image} />

      {/* Facebook */}
      {appId ? <meta property="fb:app_id" content={appId} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Genting_Casinos" />
      <meta name="twitter:site" content="@Genting_Casinos"/ >
      <meta name="twitter:url" content={`${base}/${asPath}`} />
      <meta name="twitter:title" content={share_title || fallbacks.title} />
      <meta name="twitter:description" content={share_description || fallbacks.description} />
      <meta name="twitter:image" content={share_image || fallbacks.image} />

      {/* Other head stuff */}
      {children}
    </Head>
  );
}
