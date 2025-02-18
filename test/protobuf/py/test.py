import unittest

from proto.topicData.topicDataRecord_pb2 import TopicDataRecord

class TestUbii(unittest.TestCase):
    def setUp(self):
        return

    def tearDown(self):
        return

    def testTopicDataRecord(self):
        topicDataRecord = TopicDataRecord()
        topicDataRecord.topic = 'this/is/a/test/topic'
        topicDataRecord.client_id = '1234-567890-abcdefgh'
        topicDataRecord.string = 'test string'

        serialized = topicDataRecord.SerializeToString()

        deserialized = TopicDataRecord()
        deserialized.ParseFromString(serialized)

        self.assertEqual(topicDataRecord, deserialized)


if __name__ == '__main__':
    unittest.main()