const jwt = require('jsonwebtoken');
const salt = process.env.REACT_APP_PORTALSI_SALT

export const encodeData = async (data) => {
  try {
    const result = await jwt.sign(JSON.stringify(data), salt);
    return result
  } catch (error) {
    console.error(error);
  };
};

export const decodeData = async (data) => {
  try {
    const result = await jwt.verify(data, salt);
    return result
  } catch (error) {
    console.error(error);
  };
};