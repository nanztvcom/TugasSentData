<?php 
	$mysqli = new mysqli("mhs.rey1024.com","u7039630_mhspti1", "akuBisa","u7039630_mhspti17");

    $nama=$_GET['nama'];
    $alamat=$_GET['alamat'];

    $id = array();

    $mysqli->query("INSERT INTO `rk_tugas` VALUES ('', '$nama', '$alamat')");

    $new_id_query = $mysqli->query("SELECT `id` FROM `rk_tugas` WHERE nama='$nama' and alamat='$alamat'");
   
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