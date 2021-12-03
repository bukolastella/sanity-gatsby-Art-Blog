export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61aa16a70ec45a2a8d9cf653",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-art-blog-studio",
                  apiId: "2f52a3bf-4cae-48e7-83d5-a573a3b67545",
                },
                {
                  buildHookId: "61aa16a7b1cf9b4c6301f944",
                  title: "Blog Website",
                  name: "sanity-gatsby-art-blog",
                  apiId: "bffb960b-a2b0-4b44-9168-5f22f3826563",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bukolastella/sanity-gatsby-Art-Blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-art-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
