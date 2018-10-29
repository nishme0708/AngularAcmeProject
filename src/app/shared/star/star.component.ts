import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number;
  starWidth: number;
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges() {
    debugger;
    this.starWidth = (this.rating * 75) / 5;
  }
  notifyRating() {
    console.log('rating was clicked', this.rating);
    this.ratingClicked.emit('rating was clicked ' + this.rating);
  }
}
