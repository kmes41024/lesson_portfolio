<?php
class CMySQL 
{
	//var $queryCounter = 0;
	private $link;
	
	function connnect($con_db_host,$con_db_id,$con_db_pass, $con_db_name) 
	{
		$this->link = mysqli_connect($con_db_host, $con_db_id, $con_db_pass, $con_db_name);
		if ($this->link)
		{
			//mysqli_set_charset($this->link,"utf8");
			return true;
		}
		else
			return false;
	}
	
	function insert($table, $bind=array())
	{
		$set = array();
		foreach ($bind as $col => $val) 
		{
			$set[] = "`$col`";
			$vals[] = @"'$val'";
		}
		$sql = "INSERT INTO "
		. $table
		. ' (' . implode(', ', $set).') '
		. 'VALUES (' . implode(', ', $vals).')';
		
		//echo $sql;
		return @mysqli_query($this->link, $sql);
	}
	
	function select($sql)
	{
		
		if(stripos(strtolower($sql),' limit ') === false){
			$sql .= ' limit 1';
		}
		
		$retArray = array();
		//echo $sql."<BR/>";
		$result = mysqli_query($this->link, $sql);
		if ($result != false)
		{
			$rs = mysqli_fetch_assoc($result);
			$retArray = $rs;
			mysqli_free_result($result);
		}
		else 
			echo "fail<BR/>";
		return $retArray;
	}
}

