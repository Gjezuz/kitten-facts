import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FactService } from '../services/fact.service';
import { CatFact, HistoryService } from '../services/history.service';
import { PictureService, Cat } from '../services/picture.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  loading = false;
  catFact!: CatFact;

  constructor(
    private pictureService: PictureService,
    private factsService: FactService,
    private historyService: HistoryService,
  ) {

  }

  ngOnInit(): void {
    this.loadNewFact();
  }

  loadNext() {
    if(this.catFact.id === this.historyService.getCurrentHistoryCount() - 1) {
      this.loadNewFact();
    } else {
      this.catFact = this.historyService.loadNextCatFact(this.catFact.id);
    }
  }

  loadPrevious() {
    this.catFact = this.historyService.loadPreviousCatFact(this.catFact.id);
  }

  loadNewFact() {
    this.loading = true;

    forkJoin([this.pictureService.getRandomCat(), this.factsService.getRandomFact()]).subscribe(
      results => {
        this.catFact = this.historyService.saveCatFact(results[0]._id, results[1]);
        this.loading = false;
      }
    );
  }
}
