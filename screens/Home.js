import React from "react"
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Button,
  Text,
  Platform,
} from "react-native"
import codePush from "react-native-code-push"
import DeviceInfo from "react-native-device-info"

import Container from "./Container"
import colors from "../components/colors"

class Home extends React.Component {
  static navigationOptions = {
    title: "TONBRIDGE SCHOOL",
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.tonbridgeBlue,
    },
  }

  state = {
    version: "",
    label: "",
    appVersion: DeviceInfo.getReadableVersion(),
  }

  componentDidMount() {
    codePush.getUpdateMetadata().then(metadata => {
      if (metadata) {
        console.log("metadata:", metadata)
        this.setState({
          label: metadata.label,
          version: metadata.appVersion,
        })
      }
    })
    codePush.getCurrentPackage().then(update => {
      console.log("####### CodePush update:", update)
    })
  }

  onNavigateToAbout = () => {
    this.props.navigation.navigate("About")
  }

  onNavigateToPlaces = () => {
    this.props.navigation.navigate("Places")
  }

  onNavigateToMap = () => {
    this.props.navigation.navigate("MapSearch")
  }

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
          title="General Information"
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

        <Text style={styles.appversion}>
          {"Version: " + this.state.appVersion}
        </Text>

        <Text style={styles.version}>
          {"Content: " + this.state.version + this.state.label}
        </Text>

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
    // padding: 10,
    fontSize: 20,
  },
  version: {
    position: "absolute",
    bottom: 5,
    right: 5,
    padding: 5,
    fontSize: 12,
    color: colors.tonbridgeBlue75,
  },
  appversion: {
    position: "absolute",
    bottom: 5,
    left: 5,
    padding: 5,
    fontSize: 12,
    color: colors.tonbridgeBlue75,
  },
})

export default Home
