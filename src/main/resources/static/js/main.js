$(document).ready( function () {
    var table = $('#example').DataTable({
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