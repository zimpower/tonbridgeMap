import React from 'react'
import { StyleSheet, View, Image, Button, Platform } from 'react-native'
import Container from './Container'

import colors from '../components/colors'

class Home extends React.Component {
  static navigationOptions = {
    title: 'TONBRIDGE SCHOOL',
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.tonbridgeBlue,
    },
  }

  onNavigateToAbout = () => {
    this.props.navigation.navigate('About')
  }

  onNavigateToPlaces = () => {
    this.props.navigation.navigate('Places')
  }

  onNavigateToMap = () => {
    this.props.navigation.navigate('MapSearch')
  }

  render = () => (
    <Container>
      <View style={styles.container}>

        <Image
          source={require('../images/thumbnails/tonbridge-arms.png')}
          style={styles.image}
        />

        <Button
          style={styles.button}
          onPress={this.onNavigateToAbout}
          title="About"
          color={colors.tonbridgeRed}
          accessibilityLabel="Learn more about Tonbridge School"
        />

        <Button
          style={styles.button}
          onPress={this.onNavigateToPlaces}
          title="Facilities"
          color={colors.tonbridgeRed}
          accessibilityLabel="Learn more about Tonbridge School"
        />

      </View>

    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  welcome: {
    flex: 1,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  appname: {
    padding: 5,
    fontSize: 36,
    color: colors.tonbridgeRed,
  },
  image: {
    marginTop: 50,
    width: 250,
    height: 300,
  },
  button: {
    margin: 20,
    // padding: 10,
    fontSize: 20,
  },
})

export default Home
