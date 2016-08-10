module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            binaryLiterals: false,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            forOf: false,
            generators: true,
            modules: false,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: false,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            octalLiterals: false,
            regexUFlag: false,
            regexYFlag: false,
            restParams: true,
            spread: true,
            superInFunctions: false,
            templateStrings: true,
            unicodeCodePointEscapes: false,
            globalReturn: false,
            jsx: true
        }
    },

    rules: {
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': [1, 'as-needed'],

        // require parens in arrow function arguments
        'arrow-parens': [1, 'always'],

        // require space before/after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 1,

        // verify super() callings in constructors
        'constructor-super': 1,

        // enforce the spacing around the * in generator functions
        // http://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': [1, 'before'],

        // disallow modifying variables of class declarations
        // http://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 1,

        // disallow arrow functions where they could be confused with comparisons
        // http://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': [1, {
            allowParens: true,
        }],

        // disallow modifying variables that are declared using const
        'no-const-assign': 1,

        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 1,

        // disallow to use this/super before super() calling in constructors.
        // http://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 1,

        // require let or const instead of var
        'no-var': 1,

        // require method and property shorthand syntax for object literals
        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [1, 'always'],

        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': 0,

        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 1,

        // suggest using Reflect methods where applicable
        // http://eslint.org/docs/rules/prefer-reflect
        'prefer-reflect': 0,

        // suggest using the spread operator instead of .apply()
        // http://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 1,

        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 1,

        // disallow generator functions that do not have yield
        // http://eslint.org/docs/rules/require-yield
        'require-yield': 1,
    }
};
