import App from "./app/app"
import { AsyncStorage, AppRegistry } from "react-native"
import codePush from "react-native-code-push"
import DeviceInfo from "react-native-device-info"

class CodePushApp extends App {
  componentDidMount() {
    this.saveAppVersion()
    this.saveContentVersion()
  }

  // Save the app ios version to disk
  saveAppVersion = () => {
    try {
      AsyncStorage.setItem("version", DeviceInfo.getReadableVersion())
    } catch (err) {
      console.log("Error saving version: ", err)
    }
  }

  // Save the app code-push content version to disk
  saveContentVersion = () => {
    codePush.getUpdateMetadata().then(metadata => {
      if (metadata) {
        try {
          AsyncStorage.setItem("content", metadata.appVersion + metadata.label)
        } catch (err) {
          console.log("Error saving content version: ", err)
        }
      }
    })
  }

  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("TB School: Checking for updates.")
        break
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("TB School: Downloading package.")
        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("TB School: Installing update.")
        break
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("TB School: Up-to-date.")
        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log("TB School: Update installed.")
        this.saveContentVersion()
        break
    }
  }

  codePushDownloadDidProgress({ receivedBytes, totalBytes }) {
    console.log(receivedBytes + " of " + totalBytes + " received.")
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
}

CodePushApp = codePush(codePushOptions)(CodePushApp)

AppRegistry.registerComponent("tonbridgeMap", () => CodePushApp)
