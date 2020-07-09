module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/styles/settings/_index';
          @import '@/styles/tools/_index';
        `
      }
    }
  }
};