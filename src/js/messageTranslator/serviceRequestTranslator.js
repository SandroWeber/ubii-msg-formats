const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for service requests.
 */
class ServiceRequestTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/serviceRequest/serviceRequest.proto', 'ServiceRequest', loadProtoFileSynchronously);
    }
}

module.exports = ServiceRequestTranslator;