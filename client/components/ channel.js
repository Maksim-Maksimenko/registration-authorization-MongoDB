import React from 'react'

import './channelStyle.scss'

const Сhannel = () => {
  return (
    <div>
      <aside className="container-channel">
        <div className="add-channel">
          <div className="add-channel-btn">
            <h1>Add Channel</h1>
            <button className="button-add-chnnel" type="button">
              +
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}

Сhannel.propTypes = {}

export default React.memo(Сhannel)
