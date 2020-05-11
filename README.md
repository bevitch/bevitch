# Bevitch #

Library with Nowa Era reusable UI components and directives for Vue.js applications

### Project structure ###

* `/src` - Main content (components and directives),
* `/kitchen` - Space for testing library. Type `cd kitchen` and follow instructions from README.md in this folder to use it,
* `/dist` - Directory with built library. To build library type `npm run build`

## Project setup

### Installs dependencies
```
npm install
```

### Compiles and minifies for production
```
npm run build
```

### Builds production version of library with vue instance included
```
npm run build:inline-vue
```

### Builds production version of library without vue instance
```
npm run build:no-vue
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Builds storybook application with library documentation
```
npm run storybook:build
```

### Serves storybook application in development mode
```
npm run storybook:serve
```
### Adding new icons to NeIcon component

Add new svg icon (size: 150x150 ) to `../styles/icons-source` and rebuild icon fonts with
```
npm run build:icons
```
Svg file name will be icon name.
Please add new icons to icon list in stories in storybook.
