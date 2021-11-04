# React Skeleton App

I think this project is still lacking a few tests and some polish to be considered "production" quality, but I've already spent too much time and I have to stop somewhere...

Run it with **`npm start`**

or preview it on **Github Pages**: https://nikparo.github.io/react-skeleton-app/ \
(Warning: Reloading the page results in a 404 due to dynamic routing)


### It comes with:

- [Storybook](https://www.npmjs.com/package/@storybook/react) for browsing and manually testing components. **`npm test`**
  - `Login` and `Authors` only, unfortunately.
- [Jest](https://www.npmjs.com/package/jest) for unit tests and components snapshots through [Storyshots](https://storybook.js.org/addons/@storybook/addon-storyshots). **`npm run storybook`**
- [React-Router v6](https://github.com/remix-run/react-router) (beta) for routing.
- `styled-components` for css-in-js styling. (I would have gone with [Linaria](https://www.npmjs.com/package/linaria) but create-react-app doesn't seem to like it.)
- [SWR](https://www.npmjs.com/package/swr) for data loading

\
\
\
\
\.
---

Standard CRA documentation below:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
