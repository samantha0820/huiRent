import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Thumbnail,Separator,Icon,Container, Content,Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Header from '../UI/Header'
import routeConfig from '../../constants/route'
const uri1="https://facebook.github.io/react-native/docs/assets/favicon.png"
const RATING = 3

function settings(props) {
    const navigation = useNavigation()
    return (
      <Container>
        <Header>
          </Header>
        <Content>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:60}}>
        <Image source={{uri:'https://www.facebook.com/images/fb_icon_325x325.png'}} style={{width:110,height:110,borderRadius:50,}}/>
        </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
           <Text>星級:</Text>
            {
              [...Array(RATING)].map((e, i)=>{
                return <Icon key={`star-${i + 1}`} style={{fontSize: 50, color: 'yellow'}} name="star"/>
              })
            }
            
            </View>
            <View>
          <List style={{paddingVertical:15}}>
            <ListItem avatar>
              <Body>
                <Text style={{fontSize:25,fontWeight:'bold',marginBottom:5}}>Hi,</Text>
                <Text note>王聖棉</Text>
              </Body>
              <Right>
                  <Text style={{width:50,height:30,backgroundColor:'#445877',fontSize:20,textAlign:'center',color:'#fff'}}>編輯</Text>
              </Right>
            
            </ListItem>
            </List>
            <List>
            <Separator bordered/>
   
          <ListItem onPress={() => navigation.navigate(routeConfig.used)} >
          <Left>
          <Text>可使用點數</Text>
           </Left>
            <Right>
             <Icon name="arrow-forward" />
           </Right>
          </ListItem>
          <ListItem last onPress={() => navigation.navigate(routeConfig.all)}>
          <Left>
          <Text>已累積點數</Text>
           </Left>
            <Right>
             <Icon name="arrow-forward" />
           </Right>
          </ListItem>
          <ListItem last onPress={()=>{}}>
          <Left>
          <Text>My Coupon</Text>
           </Left>
            <Right>
             <Icon name="arrow-forward" />
           </Right>
          </ListItem>
          <ListItem last >
          <Left>
          <Text>登出</Text>
           </Left>
            <Right>
             <Icon name="arrow-forward" />
           </Right>
          </ListItem>
          </List>


            </View>
        </Content>
      </Container>

    )
  }
  
  const styles = StyleSheet.create({
    
    image: {
      height: 150,
      marginHorizontal: 16,
      marginVertical: 8,
      resizeMode: "cover",
      justifyContent: "center",
      position: 'relative',
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 1,
      shadowOffset: {
        height: 2,
        width: 1,
      },
    },
    filter: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,.6)',
      borderRadius: 6
    },
   
    reserve:{
        fontSize: 50,
        fontWeight:'bold',
        color:'#000000',
        position:'absolute',
        alignSelf:'center',
        marginTop:10,
       
    },
    profile:{
        width:50,
        height:50,
        borderRadius:0.8
    }
  })
  
  export default settings