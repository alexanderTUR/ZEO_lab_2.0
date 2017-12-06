<?
       if((isset($_POST['mail'])&&$_POST['mail']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'alexandertur.fe@gmail.com ';//Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'ZEO lab 2.0 new subscriber'; //Загаловок сообщения

        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Mail: '.$_POST['mail'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: ZEO lab 2.0 \r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    }
?>