OnBackKeyDown = function()
{
	console.info("call OnBackKeyDown");	
	try{
		document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode':8, 'which':8}));
	}catch(ex){}
}

OnBackKeyUp = function()
{
	console.info("call OnBackKeyUp");	
	try{
		document.dispatchEvent(new KeyboardEvent('keyup', {'keyCode':8, 'which':8}));
	}catch(ex){}
}


