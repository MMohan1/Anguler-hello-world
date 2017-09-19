import {Pipe, PipeTransform} from '@angular/core';

/*
 * Changes the case of the first letter of a given number of words in a string.
*/

@Pipe({name: 'moviename'})
export class TitleCase implements PipeTransform {
    transform(input:string, length: number){
        let words = input.split(" ");
        for (var i=0 ; i<words.length; i++){
            let word = words[i];
            if (this.isPrepositions(word) && i !=0 ){
               words[i] = word.toLowerCase() + " "
            }
            else {
              words[i] = this.makeCamleCase(word)
            }
        }
       return words.join(" ")
       
    }

   private isPrepositions(word:string):boolean {
           let prepositions = ["of",
                              "the",
                               "is"
                              ];
           return prepositions.includes(word.toLowerCase());
   }

   private makeCamleCase(word:string):string{
           return word[0].toUpperCase() + word.substr(1).toLowerCase();
   }
}