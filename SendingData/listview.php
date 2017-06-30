<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "../koneksi.php";
		//fetch table row from mysql db
		$sql = "SELECT nama_des AS 'nama_des', alamat AS 'alamat' , telp1 AS 'telp1' , telp2 AS 'telp2' ,  nama_kategori AS 'nama_kategori' FROM j_desckat JOIN j_kategori ON j_desckat.id_kategori=j_kategori.id_kategori";
		$query = mysqli_query($conn, $sql);

		//create an array
		$tugas = array();
			while ($row = mysqli_fetch_array($query)){
				$tugas[] = $row;
			}
	echo json_encode($tugas);

	$fp = fopen('view.json', 'w');
	fwrite($fp, json_encode($tugas));
	fclose($fp);

	//close the connection
	mysqli_close($conn);
 ?>