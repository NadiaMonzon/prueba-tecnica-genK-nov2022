'use strict';

const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
  ];
  

const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
  ];

  function getTheRowsSolutions (){
    const firstResult = array1[0][0] * array2[0][0] + array1[0][1] * array2[1][0] + array1[0][2] * array2[2][0];
    const secondResult = array1[1][0] * array2[0][1] + array1[1][1] * array2[1][1] + array1[1][2] * array2[2][1];
    const thirdResult = array1[2][0] * array2[0][2] + array1[2][1] * array2[1][2] + array1[2][2] * array2[2][2];

    const result = [firstResult, secondResult, thirdResult]

    return result;
    
}

function convertToString(result){

    const resultString = result
    .toString()
    .split(',')
    .map((number)=>{
        if (number.length ===2){
            number = '0'+ number
        }else if(number.length ===1){
            number = '00'+ number
        }
        return number
    });

    return resultString;
  }

  console.log(convertToString(getTheRowsSolutions ()));