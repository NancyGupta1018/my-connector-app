import { logger } from '../utils/logger.utils.js';
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_SERVER_ERROR,
  HTTP_STATUS_SUCCESS_ACCEPTED,
} from '../constants/http.status.constants.js';


export const helloworld = async (request, response) => {

  return response.status(HTTP_STATUS_SUCCESS_ACCEPTED).send("HelloWorld");
}