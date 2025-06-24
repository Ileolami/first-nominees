import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'First Nominees',
  tagline: 'First Nominees',
  favicon: '/img/firstlogo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://first-nominees.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gems', // Usually your GitHub org/user name.
  projectName: 'firstnominees', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ileolami/first-nominees',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ileolami/first-nominees',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'static/img/first.png',
    navbar: {
      title: '',
      logo: {
        alt: 'First Nominee',
        src: '/img/first.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'requirement',
          position: 'right',
          label: 'Docs',
        },
          {
          type: 'docSidebar',
          sidebarId: 'guides',
          position: 'right',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiReference',
          position: 'right',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      
    },
  } satisfies Preset.ThemeConfig,
   plugins: [
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: "api", 
          docsPluginId: "classic", 
          config: {
            apireference: {
              specPath: "openapi.yaml", 
              outputDir: "docs/open-api", 
              sidebarOptions: {
                groupPathsBy: 'tag',           
                categoryLinkSource: 'tag',  
              },
            } satisfies OpenApiPlugin.Options,
          }
        },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
