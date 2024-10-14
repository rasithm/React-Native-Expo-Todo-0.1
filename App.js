import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goldText,setGoalText] = useState('')

  function goldInputHandler(text) {
    setGoalText(text)
  }
  function addGoalHandler(){
    console.log(goldText)
  }
  return (
    


    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput onChangeText={goldInputHandler}  placeholder='Type your goal' style = {styles.input}/>
        <Button onPress={addGoalHandler} title='Add goal'/>
      </View>
      <View style={styles.goaltext}   >
        <Text >List of goals </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    paddingTop : 50,
    paddingHorizontal : 16,
    flex : 1
    
  },
  input : {
    borderColor : 'black',
    borderWidth : 1 ,
    width : '70%',
    marginRight:8,
    padding:8    
    
    
    
    
  },
  inputContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    borderBottomWidth : 1,
    borderBottomColor : '#cccccc',    
    flex : 1
    },
    goaltext:{
      flex: 4
    },
});
