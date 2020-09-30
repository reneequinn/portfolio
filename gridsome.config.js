// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Renee Quinn',
  siteDescription:
    'Portfolio for Renee Quinn - front-end developer and UI/UX designer',
  siteUrl: 'https://reneequinn.dev',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set('@img', '@/assets/img');
  },
};
