// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap&family=Montserrat:wght@300;600",
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/vvt2ioz.css",
  });
}
