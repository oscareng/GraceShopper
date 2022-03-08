import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/userInformationReducer";

function UserInformation() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div className="users"></div>
      {/* <React.Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {console.log(users)}
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment> */}
    </div>
  );
}

export default UserInformation;
