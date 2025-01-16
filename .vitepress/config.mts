import { defineConfig } from "vitepress";

import en from "./locales/english.ts";
import ko from "./locales/korean.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rainbow Robotics",
  description: "Document",
  head: [
    ["meta", { name: "theme-color", content: "#729b1a" }],
    ["link", { rel: "icon", href: "logo.png", type: "image/svg+xml" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/RainbowRobotics/" }],
  },

  locales: {
    root: en,
    ko: ko,
    // 다른 언어 추가
  },

  base: "/rb_cobot_docs/",
  cleanUrls: true,
  appearance: "dark",
});
