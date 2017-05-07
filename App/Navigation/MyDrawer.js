import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import MyDrawer1 from '../Containers/MyDrawer1'
import MyDrawer2 from '../Containers/MyDrawer2'
import { DrawerNavigator } from 'react-navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyDrawerStyle'

MyDrawer = DrawerNavigator({
  Home: {
    screen: MyDrawer1,
  },
  Notifications: {
    screen: MyDrawer2,
  },
});

export default MyDrawer
