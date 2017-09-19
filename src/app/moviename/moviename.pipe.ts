import {Pipe, PipeTransform} from '@angular/core';

/*
 * Changes the case of the first letter of a given number of words in a string.
*/

@Pipe({name: 'moviename'})
export class TitleCase implements PipeTransform {
    transform(input:string, length: number){
       let prepositions = ["of",
        "the",
        "is"
        ];
        let words = input.split(" ");
        let out_str = "";
        for (var i=0 ; i<words.length; i++){
            if (prepositions.includes(words[i].toLowerCase()) && i !=0 ){
               words[i] = words[i].toLowerCase() + " "
            }
            else {
              words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() + " "
            }
        }
       return words.join(" ")
    }
}