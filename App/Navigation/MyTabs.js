import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import MyTab1 from '../Containers/MyTab1'
import MyTab2 from '../Containers/MyTab2'
import { TabNavigator } from 'react-navigation'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyTabsStyle'

const MyTabs = TabNavigator({
  Home: {
    screen: MyTab1,
  },
  Notifications: {
    screen: MyTab2,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


export default MyTabs
