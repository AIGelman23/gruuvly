import * as React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Title, Caption, Text } from 'react-native-paper';
import { Feather, FontAwesome } from '@expo/vector-icons';
import ProfileAccordion from '../../components/accordions/ProfileAccordion';
import PersonalizeAccordion from '../../components/accordions/PersonalizeAccordion';
import { useSelector, useDispatch } from "react-redux";
import { Auth } from 'aws-amplify'


const ProfileSettingsScreen = props => {

  const selectedImage = useSelector(state => state.camera.selectedImage);

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={[styles.boxWrapper, {flexDirection: 'row', justifyContent: 'center', paddingVertical: 30, padding: 100, margin: 5, marginBottom: 5, borderTopRightRadius: 20, borderTopLeftRadius: 20 }]}>
        <Avatar.Image 
          rounded
          source={{
              uri: selectedImage
          }}
             size={120}
          />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {marginTop: 45, marginBottom: 5}]}>{Auth.user.attributes.preferred_username}</Title>
            </View>
          </View>
        </View>
        
        <View style={styles.userInfoSection}>
        
        <View style={[styles.boxWrapper, {flexDirection: 'column', justifyContent: 'space-between', paddingVertical: 5, margin: 3}]}>
          
          <View style={styles.item}>
          <Feather name="map-pin" size={25} color="black" />
          <View style={{paddingTop: 5}}>
          <Text style={{color: "black", fontSize: 15}}>
         Pittsburgh, PA
          </Text>
          </View>
          
          
          <Feather name="mail" size={25} color="black" />
          <View style={{paddingTop: 5}}>
          <Text style={{color: "black", fontSize: 15}}>
          {Auth.user.attributes.email}
          </Text>
          </View>
          </View>
         

          <View style={[styles.item, { paddingRight: 80 }]}>
          <Feather name="phone" size={25} color="black" />
          <Text style={{ color: "black", fontSize: 15, paddingTop: 5}}>
           412-123-4567
          </Text>
          <FontAwesome name="birthday-cake" size={25} color="black" />
          <Text style={{ color: "black", fontSize: 15, paddingTop: 5}}>
           Feb 23 1987
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
      
        <ProfileAccordion
        accordionSectionTitle="Your Profile Settings" 
        accordionListTitle="Privacy & Security"
        />
        <PersonalizeAccordion 
        accordionListTitle="Personalization"
        />
        

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