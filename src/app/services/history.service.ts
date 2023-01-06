import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: { imageUrl: string, fact: string }[] = [];
  private currentIndex = -1;

  constructor() { }

  add(imageUrl: string, fact: string) {
    // Remove any items after the current index, since they are no longer part of the history
    this.history.splice(this.currentIndex + 1);
    // Add the new item to the history
    this.history.push({ imageUrl, fact });
    // Update the current index
    this.currentIndex = this.history.length - 1;
  }

  canGoBack() {
    return this.currentIndex > 0;
  }

  canGoForward() {
    return this.currentIndex < this.history.length - 1;
  }

  goBack() {
    if (this.canGoBack()) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    } else {
      return null;
    }
  }

  goForward() {
    if (this.canGoForward()) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    } else {
      return null;
    }
  }

}
