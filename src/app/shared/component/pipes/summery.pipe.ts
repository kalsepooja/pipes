import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summery'
})
export class SummmeryPipe implements PipeTransform{
    transform(value: string, count: number = 50) {
        // return value.substring(0,50) + '...'
        return value.substr(0,count) + '...'
    }
}