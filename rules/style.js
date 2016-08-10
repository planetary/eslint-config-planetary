module.exports = {
    rules: {
        // enforce spacing inside array brackets
        'array-bracket-spacing': [1, 'never'],

        // enforce spacing inside single-line blocks
        // http://eslint.org/docs/rules/block-spacing
        'block-spacing': [1, 'always'],

        // enforce one true brace style
        'brace-style': [1, '1tbs'],

        // require camel case names
        camelcase: 1,

        // enforce spacing before and after comma
        'comma-spacing': [1, {
            before: false,
            after: true
        }],

        // enforce one true comma style
        'comma-style': [1, 'last'],

        // disallow padding inside computed properties
        'computed-property-spacing': [1, 'never'],

        // enforces consistent naming when capturing the current execution context
        'consistent-this': [1, 'that'],

        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': 1,

        // require function expressions to have a name
        'func-names': 0,

        // enforces use of function declarations or expressions
        'func-style': [1, 'expression'],

        // Blacklist certain identifiers to prevent them being used
        // http://eslint.org/docs/rules/id-blacklist
        'id-blacklist': 0,

        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        'id-length': [1, {
            min: 1,
            max: 20,
            properties: 'never'
        }],

        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        indent: [1, 4, {SwitchCase: 1}],

        // specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [1, 'prefer-double'],

        // enforces spacing between keys and values in object literal properties
        'key-spacing': [1, {
            beforeColon: false,
            afterColon: true
        }],

        // require a space before & after certain keywords
        'keyword-spacing': [1, {
            before: true,
            after: false,
            overrides: {
                'return': {after: true},
                'throw': {after: true},
                'case': {after: true}
            }
        }],

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // http://eslint.org/docs/rules/linebreak-style
        'linebreak-style': [1, 'unix'],

        // enforces empty lines around comments
        'lines-around-comment': [1, {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true
        }],

        // specify the maximum depth that blocks can be nested
        'max-depth': 0,

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': [1, 99, 4, {
            ignoreUrls: true
        }],

        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': 0,

        // limits the number of parameters that can be used in the function declaration.
        'max-params': [1, 5],

        // specify the maximum number of statement allowed in a function
        'max-statements': 0,

        // require a capital letter for constructors
        'new-cap': 0,

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // http://eslint.org/docs/rules/new-parens
        'new-parens': 1,

        // disallow use of the Array constructor
        'no-array-constructor': 1,

        // disallow use of bitwise operators
        // http://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 1,

        // disallow use of the continue statement
        // http://eslint.org/docs/rules/no-continue
        'no-continue': 0,

        // disallow comments inline after code
        'no-inline-comments': 0,

        // disallow if as the only statement in an else block
        // http://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 1,

        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 1,

        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': [1, {
            max: 2,
            maxEOF: 1
        }],

        // disallow negated conditions
        // http://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 1,

        // disallow nested ternary expressions
        'no-nested-ternary': 1,

        // disallow use of the Object constructor
        'no-new-object': 1,

        // disallow use of unary operators, ++ and --
        'no-plusplus': 0,

        // disallow space between function identifier and application
        'no-spaced-func': 1,

        // disallow the use of ternary operators
        'no-ternary': 0,

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 1,

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 0,

        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // http://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': [1, {
            defaultAssignment: false
        }],

        // require padding inside curly braces
        'object-curly-spacing': [1, 'never'],

        // allow just one var statement per function
        'one-var': [1, 'never'],

        // require assignment operator shorthand where possible or prohibit it entirely
        // http://eslint.org/docs/rules/operator-assignment
        'operator-assignment': [1, 'always'],

        // enforce operators to be placed before or after line breaks
        'operator-linebreak': 1,

        // enforce padding within blocks
        'padded-blocks': [1, 'never'],

        // require quotes around object literal property names
        // http://eslint.org/docs/rules/quote-props.html
        'quote-props': [1, 'as-needed', {
            keywords: true,
            numbers: false
        }],

        // specify whether double or single quotes should be used
        quotes: [1, 'single', 'avoid-escape'],

        // do not require jsdoc
        // http://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc': 0,

        // require or disallow use of semicolons instead of ASI
        semi: 1,

        // enforce spacing before and after semicolons
        'semi-spacing': [1, {
            before: false,
            after: true
        }],

        // sort variables within the same declaration block
        'sort-vars': 0,

        // require or disallow space before blocks
        'space-before-blocks': [1, 'always'],

        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [1, 'never'],

        // require or disallow spaces inside parentheses
        'space-in-parens': [1, 'never'],

        // require spaces around operators
        'space-infix-ops': 1,

        // Require or disallow spaces before/after unary operators
        // http://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': [1, {
            words: true,
            nonwords: false
        }],

        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [1, 'always'],

        // require or disallow the Unicode Byte Order Mark
        // http://eslint.org/docs/rules/unicode-bom
        'unicode-bom': [2, 'never'],

        // require regex literals to be wrapped in parentheses
        'wrap-regex': 0
    }
};
