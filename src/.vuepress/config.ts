import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { sitemapPlugin } from '@vuepress/plugin-sitemap';

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "VPSPrice",
  description: "Recommend best and cheap VPS. Get high-performance VPS Hosting servers.",

  theme,

  plugins: [
    // 调用 sitemapPlugin 并传入配置选项（如果有的话）
    sitemapPlugin({
      // 这里是 sitemapPlugin 的配置选项
      hostname: 'https://vpsprice.net', // 例如，这是生成站点地图时必须的基础 URL
      // 你可以添加更多选项来定制站点地图的生成
    }),

    
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});


