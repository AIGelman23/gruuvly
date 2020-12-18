import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Title, Avatar, Text } from 'react-native-paper';
import { Button, Card, Input } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditProfileScreen = props => {

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const size = 25;

  const renderContent = () => (
   
    <View style={styles.panel}>
    <Text style={styles.panelTitle}>Change Profile Pic</Text>
    <Button 
      type="outline"
      buttonStyle={{ justifyContent: 'space-between', borderRadius: 10, width: 200, height: 50, borderColor: '#4169e1' }}
      icon={
        <FontAwesome5
          name="camera"
          size={size}
          color='#4169e1'
        />
      }
      iconLeft
      title="Take A Picture"
      titleStyle={{ color: '#4169e1', fontSize: 15, flex: 1}}
      onPress={() => {}}/>
    <Button 
      type="outline"
      buttonStyle={{ justifyContent: 'space-between', borderRadius: 10, width: 200, height: 50, borderColor: '#4169e1', marginTop: 10 }}
      title="Choose from Library"
      titleStyle={{ color: '#4169e1', fontSize: 15, flex: 1}}
      onPress={() => {}}/>
    <Button 
      type="outline"
      buttonStyle={{ justifyContent: 'space-between', borderRadius: 10, width: 200, height: 50, borderColor: '#4169e1', marginTop: 10 }}
      title="Cancel"
      titleStyle={{ color: '#4169e1', fontSize: 15, flex: 1}}
      onPress={() => sheetRef.current.snapTo(1)}/>
    </View>
  );

  const sheetRef = React.useRef();
  const fall = new Animated.Value(1);

  return (
    <SafeAreaView style={styles.screen}>
      <BottomSheet 
        ref={sheetRef}
        initialSnap={1}
        snapPoints={[430, 0, 0]}
        renderHeader={renderHeader}
        renderContent={renderContent}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={true}
        callbackNode={fall}
        enabledInnerScrolling={false}
      />
      <Animated.View style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0))}}>
          <Card>
            <View style={{alignItems: 'center'}}>
            <View><Card.Title>Tap to Change Pic</Card.Title></View>
            <TouchableOpacity  onPress={() => sheetRef.current.snapTo(0)}>
              <Avatar.Image 
               rounded
               source={{
             uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQH9dj3Ie9J9ng/profile-displayphoto-shrink_100_100/0/1601337533090?e=1613606400&v=beta&t=6RLUEmKFw0uOTe3CS8Tui5n6Sm0jmrjNnp_T7fvqhMU',
         }}
             size={130}
          />
          <View style={{alignItems: 'center'}}><Title>John Doe</Title></View>
          </TouchableOpacity>  
          </View>
          </Card>
          <Card>
          <Input
            label='Telephone Number'
           placeholder=''
          />

          <Input
            label='Email Address'
            placeholder=''
          />

          <Input
            label='First Name'
            placeholder=''
          />

          <Input
            label='Last Name'
            placeholder=''
          />
          </Card>

          <Card>
            <View style={{padding: 10}}>
              <Text>content</Text>
            </View>
          </Card>
          
          
      </Animated.View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { 
      flex: 1,
      backgroundColor: '#FFF',  
      justifyContent: 'center',
  },
  header: {
        backgroundColor: '#FFF',
        shadowColor: '#333',
        shadowOffset: {width: -1, height: -1},
        shadowRadius: 1, 
        shadowOpacity: 0.5,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
  },
  panel: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingTop: 10,
      height: 600,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 70, 
    height: 6, 
    borderRadius: 5, 
    backgroundColor: '#aaa9ad',
    shadowColor: '#aaa9ad',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 1, 
    shadowOpacity: 0.5,
    marginBottom: 10
  }, 
  panelTitle: {
    paddingTop: 5,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4169e1'
  },
});

export default EditProfileScreen;