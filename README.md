# Good-Words

## Installation:
* fork & clone the whole repo in your terminal.
* from your terminal, cd into the repo, inside api directory, install ruby, run rails s to open backend server.
* open another terminal tab, cd into client directory, run npm i, run npm install axios react-router-dom, & run npm start to open up the app in your web browser. 

## Project Description
The goal of "Good Words" app is to provide encouraging, inspiring vereses from Bible to help people in their difficult times, to comfort them or help them find hopes in lives.  By generating daily encouraging verses about love, faith, or hope, people might find the source of light in their dark valley moment.  "Good Words" app also provide various of gift choices relate to the verse user generate, so when the users want to get something with Biblical meaning for their love one, the app could be a very helpful resources to them. 

## Major Challenges
Backend data for the Bible verses and the gift suggestions will be hard coded using Ruby on Rails, that will takes me some times.  The gift suggestions are relevant to the Bible verse each time the user click the generate button, so it takes time for me to figure out ways to build such function.

## MVP
* A greeting message to user once they log in.
* Users will be able to register account, log in in order to see gift suggestions and create, revise, or delete their own one.  
* Users will be able to generate encouraging, inspiring Bible verse from a button without having to register or log in an account.  

## Post MVP
* Background picture will be auto-change depends on the current weather of the built-in calendar. 
* Image of gift list will be able to upload from users' own local server via pc or phone instead of restrictly pasting image url from other hosts.
* Users will be able to do keyword search for the Bible verse they desire instantly.

## Feature List
* 7 React Components:
  * Register/Login page - allows users to register or log in their account;
  * Bible verse section - allow users to get Bible verse from the generate button;
  * Gift suggestion section - provide users gift ideas relevant to the verse they generate;
  * Gift details page - display details of each gift: name, image, price, and purchase link;
  * Create gift form - allow login users to put up their own gift ideas;
  * About Us - a page to tell users our goal
  * Join Us- allow users to contact us who are interested in joining my team.
  
## ERD
  ![ERD](https://github.com/sheetazita/Good-Words/blob/master/GoodWords_ERD.png)
  
## Wireframes
 ### Home Desktop View
  ![ERD](https://github.com/sheetazita/Good-Words/blob/master/Desktop%20View%20-%20Home.png)
 ### Home Mobile View
  ![ERD](https://github.com/sheetazita/Good-Words/blob/master/Home%20Mobile.png)
 ### Create Gift Form Desktop View
  ![ERD](https://github.com/sheetazita/Good-Words/blob/master/Home%20Desktop%20Create%20Gift%20Form.png)
 ### Create Gift Form Mobile View 
  ![ERD](https://github.com/sheetazita/Good-Words/blob/master/Gift%20Create%20Mobile.png)
 ### About Us
  ![ERD](https://github.com/sheetazita/Good-Words/blob/master/About%20Us.png)
  
## API Endpoint - 3 models
* User Model
* Bible verses model
* Gift idea model

## Routes
* home: '/'
* user: '/:userid'
* gift list: '/userid/bibleVerseId/giftList'
* gift details: '/:userid/bibleVerseId//giftListId/gift-details'
* create gift form: '/:userid/bibleVerseId/create-gift'

## Timeframes
| Component          | Priority | Estimated Time|
| ------------------ | ---------|---------------|
| Working with API   | High     |  3 hrs        |
| User auth          | High     |  5 hrs        |
| Bible verse section| High     |  3 hrs        |
| Gift Suggestion    | High     |  3 hrs        |
| Create Gift form   | High     |  5 hrs        | 
| Gift details       | High     |  3 hrs        |
| About Us           | Low      |  1 hrs        |
| Join Us            | Low      |  1 hrs        |
| CSS                | Low      |  3 hrs        |


