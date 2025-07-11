import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import openapiSidebar from './docs/open-api/sidebar'
import apiReference from './docs/api-reference/sidebar'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  requirement: [
    {
      type: 'category',
      label: 'Introduction',
      items: [{type: 'autogenerated', dirName: 'intro'}],
    },
      {
        type: 'category',
        label: 'Testing',
        link: {
          type: "generated-index",
          title: "Testing API",
          description: 'These endpoints are for TMDB API, they are not related with First Bank product. This is just to showcase that you can test API with this SSG',
          slug: "/category/testing-api",
        },
        items: openapiSidebar
      }
    ],
  guides: [
    {
      type: 'category',
      label: 'Guides',
      items: [{type: 'autogenerated', dirName: 'guides'}],
    },
  ],
  apiReference: [
    {
      type: 'category',
      label: 'API Reference',
      link: {
          type: "generated-index",
          title: "API Rereference",
          description: 'These are endpoint for First Pension Middleware API',
          slug: "/api-reference",
      },
      items: apiReference
    }
  ]
};

export default sidebars;
