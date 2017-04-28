import React, {PropTypes} from 'react'
import { Router, browserHistory } from 'react-router';
import { Navbar, NavbarHeader, Nav, NavItem, Glyphicon } from 'react-bootstrap'
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import './styles.scss';

export default class TopNavbar extends React.Component {
  // static propTypes = {
  //   routes: React.PropTypes.array.isRequired,
  // }
  static propTypes = {
    title: PropTypes.string
  }
  goBack = () => {
    browserHistory.goBack();
  }
  render () {
    return (
      <div className="nav-bar">
        <div className="col-xs-2" onClick={this.goBack}>
          <a className="pull-left"><Glyphicon glyph="chevron-left"></Glyphicon></a>
        </div>
        <div className="text-center col-xs-8">
          <span>{this.props.title}</span>
        </div>
        <div className="col-xs-2">
          <a className="pull-right"><Glyphicon glyph="search"></Glyphicon></a>
        </div>
      </div>
    )
  }
}
