import React from 'react'
import { Router } from 'react-router';
import CategoryImage from './assets/tab-category.png'
import ClubsImage from './assets/tab-clubs.png'
import MessagesImage from './assets/tab-messages.png'
import SettingsImage from './assets/tab-settings.png'
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import './styles.scss';

export default class TopNavbar extends React.Component {
  // static propTypes = {
  //   routes: React.PropTypes.array.isRequired,
  // }

  render () {
    // const { routes } = this.props;
    // var navitems = routes[0].childRoutes.map(function(route, index){
    //   return(<LinkContainer to={route.path} key={index}>
    //     <NavItem eventKey={index+1}>{route.name}</NavItem>
    //   </LinkContainer>);
    // });

    return (
      <div className="nav-bottom-bar">
        <div className="text-center col-xs-3">
          <a href="#"><img src={CategoryImage} className="img-responsive tab-img"></img></a>
        </div>
        <div className="text-center col-xs-3">
          <a href="#"><img src={ClubsImage} className="img-responsive tab-img"></img></a>
        </div>
        <div className="pull-left col-xs-3">
          <a href="#"><img src={MessagesImage} className="img-responsive tab-img"></img></a>
        </div>
        <div className="pull-left col-xs-3">
          <a href="#"><img src={SettingsImage} className="img-responsive tab-img"></img></a>
        </div>
      </div>
    )
  }
}
