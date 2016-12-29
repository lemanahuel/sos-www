<?php  
require "phpmailer/class.phpmailer.php";
require "phpmailer/class.smtp.php";

$name_field = $_POST['name-field'];
$lastname = $_POST['lastname-field'];
$email_field = $_POST['email-field'];
$textmsj_field = $_POST['textmsj-field'];

$subject = "Contacto desde voluntariosos.org";
$message = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
  <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
  <title>Untitled Document</title>
</head>

<body>
  <table width='600px' border='0' align='center' cellpadding='0' cellspacing='0'>
    <tr>
      <td style='widht:600px;'><img src='http://sos-www-qa.herokuapp.com/images/voluntario_sos.png' width='600' height='168' alt=''/></td>
    </tr>
    <tr>
      <td style='width:600px;'><table width='100%' border='0' cellspacing='0' cellpadding='0'>
        <tr>
          <td style='width:100px; height:50px;'>&nbsp;</td>
          <td style='height:50px;'>&nbsp;</td>
          <td style='width:100px; height:50px;'>&nbsp;</td>
        </tr>
        <tr>
          <td style='width:100px;'>&nbsp;</td>
          <td style='width:400px;'>
            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
              <tr align='center'>
                      <td style='width:400px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#FFF;text-align:center;'>&nbsp;</td>
              </tr>
                <td>
                  <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                    <tr>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#000;'>Nombre:</td>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696;'>".$name_field."</td>
                    </tr>
                    <tr>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#000;'>Email:</td>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696;'>".$email_field."</td>
                    </tr>
                    <tr>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#000;'>Mensaje:</td>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696;'>".$textmsj_field."</td>
                    </tr>                    
                  </table>
                </td>
              </tr>
              <tr>
                <td style='height:50px;'>&nbsp;</td>
              </tr>
              </table>
              </td>
              <td style='width:100px;'>&nbsp;</td>
            </tr>
          </table></td>
    </tr>
      </table>
    </body>
    </html>";

	$from = "noreply@volutariosos.com";
	$name = "Voluntariosos";
	$email = new PHPMailer();		

	$email->isSMTP(); // Set mailer to use SMTP
	$email->CharSet="UTF-8";
	$email->Host = 'smtp.sendgrid.net'; // Specify main and backup SMTP servers
	$email->SMTPAuth = true; // Enable SMTP authentication
  $email->Username = 'jmm.87';// SMTP username
  $email->Password = 'xeneise3268';// SMTP password

	$email->Port = 587;

	$email->From      = $from;		
	$email->FromName  = $name;		
	$email->Subject   = $subject;		
	$email->Body      = $message;
	$email->AddAddress("matiblacher@gmail.com");
  //$email->AddAddress("info@voluntarios.org");

	$email->IsHTML(true); 

	//$email->Send();	

	if(!$email->Send()) {
		echo("Mailer Error: " . $email->ErrorInfo);
	} else {
  ?>
  <div class="col-md-6 col-md-offset-3 mess">                                                                 
      <h2 class="fh5co-lead animate-single faqs-animate-1 fadeIn animated">
        <?php echo($name_field." ".$lastname." "); ?>su mensaje fue enviado con exito. En la brevedad sera respondido a <?php echo($email_field);?>. Muchas Gracias!
      </h2>
  </div>

  <?php
	}

?>	