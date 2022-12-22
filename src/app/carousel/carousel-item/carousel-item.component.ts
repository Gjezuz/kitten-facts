import { Component, Input } from '@angular/core';
import { CatFact } from 'src/app/services/history.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {

  @Input() catFact!: CatFact;

  get url() {
    return this.pictureService.getPictureUrl(this.catFact.imageId);
  }

  constructor(
    private pictureService: PictureService,
  ) {

  }

}
