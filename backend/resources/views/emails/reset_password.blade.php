@extends("emails.layouts.default")

@section("content")
<p>Olá {{$user->name}},</p>
<p>Para resetar sua senha, por favor acesse o link abaixo.</p>
<p>Nele você poderá definir sua nova senha.</p>
<p><a href="{{$url}}">Clique aqui para acessar</a></p>
<p>Caso você não tenha solicitado o reset da sua senha, favor desconsiderar este e-mail.</p>
@endsection