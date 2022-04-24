import { Pipe, PipeTransform } from '@angular/core';
import { ListOfPases } from 'src/app/interfaces/list-pases';

@Pipe({
  name: 'filterPasses'
})
export class FilterPassesPipe implements PipeTransform {

  transform(list: ListOfPases[], page:number = 0): ListOfPases[] {
    return list.slice(page, page + 5);
  }

}
