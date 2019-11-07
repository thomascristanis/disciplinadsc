var tabela;

$(document).ready(function() {

    carregarTabela();
});


$(window).on('load', function() {

    $('#modalNovo').on('show.bs.modal', function() {
        carregarCurso($('#inputNovoCurso'));
    });

    $("#btnSalvar").click(function() {
        adicionarAluno();
    });

    $("#btnEditarSalvar").click(function() {
        editarAluno();
    });

    $("#btnDeletar").click(function() {
        deletarAluno();
    });

    $('#tabelaAlunos tbody').on('click', 'button', function() {
        tratamentoClickButton(this);
    });

});

function carregarTabela() {
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
        "order": [
            [0, "asc"]
        ],
        "columnDefs": [{
                "width": "5%",
                "targets": 0
            }, //ID
            {
                "width": "15%",
                "targets": 1
            }, //Matricula
            {
                "width": "30%",
                "targets": 2
            }, //Nome
            {
                "width": "10%",
                "targets": 3
            }, //Faltas
            {
                "width": "25%",
                "targets": 4
            }, //Curso
            {
                "width": "15%",
                "targets": 5
            }, //Editar/Deletar
        ],
        "aoColumns": [{
                "mData": "id"
            },
            {
                "mData": "matricula"
            },
            {
                "mData": "nome"
            },
            {
                "mData": "faltas"
            },
            {
                "mData": "curso.nome"
            },
            {
                data: null,
                className: "center",
                defaultContent: '<button type="button" class="editor_edit btn btn-warning btn-sm" data-toggle="modal" data-target="#modalEditar">Editar</button>  <button type="button" class="editor_remove btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDeletar">Deletar</button>'
            }
        ]
    });
}

function carregarCurso(inputCurso) {

    var optionCount = $(inputCurso).find("option").length

    if (optionCount == 1) { //Elemento Escolher
        $.ajax({
            url: "/api/curso/listar",
            type: "GET",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(obj) {
                if (obj != null) {
                    var data = obj;
                    // var selectbox = $('#inputNovoCurso');
                    $.each(data, function(i, d) {
                        inputCurso.append(new Option(d.nome, d.id));
                    });
                }
            }
        });
    }
}

function adicionarAluno() {
    var vData = JSON.stringify({
        "matricula": $('#inputNovoMatricula').val(),
        "nome": $('#inputNovoNome').val(),
        "faltas": $('#inputNovoFaltas').val(),
        "curso": {
            id: $('#inputNovoCurso option:selected').val(),
            nome: $('#inputNovoCurso option:selected').text()
        }
    });

    $.ajax({
            url: "/api/aluno/salvar",
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            data: vData,
            beforeSend: function() {

            }
        })
        .done(function(msg) {
            console.log("Aluno salvo!");
            $('#modalNovo').modal('hide');
            tabela.ajax.reload();
        })
        .fail(function(jqXHR, textStatus, msg) {
            alert("ERRO " + msg);
        });
}

function editarAluno() {
    var vData = JSON.stringify({
        "matricula": $('#inputEditarMatricula').val(),
        "nome": $('#inputEditarNome').val(),
        "faltas": $('#inputEditarFaltas').val(),
        "curso": {
            id: $('#inputEditarCurso option:selected').val(),
            nome: $('#inputEditarCurso option:selected').text()
        }
    });
    $.ajax({
            url: "/api/aluno/editar/" + $('#fieldEditarID').val(),
            type: "PUT",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            data: vData,
        })
        .done(function(msg) {
            console.log("Aluno editado!");
            $('#modalEditar').modal('hide');
            tabela.ajax.reload();
        })
        .fail(function(jqXHR, textStatus, msg) {
            alert("ERRO " + msg);
        });

}

function deletarAluno() {

    var dele = $('#fieldDeleteID').val();

    $.ajax({
            url: "/api/aluno/deletar/" + $('#fieldDeleteID').val(),
            type: "DELETE",
        })
        .done(function(msg) {
            console.log("Aluno deletado!");
            $('#modalDeletar').modal('hide');
            tabela.ajax.reload();
        })
        .fail(function(jqXHR, textStatus, msg) {
            alert("ERRO " + msg);
        });
}

function tratamentoClickButton(button) {

    var linha = $(button).parent().parent();
    var id = tabela.row(linha).data().id;

    if (button.innerText == "Editar") {

        carregarCurso($('#inputEditarCurso'));

        $("#fieldEditarID").val(id);

        $.ajax({
            url: "/api/aluno/listar/" + id,
            type: "GET",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(obj) {
                if (obj != null) {
                    $('#inputEditarMatricula').val(obj.matricula)
                    $('#inputEditarNome').val(obj.nome)
                    $('#inputEditarFaltas').val(obj.faltas)

                    var selectbox = $('#inputEditarCurso option');

                    $.each(selectbox, function(i, d) {
                        if (parseInt(d.value) == obj.curso.id) {

                            $(d).attr('selected', 'selected');
                        }
                    });
                };
            }
        });

    } else if (button.innerText == "Deletar") {
        $("#fieldDeleteID").val(id);

    }
}
