What is HTML and what is its purpose?
	HTML is Hyper Text Marup Langauage. It is used to structure a web page and its content.

What is the difference between HTML and XHTML?
	HTML: Hyper Text Markup Language
	XHTML: Extensible Hyper Text Markup Language

	HTML: case not sensitive.
	XHTML: case sensitive

	HTML: extension is .html
	XHTML: extension is .xhtml

What are the new features introduced in HTML5?
	We can add audio and video
	HTML5 introduced set of new semantic elements like <header>,<footer>,<nav>,<articel>,<section>
	We can link multiple wepages
	Platform Independent

How do you include comments in HTML?
	By using: <!--  ......  -->

Explain the difference between <div> and <span> tags?
	<div> is a block level tag
	<span> is an inline level tag

	<div> is used in HTML to make division of content on the web page
	<span> is used to group elements for styling purposes


What are semantic elements in HTML5 and why are they important?
	Semantic elements describes the struture and content of the web page. 

	Semantic elements help the users to understand the structure and purpose of the content.
	Using semantic elements  can help search engines better and improve its visibilty in search results.
	It is used for accessbility, maintainbility of web pages.

What is the purpose of the <header>, <nav>, <section>, and <footer> tags in HTML5?
	<header>: Defines the top part of a web page.
	<nav>: It use to define a section that contains navigation links. That helps the user to move around different part of the website.
	<section>: It is use to group related content together within in a webpage.
	<footer>: It defines the bottom part of the wepage. It provides supplimentary information.

How do you create a hyperlink in HTML?
	To create a hyperlink in HTML page, we use <a> and </a> tags
	Like: <a href="URL"> Text </a>

What is the difference between <ol> and <ul> elements?
	<ol> is orderd list
	<ul> is unorderd list

	<ol> list item is automatically assigned a number
	<ul> list item is automatically assigned in a bulleted list

	Syntax: <ol>
				<li> First</li>
				<li> First</li>
			</ol>

			<ul>
				<li> Apple</li>
				<li> Orange</li>
			</ul>

How do you embed an image in HTML?
	To embed an image in HTML, we can use <img> tag
	Syntax: <img src="image.jpg">

Explain the difference between the <strong> and <em> tags?
	<strong> tag make the text as bold
	<em> tag makes the text as italic

How do you create a table in HTML?
	We use <table> tag to create table in HTML

What is the purpose of the <form> tag in HTML and how do you create a form?
	<form> help us to send information from our local html file to server.

	Creating a form:
	<form>
		<input type="text">
	</form>

What are some new input types introduced in HTML5?
	date: This input display a calender
	number: It alllows to enter numeric values
	email: This input type is to enter email address
	range: This input type is used to select a value from a specified range

How do you include audio and video content in HTML?
	We can add audio and video content in HTML using <audio> and <video> element 
	<audio  src="audio.mp3" controls>
	<video src="video.mp3" controls>

What is the purpose of the <iframe> tag and how is it used?
	<iframe> tage is used to embed any other document like pdf, audio and video into html.
	<iframe src="URL" height=""> </iframe>

How do you add CSS styles to HTML elements?
	We can add CSS styles to HTML elements in 3 ways:
	1. Inline CSS
	2. Internal CSS
	3. External CSS

What is the role of the alt attribute in <img> tags?
	alt attribute is used to give information to search engine about the image which we are using.

How do you create a numbered list with custom numbering styles in HTML?
	Using <ol></ol> tag and define the list item using <li></li>.

What is the difference between <script async> and <script defer>?
	<scrip async> allows or script to run as soo as its loaded, without blocking other elements on the page.
	<script defer> our script will only execute after the page has finished loading.

What is responsive web design, and why is it important?
 	Responsive web design is about using HTML and CSS to automatically resize a website.
	It makes our websites content to look great in all devices.And it makes makes website faster and easier to navigate. 

How do you make a website responsive using CSS?
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
Explain the difference between a fluid layout and a fixed layout in terms of responsiveness.
	Fluid layout is a layout in which we fix the width of the page to a given size.
	Fixed layout is width and its elements arrange through the screen resolutions.

How do you make images responsive in CSS?
	To make images resonsive in CSS by changing the width of the image. Setting the width makes the image to adapt to its conatiner.

What are breakpoints in responsive design, and how are they determined?
	
How can you hide elements on specific screen sizes using CSS?
	Use display property set it to none.
	
What is the purpose of the max-width property in responsive CSS?
	It sets the maximum width of an element.
	
How do you create a responsive navigation menu using CSS?
	<nav>
		<ul class="menu">
			<li>..</li>
			<li>..</li>
		</ul>
	</nav>
	
Explain the concept of mobile-first design and how it relates to responsive CSS.
	Mobile First design is an approach where we design and build a website or application starting from the mobile version and then enhance it for larger screens.

What is CSS Flexbox, and what problem does it solve?
	Flexbox helps to organize and arrange elements either in rows or columns.

Explain the difference between flex container and flex items.
	A flex container is an HTML element whose display property's value is flex.
	A flex items within a flex container, which is creted using the CSS.

How do you create a flex container in CSS?
	<div class="flex-container">....</div>

How do you specify the direction of flex items within a flex container?
	Adding the flex-direction property to the flex container.

What is the purpose of the flex-grow, flex-shrink, and flex-basis properties?
	flex-grow: Specifies how much the item will grow to fill the available space along with the main axis of the flex container.
	flex-shrink: Controls the ability of a flex item to shrink if there is not enough space along with the main axis of the flex container.
	flex-basis: This property sets the initial size of a flex item before any remaining space is distributed.

How do you align flex items horizontally and vertically within a flex container?
	.flex-container{
		display:flex;
		justify-content:center;
		align-items: center;
	}

Explain the difference between justify-content and align-items properties in Flexbox.
	justify-content property adds the margin around and between items along the flex conatainer's x-axis.
	align-items property sets the items on the y-axis in the flexbox.

How can you control the order of flex items using CSS Flexbox?
	We can control the order of flex items within a flex container using the order property.

40. What are flexbox breakpoints, and how can they be used for responsive design?
41. What are HTML attributes?
	Attributes which provides some additional information about the element.

Explain the difference between global attributes and element-specific attributes in HTML?
	
How do you add attributes to an HTML element?
	At the beginning of the tag, add attributes.

What is the purpose of the id attribute in HTML, and how is it unique?
	Specifies unique id for an HTML element. 

What is the difference between the class attribute and the id attribute?
	Id attribute can only apply to one element.
	Class attributes can apply for a group of element.

Explain the role of the href attribute in HTML, particularly in the context of links and anchors.
	href specifies the URL of the page the link goes to.

How do you add alternative text to an image using the alt attribute?
	<img src="car.jpg",height='300',alt='Audi car'>

What is the purpose of the target attribute in HTML links, and what are its possible values?
	target attribute in HTML opens the linked document in a new window or tab.

How do you use the src attribute to embed an external resource, such as an image or video, in HTML?
	<img src="image.jpg">
	<video src="video.mp4"

What is the purpose of the disabled attribute, and how is it used in HTML form elements?
	Disabled attribute it specifies that the element should be disabled. <input disabled>

Is there any relation between Java and JavaScript?
	Java and Javascript are two distinct programming language with different purposes, synatx and use cases.

Is JavaScript a compiled or interpreted language?
	Javascript generally considered as interpreted language. When we write Javascript code, it is executed by an interpreter in a web browser.

Is JavaScript a case-sensitive language?
	Yes, Javascript a case sensitive language.

What is nodejs?
	Nodejs is asoftware to run a javascript.

What is the difference between let and var?
	let is a local variable. Which declared inside the block
	var is global variable. which is declared within the function in which they are defined

What are the differences between undeclared and undefined variables?
	Undeclared variables are those that have not been declared 
	Undefined variables are declared, but no value has been assigned

What is Hoisting?
	Hositing is the property in Javascript that move all the declaration on the top of the script.

What is scope in javascript?
	Scope is the area of code where a variable exists and accessible.

What are reserved words? Can I use reserved words as identifiers
	Reserved Words are predefined terms that has special meanings and purposes.
	These words are reserved by the languages itself and cannot be used as identifiers

Why do you need strict mode? How do you declare strict mode?

What are global variables?
	Global Variable which is declared outside the block.

What are the problems with global variables?

What is NaN property?
	NaN is a Not a Number. It indicates mathematical operation or function resulted in a value that is not a valid number.

What is the purpose of delete operator?
	Delete operator is used to remove a element from an array.

What is the difference between null and undefined?
	null is a variable is has been set to no value
	undefined is variable is declared, but no value has been assigned

What are the bitwise operators available in javascript?
	Bitwise AND(&)
	Bitwise OR(|)
	Bitwise NOT(~)

 Can I redeclare let and const variables?
	We cannot redeclare let and const variables within the same scope.

Does const variable makes the value immutable?
	const variable does not make itself immutable.
	

What is ES6? List down some of the features of ES6?
	ES6 stands for ECMAScript 6. Which was created to standardize Javascript.
	Features: ES6 intoduces several key like const,let,arrow function, template literals.


What is the difference between slice and splice?
	Slice: Slice which create a sub array from an array. It will not change the original array.
	Splice: Splice which is used to add and remove elements from the array. It modifies the original array.

What is the difference between 
	a. == and === operators
	b. = and == 
	c. %= and =

	a. == operator which compares the values
	   === operator which compares the values and its type

	b. = operator which assaigns the values
	   == operator which compares the values

	c. %= operator is a short hand method which performs the moduls operation and assignment in a single step
	   = operator which assaigns the values

What is a higher order function?
	High Order Function is a function which takes another function as a parameter
								or
	A function which returns other function

What is the currying function?
	
What are arrow functions?
	We can write function without function keyword instead we use arrow.

What is a spread operator?
	Spread operator takes array and expands it into individual elements.

What is a rest parameter?
	It allow a function to accept an any number of arguments as an aray.

What happens if you do not use rest parameter as a last argument?
	It will result to a syntax error.

What are regular expression patterns?
	Regular expression patterns are commonly known as regex patterns, are sequence of characters that define a search pattern.

What is a Regular Expression?
	Regular Experssion which are used to match character combinations in strings.
	
How do you search a string for a patterns?
	We can search a string for a patterns using regular expression.

What is the purpose of switch-case?
	Used to perform different actions based on multiple possible values of an expression.

What are the conventions to be followed for the usage of swtich case?
	Convention to be followed for the usage of switch case:
	Indentation, Case formating, Break statement, Default Case

What are primitive data types?
	Primitive data types represents simple values and immutable which means their values cannot be changed once they are created.

Different ways which create infinite loops
	while(true)
	for(;;)

What are template literals?
	Template literals are enclosed by brackets ('') instead of single or double quotes.

What are default values in destructuring assignment?
	undefined or null

How do you swap variables in destructuring assignment?

Is that possible to use expressions in switch cases?
	switch case allow for the use expression as case values.  