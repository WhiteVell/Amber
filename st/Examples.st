Smalltalk current createPackage: 'Examples' properties: #{}!
Object subclass: #BaseTime
	instanceVariableNames: 'time string'
	package: 'Examples'!

!BaseTime methodsFor: 'not yet classified'!

string
	^string
!

string: aString
	string := aString
!

time
	^time
!

time: aTime
	time := aTime
! !

Widget subclass: #Counter
	instanceVariableNames: 'count header'
	package: 'Examples'!
!Counter commentStamp!
This is a trivial Widget example mimicking the classic Counter example in Seaside. 
In order to play with it, just select the doit below and press the Do it button in the far right corner.
Then take a look in the HTML document above the IDE.

        Counter new appendToJQuery: 'body' asJQuery!

!Counter methodsFor: 'actions'!

decrease
    count := count - 1.
    header contents: [:html | html with: count asString]
!

increase
    count := count + 1.
    header contents: [:html | html with: count asString]
! !

!Counter methodsFor: 'initialization'!

initialize
    super initialize.
    count := 0
! !

!Counter methodsFor: 'rendering'!

renderOn: html
    header := html h1 
	with: count asString;
	yourself.
    html button
	with: '++';
	onClick: [self increase].
    html button
	with: '--';
	onClick: [self decrease]
! !

!Counter class methodsFor: 'example'!

tryExample
	"In order to play with the Counter, just select the
	doit below and press the Do it button. Then take a
	look in the HTML document above the IDE."

	"Counter tryExample"
        self new appendToJQuery: 'body' asJQuery
! !

Object subclass: #DateStringParser
	instanceVariableNames: ''
	package: 'Examples'!

!DateStringParser class methodsFor: 'not yet classified'!

dateFromString: aString
	" YYYY-MM-DD_HH:mm--->  Date"
	^Date new 
    	year: (self yearFrom: aString);
        month: (self monthFrom: aString);
        dayOfMonth: (self dayFrom: aString);
        hours: (self hoursFrom: aString);
        minutes: (self minutesFrom: aString).
!

dayFrom: aString
	^(aString copyFrom: 9 to: 10 ) asNumber
!

hoursFrom: aString
	^(aString copyFrom: 12 to: 13 ) asNumber
!

minutesFrom: aString
	^(aString copyFrom: 15 to: 16 ) asNumber
!

monthFrom: aString
	^(aString copyFrom: 6 to: 7 ) asNumber
!

yearFrom: aString
	^(aString copyFrom: 1 to: 4 ) asNumber
! !

Object subclass: #Hello
	instanceVariableNames: 'collection'
	package: 'Examples'!

!Hello methodsFor: 'not yet classified'!

addNewProject
|  taskDate delay|
    taskDate := DateStringParser dateFromString: (( document getElementById: 'input_new_date' ) value, 
    																	' ', 
                                                                        (document getElementById: 'input_new_time') value).
    delay := ( taskDate - Date now ).
    (Date new milliseconds: delay).
    "[window alert: self printMessage ] valueWithTimeout: delay."
    
     [self notification] valueWithTimeout: delay.
     
   	"'#print_new_task' asJQuery after: '<p>', taskDate, ': waiting - ' , delay , '</p>'."
!

collection
	collection ifNil: [ collection := Array new].
    ^collection
!

notification
   | dtTask |
   dtTask := Data now.
  	(window confirm: self printMessage ) ifTrue: [
		window alert: dtTask]
  	 	ifFalse: [ window alert: 'taskData'].
!

printMessage
| msg noteTask |
    msg := ( document getElementById: 'input_new_task', '\n', 'NoteTask' ) value.
    "noteTask := ( document getElementById: 'NoteTask' ) value." 
	^msg
!

startApp
    '#print_new_task' asJQuery click: [ self addNewProject ].
! !

