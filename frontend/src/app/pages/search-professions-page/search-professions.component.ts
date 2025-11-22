import { Component, OnInit, signal, Signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { Profession } from '../../models/profession.model';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-search-professions',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './search-professions.component.html',
  styleUrl: './search-professions.component.scss'
})
export class SearchProfessionsComponent implements OnInit {
  jobsTitleList: string[] = [];
  filterJobs: Profession[] = [];
  constructor(private store: Store, private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getProfessions()
      .pipe(
        map((professions: any[]) => {
          const result: Profession[] = [];
          professions.forEach((beProfession) => {
            const { city, street, street_no, plz, no, state, ...rest } = beProfession;

            const profession: Profession = { ...rest };
            profession.address = { city, street, plz, no: street_no, state };
            result.push(profession);
          });
          return result;
        })
      )
      .subscribe((professions) => {
        this.filterJobs = professions;
        console.log('>>>> inside subscribe filterJobs:', this.filterJobs);
      });

    console.log('>>>> outside subscribe filterJobs:', this.filterJobs);
  }

  onSearchProfessions() {

  }

  onJobTitleFilter(jobTitle: string) { }

}
