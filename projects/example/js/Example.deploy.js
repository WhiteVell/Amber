smalltalk.addPackage('Example', {});
smalltalk.addClass('BaseTime', smalltalk.Object, ['time', 'string'], 'Example');
smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@string"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.BaseTime)})},
messageSends: []}),
smalltalk.BaseTime);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@string"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.BaseTime)})},
messageSends: []}),
smalltalk.BaseTime);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@time"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{}, smalltalk.BaseTime)})},
messageSends: []}),
smalltalk.BaseTime);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
fn: function (aTime){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@time"]=aTime;
return self}, function($ctx1) {$ctx1.fill(self,"time:",{aTime:aTime}, smalltalk.BaseTime)})},
messageSends: []}),
smalltalk.BaseTime);



smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Example');
smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{}, smalltalk.Counter)})},
messageSends: ["-", "contents:", "with:", "asString"]}),
smalltalk.Counter);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{}, smalltalk.Counter)})},
messageSends: ["+", "contents:", "with:", "asString"]}),
smalltalk.Counter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Counter)})},
messageSends: ["initialize"]}),
smalltalk.Counter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=_st(html)._h1();
_st($1)._with_(_st(self["@count"])._asString());
$2=_st($1)._yourself();
self["@header"]=$2;
$3=_st(html)._button();
_st($3)._with_("++");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._increase();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("--");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._decrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Counter)})},
messageSends: ["with:", "asString", "h1", "yourself", "button", "onClick:", "increase", "decrease"]}),
smalltalk.Counter);


smalltalk.addMethod(
"_tryExample",
smalltalk.method({
selector: "tryExample",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{}, smalltalk.Counter.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.Counter.klass);


smalltalk.addClass('DateStringParser', smalltalk.Object, [], 'Example');

smalltalk.addMethod(
"_dateFromString_",
smalltalk.method({
selector: "dateFromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Date || Date))._new();
_st($2)._year_(_st(self)._yearFrom_(aString));
_st($2)._month_(_st(self)._monthFrom_(aString));
_st($2)._dayOfMonth_(_st(self)._dayFrom_(aString));
_st($2)._hours_(_st(self)._hoursFrom_(aString));
$3=_st($2)._minutes_(_st(self)._minutesFrom_(aString));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"dateFromString:",{aString:aString}, smalltalk.DateStringParser.klass)})},
messageSends: ["year:", "yearFrom:", "new", "month:", "monthFrom:", "dayOfMonth:", "dayFrom:", "hours:", "hoursFrom:", "minutes:", "minutesFrom:"]}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_dayFrom_",
smalltalk.method({
selector: "dayFrom:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((9),(10)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dayFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
messageSends: ["asNumber", "copyFrom:to:"]}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_hoursFrom_",
smalltalk.method({
selector: "hoursFrom:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((12),(13)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hoursFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
messageSends: ["asNumber", "copyFrom:to:"]}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_minutesFrom_",
smalltalk.method({
selector: "minutesFrom:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((15),(16)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"minutesFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
messageSends: ["asNumber", "copyFrom:to:"]}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_monthFrom_",
smalltalk.method({
selector: "monthFrom:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((6),(7)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"monthFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
messageSends: ["asNumber", "copyFrom:to:"]}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_yearFrom_",
smalltalk.method({
selector: "yearFrom:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((1),(4)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"yearFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
messageSends: ["asNumber", "copyFrom:to:"]}),
smalltalk.DateStringParser.klass);


smalltalk.addClass('Hello', smalltalk.Object, ['collection'], 'Example');
smalltalk.addMethod(
"_addNewProject",
smalltalk.method({
selector: "addNewProject",
fn: function (){
var self=this;
var taskDate,delay;
return smalltalk.withContext(function($ctx1) { var $1;
taskDate=_st((smalltalk.DateStringParser || DateStringParser))._dateFromString_(_st(_st(_st(_st(document)._getElementById_("input_new_date"))._value()).__comma(" ")).__comma(_st(_st(document)._getElementById_("input_new_time"))._value()));
delay=_st(taskDate).__minus(_st((smalltalk.Date || Date))._now());
_st(_st((smalltalk.Date || Date))._new())._milliseconds_(delay);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._whatToDoMessage();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(delay);
$1=_st(delay).__lt_eq((0));
if(smalltalk.assert($1)){
_st(self)._whatToDoMessage();
};
return self}, function($ctx1) {$ctx1.fill(self,"addNewProject",{taskDate:taskDate,delay:delay}, smalltalk.Hello)})},
messageSends: ["dateFromString:", ",", "value", "getElementById:", "-", "now", "milliseconds:", "new", "valueWithTimeout:", "whatToDoMessage", "ifTrue:", "<="]}),
smalltalk.Hello);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@collection"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@collection"]=_st((smalltalk.Array || Array))._new();
self["@collection"];
} else {
$1;
};
$2=self["@collection"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.Hello)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.Hello);

smalltalk.addMethod(
"_printMessage",
smalltalk.method({
selector: "printMessage",
fn: function (){
var self=this;
var msg;
return smalltalk.withContext(function($ctx1) { var $1;
msg=_st(_st(document)._getElementById_("input_new_task"))._value();
$1=msg;
return $1;
}, function($ctx1) {$ctx1.fill(self,"printMessage",{msg:msg}, smalltalk.Hello)})},
messageSends: ["value", "getElementById:"]}),
smalltalk.Hello);

smalltalk.addMethod(
"_startApp",
smalltalk.method({
selector: "startApp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st("#print_new_task")._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._addNewProject();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"startApp",{}, smalltalk.Hello)})},
messageSends: ["click:", "addNewProject", "asJQuery"]}),
smalltalk.Hello);

smalltalk.addMethod(
"_whatToDoMessage",
smalltalk.method({
selector: "whatToDoMessage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(window)._confirm_("Declare ");
if(smalltalk.assert($1)){
_st(window)._open_("http://ya.ru");
} else {
_st(window)._alert_(_st(_st(self)._printMessage()).__comma("2"));
};
return self}, function($ctx1) {$ctx1.fill(self,"whatToDoMessage",{}, smalltalk.Hello)})},
messageSends: ["ifTrue:ifFalse:", "open:", "alert:", ",", "printMessage", "confirm:"]}),
smalltalk.Hello);



