import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private storeKey = 'cat-facts-history';
  private historyCount;

  constructor() {
    if(this.getStore() === null) {
      localStorage.setItem(this.storeKey, '[]');
      this.historyCount = 0;
    } else {
      this.historyCount = this.getStoredFacts().length;
    }
  }

  getCurrentHistoryCount() {
    return this.historyCount;
  }

  saveCatFact(imageId: string, fact: string): CatFact {
    const facts: CatFact[] = this.getStoredFacts();
    const newFact = {
      id: facts.length,
      imageId: imageId,
      fact: fact,
    };
    facts.push(newFact);
    this.historyCount = facts.length;
    localStorage.setItem(this.storeKey, JSON.stringify(facts));
    return newFact;
  }

  loadNextCatFact(id: number): CatFact {
    return this.loadCatFact(id + 1);
  }

  loadPreviousCatFact(id: number): CatFact {
    return this.loadCatFact(id - 1);
  }

  private loadCatFact(id: number) {
    const facts: CatFact[] = this.getStoredFacts();
    return facts[id];
  }

  private getStore() {
    return localStorage.getItem(this.storeKey);
  }

  private getStoredFacts() {
    return JSON.parse(this.getStore()!);
  }
}

export interface CatFact {
  id: number;
  imageId: string;
  fact: string;
}
