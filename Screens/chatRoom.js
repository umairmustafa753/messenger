import React from 'react';
import {KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Fire from '../fire';
import {GiftedChat} from 'react-native-gifted-chat';

export default class ChatRoom extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    // title: (navigation.state.params || {}).code || 'groupChat!',
    title: 'groupChat!',
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
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {
            Fire.shared.delete(message);
            this.setState({ messages: [] }); 
            this.loadMessages();
          }
        },
      ],
      { cancelable: false }
    );
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