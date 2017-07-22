import App from "./app/app"
import { AppRegistry } from "react-native"
import codePush from "react-native-code-push"

class CodePushApp extends App {
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
