// TODO: (Sandro Weber)
// find a way to properly use google closure library and require protobuf_library.js as a single file
// without manually requiring each single protobuf.js file here

require('../../dist/js/proto/general/error_pb');

require('../../dist/js/proto/serviceRequest/serviceRequest_pb');
require('../../dist/js/proto/serviceRequest/request/clientRegistration_pb');
require('../../dist/js/proto/serviceRequest/request/deviceRegistration_pb');
require('../../dist/js/proto/serviceRequest/request/subscription_pb');

require('../../dist/js/proto/serviceReply/serviceReply_pb');
require('../../dist/js/proto/serviceReply/reply/clientSpecification_pb');
require('../../dist/js/proto/serviceReply/reply/deviceSpecification_pb');
require('../../dist/js/proto/serviceReply/reply/success_pb');

require('../../dist/js/proto/topicData/topicData_pb');
require('../../dist/js/proto/topicData/topicDataRecord/topicDataRecord_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/color_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/matrix3x2_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/matrix4x4_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/quaternion_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/vector2_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/vector3_pb');
require('../../dist/js/proto/topicData/topicDataRecord/dataStructure/vector4_pb');

class ProtobufUtils {
    static getProtobuf(typeString) {
        let packageArray = typeString.split('.');
        let protobuf = proto;
        packageArray.forEach((subpackage) => {
            protobuf = protobuf[subpackage] || undefined;
        });

        return protobuf;
    }

    static getMessage(typeString) {
        let protobuf = this.getProtobuf(typeString);
        if (typeof protobuf === 'undefined') {
            return undefined;
        } else {
            return new protobuf();
        }
    }

    static serialize(msg) {
        return msg.serializeBinary();
    }

    static deserialize(buffer, typeString) {
        return ProtobufUtils.getProtobuf(typeString).deserializeBinary(buffer);
    }
}

module.exports = ProtobufUtils;