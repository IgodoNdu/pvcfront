import React, { Component } from 'react'
import axios from "axios";

class Register extends Component {

  constructor(){
    super()
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      votingState: "",
      age: "",
      refferedBy: "",
      phone: "",
      pvcImage: '',
      responseMsg: '',
    }
    //bind the methods below to the component
    this.changeFirstname = this.changeFirstname.bind(this);
    this.changeMiddlename = this.changeMiddlename.bind(this);
    this.changeLastname = this.changeLastname.bind(this);
    this.changeVotingState = this.changeVotingState.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeRefferedBy = this.changeRefferedBy.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changePvcImage = this.changePvcImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFirstname(e) {
    this.setState({ firstName: e.target.value })
  }

  changeMiddlename(e) {
    this.setState({ middleName: e.target.value })
  }

  changeLastname(e) {
    this.setState({ lastName: e.target.value })
  }

  changeVotingState(e) {
    this.setState({ votingState: e.target.value })
  }

  changeAge(e) {
    this.setState({ age: e.target.value })
  }

  changeRefferedBy(e) {
    this.setState({ refferedBy: e.target.value })
  }

  changePhone(e) {
    this.setState({ phone: e.target.value })
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
    formData.append("firstName", this.state.firstName)
    formData.append("middleName", this.state.middleName)
    formData.append("lastName", this.state.lastName)
    formData.append("votingState", this.state.votingState)
    formData.append("refferedBy", this.state.refferedBy)
    formData.append("email", this.state.email)
    formData.append("phone", this.state.phone)
    formData.append("pvcImage", this.state.pvcImage)

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }


    //connect to sever with axios
    axios.post('https://pvcraffle-api.onrender.com/app/entry', formData)
      .then(response => console.log(response.data))

      //afterwards
      this.setState({
        firstName: "",
        middleName: "",
        lastName: "",
        votingState: "",
        age: "",
        refferedBy: "",
        phone: "",
        responseMsg: "Your Response Message on Submission!!"
      })
  }

  render() {
    return (
      <div id='contact'>
        <h1>Register For The Draw</h1>
        <p className='responseMsg'>{this.state.responseMsg}</p>
        <form onSubmit={this.onSubmit} encType="multipart/form-data">

          <input type='text' placeholder="First Name" onChange={this.changeFirstname} value={this.state.firstName} className='form-control form-group' />

          <input type='text' placeholder="Middle Name" onChange={this.changeMiddlename} value={this.state.middleName} className='form-control form-group' />

          <input type='text' placeholder="Last Name" onChange={this.changeLastname} value={this.state.lastName} className='form-control form-group' />

          <input type='text' placeholder="Voting State" onChange={this.changeVotingState} value={this.state.votingState} className='form-control form-group' />

          <input type='text' placeholder="Age" onChange={this.changeAge} value={this.state.age} className='form-control form-group' />

          <input type='text' placeholder="Refferal Code" onChange={this.changeRefferedBy} value={this.state.refferedBy} className='form-control form-group' />

          <input type='text' placeholder="Phone" onChange={this.changePhone} value={this.state.phone} className='form-control form-group' />

          <input type='file' name="pvcImage" filename="pvcImage" onChange={this.changePvcImage} value={this.state.changePvcImage} className='form-control form-group' />

          <input type='submit' className="btn btn-success btn-block" value='REGISTER' />

        </form>
      </div>
    );
  }

  
}

export default Register;
