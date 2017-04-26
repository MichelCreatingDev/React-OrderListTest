import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'

import { fetchCatalogs, fetchProducts } from '../modules/home'

import LogoImage from '../assets/logo.png'
import './Home.scss'

export class Home extends Component {
  static propTypes = {
    catalogs: PropTypes.array,
    fetchCatalogs: PropTypes.func,
  }

  state = {
    leaf: 0
  }

  componentDidMount() {
    this.props.fetchCatalogs();
  }

  componentWillReceiveProps(nextProps) {
    console.log('home nextprops', nextProps);
    if (this.props.catalogs !== nextProps.catalogs) {
      this.setState({
        leaf: 1
      });
    }
  }

  render() {


    return (
      <div>
      {this.state.leaf}
        <img
          alt='This is a duck, because Redux!'
          className='logo'
          src={LogoImage} />
        <ListGroup componentClass="ul" className="group">

          <ListGroupItem className="group-item">
            <span className="pull-right"><Glyphicon glyph="chevron-right"></Glyphicon></span>
            <h4>19THIRTY</h4>
            <p>54 Models</p>

          </ListGroupItem>
          <ListGroupItem className="group-item">
            <span className="pull-right"><Glyphicon glyph="chevron-right"></Glyphicon></span>
            <h4>19THIRTY</h4>
            <p>54 Models</p>

          </ListGroupItem>
          <ListGroupItem className="group-item">
            <span className="pull-right"><Glyphicon glyph="chevron-right"></Glyphicon></span>
            <h4>19THIRTY</h4>
            <p>54 Models</p>

          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catalogs: state.home.catalogs
})

const mapDispatchToProps = {
  fetchCatalogs : () => fetchCatalogs(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
