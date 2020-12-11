<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            height: 100%;
        }

        body {
            background-color: #f0f0f0;
            font-family: verdana, sans-serif;
            font-size: 14px;
        }

        table {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <table>
        <thead>
            <tr>
                <td style="padding-top: 10px; padding-bottom: 10px; text-align: center">
                    <img src="https://api.cms.w2z.com.br/assets/imgs/logo_w2z.png" alt="W2Z Soluções em TI" />
                </td>
            </tr>
        </thead>
        <tr>
            <td bgColor="#ffffff" style="padding: 20px;">
                @yield("content")
            </td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align:center; text-transform: uppercase; font-size: 12px;">
                W2Z Soluções em TI
            </td>
        </tr>
    </table>
</body>

</html>
