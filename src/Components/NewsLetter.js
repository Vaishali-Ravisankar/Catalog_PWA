import React, { Suspense } from "react";
import "../Styles/css/bootstrap.min.css";
import "../Styles/css/components.scss";
import "../Styles/css/style.scss";

class NewsLetter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }
handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   
    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }



    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
render(){
return(
  
<div className="news_letter">
<h1>Subscribe for Our Newsletter</h1>
<p>We won't send any kind of spam</p>
<form name="contactform" onSubmit= {this.contactSubmit.bind(this)}>
     <input refs="email" type="text" size="30" placeholder="Email address" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
     <span className="error">{this.state.errors["email"]}</span>
        <button className="" id="submit" value="Submit">Get Started</button>
    </form>
</div>

)
}
};

export default NewsLetter;
