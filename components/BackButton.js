import React from 'react';
import { Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomBackButton = props => {
  return (
    <Entypo.Button
    {...props}
    IconComponent={Entypo}
     name="arrow-left" 
     backgroundColor="#fff"
     color="#000"
     size={30} 
     style={{ marginLeft: 20}}
     color={Platform.OS === 'android' ? 'white' : Colors.accentColor}
      />
  );
};

export default CustomBackButton;


  
 