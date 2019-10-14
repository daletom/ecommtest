module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
    products: [
      {
        slug: 'bloom',
        name: 'Bloom',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/pacificandco-calcetines-socks-original-creative-women-BLOOM-perfil-1.jpg',
        price: 14.95,
      },
      {
        slug: 'las-vegas',
        name: 'Las Vegas',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/pacificandco-calcetines-socks-original-creative-funny-LASVEGAS-lemon-perfil-1.jpg',
        price: 13.95,
      },
      {
        slug: 'blue-limbo',
        name: 'Blue limbo',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/pacificandco-calcetines-socks-original-creative-funny-BLUELIMBO-perfil-1.jpg',
        price: 13.95,
      },
      {
        slug: 'ocean',
        name: 'Ocean',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/calcetines-ocean-perfil-pacificandco-socks.jpg',
        price: 13.95,
      },
      {
        slug: 'monkey-gang',
        name: 'Monkey gang',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/calcetines-monkey-gang-perfil-pacificandco-socks.jpg',
        price: 12.95,
      },
      {
        slug: 'colorful',
        name: 'Colorful',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/calcetines-colorful-perfil-pacificandco-socks.jpg',
        price: 14.95,
      },
      {
        slug: 'street-faces',
        name: 'Street faces',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/pacificandco-calcetines-socks-creative-artist-summer-fashion-STREET-FACES-perfil-300x300.jpg',
        price: 14.95,
      },
      {
        slug: 'magic-museum',
        name: 'Magic museum',
        image: 'https://www.pacificandco.com/wp-content/uploads/2014/12/pacificandco-calcetines-socks-original-creative-funny-MAGICMUSEUM-perfil-1.jpg',
        price: 12.95,
      }
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `27387b3aed04da1696417d553b3727`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL
        apiUrl: 'https://commercelayer-imgix.admin.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
  ],
}
