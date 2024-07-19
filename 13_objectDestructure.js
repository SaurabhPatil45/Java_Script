const course={
    courseName:"Java",
    price:99,
    instructor:"Ram"

}
//const{instructor}=course
const{instructor: isn}=course
//console.log(instructor);  //Ram
console.log(isn); //  Ram           Both are correct ways 

//API is only object without name