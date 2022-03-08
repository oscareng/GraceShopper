import axios from "axios";

// Action types
const GOT_USERS = "GOT_USERS";

// Action creators
export const gotUsers = (users) => ({
  type: GOT_USERS,
  users,
});

// THUNK CREATORS go here:
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

const initialState = [];

export default function userInformationReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_USERS:
      return action.users;
    default:
      return state;
  }
}
