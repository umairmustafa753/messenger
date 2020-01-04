import React from 'react';
import {KeyboardAvoidingView, Platform } from 'react-native';
import Fire from '../fire';
import {GiftedChat} from 'react-native-gifted-chat';

export default class ChatRoom extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'ChatRoom',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
      if( Platform.OS == "android" ){
        return (
          <KeyboardAvoidingView style={{flex: 1}} behavior="height" keyboardVerticalOffset={70} enabled>
           <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
            />
        </KeyboardAvoidingView>
        );
      }
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" >
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
    
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}