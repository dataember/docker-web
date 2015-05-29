module.exports = {
   options : {
    mangle: true
   },
   target:{
    files:{

          'build/public/controller/indexctrl.min.js' :
          ['src/public/controller/indexctrl.js']
      }
  }
};
