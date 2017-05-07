var config;

if( process.env.NODE_ENV === 'production') {

  config = {
    port: process.env.PORT
  };
}

else { // test or dev

  config = {
    port: 3000
  };
}

module.exports = config;