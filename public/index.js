$(document).ready(function () {
    $('#info-table').DataTable({
        responsive: {
            details: {
                renderer: function (api, rowIdx, columns) {
                    var data = $.map(columns, function (col, i) {
                        return col.hidden && col.title ?
                            '<div class="div-row col-md-12" data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                            '<span class="bold">' + col.title + '' + '</span> ' +
                            '<span>' + col.data + '</span>' +
                            '</div>' :
                            '';
                    }).join('');
                    return data ? '<div class="row">' + data + '</div>' : false;
                }
            }
        },
        "dom": '',
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
            "order": []
        }]
    });
});

$(document).ready(function () {
    $('#mainTable tfoot th').each(function () {
        var title = $(this).text();
        if (title) {
            $(this).html('<input type="text" class="fas" type="text" placeholder="&#xf002; Search ' + title + '" />');
        }
    });

    var table = $('#mainTable').DataTable({
        "dom": '<<t>lp>',
        "ajax": "data/mainTable.json",
        "pageLength": 5,
        "lengthMenu": [ 5, 10, 25, 50, 75, 100 ],
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">"
            },
            "lengthMenu": "Pages Per Row _MENU_  ",
        },
        "columnDefs": [{
            "targets": [0, 9],
            "data": null,
            "defaultContent": "<span></span>",
            "orderable": false,
        },
        { "targets": 1, "data": "email" },
        { "targets": 2, "data": "person" },
        { "targets": 3, "data": "fileCount" },
        { "targets": 4, "data": "fromCount" },
        { "targets": 5, "data": "toCount" },
        { "targets": 6, "data": "ccCount" },
        { "targets": 7, "data": "classification" },
        {
            "targets": 8,
            "data": null,
            "orderable": false,
            "defaultContent": '<span class="fas fa-ellipsis-v font-color-darkgray"></span>'
        }

        ],
        responsive: {
            details: {
                renderer: function (api, rowIdx, columns) {
                    var data = $.map(columns, function (col, i) {
                        return col.hidden && col.title ?
                            '<div class="div-row col-md-12" data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                            '<span class="bold">' + col.title + '' + '</span> ' +
                            '<span>' + col.data + '</span>' +
                            '</div>' :
                            '';
                    }).join('');

                    console.log(data)

                    var divData = data ? '<div class="row background-default">' + data + '</div>' : '';

                    var email = columns[1].data;

                    var expanded_row = `    <div class="row expanded-row">
                    <div class="col-lg-4">
                        <ul class="list-group">
                        <li class="list-group-item"><span>`+ email + `</span></li>
                        <li class="list-group-item"><input class="form-control" type="text" /></li>
                            <li class="list-group-item">
                                <div class="expanded-row-btn-group btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary active">
                                    <input type="radio" name="options" id="option1" checked> Alway Redact
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option2"> Never Redact
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option3"> Proceed Direct
                                </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>BEFORE ML SEARCH</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name" id="radio-name-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio-name" id="radio-name-2">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>REGEX</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name2" id="radio-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio-name2" id="radio-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>CLASSIFICATION</span>
                                    <div class="form-check">
                                    <label class="radio-container">DS
                                    <input type="radio" checked="checked" name="radio-name3" id="radio-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">Non DS
                                    <input type="radio" checked="checked" name="radio-name3" id="radio-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>IS KUDSE</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name4" id="radio-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio-name4" id="radio-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item"><button class="btn save"> save </button></li>
                        </ul>
                    </div>
                </div>
                <div class="row expanded-row">
                    <div class="col-lg-4">
                        <ul class="list-group">
                            <li class="list-group-item"><span>`+ email + `</span></li>
                            <li class="list-group-item"><input class="form-control" type="text" /></li>
                            <li class="list-group-item">
                                <div class="row">
                                <div class="expanded-row-btn-group btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary active">
                                    <input type="radio" name="optionsa" id="optiona1" checked> Alway Redact
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="optionsa" id="optiona2"> Never Redact
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="optionsa" id="optiona3"> Proceed Direct
                                </label>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>BEFORE ML SEARCH</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio1-name" id="radio1-name-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio1-name" id="radio1-name-2">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>REGEX</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio1-name2" id="radio1-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio1-name2" id="radio1-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>CLASSIFICATION</span>
                                    <div class="form-check">
                                    <label class="radio-container">DS
                                    <input type="radio" checked="checked" name="radio1-name3" id="radio1-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">Non DS
                                    <input type="radio" checked="checked" name="radio1-name3" id="radio1-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>IS KUDSE</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio1-name4" id="radio1-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio1-name4" id="radio1-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item"><button class="btn save"> save </button></li>
                        </ul>
                    </div>
                </div>
                `;

                    return expanded_row ? divData + expanded_row : false;
                }
            }
        },
        order: [[1, 'asc']],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;

                $('input', this.footer()).on('keyup change clear', function () {
                    if (that.search() !== this.value) {
                        that
                            .search(this.value)
                            .draw();
                    }
                });
            });
        }
    });
});