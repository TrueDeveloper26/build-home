"use strict";
// ACCORDION callback
$(".accordion").accordion({
	//whether the first section is expanded or not
	firstChildExpand: true,
	//whether expanding mulitple section is allowed or not
	multiExpand: false,
	//slide animation speed
	slideSpeed: 200,
	//drop down icon
	dropDownIcon: ""
});  



// CAROUSEL callback
$(function($){
    var jssor_1_SlideshowTransitions = [
      {$Duration:1200,$Opacity:2}
    ];
    
    var jssor_1_options = {
      $AutoPlay: false,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
    
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1235);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});



//JSON operations
  ;(function(){
    $.getJSON(
      "https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", 
      function(all){
        var data = all;

        //skills
          var skills;
          ;(function(){
            var arr = [];
            for(var i=0; i<data.length; i++){
              arr.push(data[i].skills);
            }
            var concUniq = _.union(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);
            var concUniqLow = [];
            for(var i=0; i<concUniq.length; i++){
              concUniqLow.push(_.toLower(concUniq[i]));
            }
            var concUniqLowSort = _.sortBy(concUniqLow);
            skills = concUniqLowSort;
          })();

        //names
          var names;
          ;(function(){
            var sortedObjs = _.sortBy(data, function (obj){ 
              return obj.friends.length;
            });
            var sortedNames = [];
            for(var i=0; i<sortedObjs.length; i++){
              sortedNames.push(sortedObjs[i].name);
            }
            names = sortedNames;
          })();

        //friends
          var friends;
          ;(function(){
            var arr = [];
            for(var i=0; i<data.length; i++){
              arr.push(data[i].friends);
            }
            var concArr = _.concat(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);
            var allFriends = [];
            for(var i=0; i<concArr.length; i++){
              allFriends.push(concArr[i].name);
            }
            var uniq = _.uniq(allFriends);
            friends = uniq;
          })();

        console.log('SKILLS: ', skills);
        console.log('NAMES: ', names);
        console.log('FRIENDS: ', friends);
      }
    );
  })();