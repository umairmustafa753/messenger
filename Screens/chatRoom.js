import React from 'react';
import {KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Fire from '../fire';
import {GiftedChat} from 'react-native-gifted-chat';

export default class ChatRoom extends React.Component {

  static navigationOptions = () => ({
    title: 'GroupChat',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: 'Guest' + Fire.shared.uid,
      _id: Fire.shared.uid,
    };
  }


  addDelete = (context, message) => { 
    Alert.alert(
      'Delete',
      'Are you sure you want to delete the message ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {
            Fire.shared.delete(message);
            console.log('OK Pressed') 
            this.setState({ messages: [] }); 
            this.loadMessages();
          }
        },
      ],
      { cancelable: false }
    );
    console.log( "context ", context, "message", message  );
  }

  loadMessages = () => {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  componentDidMount() {
    this.loadMessages();
  }
  componentWillUnmount() {
    Fire.shared.off();
  }

  render() {
      if( Platform.OS == "android" ){
        return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="height" keyboardVerticalOffset={70} enabled>
           <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
            onLongPress={this.addDelete}
            />
            
        </KeyboardAvoidingView>
        );
      }
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
          onLongPress={this.addDelete}
        />
    );
  }
}