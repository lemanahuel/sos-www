<?php  
require "phpmailer/class.phpmailer.php";
require "phpmailer/class.smtp.php";

$name_field="matias";
$email_field="mati maraca";
$textmsj_field="Hola soy un maricon y quiero ver si funciona";

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
      <td style='width:600px; background-color:#383838;'><table width='100%' border='0' cellspacing='0' cellpadding='0'>
        <tr>
          <td style='width:100px; height:50px;'>&nbsp;</td>
          <td style='height:50px;'>&nbsp;</td>
          <td style='width:100px; height:50px;'>&nbsp;</td>
        </tr>
        <tr>
          <td style='width:100px;'>&nbsp;</td>
          <td style='width:400px;'>
            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
              <tr>
              <tr align='center'>
                      <td style='width:400px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#FFF;text-align:center;'>&nbsp;</td>
              </tr>                    
                    <tr>
                      
                    </tr>
                <td>
                  <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                    <tr>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#FFF;'>Nombre:</td>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696;'>".$name_field."</td>
                    </tr>
                    <tr>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#FFF;'>Email:</td>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696;'>".$email_field."</td>
                    </tr>
                    <tr>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#FFF;'>Mensaje:</td>
                      <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696;'>".$textmsj_field."</td>
                    </tr>                    
                  </table>
                </td>
              </tr>
              <tr>
                <td style='height:50px;'>&nbsp;</td>
              </tr>
              <tr>
                <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-weight:bold; font-size:19px; color:#FFF; text-align:center;'>Ingresar</td>
              </tr>
              <tr>
                <td style='width:200px; font-family:\"Segoe UI\", Verdana, Geneva, sans-serif; font-size:19px; color:#969696; text-align:center;'>www.voluntariosos.org</td>
              </tr>  
              <tr>
                <td style='height:50px;'>&nbsp;</td>
              </tr>
              </table>
              </td>
              <td style='width:100px;'>&nbsp;</td>
            </tr>
            <tr>
              <td style='width:100px; height:50px;'>&nbsp;</td>
              <td style='height:50px;'>&nbsp;</td>
              <td style='width:100px; height:50px;'>&nbsp;</td>
            </tr>            <tr>
              <td  style='width:100px; height:50px;'>&nbsp;</td>
              <td  style='height:50px;'><img src='' width='154' height='42' align='right' /></td>
              <td  style='width:100px; height:50px;'>&nbsp;</td>
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
	$email->Username = 'azure_38eff7d503959de55c47dbeeed003336@azure.com';// SMTP username
	$email->Password = 'homero1234';// SMTP password
	$email->Port = 587;

	$email->From      = $from;		
	$email->FromName  = $name;		
	$email->Subject   = $subject;		
	$email->Body      = $message;
	$email->AddAddress("aptitudinteractiva@gmail.com");

	$email->IsHTML(true); 

	//$email->Send();	

	if(!$email->Send()) {
		echo("Mailer Error: " . $email->ErrorInfo);
	} else {
	}
?>		