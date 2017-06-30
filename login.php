<?php 
	$mysqli = new mysqli("mhs.rey1024.com","u7039630_mhspti1", "akuBisa","u7039630_mhspti17");

    $email=$_GET['email'];
    $password=$_GET['password'];

    

$id = array();

if($result = $mysqli->query("SELECT `id_user` FROM `j_user` WHERE email='$email' AND password='$password'")) {

if (mysqli_num_rows($result)>0){

    $row = $result->fetch_array(MYSQLI_ASSOC);
           $id = array('id' => $row["id_user"]);
        echo json_encode($id);
} else {
        $id = array('id' => -1);
        echo json_encode($id);
    }
}

$result->close();
$mysqli->close();  
 ?>