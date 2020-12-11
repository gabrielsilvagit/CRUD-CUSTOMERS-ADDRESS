@php
ini_set("precision", "15");
@endphp
<table>
    <thead>
        <tr>
            <th style="width: 10px;">ID</th>
            <th style="width: 10px;">Código</th>
            <th style="width: 30px;">Nome</th>
            <th style="width: 30px;">Categoria</th>
            <th style="width: 30px;">Subcategoria</th>
            <th style="width: 30px;">Marca</th>
            <th style="width: 30px;">Modelo</th>
            <th style="width: 30px;">Serial</th>
            <th style="width: 30px;">Departamento</th>
            <th style="width: 20px;">Responsável</th>
            <th style="width: 15px;">Nota Fiscal</th>

            <th style="width: 20px;">Data de Aquisição</th>
            <th style="width: 30px;">Valor de Aquisição</th>
            <th style="width: 20px;">Movimento</th>
            <th style="width: 30px;">OBS.</th>
            <th style="width: 10px;">Ativo</th>
            <th style="width: 20px;">Criado em</th>
            <th style="width: 20px;">Atualizado em</th>
        </tr>
    </thead>
    <tbody>
        @foreach($products as $product)
        <tr>
            <td style="text-transform:uppercase;">{{ $product->id }}</td>
            <td style="text-transform:uppercase;">{{ $product->code_seq }}</td>
            <td style="text-transform:uppercase;">{{ $product->name }}</td>

            <td style="text-transform:uppercase;">
                {{ App\Models\InventoryCategory::where('id', $product->inventory_category_id)->withTrashed()->first()->name ?? 'N/A' }}
            </td>
            <td style="text-transform:uppercase;">
                {{ App\Models\InventorySubCategory::where('id', $product->inventory_sub_category_id)->withTrashed()->first()->name ?? 'N/A' }}
            </td>
            <td style="text-transform:uppercase;">
                {{ App\Models\InventoryBrand::where('id', $product->inventory_brand_id)->withTrashed()->first()->name ?? 'N/A' }}
            </td>
            <td style="text-transform:uppercase;">
                {{ App\Models\InventoryModel::where('id', $product->inventory_model_id)->withTrashed()->first()->name ?? 'N/A' }}
            </td>

            <td style="text-transform:uppercase;">{{ $product->serial ? $product->serial : 'N/A' }}</td>
            <td style="text-transform:uppercase;">{{ $product->department ? $product->department : 'N/A' }}</td>
            <td style="text-transform:uppercase;">{{ $product->responsible ? $product->responsible : 'N/A' }}</td>
            <td style="text-transform:uppercase;">{{ $product->acquisition_nf ? $product->acquisition_nf : 'N/A' }}</td>
            <td style="text-transform:uppercase;">
                {{ $product->acquisition_date ? Carbon\Carbon::parse($product->acquisition_date)->format('d/m/Y') : 'N/A' }}
            </td>
            <td style="text-transform:uppercase;">
                {{ $product->acquisition_value ? $product->acquisition_value : 'N/A' }}</td>
            <td style="text-transform:uppercase;">{{ $product->conservation ? $product->conservation : 'N/A' }}</td>
            <td style="text-transform:uppercase;">{{ $product->notes ? $product->notes : 'N/A' }}</td>
            <td style="text-transform:uppercase;">{{ $product->active ? 'SIM' : 'N/A' }}</td>
            <td>{{ Carbon\Carbon::parse($product->created_at)->format('d/m/Y H:i') }}</td>
            <td>{{ Carbon\Carbon::parse($product->updated_at)->format('d/m/Y H:i') }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
