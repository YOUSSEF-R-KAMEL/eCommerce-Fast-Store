import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(itemsList: Array<{ title?: string; name?: string }>, searchVal: string): any[] {
    if (!searchVal?.trim()) return itemsList;

    const lowerSearch = searchVal.toLowerCase();
    return itemsList.filter(item =>
      (item.title?.toLowerCase().includes(lowerSearch)) ||
      (item.name?.toLowerCase().includes(lowerSearch))
    );
  }

}
