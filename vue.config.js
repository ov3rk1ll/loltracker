module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/loltracker" : "/",

  configureWebpack: {
    devtool: "source-map",
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "LoL Tracker";
      return args;
    });
  },

  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
  },
};
