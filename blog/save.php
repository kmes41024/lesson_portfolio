<?php

	require_once("mail/sendmail.php");
	require_once("qrcode/qrcode.php");
	require_once("db/conn.php");
	session_start();

	function FRndKey($len){$str = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  $temp = ''; for ($ci = 0; $ci < $len; $ci++){   $temp .= substr($str, mt_rand(0,strlen($str)-1),1); }   return $temp;}; 

	$sn = FRndKey(8);
	$data = array();
	
	
	$data['shop']=$_POST['shop'];
	$data['name']=$_POST['name'];
	$data['phone']=$_POST['phone'];
	$data['car']=$_POST['car'];
	$data['product']=$_POST['product'];
	$data['amount']=$_POST['amount'];
	$data['date']=$_POST['date'];
	$data['time']=$_POST['time'];
	$data['times']=$_POST['times'];
	$data['email']=$_POST['email'];
	$data['message']=$_POST['message'];
	
	
	if ($_store == "db")
	{
		$sqlAttr = array(
		'sn'=>$sn,
		'shop'=>$data['shop'], 
		'name'=>$data['name'],
		'phone'=>$data['phone'], 
		'car'=>$data['car'],
		'product'=>json_encode($data['product']), 
		'amount'=>$data['amount'],
		'date'=>$data['date'],
		'time'=>json_encode($data['time']),
		'times'=>$data['times'], 
		'email'=>$data['email'],
		'message'=>$data['message']
		);
		$conn->insert('HW2', $sqlAttr);
	}
	else
	{
		/**********************************
		/* code for store into file*/
		$jsondata = json_encode($data);

		$filename = "db/".$sn.".dat";
		$myfile = fopen($filename, "w") or die("Unable to open file!");
		fwrite($myfile, $jsondata);
		fclose($myfile);
		/************************************/
	}

	@unlink('order.png');
	$ret_url = $ROOT_DIR.'/list.php?id='.$sn;
	$list_url='list.php?id='.$sn;

	genQRCode($ret_url, 'order.png');

	$title = "感謝預訂亞洲水泥公司的產品";
	$body = "<strong>訂單資訊 - </strong><BR/><BR/>";
	$body .= "Shop: ".$data['shop']."<BR/>";
	$body .= "Name: ".$data['name']."<BR/>";
	$body .= "Phone: ".$data['phone']."<BR/>";
	$body .= "License plate: ".$data['car']."<BR/>";
	$body .= "Product: ".$data['product'][0]."";
	for ($i=1; $i<count($data['product']); $i++)
	$body .= " & ".$data['product'][$i]."";
	$body .= "<BR/>Amount: ".$data['amount']."<BR/>";
	$body .= "Date: ".$data['date']."<BR/>";
	$body .= "Time: ".$data['times']."".$data['time'][0]." <BR/>";
	$body .= "Message: ".$data['message']."<BR/>";

	
	
	$msg = sendMail($data['email'], $title, $body, 'order.png');
	
	
	echo "<script src='layui/layui.all.js'></script>";
	echo "<script>";
	echo "   layui.layer.msg('{$msg}',{time:3000});";
	echo "	 setTimeout(function(){";
	echo "		window.location.href = '{$list_url}';";
	echo "	},3000);";
	echo "</script>";
	
?>