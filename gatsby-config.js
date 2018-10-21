module.exports = {
  siteMetadata: {
    title: 'Tony Brown\'s Blog',
    description: 'A blog mostly about JavaScript',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
}