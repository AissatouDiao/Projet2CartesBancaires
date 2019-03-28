class Verificateur{
	constructor(numero) {
	    this.numero = numero;
	  }
    
    Verifiercarte(numero){}
    	
    
}
class luhn{
	Valider(numero){
		numero=parseInt(numero);
		let T= numero.toString().length;
		let somme1=0;
		let somme2=0;
		let somme=0;
	
		for(let i=2;i<T; i+=2){
			let A=parseInt(numero.toString().charAt(T-i));
			let doubleN=2*A;
			if(doubleN>9){
				A=doubleN-9;
			}
			 somme1=somme1+A;
      
			}
       //console.log("u"+somme1);
		 for (let i=1;i<T; i+=2){
			 let B=parseInt(numero.toString().charAt(i));
			 somme2=somme2+B;
       //i=i+2;
		 }//console.log("j"+somme2);
		 
		 somme=somme1+somme2;
		 
		if((somme%10)==0){
			console.log("numero de carte valide");
		}else{
			console.log("numero de carte non valide");
		
		}
		
	}
} /*let A=new luhn();
   A.Valider(5326351197617981);*/
class Visa extends Verificateur{
    Verifiercarte(numero){
    //	super.Verifiercarte(numero);
    	numero=parseInt(numero);
    	numero=numero.toString();
    	let b=numero.substring(0,2);
    	if ((numero.length==15)&&((b==14)||(b==15))){
    		console.log("* C'est une carte Visa *");
    	}else{
    		console.log("* Ce n'est pas une carte Visa *");
    	}
        }
    }// let S=new Visa();S.Verifiercarte(177894563214587);

class MasterCard extends Verificateur{
    Verifiercarte(numero){
    	numero=parseInt(numero);
    	numero=numero.toString();
    	let b=numero.substring(0,2);
    	if ((numero.length==16)&&((b==41)||(b==40))){
    		console.log("* C'est une carte MasterCard *");
    	}else{
    		console.log("* Ce n'est pas une carte MasterCard *");
    	}
        }
    }
class AmericanExpress extends Verificateur{
    Verifiercarte(numero){
    	numero=parseInt(numero);
    	numero=numero.toString();
    	let b=numero.substring(0,2);
    	if ((numero.length==17)&&((b==39)||(b==30))){
    		console.log("* C'est une carte AmericanExpress *");
    	}else{
    		console.log("* Ce n'est pas une carte AmericanExpress *");
    	}
        }
    }


class Banque {     
constructor(numero){
	this.numero=numero;
}
getnumero(){return this.numero;}

    Carte(A,B,C){ 
    	let e=parseInt(this.getnumero());
	A=new Visa();
	B=new MasterCard();
	C=new AmericanExpress();
A.Verifiercarte(e);
B.Verifiercarte(e);
C.Verifiercarte(e);
}
	}

let V= new Banque(151111111111111);
console.log("****************************************\n****************************************");
V.Carte(new Visa,new MasterCard, new AmericanExpress );
console.log("****************************************\n****************************************");
