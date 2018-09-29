import React from 'react';

export default function NewsCard(props) {
  return (
    <div className="card mt-5">
    <img className="card-img-top" src={props.post.urlToImage} alt="Photo"></img>
    <div className="card-body">
      <h5 className="card-title">{props.post.title}</h5>
      <p className="card-text">{props.post.description}</p>
      <a href={props.post.url} class="card-link">Link</a>
    </div>
  </div>)
}
