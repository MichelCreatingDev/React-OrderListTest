import React from 'react'
import PropTypes from 'prop-types'
import BottomNavbar from '../../components/BottomNavbar'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <div className='core-layout__viewport'>
      {children}
    </div>
    <BottomNavbar className='fixed-bottom' routes={children.props.routes}/>
  </div>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
