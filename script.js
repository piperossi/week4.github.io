var nombres= new Array();

nombres[0]="Alfonso";
nombres[1]="John";
nombres[2]="Jeny";
nombres[3]="jeyson";
nombres[4]="paula";
nombres[5]="Julian";
nombres[6]="lopez";
nombres[7]="paula";
nombres[8]="Jhony";
nombres[9]="juliana";


for (var i = 0; i < nombres.length; i++) {
	if(nombres[i].charAt(0)==='J'|| nombres[i].charAt(0)==='j'){
        console.log("Goodbye " + nombres[i])
	}
	else{
		console.log("Hello " + nombres[i])
	}
}