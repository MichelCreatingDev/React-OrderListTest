import React from 'react'
import PropTypes from 'prop-types'
import TopNavbar from '../../containers/topnavbar/Topnavbar'
import BottomNavbar from '../../containers/bottomnavbar/BottomNavbar'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <TopNavbar className = 'fixed-top' routes={ children.props.routes } />
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
