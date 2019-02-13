import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = ({ post, comments, increment }) => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${post.code}`}>
        <img
          src={post.display_src}
          alt={post.caption}
          className="grid-photo"
        />
      </Link>
      <CSSTransitionGroup
        transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <span key={post.likes} className="likes-heart">
          {post.likes}
        </span>
      </CSSTransitionGroup>
    </div>

    <figcaption>
      <p>{post.caption}</p>
      <div className="control-buttons">
        <button onClick={() => increment(post.id)} className="likes">
          &hearts; {post.likes}
        </button>
        <Link className="button" to={`/view/${post.code}`}>
          <span className="speech-bubble">
            <i className="fa fa-comments fa-lg" /> {comments.length}
          </span>
        </Link>
      </div>
    </figcaption>
  </figure>
);

Photo.propTypes = {
  post: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    display_src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  increment: PropTypes.func.isRequired,
};

export default Photo;
