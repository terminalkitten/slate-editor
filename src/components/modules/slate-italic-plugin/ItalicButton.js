import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { italicMarkStrategy, hasMark } from './ItalicUtils'
import './ItalicButton.css'


const ItalicButton = ({ state, onChange, className }) => (
  <button
    className={classnames('slate-italic-plugin--button', className)}
    onClick={e => {
      e.preventDefault()
      onChange(italicMarkStrategy(state))
    }}
    data-active={hasMark(state)}
  >
    <FontAwesome name="italic" />
  </button>
)

export default ItalicButton
