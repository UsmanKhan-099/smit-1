
import "../App.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {Link, NavLink} from "react-router";
import Navbar from "../components/Navbar";

 function Login() {
  return (<> 
    <Navbar />

    <div className="flex justify-center items-center min-h-screen px-4">
    <fieldset id="fs" className="p-11 border-2 border-amber-500 rounded-2xl w-full max-w-md">
      <legend htmlFor="ds"><span className="text-3xl font-bold mx-4">Login</span></legend> 
      
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2">Email</Label>
        </div>
        <TextInput id="email2" type="email" placeholder="Enter Your Email" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2">Password</Label>
        </div>
        <TextInput id="password2" type="password"  placeholder="Enter Your Password" required shadow />
      </div>
  
      <NavLink to ="/products" className="border-amber-50 border-2 rounded p-4 text-center bg-blue-600">Login</NavLink>
    </form>
    </fieldset>
    </div>
    </>

  );
}

export default Login