var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController',function ($scope) {

$scope.messages = [
{
	sender: "BOT",
	text: "hi",
	time: "1:12 pm"
},
{	
	sender: "BOT",
	text: "akdlkkasfdkasdkksdafkalk",
	time: "1:12 pm"
},
{
	sender: "AJAY",
	text: "ajay",
	time: "1:12 pm"
}

];

$scope.sendMessage = function() {
exampleSocket.send($scope.userMessage);
$scope.userMessage = "";
};

var exampleSocket = new WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };
});