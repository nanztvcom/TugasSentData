<?php
$server = "mhs.rey1024.com";
$user = "u7039630_mhspti1";
$pass = "akuBisa";
$db = "u7039630_mhspti17";

$conn = mysqli_connect($server,$user,$pass,$db);

if(mysqli_connect_errno()){
	echo 'Gagal melakukan koneksi ke Database : '.mysqli_connect_error();
}else{
	// echo 'terkonek';
}
?>