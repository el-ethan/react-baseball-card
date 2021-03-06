const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/baseball-card/',

  siteMetadata: {
    title: 'Baseball Card',
    description: 'Simple baseball card component',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/ethan/localdev/baseball-card/.docz',
        base: '/baseball-card/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Baseball Card',
        description: 'Simple baseball card component',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/ethan/localdev/baseball-card',
          templates:
            '/Users/ethan/localdev/baseball-card/node_modules/docz-core/dist/templates',
          docz: '/Users/ethan/localdev/baseball-card/.docz',
          cache: '/Users/ethan/localdev/baseball-card/.docz/.cache',
          app: '/Users/ethan/localdev/baseball-card/.docz/app',
          appPackageJson: '/Users/ethan/localdev/baseball-card/package.json',
          appTsConfig: '/Users/ethan/localdev/baseball-card/tsconfig.json',
          gatsbyConfig: '/Users/ethan/localdev/baseball-card/gatsby-config.js',
          gatsbyBrowser:
            '/Users/ethan/localdev/baseball-card/gatsby-browser.js',
          gatsbyNode: '/Users/ethan/localdev/baseball-card/gatsby-node.js',
          gatsbySSR: '/Users/ethan/localdev/baseball-card/gatsby-ssr.js',
          importsJs: '/Users/ethan/localdev/baseball-card/.docz/app/imports.js',
          rootJs: '/Users/ethan/localdev/baseball-card/.docz/app/root.jsx',
          indexJs: '/Users/ethan/localdev/baseball-card/.docz/app/index.jsx',
          indexHtml: '/Users/ethan/localdev/baseball-card/.docz/app/index.html',
          db: '/Users/ethan/localdev/baseball-card/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
