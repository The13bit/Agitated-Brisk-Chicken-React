import React from 'react'

import PropTypes from 'prop-types'

import './newbtn.css'

const Newbtn = (props) => {
  return (
    <div className={`newbtn-container ${props.rootClassName} `}>
      <button type={props.buttonType} className="newbtn-button button">
        {props.button1}
      </button>
    </div>
  )
}

Newbtn.defaultProps = {
  rootClassName: '',
  buttonOnClick: '',
  buttonType: 'button',
  buttonOnClick1: 'new Function(props.onClick)',
  button1: 'About',
}

Newbtn.propTypes = {
  rootClassName: PropTypes.string,
  buttonOnClick: PropTypes.string,
  buttonType: PropTypes.string,
  buttonOnClick1: PropTypes.string,
  button1: PropTypes.string,
}

export default Newbtn
