
  import axios from "axios";
  
  // Login
  export const login = (email, password) => async () => {
    try {
   
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/user/login`,
        { email, password },
        config
      );
  
    } catch (error) {
    }
  };
  
  // Register
  export const register = (userData) => async (dispatch) => {
    try {
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`/api/user/register`, userData, config);
  
    } catch (error) {
      dispatch({
        // type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
//   // Load User
//   export const loadUser = () => async (dispatch) => {
//     try {
//       dispatch({ type: LOAD_USER_REQUEST });
  
//       const { data } = await axios.get(`/api/v1/me`);
  
//       dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
//     } catch (error) {
//       dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
//     }
//   };
  
//   // Logout User
//   export const logout = () => async (dispatch) => {
//     try {
//       await axios.get(`/api/user/logout`);
  
//       dispatch({ type: LOGOUT_SUCCESS });
//     } catch (error) {
//       dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
//     }
//   };
  
//   // Update Consumption
//   export const updateProfile = (userData) => async (dispatch) => {
//     try {
//       dispatch({ type: UPDATE_PROFILE_REQUEST });
  
//       const config = { headers: { "Content-Type": "multipart/form-data" } };
  
//       const { data } = await axios.put(`/api/user/updateConsumed`, userData, config);
  
//       dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
//     } catch (error) {
//       dispatch({
//         type: UPDATE_PROFILE_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };
  
 
  
//   // get All Users
  export const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`/api/user/getallUsers`);
        
      console.log(data);
     return data;
     
    } catch (error) {
        console.log(error);
    }
  };
  
// //   // get  User Details
// //   export const getUserDetails = (id) => async (dispatch) => {
// //     try {
// //       dispatch({ type: USER_DETAILS_REQUEST });
// //       const { data } = await axios.get(`/api/v1/user/${id}`);
  
// //       dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
// //     } catch (error) {
// //       dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
// //     }
// //   };
  
//   // Update User
//   export const updateUser = (id, userData) => async (dispatch) => {
//     try {
//       dispatch({ type: UPDATE_USER_REQUEST });
  
//       const config = { headers: { "Content-Type": "application/json" } };
  
//       const { data } = await axios.put(
//         `/api/v1/admin/user/${id}`,
//         userData,
//         config
//       );
  
//       dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
//     } catch (error) {
//       dispatch({
//         type: UPDATE_USER_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

  
//   // Clearing Errors
//   export const clearErrors = () => async (dispatch) => {
//     dispatch({ type: CLEAR_ERRORS });
//   };