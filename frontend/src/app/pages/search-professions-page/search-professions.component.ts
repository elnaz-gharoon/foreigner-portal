import { Component, OnInit, signal, Signal } from '@angular/core';
import {Store} from '@ngxs/store';
import { Profession } from '../../models/profession.model';
import { AppState } from '../../state/app.state';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search-professions',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './search-professions.component.html',
  styleUrl: './search-professions.component.scss'
})
export class SearchProfessionsComponent implements OnInit {

  professionsSignal: Signal<Profession[]> = signal([]);

  jobsTitleList: string[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.professionsSignal = this.store.selectSignal(AppState.getProfessions);

    this.jobsTitleList = [...new Set(this.professionsSignal().map(p => p.title))];
  }

  onJobTitleFilter(jobTitle: string): void {
    console.log('>>>>>>>>>>>>>>>>JOB TITLE:', jobTitle);
  }
}
