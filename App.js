import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView ,FlatList } from 'react-native';
import GoalItem from './GoalItem';
import Goalinput from './Goalinput';


export default function App() {
  

  const [goals , setGoals] = useState([])


  const [isModalVisible , setIsModelVisible] = useState(false)


  
  
  function addGoalHandler(goldText){
    setGoals((currentGoal) => {
      return [...currentGoal,goldText]
    })}


  function DeleteItem(index){
    console.log('deleteItem' + index)
    const newGoals = goals.filter((el,i) => index!=i)
    setGoals(newGoals)
  }

  function startAddGoalHandler() {
    setIsModelVisible(true)
  }

  function closeGoalHandler() {
    setIsModelVisible(false)
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style = {styles.appContainer}>

      <Button title='Add New Goal' color='#A070D6' onPress={startAddGoalHandler} />


      <Goalinput onClose={closeGoalHandler} visible={isModalVisible} onAddGoal ={addGoalHandler}  />

      


      <View>
        <Text>List of goals </Text>
      </View>


      <View style={styles.goaltext}>

      <FlatList data={goals} renderItem={(itemData) => {
        return <GoalItem  text={itemData.item}  onDelete={() =>  DeleteItem(itemData.index)} />
      }}/>
      </View>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer : {
    paddingTop : 50,
    paddingHorizontal : 16,
    flex : 1,
    backgroundColor : '#1A0037'
    
  },
  
    goaltext:{
      flex: 4
    },
    
});
