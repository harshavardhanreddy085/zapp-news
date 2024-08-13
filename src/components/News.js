import React, { Component} from 'react'
import NewsItem from './NewsItem'
import Load from './Load';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    this.state ={
      article :[],
      loadi: false,
      page:1,
    }
  }
  preclick=async ()=>{
    this.setState({
      loadi: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75c4f453c70e42a09fb876730416fe5d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let preData = await data.json(); 
    console.log(preData);
    this.setState({
      article: preData.articles,
      page: this.state.page-1,
      loadi: false
    });
  }
   nextclick=async()=>{
    this.setState({
      loadi: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75c4f453c70e42a09fb876730416fe5d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let preData = await data.json(); 
    this.setState({
      article: preData.articles,
      page: this.state.page+1,
      loadi: false
    });
  }
async componentDidMount(){
  this.setState({
    loadi: true
  })
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75c4f453c70e42a09fb876730416fe5d&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let preData = await data.json(); 
  console.log(preData);
  this.setState({
    article: preData.articles,
    totalR: preData.totalResults,
    loadi: false
  });
}
  render() {
    return (
      <div className='container'>
        <h2>Top Newslines - ZappNews</h2>
        {this.state.loadi && <Load/>}
        <div className="row my-3">
          {!this.state.loadi && this.state.article.map((element) => {
           return <div className='col-md-3 my-1 ' key = {element.url} ><NewsItem title = {!element.title?"":element.title.slice(0,45)} discription = {!element.description?"":element.description.slice(0,88)} imgUrl = {element.urlToImage} newsUrl = {element.url}/></div>
          })}
        </div>
        <div className="container d-flex my-3 justify-content-between">
          <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.preclick} >&larr; Previous</button>
          <button type="button" disabled = {this.state.page+1 > Math.ceil(this.state.totalR/this.props.pageSize)} className="btn btn-dark" onClick={this.nextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
