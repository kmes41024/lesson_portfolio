var Money = 1000 , RunningSpeed = 4 , timer = 0 , flag = 0 , MoneyChoose = 0 , GetValue = 0 ;
$(document).ready(function()
{
	if ($.client.browser == 'Explorer')
		$('body').html('Your browser does not support, try <a href="http://moztw.org/firefox/">FireFox</a> or <a href="https://www.google.com/chrome?hl=zh-TW">Chrome?</a>')
	else
	{
		DrawRoundBlock () ;
		DrawMoneyTable () ;
		DrawNumberTable () ;
		DrawLeftMoneyTable () ; 
		$('input#Next').hide () ;
		
		$('input#Next').click(function () {
			$('ul').roundabout("animateToPreviousChild") ;
		}) ;
		
		$('button').click (function () {
			RunRoundBlock () ;
		}) ;
		
		$('table#MoneyTable td').click (function (e) {
			$('table#MoneyTable td').attr('class' , 'WhiteBlock') ;
			MoneyChoose = $(this).attr('value') ;
			if (MoneyChoose == 5)
				$(this).attr ('class' , 'Five') ;
			else if (MoneyChoose == 50)
				$(this).attr ('class' , 'Fifty') ;
			else if (MoneyChoose == 100)
				$(this).attr ('class' , 'Hundred') ;
		}) ;
		
		$('table#NumberTable td').click (function (e) {
			if (MoneyChoose == 5)
			{
				Money -= 5 ;
				
				if ($(this).attr('class') == 'Five')
					Money += 5 ;
				else if ($(this).attr('class') == 'Fifty')
					Money += 50 ;
				else if ($(this).attr('class') == 'Hundred')
					Money += 100 ;
				
				$(this).attr ('class' , 'Five') ;
			}
			else if (MoneyChoose == 50)
			{
				Money -= 50 ;
							
				if ($(this).attr('class') == 'Five')
					Money += 5 ;
				else if ($(this).attr('class') == 'Fifty')
					Money += 50 ;
				else if ($(this).attr('class') == 'Hundred')
					Money += 100 ;
				
				$(this).attr ('class' , 'Fifty') ;
			}
			else if (MoneyChoose == 100)
			{
				Money -= 100 ;
				
				if ($(this).attr('class') == 'Five')
					Money += 5 ;
				else if ($(this).attr('class') == 'Fifty')
					Money += 50 ;
				else if ($(this).attr('class') == 'Hundred')
					Money += 100 ;
				
				$(this).attr ('class' , 'Hundred') ;
			}
		}) ;
	}
	
});

function ClearNumberTable ()
{
	$('.MiddleWord').html('You Get ' + GetValue + ' !') ;
	for (var i = 1 ; i <= 36 ; i++)
	{
		if (i % 2 != 0)
			$("#" + i).attr ('class' , 'RedNumber') ;
		else
			$("#" + i).attr ('class' , 'BlackNumber') ;
	}
	
	for (var i = 37 ; i <= 43 ; i++)
	{
		$("#" + i).attr('class' , 'WhiteBlock') ;
	}
}

function RunRoundBlock ()
{
	$('.MiddleWord').html('Welcome to Roulette Game !') ;
	RunningSpeed = 4 ;
	timer = 0 ;
	if (flag == 0)
	{
		Running = setInterval(function() 
		{
			flag = 1 ;
			timer += 50 ;
			if (Math.round(RunningSpeed).toFixed(1) == 0)
			{
				flag = 0 ;
				RunningSpeed = 0 ;
				$('input#Next').click() ;
				CheckOwn() ;
				clearInterval (Running) ;
		    }
			if (timer % 1000 == 0 && timer <= 10000)
				RunningSpeed -= 0.4 ;
			$('ul').roundabout('adjustBearing', RunningSpeed);
		}, 50);
	}
}

function CheckOwn ()
{
	$('ul#Rounder li').focus (function(e)
	{
		GetValue = $(this).html() ;
		var ValueNumber = GetValue ;
		if (RunningSpeed == 0)
		{
//			$(this).attr('class' , 'WinBlock') ;
			if ($("#" + GetValue).attr('class') == 'Five')
				Money += 180 ;
			else if ($("#" + GetValue).attr('class') == 'Fifty')
				Money += 1800 ;
			else if ($("#" + GetValue).attr('class') == 'Hundred')
				Money += 3600 ;
				
			if (ValueNumber / 12 <= 1)
			{
				if ($("#37").attr('class') == 'Five')
					Money += 15 ;
				else if ($("#37").attr('class') == 'Fifty')
					Money += 150 ;
				else if ($("#37").attr('class') == 'Hundred')
					Money += 300 ;
			}
			else if (ValueNumber / 12 > 1 && ValueNumber / 12 <= 2)
			{
				if ($("#38").attr('class') == 'Five')
					Money += 15 ;
				else if ($("#38").attr('class') == 'Fifty')
					Money += 150 ;
				else if ($("#38").attr('class') == 'Hundred')
					Money += 300 ;
			}
			else if (ValueNumber / 12 > 2 && ValueNumber / 12 <= 3)
			{
				if ($("#39").attr('class') == 'Five')
					Money += 15 ;
				else if ($("#39").attr('class') == 'Fifty')
					Money += 150 ;
				else if ($("#39").attr('class') == 'Hundred')
					Money += 300 ;
			}
			
			if (ValueNumber / 18 <= 1)
			{
				if ($("#40").attr('class') == 'Five')
					Money += 10 ;
				else if ($("#40").attr('class') == 'Fifty')
					Money += 100 ;
				else if ($("#40").attr('class') == 'Hundred')
					Money += 200 ;
			}
			else if (ValueNumber / 18 > 1 && ValueNumber / 18 <= 2)
			{
				if ($("#43").attr('class') == 'Five')
					Money += 10 ;
				else if ($("#43").attr('class') == 'Fifty')
					Money += 100 ;
				else if ($("#43").attr('class') == 'Hundred')
					Money += 200 ;
			}
			
			if (ValueNumber % 2 == 0)
			{
				if ($("#41").attr('class') == 'Five')
					Money += 10 ;
				else if ($("#41").attr('class') == 'Fifty')
					Money += 100 ;
				else if ($("#41").attr('class') == 'Hundred')
					Money += 200 ;
			}
			else if (ValueNumber % 2 != 0)
			{
				if ($("#42").attr('class') == 'Five')
					Money += 10 ;
				else if ($("#42").attr('class') == 'Fifty')
					Money += 100 ;
				else if ($("#42").attr('class') == 'Hundred')
					Money += 200 ;
			}
			
			if (Money == 0)
				Money-- ;
			ClearNumberTable () ;
		}
	}) ;
}

function DrawLeftMoneyTable ()
{
	MoneyShow = setInterval (function ()
	{
		str = '<table width="600"  cellspacing="2" cellpadding="2">' ;
		str += '<tr>' ;
		str += '<td class="WhiteBlock"><font size="50px" id="LeftMoney">' ;
		str += '$' ;
		str += Money ;
		str += '</font></td>' ;
		str += '</tr>' ;
		str += '</table>' ;
		$('div#LeftMoneyDiv"').html(str) ;
		if (Money < 0)
		{
			$('div#Slider').slideUp(3000) ;
			$('button').hide() ;
			$('font#LeftMoney').html('You Lost The Game !');
			clearInterval(MoneyShow) ;
		}
	} , 50) ;
}

function DrawNumberTable ()
{
	var str = '<table class="NumberTable" id="NumberTable" cellspacing="2" cellpadding="2" width="600">' ;
	str += '<tr>' ;
	for (var i = 1 ; i <= 36 ; i+= 3)
	{
		if (i % 2 != 0)
			str += '<td class="RedNumber" id="' + i + '">' + i + '</td>' ;
		else
			str += '<td class="BlackNumber" id="' + i + '">' + i + '</td>' ;
	}
	str += '</tr>' ;
	str += '<tr>' ;
	for (var i = 2 ; i <= 36 ; i+= 3)
	{
		if (i % 2 != 0)
			str += '<td class="RedNumber" id="' + i + '">' + i + '</td>' ;
		else
			str += '<td class="BlackNumber" id="' + i + '">' + i + '</td>' ;
	}
	str += '</tr>' ;
	str += '<tr>' ;
	for (var i = 3 ; i <= 36 ; i+= 3)
	{
		if (i % 2 != 0)
			str += '<td class="RedNumber" id="' + i + '">' + i + '</td>' ;
		else
			str += '<td class="BlackNumber" id="' + i + '">' + i + '</td>' ;
	}
	str += '</tr>' ;
	str += '<tr>' ;
    str += '<td colspan="4" class="WhiteBlock" id="37">1st 12</td>' ;
    str += '<td colspan="4" rowspan="2" class="WhiteBlock" id="38">2nd 12</td>' ;
    str += '<td colspan="4" class="WhiteBlock" id="39">3rd 12</td>' ;
    str += '</tr>' ;
 	str += '<tr>' ;
    str += '<td colspan="2" class="WhiteBlock" id="40">1 to 18</td>' ;
    str += '<td colspan="2" class="WhiteBlock" id="41">EVEN</td>' ;
    str += '<td colspan="2" class="WhiteBlock" id="42">ODD</td>' ;
    str += '<td colspan="2" class="WhiteBlock" id="43">19 to 36</td>' ;
    str += '</tr>' ;
	str += '</table>' ;
	
	$('div#NumberDiv').html(str) ;
	
}

function DrawMoneyTable ()
{
	var str = '<table class="MoneyTable" id="MoneyTable" cellspacing="2" cellpadding="2" width="600">' ;
	str += '<tr>' ;
	str += '<td width="200" class="WhiteBlock" value="5">$5</td>' ;
	str += '<td width="200" class="WhiteBlock" value="50">$50</td>' ;
	str += '<td width="200" class="WhiteBlock" value="100">$100</td>' ;
	str += '</tr>' ;
	str += '</table>' ;
	$('div#MoneyDiv').html(str) ;
}

function DrawRoundBlock ()
{
	arr = new Array (36) ;
	for (var i = 0 ; i < 36 ; i++)
	{
		arr[i] = Math.floor(Math.random() * 36 + 1) ;
		for (var j = 0 ; j < i ; j++)
		{
			while (arr[i] == arr[j])
			{
				arr[i] = Math.floor(Math.random() * 36 + 1) ;
				j = 0 ;
			}
		}
	}
	
	var str = "" ;
	str += '<ul class="Rounder" id="Rounder">' ;
	str += '<li>&nbsp</li>' ;
	str += '<li>&nbsp</li>' ;
	str += '<li>&nbsp</li>' ;
	str += '<li class="MiddleWord">Welcome to Roulette Game !</li>' ;
	for (var i = 1 ; i <= 36 ; i++)
	{
		if (arr[i] % 2 != 0)
			str += '<li class="RedBlock" id="Mover">' + arr[i - 1] + '</li>' ;
		else
			str += '<li class="BlackBlock" id="Mover">' + arr[i - 1] + '</li>' ;
	}
	str += '</ul>' ;
	$('div#RoundBlock').html(str) ;
	$('ul').roundabout
	({
		minOpacity: 0.0, // invisible!
        minScale: 0.001, // tiny!
		clickToFocus: false,
		tilt: -15,
		childSelector: '#Mover',
		btnPrev: '#Next'
	});
}