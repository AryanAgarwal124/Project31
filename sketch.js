  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100
var drops = []
var manWithUmbrella
var ground
var lightning1, lightning2, lightning3, lightning4
var rand
var thunderCreatedFrame
var thunder

function preload()
{
    lightning1 = loadImage ("1.png")
    lightning2 = loadImage ("2.png")
    lightning3 = loadImage ("3.png")
    lightning4 = loadImage ("4.png")
}

function setup()
{
    var canvas = createCanvas(480,575);
    
    engine = Engine.create();
    world = engine.world;
    

    
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400),2));
        }

    }

    manWithUmbrella = new Umbrella (200,435,100)


}

function draw()
{
    background(0);
    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(lightning1);
            break;
            case 2: thunder.addImage(lightning2);
            break; 
            case 3: thunder.addImage(lightning3);
            break;
            case 4: thunder.addImage(lightning4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.5)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }


    manWithUmbrella.display();

    drawSprites()
}   

