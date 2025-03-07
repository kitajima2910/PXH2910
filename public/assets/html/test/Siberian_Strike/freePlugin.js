 if(typeof cr_is_preview === "undefined")
{
	var freeFolderURL = window.location.href.indexOf("vntools.sai.gameloft.com") >= 0 ? "http://vntools.sai.gameloft.com/html5/freeFiles/" : "http://play.ludigames.com/js/games_lib/freeFiles/";
	var GameStarted = false;
	var freeBG;
	var game_canvas = document.getElementById("c2canvasdiv");
	var isWindowPhone80 = navigator.userAgent.indexOf("Windows Phone 8.0") > -1 ;
	var isWindowPhone = navigator.userAgent.indexOf("Windows Phone") > -1 ;
	var isFirefoxPC = navigator.userAgent.indexOf("Firefox") > -1 && navigator.userAgent.indexOf("Windows") > -1;
	var isNativeOneX = navigator.userAgent.indexOf("HTC_OneXplus") > -1 && navigator.userAgent.indexOf("Firefox") == -1
	&& navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("bdbrowser") == -1 && navigator.userAgent.indexOf("MxBrowser") == -1
	&& navigator.userAgent.indexOf("UCBrowser") == -1;
	var isCreateNewFrameFree = isFirefoxPC || isNativeOneX;
	var freeState = 0;
	var lang = "";
	function initGame()
	{
		if(!GameStarted)
		{
			if(document.getElementById("loading_gif"))
				document.getElementById("loading_gif").style.display = "inline";
			GameStarted = true;
			jQuery(window).resize(function() {
				cr_sizeCanvas(jQuery(window).width(), jQuery(window).height());
			});
			
			// Start the Construct 2 project running on window load.
			jQuery(document).ready(function ()
			{			
				// Create new runtime using the c2canvas
				cr_createRuntime("c2canvas");
				//alert("ready: cr_createRuntime");
			});
			//alert("initGame: !GameStarted");
		}
	}	
	// Pause and resume on page becoming visible/invisible
	if(enableADS)
	{
		function onVisibilityChanged() {
			var freeFrame = document.getElementById("freeFrame").contentWindow;
			
			if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden)
			{
				if(GameStarted)
					cr_setSuspended(true);
				if(typeof(freeFrame.freeManager) != "undefined")
					freeFrame.suspendFree();
			}
			else
			{		
				if(GameStarted)		
					cr_setSuspended(false);	
				if(typeof(freeFrame.freeManager) != "undefined")
					freeFrame.resumeFree();
			}
		};
		document.addEventListener("visibilitychange", onVisibilityChanged, false);
		document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
		document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
		document.addEventListener("msvisibilitychange", onVisibilityChanged, false);
	}
	close_freeFrame = function()
	{
		if(!isCreateNewFrameFree)
		{
			freeBG.style.display = "none";
			document.getElementById("freeFrame").style.display = "none";
			document.getElementById("freeFrame").style.height = "100%";
			if(isWindowPhone80)
				game_canvas.style.display = "inline";
		}
		else
		{
			document.body.removeChild(document.getElementById("freeFrame"));
			freeBG.style.display = "none";
		}
		initGame();
		//alert("initGame");
		freeState = 0;
		cr_setSuspended(false);
	}

	function show_freeFrame_Loc(l)
	{
		if(enableADS)
		{
			lang = l;
			show_freeFrame();
		}
	}
	function show_freeFrame()
	{
		if(enableADS)
		{
			cr_setSuspended(true);
			freeState = 1;
			if(!isCreateNewFrameFree)
			{
				if(document.getElementById("freeFrame") != null)
				{
					if(isWindowPhone80)
						game_canvas.style.display = "none";
					freeBG.style.display = "inline";
					document.getElementById("freeFrame").contentWindow.requestFree();
				}
			}
			else
			{
				freeBG.style.display = "inline";
				createFreeFrameNonBG();
			}
		}
	}
	function createFreeFrameNonBG(){
		ifrm_free = document.createElement("IFRAME");
		ifrm_free.setAttribute("src", freeFolderURL+"freeFrame.html");
		ifrm_free.setAttribute("id", "freeFrame");
		ifrm_free.style.width = "100%";
		ifrm_free.style.height = "100%";
		ifrm_free.setAttribute("scrolling", "no");
		ifrm_free.style.border = 0+"px none";
		ifrm_free.style.transform = "rotate(0deg)";
		ifrm_free.style.position = "fixed";
		ifrm_free.style.top = "0px";
		ifrm_free.style.left = "0px";
		ifrm_free.style.display = "inline";
		document.body.appendChild(ifrm_free);
	}

	function createFreeFrame() {
		freeState = 1;
		freeBG = document.createElement("IFRAME");
		freeBG.setAttribute("src", freeFolderURL+"freeBG.html");
		freeBG.setAttribute("id", "freeBG");
		freeBG.style.width = "100%";
		freeBG.style.height = "100%";
		freeBG.setAttribute("scrolling", "no");
		freeBG.style.border = 0+"px none";
		freeBG.style.transform = "rotate(0deg)";
		freeBG.style.position = "fixed";
		freeBG.style.top = "0px";
		freeBG.style.left = "0px";
		freeBG.style.display = "inline";
		document.body.appendChild(freeBG);

		ifrm_free = document.createElement("IFRAME");
		ifrm_free.setAttribute("src", freeFolderURL+"freeFrame.html");
		ifrm_free.setAttribute("id", "freeFrame");
		ifrm_free.style.width = "100%";
		ifrm_free.style.height = "100%";
		ifrm_free.setAttribute("scrolling", "no");
		ifrm_free.style.border = 0+"px none";
		ifrm_free.style.transform = "rotate(0deg)";
		ifrm_free.style.position = "fixed";
		ifrm_free.style.top = "0px";
		ifrm_free.style.left = "0px";
		ifrm_free.style.display = "inline";
		document.body.appendChild(ifrm_free);
	}
	if(enableADS)
		createFreeFrame();
}