import { h } from "vue";
import Theme from "vitepress/theme";
import { inBrowser } from "vitepress";

import "../style/main.css";
import "../style/vars.css";
import "../style/custom.css";
import "virtual:uno.css";
import "../style/examples.css";

import HomePage from "../components/HomePage.vue";

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-features-after": () => h(HomePage),
    });
  },

  // enhanceApp({ router, isServer }) {
  //   if (!isServer) {
  //     const applyCustomCSS = () => {
  //       const body = document.body;

  //       if (router.route.path.includes("/example_manual/")) {
  //         body.classList.add("examples-page");
  //       } else {
  //         body.classList.remove("examples-page");
  //       }
  //     };

  //     applyCustomCSS();

  //     router.onAfterRouteChanged = () => {
  //       applyCustomCSS();
  //     };
  //   }
  // },
};
