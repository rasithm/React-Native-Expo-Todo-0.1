import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView ,FlatList } from 'react-native';
import GoalItem from './GoalItem'
import Goalinput from './Goalinput'


export default function App() {
  

  const [goals , setGoals] = useState([])

  
  function addGoalHandler(goldText){
    setGoals((currentGoal) => {
      return [...currentGoal,goldText]
    })}


  function DeleteItem(index){
    console.log('deleteItem' + index)
  }


  return (
    
    <View style = {styles.appContainer}>

    

      <Goalinput  onAddGoal ={addGoalHandler}  />


      <View>
        <Text>List of goals </Text>
      </View>


      <View style={styles.goaltext}>

      <FlatList data={goals} renderItem={(itemData) => {
        return <GoalItem  text={itemData.item}  onDelete={() =>  DeleteItem(itemData.index)} />
      }}/>
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
  
    goaltext:{
      flex: 4
    },
    
});
