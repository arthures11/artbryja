import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {

  constructor() { }

  private showAvatarSubject = new BehaviorSubject<boolean>(false);
  showAvatar$ = this.showAvatarSubject.asObservable();

  setShowAvatar(value: boolean ): void {
    this.showAvatarSubject.next(value);
  }
  getShowAvatar(): boolean {
    return this.showAvatarSubject.getValue()
  }
}
