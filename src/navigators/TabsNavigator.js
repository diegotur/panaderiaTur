import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import OrdersScreen from '../screens/OrdersScreen';


const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen name="Juegos-tab" component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="shop" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Juegos</Text>
            </View>
          )
        }}

      />
      <BottomTabs.Screen name="Cart-tab" component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="md-cart" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Carrito</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen name='orders-tab' component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="md-list" size={24} color={focused ? '#7F5DF0' : '#748C94'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Órdenes</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})