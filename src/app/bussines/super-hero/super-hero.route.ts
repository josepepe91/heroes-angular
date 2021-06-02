import {SuperHeroComponent} from "./super-hero.component";
import {ActivatedRouteSnapshot, Resolve, Router, Routes} from "@angular/router";
import {SuperHeroUpdateComponent} from "./super-hero-update.component";
import {Injectable} from "@angular/core";
import {ISuperHero, SuperHero} from "../../shared/model/super-hero.model";
import {SuperHeroService} from "./super-hero.service";
import {Observable, of} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {mergeMap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class SuperHeroResolve implements Resolve<ISuperHero> {
  constructor(private service: SuperHeroService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ISuperHero> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((superHero: HttpResponse<ISuperHero>) => {
          if (superHero.body) {
            return of(superHero.body);
          }
          return of(new SuperHero());
        })
      );
    }
    return of(new SuperHero());
  }
}

export const superHeroRoute: Routes = [
  {
    path: '',
    component: SuperHeroComponent,
  },
  {
    path: 'new',
    component: SuperHeroUpdateComponent,
  },
  {
    path: ':id/edit',
    component: SuperHeroUpdateComponent,
    resolve: {
      hero: SuperHeroResolve
    }
  }
];
