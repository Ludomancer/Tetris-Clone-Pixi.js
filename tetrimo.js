var BLOCK_BLUE_KEY = "block_blue.png";
var BLOCK_CYAN_KEY = "block_cyan.png";
var BLOCK_GREEN_KEY = "block_green.png";
var BLOCK_ORANGE_KEY = "block_orange.png";
var BLOCK_PURPLE_KEY = "block_purple.png";
var BLOCK_RED_KEY = "block_red.png";
var BLOCK_YELLOW_KEY = "block_yellow.png";

//var TETRIMO_PREV_I = ["I_1-3.png", "I_2-4.png"];
//var TETRIMO_PREV_J = ["J_1.png", "J_2.png", "J_3.png", "J_4.png"];
//var TETRIMO_PREV_L = ["L_1.png", "L_2.png", "L_3.png", "L_4.png"];
//var TETRIMO_PREV_O = ["O_1-2-3-4.png"];
//var TETRIMO_PREV_S = ["S_1-3.png", "S_2-4.png"];
//var TETRIMO_PREV_Z = ["Z_1-3.png", "Z_2-4.png"];
//var TETRIMO_PREV_T = ["T_1.png", "T_2.png", "T_3.png", "T_4.png"];

var SIZE = 16 / 2;

Tetrimo = function(type,anchorX,anchorY,rotation) {
    this.type = type;
    this.anchorX = anchorX + SIZE;
    this.anchorY = anchorY + SIZE;
    this.blocks = new Array();
    this.rotation = rotation;
    this.create(true);
}
 
Tetrimo.prototype = 
{
    setAnchor : function(anchorX,anchorY)
    {
        this.anchorX = anchorX + SIZE;
        this.anchorY = anchorY + SIZE;
        this.create(false);
    },
    
    create : function (newSprites) 
    {
        switch(this.type)
        {
            case 'o':
                if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_YELLOW_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX - SIZE;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX - SIZE;
                this.blocks[1].position.y =  this.anchorY + SIZE;
                
                this.blocks[2].position.x =  this.anchorX + SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE;

                this.blocks[3].position.x =  this.anchorX + SIZE;
                this.blocks[3].position.y =  this.anchorY - SIZE;
                break;
            case 'j':
            if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_BLUE_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX + SIZE;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX + SIZE;
                this.blocks[1].position.y =  this.anchorY + SIZE;
                
                this.blocks[2].position.x =  this.anchorX + SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE * 3;

                this.blocks[3].position.x =  this.anchorX - SIZE;
                this.blocks[3].position.y =  this.anchorY + SIZE * 3;
                break;
            case 'z':
                if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_GREEN_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX - SIZE;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX + SIZE;
                this.blocks[1].position.y =  this.anchorY - SIZE;
                
                this.blocks[2].position.x =  this.anchorX + SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE;

                this.blocks[3].position.x =  this.anchorX + SIZE * 3;
                this.blocks[3].position.y =  this.anchorY + SIZE;
                break;
            case 'l':
                if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_ORANGE_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX - SIZE;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX - SIZE;
                this.blocks[1].position.y =  this.anchorY + SIZE;
                
                this.blocks[2].position.x =  this.anchorX - SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE * 3;

                this.blocks[3].position.x =  this.anchorX + SIZE;
                this.blocks[3].position.y =  this.anchorY + SIZE * 3;
                break;
            case 's':
                if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_RED_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX + SIZE * 3;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX + SIZE;
                this.blocks[1].position.y =  this.anchorY - SIZE;
                
                this.blocks[2].position.x =  this.anchorX + SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE;

                this.blocks[3].position.x =  this.anchorX - SIZE;
                this.blocks[3].position.y =  this.anchorY + SIZE;
                break;
            case 'i':
                if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_CYAN_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX + SIZE;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX + SIZE;
                this.blocks[1].position.y =  this.anchorY - SIZE * 3;
                
                this.blocks[2].position.x =  this.anchorX + SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE;

                this.blocks[3].position.x =  this.anchorX + SIZE;
                this.blocks[3].position.y =  this.anchorY + SIZE * 3;
                break;
            case 't':
                if(newSprites)
                {
                    for (var i = 0; i < 4; i++) 
                    {
                        this.blocks[i] = PIXI.Sprite.fromFrame(BLOCK_PURPLE_KEY);
                    }
                }
                this.blocks[0].position.x =  this.anchorX + SIZE;
                this.blocks[0].position.y =  this.anchorY - SIZE;

                this.blocks[1].position.x =  this.anchorX + SIZE;
                this.blocks[1].position.y =  this.anchorY + SIZE;
                
                this.blocks[2].position.x =  this.anchorX - SIZE;
                this.blocks[2].position.y =  this.anchorY + SIZE;

                this.blocks[3].position.x =  this.anchorX + SIZE * 3;
                this.blocks[3].position.y =  this.anchorY + SIZE;
                break;
        }
        for(var i = 0; i < this.rotation; i++) this.rotate();
        if(newSprites)
        {
            for (var i = 0; i < 4; i++) 
            {
                mGameContainer.addChild(this.blocks[i]);
            }
        }
    },
    
    canMove : function(direction, previousBlocks)
    {
        //Simulate and check as if moved
        switch(direction)
        {
            case "LEFT":
                for(var i =0; i< 4 ; i++)
                {
                    //Cache x to reduce array lookups + better readability
                    var x = this.blocks[i].getBounds().x;
                    if(x-2*SIZE < renderer.view.getBoundingClientRect().left + PLAY_AREA_PADDING) return false;
                    
                    //Cache y to reduce array lookups + better readability
                    var y = this.blocks[i].getBounds().y;
                    
                    for(var j =0; j< previousBlocks.length ; j++)
                    {
                        if(x > previousBlocks[j].getBounds().x && x-SIZE*3 < previousBlocks[j].getBounds().x && y == previousBlocks[j].getBounds().y) return false;
                    }
                }
                break;
            case "RIGHT":
                for(var i =0; i< 4 ; i++)
                {
                    //Cache x to reduce array lookups + better readability
                    var x = this.blocks[i].getBounds().x;
                    if(x+3*SIZE > renderer.view.getBoundingClientRect().right - PLAY_AREA_PADDING) return false;
                    
                    //Cache y to reduce array lookups + better readability
                    var y = this.blocks[i].getBounds().y;
                    
                    for(var j =0; j< previousBlocks.length ; j++)
                    {
                        if(x < previousBlocks[j].getBounds().x && x+SIZE*3 > previousBlocks[j].getBounds().x && y == previousBlocks[j].getBounds().y) return false;
                    }
                }
                break;
            case "DOWN":
                for(var i =0; i< 4 ; i++)
                {
                    //Cache y to reduce array lookups + better readability
                    var y = this.blocks[i].getBounds().y;
                    if(y+3*SIZE> renderer.view.getBoundingClientRect().bottom) return false;
                    for(var j =0; j< previousBlocks.length ; j++)
                    {
                        if(previousBlocks[j].getBounds().y > y && y+SIZE*3 > previousBlocks[j].getBounds().y && this.blocks[i].getBounds().x == previousBlocks[j].getBounds().x) return false;
                    }
                }
                break;
            default:return false;
        }
        return true;
    },
    
    move : function(direction)
    {
        switch(direction)
        {
            case "LEFT":
                for (var i = 0; i < 4; i++) 
                {
                    this.blocks[i].position.x -= SIZE*2;
                }
                this.anchorX -= SIZE*2;
                break;
            case "RIGHT":
                for (var i = 0; i < 4; i++) 
                {
                    this.blocks[i].position.x += SIZE*2;
                }
                 this.anchorX += SIZE*2;
                break;
            case "DOWN":
                for (var i = 0; i < 4; i++) 
                {
                    this.blocks[i].position.y += SIZE*2;
                }
                 this.anchorY += SIZE*2;
                break;
        }
        return;
    },
    
    canRotate : function(previousBlocks)
    {
        for(var i =0; i < 4;i++)
        {
            var xPos = this.blocks[i].x;
            var yPos = this.blocks[i].y;
            //Remove center offset
            xPos -= this.anchorX;
            yPos -= this.anchorY;
            
            //Swap positions, so it will be rotated.
            var xNew = -yPos;
            var yNew = xPos;
            
            //Add center offset
            xNew += this.anchorX;
            yNew += this.anchorY;
            
            //Check if inside world boundries
            if (xNew < renderer.view.getBoundingClientRect().left ||
                xNew + SIZE > renderer.view.getBoundingClientRect().right ||
                yNew > renderer.view.getBoundingClientRect().bottom) return false;
            
            //Check proximity to other blocks
            for(var j =0; j< previousBlocks.length ; j++)
            {
                if(Math.abs(xNew -  previousBlocks[j].x) < SIZE && Math.abs(yNew -  previousBlocks[j].y) < SIZE) return false;
            }
        }
        return true;
    },

    rotate : function()
    {
        for(var i =0; i < 4;i++)
        {
            var xPos = this.blocks[i].x;
            var yPos = this.blocks[i].y;
            //Remove center offset
            xPos -= this.anchorX;
            yPos -= this.anchorY;
            
            //Swap positions, so it will be rotated.
            this.blocks[i].x = -yPos;
            this.blocks[i].y = xPos;
            
            //Add center offset
            this.blocks[i].x += this.anchorX;
            this.blocks[i].y += this.anchorY;
        }
    }
};

