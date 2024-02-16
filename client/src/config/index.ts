interface Config {
  options: Object,
  supportedLanguages: Array<Object>
}

const config:Config = {
  options: {
    overviewRulerLanes: 0,
    hideCursorInOverviewRuler: true,
    scrollbar:{
      vertical: "hidden",
      horizontal: "hidden"
    },
    overviewRulerBorder: false,
  },

  supportedLanguages: [
    {
      "id": 1,
      "name": "c"
    },
    {
      "id": 2,
      "name": "cpp"
    },
    {
      "id": 3,
      "name": "csharp"
    },
    {
      "id": 4,
      "name": "css"
    },
    {
      "id": 5,
      "name": "dockerfile"
    },
    {
      "id": 6,
      "name": "go"
    },
    {
      "id": 7,
      "name": "graphql"
    },
    {
      "id": 8,
      "name": "html"
    },
    {
      "id": 9,
      "name": "java"
    },
    {
      "id": 10,
      "name": "javascript"
    },
    {
      "id": 11,
      "name": "json"
    },
    {
      "id": 12,
      "name": "kotlin"
    },
    {
      "id": 13,
      "name": "mysql"
    },
    {
      "id": 14,
      "name": "pgsql"
    },
    {
      "id": 15,
      "name": "php"
    },
    {
      "id": 16,
      "name": "python"
    },
    {
      "id": 17,
      "name": "r"
    },
    {
      "id": 18,
      "name": "ruby"
    },
    {
      "id": 19,
      "name": "rust"
    },
    {
      "id": 20,
      "name": "sql"
    },
    {
      "id": 21,
      "name": "typescript"
    },
    {
      "id": 22,
      "name": "xml"
    },
    {
      "id": 23,
      "name": "yaml"
    }
  ]
};

export default config;
