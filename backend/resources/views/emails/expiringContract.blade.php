@extends("emails.layouts.default")

@section("content")
<p>Olá {{$customer->name}},</p>
<p>O seu contrato do produto <b>{{ strtoupper($contract->product->name) }}</b> encontra-se próximo a data de expiração.
</p>
<h3>Mais informações</h3>
<p>Inicio do Contrato - <b>{{$contract->started_at->format('d/m/Y')}}</b></p>
<p>Expiração do Contrato - <b>{{$contract->started_at->format('d/m/Y')}}</b></p>
@endsection
