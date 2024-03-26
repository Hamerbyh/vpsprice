import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Providers",
      icon: "book",
      prefix: "providers/",
      children:[
        {
          text: "Digital Ocean",
          icon: "pen-to-square",
        prefix: "digitalocean/",
        children:[
          { text: "Droplets Price", icon: "pen-to-square", link: "droplet-price" },
        ]
        },
      ]
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
