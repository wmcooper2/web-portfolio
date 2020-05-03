const projects = {
  pythonTEA: {
    href: "https://github.com/wmcooper2/TotalEnglishAssistant",
    thumb: "thumbs/totalenglishpython.png",
    alt: "Total English Dictionary",
    description:
      "My first significant project in coding. Before this project, I was fumbling around making small snippets of code and just reading books on computer science for a year not knowing what area I wanted to concentrate on. This project gave me a goal and something I could make that would benefit other people. I used tkinter to make the gui. This project was rewritten from an OOP style into a functional style after I learned more about functional programming from studying Haskell.",
  },

  marioReview: {
    href: "https://github.com/wmcooper2/TotalEnglishReviewGame",
    thumb: "thumbs/marioquizgame.png",
    alt: "Total English Review Game",
    description:
      "This was my first game-making project. I chose to use the Super Mario World art because of its influence on me as a kid. The purpose of the game is to review material in the Total English book series as well as custom questions/problems. The game worked well, but the students weren't interested in studying. I made this game with a one-month deadline, working only in my free time. I think it's not bad for a first attempt.",
  },

  lyricScraper: {
    href: "https://github.com/wmcooper2/lyricscraping",
    thumb: "thumbs/lyricscraper.png",
    alt: "Lyrics Scraper",
    description:
      "This one is meant to scrape the lyrics of www.lyrics.com in order to build a database. From that database I can extract grammar patterns for customizing English lessons to students' preference in music. I scraped about 616,000 lyrics files.",
  },

  lyricSearch: {
    href: "https://github.com/wmcooper2/lyricsearch",
    thumb: "thumbs/lyrics-dot-com.jpeg",
    alt: "Lyrics Search",
    description:
      "This program is my attempt to re-invent the (wheel) search engine in order to teach myself some deeper concepts of computer science. I wanted to learn more about parsing, string matching, working with large amounts of data and so on. This program will help find all pattern matches in the collection of lyric files I scraped using the lyrics scraper program. This will also be a part of the larger goal to customize English lessons for students.",
  },

  billboardScraper: {
    href: "https://github.com/wmcooper2/billboardtop100",
    thumb: "thumbs/billboardscraper.png",
    alt: "Billboard Top 100 Scraper",
    description:
      "I needed the rankings from Billboard Top 100 to improve making suggestions to students for their customized English lessons. I felt that by using the rankings of the most popular songs, then the customized English lessons would have a greater chance of success. The rankings are kept in a database and used as part of the larger goal I'm working toward.",
  },

  piCluster: {
    href: "https://github.com/wmcooper2/picluster",
    thumb: "thumbs/raspberry-pi-logo.jpeg",
    alt: "Raspberry Pi Cluster",
    description:
      "The work I was doing with scraping and searching through lots of text files became a problem for my MacBook Air, so I decided to outsource it to a small cluster that could work quietly in the background. I made this program to perform tasks concurrently on a network of computers (Raspberry Pi 3) controlled through a single machine (MacBook Air). This was an interesting project because it taught me how to do things remotely, in a distributed way and how to network computers together.",
  },

  pictureCollector: {
    href: "https://github.com/wmcooper2/picturecollector",
    thumb: "thumbs/remote-picture-collector.jpeg",
    alt: "Remote Picture Collector",
    description:
      "I decided to take on machine learning. Naturally, this meant that I would encounter the MNIST dataset. However, being an ALT, I notice a lot of differences between the way westerners write and how Japanese people write the Roman alphabet. Me being me, I decided to try and build my own data set from scratch to better understand the challenge of machine learning. This program allows me to to take pictures of documents for data collection remotely using a webcam connected to a Raspberry Pi (because why would I just buy a scanner?).",
  },

  machineScripts: {
    href: "https://github.com/wmcooper2/machinesetup",
    thumb: "thumbs/machinesetupscripts.png",
    alt: "New Machine Setup Scripts",
    description:
      "I used this collection of scripts to maintain a consistent environment across all workstations and devices. I can set up a new machine with these scripts that I've collected.",
  },

  transitFares: {
    href: "https://github.com/wmcooper2/google-maps-transit-fares",
    thumb: "thumbs/transitfares.png",
    alt: "Transit Fare Reimbursement",
    description:
      "I realized that my current company is selecting a location the analog way. They decide on a training location based on what is available, then instruct employees to go there. Then they have to reimburse the travel expenses to the employees. The transit companies in Japan are owned by (mostly) private companies, so getting the data is not easy. The API that Google offers doesn't have the data that I need, so I had to think of this solution to get what I wanted. This program gathers the transit fare data from Google Maps using pyautogui and facilitates choosing the cheapest location to send all employees.",
  },

  keeylyTribute: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/tribute/tribute.html",
    thumb:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/tribute/keelytribute.png",
    alt: "Tribute Page",
    description:
      "Part of the Responsive Web Design certification. I made a tribute to my favorite (although fradulent) historical figure, John Keely.",
  },

  simpleSurvey: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/survey/survey.html",
    thumb:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/survey/survey.png",
    alt: "Simple Survey",
    description:
      "Part of the Responsive Web Design certification. I made a simple questionnaire form. I made this as if I were making it for JHS students in Japan (at the time I made it, I was an Assistant Language Teacher).",
  },

  fakeProduct: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/fake-product/product.html",
    thumb:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/fake-product/product.png",
    alt: "Fake Product",
    description:
      "A Free Code Camp project and part of the Responsive Web Design certification. This is a fictional product landing page. I chose rocks because I have a slight interest in geology, the science of crystals and how those things work on the nano-level. That, and the idea of the pet rock is smart and stupid at the same time so this is a kind of homage to it.",
  },

  techDoc: {
    href:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/technical-documentation/techdoc.html",
    thumb:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/fcc-projects/technical-documentation/techdoc.png",
    alt: "Tech Page",
    description:
      "Part of the Responsive Web Design certification. This is a comparison of the syntax between Python and JavaScript. There are no benchmark comparisons. I used this to help explain to myself how things work in Javascript coming from a Python background. I really liked this idea and will expand on it later. I will leave this as a side project for now.",
  },

  markdownPreview: {
    href: "https://wmcooper2.com/markdown-previewer/",
    thumb: "thumbs/markdownpreviewer.png",
    alt: "Markdown Preview",
    description:
      "Part of the Front End Libraries certification. This markdown previewer was a nice project to work on. I got to see the benefit of live updating through the React framework. This project made me really like React and want to do more with the front-end.",
  },

  quoteMachine: {
    href: "https://wmcooper2.com/random-quote-machine",
    thumb: "thumbs/quotemachine.png",
    alt: "Quote Machine",
    description:
      "Part of the old Front End Libraries certification. This was an old project that was required of Free Code Camp to get the JavaScript certification a long time ago. I did this one a few years ago, but I didn't finish the certification at the time. I have since redone all the work for the certification and completed it. This project shows a random inspirational quote and lets you tweet it.",
  },

  drumMachine: {
    href: "https://codepen.io/wmcooper2/full/GRRRjZY",
    thumb: "thumbs/drummachine.png",
    alt: "Drum Machine",
    description:
      "Part of the Front End Libraries certification. This project was hard to complete (early in my front-end stages). It is a simple drum machine that plays a sound when you click the buttons or press the matching key on the keyboard. I chose a Super Mario theme because that game was a big influence on me growing up.",
  },

  calculator: {
    href: "https://codepen.io/wmcooper2/full/jOOWVVg",
    thumb: "thumbs/javascriptcalculator.png",
    alt: "Calculator",
    description:
      "Part of the Front End Libraries certification. This project was difficult because parsing the user input to form even a simple expression was challenging. I went with a Yoshi's Cookie theme (there is a pattern to my art preference).",
  },

  pomodoroClock: {
    href: "https://codepen.io/wmcooper2/full/qBBqeLM",
    thumb: "thumbs/pomodoroclock.png",
    alt: "Pomodoro Clock",
    description:
      "Part of the Front End Libraries certification. This might be the hardest project I had to complete at Free Code Camp. There were so many little issues/bugs to work out with how React worked with Code Pen (and so on) that this one took me some time to figure out.",
  },

  barChart: {
    href: "https://codepen.io/wmcooper2/full/YzPromN",
    thumb: "thumbs/barchart.png",
    alt: "Bar Chart",
    description:
      "Part of the Data Visualization certification. This is a simple barchart of US GDP.",
  },

  scatterPlot: {
    href: "https://codepen.io/wmcooper2/full/LYEeEpV",
    thumb: "thumbs/scatterplot.png",
    alt: "Scatter Plot",
    description:
      "Part of the Data Visualization certification. This is a simple scatter plot about occurrences of doping in bicycle racing.",
  },

  heatMap: {
    href: "https://codepen.io/wmcooper2/full/ExaoGaM",
    thumb: "thumbs/heatmap.png",
    alt: "Heat Map",
    description:
      "Part of the Data Visualization certification. This is a heat map showing temperature variance over time.",
  },

  choroplethMap: {
    href: "https://codepen.io/wmcooper2/full/xxbjxRr",
    thumb: "thumbs/choroplethmap.png",
    alt: "Choropleth Map",
    description:
      "Part of the Data Visualization certification. This is a choropleth map showing ratio of population who hold bachelor degree or higher by county.",
  },

  treeMap: {
    href: "https://codepen.io/wmcooper2/full/mdyLqdx",
    thumb: "thumbs/treemap.png",
    alt: "Tree Map",
    description:
      "Part of the Data Visualization certification. This is a tree map showing Kickstarter project startup revenues by category.",
  },
};

export default projects;
