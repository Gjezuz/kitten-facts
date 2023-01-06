import { Component } from '@angular/core';
import { FactService } from './services/fact.service';
import { HistoryService } from './services/history.service';
import { PictureService } from './services/picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  catImageUrl!: string;
  catFact!: string;

  constructor(
    private catImageService: PictureService,
    private catFactService: FactService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.loadNext();
  }

  async loadNext() {
    const imageUrl = await this.catImageService.getRandomCatImageUrl();
    const fact = await this.catFactService.getRandomCatFact();
    this.catImageUrl = imageUrl;
    this.catFact = fact;
    this.historyService.add(imageUrl, fact);
  }

  async loadPrevious() {
    const item = this.historyService.goBack();
    if (item) {
      this.catImageUrl = item.imageUrl;
      this.catFact = item.fact;
    }
  }

  // von mir, weil ChatGPT den service-call im HTML wollte
  get previousDisabled() {
    return !this.historyService.canGoBack();
  }

  // von mir, weil ChatGPT den service-call im HTML wollte
  get nextDisabled() {
    return !this.historyService.canGoForward();
  }
}
