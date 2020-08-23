import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterComponent } from '@characters/character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const myComponents = [
                      CharacterListComponent,
                      CharacterDetailsComponent,
                      CharacterComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [...myComponents]
})
export class CharactersModule { }
