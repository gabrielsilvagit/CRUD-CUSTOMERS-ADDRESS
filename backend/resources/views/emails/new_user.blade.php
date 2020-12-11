@extends("emails.layouts.default")

@section("content")
<p style="font-size: 16px;">Olá <strong>{{$user->name}}</strong>,</p>
<br>
<br>
<p>Você foi cadastrado em nosso sistema como usuário. Para acessa-lo utilize o email, e a senha temporária abaixo</p>
<br>
<p><strong>e-mail</strong>: {{$user->email}}</p>
<p><strong>password</strong>: {{$tempPassword}}</p>
<br>
<p style="text-align: center; padding-top: 20px; padding-bottom: 20px;">
    <a style="background-color: #0f4c81; color: #ffffff; padding: 10px 15px; text-decoration: none"  href="{{env('APP_URL')}}">Clique aqui para acessar</a>
</p>
@endsection