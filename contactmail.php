<?php
// Pear Mail Library
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';
require './PHPMailer-master/src/Exception.php';


function sendEmailViaSMTP($to, $subject, $body) {
// print_r($to);
// print_r($subject);
// print_r($body);
//     die("15");
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Enable SMTP debugging. Set it to 0 for production use.
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // Your SMTP server address
    $mail->SMTPAuth   = true;
    $mail->Username   = 'updates@pridel.com';    // SMTP username
    $mail->Password   = 'pridelupdates2121';    // SMTP password
    $mail->SMTPSecure = 'ssl';              // Enable TLS encryption
    $mail->Port       = 465;                // TCP port to connect to 587,25
    
    // Sender and recipient settings
    $mail->setFrom('info@meetfleet.tv', 'meetfleet.tv');
    $mail->addAddress($to);
    $mail->addAddress('info@meetfleet.tv');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail_status = $mail->send();
    // print_r($mail);
    // print_r($mail_status);die();

    if ($mail->send()) {
        echo 'Email sent successfully.';
        return true;
    } else {
        echo 'Error sending email: ' . $mail->ErrorInfo;
    }
}

// sendEmailViaSMTP($to, $subject, $body);

$to = $_POST['email'];
$subject = 'meetfleet.tv Mail';
$body = '<h2>meetfleet.tv Email.</h2></br>
<table style="width:100% border:1px solid black;border-collapse: collapse;">
  <tr>
    <th style="border: 1px solid black;">Name</th>
    <th style="border: 1px solid black;">Email</th>
    <th style="border: 1px solid black;">Message</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">'.$_POST['name'].'</td>
    <td style="border: 1px solid black;">'.$_POST['email'].'</td>
    <td style="border: 1px solid black;">'.$_POST['message'].'</td>
  </tr>
</table>

';

// $val = sendEmailViaSMTP($to, $subject, $body);

 // Send emailffc
    if (sendEmailViaSMTP($to, $subject, $body)) {
       echo '<script>window.location.href = "contact-us.html";</script>';
exit;
    } else {
        // Handle email sending failure
        // You can display an error message here if needed
    }

?>