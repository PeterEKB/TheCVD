import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTextComponent } from './components/dynamic-text/dynamic-text.component';
import { SharedCoreModule } from '../shared-core/shared-core.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CreateArrayPipe } from './pipes/create-array.pipe';

@NgModule({
  declarations: [DynamicTextComponent, ProgressBarComponent, CreateArrayPipe],
  imports: [CommonModule, SharedCoreModule],
  exports: [DynamicTextComponent, SharedCoreModule, ProgressBarComponent, CreateArrayPipe],
})
export class SharedModule {}
