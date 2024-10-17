import { Pressable, StyleSheet } from "react-native"
import { View,Text } from "react-native"



function GoalItem(props) {
    return(
        <Pressable onPress={props.onDelete} >
            <View style={styles.goalItem}>

                <Text style={styles.goalText}>{props.text}</Text>

            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    goalItem : {
        margin : 8 ,
        padding : 8 ,
        borderRadius : 6,
        backgroundColor : '#5e0acc',
        
      },
      goalText : {
        color: 'white'
      },
})
module.exports = GoalItem;