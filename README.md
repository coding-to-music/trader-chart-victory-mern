<div id="top"></div>

# trader-chart-victory-mern

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/trader-chart-victory-mern

https://trader-chart-victory-mern.herokuapp.com

by Joshua Evuetapha https://github.com/Joshuajee

https://github.com/Joshuajee/Trader-Chart

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Joshuajee/Trader-Chart/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Trader Chart</h3>

  <p align="center">
    Web Based Charting software to analyze the Forex, Stocks and Crypto Market
    <br />
    <br />
    <a href="https://trader-chart.herokuapp.com/">View App</a>
    ·
    <a href="https://github.com/Joshuajee/Trader-Chart/issues">Report Bug</a>
    ·
    <a href="https://github.com/Joshuajee/Trader-Chart/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#preview">Preview</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a charting software for doing technical analysis on the Forex, Crypto and Stock market etc. It comes with Trend indicators like the Moving Average, Bollinger Band, Ichimoku Kinkō Hyō. It also comes with oscillators like the Relative strength index, Moving Average Convergence Divergence and Average True Range.

![Trader Chart Screen Shot](./images/chart.png 'App screenshot')

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Mongodb](https://www.mongodb.com/)
- [Nodejs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Victory Chart](https://formidable.com/open-source/victory/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- nodejs
- npm

### Installation

1. Create A time Series collection in Mongodb [Click Here](https://docs.mongodb.com/manual/core/timeseries-collections/)
   a time series collection can only be created in a Dedicated cluster, the cluster need to be version 5.0.
   1. The collection name should be assets
   2. Set the timeField to be timeseries
   3. It should have a Metafield of symbol, category and source.
2. Clone the repo
   ```sh
   git clone https://github.com/Joshuajee/Trader-Chart.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Goto the front-end directory and Install NPM packages
   ```sh
   npm install
   ```
5. Create and Enter your Mongodb Credencial in `.env`
   ```js
   DATABASE = 'ENTER YOUR MONGODB URI';
   ```
6. Follow the steps below to populate your Collections with data:
   Note these data were gotten from MT5 as csv file then in was converted to Json format

   ```sh
       node upload.js
   ```

   you be prompt type `forex` for asset type and `eurusd` for asset this is case insensitive.

   ![Prompt](./images/prompt-upload.png 'App screenshot')

   uploading.

   ![Prompt](./images/uploading.png 'App screenshot')

   completed.

   ![Prompt](./images/completed.png 'App screenshot')

   Note:
   The file you are uploading should be in this directory `sampleData` the asset type should also be a directory, you should do this once per asset, Donot repeat this process.

   ![Prompt](./images/files.png 'App screenshot')

   The data used in this app are gotten from Metatrader 5, if you want more assets download the app, export the symbol you want as csv convert into to json [https://csvjson.com/](https://csvjson.com) or with any other csv to json converter you know.
   Then replace `<DATE>, <TIME>, <OPEN>, <HIGH>, <LOW>, <CLOSE>, <TICKVO>, <VOL>, <SPREAD>` with
   date, time, open, high, low, close, tickvol, vol, spread respectively using `ctrl h` and replace all on your text editor.

   If you want new `assetType` please create a new directory in the sample data directory and put the json file you want to upload, the asset name must be the asset symbole

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## PREVIEW

![Preview](./images/indicators.png 'App screenshot')

![Preview](./images/ma-modal.png 'App screenshot')

![Oscilators](./images/oscilators.png 'App screenshot')

![color picker](./images/colorpicker.png 'App screenshot')

![ick-modal](./images/ick-modal.png 'App screenshot')

![ick-cloud](./images/ick-cloud.png 'App screenshot')

![Bollinger Band and ATR](./images/bb-atr.png 'App screenshot')

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the Apache License Version 2.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Joshua Evuetapha - [@evuetaphajoshua](https://twitter.com/evuetaphajoshua) - evuetaphajoshua@gmail.com

Project Link: [https://github.com/Joshuajee/Trader-Chart/](https://github.com/Joshuajee/Trader-Chart/)

<p align="right">(<a href="#top">back to top</a>)</p>

## About the Website: Maper

- A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/trader-chart-victory-mern.git
git push -u origin main
```

## Heroku

```java
heroku create trader-chart-victory-mern
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/trader-chart-victory-mern?retryWrites=true&w=majority"
heroku config:set PASSWORD="something-secret"

heroku config:set PUBLIC_URL="https://trader-chart-victory-mern.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== trader-chart-victory-mern Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on trader-chart-victory-mern will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== trader-chart-victory-mern Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/trader-chart-victory-mern/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/trader-chart-victory-mern/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
