// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação Técnica - Quiz UTFPR',
  tagline: 'Projeto de Extensão - Universidade Tecnológica Federal do Paraná',
  url: 'https://quizdocumentation.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jhonatancunha', // Usually your GitHub org/user name.
  projectName: 'quiz_documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: "Blog Quiz UTPFR",
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentação Técnica - Quiz UTFPR',
        logo: {
          alt: 'Documentação Técnica - Quiz UTFPR',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jhonatancunha/quizUTFPR',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guia',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Repositório GitHub',
                href: 'https://github.com/jhonatancunha/quizUTFPR',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Outros',
            items: [
              {
                label: 'Jhonatan LinkedIn',
                href: 'https://www.linkedin.com/in/jhocunha/',
              },
              {
                label: 'Jessé LinkedIn',
                href: 'https://www.linkedin.com/in/jesse-pires-barbato-rocha-933714202/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quiz UTPFR, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'author',
          content: 'Jhonatan Guilherme de Oliveira Cunha, Jessé Pires Barbato Rocha'
        }, 
        { 
          name: 'description',
          content: 'Projeto de Extensão - Universidade Tecnológica Federal do Paraná'
        },
        {
          name: 'keywords', 
          content: 'website, utfpr, quiz, gamification, gamificação'
        },
        { 
          key:"ogdesc",
          name: 'og:description',
          content: 'Projeto de Extensão - Universidade Tecnológica Federal do Paraná'
        },
        { 
          property:"og:description",
          name: 'description',
          content: 'Projeto de Extensão - Universidade Tecnológica Federal do Paraná'
        },
        { 
          key:"ogimage",
          name: 'og:image', 
          content: 'https://quizdocumentation.netlify.app/img/capa.png'
        },
        { 
          name:"image",
          property: 'og:image',
          content: 'https://quizdocumentation.netlify.app/img/capa.png'
        },
        { 
          key:"ogurl",
          name: 'og:url',
          content: 'https://quizdocumentation.netlify.app'
        },
        { 
          key:"ogsitename",
          name: 'og:site_name',
          content: 'Documentação Técnica - Quiz UTFPR'
        },
      ],

    }),
};

module.exports = config;
