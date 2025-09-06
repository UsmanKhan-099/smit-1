import "../App.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, NavLink } from "react-router";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
    <fieldset
      id="ds"
      className="p-11 border-2 border-amber-500 rounded-2xl w-full max-w-md"
    >
      <legend for="ds">
        <span className="text-3xl font-bold mx-4">Register</span>
      </legend>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2">Username</Label>
          </div>
          <TextInput
            id="email2"
            type="text"
            placeholder="Enter Your Name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2">Email</Label>
          </div>
          <TextInput id="password2" type="email" placeholder="Enter Your Email" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password">Password</Label>
          </div>
          <TextInput id="repeat-password" type="password" required shadow placeholder="Enter Your Password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <NavLink
          to="/products"
          type="submit"
          className="border-amber-50 border-2 rounded p-4 text-center bg-blue-600"
        >
          Register
        </NavLink>
      </form>
    </fieldset>
    </div>
  );
}

export default Register;
