import React from 'react'
import fullAgreement from './fullAgreement'

function Disclaimer(props) {
  return props.trigger ? (
    <div className="Disclaimer">
      <div className="popup-inner">
        <h1>User Agreement</h1>
        <textarea className="full-agreement" defaultValue={fullAgreement}></textarea>
        <button className="agree-btn" onClick={() => props.setTrigger(false)}>
          Agree
        </button>
        {props.children}
      </div>
    </div>
  ) : null
}

export default Disclaimer
