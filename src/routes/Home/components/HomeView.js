import React from 'react'
import {ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap'
import LogoImage from '../assets/logo.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
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

export default HomeView
