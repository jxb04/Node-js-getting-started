const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  1
);

// setImmediate

clearTimeout(timerId);
// clearInterval
// clearImmediate
