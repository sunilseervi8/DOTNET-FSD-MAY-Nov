/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
     // Check if the input is a valid number
        if (typeof height !== 'number' || height <= 0) {
        return '';
        }

   let result = '';

   for (let i = 1; i <= height; i++) {
       let spaces = ' '.repeat(height - i + 1); 
       let stars = '* '.repeat(i).trim(); 
      result += spaces + stars + '  \n';
   }
   return result;
};


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
