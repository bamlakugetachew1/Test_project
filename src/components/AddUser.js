import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addCounter } from "../actions";
import { bindActionCreators } from "redux";
import { Label, Input, Select } from "@rebass/forms";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/users", {
        name,
        email,
        gender,
      });
      dispatch(addCounter());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <Label htmlFor="name">Email</Label>
          <Input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={gender}
            name="Gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
           </Select>
            <div className="field">
             <br></br>
             <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) };
}
export default connect(mapDispatchToProps)(AddUser);
