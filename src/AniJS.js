/*
* AniJS! WooHoo 
*
*
*
*/

var AniJS_animation_query = [];

(function(window, document, undefined){

var current_animation;
var DOM_elements, AniJS_elements_stack = [];
var AniJS_prefixes = ['ajs', 'data-ajs'];
AniJS_animation_query["slide"] = [];

var AniJS = (function() {

//The init function, doing some jQuery type stuff...
var AniJS = function(selector){
  return new AniJS.core.init(selector);
}

//Start of core
AniJS.core = AniJS.prototype = {
  constructor: AniJS,

}



//Animations



AniJS.core.tween = function(operation, args){
  if(AniJS_animation_query.length > 0){
    AniJS_animation_query.push({operation: operation, args: args, element: this[0]});
    console.log("Had to push it an animation to the query");
    return true;
  }
  else{
    AniJS_animation_query.push({operation: operation, args: args, element: this[0]});
    AniJS.core[operation](this[0], args);
  }
  return this;
}

AniJS.core.slide = function(elem, args){
  var frame = 0;
  current_animation = setInterval(function(){
    elem.style[args["direction"]] = frame + "px";
    if(frame >= args["distance"]){
      elem.style[args["direction"]] = args["distance"] + "px";
      clearInterval(current_animation);
      AniJS_animation_query.shift();
      current_animation = 0;
      if(AniJS_animation_query.length > 0){
        next_animation = AniJS_animation_query[0];
        AniJS.core[next_animation["operation"]](next_animation["element"], next_animation["args"]);
      }
    }
    frame += args["speed"];
  }, 16);
}

AniJSinit = AniJS.core.init = function(selector){
  var elem;
  if(typeof selector === "string"){

    //if it is an id, "#id" then do this... Not sure what other ways will happen...
    elem = document.getElementById(selector);
    this[0] = elem;
    return this;
  }

}

AniJSinit.prototype = AniJS.core;

return (window.AniJS = AniJS);

})();
//End of core

})(this, this.document);