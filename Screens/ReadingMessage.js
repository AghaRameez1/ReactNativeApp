import React from 'react';
import { Text, View, PermissionsAndroid } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
export default class ReadMessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sms: {
        date: String,
        address: String,
        body: String
      }
    }

  }
  componentDidMount=async()=> {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        'title': 'APP wants SMS Permission',
        'message': 'APPS WANTS TO ACCESS MESSAGES ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      var filter = {
        box: '', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

        /**
         *  the next 3 filters can work together, they are AND-ed
         *  
         *  minDate, maxDate filters work like this:
         *    - If and only if you set a maxDate, it's like executing this SQL query:
         *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
         *    - Same for minDate but with "date >= minDate"
         */
        minDate: 1554636310165, // timestamp (in milliseconds since UNIX epoch)
        maxDate: 1556277910456, // timestamp (in milliseconds since UNIX epoch)

        /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
        read: 1, // 0 for unread SMS, 1 for SMS already read
        /** the next 2 filters can be used for pagination **/
        indexFrom: 0, // start from index 0
        maxCount: 10, // count of SMS to return each time
      };
      SmsAndroid.list(
        JSON.stringify(filter),
        (fail) => {
          console.log('Failed with this error: ' + fail);
        },
        (count, smsList) => {
          console.log('Count: ', count);
          console.log('List: ', smsList);
          var arr = JSON.parse(smsList);
          arr.forEach(function (object) {
            // console.log('Object: ' + object);
            // console.log('-->'+ object.address);
            // console.log('-->' + object.date);
            // console.log('-->' + object.body);

            // this.state.sms.address.push(object.address);
            // this.state.sms.date.push(object.date);
            //  this.state.sms.body.push(object.body);

          });
          this.setState({
            sms: {
              date: arr.date,
              address: arr.address,
              body: arr.body
            }
          });
          console.log(this.state)
        },
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Text>READ MESSAGE SCREEN</Text>
        <Text>{this.state.sms.address}</Text>
        <Text>{this.state.sms.date}</Text>
        <Text>{this.state.sms.body}</Text>
      </View>
    )
  }
}