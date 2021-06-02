import {Injectable} from "@angular/core";
import {ISuperHero} from "../../shared/model/super-hero.model";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {createRequestOption, IPaginationRequest} from "../../shared/utils/request-util";

type EntityResponseType = HttpResponse<ISuperHero>;
type EntityArrayResponseType = HttpResponse<ISuperHero[]>;

@Injectable({providedIn: 'root'})
export class SuperHeroService {

  static BASE_URL = `${environment.baseUrlApi}/characters`;

  constructor(protected http: HttpClient) {
  }

  create(superHero: ISuperHero): Observable<EntityResponseType> {
    return this.http.post<ISuperHero>(SuperHeroService.BASE_URL, superHero, {observe: 'response'});
  }

  update(branch: ISuperHero): Observable<EntityResponseType> {
    return this.http.put<ISuperHero>(`${SuperHeroService.BASE_URL}/${branch.id}`, branch, {observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISuperHero>(`${SuperHeroService.BASE_URL}/${id}`, {observe: 'response'});
  }

  query(req?: IPaginationRequest): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISuperHero[]>(SuperHeroService.BASE_URL, {params: options, observe: 'response'});
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${SuperHeroService.BASE_URL}/${id}`, {observe: 'response'});
  }
}
