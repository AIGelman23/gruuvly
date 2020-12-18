import * as React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Title, Caption, Text, List } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const ProfileSettingsScreen = props => {
  
  const [expanded, setExpanded] = React.useState(false);
  const [haptic, setHaptic] = React.useState(true);
  const handlePress = () => {
    setExpanded(!expanded)
    if(!expanded){
    setHaptic( !haptic === Haptics.notificationAsync() )
    } else {
    setHaptic()
    }  
    // handlePress includes two functions - one is a standard
    // function that uses state and returns true if the accordion
    // is !expanded allowing the accordion list expand or appear
    // setHaptic is also another function that accepts a condition
    // of if !haptic is true or the handlePress event is fired
    // then call from the Expo Haptics library and use notificationAsync
    // to produce a haptic feedback ELSE return to the original state
    // if not expanded and DO NOT produce haptic feedback
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={[styles.boxWrapper, {flexDirection: 'row', justifyContent: 'center', paddingVertical: 30, padding: 100, margin: 5, marginBottom: 5, borderTopRightRadius: 20, borderTopLeftRadius: 20 }]}>
        <Avatar.Image 
          rounded
          source={{
             uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQH9dj3Ie9J9ng/profile-displayphoto-shrink_100_100/0/1601337533090?e=1613606400&v=beta&t=6RLUEmKFw0uOTe3CS8Tui5n6Sm0jmrjNnp_T7fvqhMU',
          }}
             size={120}
          />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {marginTop: 35, marginBottom: 5}]}>John Doe</Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
         
        </View>
        
        <View style={styles.userInfoSection}>
        
        <View style={[styles.boxWrapper, {flexDirection: 'column', justifyContent: 'space-between', paddingVertical: 5, margin: 3}]}>
          
          <View style={styles.item}>
          <Feather name="map-pin" size={25} color="black" />
          <View style={{paddingTop: 5}}>
          <Text style={{color: "black", fontSize: 15, marginRight: 15}}>
          Pittsburgh, PA
          </Text>
          </View>
          
          
          <Feather name="mail" size={25} color="black" />
          <View style={{paddingTop: 5}}>
          <Text style={{color: "black", fontSize: 15}}>
          john.doe@gmail.com
          </Text>
          </View>
          </View>
         

          <View style={[styles.item, { paddingRight: 212 }]}>
          <Feather name="phone" size={25} color="black" />
          <Text style={{ color: "black", fontSize: 15, paddingTop: 5}}>
           412-123-4567
          </Text>
          </View>

          </View>
        
        </View>
       
         <View style={[styles.boxWrapper,{marginTop: 5}]}>
         <View style={[styles.box, {
            borderRightColor: '#ddd',
            borderRightWidth: 1,
            padding: 10
          }]}>
            <View style={{ justifyContent: 'center'}}><Caption>Friends</Caption></View>
            <View style={{ justifyContent: 'center'}}><Title>160</Title></View>
          </View>
          <View style={[styles.box, {
            borderRightColor: '#ddd',
            borderRightWidth: 1,
            padding: 10
          }]}>
            <View style={{ justifyContent: 'center'}}><Caption>Posts</Caption></View>
            <View style={{ justifyContent: 'center'}}><Title>200</Title></View>
          </View>
             <View style={[styles.box, {
            borderRightColor: '#ddd',
            borderRightWidth: 1,
            padding: 10
          }]}>
             <View style={{ justifyContent: 'center'}}><Caption>Replies</Caption></View>
            <View style={{ justifyContent: 'center'}}><Title>200</Title></View>
          </View>
         </View>        
         <List.Section title="Control Your Profile">
          
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
    </ScrollView>
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' 
  },
  boxWrapper: { 
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    shadowColor: '#000',
    elevation: 2,
    backgroundColor: 'white'
  },
  box: {
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50
  },
  userInfoSection: {
    justifyContent: 'space-between',
    borderColor: '#ddd',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'white'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },  
  row: {
   marginVertical: 5,
  }, 
  menuWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 25
  },
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

export default ProfileSettingsScreen;

// Personal Information - Update your name, phone numbers, and email address
// Translation for posts
// Security and Login 
// Privacy Settings
// Profile and Tagging 
// Public Posts
// Notification Settings 
// Text Messagign 
// News Feed Preferences