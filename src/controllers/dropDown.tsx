import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        iconColor='white'
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder= "Select a location..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      width: '80%',
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
      marginLeft: 10
    },
    selectedTextStyle: {
      marginLeft: 12
    },
    iconStyle: {
      width: "15%",
      height: 49,
      backgroundColor: '#00639C',
    },
  });