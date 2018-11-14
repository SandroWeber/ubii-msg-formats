const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for effect messages.
 */
class EffectTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/interaction/effect.proto', 'Effect', loadProtoFileSynchronously);
    }
}

module.exports = EffectTranslator;