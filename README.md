# [React + Flux Starter](http://theTechie.github.io/react-flux-starter)

## Overview
React + Flux starter application with ES6 with complete build infrastructure using Bebelify, Browserify, Watchify, BrowserSync and SourceMaps
...

## Installation
After cloning the repository, install dependencies:
```
cd <project-folder>
npm install
```

Now you can run your local server:
```
npm start
```
#Description of [Gulp](https://github.com/gulpjs/gulp) Plugins


##[browserify](https://github.com/substack/node-browserify) 
Browsers do not allow us to use the require method from Node.js. With browserify, we can implement dependency management on the browser. It also will bundle the code into one file in an efficient way to not repeat dependiencies that are used more than once. 

##[browserSync](http://www.browsersync.io/)
When developing and testing the website, browserSync is a powerful tool that will rebuild and refresh the webpage so you can see the changes you make as you are working. 
##[gulp-starter](https://github.com/greypants/gulp-starter)
A useful repository that explains how many of gulp's features work and contains an example project to get familiar with it. We use this example to construct our own project.
