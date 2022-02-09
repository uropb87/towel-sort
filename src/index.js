
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if ( typeof matrix === 'undefined'  ) {
       return [];
   }
   let newMatrix = [];
   for ( let i=1; i <= matrix.length; i++) {
       if ( i%2 !== 0) {
        newMatrix.push(matrix[i-1]);
       }else {
        newMatrix.push(matrix[i-1].reverse());
       }
   }
     return newMatrix.flat();   
  
}
