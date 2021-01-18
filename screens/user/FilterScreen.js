import React from 'react';
import { 
  View,  
  StyleSheet, 
} from 'react-native';
import { Button } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Entypo } from '@expo/vector-icons'; 

import { useNavigation, StackActions } from '@react-navigation/native';

const FilterScreen = props => {

const navigation = useNavigation();

const [search, updateSearch] = React.useState();

  return (
    <SafeAreaView styles={styles.screen}>

      <View style={{flexDirection: 'row', position: 'relative', bottom: 4}}>
      <Button 
           onPress={() => {
            navigation.dispatch(StackActions.pop());
          }}
           buttonStyle={{backgroundColor: '#fff', padding: 13, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'lightgrey' }}
           containerStyle={{flex: .20}}
           icon={
            <Entypo name="arrow-left" size={30} color="#FC3FAF" />
          }
        />
       <SearchBar
        lightTheme
        round
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}  
        inputContainerStyle={{ height: 40 }}
        containerStyle={{backgroundColor: '#fff', flex: 1 }}
        inputStyle={{ height: 30}}
        searchIcon={{ size: 30, color: '#FC3FAF'}}
        clearIcon={{ size: 25 }}
        style={{ color: 'black' }}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
});

export default FilterScreen;