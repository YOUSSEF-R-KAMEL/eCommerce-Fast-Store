import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termText',
  standalone: true
})
export class TermTextPipe implements PipeTransform {

  transform(value:string, length: number) {
    return value.split(" ", length).join(" ")
  }

}
