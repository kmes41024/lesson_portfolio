<?php 
$stm="郵件内容"; 

require_once("class.phpmailer.php");
require_once("class.smtp.php");

function sendMail($to, $subject="", $body="", $attachpath="", $cc="", $bcc="")
{ 
	// 實例化PHPMailer核心類
	$mail = new PHPMailer();
	
	// 是否啟用smtp的debug進行調試 開發環境建議開啟 生產環境注釋掉即可 默認關閉debug調試模式
	$mail->SMTPDebug = 1;
	
	// 使用smtp鑑權方式發送郵件
	$mail->isSMTP();
	
	// smtp需要鑑權 這個必須是true
	$mail->SMTPAuth = true;
	
	////////////////////////////////
	//發送mail server設定 
	// 連接信箱的服務器地址
	$mail->Host = 'smtp.qq.com';
	//$mail->Host = 'smtp.gmail.com';
	// 設置使用ssl加密方式登入鑑權
	$mail->SMTPSecure = 'ssl';
	// 設置ssl連接smtp服務器的遠程服務器端口號
	$mail->Port = 465;
	// 設置發送的信箱編碼
	$mail->CharSet = 'UTF-8';
	// 這製發件人暱稱 顯示在收件人郵件的發件人信箱地址前的發件人姓名
	$mail->FromName = '訂購餐點';
	// smtp登入的帳號
	//$mail->Username = 'kmescherry@gmail.com';  
	$mail->Username = "wcchang35@qq.com";  
 
	// smtp登入的密碼 使用生成的授權碼
	$mail->Password = "xmkcnvucdmmcdghj";   
	//$mail->Password = 'cherry881227';   
	// 設置發件人信箱地址 同登錄帳號
	$mail->From = 'wcchang35@qq.com';
	//$mail->From = 'kmescherry@gmail.com';  
	//////////////////////////////////////////////////
	
	// 郵件正文是否为html編碼 注意此處是一個方法
	$mail->isHTML(true);
	
	// 設置收件人信箱地址
	$mail->addAddress($to);
	
	//$maddress = explode(',', $to);
	//var_dump($maddress);
	// 添加多個收件人 則多次調用方法即可
	//$mail->addAddress('wcchang0@yahoo.com');
	
	$mailaddrs = array();
	$mailaddrs = explode(",", $to); 
	foreach ($mailaddrs as $addres) 
	{ 
		//檢查信箱地址是否合法 
		if (filter_var($addres, FILTER_VALIDATE_EMAIL)) 
		{ 
			$mail->AddAddress($addres);  
		} 
	} 
	
	// 添加該郵件的主题
	$mail->Subject = $subject;
	
	// 添加郵件正文
	$mail->Body = $body;
	
	// 為郵件添加附件
	$mail->addAttachment($attachpath);
	
	//$mail->AddAddress($to); 
	// 設置邮件抄送地址 
	if ($cc != "") 
	{ 
		$ccaddrs = explode(",", $cc); 
		foreach ($ccaddrs as $ccaddr) 
		{ 
			//檢查信箱地址是否合法 
			if (filter_var($ccaddr, FILTER_VALIDATE_EMAIL)) 
			{ 
				$mail->addCC($ccaddr);  
			} 
		} 
	} 

	// 設置郵件暗抄送地址,私密發送
	if ($bcc != "") 
	{ 
		$bccaddrs = explode(",", $bcc); 
		foreach ($bccaddrs as $bccaddr) 
		{ 
			//檢查信箱地址是否合法 
			if (filter_var($bccaddr, FILTER_VALIDATE_EMAIL)) 
			{ 
				$mail->addBCC($bccaddr);  
			} 
		} 
	} 
	
	// 可選項，向下兼容考慮
	$mail->AltBody = "為了查看郵件，請切換到支持 HTML 的郵件客戶端"; 
	
	// 發送郵件 返回狀態
	//$status = $mail->send();
	$msg = "";
	if(!$mail->Send()) 
	{ 
		$msg = "發送失敗: " . $mail->ErrorInfo . PHP_EOL; 
	} 
	else
	{ 
		$msg = "郵件已發送至信箱" . PHP_EOL; 
	} 
	return $msg;
}

