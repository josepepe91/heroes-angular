import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ISuperHero} from "../../shared/model/super-hero.model";
import {SuperHeroFactory} from "./super-hero.factory";
import {SuperHeroDeleteDialogComponent} from "./super-hero-delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {filter, switchMap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.scss']
})
export class SuperHeroComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true})
  paginator?: MatPaginator;

  dataSource: ISuperHero[] = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];
  // MatPaginator Inputs
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [2, 5, 10];
  filter = '';

  // MatPaginator Output
  pageEvent?: PageEvent;

  constructor(private superHeroFactory: SuperHeroFactory, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.superHeroFactory.getPage(this.pageEvent?.pageIndex, this.pageEvent?.pageSize, this.filter).subscribe(resp => {
      this.dataSource = resp?.body as ISuperHero[];
      const count = resp.headers.get('x-total-count');
      this.length = count ? +count : 0;
      if(this.dataSource.length === 0 && this.length > 0) {
        this.paginator?.previousPage();
      }

    })
  }

  create() {
    this.router.navigateByUrl('/new');
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.getPage();
  }

  edit(event: ISuperHero) {
    this.router.navigateByUrl(`/${event.id}/edit`);
  }

  delete(event: ISuperHero) {
    console.log(event);
    const dialogRef = this.dialog.open(SuperHeroDeleteDialogComponent);

    dialogRef.afterClosed()
      .pipe(
        filter(resp => !!resp && !!event.id),
        switchMap(() => this.superHeroFactory.delete(event.id as number))
      )
      .subscribe(() => {
        this.getPage();
      });
  }
}
