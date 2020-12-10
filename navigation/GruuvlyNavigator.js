import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DirectMessageScreen from "../screens/user/DirectMessageScreen";
import TimeCapsuleScreen from "../screens/user/TimeCapsuleScreen";
import FriendsScreen from '../screens/user/FriendsScreen';
import SettingsScreen from '../screens/user/SettingsScreen';
import ProfileSettingsScreen from '../screens/user/ProfileSettingsScreen';
import AboutScreen from '../screens/details/AboutScreen';
import TermsOfServiceScreen from '../screens/details/TermsOfServiceScreen';
import Colors from '../constants/Colors';
import HomeScreen from "../screens/user/HomeScreen";
import FilterScreen from "../screens/user/FilterScreen";
import ActivityFeedScreen from "../screens/community/ActivityFeedScreen";
import EditProfileScreen from "../screens/user/EditProfileScreen";
import EditButton from '../components/EditButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const SettingsNavigator = createStackNavigator({
  Settings: SettingsScreen,
  ProfileSettings: {
    screen: ProfileSettingsScreen,
    navigationOptions: {
      title: "Profile Settings",
      headerRight:(() =>
      <HeaderButtons HeaderButtonComponent={EditButton}>
      <Item
        title="Edit"
        name="account-edit" 
        onPress={() => navigation.openDrawer()}
      />
    </HeaderButtons>
     )
    }, 
  }, 
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      title: "About Gruuvly"
    }
  },
  TermsOfService: {
    screen: TermsOfServiceScreen,
    navigationOptions: {
      title: "Terms of Service"
    }
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: {
      title: "Tprofile"
    }
  },
});

const HomeNavigator = createStackNavigator({
  Home: HomeScreen
});

const ActivityNavigator = createStackNavigator({
  Activity: ActivityFeedScreen
});

const FilterNavigator = createStackNavigator({
  Search: FilterScreen
});

const FriendsNavigator = createStackNavigator(
  {
    Friends: FriendsScreen
  }
);

const TimeCapsuleNavigator = createStackNavigator(
  {
    TimeCapsule: TimeCapsuleScreen
  }
);

const DirectMessageNavigator = createStackNavigator(
  {
    DirectMessage: DirectMessageScreen
  }
);


const GruuvlyDrawerNavigator = createDrawerNavigator(
  {
   options: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: 'gruuvly'
      }
    },
    "Friends": FriendsNavigator,
    "Time Capsule": TimeCapsuleNavigator,
    "Direct Messages": DirectMessageNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);


const tabScreenConfig = {
  Home: {
    screen: GruuvlyDrawerNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-home" size={30} color={tabInfo.tintColor} />
        );
      }, 
      tabBarColor: Colors.primaryColor,
      tabBarOptions: { 
        showLabel: false, 
        activeTintColor: Colors.accentColor,
      },
     
    }
  },
  Activity: {
    screen: ActivityNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-list" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarOptions: { 
        showLabel: false, 
        activeTintColor: Colors.accentColor,
      },
    }
  },
  Post: {
    screen: () => {
      const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Add Post</Text>
      </TouchableHighlight>
    </View>
  );
    },
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-add-circle" size={45} color={tabInfo.tintColor} />
        );
      },
      tabBarOptions: { 
        activeTintColor: 'white', 
        showLabel: false, 
        activeTintColor: Colors.accentColor,
        indicatorStyle: {
          borderWidth: 10,
          backgroundColor: Colors.accentColor
       },
      },

    }
  },
  Search: {
    screen: FilterNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-search" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarOptions: { 
      showLabel: false, 
      activeTintColor: Colors.accentColor,
    }, 
  }
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-settings" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarOptions: { 
        showLabel: false, 
        activeTintColor: Colors.accentColor
      },
    }
  },
};

const GruuvlyTabNavigator =
Platform.OS === 'android'
? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: false,
    barStyle: {
      backgroundColor: Colors.primaryColor
    },
  })
: createBottomTabNavigator(tabScreenConfig, {
  
    tabBarOptions: {
      activeTintColor:'white',
    }
  });


  const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default createAppContainer(GruuvlyTabNavigator);