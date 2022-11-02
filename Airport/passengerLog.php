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
	<p><h3> Arrival Port Info</h3></p>
	<?php
	$conn = mysqli_connect("localhost", "root", "", "Airport");
	
	if($conn === false){
		die("ERROR: Could not connect. "
			. mysqli_connect_error());
	}
	
	$fID = trim($_REQUEST['fID']);
	
	
	$result1 = $conn->query("SELECT Passengers.Name, Plane_Ticket.seatNum FROM Passengers, Plane_Ticket, Regular_Flight WHERE Regular_Flight.Flight_NUM = Plane_Ticket.Flight_NUM AND Plane_Ticket.CCNUM = Passengers.CreditCardNUM AND Regular_Flight.Flight_NUM = '$fID';");
	if($result1->num_rows > 0) {
	while($row = $result1->fetch_assoc()) {
	echo $row["Name"]. " " . $row["seatNum"].  "<br>";
	} 
	} else { echo "0 results";
	}
	?>
	<p></p>
	<?php
	
	$result2 = $conn->query("SELECT Airport.Port_Name, Port_Location.Street, Port_Location.Town, Port_Location.State, Port_Location.Zip FROM Airport, Port_Location, Fly_to WHERE Airport.Airport_Code = Fly_to.To_Port AND Port_Location.Port_Code = Fly_to.To_Port AND Fly_to.Flight_Num = '$fID';");
	if($result2->num_rows > 0) {
	while($row = $result2->fetch_assoc()) {
	echo $row["Port_Name"]. " " . $row["Street"]. " " . $row["Town"]. " " . $row["State"]. " " . $row["Zip"]. "<br>";
	} 
	} else { echo "0 results";
	}

	mysqli_close($conn);
	?>
	<p></p>
	</div>
	</center>
</body>
</html>