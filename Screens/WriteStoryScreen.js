import React from 'react';
import {StyleSheet,Text,View,TouchableOpacty,TextInput} from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStory extends React.Component{
    constructor() {
        super();
        this.state = {
          text: '', 
        };
      }
render(){
    return(
        <View style = {styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize:30,marginBottom:80,marginTop:40, },
          }}
        />
           <TextInput 
              style={styles.inputBox}
              placeholder="Story Title"
              value={this.state.text}/>
               <TextInput 
              style={styles.inputBox}
              placeholder="Author"
              value={this.state.text}/>
               <TextInput 
              style={styles.InputBox}
              placeholder="Write your Story"
              multiline:true
              value={this.state.text}/>
         <View>
        <TouchableOpacty style = {{ backgroundColor: '#2196F3',
                   padding: 10,
                   margin: 10}}>
            <Text>Submit</Text>
        </TouchableOpacty>
        </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20,
    },
    InputBox:{
        width: 200,
        height: 400,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20,
    },
  });