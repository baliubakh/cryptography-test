import axios from "axios";
import { HttpService } from "./http.service";

export class HttpServiceInstances {
  createAxiosHttpService(): HttpService {
    return new HttpService(axios);
  }
}
