
module.exports = {
    preset: 'ts-jest',           // Use the ts-jest preset
    testEnvironment: 'node',     // Test environment (for backend/Node.js)
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Transform .ts and .tsx files using ts-jest
    },

    testTimeout: 10000,
    testPathIgnorePatterns: ["/node_modules", "/dist"],
  }
