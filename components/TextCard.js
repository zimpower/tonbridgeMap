import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Paragraph = props => (
  <Text style={[styles.text, styles.paragraph]}>
    {props.children}
  </Text>
)

const Title = props => (
  <Text style={[styles.text, styles.title]}>
    {props.children}
  </Text>
)
const Header = props => (
  <Text style={[styles.text, styles.header]}>
    {props.children}
  </Text>
)

const SubHeader = props => (
  <Text style={[styles.text, styles.subheader]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 26,
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheader: {
    flex: 1,
    paddingTop: 15,
    fontSize: 20,
  },
  paragraph: {},
  text: {
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 18,
    color: 'rgb(19,63,116)',
  },
})

export { Title, Paragraph, Header, SubHeader }
