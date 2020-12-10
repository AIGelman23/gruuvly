import React from 'react';
import { StyleSheet, View } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

const CardComponent = props => {
  
    return (
     
      <Container style={styles.screen}>
        <Header style={styles.headerContentStyle}>
          <Text>Header Title</Text>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                Card Text
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      
    );
};

const styles = StyleSheet.create({
  screen: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default CardComponent;
