//Opdracht 1
const behaaldCijfer = 8; //Het behaalde cijfer

if (behaaldCijfer < 6) {
    console.log('onvoldoende')
} else if (behaaldCijfer >= 6 && behaaldCijfer <= 6.9) {
    console.log('voldoende');
} else if (behaaldCijfer >= 7 && behaaldCijfer <=8.9) {
    console.log('goed');
} else if (behaaldCijfer >=9 && behaaldCijfer <=10) {
    console.log('uitmuntend');
} else {
    console.error('Something went wrong')
}
// Opdracht 2
// dezelfde const wordt gebruikt van opdracht 1
switch (true) {
    case (behaaldCijfer < 6):
    console.log('onvoldoende')
    break;
    case (behaaldCijfer >= 6 && behaaldCijfer <= 6.9):
    console.log('voldoende');
    break; 
    case (behaaldCijfer >= 7 && behaaldCijfer <=8.9):
    console.log('goed');
    break;
    case (behaaldCijfer >=9 && behaaldCijfer <=10):
    console.log('uitmuntend');
    break;
    default:
    console.error('something went wrong')
}
// opdracht 3
const purchasedBook = true;
const job = 'teacher';
const inTrain = true;

if (job == 'teacher' && purchasedBook == true && inTrain == true) {
    console.log('finally i can enjoy a good book');
} else if (job =='teacher' && purchasedBook == false && inTrain == true) {
    console.log('too much free time and nothing to do');
} else if (job =='teacher' && purchasedBook == true && inTrain == false) {
    console.log('i really want to read my book. but i have work to do');
} else if (job =='teacher' && purchasedBook == false && inTrain == false) {
    console.log('but i have work to do');
} else {
    console.error('something went wrong');
}
