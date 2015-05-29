module.exports = {

    options:{
        'curly'  : true,
        'eqeqeq' : true,
        'forin'  : true,
        'freeze' : true,
        'maxdepth' : true,
        'maxparams' : true,
        'nocomma' : true,
        'nonbsp' : true,
        'nonew'  : true,
        'shadow' : 'outer',
        'singleGroups' : true,
        'undef' : true,
        'strict' : true,
        'bitwise' : true,
        'futurehostile' : true,
        'globals' : {
            'angular': true
        },
        'predef' : ['process','console','module','require','define','__dirname']
    },

    "all" : ['Gruntfile.js',
             'src/server.js',
             'src/public/controller/*.js',
             'src/public/service/*.js',
             'src/public/app.js'
            ]
};
