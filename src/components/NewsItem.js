import React, { Component } from 'react'
import newsImg from './img.jpg'
export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,source,author,time} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
        </span>
            <img src={imgUrl?imgUrl:newsImg} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    {time && <h6 className='card-text'>Time :<p>{time}</p></h6>}
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unkown"} on {new Date(time).toUTCString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}
