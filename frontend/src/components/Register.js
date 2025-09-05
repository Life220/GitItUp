import React from "react";
import { Navigate } from "react-router-dom";
import { getProfile, register } from "../../../backend/api";

class Register extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      username: "",
      password: "",
      bio: "",
      email: "",
      image: null,
      autherized: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegister = async (event) => {
    event.preventDefault();
    const { username, password, image, bio, email } = this.state;

    // Validate required fields
    if (!username || !password || !email)
    {
      alert("Please fill in all required fields.");
      return;
    }

    // const response = await getProfile(username);

    // if (response.data == "User not found")
    // {
    //   console.log(response.error);
    //   const registered = await register(username, password, image, bio, email);
    //   if (registered)
    //   {
        alert("Registered succesfully, welcome " + username);
        localStorage.setItem("username", username);
        this.setState({ autherized: true });
    //   }
    //   else
    //   {
    //     alert("An error occured when registering")
    //   }
    // }
    // else
    // {
      // console.log(response);
      // alert("Username already in use");
    // }
  };

  render()
  {
    const { username, password, bio, email, autherized } = this.state;

    return (
      autherized ?
      (
        <Navigate to="/main" />
      )
      :
      (
        <form className="flex flex-col w-52 align-center gap-1">
          <p>Profile Picture (optional)</p>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={this.handleImageChange}
            />
          <h3>Email</h3>
          <input className="text-black" type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="john.wick@recordshare.com" required></input>
          <h3>Username</h3>
          <input className="text-black" type="text" name="username" value={username} onChange={this.handleInputChange} placeholder="John1234" required></input>
          <p>Password</p>
          <input className="text-black" type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="********" required></input>
          <p>Bio</p>
          <textarea className="text-black" type="text" name="bio" value={bio} onChange={this.handleInputChange} placeholder="Boogie man"></textarea>
          <button className="mt-2" onClick={this.handleRegister} type="submit">Register</button>
        </form>
      )
    );
  }
}

export default Register;
