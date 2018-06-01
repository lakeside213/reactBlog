import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {fetchDetail} from '../actions';
import {deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostDetail extends Component {
  componentDidMount(){
    const id = this.props.match.params.id;
    console.log(id);
    this.props.fetchDetail(id);
  }
  onDeleteClick(){
    const id = this.props.match.params.id;

    this.props.deletePost(id,()=>{
      this.props.history.push("/");
    });
  }
  render(){
    const {post} = this.props;
    if (!post) {
      return <div>Loading</div>;

    }
    return (
      <div>
         <Link to="/">Back to Home</Link>
         <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
          />
         <h3>{post.title}</h3>
         <h6>categories: {post.categories}</h6>
         <p>{post.content}</p>
      </div>
    );
  };
}

function mapStateToProps({posts},ownProps){
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchDetail,deletePost})(PostDetail);
