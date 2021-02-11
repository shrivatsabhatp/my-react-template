# My React Template

- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Available Scripts](#available-scripts)
  - [Learn More](#learn-more)
- [Plop Template Usage](#plop-template-usage)
- [Typescript Declaration](#typescript-declaration)
- [React Modal](#react-modal)
- [Story Book](#story-book)
- [Components](#components)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Plop Template Usage

- ### Plop Getting Started

Refer the official website [https://plopjs.com/documentation/#getting-started](https://plopjs.com/documentation/#getting-started)

- #### Install Plop `npm install --save-dev plop` or `yarn add -D plop`

  After installing the Plop in the project, in the package.json file update the scripts as follows:

  ```json
    "scripts": {
    ...
    "generate": "plop",
    ...
  },
  ```

  To generate the template on the component folder type following command in the terminal in root location of the project

  ```sh
  npm run generate
  ```

  or

  ```sh
  yarn run generate
  ```

  > or you can also generate as _`npm run generate <file-type> <component-name >`_

- #### Modify Generate Template
  > In the **_plopfile.js_** modify the required file extension to be generated.
  > In the plop-template/component folder make change to the template if required.

## Typescript Declaration

> Basic declaration is given in the declarations.d.ts for react and css

## React Modal

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs hovercards, and tooltips.

## Story Book

Install the story book using the following the command:

```sh
npx sb init
```

> For more Info go to [https://storybook.js.org/](https://storybook.js.org/docs/react/get-started/introduction)

## Components

- [Loader]()
