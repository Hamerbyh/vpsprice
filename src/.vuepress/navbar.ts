import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Blog",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "KVM VPS",
        icon: "pen-to-square",
        // prefix: "apple/",
        children: [
          { text: "KVM VPS", icon: "pen-to-square", link: "kvm-vps" },
        ],
      },
    ],
  },
]);
