import { defineConfig } from 'vitepress'
import mdImplicitFigures from "markdown-it-implicit-figures";
import mdSuperscript from "markdown-it-sup";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
import amsmathPlugin from "markdown-it-amsmath";
import {markdownItFancyListPlugin} from "markdown-it-fancy-lists";

const figuresSetup = {
  figcaption: "title",
};

const containerSetup = function (
  md: MarkdownIt,
  name: String,
  heading: String,
  format: "tip" | "info" | "warning" | "danger"
) {
  return [
    name,
    {
      render: function (tokens, idx, _options, env) {
        const token = tokens[idx];
        const info = token.info.trim().slice(name.length).trim();
        const attrs = md.renderer.renderAttrs(token);
        const headerString = `${heading} ${info ? `(${info})` : ""}`;
        if (token.nesting === 1) {
          const title = md.renderInline(headerString, {
            references: env.references,
          });
          return `<div class="${format} custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`;
        } else return `</div>\n`;
      },
    },
  ];
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Matematica (M-Z, 2024, Scienze Biologiche)",
  lang: 'it-IT',
  description: "Pagina del corso di Matematica per il corso di Laurea in Scienze Biologiche, canale M-Z, anno accademico 2024-5",
  base: '/~greenblatt/matbio24/',
  lastUpdated: true,
  
   markdown: {
    container: {
	    detailsLabel: 'Soluzione',
	    tipLabel: 'Consiglio'
    },
    math: true,
    config: (md) => {
	    md.use(markdownItFancyListPlugin)
	    ;
	    md.use(amsmathPlugin);
      //md.use(mdImplicitFigures, figuresSetup, markdownItFancyListPlugin)
      //  .use(mdSuperscript)
      //  ;
    },
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    
    sidebar: [
        { text: "Home", link: "/"},
        { text: "Diario delle lezioni", link: "diary"},
        { text: "Domande ed esercizi", link: "esercizi"}
    ],

    locales: {
      root: {
        label: 'Italiano',
        lang: 'it',
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    lastUpdated: {
      text: "Ultimo aggiornamento",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
  
  srcExclude: ['**/README.md', 'drafts/**']
})
