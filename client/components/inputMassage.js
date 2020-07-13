import React from 'react'

import './inputMassage.scss'

const Massage = () => {
  return (
    <div>
      <div className="container-message">
        {/* <input type="text" name="username" placeholder="Text"/> */}
      </div>
    </div>
  )
}

Massage.propTypes = {}

export default React.memo(Massage)
