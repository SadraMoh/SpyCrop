import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number): string {

    let ans = '';

    if (value < 1024) {
      ans = (value).toFixed(2) + 'b';
    }
    else if (value > 1024 && value < 1024 * 1000) {
      ans = (value / 1000).toFixed(2) + 'kb'
    }
    else if (value > 1024 * 1000 && value < 1024 * 1000 * 1000) {
      ans = (value / 1000000).toFixed(2) + 'mb'
    }
    else if (value > 1024 * 1000 * 1000 && value < 1024 * 1000 * 1000 * 1000) {
      ans = (value / 1000000000).toFixed(2) + 'gb'
    }
    else {
      ans = 'Too big for this pipe!';
    }

    return ans;
  }

}
