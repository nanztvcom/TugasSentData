<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
		//fetch table row from mysql db
		$sql = "SELECT * FROM rk_thread join rk_user on rk_thread.id_user = rk_user.id_user join rk_kategori on rk_thread.id_kategori = rk_kategori.id_kategori";
		$query = mysqli_query($conn, $sql);

		//create an array
		$thread = array();
			while ($row = mysqli_fetch_array($query)){
				$thread[] = $row;
			}
	echo json_encode($thread);

	$fp = fopen('thread.json', 'w');
	fwrite($fp, json_encode($thread));
	fclose($fp);

	//close the connection
	mysqli_close($conn);
 ?>