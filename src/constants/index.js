import { java, python, tailwind, javascript, react } from "../assets";


export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id:'aboutme',
      title:'About Me'
    },
    {
      id: "projects",
      title: "Projects",
    },
 
    {
      id: "techSkills",
      title: "TechSkills",
    },

    {
        id:'contact',
        title:'Contact Me'
    },

    
  ];

  export const frontend = [
    {
      id: 'bank-website',
      title : 'Z Bank (Capstone Project)',
      desc : 'Visualy pleasing frontend of a bank home page having a beautiful UI/UX and mobile compatibility. Created using React.js and Tailwind CSS.'
    }
    ,
    {
      id: 'cinplex',
      title : 'Cinplex (Capstone Project)',
      desc : 'Fully featured movie app with 13 catagories of genres. Each movie contains full details with Banner,poster,title, release date, original language,sub-genres and overview. This website is mobile repsonsive and dynamic. Every Main page has a functional sliding banner which can be swiped manually or it does so automatically in 5 sec. Every movie card is clickable taking you to the movie details page. '
    },
    {
      id: 'amazon-frontend',
      title : 'Amazon Homepage (Beginner Level)',
      desc : 'Frontend of Amazon Homepage using HTML CSS (static website).'
    },
    {
      id: 'crypto-page',
      title : 'Dectra (Intermediate Level)',
      desc : 'Frontend of a crypto currency page with dynamic components and mobile responsive created using React.js and Tailwind CSS.'
    },
    {
      id: 'travelwebsite1',
      title : 'Travel Website (Intermediate Level)',
      desc : 'Frontend of a travel website which is visually appealing and mobile responsive with dynamic components created using React.js and Tailwind CSS.'
    },
    {
      id: 'uber-eats',
      title : 'Uber Eats Frontend Clone (Intermediate Level)',
      desc : 'Frontend clone of Uber Eats which is mobile responsive with dynamic components created using React.js and Tailwind CSS.'
    },
    {
      id: 'imdb',
      title : 'IMDB Clone (Intermediate Level)',
      desc : 'Multiple Page IMDB clone with incorporated react-router-dom functionality for switching pages between different genres and movie details page. Created using React.js and Tailwind CSS (Not Mobile Responsive). '
    },
    
    
  ];


  export const machine = [
    {
      id: 'opencv4',
      title : 'OMR Scanner (Final Year Project)',
      desc : 'Created an OMR Scanner using OpenCV and Numpy libraries which can scan through the images (MCQ sheets) and apply a pattern detection program which in-turn returns coordinates of marked areas which is further used to calculate the final score and the final score is stored in csv file which can be exported into an excel sheet.'
    },
    
    {
      id: 'opencv2',
      title : 'Color Detection',
      desc : 'Using OpenCV I was able to process the image and adjust the saturation and hue to isolate the particular color and send a response stating if the given image has the target color or not.'
    },
    {
      id: 'opencv3',
      title : 'Number Plate Detection',
      desc : 'With the use of harcascade module which is already trained on detecthing number plates from images, I gave the module a steady feed of images from which it isolated the number plates and on that I applied a OCR (optical character recognition system) module which gave me the final result.'
    },
    {
      id: 'mlproj5',
      title : 'Diabetes Prediction',
      desc : 'Using Logistic Regression to predict whether a person sufferes from diabetes or not with the information provided in form of csv file. The data is sourced from Kaggle'
    },
    {
      id: 'mlproj6',
      title : 'House Price Prediction',
      desc : 'Using Linear Regression to predict the prices of house with the information provided on area, bedrooms, bathrooms, country state, city etc. The data is sourced from Kaggle '
    },
    {
      id: 'mlproj8',
      title : 'Rock vs. Mine Prediction',
      desc : 'Using Logistic Regression to predict where the information provided about a particular object is matching the description of a mine or a rock.  '
    },

    {
      id: 'mlproj7',
      title : 'Movie Recommendation System',
      desc : 'Beginner Level movie recommendation system which is created using NumPy and Panda. I am finding the co-relation between the selected movie and all other movies and showing the top 10 movies with highest co-relation.'
    },
    {
      id: 'mlproj9',
      title : 'WebScrapper',
      desc : 'Developed a Beginner Level web scrapper using BeautifulSoup4 which scrapes through amazon.com to find the prices of items and store it in a csv file'
    }

  ];


  export const skill = [
    {
      id:"java",
      src: {java},
      proficiency : 'intermediate'
    },
    {
      id:"java",
      src: {python},
      proficiency : 'intermediate'
    },
    {
      id:"java",
      src: {javascript},
      proficiency : 'intermediate'
    },
    {
      id:"java",
      src: {react},
      proficiency : 'intermediate'
    },
    {
      id:"java",
      src: {tailwind},
      proficiency : 'intermediate'
    },
  ]
  