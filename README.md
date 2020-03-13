#ToDo App project for Rutherford Application

This project is designed as a basic ToDo application for creating editing ToDo list items.<br />

In order to create the application, I had to familiarize myself with the React extension of javascript as well as the firebase data hosting service <br />
These services were difficult at first, especially interaction between the two. I spent a great deal of time struggling with the database as I confused the basic database with the firestore service. Once I figured out the error, I had a much easier time connecting to the service <br />
Having not used React before, and having only a basic understanding of javascript as a whole, I spent a great deal of time researching the content. I initially disliked the language, however; as I gained more understanding of it, I realized it was an incredibly useful and functional language. As I researched content more specific to this project, specifically firebase integration, I realized how truly powerful the language was.

###How to build and run the application

In order to run the app locally, the easiest option is to move to the directory and run "npm start" this will start the app as is. <br />
In order to run a more optimized version of the app, you'll want to run "npm run build" followed by "serve -s build" This will open the application in your default browser<br />

Before doing any of this however, you'll need to add your API key to the "config.js" file in the src directory. The database is public so anybody can access it as of now, but it will be changed once the project has been reviewed. After that point, you'll need to create your own database to save data to. In the future I may add user log in, however you will still need to build it yourself for now.

###Tools used

You will need the following tools installed to run:<br />
Node.js<br />
React for Node.js<br />
create_react_app for Node.js<br />
serve for Node.js<br />

I used the "create React App" command line tool. I have included the default ReadMe for the tool below. It includes a little more about how it works as well as different commands you can run.<br />


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
