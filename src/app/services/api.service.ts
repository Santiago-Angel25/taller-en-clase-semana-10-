import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
}

interface RandomUserResponse {
  results: RandomUser[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://randomuser.me/api/1.4/?results=10&nat=es&inc=name,location,email&noinfo';

  getItems(): Observable<RandomUser[]> {
    return this.http.get<RandomUserResponse>(this.apiUrl).pipe(
      map((response) => response.results)
    );
  }
}
