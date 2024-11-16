"use strict";

// CGPA WEB APP DESIGN BY GSAM

let gpaResult = document.getElementById('gp-result');
let cgpaResult = document.getElementById('cgpa-result');
let displayGPResult = document.getElementById('display-result1');
let displayCGPResult = document.getElementById('display-result2');
let courseGp;

displayGPResult.addEventListener('click', function() {
    let hideResult1 = document.getElementById('result1');
    hideResult1.classList.toggle('display-result');
});

displayCGPResult.addEventListener('click', function() {
    let hideResult2 = document.getElementById('result2');
    hideResult2.classList.toggle('display-result');
});


function calculateGP() {

// 1) An array that takes a course unit

//  get the value of the course units
const courseUnits = document.getElementById("units").value;

// convert to array and numbers
const displayCourseUnits = courseUnits.split(",").map(Number);

// 2) An array that takes the course grade

//  get the value of the course grades
const courseGrades = document.getElementById("grades").value;

// convert to array and numbers
const displayCourseGrades = courseGrades.split(",").map(Number);

// 3) A function that add the total uints

let unit; 
let add = 0;
let sum = 0;
let gradeCourse;
const sumUnits = function (units) {
    for (unit in units) {
        add += units[unit];
    };
    return add;
};

const totalUnits= sumUnits(displayCourseUnits);

// 4) A function that multtiply the unit and grade arrays and add them then divided by the total units

// A) Multiply 
const multiplyGradeCourses= displayCourseUnits.map((course, ind) => course * displayCourseGrades[ind]);

// B) Divide
const sumGradeCourse= function (gradeCourses) {
    for(gradeCourse in gradeCourses) {
        sum += gradeCourses[gradeCourse];
    };
    return sum;
}
const totalGradeCourse = sumGradeCourse(multiplyGradeCourses);

// C) Divide

courseGp = Number((totalGradeCourse / totalUnits).toFixed(2));
gpaResult.value = courseGp;

}


//  CGPA CALCULATION APP

function calculateCGPA() {

  calculateGP();

  // 1) An array that takes a course unit
  
  //  get the value of the course units
  const courseUnits2 = document.getElementById("units2").value;
  
  // convert to array and numbers
  const displayCourseUnits2 = courseUnits2.split(",").map(Number);
  
  // 2) An array that takes the course grade
  
  //  get the value of the course grades
  const courseGrades2 = document.getElementById("grades2").value;
  
  // convert to array and numbers
  const displayCourseGrades2 = courseGrades2.split(",").map(Number);
  
  // 3) A function that add the total uints
  
  let unit; 
  let add = 0;
  let sum = 0;
  let gradeCourse;
  const sumUnits = function (units) {
      for (unit in units) {
          add += units[unit];
      };
      return add;
  };
  
  const totalUnits= sumUnits(displayCourseUnits2);
  
  // 4) A function that multtiply the unit and grade arrays and add them  then divided by the total units
  
  // A) Multiply 
  const multiplyGradeCourses2 = displayCourseUnits2.map((course, ind) => course * displayCourseGrades2[ind]);
  
  // B) Divide
  const sumGradeCourse= function (gradeCourses) {
      for(gradeCourse in gradeCourses) {
          sum += gradeCourses[gradeCourse];
      };
      return sum;
  }
  const totalGradeCourse2 = sumGradeCourse(multiplyGradeCourses2);
  
  // C) Divide
  
  const courseGp2 = Number((totalGradeCourse2 / totalUnits).toFixed(2));

  const cummulativeGP = Number(((courseGp + courseGp2) / 2).toFixed(1));
  cgpaResult.value = cummulativeGP;
  };