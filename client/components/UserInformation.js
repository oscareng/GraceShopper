import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/userInformationReducer";
import useAuth from "../hooks/useAuth";

function UserInformation({ users }) {
  const { user } = useAuth();
  const { isAdmin } = user;

  if (isAdmin) {
    return (
      <div className="users">
        <div>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.isAdmin ? "Administrator" : "User"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <h3>You are not an administrator</h3>;
  }
}

export default UserInformation;
