import { AxiosError } from "axios";
import { IErrorData, IHttpClient, IHttpConfig, IResponse } from "../types";
import { ErrorMessage } from "../constants";

export class HttpService implements IHttpClient {
  constructor(
    private fetchingService: IHttpClient,
    private baseUrl = process.env.REACT_APP_BASE_URL
  ) {}

  private getFullUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  public async get<R>(url: string, config?: IHttpConfig) {
    return this.fetchingService
      .get<IResponse<R>>(this.getFullUrl(url), config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.handleError);
  }

  public async post<R, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .post<IResponse<R>, D>(this.getFullUrl(url), data, config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.handleError);
  }

  public async put<R, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .put<IResponse<R>, D>(this.getFullUrl(url), data, config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.handleError);
  }

  public async patch<R, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .patch<IResponse<R>, D>(this.getFullUrl(url), data, config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.handleError);
  }

  public async delete<R>(url: string, config?: IHttpConfig) {
    return this.fetchingService
      .delete<IResponse<R>>(this.getFullUrl(url), config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: AxiosError<IErrorData>) {
    const errorResponse = error.response;

    const errorData: IErrorData = {
      statusCode: errorResponse?.data.statusCode || 404,
      message: errorResponse?.data.message || ErrorMessage.DEFAULT,
    };

    throw new Error(JSON.stringify(errorData));
  }

  private checkResponseStatus<R>(result: IResponse<R>) {
    if (result.status >= 400 && result.status < 600) {
      const errorData = {
        response: {
          status: result.status,
          data: result.data,
        },
      };

      throw new Error(JSON.stringify(errorData));
    }
  }
}
