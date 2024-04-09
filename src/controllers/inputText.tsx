import React from "react";
import { SafeAreaView, TextInput, StyleSheet } from "react-native";

interface PlaceholderLabelProps {
    isFocused: boolean;
    isFilled: boolean;
   }

const InputText = () => {
    const [text, onChangeText] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <SafeAreaView >
        <TextInput
        style={[styles.text, isFocused && styles.focused]}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Unique Code"
        onFocus={() => {setIsFocused(true)}}
        onBlur={() => {setIsFocused(false)}}
      />
       </SafeAreaView>
    );
};

export default InputText;

const styles = StyleSheet.create({
    text: {
      borderColor: 'black',
      borderWidth: 1,
      width: '80%',
      height: 50,
    },
    focused: {
        borderColor: '#00639C'
    },

});