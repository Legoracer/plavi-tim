import React, { useRef } from "react";
import { SafeAreaView, TextInput, StyleSheet, Animated } from "react-native";

const InputText = () => {
    const [text, setText] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);
    const labelAnimation = useRef(
        new Animated.Value(text ? 1:0)
    ).current

    const handleFocus = () => {
        // Animate the label up and reduce its size when input is focus
        Animated.timing(labelAnimation, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }).start();
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        // If the input is empty, animate the floating label back to its original position
        if (!text) {
          Animated.timing(labelAnimation, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false,
          }).start();
        }
        setIsFocused(false);

      };

       // Define animated styles for the floating label
  const floatingLabelStyle = {
    top: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [ 17 , -20], // top value
    }),
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // font size
    }),
  };
    return (
        <SafeAreaView >
            <Animated.Text style={[styles.label, floatingLabelStyle, isFocused && styles.textFocusColor]}>
            Unique ID
          </Animated.Text>
        <TextInput
        style={[styles.text, (isFocused && text !== '' ) && styles.focused,(!isFocused && text !== '') && styles.not_focused_with_text]}
        onChangeText={setText}
        value={text}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

       </SafeAreaView>
    );

};

export default InputText;

const styles = StyleSheet.create({
    text: {
      borderColor: 'black',
      borderWidth: 2,
      width: '80%',
      height: 50,
        },
    focused: {
        borderColor: '#00639C'
    },
    not_focused_with_text: {
        borderColor: 'gray'
        },
    label: {
        paddingLeft: 10,
        position: 'absolute',
        color: 'gray'
      },
    textFocusColor: {
        color: '#00639C'
    }
});
