import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBoardGame } from './interfaces/board-game';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7034/api/boardgame'

  getBoardGames() {
    return this.http.get(this.apiUri)
  }

  addBoardGame(game:IBoardGame) {
    return this.http.post(`${this.apiUri}/add`,game);
  }  
}
