import React from 'react';
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'
import { Component } from 'react'

function Categories(props){
  const categories = props.categories;
  return(
    <div className="Categories">
      <Search />
      {
        categories.map((category) => {
            return <Category
                     handleOpenModal={props.handleOpenModal}
                     key={category.id}
                     {...category}
                   />
        })
      }
    </div>
  )
}

export default Categories
