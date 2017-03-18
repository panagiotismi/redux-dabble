import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ post, comments, index }) => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${post.code}`}>
        {post.caption}
      </Link>
    </div>
  </figure>
);

Photo.propTypes = {
  post: React.PropTypes.shape({
    caption: React.PropTypes.string.isRequired,
    code: React.PropTypes.string.isRequired,
    display_src: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    likes: React.PropTypes.number.isRequired,
  }).isRequired,
  comments: React.PropTypes.objectOf(
    React.PropTypes.array.isRequired
  ).isRequired,
  index: React.PropTypes.number.isRequired,
};

export default Photo;
