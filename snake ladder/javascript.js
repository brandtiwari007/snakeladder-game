let colors = ['red', 'blue', 'yellow']


// let y=0;
let firstplayer=0;
// let n=0;
let secondplayer=0;

 gridm =()=> {
    for (let i = 36; i >= 1; i--) {
        let node=document.createElement("div");
        node.className=`grid-item c${i}`;
        node.style.backgroundColor = colors[Math.floor(Math.random() * 3)]
        let textnode = document.createTextNode(i);
        let imgNode = document.createElement("img");
        imgNode.id=`img${i}`;
        
        node.appendChild(textnode);
        node.appendChild(imgNode);
        (document.querySelector(".grid-container")).appendChild(node);
    }
    
}
 game1= () => {
   
    let dice_roll = Math.floor((Math.random() * 6)+ 1);
    document.getElementById("diceimage").src = "dice-" + dice_roll+ ".png";
  
           
           firstplayer =firstplayer+dice_roll;
           if(firstplayer<36){

           
           if(`img${firstplayer}`==="img7"){
               //console.log(y);

            document.getElementById(`img${firstplayer-dice_roll}`).style.visibility="hidden";
          
               firstplayer=13;
            
               
              
           }
           else if(`img${firstplayer}`=="img30"){
            //console.log(firstplayer);
            document.getElementById(`img${firstplayer-dice_roll}`).style.visibility="hidden";
               firstplayer=35;
              
         
               
           }
           else if(`img${firstplayer}`=="img14"){
            //console.log(y);
            document.getElementById(`img${firstplayer-dice_roll}`).style.visibility="hidden";
               firstplayer=8;
             //  alert("O.M.G snake bites you");
             
              
           }
          else if(`img${firstplayer}`=="img33"){
            //console.log(y);
            document.getElementById(`img${firstplayer-dice_roll}`).style.visibility="hidden";
               firstplayer=21;
               //alert("O.M.G snake bites you");
              
               
           }
       


        if(secondplayer===firstplayer){
            document.getElementById("img1").src="p2.jpeg";
            document.getElementById("img1").style.visibility="visible";
            document.getElementById(`img${firstplayer}`).style.visibility="hidden";
            secondplayer=1;
        }

        document.getElementById(`img${firstplayer}`).src="player-1-indicator.png";
        //console.log(y);
        document.getElementById(`img${firstplayer}`).style.visibility="visible";

        document.getElementById(`img${firstplayer-dice_roll}`).style.visibility="hidden";
        } else {
            
            if(firstplayer>=31){
                let check=36-firstplayer;
                if(check==0){
                   
                    firstplayer=36; 
                    document.getElementById(`img${firstplayer}`).style.visibility="visible"; 
                    alert("player 1 win");
                
                    
                }
                else if(check<0){
                    firstplayer=firstplayer-dice_roll;
                    document.getElementById(`img${firstplayer}`).style.visibility="visible";

                }
            }
            document.getElementById(`img${firstplayer}`).src="player-1-indicator.png";
                    document.getElementById(`img${firstplayer}`).style.visibility="visible";
                    document.getElementById(`img${firstplayer-dice_roll}`).style.visibility="hidden";

           
            
        }
        

    
           let attr=document.createAttribute("disabled");
           attr.value="disabled";
           document.getElementById("player1").setAttributeNode(attr);
           document.getElementById("player2").removeAttribute("disabled");
        
    
    
     

}
 game2= () =>{
    

    let dice_roll2=Math.floor((Math.random() * 6)+ 1);
    document.getElementById("diceimage").src = "dice-" + dice_roll2 + ".png";
    secondplayer=secondplayer+dice_roll2;

    if (secondplayer < 36) {
   
    if(`img${secondplayer}`=="img7"){
       // console.log(n);
        document.getElementById(`img${secondplayer-dice_roll2}`).style.visibility="hidden";
        secondplayer=13;
       // alert("you got a ladder");
      
        
    }
    else if(`img${secondplayer}`=="img30"){
        //console.log(n);
        document.getElementById(`img${secondplayer-dice_roll2}`).style.visibility="hidden";
        secondplayer=35;
       // alert("you got a ladder");
      
       
    }
    else if(`img${secondplayer}`=="img14"){
        //console.log(n);
        document.getElementById(`img${secondplayer-dice_roll2}`).style.visibility="hidden";
        secondplayer=8;
       // alert("O.M.G snake bites you");
     
        
    }
    else if(`img${secondplayer}`=="img33"){
        //console.log(n);
        document.getElementById(`img${secondplayer-dice_roll2}`).style.visibility="hidden";
        secondplayer=21;
       // alert("O.M.G snake bites you");
      
        
    }
   
    if(secondplayer===firstplayer){
        document.getElementById("img1").src="player-1-indicator.png";
        document.getElementById("img1").style.visibility="visible";
        document.getElementById(`img${firstplayer}`).style.visibility="hidden";
        firstplayer=1;
    }

    document.getElementById(`img${secondplayer}`).src="p2.jpeg";
   // console.log(n);
    document.getElementById(`img${secondplayer}`).style.visibility="visible";
    document.getElementById(`img${secondplayer-dice_roll2}`).style.visibility="hidden";
    
    } else {
            
        if(secondplayer>=31){
            var check=36-secondplayer;
            if(check==0){
                secondplayer=36; 
                document.getElementById(`img${secondplayer}`).style.visibility="visible";
                alert("player 2 win");
               
            
               
                
            }
            else if(check<0){
                secondplayer=secondplayer-dice_roll2;
                document.getElementById(`img${secondplayer}`).style.visibility="visible";

            }
        }
        document.getElementById(`img${secondplayer}`).src="p2.jpeg";
                document.getElementById(`img${secondplayer}`).style.visibility="visible";
                document.getElementById(`img${secondplayer-dice_roll2}`).style.visibility="hidden";

    }
    let attr1=document.createAttribute("disabled");
           attr1.value="disabled";
           document.getElementById("player2").setAttributeNode(attr1);
           document.getElementById("player1").removeAttribute("disabled");
}

 window.onload = gridm;
