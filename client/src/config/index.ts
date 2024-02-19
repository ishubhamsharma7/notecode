interface Config {
  options: Object;
  supportedLanguages: Array<{id:number,name:string,compile:boolean}>;
}

const config:Config = {
  options: {
    overviewRulerLanes: 0,
    hideCursorInOverviewRuler: true,
    scrollbar:{
      vertical: "hidden",
      horizontal: "hidden"
    },
    // readOnly: true, //set when is editable is on
    overviewRulerBorder: false,
  },

  supportedLanguages: [
    {
      "id": 75,
      "name": "c",
      "compile":true
    },
    {
      "id": 76,
      "name": "cpp",
      "compile":true

    },
    {
      "id": 51,
      "name": "csharp",
      "compile":true
    },
    {
      id: 4,
      "name": "css",
      "compile":false
    },
    {
      id: 5,
      "name": "dockerfile",
      "compile":false
    },
    {
      "id": 95,
      "name": "go",
      "compile":true
    },
    {
      id: 7,
      "name": "graphql",
      "compile":false
    },
    {
      id: 8,
      "name": "html",
      "compile":false
    },
    {
      "id": 91,
      "name": "java",
      "compile":true

    },
    {
      "id": 93,
      "name": "javascript",
      "compile":true

    },
    {
      id: 11,
      "name": "json",
      "compile":false
    },
    {
      "id": 78,
      "name": "kotlin",
      "compile":true

    },
    {
      "id": 85,
      "name": "perl",
      "compile":true

    },
    {
      id: 13,
      "name": "mysql",
      "compile":false
    },
    {
      id: 14,
      "name": "pgsql",
      "compile":false
    },
    {
      "id": 68,
      "name": "php",
      "compile":true

    },
    {
      "id": 71,
      "name": "python",
      "compile":true

    },
    {
      "id": 80,
      "name": "r",
      "compile":true

    },
    {
      "id": 72,
      "name": "ruby",
      "compile":true

    },
    {
      "id": 73,
      "name": "rust",
      "compile":true

    },
    {
      "id": 82,
      "name": "sql",
      "compile":true

    },
    {
      "id": 83,
      "name": "swift",
      "compile":true

    },
    {
      "id": 74,
      "name": "typescript",
      "compile":true

    },
    {
      id: 22,
      "name": "xml",
      "compile":false
    },
    {
      id: 23,
      "name": "yaml",
      "compile":false

    }
  ]
  // ,
  // statuses: [
  //   {
  //     id: 1,
  //     description: "In Queue",
  //   },
  //   {
  //     id: 2,
  //     description: "Processing",
  //   },
  //   {
  //     id: 3,
  //     description: "Accepted",
  //   },
  //   {
  //     id: 4,
  //     description: "Wrong Answer",
  //   },
  //   {
  //     id: 5,
  //     description: "Time Limit Exceeded",
  //   },
  //   {
  //     id: 6,
  //     description: "Compilation Error",
  //   },
  //   {
  //     id: 7,
  //     description: "Runtime Error (SIGSEGV)",
  //   },
  //   {
  //     id: 8,
  //     description: "Runtime Error (SIGXFSZ)",
  //   },
  //   {
  //     id: 9,
  //     description: "Runtime Error (SIGFPE)",
  //   },
  //   {
  //     id: 10,
  //     description: "Runtime Error (SIGABRT)",
  //   },
  //   {
  //     id: 11,
  //     description: "Runtime Error (NZEC)",
  //   },
  //   {
  //     id: 12,
  //     description: "Runtime Error (Other)",
  //   },
  //   {
  //     id: 13,
  //     description: "Internal Error",
  //   },
  //   {
  //     id: 14,
  //     description: "Exec Format Error",
  //   },
  // ]
};

export default config;
