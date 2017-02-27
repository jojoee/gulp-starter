# Gulp Starter
[![Build Status](https://travis-ci.org/jojoee/gulp-starter.svg)](https://travis-ci.org/jojoee/gulp-starter)

## Getting Started
1. Install [Node.js](https://nodejs.org/)
2. Install global: `npm install -g yarn bower`
3. Set path (e.g. `cd C:\xampp\htdocs\jojoee.com\gulp-starter`)
4. Go to project: (e.g. `cd simple`)
5. Install dependencies: `bower install && npm install`

## Note
- Code style: [Airbnb](https://github.com/airbnb/javascript)

## Projects

### browserify
- [x] Less
- [x] ES6
- [x] Testing with `mocha`
- [x] Browsersync
- [ ] Inject compliled `css` without refresh
- [ ] Add UI automated testing (e.g. [Zombie.js](https://github.com/assaf/zombie), [Nightwatch](https://github.com/nightwatchjs/nightwatch))
- [ ] Implement [Shields.io](http://shields.io/)
- [ ] Implement [JSHint](http://jshint.com/)
- [ ] Implement [JSCS](http://jscs.info/)

```
Start: `npm run build` or `npm run build.watch`
Test: `npm run test` or `npm run test.watch`
```

### php
- [x] PHP
- [x] Browsersync
- [ ] Inject compliled `css` without refresh
- [ ] Implement `phpcs` and add it into `travis`

```
Need to
- Setup PHP server
- Setup proxy in `gulpfile.js`

Start: `npm run build.watch`
```

### simple
- [x] Sass
- [x] Testing with `mocha`
- [x] Browsersync
- [ ] Inject compliled `css` without refresh
- [ ] Add UI automated testing (e.g. [Zombie.js](https://github.com/assaf/zombie), [Nightwatch](https://github.com/nightwatchjs/nightwatch))

```
Start: `npm run build` or `npm run build.watch`
Test: `npm run test` or `npm run test.watch`
```

### simple2
- [x] Sass
- [x] Testing with `mocha`
- [x] Browsersync
- [x] JSHint
- [x] Uglify
- [x] Concat
- [ ] Inject compliled `css` without refresh
- [ ] Add UI automated testing (e.g. [Zombie.js](https://github.com/assaf/zombie), [Nightwatch](https://github.com/nightwatchjs/nightwatch))

```
Start: `npm run build` or `npm run build.watch`
Test: `npm run test` or `npm run test.watch`
```

### typescript
- [x] TypeScript
- [x] Browsersync
- [ ] Testing
- [ ] Css preprocessor
- [ ] `tsconfig.json`
- [ ] `tslint.json`

```
Start: `npm run build` or `npm run build.watch`
Test: `npm run test` or `npm run test.watch`

Other
- `npm install -g typescript`
- `tsc js/main.ts`
```
