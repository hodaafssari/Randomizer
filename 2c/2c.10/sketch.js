
  
//     function draw () { 
        
//         if (animating == true){
//             clear();
//         image(catimages[imageCounter], windowWidth/2.5, windowWidth/2.5);
            
//         if (imageCounter < catimage.name - 1){
//             imageCounter++;
//             console.log(imageCounter);
//         } else {
//             imageCounter = 0;
//         }
//     }
//     }
    
//     function randomizer(){
//         animating = false
    
//         if (cats[0]){ //if something in array/if not in array 
//             //background(168,250,240);
//             clear();
        
//             // defining variable: int makes it a whole number, random(cats.length) chooses a random number within the array
//          randomIndex = int(random(cats.length));
//        //writes out the random number, .key is what category it chooses, and then at what location on screen
      
//        //text(`${cats[randomIndex].name}`+'s owner is '${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
      
//        //text(`${cats[randomIndex].name}'s owner is ${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
     
//        text(cats[randomIndex].name, windowWidth/15, windowHeight/15);
//        image(random(catimages), windowWidth/2.5, windowHeight/2.5);
    
//        //removes chosen number from array in this instance
//         cats.splice(random.Index,1);
    
    
//     } else { //if not in array the display
//          background(random(200, 255))
//         textAlign (CENTER);
//     text ('no more cat options :(,',windowWidth/2,windowHeight/2) //nothing left game over 
    
//       //////background restated so that the array text doesn't stack up on each other and "erases" it
//     //   background(168,250,240);
    
//     }
//     }
    
//     function buttonPressed () {
//         animating = true
//         setTimeout(randomizer, 1000);
    
//     }
    
    
//Cats I love throughout my years and their owners 



//array
//global things
let cats = [
    {
        name: "Bella", 
        owner: "Alizeh"
    }, {
        name: "Zuko", 
        owner: "Sareh"
    }, {
        name: "Whisker", 
        owner: "Sareh"
    }, {
        name: "Cookie", 
        owner: "Maryam"
    }, {
        name: "Meowmeow", 
        owner: "Afssari"
    }, {
        name: "Meowmeow's triplets", 
        owner: "Afssari" 
    }];
    


 let randomIndex;
 let animating = false;
 let imageCounter = 0
 let catimages = [];
 let button;



    function preload(){
    
        for (let i = 0; i <= 5; i++){
            catimages[i] = loadImage(`assets/catimage_`+i+`.JPG`)
    
        }
    }
    
    //runs once and stays
    function setup (){
        createCanvas(windowWidth,windowHeight);
        background(168,250,240);
      //  button = createButton("click to choose which cat to hang out with");
      button = select("#randButton")
        button.position(windowWidth/2.3,windowHeight/15);
        button.mousePressed(buttonPressed);
        button.class(".randomizerButton")
        button.style("padding", "10px");
        button.style("background-color", "#a8faf0")
      
        
        imageMode(CENTER);
        textSize (windowWidth/50);
      //  textAlign (CENTER);
    
        frameRate(20);
        console.log(catimages);
       // text ("which cat should I hang out with",windowWidth/2.5,windowHeight/2.5);
    }
    

    
    function draw(){
        if (animating == true) {
            clear();
            image(catimages[i][imageCounter],width/2.5,height/2.5);
        
            if(imageCounter < catimages.name -1) {
            imageCounter++;
            console.log(imageCounter);
            } else {
            imageCounter = 0;
                }
            }
        }


            
//         if (imageCounter < catimage.name - 1){
//             imageCounter++;
//             console.log(imageCounter);
//         } else {
//             imageCounter = 0;
//         }
//     }
//     }
    
    
        function randomizer (){
            animating = false;
          if (cats[0]){
           clear();
            randomIndex =int(random(cats.length));
            text(cats[randomIndex].name,width/15,height/15);
            image(random(catimages),width/2,height/2);
            cats.splice(randomIndex,1);
            } else {
           clear();
            text("no more cat options :(",50,50);
            }
        }
    
    function buttonPressed () {
        animating = true
        setTimeout(randomizer, 1000);
    
    }


