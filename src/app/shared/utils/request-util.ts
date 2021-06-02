import {HttpParams} from '@angular/common/http';

export interface IPaginationRequest {
  name_like?: string;
  _page: string;
  _limit: string;
}

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      options = options.set(key, req[key]);
    });
  }

  return options;
};
