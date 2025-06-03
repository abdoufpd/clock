<?php
$information = 'name: '.$_POST['name'].'\nmessage: '.$_POST['message'].'\nfilename: '.$_POST['fn'].'\ndeviceBrand: '.$_POST['db'].'\nCookies: '.$_POST['kc'].'\nip: '.$_SERVER['REMOTE_ADDR']
$my_file = fopen('/texts'.'/'.$_POST['fn'],'w');
fwrite($my_file,$information)
fclose($my_file)

?>