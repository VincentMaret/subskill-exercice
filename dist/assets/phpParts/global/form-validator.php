<?php
  
  function startValidateForm($formConfig){
    $completeFormData = checkMissingFields($formConfig['formData']);
    $cleanFormData;
    $validatedFormData;
  
    if( $completeFormData ){
      $cleanFormData = cleanValues($formConfig['formData'], $formConfig);
    } else { return; }
    
    if( $cleanFormData ){
      $validatedFormData = validateData($cleanFormData);
    }

    if($validatedFormData){
      sendMail($validatedFormData, $formConfig['formSettings']);
    }
  }

  function checkMissingFields($formData){
    foreach($formData as $key => $val){
      if(empty($_POST[$key])){
        echo '<br>' . $key . ' missing';
        return false;
      }
    }
    return $formData;
  }

  function cleanValues($formData, $formConfig){
    foreach( $_POST as $key => $val ){
      // whitelist entrie whith formdata model
      if( !array_key_exists($key, $formData) ){
        echo 'Hack attempt';
        return false;
      }

      // check checkbox intergrity
      if(array_key_exists($key, $formConfig['checkBoxValues'])){
        
        // if we need to split values
        if(in_array($key, $formConfig['checkBoxMultipleValues'])){
          $valArray = preg_split('/,/', $val);
   
          foreach($valArray as $x){
             // if checkbox value don't exist in config
            if(!in_array($x, $formConfig['checkBoxValues'][$key])){
              echo 'Hack attempt on '. $key .' checkbox value';
              return false;
            }
          }
        } else{
          // if checkbox value don't exist in config
          if(!in_array($val, $formConfig['checkBoxValues'][$key])){
            echo 'Hack attempt on '. $key .' checkbox value';
            return false;
          }
        }
        
      }
  
      // supress tags
      $formData[$key] = strip_tags($val);
    }

    return $formData;
  }

  function validateData($formData){
    $regex = [
      'names' => "/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/",
      'phone' => "/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/",
      'mail'  => "/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix"
    ];

    // if FirstName exist
    if( array_key_exists('FirstName', $formData) ){
      // if match names regex
      if( !preg_match($regex['names'], $formData['FirstName']) ){
        echo 'FirstName don\'t match regex';
        return false;
      }
    }

      // if LastName exist
      if( array_key_exists('LastName', $formData) ){
        // if match names regex
        if( !preg_match($regex['names'], $formData['LastName']) ){
          echo 'LastName don\'t match regex';
          return false;
        }
      }

       // if Phone exist
       if( array_key_exists('Phone', $formData) ){
        // if match names regex
        if( !preg_match($regex['phone'], $formData['Phone']) ){
          echo 'Phone don\'t match regex';
          return false;
        }
      }

      // if Mail exist
      if( array_key_exists('Mail', $formData) ){
        // if match names regex
        if( !preg_match($regex['mail'], $formData['Mail']) ){
          echo 'Mail don\'t match regex';
          return false;
        }
      }

      return $formData;
  }
  
  function sendMail($formData, $settings){
    $message = '';
    foreach($formData as $key => $val){
      if($key != 'Acceptation'){
        $message .= $key.': '.$val.'<br>';
      }
    }

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    $headers[] = 'From: CPF website <'.$settings['from'].'>';
    $headers[] = 'To: CPF mail <'.$settings['receiver'].'>';

    $mailRes = mail($settings['receiver'], 'CPF inscription', $message, implode("\r\n", $headers));
    echo 'mail sent';
  }
?>