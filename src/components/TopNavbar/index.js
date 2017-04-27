import React, {PropTypes} from 'react'
import { Router, browserHistory } from 'react-router';
import { Navbar, NavbarHeader, Nav, NavItem, Glyphicon } from 'react-bootstrap'
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import './styles.scss';

export default class TopNavbar extends React.Component {
  // static propTypes = {
  //   routes: React.PropTypes.array.isRequired,
  // }

  goBack = () => {
    browserHistory.goBack();
  }
  render () {
    // const { routes } = this.props;
    // var navitems = routes[0].childRoutes.map(function(route, index){
    //   return(<LinkContainer to={route.path} key={index}>
    //     <NavItem eventKey={index+1}>{route.name}</NavItem>
    //   </LinkContainer>);
    // });
    return (
      <div className="nav-bar">
        <div className="col-xs-2" onClick={this.goBack}>
          <a className="pull-left"><Glyphicon glyph="chevron-left"></Glyphicon></a>
        </div>
        <div className="text-center col-xs-8">
          <span>COLLECTIONS</span>
        </div>
        <div className="col-xs-2">
          <a className="pull-right"><Glyphicon glyph="search"></Glyphicon></a>
        </div>
      </div>
    )
  }
}
