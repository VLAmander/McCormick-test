<?php

include_once("helpers.php");
 echo retunJSON($_POST);

function formatRetunData($data){

}

function retunJSON($retunData){
  return json_encode($retunData);
}
// first we need to validate SDO_DAS_Data

//then is it's valid; we need to query th db

?>
