function isTouching(object1, object2){

  
    if((object1.x-object2.x < object2.width/2+object1.width/2) &&
     (object2.x - object1.x < object2.width/2+object1.width/2) &&
     (object1.y-object2.y < object2.height/2+object1.height/2) &&
      (object2.y - object1.y < object2.height/2+object1.height/2)){
     
      return true;
    }
    else{
     
      return false;
    }
  
  }
  
  function bounceOff(object1,object2){
    if((object1.x-object2.x < object2.width/2+object1.width/2) &&
    (object2.x - object1.x < object2.width/2+object1.width/2)) {
  
      object1.velocityX *= (-1);
      object2.velocityX *= (-1);
    }
    if((object1.y-object2.y < object2.height/2+object1.height/2) &&
     (object2.y - object1.y < object2.height/2+object1.height/2)){
  
      object1.velocityY *= (-1);
      object2.velocityY *= (-1);
     }
  
  }

  function hasCollided(object1,object2){
      object1RightEdge = object1.x+object1.width;
      object2LeftEdge = object2.x;

      console.log("bulletright"+object1RightEdge);

      if(object1RightEdge >= object2LeftEdge){
        return true;
      }
      else{
        return false;
      }

  }