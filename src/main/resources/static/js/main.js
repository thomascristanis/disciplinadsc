var tabela;
$(document).ready( function () {

    tabela = $('#tabelaAlunos').DataTable({
        //   paging: false,
        //   searching: false,
          "language": {
               "emptyTable": 'Nenhum resultado foi encontrado',
              "paginate": {
                  "previous": "Anterior",
                  "next": "Próximo"
                }
            },
        "sAjaxSource": "/api/aluno/listar",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "columnDefs": [
            { "width": "10%", "targets": 0 }, //ID
            { "width": "20%", "targets": 1 }, //matricula
            { "width": "40%", "targets": 2 }, //nome
            { "width": "10%", "targets": 3 }, //faltas
            { "width": "20%", "targets": 4 } //editar/deletar
        ],
        "aoColumns": [
            { "mData": "id"},
            { "mData": "matricula" },
            { "mData": "nome" },
            { "mData": "faltas" },
            {
                data: null,
                className: "center",
                defaultContent: '<button type="button" class="editor_edit btn btn-warning btn-sm" data-toggle="modal" data-target="#modalEditar">Editar</button>  <button id="btnTableDeletar" type="button" class="editor_remove btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDeletar">Deletar</button>'
            }
        ]
     })
});