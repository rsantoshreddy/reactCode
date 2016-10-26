/*Atoms start*/
  var Btn= React.createClass({
    render: function(){
      return (
        <a href={this.props.href} className="btn {'btn--'+this.props.theme}">{this.props.text}</a>
      );
    }
  });  

  var Headline= React.createClass({
    render: function(){
      return (
        <h1 className={this.props.theme ? "Headline--"+this.props.theme : "Headline"}>{this.props.text}</h1>
      );
    }
  });  

  var Para= React.createClass({
    render: function(){
      return (
        <p className="para {'para--'+this.props.theme}">{this.props.text}</p>
      );
    }
  });

  var Likes = React.createClass({
    getInitialState() {
      return {likes:0};
    },
    handleLikeClick: function(){
      this.setState({likes : ++this.state.likes});
    },
    render: function(){
      return (
        <div className="likes">
          <button onClick={this.handleLikeClick}>{this.props.text}</button>
          <span>{this.state.likes}</span>
        </div>
      );
    }
  });
/*Atoms end*/

/*organisms start*/
  var Hero=React.createClass({
    render: function(){
      const { headline, para, primaryCta,config,likes } = this.props;
      console.log(this.props);
      return (
          <section className={config.theme ? "hero hero--"+config.theme : "hero hero--default"} id={config.id}>
              <Headline {...headline}/>
              <Para {...para}/>
              <Btn {...primaryCta}/>
              <Likes {...likes}/>
          </section>
      );
    }
  });

/*organisms end*/


var content={
      "headline": {
        "text": "Page Level Text Change"
      },
      "para": {
        "text": "Nam ullamcorper efficitur mollis. Curabitur tristique semper convallis. Praesent dignissim est quis erat fringilla ultrices. Duis scelerisque semper luctus. Fusce euismod fermentum faucibus."
      },
      "primaryCta": {
        "id": "mediaId",
        "href": "www.google.com",
        "text": "Media Button Text",
        "theme": "mediaButton|Media Button Text",
      },
      "likes" :{
          "text": "Likes",
      },
      "config": {
        "id": "heroId",
        "theme": "blue center-text"
      }
}


ReactDOM.render(
  <Hero  {...content}/>,
  document.getElementById('content')
);
