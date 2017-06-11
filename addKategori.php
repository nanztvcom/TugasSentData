<?php 
	$mysqli = new mysqli("mhs.rey1024.com","u7039630_mhspti1", "akuBisa","u7039630_mhspti17");

    $username=$_GET['username'];
    $pass=$_GET['pass'];
    $id = array();

$result = $mysqli->query("SELECT `id_user` FROM `j_user` WHERE username='$username'");

if (mysqli_num_rows($result)>0){
        $id = array('id_user' => -1);
        echo json_encode($id);

} else {

    $mysqli->query("INSERT INTO `j_user` VALUES ('', '$username', '$pass')");

    $new_id_query = $mysqli->query("SELECT `id_user` FROM `j_user` WHERE username='$username'");
   
if (mysqli_num_rows($new_id_query)>0){
    while($row = $new_id_query->fetch_array(MYSQL_ASSOC)) {
           $id = array('id_user' => $row["id_user"]);
    }
    echo json_encode($id);
    }
}


$result->close();
$mysqli->close();   
 ?>