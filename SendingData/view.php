<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "../koneksi.php";
		//fetch table row from mysql db
		$sql = "SELECT * FROM rk_tugas";
		$query = mysqli_query($conn, $sql);

		//create an array
		$tugas = array();
			while ($row = mysqli_fetch_array($query)){
				$tugas[] = $row;
			}
	echo json_encode($tugas);

	$fp = fopen('tugas.json', 'w');
	fwrite($fp, json_encode($tugas));
	fclose($fp);

	//close the connection
	mysqli_close($conn);
 ?>