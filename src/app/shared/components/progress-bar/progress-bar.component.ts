import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  public position = 1;
  public max = 1;

  @ViewChild('progress', { static: false }) progressBar!: ElementRef;

  @Input() set progress(values: Progress) {
    if (values) {
      this.position = values.pos || values.position || 1;
      this.max = values.max || 1;
    }
    if(this.progressBar)
    this.setProgress();
  }

  ngAfterViewInit() {
    this.setProgress();
  }

  setProgress() {
    this.progressBar.nativeElement.style.width = `${
      ((this.position - 1) / (this.max - 1)) * 100
    }%`;
  }
}

export interface Progress {
  pos?: number;
  position?: number;
  max?: number;
}
