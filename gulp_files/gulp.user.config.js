module.exports = {
    constants: constants
};

function constants() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = './src/server/';
    var specRunnerFile = 'specs.html';
    var nodeModules = 'node_modules';

    var temp = './.tmp/';
    var bower = {
        json: require('../bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var cons = {
        client: client,
        clientApp: clientApp,
        temp: temp,
        build: './build/',
        bower: bower,
        html: client + '**/*.html',
        less: client + 'styles/less/styles.less',
        sassDashboard: [
            client + 'styles/sass/dashboard/theme/_*.scss',
            client + 'styles/sass/dashboard/app/_*.scss',
            client + 'styles/sass/dashboard/theme/bootstrap-overrides/_*.scss',
            client + 'styles/sass/dashboard/theme/components/_*.scss',
            client + 'styles/sass/dashboard/theme/dashboard/_*.scss',
            client + 'styles/sass/dashboard/app/maps/_*.scss',
            client + 'styles/sass/dashboard/theme/conf/**/*.scss'
        ],
        sass: client + 'styles/sass/styles2.scss',
        styleWatch: [client + 'styles/less/**/*.less', client + 'styles/sass/dashboard/**/*.scss'],
        index: client + 'index.html',
        css: temp + '**/*.css',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],
        testlibraries: [
            nodeModules + '/mocha/mocha.js',
            nodeModules + '/chai/chai.js',
            nodeModules + '/sinon-chai/lib/sinon-chai.js'
        ],
        specRunnerFile: specRunnerFile,
        specHelpers: [client + 'test-helpers/**/*.js'],
        serverIntegrationSpecs: [client + '/tests/server-integration/**/*.spec.js'],
        promiseLibrary: './node_modules/es6-promise/dist/es6-promise.js',
        polyFill: './node_modules/phantomjs-polyfill-string-includes/index.js',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                root: 'app/',
                standalone: false
            }
        },
        server: server,
        nodeServer: server + 'app.js',
        report: './report/'

    }
    return cons;
}
