export default defineNuxtPlugin(() => {
  return {
    provide: {
      rootPath: (url) => {
        const isLocal = url.match(/localhost/g);
        return isLocal ? '/' : '/TokyuLinesInfo/';
      },
    },
  };
});
