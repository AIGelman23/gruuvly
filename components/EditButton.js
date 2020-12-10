import React from 'react';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomEditButton = props => {
  return (
    <MaterialCommunityIcons.Button
    {...props}
    IconComponent={MaterialCommunityIcons}
     name="account-edit" 
     backgroundColor="#fff"
     color="#000"
     size={30} 
     color={Platform.OS === 'android' ? 'white' : Colors.accentColor}
      />
  );
};

export default CustomEditButton;


  
 