import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "VPSPrice",
  description: "Recommend best and cheap VPS. Get high-performance VPS Hosting servers.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
