import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'
import { browserHistory } from 'react-router';

import { fetchCatalogs, fetchProducts } from '../modules/home'
import TopNavbar from '../../../components/TopNavbar'

import LogoImage from '../assets/logo.png'
import DuckImage from '../assets/Duck.jpg'
import './Home.scss'

export class Home extends Component {
  static propTypes = {
    catalogs: PropTypes.array,
    fetchCatalogs: PropTypes.func,
    products: PropTypes.array,
    title: PropTypes.string,
    fetchProducts: PropTypes.func,
    params: PropTypes.object,
  }
  state = {
    leaf: 0
  }
  componentDidMount() {
    this.props.fetchCatalogs(this.props.params.id);
    this.props.fetchProducts(this.props.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id){
      this.props.fetchCatalogs(nextProps.params.id);
      this.props.fetchProducts(nextProps.params.id);

    }
  }
  goToSubCollection(id) {
    browserHistory.push(`/home/${id}`)
    // this.props.fetchCatalogs(id)
  }

  render() {
    return (
      <div>
        <TopNavbar className = 'fixed-top' title={this.props.title} />
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catalogs: state.home.catalogs,
  products: state.home.products,
  title: state.home.title,
})

const mapDispatchToProps = {
  fetchCatalogs : (id) => fetchCatalogs(id),
  fetchProducts : (id) => fetchProducts(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
