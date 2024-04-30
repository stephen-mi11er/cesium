module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-case': [2, 'always', 'upper-case'],
        'type-enum': [2, 'always', [
            'FEAT',
            'FIX',
            'DOCS',
            'STYLE',
            'REFACTOR',
            'TEST',
            'CHORE',
            'MERGE'
        ]],
        'scope-enum': [
            2,
            'always',
            [
                'mono',
                'website',
                'graphql'
            ]
        ],
        'body-empty': [1, 'always'],
        'footer-empty': [1, 'always']
    },
    prompt: {
        messages: {
            skip: ':skip',
            max: 'upper %d chars',
            min: '%d chars at least',
            emptyWarning: 'can not be empty',
            upperLimitWarning: 'over limit',
            lowerLimitWarning: 'below limit'
        },
        questions: {
            type: {
                description: "Select the type of change that you're committing:",
                enum: {
                    FEAT: {
                        description: 'A new feature',
                        title: 'Features',
                        emoji: '✨'
                    },
                    FIX: {
                        description: 'A bug fix',
                        title: 'Bug Fixes',
                        emoji: '🐛'
                    },
                    DOCS: {
                        description: 'Documentation only changes',
                        title: 'Documentation',
                        emoji: '📚'
                    },
                    STYLE: {
                        description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
                        title: 'Styles',
                        emoji: '💎'
                    },
                    REFACTOR: {
                        description: 'A code change that neither fixes a bug nor adds a feature',
                        title: 'Code Refactoring',
                        emoji: '📦'
                    },
                    TEST: {
                        description: 'Adding missing tests or correcting existing tests',
                        title: 'Tests',
                        emoji: '🚨'
                    },
                    CHORE: {
                        description: "Other changes that don't modify src or test files",
                        title: 'Chores',
                        emoji: '♻️'
                    },
                    MERGE: {
                        description: 'Merge commit',
                        title: 'Merge',
                        emoji: '🔀'
                    }
                }
            },
            scope: {
                description: 'What is the scope of this change (e.g. component or file name)',
                enum: {
                    mono: {
                        description: 'Changes affecting the entire repo',
                        title: 'Mono',
                        emoji: '🏬'
                    },
                    'website': {
                        description: 'Changes affecting the website',
                        title: 'website',
                        emoji: '🍺'
                    },
                    graphql: {
                        description: 'Changes affecting graphql',
                        title: 'GraphQL',
                        emoji: '🚚'
                    }
                }
            }
        }
    }
};
