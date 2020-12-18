import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomChatButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={30}
      color={Platform.OS === 'android' ? 'white' : Colors.accentColor}
    />
  );
};

export default CustomChatButton;
