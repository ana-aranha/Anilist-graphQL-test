# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Anime Organizer

Project plans to create an application that organizes your list of anime into categories (watching, completed, plan to watch and dropped),using the Anilist database as a base (https://github.com/AniList/ApiV2-GraphQL-Docs).

- This application was a modification of what can be read in https://codebushi.com/posts/graphql-api-with-react.

# How to run for development

1 - Clone this repository;

2 - Install all dependencies;

3- Run "npm start" to start application


# Changing Variables to search anime information

- By definition the project will render the 50 most popular anime according to Anilist's list. In the console you will see information for each of them. When clicking on an image, the specific information of the clicked anime will also appear on the console.

- In the App.js file, on line 69 you will see a variable named "variables". By removing the commented out line 70, you can change the string of "search" to an anime name you want to search for.

- By modifying the string on line 70, the application will render the equivalent results on the screen. By clicking on the image equivalent to your search, you will be able to see on the console some information about the searched anime. Among them the equivalent id.
