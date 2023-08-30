import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class DynamicTextComponent {
  textIndex: number = 0;
  textAlternateIndex: number = 0;
  @Input() text: string[] = ['Test', 'Test2', 'Test3', 'Test4', 'Test5'];
  @ViewChild('textOutput') textOutput!: ElementRef;

  ngAfterViewInit() {
    setInterval(this.iterateTextIndex.bind(this), 4000)
  }
  iterateTextIndex() {
    this.textIndex = (this.textIndex + 1) % this.text.length;
    this.textAlternateIndex = (this.textAlternateIndex + 1) % 2;
  }
}
