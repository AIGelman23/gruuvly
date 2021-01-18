import React from 'react';
import { Avatar } from 'react-native-paper';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

import {
  Card, 
  UserInfo, 
  UserName, 
  UserInfoText, 
  PostTime, 
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText, Divider
} from '../styles/FeedStyles';

const CardPost = ({item}) => {

  let likeIcon = item.liked ? 'like1' : 'like2';
  let likeIconColor = item.liked ? '#2e64e5' : '#333';

  return (
    <Card>
    <UserInfo>
    <Avatar.Image 
      rounded
      source={item.userImg}
      size={50}
      />
      <UserInfoText>
      <UserName>{item.userName}</UserName>
      <PostTime>{item.postTime}</PostTime>
      </UserInfoText>
    </UserInfo>
    <PostText>{item.post}</PostText>
    {item.postImg !== 'none' ? <PostImg source={item.postImg}/> : <Divider />}
      <InteractionWrapper>
        <Interaction active>
        <AntDesign name={likeIcon} size={25} color={likeIconColor} />
        <InteractionText active>{item.liked}{item.likes}</InteractionText>
        </Interaction>
        <Interaction>
        <AntDesign name="dislike2" size={25} color="black" />
        <InteractionText>Dislike</InteractionText>
        </Interaction>      
        <Interaction>
        <FontAwesome5 name="comment-alt" size={25} color="black" />
        <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default CardPost;