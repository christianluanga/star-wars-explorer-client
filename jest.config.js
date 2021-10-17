module.exports = {
    moduleNameMapper: {
      "\\.css$": require.resolve("./style.mock")
    }
}
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']