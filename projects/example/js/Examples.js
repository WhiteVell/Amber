smalltalk.addPackage('Examples', {});
smalltalk.addClass('BaseTime', smalltalk.Object, ['time', 'string'], 'Examples');
smalltalk.addMethod(
"_string",
smalltalk.method({
selector: "string",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@string"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{}, smalltalk.BaseTime)})},
args: [],
source: "string\x0a\x09^string",
messageSends: [],
referencedClasses: []
}),
smalltalk.BaseTime);

smalltalk.addMethod(
"_string_",
smalltalk.method({
selector: "string:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@string"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString}, smalltalk.BaseTime)})},
args: ["aString"],
source: "string: aString\x0a\x09string := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.BaseTime);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@time"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{}, smalltalk.BaseTime)})},
args: [],
source: "time\x0a\x09^time",
messageSends: [],
referencedClasses: []
}),
smalltalk.BaseTime);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
category: 'not yet classified',
fn: function (aTime){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@time"]=aTime;
return self}, function($ctx1) {$ctx1.fill(self,"time:",{aTime:aTime}, smalltalk.BaseTime)})},
args: ["aTime"],
source: "time: aTime\x0a\x09time := aTime",
messageSends: [],
referencedClasses: []
}),
smalltalk.BaseTime);



smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.Counter.comment="This is a trivial Widget example mimicking the classic Counter example in Seaside. \x0aIn order to play with it, just select the doit below and press the Do it button in the far right corner.\x0aThen take a look in the HTML document above the IDE.\x0a\x0a        Counter new appendToJQuery: 'body' asJQuery"
smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{}, smalltalk.Counter)})},
args: [],
source: "decrease\x0a    count := count - 1.\x0a    header contents: [:html | html with: count asString]",
messageSends: ["-", "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{}, smalltalk.Counter)})},
args: [],
source: "increase\x0a    count := count + 1.\x0a    header contents: [:html | html with: count asString]",
messageSends: ["+", "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Counter)})},
args: [],
source: "initialize\x0a    super initialize.\x0a    count := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["html"],
source: "renderOn: html\x0a    header := html h1 \x0a\x09with: count asString;\x0a\x09yourself.\x0a    html button\x0a\x09with: '++';\x0a\x09onClick: [self increase].\x0a    html button\x0a\x09with: '--';\x0a\x09onClick: [self decrease]",
messageSends: ["with:", "asString", "h1", "yourself", "button", "onClick:", "increase", "decrease"],
referencedClasses: []
}),
smalltalk.Counter);


smalltalk.addMethod(
"_tryExample",
smalltalk.method({
selector: "tryExample",
category: 'example',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{}, smalltalk.Counter.klass)})},
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22Counter tryExample\x22\x0a        self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.Counter.klass);


smalltalk.addClass('DateStringParser', smalltalk.Object, [], 'Examples');

smalltalk.addMethod(
"_dateFromString_",
smalltalk.method({
selector: "dateFromString:",
category: 'not yet classified',
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
args: ["aString"],
source: "dateFromString: aString\x0a\x09\x22 YYYY-MM-DD_HH:mm--->  Date\x22\x0a\x09^Date new \x0a    \x09year: (self yearFrom: aString);\x0a        month: (self monthFrom: aString);\x0a        dayOfMonth: (self dayFrom: aString);\x0a        hours: (self hoursFrom: aString);\x0a        minutes: (self minutesFrom: aString).       ",
messageSends: ["year:", "yearFrom:", "new", "month:", "monthFrom:", "dayOfMonth:", "dayFrom:", "hours:", "hoursFrom:", "minutes:", "minutesFrom:"],
referencedClasses: ["Date"]
}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_dayFrom_",
smalltalk.method({
selector: "dayFrom:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((9),(10)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dayFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
args: ["aString"],
source: "dayFrom: aString\x0a\x09^(aString copyFrom: 9 to: 10 ) asNumber",
messageSends: ["asNumber", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_hoursFrom_",
smalltalk.method({
selector: "hoursFrom:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((12),(13)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hoursFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
args: ["aString"],
source: "hoursFrom: aString\x0a\x09^(aString copyFrom: 12 to: 13 ) asNumber",
messageSends: ["asNumber", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_minutesFrom_",
smalltalk.method({
selector: "minutesFrom:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((15),(16)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"minutesFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
args: ["aString"],
source: "minutesFrom: aString\x0a\x09^(aString copyFrom: 15 to: 16 ) asNumber",
messageSends: ["asNumber", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_monthFrom_",
smalltalk.method({
selector: "monthFrom:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((6),(7)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"monthFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
args: ["aString"],
source: "monthFrom: aString\x0a\x09^(aString copyFrom: 6 to: 7 ) asNumber",
messageSends: ["asNumber", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.DateStringParser.klass);

smalltalk.addMethod(
"_yearFrom_",
smalltalk.method({
selector: "yearFrom:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._copyFrom_to_((1),(4)))._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"yearFrom:",{aString:aString}, smalltalk.DateStringParser.klass)})},
args: ["aString"],
source: "yearFrom: aString\x0a\x09^(aString copyFrom: 1 to: 4 ) asNumber",
messageSends: ["asNumber", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.DateStringParser.klass);


smalltalk.addClass('Hello', smalltalk.Object, ['collection'], 'Examples');
smalltalk.addMethod(
"_addNewProject",
smalltalk.method({
selector: "addNewProject",
category: 'not yet classified',
fn: function (){
var self=this;
var taskDate,delay;
return smalltalk.withContext(function($ctx1) { taskDate=_st((smalltalk.DateStringParser || DateStringParser))._dateFromString_(_st(_st(_st(_st(document)._getElementById_("input_new_date"))._value()).__comma(" ")).__comma(_st(_st(document)._getElementById_("input_new_time"))._value()));
delay=_st(taskDate).__minus(_st((smalltalk.Date || Date))._now());
_st(_st((smalltalk.Date || Date))._new())._milliseconds_(delay);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._notification();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(delay);
return self}, function($ctx1) {$ctx1.fill(self,"addNewProject",{taskDate:taskDate,delay:delay}, smalltalk.Hello)})},
args: [],
source: "addNewProject\x0a|  taskDate delay|\x0a    taskDate := DateStringParser dateFromString: (( document getElementById: 'input_new_date' ) value, \x0a    \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09' ', \x0a                                                                        (document getElementById: 'input_new_time') value).\x0a    delay := ( taskDate - Date now ).\x0a    (Date new milliseconds: delay).\x0a    \x22[window alert: self printMessage ] valueWithTimeout: delay.\x22\x0a    \x0a     [self notification] valueWithTimeout: delay.\x0a     \x0a   \x09\x22'#print_new_task' asJQuery after: '<p>', taskDate, ': waiting - ' , delay , '</p>'.\x22",
messageSends: ["dateFromString:", ",", "value", "getElementById:", "-", "now", "milliseconds:", "new", "valueWithTimeout:", "notification"],
referencedClasses: ["DateStringParser", "Date"]
}),
smalltalk.Hello);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'not yet classified',
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
args: [],
source: "collection\x0a\x09collection ifNil: [ collection := Array new].\x0a    ^collection",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Hello);

smalltalk.addMethod(
"_notification",
smalltalk.method({
selector: "notification",
category: 'not yet classified',
fn: function (){
var self=this;
var dtTask;
return smalltalk.withContext(function($ctx1) { var $1;
dtTask=_st((smalltalk.Date || Date))._now();
$1=_st(window)._confirm_(_st(self)._printMessage());
if(smalltalk.assert($1)){
_st(window)._alert_(dtTask);
} else {
_st(window)._alert_("taskData");
};
return self}, function($ctx1) {$ctx1.fill(self,"notification",{dtTask:dtTask}, smalltalk.Hello)})},
args: [],
source: " notification\x0a   | dtTask |\x0a   dtTask := Date now.\x0a  \x09(window confirm: self printMessage ) ifTrue: [\x0a\x09\x09window alert: dtTask]\x0a  \x09 \x09ifFalse: [ window alert: 'taskData'].",
messageSends: ["now", "ifTrue:ifFalse:", "alert:", "confirm:", "printMessage"],
referencedClasses: ["Date"]
}),
smalltalk.Hello);

smalltalk.addMethod(
"_printMessage",
smalltalk.method({
selector: "printMessage",
category: 'not yet classified',
fn: function (){
var self=this;
var msg,noteTask;
return smalltalk.withContext(function($ctx1) { var $1;
msg=_st(_st(document)._getElementById_(_st(_st("input_new_task").__comma("\x5cn")).__comma("NoteTask")))._value();
$1=msg;
return $1;
}, function($ctx1) {$ctx1.fill(self,"printMessage",{msg:msg,noteTask:noteTask}, smalltalk.Hello)})},
args: [],
source: "printMessage\x0a| msg noteTask |\x0a    msg := ( document getElementById: 'input_new_task', '\x5cn', 'NoteTask' ) value.\x0a    \x22noteTask := ( document getElementById: 'NoteTask' ) value.\x22 \x0a\x09^msg",
messageSends: ["value", "getElementById:", ","],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
"_startApp",
smalltalk.method({
selector: "startApp",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st("#print_new_task")._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._addNewProject();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"startApp",{}, smalltalk.Hello)})},
args: [],
source: "startApp\x0a    '#print_new_task' asJQuery click: [ self addNewProject ].",
messageSends: ["click:", "addNewProject", "asJQuery"],
referencedClasses: []
}),
smalltalk.Hello);



