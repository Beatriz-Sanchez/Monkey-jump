var macaco;
var aguia;
var banana, bananaG;
var eagleG;


var bgImg;
var platform, platformM, platformS
var banana;
var treeImg;
var platformSprites,tops,bottoms;
var platformObjects = [];


function preload(){
   
   bgImg = loadImage("OtherSprites/BgImg.png")
   treeImg = loadImage("OtherSprites/TreeImg.png")




}
function setup(){
   createCanvas(displayWidth,displayHeight)
   macaco = new Macaco();
   banana = new Banana();
   
   //novo
   platformSprites = new Group();
   tops = new Group();
   bottoms = new Group();
   eagleG = new Group();
   bananaG = new Group();
   


}
function draw(){
   background(bgImg);
   push();
   imageMode(CENTER);
   image(treeImg,displayWidth/2,displayHeight/2+displayHeight/10,displayWidth/2,displayHeight*2);
   pop();
   
  
   macaco.controles();
   macaco.display();
   macaco.sprite.collide(platformSprites);//collide
   banana.display();

   if(eagleG[0]){
      aguia.display();
}

   //novo
   spawnPlatforms();
   if(platformObjects[0]){
      platform.display();
      for (let p=0; p < platformObjects.length; p++){
         if (platformObjects[p].top.isTouching(macaco.sprite)){

            setTimeout(()=>{
               platformObjects[p].velocity(0,15);
            },2500);
         }
      }
   }
   spawnEagle();
   spawnBanana();
   
   
}

function spawnPlatforms(){
   if (frameCount%100 === 0){
      platform = new Plataforma();
      platform.velocity(0,4);
      platform.setLifetime(displayHeight/2+30);
      platform.addToGroups();
      platformObjects.push(platform);
   }
}
function spawnEagle(){
   
   if(frameCount%100 === 0){
      aguia = new Eagle();
      aguia.sprite.lifetime = displayWidth/10+30;
      eagleG.add(aguia.sprite);

   }
}
function spawnBanana(){
   if (frameCount%200 === 0){
      banana = new Banana();
      banana.sprite.lifetime = displayWidth/10+30;
      bananaG.add(banana.sprite);
   }
}
