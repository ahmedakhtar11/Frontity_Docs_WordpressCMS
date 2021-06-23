const settings = {
  "name": "frontity-docs-app",
  "state": {
    "frontity": {
      "url": "https://moneypowerdictionary.com",
      "title": "DevCenter | Documentation",
      "description": "Technical Documentation."
    }
  },
  "packages": [
    { 
      "name": "documentation-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://moneypowerdictionary.com/wp-json",
          "homepage": "/",
          "postsPage": "blog",
          "params": {
            "per_page": 100
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
};

export default settings;
