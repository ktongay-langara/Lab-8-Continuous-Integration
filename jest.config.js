module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['formatter.js'], // here you can configure which folders or files jest will consider coverage
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    testEnvironment: 'node',
    rootDir: "./",
    testMatch: ['<rootDir>/__tests__/*.js?(x)'],
    verbose: true
}