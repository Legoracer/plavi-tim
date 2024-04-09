import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to import FontAwesome from appropriate package


const TabIcon = ({ iconName, text }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FontAwesome name={iconName} size={24} color="white" />
      <Text style={{ fontSize: 12, color: "white" }}>{text}</Text>
    </View>
  );
};

export default TabIcon;
