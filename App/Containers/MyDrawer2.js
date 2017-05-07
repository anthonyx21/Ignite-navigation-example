import React from 'react'
import { ScrollView, Text,Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyDrawer2Style'

class MyDrawer2 extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>MyDrawer2 Container</Text>
        <Text>Drag from left to show drawer</Text>
        <Button
          onPress={() => this.props.navigation.navigate('LaunchScreen')}
          title="Go Back"/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer2)
