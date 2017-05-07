import React from 'react'
import { ScrollView, Text,Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyStack1Style'

class MyStack1 extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>MyStack1 Container</Text>
        <Button
          onPress={() => this.props.navigation.navigate('MyStack2')}
          title="Go to next screen"/>
        <Button
          onPress={() => this.props.navigation.goBack()}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyStack1)
