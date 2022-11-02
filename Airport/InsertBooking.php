<!DOCTYPE html>
<html>

<head>
	<title>TreeTop Airlines</title>
	<link rel="shortcut icon" href="plane.ico" />
<style>
.boxed {
width: 600px;
background-color: white;
border:1px solid black;
}

.home {
position: absolute;
left: auto;
top: auto;
width: 50px;
height:50px;
}
</style>
	
</head>

<body style ="background-color:#65BABB;">

<style>
body { 
	background-image: url('sky.jpeg');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
}
</style>
<div class="home"><a href="index.php"><img src="home.png" alt="Treetop Airline" style="width:50px; height:50px;"><a></div>

	<center>
	<div class="boxed">
	<?php
	$conn = mysqli_connect("localhost", "root", "", "Airport");
	
	if($conn === false){
		die("ERROR: Could not connect. "
			. mysqli_connect_error());
	}
	
	$flightName = trim($_REQUEST['fName']);
	$CreditCardNUM = $_REQUEST['CreditCardNUM'];
	$Name = $_REQUEST['Name'];
	$PhoneNum = $_REQUEST['PhoneNum'];
	$Seat = $_REQUEST['Seat'];
	
	$sql1 = "INSERT INTO Passengers VALUES ('$CreditCardNUM', '$Name', '$PhoneNum')";
	
	$sql2 = "SELECT Fly_to.Flight_Num from Airport, Fly_to WHERE Airport.Port_Name = '$flightName' AND Fly_to.To_Port = Airport.Airport_Code ;";
	$result2 = $conn->query($sql2);
	$row = $result2->fetch_assoc();	//Was good
	$flightNUM = $row['Flight_Num'];
	
	$sql3 = "INSERT INTO Plane_Ticket VALUES ('$CreditCardNUM', '$Name', '$flightNUM', '$Seat')";
	if(mysqli_query($conn, $sql1)){
	echo "<h3>Your info has been stored</h3>";
	}
	
	if(mysqli_query($conn, $sql3)){
	echo "<h3>Your ticket has been made</h3>";
	} 
	
	mysqli_close($conn);
	?>
	
	<form>
	<input type="button" value="Go back!" onclick="history.back()">
	</form>
	</div>
	</center>
</body>
</html>