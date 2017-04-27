import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'
import { browserHistory } from 'react-router';

import { fetchCatalogs, fetchProducts } from '../modules/home'

import LogoImage from '../assets/logo.png'
import DuckImage from '../assets/Duck.jpg'
import './Home.scss'

export class Home extends Component {
  static propTypes = {
    catalogs: PropTypes.array,
    fetchCatalogs: PropTypes.func,
    products: PropTypes.array,
    fetchProducts: PropTypes.func,
    params: PropTypes.object,
  }
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.props.fetchCatalogs(this.props.params.id);
    this.props.fetchProducts(this.props.params.id);
  }
  componentWillUpdate(nextPros) {
    if (this.props.params.id !== nextPros.params.id) {
      this.props.fetchCatalogs(nextPros.params.id);
      this.props.fetchProducts(nextPros.params.id);
    }
  }
  productsCounter(catalogID){
    const currentProducts = this.props.catalogs.filter((catalogs)=>{
      return (typeof catalogs._p_parent!=='undefined')&& (catalogs._p_parent.includes(catalogID))
    })
    return currentProducts.length
  }
  goToSubCollection(id) {
    browserHistory.push(`/home/${id}`)
    this.props.fetchCatalogs(id)
  }

  render() {
    return (
      <div>
        <img
          alt='This is a logo!'
          className={this.props.params.id==0? 'logo': 'hidden'}
          src={LogoImage}/>
        <ListGroup componentClass="ul" className="group">
          {
            this.props.catalogs.map((catalog, index) =>
              <ListGroupItem className="group-item" key={index} onClick={() => this.goToSubCollection(catalog._id)}>
                <img className={catalog.isLeaf? 'pull-left order-image':'hidden'} src={DuckImage}/>
                <span className="pull-right"><Glyphicon glyph="chevron-right"></Glyphicon></span>
                <h4>{catalog.name}</h4>
                <p className={catalog.isLeaf? 'hidden':''}>{catalog.count} Models</p>
              </ListGroupItem>
            )
          }
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catalogs: state.home.catalogs,
  products: state.home.products
})

const mapDispatchToProps = {
  fetchCatalogs : (id) => fetchCatalogs(id),
  fetchProducts : (id) => fetchProducts(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
