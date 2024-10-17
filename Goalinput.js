import { View,TextInput,Button,StyleSheet } from "react-native"
import { useState } from "react"

function Goalinput(props){
    const [goldText,setGoalText] = useState('')


    function goldInputHandler(text) {
        setGoalText(text)
      }
    function addGoalHandler(){
        props.onAddGoal(goldText)
    }
    return(
        <View style = {styles.inputContainer}>
                <TextInput onChangeText={goldInputHandler}  placeholder='Type your goal' style = {styles.input}/>
                <Button onPress={addGoalHandler} title='Add goal'/>
        </View>
        

    )
}
const styles = StyleSheet.create({
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

})
module.exports = Goalinput;