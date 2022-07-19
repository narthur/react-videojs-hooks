const consoleError = console.error;
console.error = (...err): void => {
  if (err[2] === "(CODE:4 MEDIA_ERR_SRC_NOT_SUPPORTED)") {
    // ignore error related to video file not supported by jsdom
  } else {
    consoleError(...err);
  }
};

export default "noop";
