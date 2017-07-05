import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native'

import MapView from 'react-native-maps'

import Container from './Container'
import { Paragraph, Header } from '../components/TextCard'
import colors from '../components/colors'

const DEFAULT_PADDING = { top: 100, right: 100, bottom: 100, left: 100 }
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.001
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const DEFAULT_REGION = {
  latitude: 51.200128,
  longitude: 0.275162,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}
class Info extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.tonbridgeBlue,
    },
  })

  state = { region: null, location: null }

  componentDidMount = () => {
    const place = this.props.navigation.state.params

    const region = { ...DEFAULT_REGION, ...place.location }
    this.setState({ region })
  }

  onNavigateToMapSearch = (place) => {
    this.props.navigation.navigate('MapSearch', { ...place })
  }

  onLayout = () => {
    const place = this.props.navigation.state.params
    const markers = place.coordinates || []
    this.map.fitToCoordinates(
      [...markers, { longitude: region.longitude, latitude: region.latitude }],
      {
        edgePadding: DEFAULT_PADDING,
        animated: true,
      },
    )
    console.log('onLayout()')
  }

  render = () => {
    const place = this.props.navigation.state.params
    return (
      <Container>
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => this.onNavigateToMapSearch(place)}
          >
            <MapView
              ref={ref => (this.map = ref)}
              mapType="hybrid"
              showsUserLocation
              followUserLocation
              showsMyLocationButton
              scrollEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              region={this.state.region}
              style={styles.map}
            >
              {this.state.region != null &&
                <MapView.Marker coordinate={this.state.region} />}
              {place.coordinates &&
                <MapView.Polygon
                  key={place.id}
                  coordinates={place.coordinates}
                  fillColor={colors.transparent}
                />}
            </MapView>
          </TouchableWithoutFeedback>

          <View style={styles.description}>
            <Header>
              {place.name}
            </Header>

            <Paragraph>
              {place.description}
            </Paragraph>

          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  map: {
    flex: 1,
    height: Dimensions.get('window').height / 2,
    width: '100%',
  },
  description: {
    flex: 1,
  },
})

export default Info
