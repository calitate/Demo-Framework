const {ReportAggregator, HtmlReporter} = require('wdio-html-nice-reporter');
let reportAggregator = new ReportAggregator;

exports.config = {

    onPrepare: function (config, capabilities) {
        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Orange Bank Test Report',
            showInBrowser: true,
            browserName : 'chrome',
            collapseTests: true,
            linkScreenshots: true,
            useOnAfterCommandForScreenshot: true
        });
        reportAggregator.clean();
        global.reportAggregator = reportAggregator;
    },

    onComplete: function(exitCode, config, capabilities, results) {

        (async () => {await browser.pause(3000)
        })();
        (async () => {
            await global.reportAggregator.createReport();
        })();
    },


    afterSession: async () => {
        //await browser.end().pause(2000);
    },

    specs: [
        './features/**/*.feature'
    ],
    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--lang=es'
                //'--headless', // Run without window
            ],
            prefs: {
                'intl.accept_languages': 'es' // Force language to spanish
            }


        },
        maxInstances: 1,
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['chromedriver']],
    framework: 'cucumber',
    reporters:[
        ["html-nice", {
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Test Report Title',
            linkScreenshots: true,
            showInBrowser: true,
            collapseTests: false,
            useOnAfterCommandForScreenshot: true,
        }
    ]],

    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
}
