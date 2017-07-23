import React from "react"
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Button,
  Text,
  AsyncStorage,
} from "react-native"

import Container from "./Container"
import colors from "../components/colors"

class Home extends React.Component {
  static navigationOptions = {
    title: "TONBRIDGE SCHOOL",
    headerTintColor: colors.white,
    headerStyle: { backgroundColor: colors.tonbridgeBlue },
  }

  state = {
    content: null,
    version: null,
  }

  componentDidMount() {
    setTimeout(this.loadVersions, 500)
  }

  loadVersions = () => {
    AsyncStorage.getItem("content", (err, result) => {
      this.setState({ content: result })
    })

    AsyncStorage.getItem("version", (err, result) => {
      this.setState({ version: result })
    })
  }

  onNavigateToAbout = () => this.props.navigation.navigate("About")
  onNavigateToPlaces = () => this.props.navigation.navigate("Places")
  onNavigateToMap = () => this.props.navigation.navigate("MapSearch")

  render = () => (
    <Container>
      <View style={styles.container}>

        <Image
          source={require("../images/thumbnails/tonbridge-arms.png")}
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

        {this.state.version &&
          <Text style={styles.version}>
            {"Version: " + this.state.version}
          </Text>}

        {this.state.content &&
          <Text style={styles.content}>
            {"Content: " + this.state.content}
          </Text>}
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  welcome: {
    flex: 1,
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  appname: {
    padding: 5,
    fontSize: 36,
    color: colors.tonbridgeRed,
  },
  image: {
    marginTop: 50,
    width: Dimensions.get("window").height / 2,
    height: Dimensions.get("window").height / 2,
  },
  button: {
    margin: 20,
    fontSize: 20,
  },
  content: {
    position: "absolute",
    bottom: 5,
    right: 5,
    padding: 5,
    fontSize: 12,
    color: colors.tonbridgeBlue75,
  },
  version: {
    position: "absolute",
    bottom: 5,
    left: 5,
    padding: 5,
    fontSize: 12,
    color: colors.tonbridgeBlue75,
  },
})

export default Home
