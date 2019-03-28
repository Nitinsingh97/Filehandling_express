var fscontroller=require('../contollers/fs');


var express = require('express');

exports.routeApis = function(app){
 app.get('/write', fscontroller.write) 
app.get('/read', fscontroller.read) 
app.get('/delete', fscontroller.delete) 

}
