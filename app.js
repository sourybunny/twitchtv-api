
var streamers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// var online=[];
// var offline=[];
// start(streamers)
$(document).ready(function(){ 
start(streamers);
})
function start(arr){
arr.forEach(function(streamer){
  // var channel=item;
  var url="https://wind-bow.gomix.me/twitch-api/streams/"+streamer+"/?callback=?";
  $.getJSON(url)
.done(function(data){
  // getStatus(data);
    var channelurl="https://wind-bow.gomix.me/twitch-api/channels/"+streamer+"/?callback=?";
$.getJSON(channelurl)
    .done(function(channeldata){
  getStatus(data,channeldata)
})
})

function getStatus(data,channeldata){
  console.log(data);
 var status;
  var title;
  if(data.stream){
    status='<i style="color:yellow"class=" online fa fa-toggle-on" aria-hidden="true"></i>' ; 
     title="<div> streaming <a target='_blank' class='title' href='"+
      data.stream.channel.url +  "'> "+ data.stream.channel.status +"</a></div>";
    // online.push(streamer);
  }else if(data.stream===null){
    status='<i style="color:#FF5252"class="offline fa fa-toggle-on" aria-hidden="true"></i>';
    title="";
    // offline.push(streamer);
  }else{
    status="Invalid Input. Please try to enter a valid streamer to check status";
    title="";
  }

  // console.log(status);
$("#streamer").append("<li><a target='_blank' class='channel' href='"+channeldata.url+"'>"+streamer+"</a>"+status+" "+title+"</li>")

}
  




  
});//endofforeach
}//endofstart

// clickhandlers
$("#all").click(function(){
$("#streamer>li").css("display","flex");
})
$("#online").click(function(){
  // $("#streamer").empty();
 	$('#streamer > li').each(function(){
		$(this).css('display',"none");
    $('#streamer > li > i.online').parent().css('display',"flex");
		
	})
  // start(online);
})
$("#offline").click(function(){
 
  	$('#streamer > li').each(function(){
		$(this).css('display',"none");
    $('#streamer > li > i.offline').parent().css('display',"flex");
		
	})
})



// newstreamer
var newstreamer=[];
$("#btn").click(function(){
   newstreamer.push($("#add").val());
     start(newstreamer);
})
  $("#add").keypress(function(event){
    if(event.which==13){
      
       newstreamer.push($("#add").val());
     start(newstreamer);
     
      
    }
  })

