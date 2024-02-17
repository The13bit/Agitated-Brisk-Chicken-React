import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import Newbtn from './newbtn'
import './headerold.css'

const Headerold = (props) => {
  return (
    <div className={`headerold-container ${props.rootClassName} `}>
      <div className="headerold-container1">
        <div className="headerold-container2">
          <Player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
            className="headerold-lottie-node"
          ></Player>
          <span className="headerold-text">{props.ngo}</span>
        </div>
        <div className="headerold-container3">
          <Newbtn></Newbtn>
          <button type={props.buttonType1} className="headerold-button button">
            {props.button13}
          </button>
          <button type={props.buttonType2} className="headerold-button1 button">
            {props.button14}
          </button>
        </div>
        <div className="headerold-container4">
          <button type="button" className="headerold-button2 button">
            {props.button4}
          </button>
          <button type="button" className="headerold-button3 button">
            {props.button3}
          </button>
        </div>
      </div>
    </div>
  )
}

Headerold.defaultProps = {
  rootClassName: '',
  buttonType1: 'button',
  button14: 'Info',
  button3: 'Donate',
  buttonType2: 'button',
  ngo: 'Contact',
  button13: 'Contact',
  button4: 'Button',
}

Headerold.propTypes = {
  rootClassName: PropTypes.string,
  buttonType1: PropTypes.string,
  button14: PropTypes.string,
  button3: PropTypes.string,
  buttonType2: PropTypes.string,
  ngo: PropTypes.string,
  button13: PropTypes.string,
  button4: PropTypes.string,
}

export default Headerold
