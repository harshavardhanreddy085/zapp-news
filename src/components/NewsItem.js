import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,discription,imgUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" >
            <img className="card-img-top" style={{width: '286px',height: '180px'}}src={imgUrl?imgUrl:"https://agreatdream.com/wp-content/uploads/2012/04/question-mark-768x840.jpg"} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{discription}....</p>
                    <a href={newsUrl} target="/blank"  className="btn btm-sm btn-link">read more</a>
                </div>
            </div>
      </div>
    )
  }
}
