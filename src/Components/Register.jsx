import React, { Component } from 'react'
import axios from "axios";

class Register extends Component {

  constructor(){
    super()
    this.state = {
      fullname: "",
      votingState: "",
      age: "",
      email: "",
      phone: "",
      recipientEmail: "",
      pvcImage: '',
      responseMsg: '',
    }
    //bind the methods below to the component
    this.changeFullname = this.changeFullname.bind(this);
    this.changeVotingState = this.changeVotingState.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeRecipientEmail = this.changeRecipientEmail.bind(this);
    this.changePvcImage = this.changePvcImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullname(e) {
    this.setState({ fullname: e.target.value })
  }

  changeVotingState(e) {
    this.setState({ votingState: e.target.value })
  }

  changeAge(e) {
    this.setState({ age: e.target.value })
  }

  changeEmail(e) {
    this.setState({ email: e.target.value })
  }

  changePhone(e) {
    this.setState({ phone: e.target.value })
  }

  changeRecipientEmail(e) {
    this.setState({ recipientEmail: e.target.value })
  }

  changePvcImage(e) {
    this.setState({ pvcImage: e.target.files[0] })
  }

  //onSubmitting the form
  onSubmit(e){
    e.preventDefault();

    // const registered = {
    //   fullname: this.state.fullname,
    //   votingState: this.state.votingState,
    //   age: this.state.age,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   recipientEmail: this.state.recipientEmail,
    //   pvcImage: this.state.pvcImage
    // }

    const formData = new FormData();
    formData.append("fullname", this.state.fullname)
    formData.append("votingState", this.state.votingState)
    formData.append("age", this.state.age)
    formData.append("email", this.state.email)
    formData.append("phone", this.state.phone)
    formData.append("recipientEmail", this.state.recipientEmail)
    formData.append("pvcImage", this.state.pvcImage)

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }


    //connect to sever with axios
    axios.post('https://pvcraffle-api.onrender.com/app/entry', formData)
      .then(response => console.log(response.data))

      //afterwards
      this.setState({
        fullname: "",
        votingState: "",
        age: "",
        email: "",
        phone: "",
        recipientEmail: "",
        responseMsg: "Your Response Message on Submission!!"
      })
  }

  render() {
    return (
      <div id='contact'>
        <h1>Register For The Draw</h1>
        <p className='responseMsg'>{this.state.responseMsg}</p>
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <input type='text' placeholder="Full Name" onChange={this.changeFullname} value={this.state.fullname} className='form-control form-group' />

          <input type='text' placeholder="Voting State" onChange={this.changeVotingState} value={this.state.votingState} className='form-control form-group' />

          <input type='text' placeholder="Age" onChange={this.changeAge} value={this.state.age} className='form-control form-group' />

          <input type='text' placeholder="Email" onChange={this.changeEmail} value={this.state.email} className='form-control form-group' />

          <input type='text' placeholder="Phone" onChange={this.changePhone} value={this.state.phone} className='form-control form-group' />

          <input type='text' placeholder="Ticketing Email" onChange={this.changeRecipientEmail} value={this.state.recipientEmail} className='form-control form-group' />

          <input type='file' name="pvcImage" filename="pvcImage" onChange={this.changePvcImage} value={this.state.changePvcImage} className='form-control form-group' />

          <input type='submit' className="btn btn-success btn-block" value='REGISTER' />

        </form>
      </div>
    );
  }

  
}

export default Register;
