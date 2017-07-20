import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"

import MapView from "react-native-maps"
import { facilities, school } from "../API/facilities"
import colors from "../components/colors"

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
}
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 }
const DEFAULT_REGION = {
  latitude: 51.200128,
  longitude: 0.275162,
  latitudeDelta: 0.006,
  longitudeDelta: 0.003,
}

class MapSearch extends React.Component {
  static navigationOptions = {
    title: "Map",
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.tonbridgeBlue,
    },
  }

  state = { region: DEFAULT_REGION, location: null }

  componentWillMount = () => {
    const params = this.props.navigation.state.params
    // console.log('params:', this.props.navigation.state.params)
    const location =
      (params && this.props.navigation.state.params.location) || null
    // console.log('Location:', location)
    const name = (params && this.props.navigation.state.params.name) || ""

    this.setState({ name })
    if (location) {
      this.updateLocation(location)
    } else {
      navigator.geolocation.getCurrentPosition(
        position => this.updateLocation(position.coords),
        error => console.log("Geolocation error:", JSON.stringify(error)),
        GEOLOCATION_OPTIONS
      )
      this.watchID = navigator.geolocation.watchPosition(
        position => this.updateLocation(position.coords),
        GEOLOCATION_OPTIONS
      )
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  onRegionChange = region => {
    this.setState({ region })
  }

  updateLocation = coords => {
    const location = { longitude: coords.longitude, latitude: coords.latitude }
    // console.log('location:', location)
    const region = {
      ...location,
      latitudeDelta: 0.006,
      longitudeDelta: 0.003,
    }
    this.setState({ location, region })
  }

  zoomToSchool = () => {
    this.map.fitToCoordinates(school, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    })
  }

  zoomToMe = () => {
    this.zoomToLocation(this.state.location)
  }

  zoomToLocation = location => {
    const markers = [location]
    // console.log('markers', markers)
    this.map.fitToCoordinates(markers, {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <MapView
          ref={ref => this.map = ref}
          mapType="hybrid"
          showsUserLocation
          followUserLocation
          showsMyLocationButton
          userLocationAnnotationTitle="Here I am"
          region={this.state.region}
          style={styles.map}
        >
          {facilities.map(
            place =>
              place.coordinates &&
              <MapView.Polygon
                key={place.id}
                coordinates={place.coordinates}
                fillColor={place.fillColor}
                strokeColor={place.strokeColor}
                strokeWidth={place.strokeWidth}
              />
          )}
          {this.state.location &&
            <MapView.Marker
              centerOffset={{ x: 0, y: -30 }}
              coordinate={this.state.location}
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>
                  {this.state.name}
                </Text>
              </View>
            </MapView.Marker>}
        </MapView>

        <Button
          title="Zoom to whole school"
          onPress={this.zoomToSchool}
          style={{ padding: 15 }}
        />

        <Button
          title={`Zoom to ${this.state.name}`}
          onPress={this.zoomToMe}
          style={{ padding: 15 }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  map: {
    height: "75%",
    width: "100%",
  },
  marker: {
    backgroundColor: colors.alphaWhite,
    padding: 15,
    borderRadius: 7,
  },
  markerText: {
    color: colors.tonbridgeBlue,
  },
})

export default MapSearch
