import React from 'react'
import { StyleSheet, ScrollView, Image } from 'react-native'

import Container from './Container'
import { Paragraph, Header } from '../components/TextCard'
import colors from '../components/colors'

const TONBRIDGE_ARMS = require('../images/thumbnails/tonbridge-arms.png')

class Home extends React.Component {
  static navigationOptions = {
    title: 'About',
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.tonbridgeBlue,
    },
  }

  render = () => (
    <Container>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        style={styles.container}
      >
        <Image source={TONBRIDGE_ARMS} style={styles.image} />
        <Header>
          Welcome to Tonbridge
        </Header>
        <Paragraph>
          Tonbridge School is one of the leading boys’ boarding schools in the country and highly respected internationally.
        </Paragraph>
        <Paragraph>
          The school aims to provide a caring and enlightened environment in which the talents of each individual flourish. We encourage boys to be creative, tolerant and to strive for academic, sporting and cultural excellence. Respect for tradition and an openness to innovation are equally valued.
        </Paragraph>
        <Paragraph>
          A well-established house system at the heart of the school fosters a strong sense of belonging. Tonbridge seeks to celebrate its distinctive mixture of boarders and day boys; this helps to create a unique broadening and deepening of opportunity. We want boys to enjoy their time here, but also to be made aware of their social and moral responsibilities. Tonbridgians should enter into the adult world with the knowledge and self-belief to fulfil their own potential and to become leaders in their chosen field. Equally, we hope to foster a life-long empathy for the needs and views of others; in the words of the great novelist and Old Tonbridgian E.M. Forster: ‘Only Connect’.
        </Paragraph>

        <Header>
          History
        </Header>

        <Paragraph>
          Tonbridge School was founded in 1553 by Sir Andrew Judde, under Letters Patent of King Edward VI. The Charter ordained that the Governors of the school after the death of the Founder were to be the Worshipful Company of Skinners, one of the oldest City Livery Companies.
        </Paragraph>
        <Paragraph>
          Sir Andrew, himself a distinguished member of this Company, left property in the City of London and in the parish of St. Pancras as an endowment for the School. The income from these estates is at the disposal of the Governors for the general benefit of the school. The memory of Sir Andrew Judde and other benefactors is honoured in an annual Community Service, held on Skinners’ Day at the end of the summer term.
        </Paragraph>
        <Paragraph>
          Tonbridge occupies an extensive site of about 150 acres on the northern edge of the town of Tonbridge, and is largely self-contained within that site. Since its foundation, the school has been rebuilt twice on the original site. The main buildings of the present school date from the second half of the nineteenth century, a time in which the school grew considerably in size and importance. There has been much further building in the twentieth and twenty-first centuries. This has included the magnificent restoration, completed in 1995, of the Edwardian Chapel, which had been severely damaged by fire in 1988. Its superb new 4-manual organ, built by Marcussen of Denmark, is widely regarded as one of the finest instruments in the country. More recently a major Arts and Technology complex (the Vere Hodge Centre), opened in the summer of 1996. This was followed by the E. M. Forster Theatre in 2000, and the Sports and Media Centre in 2008.
        </Paragraph>
        <Paragraph>
          For about 300 years from 1553 the number of pupils at the school remained below 100. Although the majority have always been boarders, Tonbridge has always had a significant day constituency. In the middle of the nineteenth century a rapid expansion of the school began. The number of pupils increased from 83 in 1843 to 214 by 1870, and 447 by the end of the century. This coincided with a rapidly increasing demand for education from the Victorian middle classes, a transformation of the school’s finances to allow for new school buildings, and the coming of the railway to Tonbridge in the 1840s. By the end of the nineteenth century the modern character of the school had been shaped. This comprised a clearly managed pastoral system based on seven boarding and two day houses; a significantly widened curriculum to include greater prominence, alongside Classics, of other subjects like Maths, Science and Modern Languages; and the development of team sports, especially cricket and rugby. The consecration of the Edwardian Chapel in 1902 put the seal on a period of great development and underpinned the Christian foundation of the school.
        </Paragraph>
        <Paragraph>
          415 Old Tonbridgians died in the First World War and 297 in the Second World War. The number of pupils dipped in both wars but there was then a steady growth from 405 in 1945 to 630 in 1990. In the past twenty years that has risen to 770 as the number of day houses has grown from two to five, changing the balance of what had been an overwhelmingly boarding school to one where the boarders comprise about 60%. Whereas many other schools have become co-educational, Tonbridge has retained its all boy constituency and is now one of the very few single sex boarding schools in the country.
        </Paragraph>
        <Paragraph>
          Changes in the modern world have also brought new subjects into the curriculum in the last thirty years like Computing and Design Technology, while the facilities for and time given to music, art and drama have radically improved and increased. Changes in the national exam system have also brought more regular testing and a greater emphasis on ensuring external exam success. Sport has retained its importance but the traditional team sports of cricket and rugby are now supported by a much wider spectrum and choice, and an iconic new sports centre to enhance the superb outdoor sports facilities.
        </Paragraph>
        <Paragraph>
          The house system remains the bedrock of the pastoral system but is now supported by other structures and personnel. The school has also opened itself out more to the wider world with greater emphasis on community involvement, green initiatives and sponsorship of a government academy at New Romney. The school estate has been increased by many new buildings to improve the house system, support the academic learning and enhance the sports facilities, while the increased number of pupils has also seen an increase in teaching staff to over 100 (in 1875 it was 10!). The Master and Wardens of the Skinners’ Company remain the trustees of the School but in the last ten years an independent Board of Governors has taken on responsibility for the governance. Despite all these changes and developments Tonbridge remains on the same site as it started on in 1553, looked after by the same Skinners’ Company and remains true to its original aim of a well-grounded academic education.
        </Paragraph>

        <Header>
          Bibliography
        </Header>

        <Paragraph>
          H.B.Orchard - A Look at The Head and the Fifty, James and James 1991
        </Paragraph>

        <Paragraph>
          D.C.Somervell - A History of Tonbridge School, Faber and Faber 1947
        </Paragraph>

        <Paragraph>
          S.Rivington - A History of Tonbridge School 1869
        </Paragraph>

      </ScrollView>

    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  image: {
    marginTop: 50,
    width: 250,
    height: 300,
  },
})

export default Home
