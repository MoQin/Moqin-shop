<?php 
header("Content-Type:application/json;charset=utf-8"); 
$json='{"d":[{"imgSrc":"<img src=\"./images/p1.jpg\">","title":"fdgdfg0","price":128.85},{"imgSrc":"<img src=\"./images/p2.jpg\">","title":"fdgdfg1","price":128.85},{"imgSrc":"<img src=\"./images/p3.jpg\">","title":"fdgdfg2","price":128.85},{"imgSrc":"<img src=\"./images/p4.jpg\">","title":"fdgdfg3","price":128.85}]}'; 

	$callbackFn=$_GET['callback'];
    echo "$callbackFn($json);" 
?>
