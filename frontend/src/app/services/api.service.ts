import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profession } from '../models/profession.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getProfessions() {
    return this.httpClient.get<Profession[]>('/api/professions');
  }

  // Example of a POST method to add a new profession
  public addProfession(profession: Profession) {
    return this.httpClient.post<Profession>('/api/professions', profession);
  }
  
}
