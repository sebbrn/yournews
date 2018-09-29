import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewsCard from './NewsCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
    this.loadNews = this.loadNews.bind(this);
    this.loadNews();
  }

  loadNews() {
    fetch('https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=fe0c5b3aa3864125b9ef31e528b8b2e4').then(res => res.json()).then((result) => {
      this.setState({news: result.articles});
    }).catch(e => {
      console.log({errorInfo: 'Api Error', error: e});
    })
  }

  render() {
    return (<div className="container">
      {this.state.news.map(post =>
      <NewsCard post={post}></NewsCard>)}
    </div>
    );
  }
}

export default App;
