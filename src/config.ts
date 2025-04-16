export const SITE = {
  website: "https://seesomethingsaysomething.paulapplegate.com/", // replace this with your deployed domain
  author: "Paul Applegate",
  profile: "https://seesomethingsaysomething.paulapplegate.com/",
  desc: "My life.",
  title: "Living Life",
  ogImage: "gustavosalvini-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/theapplegates/seesay/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
