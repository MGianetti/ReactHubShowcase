import endpoints from "../config/endpoints";
import requestService from "./requestService";

const getRepositories = async (username) => {
  const url = endpoints.default.user.repos.replace("{USER-NAME}", username);
  const response = await requestService.get(`${url}`);
  return response.data;
};

const reposService = { getRepositories };

export default reposService;
