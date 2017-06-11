<?php 
	$mysqli = new mysqli("mhs.rey1024.com","u7039630_mhspti1", "akuBisa","u7039630_mhspti17");

    $nama=$_GET['nama'];

$result = $mysqli->query("SELECT `id_kategori` FROM `rk_kategori` WHERE nama='$nama'");

if (mysqli_num_rows($result)>0 || $nama == ''){
        $id = array('id_kategori' => -1);
        echo json_encode($id);

} else {

    $mysqli->query("INSERT INTO `rk_kategori` VALUES ('', '$nama', '', '', '', '')");

    $new_id_query = $mysqli->query("SELECT `id_kategori` FROM `rk_kategori` WHERE nama='$nama'");
   
if (mysqli_num_rows($new_id_query)>0){
    while($row = $new_id_query->fetch_array(MYSQL_ASSOC)) {
           $id = array('id_kategori' => $row["id_kategori"]);
    }
    echo json_encode($id);
    }
}


$result->close();
$mysqli->close();   
 ?>