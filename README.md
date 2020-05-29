# beVitch #

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
