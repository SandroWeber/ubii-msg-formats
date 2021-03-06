# Snapshot report for `test/js/subscribtionTest.js`

The actual snapshot is saved in `subscribtionTest.js.snap`.

Generated by [AVA](https://ava.li).

## create basic message

> Snapshot 1

    ServiceRequest {
      subscribtion: {
        deviceIdentifier: '1111-1111-1111-1111',
      },
    }

## create message

> Snapshot 1

    ServiceRequest {
      subscribtion: {
        deviceIdentifier: '1111-1111-1111-1111',
        subscribeTopics: [
          'topic->subtopic',
          'topic2->subtopic2',
        ],
        unsubscribeTopics: [
          'topic3->subtopic3',
        ],
      },
    }

## create message with subscribe only

> Snapshot 1

    ServiceRequest {
      subscribtion: {
        deviceIdentifier: '1111-1111-1111-1111',
        subscribeTopics: [
          'topic->subtopic',
          'topic2->subtopic2',
        ],
      },
    }

## create message with unsubscribe only

> Snapshot 1

    ServiceRequest {
      subscribtion: {
        deviceIdentifier: '1111-1111-1111-1111',
        unsubscribeTopics: [
          'topic3->subtopic3',
        ],
      },
    }

## structure

> Snapshot 1

    ServiceRequest {
      subscribtion: Subscribtion {
        deviceIdentifier: '1111-1111-1111-1111',
        subscribeTopics: [
          'topic->subtopic',
          'topic2->subtopic2',
        ],
        unsubscribeTopics: [
          'topic3->subtopic3',
        ],
      },
    }
