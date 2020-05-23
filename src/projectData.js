const projects = {
  //PYTHON PROJECTS
  pythonTEA: {
    href: "https://github.com/wmcooper2/TotalEnglishAssistant",
    thumb: "thumbs/totalenglishpython.jpg",
    alt: "Total English Dictionary",
    description:
      "CLI and GUI versions of a dictionary for the Total English book series.",
  },

  marioReview: {
    href: "https://github.com/wmcooper2/TotalEnglishReviewGame",
    thumb: "thumbs/marioquizgame.jpg",
    alt: "Total English Quiz Game",
    description:
      "A turn-based mario-themed quiz game using the material from the Total English book series.",
  },

  lyricScraper: {
    href: "https://github.com/wmcooper2/lyricscraping",
    thumb: "thumbs/lyricscraper.jpg",
    alt: "Lyrics Scraper",
    description: "A GUI tool for tracking scraping progress from lyrics.com.",
  },

  lyricSearch: {
    href: "https://github.com/wmcooper2/lyricsearch",
    thumb: "thumbs/lyrics-dot-com.jpg",
    alt: "Lyrics Search",
    description:
      "A CLI tool to search through the lyrics scraped from lyrics.com.",
  },

  billboardScraper: {
    href: "https://github.com/wmcooper2/billboardtop100",
    thumb: "thumbs/billboardscraper.jpg",
    alt: "Billboard Top 100 Scraper",
    description:
      "A GUI tool for tracking scraping progress from Billboard Top100.",
  },

  piCluster: {
    href: "https://github.com/wmcooper2/picluster",
    thumb: "thumbs/raspberry-pi-logo.jpg",
    alt: "Raspberry Pi Cluster",
    description: "Control a Raspberry Pi cluster from a laptop wirelessly.",
  },

  pictureCollector: {
    href: "https://github.com/wmcooper2/picturecollector",
    thumb: "thumbs/remote-picture-collector.jpg",
    alt: "Remote Picture Collector",
    description:
      "A GUI tool for collecting images wirelessly from a Raspberry Pi webcam using SSH.",
  },

  machineScripts: {
    href: "https://github.com/wmcooper2/machinesetup",
    thumb: "thumbs/machinesetupscripts.jpg",
    alt: "New Machine Setup Scripts",
    description: "Various scripts for setting up my machines.",
  },

  transitFares: {
    href: "https://github.com/wmcooper2/google-maps-transit-fares",
    thumb: "thumbs/transitfares.jpg",
    alt: "Transit Fares Collector",
    description:
      "A CLI tool for scraping transit fares from Google Maps using pyautogui.",
  },

  //JAVASCRIPT PROJECTS
  keeylyTribute: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/tribute/tribute.html",
    thumb: "thumbs/keelytribute.jpg",
    alt: "Tribute Page",
    description:
      "A tribute page for my favorite (although fradulent) historical figure, John Keely. A FCC project.",
  },

  simpleSurvey: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/survey/survey.html",
    thumb: "thumbs/survey.jpg",
    alt: "Simple Survey",
    description: "A questionnaire form. A FCC project.",
  },

  fakeProduct: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/fake-product/product.html",
    thumb: "thumbs/product.jpg",
    alt: "Fake Product",
    description: "A fictional product landing page. A FCC project.",
  },

  techDoc: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/technical-documentation/techdoc.html",
    thumb: "thumbs/techdoc.jpg",
    alt: "Tech Page",
    description: "A technical documentation page. A FCC project.",
  },

  markdownPreview: {
    href: "https://wmcooper2.com/markdown-previewer/",
    thumb: "thumbs/markdownpreviewer.jpg",
    alt: "Markdown Preview",
    description: "A markdown previewer. A FCC project.",
  },

  quoteMachine: {
    href: "https://wmcooper2.com/random-quote-machine",
    thumb: "thumbs/quotemachine.jpg",
    alt: "Quote Machine",
    description: "A random quote machine of 100 famous quotes. A FCC project.",
  },

  drumMachine: {
    href: "https://codepen.io/wmcooper2/full/GRRRjZY",
    thumb: "thumbs/drummachine.jpg",
    alt: "Drum Machine",
    description:
      "Click or press the keys to play sounds from Super Mario World. A FCC project.",
  },

  calculator: {
    href: "https://codepen.io/wmcooper2/full/jOOWVVg",
    thumb: "thumbs/javascriptcalculator.jpg",
    alt: "Calculator",
    description: "A calculator written in JavaScript. A FCC project.",
  },

  pomodoroClock: {
    href: "https://codepen.io/wmcooper2/full/qBBqeLM",
    thumb: "thumbs/pomodoroclock.jpg",
    alt: "Pomodoro Clock",
    description: "A Yoshi's Island themed pomodoro clock. A FCC project.",
  },

  barChart: {
    href: "https://codepen.io/wmcooper2/full/YzPromN",
    thumb: "thumbs/barchart.jpg",
    alt: "Bar Chart",
    description: "An interactive barchart of US GDP. A FCC project.",
  },

  scatterPlot: {
    href: "https://codepen.io/wmcooper2/full/LYEeEpV",
    thumb: "thumbs/scatterplot.jpg",
    alt: "Scatter Plot",
    description:
      "An interactive scatter plot of drug use in bike races. A FCC project.",
  },

  heatMap: {
    href: "https://codepen.io/wmcooper2/full/ExaoGaM",
    thumb: "thumbs/heatmap.jpg",
    alt: "Heat Map",
    description:
      "An interactive heat map of temperature variance. A FCC project.",
  },

  choroplethMap: {
    href: "https://codepen.io/wmcooper2/full/xxbjxRr",
    thumb: "thumbs/choroplethmap.jpg",
    alt: "Choropleth Map",
    description:
      "An interactive choropleth map of education in the US. A FCC project.",
  },

  treeMap: {
    href: "https://codepen.io/wmcooper2/full/mdyLqdx",
    thumb: "thumbs/treemap.jpg",
    alt: "Tree Map",
    description:
      "An interactive tree map of kickstarter projects. A FCC project.",
  },

  colorChangingTiles: {
    href: "https://teflassistant.com/color-changing-tiles/",
    thumb: "thumbs/colorchangingtiles.jpg",
    alt: "Color Changing Tiles",
    description:
      "Generic tool for tracking game state between teams of colors.",
  },

  matchGame: {
    href: "https://teflassistant.com/match-game/#/",
    thumb: "thumbs/matchgame.jpg",
    alt: "Match Game",
    description: "Match-game for vocabulary building in elementary school.",
  },

  hidingSpotGame: {
    href: "https://teflassistant.com/hiding-spot-game/#/",
    thumb: "thumbs/hidingspotgame.jpg",
    alt: "Hiding Spot Game",
    description: "'Find the hiding spot' game for elementary school.",
  },

  teaSentences: {
    href: "https://teflassistant.com/tea-sentences/",
    thumb: "thumbs/teasentence.jpg",
    alt: "Sentence Lookup",
    description:
      "Help for making sentences using only material from the Total English book series.",
  },

  teaDictionary: {
    href: "https://teflassistant.com/tea-dictionary/",
    thumb: "thumbs/teadictionary.jpg",
    alt: "Dictionary Lookup",
    description: "Dictionary for the Total English book series.",
  },

  volunteers: {
    href: "https://teflassistant.com/volunteers/",
    thumb: "thumbs/volunteers.jpg",
    alt: "Volunteers",
    description: "Choose students at random.",
  },

  pokemonPronouns: {
    href: "https://teflassistant.com/pokemon-pronouns/",
    thumb: "thumbs/pokemonpronouns.jpg",
    alt: "Pokemon Pronouns",
    description: "Pikachu explain English pronouns to Charizard.",
  },

  tokyoPython: {
    href: "https://tokyopython.com/",
    thumb: "thumbs/tokyopython.jpg",
    alt: "Tokyo Python",
    description: "A work in progress about Python in Tokyo.",
  },

  teflAssistant: {
    href: "https://teflassistant.com/",
    thumb: "thumbs/teflassistant.jpg",
    alt: "TEFL Assistant",
    description: "A site for TEFL teachers.",
  },

  simpleResume: {
    href: "https://wmcooper2.com/resume",
    thumb: "thumbs/simpleresume.jpg",
    alt: "My Web Resume",
    description: "My web resume in English and Japanese.",
  },
};

export default projects;
