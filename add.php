<?php
$conn = new mysqli("localhost","jfblack","bull1607","john_master");
if($conn->connect_error){die("Error on Conn");}

$sql = $conn->prepare("INSERT INTO users (`firstName`, `lastName`, `age`) VALUES (?,?,?)");
$sql->bind_param("ssi",$_POST['firstName'],$_POST['lastName'], $_POST['age']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'Error on Query'. mysqli_error($conn);
}

$sql->close();
?>
