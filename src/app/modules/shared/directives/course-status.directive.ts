import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[courseStatus]'
})
export class CourseStatusDirective implements OnInit {

  currentData;
  @Input('courseStatus') creationDate;

  constructor(
    private elemRef: ElementRef
  ) {
    this.currentData = Date.now();
  }

  ngOnInit() {
    this.changeBorder()
  }

  private getExtremes() {
    let fortnight = 14 * 24 * 60 * 60 * 1000;
    let dateBeforeNow = this.currentData - fortnight;
    let dateAfterNow = this.currentData + fortnight;

    return {
      dateBeforeNow,
      dateAfterNow
    }
  }

  private getCourseStatus(): string {
    let extremes = this.getExtremes();
    if (extremes.dateBeforeNow <= this.creationDate && this.creationDate <= this.currentData) {
      return 'fresh'
    } else if (this.creationDate > this.currentData && this.creationDate <= extremes.dateAfterNow) {
      return 'upcoming'
    }
  }

  private changeBorder() {
    if (this.getCourseStatus() === 'fresh') {
      this.elemRef.nativeElement.style.border = '4px dashed rgb(153 188 136)';
      this.elemRef.nativeElement.style.borderRadius = '4px';
    } else if (this.getCourseStatus() === 'upcoming') {
      this.elemRef.nativeElement.style.border = '4px dashed rgb(148 210 217)';
      this.elemRef.nativeElement.style.borderRadius = '4px';
    }
  }

}
