<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";

		//fetch table row from mysql db
		$sql = "SELECT * FROM rk_kategori";
		$query = mysqli_query($conn, $sql);

		//create an array
		$kategori = array();
			while ($row = mysqli_fetch_array($query)){
				$kategori[] = $row;
			}
	echo json_encode($kategori);

	$fp = fopen('kategori.json', 'w');
	fwrite($fp, json_encode($kategori));
	fclose($fp);

	//close the connection
	mysqli_close($conn);
 ?>