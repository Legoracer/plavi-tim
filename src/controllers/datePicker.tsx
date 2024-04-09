import React, { useState } from "react";
import { Pressable, View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const DatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setSelectedDate(date);
      hideDatePicker();
    };    

    return (
      <SafeAreaView>
          <Pressable style={({ pressed }) => [
              { backgroundColor: pressed ? '#4A89C8' : '#00639C'  },
              styles.button
          ]} onPress={showDatePicker}>
          <Text style={styles.text}>
          {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
        </Text>
          </Pressable>
          <DateTimePickerModal
          date={selectedDate}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          textColor="black"
        />

        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
  button: {
    bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,    },
text: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},
});

export default DatePicker;
