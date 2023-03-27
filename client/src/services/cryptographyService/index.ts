import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import {
  ICryptography,
  ICryptographyReqBody,
} from "../../types/cryptography.types";

export class CryptographyService {
  constructor(private httpService: HttpService) {}

  public addCryptography(
    body: ICryptographyReqBody,
    token: string
  ): Promise<void | ICryptography> {
    const { user_id, ...otherBody } = body;
    return this.httpService.post(
      `api/cryptography/${user_id}`,
      { ...otherBody },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  public getCryptography(
    id: string,
    token: string
  ): Promise<void | ICryptography[]> {
    return this.httpService.get(`api/cryptography/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const factory = new HttpServiceInstances();
export const cryptographyService = new CryptographyService(
  factory.createAxiosHttpService()
);
