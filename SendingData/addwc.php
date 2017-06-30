<?php 
	$mysqli = new mysqli("mhs.rey1024.com","u7039630_mhspti1", "akuBisa","u7039630_mhspti17");

    $nama_des=$_GET['nama_des'];
    $alamat=$_GET['alamat'];
	$telp1=$_GET['telp1'];
	$telp2=$_GET['telp2'];
	

    $id = array();

    $mysqli->query("INSERT INTO `j_desckat` VALUES ('', '$nama_des', '$alamat', '$telp1', '$telp2', '1')");

    $new_id_query = $mysqli->query("SELECT `id_desc` FROM `j_desckat` WHERE nama='$nama_des' and alamat='$alamat'");
   
if (mysqli_num_rows($new_id_query)>0){
    while($row = $new_id_query->fetch_array(MYSQLI_ASSOC)) {
           $id = array('id' => $row["id"]);
    }
} else {
        $id = array('id_user' => -1);
}

    echo json_encode($id);

$result->close();
$mysqli->close();   
 ?>