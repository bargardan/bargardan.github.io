self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/bargardan(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next|images|fonts|favicon.ico|robots.txt|sitemap.xml).*))(\\\\.json)?[\\/#\\?]?$",
    "originalSource": "/((?!_next|images|fonts|favicon.ico|robots.txt|sitemap.xml).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()