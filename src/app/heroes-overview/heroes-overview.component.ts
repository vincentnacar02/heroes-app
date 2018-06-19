import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { DELETE, DELETE_ALL } from '../_store/Actions';
import { IAppState } from '../_store/Store';

@Component({
  selector: 'app-heroes-overview',
  templateUrl: './heroes-overview.component.html',
  styleUrls: ['./heroes-overview.component.css']
})
export class HeroesOverviewComponent implements OnInit {
  @select() heroes;
  @select() lastUpdated;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {

  }

  onDelete(hero) {
    this.ngRedux.dispatch({type: DELETE, id: hero.id});
  }

  onDeleteAll() {
    this.ngRedux.dispatch({type: DELETE_ALL});
  }
}
