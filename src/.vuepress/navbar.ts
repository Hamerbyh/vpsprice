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
  {
    text: "VPS Providers",
    icon: "pen-to-square",
    prefix: "/providers/",
    children: [
      {
        text: "Digital Ocean",
        icon: "pen-to-square",
        prefix: "digitalocean/",
        children: [
          { text: "Digital Ocean Price", icon: "pen-to-square", link: "droplet-price" },
        ],
      },
      {
        text: "LightNode",
        icon: "pen-to-square",
        prefix: "lightnode/",
        children: [
          { text: "LightNode Price", icon: "pen-to-square", link: "lightnode-price" },
        ],
      },
    ],
  },
]);
