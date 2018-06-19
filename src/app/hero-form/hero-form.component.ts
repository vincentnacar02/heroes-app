import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { SAVE, DELETE, DELETE_ALL } from '../_store/Actions';
import { IHeroes } from '../_model/Heroes';
import { IAppState } from '../_store/Store';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  hero : IHeroes = {
    id: 0,
    codename: '',
    ability: ''
  }

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: SAVE, hero: this.hero});
  }

}
