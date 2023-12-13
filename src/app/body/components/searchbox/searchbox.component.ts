import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: []
})
export class SearchboxComponent implements OnInit, OnDestroy {



  //private debouncer: Subject<string> = new Subject<string>();
  private debouncer = new Subject<string>();

  @Input()
  public placeholder: string = ''

  @Input()
  public initialValue: string = ''

  @Output()
  public OnValue = new EventEmitter<string>();

  @Output()
  public OnDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value =>{
      this.OnDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  emitValue(value:string): void {
    this.OnValue.emit(value)
  }

  onKeyPress( searchTerm: string ) {
    this.debouncer.next(searchTerm)
  }
}
