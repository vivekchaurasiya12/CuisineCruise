module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ["@babel/preset-react",{runtime : "automatic"}]
    ],
  };

  // this configuration will create a problem for existing babel so we need to disable the babel so that we can use one which is this
  // for that we created a file parcelrc to disable the babel