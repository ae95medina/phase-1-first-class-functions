function breakfast(){
    console.log("Make an egg sandwich")
  }
  function getReady(){
    console.log("Shower and get dressed for work")
  }
  function callback(){
      console.log("Call back this function")
  }
function receivesAFunction(callback){
    breakfast();
    callback();
}

function returnsANamedFunction(){
    return(breakfast);
  }

  const returnsAnAnonymousFunction = function() {
    return (function() {  
        return "something"
})
  }