import { Pressable, StyleSheet } from "react-native"
import { View,Text } from "react-native"



function GoalItem(props) {
    return(
        <Pressable 
            onPress={props.onDelete}
            //android_ripple={{color: '#210466'}}
            style = {({pressed}) => pressed && styles.pressedItem}
         >
            <View style={styles.goalItem}>

                <Text style={styles.goalText}>{props.text}</Text>

            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    goalItem : {
        marginTop : 15,
        borderRadius : 6,
        backgroundColor : '#5e0acc',
        
      },
      goalText : {
        margin : 8 ,
        padding : 8 ,
        color: 'white'
      },
      pressedItem : {
        color : '#210466',
        opacity : 0.5
      }
})
module.exports = GoalItem;