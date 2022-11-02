<?php
	$conn = mysqli_connect("localhost", "root", "", "Airport");
	
	if($conn === false){
		die("ERROR: Could not connect. "
			. mysqli_connect_error());
	}
	$result = $conn->query("SELECT Flight_Num FROM Fly_to");
	
	?>





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
	<p><h3>Arrival Airports</h3></p>
	<form action="passengerLog.php" method="post">
	<select name ='fID' id='fID'">
	
	
	
	<?php
	while ($row = mysqli_fetch_array($result)) {
		?>
		<option value="<?php echo $row['Flight_Num'];?> "> <?php echo $row['Flight_Num']; ?></option>
		<?php
	}
		?>
		
		
	mysqli_close($conn);
	?>
	</select>
	<p></p>
	<input type="submit" value="Submit">
	
		
		
	</div>
	
	
	
	
	</center>
</body>
</html>