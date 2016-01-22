# Electron-Boilerplate
A template for Electron projects to build/publish Mac/Windows/Linux compatible applications

[![Circle CI](https://circleci.com/gh/Stephn-R/electron-angular-boilerplate.svg?style=svg&circle-token=6a9c22099623944c66e2c82e5a11fdd0eb9c2bdf)](https://circleci.com/gh/Stephn-R/electron-angular-boilerplate) [![Dependency Status](https://david-dm.org/Stephn-R/Electron-Angular-Boilerplate.svg)](https://david-dm.org/Stephn-R/Electron-Angular-Boilerplate) [![devDependency Status](https://david-dm.org/Stephn-R/Electron-Angular-Boilerplate/dev-status.svg)](https://david-dm.org/Stephn-R/Electron-Angular-Boilerplate#info=devDependencies)

### Table of Contents:
---

1. [Installation](#install)
2. [The Stack](#stack)
3. [Adding new views](#views)
4. [Adding/Managing Bower Resources](#bower)
5. [Building the Desktop Application](#build-app)
6. [Testing](#testing)
7. [FAQ](#faq)

### <a name="install"></a> Installation:

The application runs using Node 4.2.4. I recommend using [nvm](https://github.com/creationix/nvm) to manage your node versions. In addition, node-sass is required globally.

For development, run:

```shell
./scripts/load_globals.sh
sudo npm install --python=python2.7
npm start
```

#### Known Bugs:

Node-sass may fail the `npm start` command. I recommend running the following command to fix this:

```
npm i -g node-sass
npm rebuild node-sass
```

As for preparing the Windows/Mac/Linux apps for distribution. You will first need to run the ```npm install```. Afterwards, run the following to build all the apps for all architectures and distributions:

```shell
# Requires GNU Make to be installed
make
```

### <a name="stack"></a> The Stack:

The App Stack includes various tools and frameworks. Below is a list of those items and their intended purpose:

- **AngularJS**: Client Side Web-App Stack
- **Bower**: Managing CSS/JS dependencies (i.e. AngularJS)
- **Gulp**: Build Automation for compiling Sass + other resources before Electron
- **Gnu-Make**: Lower level build automation via the terminal (bash)
- **Jest**: Testing framework for ES6/JS modules + code coverage support
- **JSPM**: ES6 and Module importing support
- **Karma/Jasmine**: Testing framework for AngularJS + code coverage support
- **Node.js**: Running the Electron/Desktop Application
- **Sass**: Enhanced Stylesheets
- **Skeleton CSS**: Normalized + Simple CSS Grid framework
- **Travis**: CI (Continous Integration) support
- **Wiredep**: Injecting Bower dependencies into the HTML files

If you would like to suggest another tool or framework, please refer to the [CONTRIBUTING.md](/CONTRIBUTING.md) before submitting an issue.

### <a name="views"></a> Adding new views

Thanks to the use of Gulp and Wiredep, it is recommended that all new views be written in the `views` directory as `.html` files in order to take advantage of the resource injection tool. The compiled views are then dumped into the same folder with all dependencies (even new ones) injected.

### <a name="bower"></a> Adding/Managing Bower Resources

In order to add a new resource, simply install + save it using bower. Below is an example using jQuery

```shell
bower install --save jquery
```

And thats it. Since we are using Gulp + Wiredep, all bower dependencies will be included on pages supporting the Wiredep tags.

### <a name="build-app"></a> Building the Desktop Application

Since the app was built using Node.js, you only need to run the following command for development testing:

```shell
npm start
```

npm start will run the latest build and then launch the application.

In order to only build the latest code run:

```shell
gulp
```

As for building the final Desktop Application. You can use any of the following make commands to build them:

- Mac: `make mac-64`
- Windows 32-Bit: `make windows`
- Windows 64-Bit: `make windows-64`
- Linux: `make linux`
- Linux 64-bit: `make linux-64`

Alternatively, you can build all the apps at once by calling `make apps`

### <a name="testing"></a> Testing

Tests are broken between two layers. All ES6 Modules/JS code should be tested using `Jest`. Alternatively, any testing for AngularJS content should be done using Karma/Jasmine. For more details on this, refer to the [FAQ](#faq) about Where to write tests.

### <a name="faq"></a> FAQ:

1. **Where can I write my tests?**

    All the ES6/Module tests are written in Jest. You can refer to the ```__tests__``` folder for that. All test files for Jest should match against this file extension pattern ```*.jest.js```. Alternatively, all AngularJS tests should be written using the following file extension pattern ```*.spec.js```. These tests should be written within the b`__tests__/app/` folder.
