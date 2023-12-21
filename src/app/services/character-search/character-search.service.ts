import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, tap, throwError } from 'rxjs';
import { SearchCharactersResponse } from '../../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  public apiUrl = 'https://rickandmortyapi.com/api/character';
  private nextPageUrl$ = new BehaviorSubject<string | null>(null);
  private prevPageUrl$ = new BehaviorSubject<string | null>(null);

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
