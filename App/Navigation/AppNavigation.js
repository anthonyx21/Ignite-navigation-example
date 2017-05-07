import { StackNavigator } from 'react-navigation'
import MyDrawer2 from '../Containers/MyDrawer2'
import MyDrawer1 from '../Containers/MyDrawer1'
import MyStack2 from '../Containers/MyStack2'
import MyStack1 from '../Containers/MyStack1'
import MyTab3 from '../Containers/MyTab3'
import MyTab2 from '../Containers/MyTab2'
import MyTab1 from '../Containers/MyTab1'
import MyTabs from './MyTabs'
import MyDrawer from './MyDrawer'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  // MyDrawer2: { screen: MyDrawer2 },
  // MyDrawer1: { screen: MyDrawer1 },
  MyDrawer: { screen: MyDrawer },
  MyStack2: { screen: MyStack2 },
  MyStack1: { screen: MyStack1 },
  // MyTab3: { screen: MyTab3 },
  // MyTab2: { screen: MyTab2 },
  // MyTab1: { screen: MyTab1 },
  MyTabs: { screen: MyTabs },

  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    header: {
      style: styles.header
    }
  }
})

export default PrimaryNav
