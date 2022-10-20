import React from 'react'

import PropTypes from 'prop-types'

import './blog-card1.css'

const BlogCard1 = (props) => {
  return (
    <div className="blog-card1-event-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card1-image"
      />
      <div className="blog-card1-vertical-line"></div>
      <div className="blog-card1-container">
        <span className="blog-card1-title">{props.new_prop}</span>
        <span className="blog-card1-text">{props.text}</span>
      </div>
    </div>
  )
}

BlogCard1.defaultProps = {
  new_prop: 'Inbound Marketing Secrets',
  image_alt: 'image',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=500',
}

BlogCard1.propTypes = {
  new_prop: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogCard1
