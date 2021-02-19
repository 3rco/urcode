import React from 'react'
import Layout from '../components/layouts/docsLayout'
import NavBar from '../components/sections/navbar'
import Footer from '../components/sections/footer'
import Interest from '../components/sections/docs/interest'
import Appearance from '../components/sections/docs/appearance'
import FieldOfInterest from '../components/sections/docs/fieldOfInterest'
import Lifestyle from '../components/sections/docs/lifestyle'
import Computer from '../components/sections/docs/computer'
import Entertainment from '../components/sections/docs/entertainment'
import Politics from '../components/sections/docs/politics'
import Contribution from '../components/sections/docs/contribution'
import styles from './docs.module.css'
import GenerateSection from '../components/sections/docs/generateSection'
import InfoSection from '../components/sections/docs/infoSection'

export default class Docs extends React.Component {

  state = {
    codeBox: false,
  }

  generateUrcode = () => {
    let urcode = Object.values(this.state).filter(key => typeof (key) === "string")
    this.setState({
      urcode: urcode,
      codeBox: true
    })
  }

  onRadioChanged = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  onCheckBoxChange = (e) => {
    if(e.target.checked){
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      });
    } else {
      this.setState({
        [e.currentTarget.name]: null
      });
    }     
  }

  render() {
    return (
      <Layout>
        <NavBar />
        <section className={styles.content}>
          <InfoSection />
          <Interest onRadioChanged={this.onRadioChanged} />
          <Appearance onRadioChanged={this.onRadioChanged} />
          <FieldOfInterest onRadioChanged={this.onRadioChanged} onChangeCheckBox={this.onCheckBoxChange}/>
          <Lifestyle onRadioChanged={this.onRadioChanged} />
          <Computer onRadioChanged={this.onRadioChanged} />
          <Politics onRadioChanged={this.onRadioChanged} />
          <Entertainment onRadioChanged={this.onRadioChanged} />
          <GenerateSection codeBox={this.state.codeBox} urcode={this.state.urcode} generateUrcode={this.generateUrcode} />
          <Contribution />
        </section>
        <Footer />
      </Layout>
    )
  }

}