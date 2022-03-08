import axios from "axios";

const initialState = [];

const GET_USERS = "GET_USERS";

export const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get("/api/users");
      dispatch(getUsers(users));
    } catch (error) {
      console.log("fetchUsers thunk error", error);
    }
  };
};

export default function userInformationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
