module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "jake", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "What I Learned Today", // Site title.
  siteTitleAlt: "A Daily Engineering Blog", // Alternative site title for SEO.
  siteLogo:
    "/blog/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://aceluby.github.io/", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A technology blog for software engineers", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/blog/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  cover:
      "/blog/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "What I Learned Today", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://aceluby.github.io/resume/",
    "https://stackoverflow.com/users/11500664/jake-luby",
    "https://twitter.com/aceluby",
    "mailto:jake.luby@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Tag - Misc",
      url: "/blog/tags/misc",
    },
    {
      label: "Tag - Gatsby",
      url: "/blog/tags/gatsby",
    },
    {
      label: "Tag - ReactJs",
      url: "/blog/tags/reactjs",
    },
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "What I Learned Today" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
