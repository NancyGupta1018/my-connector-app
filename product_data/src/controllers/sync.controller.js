import { HTTP_STATUS_SUCCESS_ACCEPTED } from '../constants/http.status.constants.js';


export const createHello = async (request, response) => {

  return response.status(HTTP_STATUS_SUCCESS_ACCEPTED).send("HelloWorld");
}