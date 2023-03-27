import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Samuel Yona Killagane university students"
      />
      <meta
        name="keywords"
        content="samuel killagane, yona, killagane, web developer portfolio, samuel web developer, killagane developer, nextjs, samuel killagane portfolio"
      />
      <meta property="og:title" content="Samuel Killgane" />
      <meta
        property="og:description"
        content="A full-stack developer with exquisitie taste in computers and cars."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Samuel Killagane',
};
