var img,pSize=5,beadCount=0,imgh=0,inputFile;
var blankImg;
var promptAns;
var mouseWasClicked=false;
var inputImg;
function setup() {
  blankImg = loadImage("blank.png");
  inputFile=createFileInput(e);
  img=blankImg;
}
var c;
var scaleFactor=4;
var scaleWidth=600;
var frame=0;
var inputLoaded=false;
var changeMade=false;
function e(file){
  inputLoaded=false;
  if(file.type=="image"){
   inputImg=createImg(file.data,"upload image","anonymous",imgMade)
  }else{

  }
}
function imgMade(){
  inputLoaded=true;
  inputImg.hide()
  var graphics = createGraphics(inputImg.elt.width, inputImg.elt.height);
  graphics.image(inputImg, 0, 0);
  inputImg.remove();
  inputImg = graphics.get(0, 0, graphics.width, graphics.height)
}
function draw() {
  if(inputLoaded){
    img = inputImg
  }
    scaleFactor=(scaleWidth/img.width)
    if(frame<1){
      pSize=10
      createCanvas(img.width*scaleFactor+300, img.height*scaleFactor,(ceil(img.height/pSize)-img.height/pSize)*pSize*scaleFactor+5)
    }
  stroke(1)
  if(inputLoaded || changeMade || frame<5){
   imgh=0
   if(img.height*scaleFactor+(ceil(img.height/pSize)-img.height/pSize)*pSize*scaleFactor+5<200){
    resizeCanvas(img.width*scaleFactor+300, 200)
   }else{
    resizeCanvas(img.width*scaleFactor+300, img.height*scaleFactor+(ceil(img.height/pSize)-img.height/pSize)*pSize*scaleFactor+5)
    console.log()
   }
   background(255);
   for (var x = 0; x < img.width*scaleFactor; x=x+(pSize*scaleFactor)) {
    for (var y = 0; y < img.height*scaleFactor; y=y+(pSize*scaleFactor)) {
      c = img.get(x/scaleFactor, y/scaleFactor);
      fill(red(c), green(c), blue(c))
 
      ellipse(x+pSize,y+pSize,pSize*scaleFactor,pSize*scaleFactor)
      //perler bead effect
      //fill("white")
      //ellipse(x,y,pSize*2/4,pSize*2/4)
      beadCount+=1
      if(x==0){
        imgh+=1;
      }
    }
   }
   fill("black")
    noStroke()
    textSize(20)
    text("Pixel Size",scaleWidth+90,30)
    fill("white")
    stroke(1)
    rect(scaleWidth+110,35,50,30)
    fill("black")
    noStroke()
    textSize(15)
    text(pSize,scaleWidth+130-(floor(log(pSize)/log(10))*5),55)
    fill("red")
    ellipse(scaleWidth+180,50,20,20)
    ellipse(scaleWidth+90,50,20,20)
    fill("white")
    rect(scaleWidth+85,48.5,10,3)
    rect(scaleWidth+175,48.5,10,3)
    rect(scaleWidth+178.5,45,3,10)

    fill("black")
    noStroke()
    textSize(20)
    text("Canvas Width",scaleWidth+75,110)
    fill("white")
    stroke(1)
    rect(scaleWidth+110,115,50,30)
    fill("black")
    noStroke()
    textSize(12)
    text(scaleWidth,scaleWidth+125-(floor(log(pSize)/log(10))*5),135)
    fill("red")
    ellipse(scaleWidth+180,130,20,20)
    ellipse(scaleWidth+90,130,20,20)
    fill("white")
    rect(scaleWidth+85,128.5,10,3)
    rect(scaleWidth+175,128.5,10,3)
    rect(scaleWidth+178.5,125,3,10)

    fill("black")
    textSize(15)
    text("Size: "+ceil(img.width/pSize)+"x"+ceil(img.height/pSize),scaleWidth+50,185)
    textSize(10)
    text("("+ceil(ceil(img.width/pSize)/29)*ceil(ceil(img.height/pSize)/29)+" perler bead plates)",scaleWidth+145,183)
  }

  if(inputLoaded){
    inputLoaded=false;
  }
  if(changeMade){
    changeMade=false;
  }
  //plus button
  if(!mouseWasClicked&&mouseX>scaleWidth+170&&mouseX<scaleWidth+190&&mouseY>120&&mouseY<140&&mouseIsPressed){
    scaleWidth+=50
    changeMade=true
    mouseWasClicked=true
  }
  if(!mouseWasClicked&&mouseX>scaleWidth+170&&mouseX<scaleWidth+190&&mouseY>40&&mouseY<60&&mouseIsPressed){
    pSize+=1
    changeMade=true
    mouseWasClicked=true
  }
  //minus button
  if(!mouseWasClicked&&mouseX>scaleWidth+80&&mouseX<scaleWidth+100&&mouseY>120&&mouseY<140&&mouseIsPressed){
    if(scaleWidth>50){
    scaleWidth-=50
    }
    changeMade=true
    mouseWasClicked=true
  }
  if(!mouseWasClicked&&mouseX>scaleWidth+80&&mouseX<scaleWidth+100&&mouseY>40&&mouseY<60&&mouseIsPressed){
    if(pSize>1){
    pSize-=1
    }
    changeMade=true
    mouseWasClicked=true
  }

  if(!mouseWasClicked&&mouseX>scaleWidth+110&&mouseX<scaleWidth+160&&mouseY>35&&mouseY<65&&mouseIsPressed){
    promptAns=int(prompt("What should the pixel size be?"));
    if(promptAns){
      if(promptAns>0){
        pSize=promptAns
        changeMade=true
        mouseWasClicked=true
      }
    }
  }
  if(!mouseWasClicked&&mouseX>scaleWidth+110&&mouseX<scaleWidth+160&&mouseY>115&&mouseY<145&&mouseIsPressed){
    promptAns=int(prompt("What should the canvas width be?"));
    if(promptAns){
      if(promptAns>0){
        scaleWidth=promptAns
        changeMade=true;
        mouseWasClicked=true;
      }
    }
  }
  

  if(mouseIsPressed==false){
    mouseWasClicked=false;
  }
  

  frame+=1
}

