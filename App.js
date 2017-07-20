// import React from 'react'
import { StackNavigator } from "react-navigation"
import codePush from "react-native-code-push"

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

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  // installMode: codePush.InstallMode.IMMEDIATE,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
}
class CodePushApp extends App {
  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("Checking for updates.")
        break
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("Downloading package.")
        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("Installing update.")
        break
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("Up-to-date.")
        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log("Update installed.")
        break
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log(
      progress.receivedBytes + " of " + progress.totalBytes + " received."
    )
  }
}
export default codePush(codePushOptions)(CodePushApp)
