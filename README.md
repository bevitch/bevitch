<p align="center">
  <img width="300" height="auto" src="https://user-images.githubusercontent.com/18534115/83312854-362a2a00-a214-11ea-8b01-51718f12b07d.png">
</p>
<h1 align="center">beVitch</h1>
<div align="center">
  <a><img alt="license" src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
  <a><img alt="version" src="https://img.shields.io/badge/version-v0.0.3-yellow.svg"></a>
  <a><img alt="build" src="https://travis-ci.org/what-crud/vue-crud.svg?branch=develop"></a>
  <a><img alt="PRs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</div>

Library with reusable UI components and directives for Vue.js applications

## Intallation

### Prerequisites

Your app must have [vue](https://vuejs.org/v2/guide/installation.html) installed.

### Import library

* Type following command to import `beVitch` library:

```bash
npm i @bevitch/core
```

## Quick start

### Adding library to application

In your main file import `bevitch` library and inject it to your vue instance:

```ts
import Vue from 'vue';
import App from './App.vue';
import beVitch from 'bevitch';

Vue.use(beVitch);

new Vue({
  render: h => h(App)
}).$mount('#app');
```

### Add styles for library components:

```ts
import Vue from 'vue';
import App from './App.vue';
import beVitch from 'bevitch';
import 'bevitch/dist/lib/bevitch.css';

Vue.use(beVitch);

new Vue({
  render: h => h(App)
}).$mount('#app');
```
