<!DOCTYPE html>
<HTML>
<HEAD>
    <TITLE>TreeTop Airlines</TITLE>
    <link rel="shortcut icon" href="plane.ico" />

<style>
.boxed {
width: 400px;
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
		<h1>Storing Booking Info</h1>
		
		<form action="InsertBooking.php" method="post">
		<p>
		<?php $flight = trim($_REQUEST['Name']);
		echo $flight;
		?>
		<input type="hidden" name="fName" id="fName" value= "<?php $flight ?>">
		</p>
<p>
		<label for="CCNumber">Credit Card:</label>
		<input type="text" name="CreditCardNUM" id="CCNumber">
		</p>
<p>
		<label for="Name">Name:</label>
		<input type="text" name="Name" id="Name">
		</p>
<p>
		<label for="PhoneNumber">Phone Number:</label>
		<input type="text" name="PhoneNum" id="PhoneNumber">
		</p>
<p>
		<label for="Seat">Seat Number:</label>
		<input type="text" name="Seat" id="Seat">
		</p>
		<input type="submit" value="Submit">
</form>
    	</div>
	</center>

</body>
</HTML>