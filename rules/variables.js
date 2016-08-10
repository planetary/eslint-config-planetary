module.exports = {
    rules: {
        // enforce or disallow variable initializations at definition
        'init-declarations': 0,

        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 1,

        // disallow deletion of variables
        'no-delete-var': 1,

        // disallow labels that share a name with a variable
        // http://eslint.org/docs/rules/no-label-var
        'no-label-var': 1,

        // disallow declaration of variables already declared in the outer scope
        'no-shadow': [1, {
            builtinGlobals: true,
            allow: ['err', 'next']
        }],

        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 1,

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 1,

        // disallow use of undefined when initializing variables
        'no-undef-init': 1,

        // disallow use of undefined variable
        'no-undefined': 1,

        // disallow declaration of variables that are not used in the code
        'no-unused-vars': [1, {
            vars: 'all',
            args: 'after-used'
        }],

        // disallow use of variables before they are defined
        'no-use-before-define': 1
    }
};
