import React from "react";
import { Alert, Button, View, StyleSheet, Pressable, Text} from "react-native";

const SubmitButton = (props) => {
    const { onPress, title = 'Save' } = props;

    return (
        <View>
    <Pressable style={({ pressed }) => [
              { backgroundColor: pressed ? '#4A89C8' : '#00639C'  },
              styles.button
          ]} onPress={() => Alert.alert(
          'Entry has been added to the database',
          '',
          [
            {text: 'Ok', onPress: () => console.log('Cancel Pressed!')},
          ],
          { cancelable: false}
        )}
        >
            
      <Text style={styles.text}>{title}</Text>
    </Pressable>
      </View>
    );
};

const styles = StyleSheet.create({
    button: {
        bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      elevation: 3,    }
    
      ,
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

export default SubmitButton;