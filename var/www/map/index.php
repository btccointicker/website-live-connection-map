<head> 
<title>Real time connections</title> 

<?php
include '../conf/conf.php'
?>


<?php echo '<script>var connAddr = \''.$connAddr .'\';</script>';
?>


 
<script language="javascript" type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script> 
<script language="javascript" type="text/javascript" src="http://<?php echo $connAddr ?>/socket.io/socket.io.js"></script> 
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="http://datamaps.github.io/scripts/datamaps.world.min.js"></script>
<script src="main.js"></script>


<style type="text/css"> 
.container {
	margin-right: auto;
	margin-left: auto;
}


body{
	background: #222234
}


</style>
</head>
<body>
<div id="title">
	<span style="color:#ffffff;font-family: Arial, Helvetica, sans-serif; font-size: 0.7em;">Connections to site since page loaded....</span>
</div>

<div class="container" id="container" style="position:relative; width: 100%; height: 90%;"></div>



</body>




