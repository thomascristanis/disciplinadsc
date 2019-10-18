$(document).ready( function () {
    var table = $('#tabelaAlunos').DataTable({
        //   paging: false,
        //   searching: false,
          "language": {
              "paginate": {
                  "previous": "Anterior",
                  "next": "Próximo"
                }
            },
        "sAjaxSource": "/api/aluno/listar",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "aoColumns": [
            { "mData": "id"},
            { "mData": "nome" },
            { "mData": "matricula" },
            { "mData": "faltas" }
        ]
	 })
});