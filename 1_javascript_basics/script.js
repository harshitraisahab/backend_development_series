// fundamentals of JS
///////////////////////////////////////////

// 1. arrays methods and objects
{
  var arr = [2, "d", true, function () {}, [2, "d"]];

  //forEach, map,filter, find , indexof
  var arr2 = [1, 2, 3, 4, 5];
  var sum = 0;
  arr2.forEach(function (e) {
    sum += e;
  });
  console.log(sum);

  //map returns array
  sum = arr2.map((e) => {
    return "ram" + e;
  });
  console.log(sum);
  // return array using condition
  sum = arr2.filter((e) => {
    if (e >= 33) return 1;
    else return 0;
  });
  console.log(sum);
  //find same for finding 1st elem
  //find index of user
  console.log(arr.indexOf("harsh")); // return index or -1
  var obj = {
    name: "harshit",
    age: 19,
  };
  console.log(obj.name);
}
/////////////////////////////////////////////////////
