import axios from "axios";
const initialState = [];

const GOT_USERS = "GOT_USERS";

export const gotUsers = (users) => ({
  type: GOT_USERS,
  users,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get("/api/users");
      dispatch(gotUsers(users));
    } catch (error) {
      console.log("fetchUsers thunk error", error);
    }
  };
};

export default function userInformationReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_USERS:
      return action.users;
    default:
      return state;
  }
}
