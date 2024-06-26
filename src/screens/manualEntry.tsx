import React from "react";
import { View, StyleSheet } from "react-native";
import DropdownComponent from "../controllers/dropDown";
import InputText from '../controllers/inputText'
import SubmitButton from "../controllers/submitButton";
import DatePicker from "../controllers/datePicker";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ManualEntryView() {
    const styles = StyleSheet.create({
        body: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          margin: 20,
        }
      });
    return (
        <SafeAreaView style={styles.body}>
      <InputText/>
      <DropdownComponent/>

      <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
      <DatePicker/>
      </View>
      <View style={{width: 'auto', margin: 30}}>
    <SubmitButton/>
    </View>
           
            </SafeAreaView>
        
    );
}