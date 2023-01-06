import { Injectable } from '@angular/core';

export interface CatFact {
  id: number;
  imageId: string;
  fact: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly KEY = 'cat-facts';

  constructor() {}

  saveCatFact(imageId: string, fact: string): CatFact {
    const catFact: CatFact = {
      id: this.getCurrentHistoryCount() + 1,
      imageId,
      fact
    };
    this.updateHistory([...this.loadHistory(), catFact]);
    return catFact;
  }

  loadNextCatFact(id: number): CatFact {
    const history = this.loadHistory();
    const currentIndex = history.findIndex(catFact => catFact.id === id);
    return history[currentIndex + 1];
  }

  loadPreviousCatFact(id: number): CatFact {
    const history = this.loadHistory();
    const currentIndex = history.findIndex(catFact => catFact.id === id);
    return history[currentIndex - 1];
  }

  getCurrentHistoryCount(): number {
    return this.loadHistory().length;
  }

  isLatestCatFact(id: number): boolean {
    return id === this.getCurrentHistoryCount();
  }

  private loadHistory(): CatFact[] {
    const history = localStorage.getItem(this.KEY);
    return history ? JSON.parse(history) : [];
  }

  private updateHistory(history: CatFact[]): void {
    localStorage.setItem(this.KEY, JSON.stringify(history));
  }
}
