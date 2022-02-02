import endpoints from "../config/endpoints";
import requestService from "./requestService";

const getDetails = async (username) => {
  const url = endpoints.default.user.info.replace("{USER-NAME}", username);
  const response = await requestService.get(`${url}`);
  return response.data;
};

const userServices = { getDetails };

export default userServices;
