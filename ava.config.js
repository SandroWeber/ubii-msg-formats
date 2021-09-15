export default {
  babel: {
    compileEnhancements: true
  },
  files: [
    'test/protobuf/js/protobufUtils.js', 
    'test/protobuf/js/protobufTranslator.js'
  ],
  ignoredByWatcher: ['**/*.{js,jsx}', '!dist/**/*'],
  cache: false,
  failFast: false,
  failWithoutAssertions: false,
  tap: false,
  verbose: false
};
