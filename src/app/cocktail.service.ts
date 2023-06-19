import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  constructor() { }

  cocktails: Cocktail[] = [
    { name: 'Daïquiri Fraise', price: 12, image : ''},
    { name: 'Spritz', price: 10, image : ''},
    { name: 'Margharita', price: 10, image : ''},
    { name: 'Maï Taï One', price: 12, image : ''},
    { name: 'Piña Colada', price: 12, image : ''},
    { name: 'Américano', price: 10, image : ''},
    { name: 'Ti Punch', price: 12, image : ''}
  ];

  getCocktails(): Cocktail[]{
    return this.cocktails;
  } 
}

export class Cocktail {
  constructor(public name: string, public price: number, public image: string){}
}