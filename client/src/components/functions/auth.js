import axios from "axios";

export const register = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/registerr", value);

export const login = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/login", value);

export const currentUser = async (authtoken) => {
  return await axios.post(process.env.REACT_APP_API + "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
}

export const currentAdmin = async (authtoken) => {
  return await axios.post(process.env.REACT_APP_API + "/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
}
