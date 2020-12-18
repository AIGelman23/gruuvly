import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProfileSettingsScreen from '../screens/user/ProfileSettingsScreen';
import EditButton from '../components/EditButton';

const ProfileSettingsStackNavigator = createStackNavigator();

const ProfileSettingsNavigator = props => {

const navigation = useNavigation();

bottomSheet = React.createRef();
  fail = new Animated.Value(1);

  const renderInner = () => {

  }

  const renderHeader = () => {
    <View style={styles.header}>
      <View style={styles.panelHeader}>
         <View style={styles.panelHandle}></View>
      </View>
    </View>
  }

return(
    <View>
         <BottomSheet 
        ref={this.bottomSheet}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fail}
        enabledGestureInteraction={true}
      />
    <ProfileSettingsStackNavigator.Navigator
    initialRouteName="ProfileSettings">
    <ProfileSettingsNavigator.Screen 
    name="ProfileSettings"
    component={ProfileSettingsScreen}
    />
    </ProfileSettingsStackNavigator.Navigator>
    </View>
  );
};

export default ProfileSettingsNavigator;