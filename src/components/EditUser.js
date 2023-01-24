import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Label, Input, Select } from "@rebass/forms";
import { useSelector } from "react-redux";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.userReducer);
  
  useEffect(() => {  
    getUserById();
    // eslint-disable-next-line
  }, []);

  const getUserById = async () => {
    setName(user.name);
    setEmail(user.email);
    setGender(user.gender);

    // alternative method
    // const response = await axios.get(`http://localhost:3001/api/user/${id}`);
    // setName(response.data.user.name);
    // setEmail(response.data.user.email);
    // setGender(response.data.user.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/api/user/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
