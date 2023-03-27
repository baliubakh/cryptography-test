import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import { ICryptography } from "../../types/cryptographyTypes";

export class ProjectsService {
  constructor(private httpService: HttpService) {}
  public getCryptography(token: string): Promise<void | ICryptography[]> {
    return this.httpService.get("api/projects/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public getCryptographytById(
    token: string,
    id: string
  ): Promise<void | { cryptography: ICryptography }> {
    return this.httpService.get(`api/projects/details/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const factory = new HttpServiceInstances();
export const projectService = new ProjectsService(
  factory.createAxiosHttpService()
);
