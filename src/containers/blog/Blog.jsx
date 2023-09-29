import React from 'react';
import { Article } from '../../components';
import './blog.css'
import { blog01,blog02,blog03,blog04,blog05 } from './imports';
const Blog = () => {
  
    return (
      <div className="gpt3__blog section__padding">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">A lot is happening We a bloging about it</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Nov 29, 2022" title="This is the title"/>
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Nov 29, 2022" title="This is the title"/>
            <Article imgUrl={blog03}  date="Nov 29, 2022" title="This is the title"/>
            <Article imgUrl={blog04} date="Nov 29, 2022" title="This is the title"/>
            <Article imgUrl={blog05} date="Nov 29, 2022" title="This is the title"/>
          </div>
        </div>

      </div>
    )
  }

export default Blog