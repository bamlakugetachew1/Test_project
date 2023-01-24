import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeCounter,passUser } from "../actions";
import { bindActionCreators } from "redux";
import { Button, Text } from "rebass";
import { css } from "@emotion/react";
const UserList = () => {
  const color = "white";
  const userscount = useSelector((state) => state.counterReducer);
  const [users, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/api/users");
    setUser(response.data.users);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/user/${id}`);
      dispatch(removeCounter());
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add">
          <Button as="a" color="white" bg="green" mr={3}>
            Add New
          </Button>{" "}
        </Link>
        <br></br>
        <Text fontSize={[1, 2, 3]} fontWeight="bold" color="primary">
          TOTAL USERS ADDED
        </Text>
        <Text fontSize={[1, 2, 2]} fontWeight="bold" color="primary">
          {userscount}
        </Text>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, count) => (
              <tr key={user._id}>
                <td css={css`font-size: 20px; &:hover {color: ${color};}`}>{count + 1}</td>
                <td css={css`font-size: 20px; &:hover {color: ${color};}`}>{user.name}</td>
                <td css={css`font-size: 20px; &:hover {color: ${color};}`}>{user.email}</td>
                <td css={css`font-size: 20px; &:hover {color: ${color};}`}>{user.gender}</td>
                <td>
                  <Link to={`edit/${user._id}`}>
                    <Button
                     onClick={() =>dispatch(passUser(user))}
                     as="a" 
                     color="white" 
                     bg="green" 
                     mr={2}>
                      Edit
                    </Button>{" "}
                  </Link>
                  <Button
                    onClick={() => deleteUser(user._id)}
                    as="a"
                    color="white"
                    bg="red"
                    mr={2}
                    mt={2}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(removeCounter, dispatch) };
}
export default connect(mapDispatchToProps)(UserList);
