const config = {
  
  messages: {
    errorBoundary: {
      somethingWentWrong: 'Oooops... Sorry, I guess, something went wrong. You can:',
      resetApp: 'Press here to reset the application',
      openIssue: 'Press here to open issue about it on GitHub',
    },
    invalidOptions: 'Seems like options file is not a valid json, please double check it.'
  },

  urls: {
    octocatIcon: '/icons/octocat.png',
    themeModeIcon: '/icons/theme-mode.png',
    IEditorOptions: 'https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html#acceptSuggestionOnCommitCharacter',
  },

  options: {
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: 'on',
    accessibilitySupport: 'auto',
    autoIndent: false,
    automaticLayout: true,
    codeLens: true,
    colorDecorators: true,
    contextmenu: true,
    cursorBlinking: 'blink',
    cursorSmoothCaretAnimation: false,
    cursorStyle: 'line',
    disableLayerHinting: false,
    disableMonospaceOptimizations: false,
    dragAndDrop: false,
    fixedOverflowWidgets: false,
    folding: true,
    foldingStrategy: 'auto',
    fontLigatures: false,
    formatOnPaste: false,
    formatOnType: false,
    highlightActiveIndentGuide: true,
    links: true,
    mouseWheelZoom: false,
    multiCursorMergeOverlapping: true,
    multiCursorModifier: 'alt',
    quickSuggestions: true,
    quickSuggestionsDelay: 100,
    readOnly: false,
    renderControlCharacters: false,
    renderFinalNewline: true,
    renderIndentGuides: true,
    renderLineHighlight: 'all',
    renderWhitespace: 'none',
    revealHorizontalRightPadding: 30,
    roundedSelection: true,
    rulers: [],
    selectOnLineNumbers: true,
    selectionClipboard: true,
    selectionHighlight: true,
    showFoldingControls: 'mouseover',
    suggestOnTriggerCharacters: true,
    wordBasedSuggestions: true,
    // eslint-disable-next-line
    wordSeparators: `~!@#$%^&*()-=+[{]}\|;:'",.<>/?`,
    wordWrap: 'off',
    wordWrapBreakAfterCharacters: '\t})]?|&,;',
    wordWrapBreakBeforeCharacters: '{([+',
    wordWrapBreakObtrusiveCharacters: '.',
    wordWrapColumn: 80,
    wordWrapMinified: true,
    wrappingIndent: 'none',
    overviewRulerLanes: 0,
    hideCursorInOverviewRuler: true,
    scrollbar:{
      vertical: "hidden",
      horizontal: "hidden"
    },
    overviewRulerBorder: false,
  },

  supportedLanguages: [{id:1,name:'apex'},{id:2,name:'azcli'},{id:3,name:'bat'},{id:4,name:'c'},{id:5,name:'clojure'},{id:6,name:'coffeescript'},{id:7,name:'cpp'},{id:8,name:'csharp'},{id:9,name:'csp'},{id:10,name:'css'},{id:11,name:'dockerfile'},{id:12,name:'fsharp'},{id:13,name:'go'},{id:14,name:'graphql'},{id:15,name:'handlebars'},{id:16,name:'html'},{id:17,name:'ini'},{id:18,name:'java'},{id:19,name:'javascript'},{id:20,name:'json'},{id:21,name:'kotlin'},{id:22,name:'less'},{id:23,name:'lua'},{id:24,name:'markdown'},{id:25,name:'msdax'},{id:26,name:'mysql'},{id:27,name:'objective-c'},{id:28,name:'pascal'},{id:29,name:'perl'},{id:30,name:'pgsql'},{id:31,name:'php'},{id:32,name:'plaintext'},{id:33,name:'postiats'},{id:34,name:'powerquery'},{id:35,name:'powershell'},{id:36,name:'pug'},{id:37,name:'python'},{id:38,name:'r'},{id:39,name:'razor'},{id:40,name:'redis'},{id:41,name:'redshift'},{id:42,name:'ruby'},{id:43,name:'rust'},{id:44,name:'sb'},{id:45,name:'scheme'},{id:46,name:'scss'},{id:47,name:'shell'},{id:48,name:'sol'},{id:49,name:'sql'},{id:50,name:'st'},{id:51,name:'swift'},{id:52,name:'tcl'},{id:53,name:'typescript'},{id:54,name:'vb'},{id:55,name:'xml'},{id:56,name:'yaml'}],
};

export default config;
