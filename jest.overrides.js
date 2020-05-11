const error = console.error;

console.error = function(message) {
  // eslint-disable-next-line
  error.apply(console, arguments);
  throw message instanceof Error ? message : new Error(message);
};
