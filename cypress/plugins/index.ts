/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import { startDevServer } from "@cypress/vite-dev-server";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteJsx from "../../../../../github/vite/packages/plugin-svelte-jsx";

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("dev-server:start", (options) => {
    return startDevServer({
      options,
      viteConfig: {
        define : {
          "process.env": {}
        },
        resolve: {
          alias: {
            "$lib": "/src/lib/",
          },
        },
        plugins: [
          svelte(),
          svelteJsx({}),
        ],
      },
    });
  });
}
