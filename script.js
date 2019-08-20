"use strict";

// Hbiera sido chevere que implementaras una funcion que usaras de una vez en tu página, pero super genial la idea de poner tu grado.
//Function that helps to update my bachelor studies once I graduate from university
function gradDate(){
  //Get's today's date
  let today = new Date();
  
  //Variable for the month of the date.
  let mm = today.getMonth() + 1; 
  //Variable for the year of the date
  let yyyy = today.getFullYear();

  //Compares year and month to April of 2021 (Expected graduation date). I'm sure I will graduate in this date.
  if(yyyy>=2021 && mm>=4)
  {
    document.getElementById("grado1").innerHTML = "Universidad de los Andes, Bogotá, Colombia. Industrial Engineering, August 2015 - December 2020, Bachelor degree in April, 2021.";
    document.getElementById("grado2").innerHTML = "Universidad de los Andes, Bogotá, Colombia. Computer Science, August 2015 - December 2020, Bachelor degree in April, 2021.";
  }
}
