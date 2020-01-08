import React from 'react';
import {KeyboardAvoidingView, Platform, Alert } from 'react-native';
import FireGlobal from '../fireGlobal';
import {GiftedChat} from 'react-native-gifted-chat';

export default class GroupChat extends React.Component {

  static navigationOptions = () => ({
    title: 'Group Chat',
  });
  
  state = {
    messages: [],
  };

  get user() {
    return {
      name: 'Guest' + FireGlobal.shared.uid,
      _id: FireGlobal.shared.uid,
    };
  }


  addDelete = (context, message) => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete the message ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {
            FireGlobal.shared.delete(message);
            this.setState({ messages: [] }); 
            this.loadMessages();
          }
        },
      ],
      { cancelable: false }
    );
  }

  loadMessages = () => {    
    FireGlobal.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
    
  }

  componentDidMount() {
    this.loadMessages();
  }
  componentWillUnmount() {
    FireGlobal.shared.off();
  }

  render() {
      if( Platform.OS == "android" ){
        return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="height" keyboardVerticalOffset={120} enabled>
           <GiftedChat
            messages={this.state.messages}
            onSend={FireGlobal.shared.send}
            user={this.user}
            onLongPress={this.addDelete}
            />
        </KeyboardAvoidingView>
        );
      }
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={FireGlobal.shared.send}
          user={this.user}
          onLongPress={this.addDelete}
        />
    );
  }
}