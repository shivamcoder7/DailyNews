import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import axios from 'axios';

export class News extends Component {
    
    constructor(){
        super();
        console.log("I am a Constructor");
        this.state={
            articles: [],
            loading: false,
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=f3195c08c69e4d43bb33306788754c4b";
        const response= await axios.get(url);
        // console.log(response.data.articles);
        const data= response.data.articles;
        this.setState({articles: data});
    }
  render() {
    console.log("render");
    return (
      <div className='container'>
      <h1 className='my-3'>Good News- Top News Headlines</h1>
      <div className='row my-3'>
      {this.state.articles.map((element)=> {
        {/* console.log(element.urlToImage); */}
        return (<div className='col-4 my-3' key={element.url}>
                    <NewsItem title={element.title} content={element.description} imageUrl={element.urlToImage} url={element.url}/>
                </div>)
        })}
      </div>
      </div>
    )
  }
}

export default News