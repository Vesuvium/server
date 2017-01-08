// Default configuration
module.exports = {
  port: 3000,
  public: './public',
  'view engine': 'pug',
  verbose: false,

  middle: {
    bodyparser: { extended: true },
    dataparser: {},
    session: {
      secret: 'giergosoganvdmvwevnewfnweflknewlfk',
      resave: false,
      saveUninitialized: true,
      cookie: {}
    }
  }
};
