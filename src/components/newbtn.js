import React from 'react'

import PropTypes from 'prop-types'

import './newbtn.css'

const Newbtn = (props) => {
  return (
    <div className={`newbtn-container ${props.rootClassName} `}>
      <button type={props.buttonType} onClick className="newbtn-button button">
        {props.button1}
      </button>
    </div>
  )
}

Newbtn.defaultProps = {
  rootClassName: '',
  buttonType: 'button',
  button1: 'About',
  buttonOnClick: "{() => handleRedirect('/contact')}",
}

Newbtn.propTypes = {
  rootClassName: PropTypes.string,
  buttonType: PropTypes.string,
  button1: PropTypes.string,
  buttonOnClick: PropTypes.string,
}

export default Newbtn
