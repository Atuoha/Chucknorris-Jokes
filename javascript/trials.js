// var txt = String(new Array(2,4));


// var txt;

// txt = parseInt(Math.random() * 20);

// console.log(txt);
// console.log(typeof txt);
// console.log(txt.toFixed(1));


// const firstName = 'John, is a boss';
// const lastName = 'Doe';
// const middleName = 'Phil'
// let val;

// val = firstName.concat(' ',lastName,' ',middleName);

// val = firstName.toLowerCase();

// val = firstName.indexOf('J');

// val = firstName.lastIndexOf('n');

// val = firstName.charAt(2);

// val = firstName.charAt(firstName.length-1);

// val = firstName[0];

// val = firstName.slice(0,3);


// val = firstName.split(',');

// val = firstName.replace(',','');

// val = firstName.includes('ss');


// const name = 'John Doe';
// const age = 20;
// const city = 'Port Harcourt';
// const job = 'Full Stack Web/Software Developer | Writer'
// let html;


// html = "<ul>"+
// 		  	"<li> <b>Name: </b>"  + name + "</li>"+
// 			"<li> <b>Age:  </b>"  + age  + "</li>"+
// 			"<li> <b>City: </b>"  + city + "</li>"+
// 			"<li> <b>Job:  </b>"  + job  + "</li>"+
// 		"</ul>";


// // html = `
// // 		<ul>
// // 		<li>Name: ${name}</li>
// // 		<li>Age: ${age}</li>
// // 		<li>City: ${city}</li>
// // 		<li>Job: ${job}</li>
// // 		<ul>

// 		`

// var array = [2,4,5,3];

// array.pop();
// array.push(4,43,1)


// let array = [
// 	{Name: 'John',Age: 34,City: 'Ph'},
// 	{Name: 'Jane',Age: 14,City: 'Owerri'},
// 	{Name: 'Steve',Age: 12,City: 'Enugu'}

// ];

// array = {
// 	Name: 'John',
// 	Age: 34
// }

// for (var i = 0; i < array.length; i++) {
// 	document.write(array[i] + ' ');
// }


// val = new Date();


// document.body.innerHTML = val;

// console.log(firstName + ' ' + lastName);

// let color  = 'green';


// switch(color){

// 	case 'red':
// 		console.log('Yeah it\'s red cool');
// 	break;	
	
// 	case 'blue':
// 		console.log('Yeah it\'s blue cool');
// 	break;

// 	default:
// 	console.log('It\'s no color cool');
// 	break;	
	
// }


// let arrays  = ['Venza','Ford','Toyota','Sound'];

// arrays.forEach(function(array){
// 	console.log(array);
// });

// let users = [
// 	{id:1,name:'John'},
// 	{id:2,name:'Phil'},
// 	{id:33,name:'Jane'},

// ];

// let ids = users.map(function(user){
// 	return user.name;
// });

// console.log(ids);


// let user = {
// 	name:'John',
// 	lastName : 'Doe',
// 	age : 43
// }

// for(let x in user){
// 	console.log(`${x}:${user[x]}`);
// }

// const input = prompt('Enter your age here:');

// alert(input)

// const quest = confirm('Do you like my sense of humour?');

// if(quest)
// 	alert('Sure persin');
// else
// 	alert('Ishi aki!');


// val = window.outerHeight;
// val = window.outerWidth;

// val = window.innerHeight;
// val = window.innerWidth;

// val = window.scrollY;
// val = window.scrollX;

// val = window.location; 

// // window.history.go(-6);
// val = window.navigator;


// END OF FUNDAMENTALS








// BEGINNING OF REAL WORK

// let val;

// val = document.all;
// val = document.all[1];

// val = document.scripts[2].getAttribute('src');

// val = document.links[0].className;

// val = document.forms[0].action;

// val = {
// 	name: 'John',
// 	age: 55
// }

// for(x in val){
// 	console.log(`${x}: ${val[x]}`);
// }

// let scripts;
// scripts = document.scripts;

// scripts = Array.from(scripts);

// scripts.forEach(function(scripts){
// 	console.log(scripts);
// })


// document.getElementById('task-title').style.color = 'gold';
// document.getElementById('task-title').style.background = 'black';
// document.getElementById('task-title').style.padding = '10px';

// let task_text = document.getElementById('task-title');

// task_text.innerText = 'Tasks overviewed';

// task_text.textContent = 'Tasks Ahead';

// document.querySelector('#task-title').style.color = 'red';

// let items = document.getElementsByClassName('collection-item');

// items = Array.from(items);

// items.reverse();

// items.forEach(function(item,index){
// 	console.log(item);

// 	item.textContent = 	`${index}: heloo`;
// })

// let items = document.querySelectorAll('li');
  
// items = Array.from(items);

// items.reverse();

// items.forEach(function(item,i){
// 	console.log(item);
// 	item.innerText = `${i}: Yeah mehn!`
// })

// for(let i = 0; i < items.length; i++){
// 	console.log(items[i]);
// 	items[i].innerText = 'I thought you won\'t work! '
// }


// console.log(items);


// let val;

// const list =  document.querySelector('ul.collection');
// const listitem = document.querySelector('li.collection-item:first-child');

// val = list.children;
// val = list.children[0].innerText = 'God works!';

// val = Array.from(val);
// val.forEach(function(x){
// 	x.innerText = 'I can with God';
// 	console.log(x);

// });

// for(let i = 0; i < val.length; i ++){
// 	val[i].innerText = 'With Him Forever';
// 	console.log(val[i]);
// }
// val = list.children[0].children;

// val = list.lastElementChild;

// val = listitem.parentNode;

// val = listitem.parentElement.parentElement;

// val = listitem.nextSibling;

// let li = document.createElement('li');

// li.className = ('collection-item');
// li.id = 'new-item';

// li.title = 'DOM created element';

// li.setAttribute('free','Yes');

// // li.innerText = '<a href="www.Heisawesome.com">He will Guide me through all</a>';

// li.appendChild(document.createTextNode('Blessed Item'));

// document.querySelector('ul.collection').appendChild(li);

// const link = document.createElement('a');

// link.className = 'delete-item secondary-content';

// let font = document.createElement('i');

// font.className = 'fa fa-remove';

// link.appendChild(font);

// li.appendChild(link);

// val = document.querySelectorAll('.delete-item');

// let heading = document.createElement('h3');

// heading.id = 'task-title';
// heading.appendChild(document.createTextNode('Tasks--'))

// let h5 = document.querySelector('h5#task-title');

// let cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(heading,h5);

// // cardAction.removeChild(heading)

// let lis = document.querySelector('li:first-child');

// let a = lis.children[0];

// let xl = a.classList.add('test','sure');

// let ats = a.getAttribute('href');

// ats = a.setAttribute('target','_blank');

// ats = a.setAttribute('href','some links mehn!')

// val = a;


// console.log(val)


// document.querySelector('.clear-tasks').addEventListener('click',function(event){
// 		event.preventDefault();
// 		this.innerText = '...WAIT WHILE IT PROCESSES';
// 		this.style.color = 'red';
// 		this.style.background = '#f4f4';

// 		let val;

// 		val = event['target'];

// 		val = event.clientY;

// 		val = event.offsetX;

// 		console.log(val);
// })

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click',runEvents);
// clearBtn.addEventListener('dblclick',runEvents);
// clearBtn.addEventListener('mousedown',runEvents);
// clearBtn.addEventListener('mouseup',runEvents);

// card.addEventListener('mouseenter',runEvents);
// card.addEventListener('mouseleave',runEvents);
// card.addEventListener('mouseover',runEvents);
// card.addEventListener('mouseout',runEvents);
// card.addEventListener('mousemove',runEvents);

// function runEvents(e){
// 	e.preventDefault();
// 	heading.textContent = `MouseX: ${e.offsetX} | MouseY: ${e.offsetY}`;
// 	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40)`;
	// console.log(`Event Type: ${e.type}`);
// }

// const form =  document.querySelector('form');
// const input = document.getElementById('task');
// const btn = document.getElementById('add_task');
// const select = document.querySelector('select');

// form.addEventListener('submit',formEvent);

// input.addEventListener('keydown',formEvent);
// input.addEventListener('keyup',formEvent);
// input.addEventListener('keypress',formEvent);
// input.addEventListener('focus',formEvent);
// input.addEventListener('blur',formEvent);
// input.addEventListener('copy',formEvent);
// input.addEventListener('cut',formEvent);
// input.addEventListener('paste',formEvent);
// input.addEventListener('input',formEvent);
// select.addEventListener('change',formEvent);




// function formEvent(e){
	// e.preventDefault();
	// console.log(`Event Type: ${e} `);
	// console.log(input.value);
	// document.getElementById('para_para').innerText = input.value;
	// console.log(e.target.value);
	// btn.setAttribute('value','...Submitting record');
	// btn.style.background = '#f4f4';
	// btn.classList.add('red', 'accent-4');

// }


// const card_tits = document.querySelector('.card-title');

// card_tits.addEventListener('click',function(e){
// 	console.log(e.target);
// })

// document.querySelector('.delete-item').addEventListener('click',function(){
// 	console.log('Catch Yeh!');
// })

//------ CREATING NEW ITEM FORM SCRATCH ------


// const font = document.createElement('i');

// font.className = ('fa fa-remove');

// const a =  document.createElement('a');

// a.classList.add('delete-item','secondary-content');

// a.appendChild(font);

// const txt = document.createElement('li');

// txt.innerText = 'Link item';
// txt.classList.add('collection-item');

// txt.appendChild(a);


// document.querySelector('.collection').appendChild(txt);


//------ CREATING NEW ITEM FORM SCRATCH ------







// document.body.addEventListener('click',fEvent);

// function fEvent(e){

// 	if(e.target.parentElement.classList.contains('delete-item')){
// 		if(confirm('Do you want to remove task?') == 1){
// 			e.target.parentElement.parentElement.remove();		
// 		}
// 	}
// }

// document.querySelector('form').addEventListener('submit',function(e){
	
// 	e.preventDefault();
// 	const input = document.getElementById('task').value;

// 	let tasks;

// 	if(localStorage.getItem('tasks') == null){
// 		tasks = [];
// 	}else{
// 		tasks = JSON.parse(localStorage.getItem('tasks'));
// 	}

// 	localStorage.setItem('tasks',input);
// 	console.log(tasks);


// })














// Set local storage
// localStorage.setItem('Name','John Doe');

// set session storage
// sessionStorage.setItem('Company','Atutechs Corp')

// const name = localStorage.getItem('Name');
// localStorage.clear();
// console.log(name);