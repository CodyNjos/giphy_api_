# Giphy Api

A deployed version of this app can be found at [https://giphychallenge.herokuapp.com/](https://giphychallenge.herokuapp.com/)

This is a Giphy search and rating app made for a code challenge.

## Prerequisites
To run this app locally, you must have the following installed on your machine -

  1.[PostrgeSQL](https://www.postgresql.org/)   
  2.[Node.js](https://nodejs.org/en/)   


##  Installation  

To install locally follow these steps  
  1. Get a Giphy API key from [https://developers.giphy.com/](https://developers.giphy.com/)
	2. Run the table setup found in database.sql  
	3. Create a .env file at the top level of the project folder
	  3a. Add   GIPHY_API_KEY=your_api_key_here   as a variable on the first line of the .env
    3b. Add   SERVER_SESSION_SECRET=random_sting_of_characters_here   as a variable on the second line of the .env
	4. Run npm install in the project folder  
	5. Open a second terminal,  npm run server one terminal, and npm run client in the other      
	6. This should bring the project up on localhost 3000, with the server running on localhost 5000  

