# Gulp Starter
[![Build Status](https://travis-ci.org/jojoee/gulp-starter.svg)](https://travis-ci.org/jojoee/gulp-starter)

## Getting Started
1. Install [Node.js](https://nodejs.org/)
2. Install global: `npm install -g bower gulp browser-sync`
3. Set path (e.g. `cd C:\xampp\htdocs\jojoee.com\simple-gulp`)
4. Go to project: (e.g. `cd simple`)
5. Install dependencies: `bower install && npm install`

## Note
- Code style: [Airbnb](https://github.com/airbnb/javascript)

## Projects

### browserify
- [x] Less
- [x] ES6
- [x] Testing with `mocha`
- [ ] Inject compliled `css` without refresh
- [ ] Add UI automated testing (e.g. [Zombie.js](https://github.com/assaf/zombie), [Nightwatch](https://github.com/nightwatchjs/nightwatch))
- [ ] Implement [Shields.io](http://shields.io/)
- [ ] Implement [JSHint](http://jshint.com/)
- [ ] Implement [JSCS](http://jscs.info/)

```
Start: `gulp` or `gulp watch`
Test: `npm run test` or `npm run test.watch`
```

### php
- [ ] PHP
- [ ] Inject compliled `css` without refresh

```
Need to
- Setup PHP server
- Setup proxy in `gulpfile.js`

Start: `gulp`
```

### simple
- [x] Sass
- [x] Testing with `mocha`
- [ ] Inject compliled `css` without refresh
- [ ] Add UI automated testing (e.g. [Zombie.js](https://github.com/assaf/zombie), [Nightwatch](https://github.com/nightwatchjs/nightwatch))

```
Start: `gulp` or `gulp watch`
Test: `npm run test` or `npm run test.watch`
```

### simple2
- [x] Sass
- [x] Testing with `mocha`
- [x] JSHint
- [x] Uglify
- [x] Concat
- [ ] Inject compliled `css` without refresh
- [ ] Add UI automated testing (e.g. [Zombie.js](https://github.com/assaf/zombie), [Nightwatch](https://github.com/nightwatchjs/nightwatch))
