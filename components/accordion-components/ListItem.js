import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const ListItem = props => {

return (

<List.Item 
style={styles.listItemStyle}
left={props.left}
right={props.right}
title={props.listItemTitle}
titleStyle={{ fontSize: 15 }}
/>
   );
}

const styles = StyleSheet.create({

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

export default ListItem;