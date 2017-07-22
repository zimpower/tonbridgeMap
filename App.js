// import React from 'react'
import { StackNavigator } from "react-navigation"

import MapSearch from "./screens/MapSearch"
import About from "./screens/About"
import Home from "./screens/Home"
import Places from "./screens/Places"
import Info from "./screens/Info"

const App = StackNavigator({
  Home: { screen: Home },
  About: { screen: About },
  MapSearch: { screen: MapSearch },
  Places: { screen: Places },
  Info: { screen: Info },
})

export default App
