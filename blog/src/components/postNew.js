import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class  PostNew extends Component {
  renderField(field){
    return(
      <div className="form-group is-invalid">
      <label>{field.label}</label>
          <input
          className="form-control"
          type="text"
            {...field.input}
          />
        <div className="text-help">
        {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>

    );
  }
  onSubmit(values){

    this.props.createPost(values,()=>{
      this.props.history.push("/");
    });
    console.log(values);
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field
          label="title"
          name="title"
          component={this.renderField}
          />
      <Field
              label="categories"
              name="categories"
              component={this.renderField}
          />
      <Field
                  label="content"
                  name="content"
                  component={this.renderField}
          />
      <button type="submit" className="btn btn-primary">submit</button>
      <Link to="/" className="btn btn-danger">cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title){
    errors.title ="Enter a title";
  }
  if(!values.categories){
    errors.categories ="Enter a category";
  }
  if(!values.content){
    errors.content ="Enter the content";
  }

  return errors;
}
export default reduxForm({
  validate,
  form: 'PostsNewForm',

})(

connect(null, {createPost} )(PostNew)
  );
