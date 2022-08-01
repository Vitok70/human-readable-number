module.exports = 
function toReadable (n) {
    let str = ''; strA =''; strB =''; strC ='';

let zero = 'zero';
let units = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
let dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
if (n == 0){ return zero;}
if (n <= 20) { return units[n];} 
   else if (n <= 99) {
        strB = dozens[Math.trunc(n/10)];
        strA = units[n % 10];
        str = strB +' '+ strA;
        } 
        else if (n <= 999) {
             strC = units[Math.trunc(n/100)];
               if (Math.trunc(n/10) % 10 == 0 ){
               strA = units[n % 10];
               str = strC +' '+ 'hundred'+' '+ strA;
              } else if (Math.trunc(n/10) % 10 == 1){
                      strB = units[n % 100];
                      str = strC +' '+ 'hundred'+' '+ strB;
                     }
                     else { strB = dozens[Math.trunc(n/10) % 10];
                          strA = units[(n % 100) % 10];
                          str = strC +' '+ 'hundred' + ' '+ strB +' '+ strA;
                          }
            }
    return str.trim();
}
// console.log(toReadable(919));

