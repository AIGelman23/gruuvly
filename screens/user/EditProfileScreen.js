import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import { Title, Avatar, Text } from 'react-native-paper';
import { Button, Card, Input } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { FontAwesome5, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../../constants/Colors';

import { Auth } from 'aws-amplify';

import { useSelector, useDispatch } from "react-redux";
import { pickImage } from '../../store/camera/actions';

const EditProfileScreen = props => {

  const dispatch = useDispatch();
  const selectedImage = useSelector(state => state.camera.selectedImage);
  // const [selectedImage, setSelectedImage] = React.useState(null);
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const [flashMode, setFlashMode] = React.useState('off');
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, 
      allowsEditing: true, 
      aspect: [4, 3], 
      quality: 1
    })
    if (!result.cancelled) {
       dispatch(pickImage({ url: result.uri }))
      // setSelectedImage(result.uri)
    }
  }
  
  const __startCamera = async () => {
   const { status } = await Camera.requestPermissionsAsync()
  if(status === 'granted') {
    // do something
    setStartCamera(true)
    sheetRef.current.snapTo(1)
  } else {
    Alert.alert("Access denied");
  }
  };
  
  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
   setCapturedImage(photo)
   
  };

  const CameraPreview = ({photo}) => {
    return (
      <View style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
        
      }}>
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            
          }}
        />
          <View style={{ flexDirection: 'row', flex: .96, justifyContent: 'space-around' }}>
          <View style={{ height: '100%', justifyContent: 'flex-end'}}>
          <Button 
          buttonStyle={{ backgroundColor: 'transparent', width: 140, height: 70 }}
          title="Save Photo"
          titleStyle={{ color: '#fff', fontSize: 20, flex: 1}}
          onPress={__savePhoto}/>
         
          </View>
          <View style={{height: '100%', justifyContent: 'flex-end' }}>
          <Button 
          buttonStyle={{ backgroundColor: 'transparent', width: 160, height: 70 }}
          title="Retake Photo"
          titleStyle={{ color: '#fff', fontSize: 20, flex: 1}}
          onPress={__retakePicture}/> 
          </View> 
          </View>
          </View>  
    )
  };
  
  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  };

  const __savePhoto = () => {
    console.log('save photo');
    console.log(capturedImage);
    dispatch(pickImage({ url: capturedImage.uri }))
    // setSelectedImage(capturedImage.uri)
    setStartCamera(false)
  }

  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }
  }


 


  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

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
    <Text style={styles.panelTitle}>Change Profile Picture</Text>
    <Button 
      type="outline"
      buttonStyle={{ justifyContent: 'space-between', borderRadius: 10, width: 200, height: 50, borderColor: '#4169e1', marginTop: 20 }}
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
      onPress={__startCamera}/>
    <Button 
      type="outline"
      buttonStyle={{ justifyContent: 'space-between', borderRadius: 10, width: 200, height: 50, borderColor: '#4169e1', marginTop: 20 }}
      title="Choose from Library"
      titleStyle={{ color: '#4169e1', fontSize: 15, flex: 1}}
      onPress={PickImage}/>
    <Button 
      type="outline"
      buttonStyle={{ justifyContent: 'space-between', borderRadius: 10, width: 200, height: 50, borderColor: '#4169e1', marginTop: 20 }}
      title="Cancel"
      titleStyle={{ color: '#4169e1', fontSize: 15, flex: 1}}
      onPress={() => sheetRef.current.snapTo(1)}/>
    </View>
  );

  const sheetRef = React.useRef();
  const fall = new Animated.Value(1);   
  let camera = Camera;

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
      
      
      {startCamera ? previewVisible && capturedImage ? (

        
     <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} /> ) : (
      
      <Camera
        type={cameraType}
        flashMode={flashMode}
        style={{flex: 1, width:"100%"}}
        ref={(r) => {
          camera = r
        }}
      >   
      <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'space-around'}} >
      <View style={{ flexDirection: 'column', flex: .9 }}>
      <Button
      buttonStyle={{ 
        borderRadius: 50, 
        width: 60, 
        height: 60, 
        backgroundColor: 'transparent'
      }}
      onPress={__handleFlashMode}
      icon={<Entypo name="flash" color={flashMode === 'off' ? '#fff' : '#ffff00'} size={50} />}
  />
     </View>
     <View style={{ flexDirection: 'column', flex: .2 }}>
  <Button
    onPress={__switchCamera}
    title={cameraType === 'front' ?  (<MaterialIcons type='front' name="camera-front" size={50} color={Colors.primary} />)  : (<MaterialCommunityIcons type='back' name="camera-rear" size={50} color={Colors.accentColor} />)}

    buttonStyle={{
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: 'transparent'
    }}
   
   />
   </View>
  </View>
       <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <View style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                        left: 5,
                        top: 5,
                        width: 60,
                        height: 60,
                        bottom: 0,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#000',
                        backgroundColor: '#fff',
                      }}
                    />
                   </View>
                    
                  </View>
                </View>
              </View>   
      </Camera>
      ) : (
      <Animated.View style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0))}}>
          <Card>
            <View style={{alignItems: 'center'}}>
            <View><Card.Title>Tap to Change Picture</Card.Title></View>
            <TouchableOpacity onPress={()=> sheetRef.current.snapTo(0)}>
              { selectedImage ?
              (<Avatar.Image   
               rounded
               source={{ uri: selectedImage }}
               size={130}
              />) : 
              (<Avatar.Image   
                rounded
                source={{
                  uri: 'data:image/png;base64,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',
              }}
                size={130}
               /> )   
              }
       
        <View style={{alignItems: 'center'}}><Title>{Auth.user.attributes.preferred_username}</Title></View>
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
       )}
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
      paddingTop: 25,
      height: 600,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 35, 
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
