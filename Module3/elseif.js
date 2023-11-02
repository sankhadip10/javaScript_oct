//if a student score  90-100 A
//if a 70-89-B
//50-69 -C
//lower than 50 -F


var student_score = 35

if (student_score>90){
    console.log('Student has scored an A')

}
else if(student_score>=70 && student_score<=89){
    console.log('Student has scored a B')
}
else if(student_score>=50 && student_score<=69){
    console.log('Student has scored a C')
}
else{
    console.log('Student has got an F')
}