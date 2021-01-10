import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import ListItem from '../accordion-components/ListItem';

const ProfileAccordion = props => {

  /* Redux could be used possibly with state change of toggle */

  const [locTrackingIsEnabled, setLocTrackingIsEnabled] = useState(false);
  const locToggleSwitch = () => setLocTrackingIsEnabled(previousState => !previousState);

  const [activeStatusIsEnabled, setActiveStatusIsEnabled] = useState(false);
  const activeToggleSwitch = () => setActiveStatusIsEnabled(previousState => !previousState);

  const [notificationsIsEnabled, setNotificationsIsEnabled] = useState(false);
  const notificationsToggleSwitch = () => setNotificationsIsEnabled(previousState => !previousState);

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
        left={props => <Feather name="lock" size={24} color="black" style={{paddingLeft: 5}} />}
        expanded={expanded}
        onPress={handlePress}>
        <ListItem 
        listItemTitle="Change Password" 
        left={props => <Ionicons name="ios-key" size={24} color="black"/>}
        onPress={null}
        />
        <ListItem 
        left={props => <MaterialIcons name="block" size={20} color="black" style={{ paddingTop: 5}} />}
        listItemTitle="Blocking" 
        onPress={null}
        />
        <ListItem 
        left={props => <MaterialIcons name="location-searching" size={20} color="black" style={{ paddingTop: 5}} />}
        listItemTitle="Location Tracking" 
        right={props => 
          <Switch
          trackColor={{ false: 'rgba(118,117,119,1)', true: 'rgb(52,199,89)' }}
          thumbColor={locTrackingIsEnabled ? 'rgb(48,209,88)' : 'rgb(244, 243, 244)'}
          ios_backgroundColor="rgba(62,62,62,1)"
          onValueChange={locToggleSwitch}
          value={locTrackingIsEnabled}
        />
        }
        />
        <ListItem 
        left={props => <Feather name="check-circle" size={20} color="black" style={{ paddingTop: 5}} />}
        listItemTitle="Active Status" 
        right={props => 
          <Switch
          trackColor={{ false: 'rgba(118,117,119,1)', true: 'rgb(52,199,89)' }}
          thumbColor={activeStatusIsEnabled ? 'rgb(48,209,88)' : 'rgb(244, 243, 244)'}
          ios_backgroundColor="rgba(62,62,62,1)"
          onValueChange={activeToggleSwitch}
          value={activeStatusIsEnabled}
        />
        }
        />
        <ListItem 
        left={props => <Feather name="tag" size={20} color="black" style={{ paddingTop: 5}} />}
        listItemTitle="Tagging" 
        onPress={null}
        />
        <ListItem 
        left={props => <MaterialIcons name="notifications-none" size={20} color="black" style={{ paddingTop: 5}} />}
        listItemTitle="Notifications" 
        right={props => 
        <Switch
          trackColor={{ false: 'rgba(118,117,119,1)', true: 'rgb(52,199,89)' }}
          thumbColor={notificationsIsEnabled ? 'rgb(48,209,88)' : 'rgb(244, 243, 244)'}
          ios_backgroundColor="rgba(62,62,62,1)"
          onValueChange={notificationsToggleSwitch}
          value={notificationsIsEnabled}
        /> 
      }
      />
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


export default ProfileAccordion;