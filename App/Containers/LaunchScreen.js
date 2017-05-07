import React from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            {/*<Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>*/}
          </View>

          <Button
            onPress={() => this.props.navigation.navigate('MyStack1')}
            title="Go to Stack"/>
          <Button
            onPress={() => this.props.navigation.navigate('MyTabs')}
            title="Go to Tabs"/>
          <Button
            onPress={() => this.props.navigation.navigate('MyDrawer')}
            title="Go to Drawer"/>
          {/*<DevscreensButton />*/}
        </ScrollView>
      </View>
    )
  }
}
