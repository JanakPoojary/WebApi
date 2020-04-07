import { Pipe, PipeTransform } from '@angular/core';
import { Empleave } from './empleave.model';

@Pipe({
  name: 'empleaveFilter'
})
export class EmpleaveFilterPipe implements PipeTransform {
// change the any data type with the empleave data type after creting the model
  transform(value: Empleave[], searchEN: string, searchLT: string): Empleave[] {
    searchEN = searchEN ? searchEN.toLocaleLowerCase() : null;
    searchLT = searchLT ? searchLT.toLocaleLowerCase() : null;
    if(searchEN || searchLT){
      if(searchEN && searchLT){
        return value.filter((e: Empleave) =>
        (e.emp_name.toLocaleLowerCase().indexOf(searchEN) !== -1)&&
         (e.leave_name.toLocaleLowerCase().indexOf(searchLT) !== -1));
      }
      return value.filter((e: Empleave) =>
      (e.emp_name.toLocaleLowerCase().indexOf(searchEN) !== -1)||
       (e.leave_name.toLocaleLowerCase().indexOf(searchLT) !== -1));
    }
    else{
      return value;
    }
  }

}
