import React from "react"
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  SectionList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import _ from "lodash"

import { facilities, ordererFacilities } from "../API/facilities"
import Container from "./Container"
import { Paragraph, SubHeader } from "../components/TextCard"
import colors from "../components/colors"

class Places extends React.Component {
  static navigationOptions = {
    title: "Facilities",
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.tonbridgeBlue,
    },
  }

  state = { text: "", data: facilities, status: "ready" }

  onSearch = text => {
    let data = facilities
    let status = this.state.status
    if (text !== "") {
      // console.log('filtering places for text:', text)
      data = _.filter(
        facilities,
        item =>
          _.includes(item.name.toLowerCase(), text.toLowerCase()) ||
          _.includes(item.description.toLowerCase(), text.toLowerCase()) ||
          _.includes(item.type.toLowerCase(), text.toLowerCase())
      )
      status = data.length > 0 ? "found" : "empty"
    }

    this.setState({ text, data, status })
  }

  onNavigateToInfo = item => {
    this.props.navigation.navigate("Info", item)
  }

  onFocus = () => this.setState({ status: "focus" })
  onBlur = () => this.setState({ status: "ready" })

  getBorder = () => {
    switch (this.state.status) {
      case "found":
        return styles.borderFound
      case "empty":
        return styles.borderEmpty
      case "focus":
        return styles.borderFocus
      default:
        return styles.border
    }
  }

  keyExtractor = item => item.id

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.onNavigateToInfo(item)}>
      <Image source={item.image} style={styles.image} resizeMode="cover">
        <Text style={styles.title}>
          {item.name}
          <Text style={styles.subtitle}>{`   ${item.type}`}</Text>
        </Text>
      </Image>
    </TouchableOpacity>
  )

  renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <SubHeader>
        {section.key}
      </SubHeader>
    </View>
  )

  render() {
    const searching = this.state.text !== ""
    const border = this.getBorder()

    return (
      <Container>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search facilites..."
          returnKeyType="search"
          clearButtonMode="while-editing"
          style={[styles.input, border]}
          onChangeText={text => this.onSearch(text)}
          value={this.state.text}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />

        {searching
          ? this.state.status === "empty"
              ? <Paragraph>Nothing found</Paragraph>
              : <FlatList
                  style={styles.list}
                  data={this.state.data}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
                />
          : <SectionList
              style={styles.list}
              sections={ordererFacilities}
              renderSectionHeader={this.renderSectionHeader}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  header: {
    backgroundColor: colors.opaqueWhite,
  },
  image: {
    flex: 1,
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },
  title: {
    top: 0,
    left: 0,
    fontSize: 22,
    padding: 5,
    color: colors.white,
    backgroundColor: colors.tonbridgeBlue75,
    borderColor: colors.tonbridgeRed,
    borderRadius: 3,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "lightsteelblue",
    backgroundColor: colors.transparent,
  },
  input: {
    height: 40,
    margin: 10,
    fontSize: 18,
    width: "100%" - 20,
    paddingHorizontal: 10,
  },
  border: {
    borderColor: colors.lightgrey5,
    borderWidth: 1 / 2,
    borderRadius: 3,
  },
  borderFocus: {
    borderColor: colors.tonbridgeBlue,
    borderWidth: 1,
    borderRadius: 3,
  },
  borderFound: {
    borderColor: colors.green1,
    borderWidth: 1,
    borderRadius: 3,
  },
  borderEmpty: {
    borderColor: colors.tonbridgeRed,
    borderWidth: 1,
    borderRadius: 3,
  },
})

export default Places
