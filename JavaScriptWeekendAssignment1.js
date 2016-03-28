var person1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var person2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var person3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var person4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var person5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}
var peopleList = [person1, person2, person3, person4, person5]

peopleList.push(new Person("Margaret", "Primary Care", 500));
peopleList.push(new Person("Rob", "Specialist", 400));
peopleList.push(new Person("Amanda", "Emergency", 800));
peopleList.push(new Person("LuLu", "Specialist", 900));
peopleList.push(new Person("Nils", "Optical", 300));


for ( var i = 0; i < peopleList.length; i++) {
 amtInsurancePays(peopleList[i]);
}

function Person (name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
	}

function amtInsurancePays (human) {

var patientName=human.patientName;
var visitType=human.visitType;
var visitCost=human.visitCost;
var calcAmtInsurancePays=0;
var insurancePays=percentInsurancePays(human);
var totalAmtPaidbyInsurance=insurancePays*visitCost;
// return ('Paid out $' + totalAmtPaidbyInsurance + ' for ' + patientName)
// }
console.log('Paid out $' + totalAmtPaidbyInsurance + ' for ' + patientName)
}

function percentInsurancePays (types) {
 var visitType=types.visitType;
 var calcPercentInsurancePays=0;

 if (types.visitType=='Optical') {
    calcPercentInsurancePays= 0;
 }
if (types.visitType=='Specialist') {
    calcPercentInsurancePays= .10;
}
if (types.visitType=='Emergency') {
    calcPercentInsurancePays= 1;
}
if (types.visitType=='Primary Care') {
    calcPercentInsurancePays= .5;
}

return calcPercentInsurancePays;

}

// function percentInsurancePays (individual) {
//  var patientName=individual.patientName;
//  var visitType=individual.visitType;
//  var visitCost=individual.visitCost;
//  var calcPercentInsurancePays=0;
//
//  if (individual.visitType=='Optical') {
//    return patientName + ' ' + visitType + ' ' + visitCost + ' ' + visitCost * 1;
//
//    }
//    if (individual.visitType=='Specialist') {
// 	return patientName + ' ' + visitType + ' ' + visitCost + ' ' + visitCost * 0.10;
//    }
//    if (individual.visitType=='Emergency'){
//    	 return patientName + ' ' + visitType + ' ' + visitCost + ' ' + visitCost * 0;
//    }
//    if (individual.visitType=='Primary Care'){
//    	return patientName + ' ' + visitType + ' ' + visitCost + ' ' + visitCost * .50;
//
//    }
// }
//
//
// // function percentageInsuranceCovered(name, type, cost) {
// 	var patientName = name;
// 	var visitType = type;
// 	var visitCost = cost;
// 	insuranceCovered={};
// 	insuranceCovered.name=type*typeOfCare;
// 	var typeOfCare=0;
//
// 	if (visitType=="Optical"){
// 		typeOfCare=0;
// 	}
//     if(visitType=="Specialist"){
// 	    typeOfCare=.10;
// 	}
// 	if(visitType=="Emergency"){
// 		typeOfCare=100;
// 	}
//    if(visitType=="Primary Care"){
//    	    typeOfCare=.50;
//
//    return typeOfCare
// }
// }

//function to determine amount covered
