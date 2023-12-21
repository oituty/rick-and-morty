import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SearchCharactersResponse } from '../../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  public apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharactersByUrl(url: string): Observable<SearchCharactersResponse> {
    return this.http.get<SearchCharactersResponse>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error.error.error);
    return throwError(() => new Error(error.error.error || 'Algo deu errado, por favor tente novamente mais tarde.'));
  }
}
