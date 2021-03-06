var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    resultBtn = document.getElementById('result'),
    howWorkBtn = document.getElementById('howWorkBtn'),
    MemoryCurrentNumber = 0;
    MemoryNewNumber = false,
    MemoryPendingOperation = '',
    operationsList = document.getElementById('operationsList');


for (var i=0; i<numbers.length; i++) {
	var number = numbers[i];
	number.addEventListener('click', function (e) {
	numberPress(e.target.textContent);
   });
};

for (var i=0; i<operations.length; i++) {
	var operationBtn = operations[i];
	operationBtn.addEventListener('click', function (e) {
	operation(e.target.textContent);
   });
};

for (var i=0; i<clearBtns.length; i++) {
	var clearBtn = clearBtns[i];
	clearBtn.addEventListener('click',  function (e) {
		 clear(e.srcElement.id);
    });
};


decimalBtn.addEventListener('click', decimal);
	
resultBtn.addEventListener('click', result);

howWorkBtn.addEventListener('click', howWork);
	


function numberPress(number) {
	if (MemoryNewNumber) {
		display.value = number;
		MemoryNewNumber = false;
	} else {
	if (display.value === '0') {
		display.value = number;
	} else {
	display.value += number;
   };
  };
};

function operation(op) {
	var localOperationMemory = display.value;

	if (MemoryNewNumber && MemoryPendingOperation !== '=') {
		display.value = MemoryCurrentNumber;
	} else {
		MemoryNewNumber = true;
		if (MemoryPendingOperation === '+') {
			MemoryCurrentNumber += parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '-') {
			MemoryCurrentNumber -= parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '*') {
			MemoryCurrentNumber *= parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '/') {
			MemoryCurrentNumber /= parseFloat(localOperationMemory);
		} else {
			MemoryCurrentNumber = parseFloat(localOperationMemory);
		};
		display.value = MemoryCurrentNumber;
		MemoryPendingOperation = op;
	};

};

function decimal(argument) {
	var localDecimalMemory = display.value;

	if (MemoryNewNumber) {
		localDecimalMemory = '0.';
		MemoryNewNumber = false;
	} else {
		if (localDecimalMemory.indexOf('.') === -1) {
		    localDecimalMemory += '.';
		};
	};

	display.value = localDecimalMemory;

};

function clear(id) {
	if (id ==='ce') {
		display.value='0';
		MemoryNewNumber = true;
	    } else if (id === 'c') {
	    display.value='0';
		MemoryNewNumber = true;
		MemoryCurrentNumber = 0;
		MemoryPendingOperation = '';
	};
	console.log('Клик по кнопке ' + id +'!');
};

function howWork(argument) {
	
	for (var i=0; i<operations.length; i++) {
		var newLi = document.createElement('li');
		var operationText = operations[i].value;
		newLi.innerText = operationText;
		operationsList.appendChild(newLi);
	};
	
};

//btn4.onclick=function(){
//	if(!document.getElementById('img')){
//		var image=document.createElement('img');
//		image.id="img";
//		image.src="572cf72274d2e15487a55eaf.png";
//		document.body.appendChild(image)}
//	}

$(document).ready(function(){
  $('#btn4').click(function() {
     $('#img').fadeOut(100, function(){
  	$('#img').attr('src', '572cf72274d2e15487a55eaf.png').fadeIn(500).delay(2000).fadeOut(100); // исчезание и замена
      });
  });
 $('#btn4').click(function() {
     $(this).fadeOut(1000).fadeIn(500);
  });


});
