import { Component } from '@angular/core';
import { Observable, switchMap, map, tap } from 'rxjs';
import { FactService } from '../services/fact.service';
import { CatFact, HistoryService } from '../services/history.service';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  catFact!: CatFact;
  loading = false;

  constructor(
    private pictureService: PictureService,
    private factService: FactService,
    private historyService: HistoryService
  ) {}

  ngOnInit() {
    this.loadNewFact();
  }

  async loadNewFact() {
    this.loading = true;
    const picture = await this.pictureService.getRandomCat().toPromise();
    const fact = await this.factService.getRandomFact().toPromise();
    this.catFact = this.historyService.saveCatFact(picture!._id, fact!.data[0]);
    this.loading = false;
  }

  loadPrevious() {
    this.catFact = this.historyService.loadPreviousCatFact(this.catFact.id);
  }

  async loadNext() {
    if (this.historyService.isLatestCatFact(this.catFact.id)) {
      this.loadNewFact();
    } else {
      this.catFact = this.historyService.loadNextCatFact(this.catFact.id);
    }
  }

}
