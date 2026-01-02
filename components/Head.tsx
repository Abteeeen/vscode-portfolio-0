import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  const pageTitle = "Abhiram Anil | Data Scientist & AI Engineer";
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content="Portfolio of Abhiram Anil - Expert in Data Science, AI, and Automation."
      />
      <meta
        name="keywords"
        content="Abhiram Anil, Abhiram, Data Scientist, AI Engineer, Portfolio, Data Science, AI, Automation, Machine Learning, n8n, SaaS, Python"
      />
      <meta property="og:title" content="Abhiram Anil's Portfolio" />
      <meta
        property="og:description"
        content="Portfolio of Abhiram Anil - Expert in Data Science, AI, and Automation."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;
