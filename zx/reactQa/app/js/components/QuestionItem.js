var React = require('react');

module.exports = React.createClass({
  voteUp:function(e){
  	console.log(this);
  	var newCount = parseInt(this.props.voteCount, 10) + 1;
  	this.props.onVote( this.props.questionKey, newCount )
  	console.log('Up');
  	console.log(e);
  	console.log('newCount:' + newCount);

  },
  voteDown:function(e){
  	var newCount = parseInt(this.props.voteCount, 10) - 1;
  	this.props.onVote( this.props.questionKey, newCount )
  	console.log('Down');
  	console.log(e);
  	console.log('newCount:' + newCount);
  },
  render: function(){
    return (
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default" onClick={this.voteUp}>
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default" onClick={this.voteDown}>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
})