module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/assets/fonts'], // stays the same
  // commands: require('./path-to-commands.js'), // formerly "plugin", returns an array of commands
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
