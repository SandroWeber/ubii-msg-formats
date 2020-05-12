export default {
  files: [
    'test/protobuf/js/protobufUtils.js',
    'test/protobuf/js/protobufTranslator.js',
    'test/flatbuffers/js/*.js',
  ],
  sources: ['**/*.{js,jsx}', '!dist/**/*'],
  cache: false,
  failFast: false,
  failWithoutAssertions: false,
  tap: false,
  verbose: false,
  compileEnhancements: false,
};
