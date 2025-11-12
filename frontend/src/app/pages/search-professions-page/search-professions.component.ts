import { Component, OnInit, signal, Signal } from '@angular/core';
import {Store} from '@ngxs/store';
import { Profession } from '../../models/profession.model';
import { AppState } from '../../state/app.state';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-search-professions',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './search-professions.component.html',
  styleUrl: './search-professions.component.scss'
})
export class SearchProfessionsComponent implements OnInit {

  professionsSignal: Signal<Profession[]> = signal([]);

  jobsTitleList: string[] = [];
  filterJobs : Profession[] = [];
  constructor(private store: Store, private apiService: ApiService) {
    apiService.getProfessions().subscribe((professions) => {
      console.log('>>>>>>>>>>>>>>>>>professions from api:', professions);
      this.filterJobs = professions;
    });
  }

  ngOnInit(): void {
    this.professionsSignal = this.store.selectSignal(AppState.getProfessions);

    this.jobsTitleList = [...new Set(this.professionsSignal().map(p => p.title))];
  }

  onJobTitleFilter(jobTitle: string): void {
     this.filterJobs = this.professionsSignal().filter(p => p.title.toLowerCase() === jobTitle.toLowerCase());

    console.log('>>>>>>>>>>>>>>>>JOB TITLE:', jobTitle);
  }
}
