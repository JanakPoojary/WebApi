import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value: employee[], searchFilter: string): employee[] {
    searchFilter = searchFilter ? searchFilter.toLocaleLowerCase() : null;
    return searchFilter ? value.filter((e: employee) =>
        e.e_name.toLocaleLowerCase().indexOf(searchFilter) !== -1) : value;
  }

}
