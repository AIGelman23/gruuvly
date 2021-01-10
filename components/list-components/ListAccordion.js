import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const ListAccordion = props => {


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
<List.Section title={props.accordionTitle}>
      <List.Accordion
      theme={{ colors: {primary: '#FC3FAF', accent: '#afc'}}}
        style={styles.accordionWrapper}
        title="Privacy & Security"
        titleStyle={{ fontSize: 15 }}
        left={props => <Feather name="lock" size={24} color="black" style={{paddingLeft: 5}} />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item 
        style={styles.listItemStyle}
        left={props => <Ionicons name="ios-key" size={24} color="black"  />}
        title="Account Password" 
        titleStyle={{ fontSize: 15 }}
        onPress={handlePress}/>
        <List.Item 
        style={styles.listItemStyle}
        left={props => <MaterialIcons name="block" size={20} color="black" style={{ paddingTop: 5}} />}
        title="Blocking" 
        titleStyle={{ fontSize: 15 }}
        onPress={handlePress}/>
        <List.Item 
        style={styles.listItemStyle}
        left={props => <MaterialIcons name="location-searching" size={20} color="black" style={{ paddingTop: 5}} />}
        title="Location Tracking" 
        onPress={handlePress}/>
         <List.Item 
        style={styles.listItemStyle}
        left={props => <Feather name="check-circle" size={20} color="black" style={{ paddingTop: 5}} />}
        title="Active Status" 
        titleStyle={{ fontSize: 15 }}
        onPress={handlePress}/>
         <List.Item 
         style={styles.listItemStyle}
        left={props => <Feather name="tag" size={20} color="black" style={{ paddingTop: 5}} />}
        title="Tagging" 
        titleStyle={{ fontSize: 15 }}
        onPress={handlePress}/>
           <List.Item 
        style={styles.listItemStyle}
        left={props => <MaterialIcons name="notifications-none" size={20} color="black" style={{ paddingTop: 5}} />}
        title="Notifications" 
        titleStyle={{ fontSize: 15 }}
        onPress={handlePress}/>
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
  listItemStyle: {
    paddingTop: 5,
    margin: 5,
    borderWidth: 1,
    backgroundColor: '#d3d3d3',
    borderColor: '#ddd',
    shadowOffset: { width: 1, height: 0 },
    shadowColor: '#000',
    opacity: 0.7,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  }
});


export default ListAccordion;