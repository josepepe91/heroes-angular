import {IPaginationRequest} from "../../shared/utils/request-util";
import {ISuperHero} from "../../shared/model/super-hero.model";
import {Injectable} from "@angular/core";
import {SuperHeroService} from "./super-hero.service";

@Injectable({providedIn: 'root'})
export class SuperHeroFactory {
  constructor(private superHeroService: SuperHeroService) {
  }

  getPage(page = 0, pageSize = 5, nameFilter?: string) {
    page = page + 1;
    return this.superHeroService.query({
      _limit: `${pageSize}`,
      _page: `${page}`,
      name_like: nameFilter
    } as IPaginationRequest)
  }

  delete(id: number) {
    return this.superHeroService.delete(id);
  }

  save(body: ISuperHero) {
    if (body.id) {
      return this.superHeroService.update(body);
    }
    return this.superHeroService.create(body);
  }
}
