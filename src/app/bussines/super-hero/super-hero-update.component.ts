import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SuperHeroFactory} from "./super-hero.factory";
import {SuperHero} from "../../shared/model/super-hero.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-super-hero-update',
  templateUrl: './super-hero-update.component.html',
  styleUrls: ['./super-hero-update.component.scss']
})
export class SuperHeroUpdateComponent implements OnInit {
  heroForm = this.formBuilder.group({
    id: [null],
    name: [null, Validators.required]
  });

  label = 'Crear héroe';

  constructor(
    private formBuilder: FormBuilder,
    private superHeroFactory: SuperHeroFactory,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({hero}) => {
      if (hero) {
        this.label = 'Editar héroe'
        this.heroForm.patchValue({
          name: hero.name,
          id: hero.id
        });
      }
    });
  }

  submit() {
    const hero = new SuperHero();
    hero.name = this.heroForm.value.name;
    hero.id = this.heroForm.value.id;
    this.superHeroFactory.save(hero).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
