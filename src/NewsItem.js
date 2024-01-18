import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, content,imageUrl}= this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://www.iskcon.org/img/2015/01/iskcon-drama-300x212.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href={this.props.url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
  }
}

export default NewsItem;
