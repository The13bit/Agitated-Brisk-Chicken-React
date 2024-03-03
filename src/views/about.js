import React from 'react'

import { Helmet } from 'react-helmet'

import TeamBanner from '../components/team-banner'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - TEST</title>
        <meta property="og:title" content="About - TEST" />
      </Helmet>
      <div className="about-container01">
        <span className="about-text">
          <span>BIBEN DUM</span>
          <br></br>
          <span>FRINGI DICTUM, AUGUE PURUS</span>
        </span>
        <span className="about-text04">
          Etiam a rutrum, mauris lectus aptent convallis. Fusce vulputate
          aliquam, sagittis odio metus. Nulla porttitor vivamus viverra laoreet,
          aliquam netus.
        </span>
      </div>
      <div className="about-container02">
        <h1 className="about-text05">About Us</h1>
        <span className="about-text06">
          Lmcdfnue frjbr vjvj vjrngrfenfuef leifje ekfneif efkenfe kenfm fwndof
          fif fjebfu fmeffe fewfuef mfbewuidfne
        </span>
      </div>
      <div className="about-container03">
        <h1 className="about-text07">Biben dum fringi dictum, augue purus</h1>
        <span className="about-text08">
          Lmcdfnue frjbr vjvj vjrngrfenfuef leifje ekfneif efkenfe kenfm fwndof
          fif fjebfu fmeffe fewfuef mfbewuidfne
        </span>
      </div>
      <div className="about-container04">
        <h1>Mission</h1>
        <div className="about-container05">
          <div className="about-container06">
            <div className="about-container07">
              <h1>Mission</h1>
              <span>Text</span>
            </div>
            <div className="about-container08">
              <h1>Mission</h1>
              <span>Text</span>
            </div>
          </div>
          <div className="about-container09">
            <h1>Mission</h1>
            <span>Text</span>
          </div>
        </div>
      </div>
      <div className="about-container10">
        <h1>Our Team</h1>
        <span className="about-text17">
          Curae hendrerit donec commodo hendrerit egestas tempus, turpis
          facilisis nostra nunc. Vestibulum dui eget ultrices.
        </span>
        <div className="about-container11">
          <TeamBanner rootClassName="team-banner-root-class-name"></TeamBanner>
          <TeamBanner rootClassName="team-banner-root-class-name1"></TeamBanner>
          <TeamBanner rootClassName="team-banner-root-class-name2"></TeamBanner>
          <TeamBanner rootClassName="team-banner-root-class-name3"></TeamBanner>
        </div>
      </div>
    </div>
  )
}

export default About
