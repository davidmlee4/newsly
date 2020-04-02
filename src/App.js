import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    articleView: true,
    light: true
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
    })
  }

  renderList = () => {
    return this.state.articles.map(article => {
      return <ArticleItem
              title={article.title}
              />
    })
  }

  articleViewButton = () => {
    this.setState({
      articleView: !this.state.articleView
    })
  }


  lightDark = () => {
    this.setState({
      light: !this.state.light
    })
  }


  render(){
    return (
      <div className={this.state.light ? "light" : "dark"}>
        <button onClick={this.lightDark}>Switch to {this.state.light ? "Dark" : "Light"} Mode</button>
        <button onClick={this.articleViewButton}>Switch to {this.state.articleView ? "List" : "Card"} View</button>
        <div className="cards">
          {this.state.articleView ? this.renderArticles() : this.renderList()}
        </div>
      </div>
    );
  }
}

export default App;
