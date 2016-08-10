module.exports = {
    env: {
        node: true
    },

    rules: {
        // enforce return after a callback
        'callback-return': [1, ['next']],

        // require all requires be top-level
        // http://eslint.org/docs/rules/global-require
        'global-require': 0,

        // enforces error handling in callbacks (node environment)
        'handle-callback-err': 1,

        // disallow mixing regular variable and require declarations
        'no-mixed-requires': [1, true],

        // disallow use of new operator with the require function
        'no-new-require': 1,

        // disallow string concatenation with __dirname and __filename
        // http://eslint.org/docs/rules/no-path-concat
        'no-path-concat': 1,

        // disallow use of process.env
        'no-process-env': 0,

        // disallow process.exit()
        'no-process-exit': 1,

        // restrict usage of specified node modules
        'no-restricted-modules': 0,

        // disallow use of synchronous methods (off by default)
        'no-sync': 0,
    }
};
