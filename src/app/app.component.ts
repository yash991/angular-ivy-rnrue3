import { Component, OnInit, VERSION } from '@angular/core';

import { from, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    const objects = [
      { id: 1, name: 'Fabian' },
      { id: 2, name: 'Jan-Niklas' },
    ];

    // const source$ = from(objects)
    //   .pipe(tap((item) => (item.name = item.name + '_2')))
    //   .subscribe((x) => console.log(x));

    // from([1, 2, 3])
    // .pipe(map((item) => item + 2))
    // .subscribe((item) => console.log(item));

    from([1, 2, 3, 9])
      .pipe(switchMap((item) => this.methodWhichReturnsObservable(item)))
      .subscribe((resultItem) => console.log(resultItem));
  }

  methodWhichReturnsObservable(item): Observable<number> {
    return of(5, 6, 7);
  }
}
