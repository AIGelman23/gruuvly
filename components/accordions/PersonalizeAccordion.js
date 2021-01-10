import React, {useState} from 'react';
import { StyleSheet, Switch } from 'react-native';
import { List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import ListItem from '../accordion-components/ListItem';

const PersonalizeAccordion = props => {

  const [darkModeIsEnabled, darkModeSetIsEnabled] = useState(false);
  const darkModeToggleSwitch = () => darkModeSetIsEnabled(previousState => !previousState);


  const [expanded, setExpanded] = React.useState(false);
  const [haptic, setHaptic] = React.useState(true);
  const handlePress = () => {
    setExpanded(!expanded)
    if(!expanded){
    setHaptic( 
    !haptic === Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) 
    &&  !haptic === Haptics.impactAsync( 
    Haptics.ImpactFeedbackStyle.Light) )
    } else {
    setHaptic()
    }  
  };

return( 
<List.Section title={props.accordionSectionTitle}>
      <List.Accordion
      theme={{ colors: {primary: '#FC3FAF', accent: '#afc'}}}
        style={styles.accordionWrapper}
        title={props.accordionListTitle}
        titleStyle={{ fontSize: 15 }}
        left={props => <MaterialCommunityIcons name="bag-personal-outline" size={30} color="black" />}
        expanded={expanded}
        onPress={handlePress}>
        <ListItem 
        listItemTitle="Dark Mode" 
        left={props => <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" style={{ paddingTop: 5}} />}
        right={props => 
          <Switch
          trackColor={{ false: 'rgba(118,117,119,1)', true: 'rgb(52,199,89)' }}
          thumbColor={darkModeIsEnabled ? 'rgb(48,209,88)' : 'rgb(244, 243, 244)'}
          ios_backgroundColor="rgba(62,62,62,1)"
          onValueChange={darkModeToggleSwitch}
          value={darkModeIsEnabled}
        />
        }
         onPress={null}
        ></ListItem>
         
      </List.Accordion>
  </List.Section>

  );
};

const styles = StyleSheet.create({

  accordionWrapper: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
  },
});


export default PersonalizeAccordion;