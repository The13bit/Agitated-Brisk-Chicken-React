import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <div className="header-container1">
        <div className="header-container2">
          <Player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
            className="header-lottie-node"
          ></Player>
          <span className="header-text">{props.ngo}</span>
        </div>
        <div className="header-container3">
          <button type={props.buttonType} className="header-button button">
            {props.button1}
          </button>
          <button type="button" className="header-button1 button">
            {props.button12}
          </button>
          <button type="button" className="header-button2 button">
            {props.button11}
          </button>
        </div>
        <div className="header-container4">
          <button type="button" className="header-button3 button">
            {props.button4}
          </button>
          <button type="button" className="header-button4 button">
            {props.button3}
          </button>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  button3: 'Donate',
  buttonType: 'button',
  ngo: 'Contact',
  button4: 'Button',
  button11: 'Info',
  button12: 'Info',
  button1: 'About',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  button3: PropTypes.string,
  buttonType: PropTypes.string,
  ngo: PropTypes.string,
  button4: PropTypes.string,
  button11: PropTypes.string,
  button12: PropTypes.string,
  button1: PropTypes.string,
}

export default Header
