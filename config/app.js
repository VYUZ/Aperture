const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
    removeComments: isProd,
    //если нужно удалять комментарии и на проде и в разработке
    // removeComments: true,
  },

  imagemin: {
    verbose: true,
  },
};
