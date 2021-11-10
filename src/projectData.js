const projects = {
  //PYTHON PROJECTS
  pythonTEA: {
    href: "https://github.com/wmcooper2/TotalEnglishAssistant",
    thumb: "thumbs/totalenglishpython.jpg",
    alt: "Total English Dictionary",
    description:
      "CLI and GUI versions of a dictionary for the Total English book series.",
    skills: ["Python", "Tkinter"],
    github: "https://github.com/wmcooper2/TotalEnglishAssistant",
  },

  marioReview: {
    href: "https://github.com/wmcooper2/TotalEnglishReviewGame",
    thumb: "thumbs/marioquizgame.jpg",
    alt: "Total English Quiz Game",
    description:
      "A turn-based mario-themed quiz game using the material from the Total English book series.",
    skills: ["Python", "Pyglet"],
    github: "https://github.com/wmcooper2/TotalEnglishReviewGame",
  },

  lyricScraper: {
    href: "https://github.com/wmcooper2/lyricscraping",
    thumb: "thumbs/lyricscraper.jpg",
    alt: "Lyrics Scraper",
    description: "A GUI tool for tracking scraping progress from lyrics.com.",
    skills: ["Python", "Tkinter", "Beautiful Soup"],
    github: "https://github.com/wmcooper2/lyricscraping",
  },

  lyricSearch: {
    href: "https://github.com/wmcooper2/lyricsearch",
    thumb: "thumbs/lyrics-dot-com.jpg",
    alt: "Lyrics Search",
    description:
      "A CLI tool to search through the lyrics scraped from lyrics.com.",
    skills: ["Python"],
    github: "https://github.com/wmcooper2/lyricsearch",
  },

  billboardScraper: {
    href: "https://github.com/wmcooper2/billboardtop100",
    thumb: "thumbs/billboardscraper.jpg",
    alt: "Billboard Top 100 Scraper",
    description:
      "A GUI tool for tracking scraping progress from Billboard Top100.",
    skills: ["Python", "Tkinter", "Beautiful Soup"],
    github: "https://github.com/wmcooper2/billboard-top-100-scraper",
  },

  piCluster: {
    href: "https://github.com/wmcooper2/picluster",
    thumb: "thumbs/raspberry-pi-logo.jpg",
    alt: "Raspberry Pi Cluster",
    description: "Control a Raspberry Pi cluster from a laptop wirelessly.",
    skills: ["Python"],
    github: "https://github.com/wmcooper2/picluster",
  },

  pictureCollector: {
    href: "https://github.com/wmcooper2/picturecollector",
    thumb: "thumbs/remote-picture-collector.jpg",
    alt: "Remote Picture Collector",
    description:
      "A GUI tool for collecting images wirelessly from a Raspberry Pi webcam using SSH.",
    skills: ["Python"],
    github: "https://github.com/wmcooper2/picturecollector",
  },

  machineScripts: {
    href: "https://github.com/wmcooper2/machinesetup",
    thumb: "thumbs/machinesetupscripts.jpg",
    alt: "New Machine Setup Scripts",
    description: "Various scripts for setting up my machines.",
    skills: ["Python", "Bash"],
    github: "https://github.com/wmcooper2/scripts",
  },

  transitFares: {
    href: "https://github.com/wmcooper2/google-maps-transit-fares",
    thumb: "thumbs/transitfares.jpg",
    alt: "Transit Fares Collector",
    description:
      "A CLI tool for scraping transit fares from Google Maps using pyautogui.",
    skills: ["Python", "PyAutoGui"],
    github: "https://github.com/wmcooper2/google-maps-transit-fares",
  },

  passwordMaker: {
    href: "https://github.com/wmcooper2/password-maker",
    thumb: "thumbs/password-maker.jpg",
    alt: "Password Maker",
    description:
      "A CLI tool for making passwords.",
    skills: ["Python"],
    github: "https://github.com/wmcooper2/password-maker",
  },

  spriteExtractor: {
    href: "https://github.com/wmcooper2/remove-sprite-backgrounds.git",
    thumb: "thumbs/sprite-extractor.jpg",
    alt: "Sprite Extractor",
    description:
      "A GUI tool to extract game sprites.",
    skills: ["Python", "Pyglet"],
    github: "https://github.com/wmcooper2/remove-sprite-backgrounds.git",
  },

  handwritingTemplate: {
    href: "https://github.com/wmcooper2/handwriting-template-prep",
    thumb: "thumbs/handwriting-template.jpg",
    alt: "Handwriting Template",
    description:
      "A tool for extracting handwritten letters from the template document.",
    skills: ["Python", "OpenCV", "Jupyter"],
    github: "https://github.com/wmcooper2/handwriting-template-prep",
  },








  //JAVASCRIPT PROJECTS
  issueTracker: {
    href: "https://wmcooper2.com/issue-tracker",
    thumb: "thumbs/issue-tracker.jpg",
    alt: "Issue Tracker",
    description:
      "An issue tracking app (current project, in progress).",
    skills: ["HTML", "JavaScript", "React", "Redux", "MongoDB", "Express", "Node"],
    github: "https://github.com/wmcooper2/issue-tracker",
  },

  keelyTribute: {
    href: "https://wmcooper2.com/tribute-page",
    thumb: "thumbs/tribute-page.jpg",
    alt: "Tribute Page",
    description:
      "A tribute page for my favorite (although fradulent) historical figure, John Keely. A FCC project.",
    skills: ["HTML", "CSS"],
    github: "https://github.com/wmcooper2/fcc-tribute-page",
  },

  keelyTributeV2: {
    href: "https://wmcooper2.com/tribute-page-v2",
    thumb: "thumbs/tribute-page-v2.jpg",
    alt: "Upgraded Tribute Page",
    description: "An upgraded version of my original tribute page.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/tribute-page-v2",
  },

  simpleSurvey: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/survey/survey.html",
    thumb: "thumbs/survey.jpg",
    alt: "Simple Survey",
    description: "A questionnaire form. A FCC project.",
    skills: ["HTML", "CSS"],
    github: null,
  },

  simpleSurveyV2: {
    href: "https://wmcooper2.com/simple-survey-v2",
    thumb: "thumbs/simple-survey-v2.jpg",
    alt: "Upgraded Simple Survey",
    description:
      "An upgraded version of my original survey page. Now, with Mongo DB.",
    skills: ["CSS", "JavaScript", "MongoDB", "Pug", "Express"],
    github: "https://github.com/wmcooper2/simple-survey-v2",
  },

  fakeProduct: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/fake-product/product.html",
    thumb: "thumbs/product.jpg",
    alt: "Fake Product",
    description: "A fictional product landing page. A FCC project.",
    skills: ["HTML", "CSS"],
    github: null,
  },

  techDoc: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/technical-documentation/techdoc.html",
    thumb: "thumbs/techdoc.jpg",
    alt: "Tech Page",
    description: "A technical documentation page. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: null,
  },

  markdownPreview: {
    href: "https://wmcooper2.com/markdown-preview/",
    thumb: "thumbs/markdown-preview.jpg",
    alt: "Markdown Preview",
    description: "A markdown previewer. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/wmcooper2/fcc-markdown-preview",
  },

  quoteMachine: {
    href: "https://wmcooper2.com/random-quote-machine",
    thumb: "thumbs/random-quote-machine.jpg",
    alt: "Random Quote Machine",
    description: "A random quote machine of 100 famous quotes. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/wmcooper2/fcc-random-quote-machine",
  },

  drumMachine: {
    href: "https://codepen.io/wmcooper2/full/GRRRjZY",
    thumb: "thumbs/drum-machine.jpg",
    alt: "Drum Machine",
    description:
      "Click or press the keys to play sounds from Super Mario World. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/wmcooper2/fcc-drum-machine",
  },

  calculator: {
    href: "https://codepen.io/wmcooper2/full/jOOWVVg",
    thumb: "thumbs/javascript-calculator.jpg",
    alt: "Calculator",
    description: "A calculator written in JavaScript. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/wmcooper2/fcc-javascript-calculator",
  },

  pomodoroClock: {
    href: "https://wmcooper2.com/pomodoro-clock",
    thumb: "thumbs/pomodoro-clock.jpg",
    alt: "Pomodoro Clock",
    description: "A Yoshi's Island themed pomodoro clock. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/fcc-pomodoro-clock",
  },

  barChart: {
    href: "https://codepen.io/wmcooper2/full/YzPromN",
    thumb: "thumbs/bar-chart.jpg",
    alt: "Bar Chart",
    description: "An interactive barchart of US GDP. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript", "D3"],
    github: null,
  },

  scatterPlot: {
    href: "https://codepen.io/wmcooper2/full/LYEeEpV",
    thumb: "thumbs/scatter-plot.jpg",
    alt: "Scatter Plot",
    description:
      "An interactive scatter plot of drug use in bike races. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript", "D3"],
    github: null,
  },

  heatMap: {
    href: "https://codepen.io/wmcooper2/full/ExaoGaM",
    thumb: "thumbs/heat-map.jpg",
    alt: "Heat Map",
    description:
      "An interactive heat map of temperature variance. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript", "D3"],
    github: null,
  },

  choroplethMap: {
    href: "https://codepen.io/wmcooper2/full/xxbjxRr",
    thumb: "thumbs/choropleth-map.jpg",
    alt: "Choropleth Map",
    description:
      "An interactive choropleth map of education in the US. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript", "D3"],
    github: null,
  },

  treeMap: {
    href: "https://codepen.io/wmcooper2/full/mdyLqdx",
    thumb: "thumbs/tree-map.jpg",
    alt: "Tree Map",
    description:
      "An interactive tree map of kickstarter projects. A FCC project.",
    skills: ["HTML", "CSS", "JavaScript", "D3"],
    github: null,
  },

  colorChangingTiles: {
    href: "https://wmcooper2.com/color-changing-tiles/",
    thumb: "thumbs/color-changing-tiles.jpg",
    alt: "Color Changing Tiles",
    description: "Generic tool for tracking game state between teams of colors.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/color-changing-tiles",
  },

  matchGame: {
    href: "https://wmcooper2.com/match-game/",
    thumb: "thumbs/match-game.jpg",
    alt: "Match Game",
    description: "Match-game for vocabulary building in elementary school.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/match-game",
  },

  hidingSpotGame: {
    href: "https://wmcooper2.com/hiding-spot-game/",
    thumb: "thumbs/hiding-spot-game.jpg",
    alt: "Hiding Spot Game",
    description: "'Find the hiding spot' game for elementary school.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/hiding-spot-game",
  },

  teaSentences: {
    href: "https://wmcooper2.com/total-english-sentence-js/",
    thumb: "thumbs/total-english-sentence-js.jpg",
    alt: "Total English Sentence",
    description: "Make sentences using material from the Total English books.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/total-english-sentence-js",
  },

  teaDictionary: {
    href: "https://wmcooper2.com/total-english-dictionary-js/",
    thumb: "thumbs/total-english-dictionary-js.jpg",
    alt: "Total English Dictionary",
    description: "Dictionary for the Total English book series.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/total-english-dictionary-js",
  },

  volunteers: {
    href: "https://wmcooper2.com/classroom-volunteers/",
    thumb: "thumbs/classroom-volunteers.jpg",
    alt: "Classroom Volunteers",
    description: "Choose students at random.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/classroom-volunteers",
  },

  pokemonPronouns: {
    href: "https://wmcooper2.com/pokemon-pronouns/",
    thumb: "thumbs/pokemon-pronouns.jpg",
    alt: "Pokemon Pronouns",
    description: "Pikachu explains pronouns to Charizard.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/pokemon-pronouns",
  },

  tokyoPython: {
    href: "https://wmcooper2.com/tokyo-python/",
    thumb: "thumbs/tokyo-python.jpg",
    alt: "Tokyo Python",
    description: "A work in progress about Python in Tokyo.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/tokyo-python",
  },

  teflAssistant: {
    href: "https://wmcooper2.com/tefl-assistant",
    thumb: "thumbs/tefl-assistant.jpg",
    alt: "TEFL Assistant",
    description: "A site for TEFL teachers.",
    skills: ["HTML", "CSS"],
    github: "https://github.com/wmcooper2/tefl-assistant",
  },

  simpleResume: {
    href: "https://wmcooper2.com/web-resume",
    thumb: "thumbs/web-resume.jpg",
    alt: "Web Resume",
    description: "My web resume.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/wmcooper2/web-resume",
  },

  webPortfolio: {
    href: "https://wmcooper2.com/",
    thumb: "thumbs/web-portfolio.jpg",
    alt: "Web Portfolio",
    description: "This web portfolio.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    github: "https://github.com/wmcooper2/web-portfolio",
  },
};

export default projects;
