<?php 
	$mysqli = new mysqli("mhs.rey1024.com","u7039630_mhspti1", "akuBisa","u7039630_mhspti17");

    $nama_des=$_GET['nama_des'];
    $alamat=$_GET['alamat'];
    $telp1=$_GET['telp1'];
    $telp2=$_GET['telp2'];
    $id_kategori=$_GET['id_kategori'];
    $id = array();

$result = $mysqli->query("SELECT `id_desc` FROM `j_desckat` WHERE nama_des='$nama_des'");

if (mysqli_num_rows($result)>0){
        $id = array('id_desc' => -1);
        echo json_encode($id);

} else {

    $mysqli->query("INSERT INTO `j_desckat` VALUES ('', '$nama_des', '$alamat', '$telp1', '$telp2', 1)");

    $new_id_query = $mysqli->query("SELECT `id_desc` FROM `j_desckat` WHERE nama_des='$nama_des'");
   
if (mysqli_num_rows($new_id_query)>0){
    while($row = $new_id_query->fetch_array(MYSQL_ASSOC)) {
           $id = array('id_desc' => $row["id_desc"]);
    }
    echo json_encode($id);
    }
}


$result->close();
$mysqli->close();   
 ?>