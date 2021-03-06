import React from 'react'
import { Icon } from 'native-base'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import GeneralStyles from '../styles/GeneralStyles'
import Colors from '../styles/Colors'

import Home from '../containers/Home/Home'
import RoomDetail from '../components/Home/Detail'
import settings from '../components/settings/settings'
import MyReserve from '../components/MyReserve/MyReserve'
import all from '../components/settings/all'
import used from '../components/settings/used'

const HomeStack = createStackNavigator()
 function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <HomeStack.Screen name="home" component={Home}/>
        <HomeStack.Screen name="roomDetail" component={RoomDetail}/>
      </HomeStack.Navigator>
  )
}

const setStack = createStackNavigator()
function setStackScreen(){
  return(
    <setStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <setStack.Screen name="settings" component={settings}/>
    <setStack.Screen name="all" component={all}/>
    <setStack.Screen name="used" component={used}/>
      </setStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function AllRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.secondary,
        }}
      >
        <Tab.Screen name="home" component={HomeStackScreen}
          options={{
              tabBarIcon: ({color}) => (
                <Icon type="FontAwesome5" name="home" style={[GeneralStyles.iconStyle, { color: color }]}/>
              ),
            }}/>
        <Tab.Screen name="calendar" component={MyReserve}
          options={{
              tabBarIcon: ({color}) => (
                <Icon type="FontAwesome5" name="calendar" style={[GeneralStyles.iconStyle, { color: color }]}/>
              ),
            }}/>
        <Tab.Screen name="gift" component={HomeStackScreen}
          options={{
              tabBarIcon: ({color}) => (
                <Icon type="FontAwesome5" name="gift" style={[GeneralStyles.iconStyle, { color: color }]}/>
              ),
            }}/>
        <Tab.Screen name="settings" component={setStackScreen}
          options={{
              tabBarIcon: ({color}) => (
                <Icon type="FontAwesome5" name="user-cog" style={[GeneralStyles.iconStyle, { color: color }]}/>
              ),
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
