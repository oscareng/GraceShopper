// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "../store/userInformationReducer";

// function UserInformation() {
//   const users = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, []);

//   return (
//     <div className="users">
//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <h3>{user.username}</h3>
//           </div>
//         );
//       })}
//       {/* <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {console.log(users)}
//             {users.map((user) => {
//               return (
//                 <tr key={user.id}>
//                   <td>{user.username}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// }

// export default UserInformation;

import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/userInformationReducer";

class UserInformation extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.props.loadUsers();
  }
  // render() {
  // return (
  // <div>
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>User</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {this.props.users.map((user) => {
  //         return (
  //           <tr key={user.id}>
  //             <td>{user.username}</td>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // </div>
  // );
  // }
}
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
