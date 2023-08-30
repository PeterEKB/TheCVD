import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createArray',
})
export class CreateArrayPipe implements PipeTransform {
  transform(value: number, fill = null): Array<null | number> {
    return Array(value).fill(fill);
  }
}
