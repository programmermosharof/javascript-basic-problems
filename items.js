// const list = ['abul', 'abol', 'babul', 'mono', 'rohim', "mahin", "mahin", "mono"];
// const number = [11, 11, 34, 67, 34, 67 ];

// function noDuplicate(array){
//     const uniqe = [];
//     for(const item of array){
//         if(uniqe.includes(item)=== false){
//          uniqe.push(item)
        
//         }
//     }
// return uniqe;
// }

// const uniqs = noDuplicate(number);
// console.log(uniqs);


// const names = ['a', 't', 'r', 'y', 'r', 't', 'a'];
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function duplicate(Mosharof){
//   const news = [];
//   for(const num of Mosharof){
//     if(news.includes(num)=== false){
//         news.push(num);
//     }
//   }
//   return news;
// }

// const results = duplicate(num);
// const all = duplicate(names);
// console.log(results, all);

// function removeDuplicate(arr) {
//   let unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }

//   return unique;
// }

// const result = removeDuplicate([1, 2, 2, 3, 4, 4]);
// console.log(result);

function removef(arr){
    let unique = [];
    for(let i = 0; i < arr.length; i++){
          if(!unique.includes(arr[i])){
        unique.push(arr[i]);
       }
    }
    return unique;
}
const resulte = removef(["pen", "book", "pen", "pencil", "book"]
);
console.log(resulte);

// function removef(arr){
//     let unique = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!unique.includes(arr[i])){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// const result = removef(["pen", "book", "pen", "pencil", "book"]);
// console.log(result);
