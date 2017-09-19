import {Pipe, PipeTransform} from '@angular/core';

/*
 * Changes the case of the first letter of a given number of words in a string.
*/

@Pipe({name: 'moviename'})
export class TitleCase implements PipeTransform {
    transform(input:string, length: number){
       let prepositions = ["of",
        "the"
        ];
        let words = input.split(" ");
        let out_str = "";
        for (var i=0 ; i<words.length; i++){
            if (i == 0 && prepositions.includes(words[i]))
               out_str += words[i].toLowerCase() + " "
            else {
                 if (prepositions.includes(words[i])){
                 out_str += words[i].toLowerCase() + " "
                 }
                 else {
                 out_str += words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() + " "
            }
            }
        }
       return out_str
    }
}