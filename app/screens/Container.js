import React from 'react'
import { View, StatusBar } from 'react-native'

import colors from '../components/colors'

const Container = props => (
  <View style={props.style}>
    <StatusBar barStyle="light-content" />
    <View
      style={{
        width: 2,
        backgroundColor: colors.tonbridgeRed,
      }}
    />
    <View style={{ width: 2, backgroundColor: colors.black }} />
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {props.children}
    </View>
  </View>
)

Container.defaultProps = {
  style: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
}

export default Container
