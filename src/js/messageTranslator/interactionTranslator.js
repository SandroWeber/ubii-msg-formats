const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for interaction messages.
 */
class InteractionTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/interaction/interaction.proto', 'Interaction', loadProtoFileSynchronously);
    }
}

module.exports = InteractionTranslator;