<head> 
<title>Real time connections</title> 

<?php
//You need the code from here
?>
<?php
include 'conf/conf.php'
?>

<?php echo '<script>var connAddr = \''.$connAddr .'\';</script>';
?>
<script language="javascript" type="text/javascript" src="http://<?php echo $connAddr ?>/socket.io/socket.io.js"></script>
<?php echo '<script>conn = io.connect(connAddr,{\'force new connection\': true});</script>';
?>

<?php
//to here in each page you want people to register as being connected to your website
?>
</head>
<body>
<div style="
    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 100px;
    margin: auto;
    background-color: #f3f3f3;">Example page. Just include the above code on each page and people connecting will be registered. 
</div>
</body>



