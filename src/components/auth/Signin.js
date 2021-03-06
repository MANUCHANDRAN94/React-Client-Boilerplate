import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions';

class Signin extends Component {
    onSubmit= (formProps)=>{ //formProps are the values passed from form
        this.props.signin(formProps , ()=>{
            this.props.history.push('/feature');
        });
    };
  render() {
      const { handleSubmit } = this.props;  //method passed as props by redux-forms-destructured
    return (
        //when we click submit to call the onSubmit method outside form we pass through the handleSubmit
      <form onSubmit={handleSubmit(this.onSubmit)}> 
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state){
    return {errorMessage:state.auth.errorMessage}
}

export default compose(
    connect(mapStateToProps , actions),
    reduxForm({ form: "signin" })
) (Signin);
//a helper component is used to connect reduxform with connect 
// compose help us to do that