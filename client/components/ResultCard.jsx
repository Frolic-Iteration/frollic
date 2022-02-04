import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ResultCard = (props) => {

  return (
    <article>
      <div className="business">
        <img className="businessImg" src={props.image}></img>
        <div className="businessDetails">
          <p data-testid="distance-element" className="distance">{props.distance}</p>
          <p> <a className="name" href={props.url}>{props.name}</a></p>
          <p><span data-testid="price-element" className="price">{props.price}</span><span>&#8226;</span><span data-testid="rating-element" className="rating">Rating: {props.rating}</span></p>
          <p data-testid="address-element" className="Address">{props.address}</p>
          <p data-testid="phone-element" className="phone">{props.phone}</p>
          <button className="add-comment">Show Comments</button>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="addFav" aria-label="Add to favorites" onClick={() => props.addFav(props.result)}>Favorite</button>
        <button className="comment" aria-label="Add comment" onClick={props.addComment}>Comment</button>
        <CopyToClipboard text={props.url}>
          <button data-testid="buttonCopy" className="share" aria-label="Share link" onClick={(e) => { e.target.innerText = 'Copied!'; setTimeout(() => { e.target.innerText = 'Share' }, 1000) }}>Share</button>
        </CopyToClipboard>
      </div>
    </article>
  );
}

export default ResultCard;