$(document).ready(function () {
  $("#info-table").DataTable({
    responsive: {
      details: {
        renderer: function (api, rowIdx, columns) {
          var data = $.map(columns, function (col, i) {
            return col.hidden && col.title
              ? '<div class="div-row col-md-12" data-dt-row="' +
              col.rowIndex +
              '" data-dt-column="' +
              col.columnIndex +
              '">' +
              '<span class="bold">' +
              col.title +
              "" +
              "</span> " +
              "<span>" +
              col.data +
              "</span>" +
              "</div>"
              : "";
          }).join("");
          return data ? '<div class="row">' + data + "</div>" : false;
        }
      }
    },
    dom: "",
    columnDefs: [
      {
        targets: "no-sort",
        orderable: false,
        order: []
      }
    ]
  });
});



$(document).ready(function () {
  $("#qfTable tfoot th").each(function () {
    var title = $(this).text();
    if (title) {
      $(this).html(
        '<input type="text" class="fas text-align-start" type="text" placeholder="&#xf002; Search ' +
        title +
        '" />'
      );
    }
  }
  )

  $("#mysarsTable tfoot th").each(function () {
    var title = $(this).text();
    if (title) {
      $(this).html(
        '<input type="text" class="fas text-align-start" type="text" placeholder="&#xf002; Search ' +
        title +
        '" />'
      );
    }
  });

  $("#mysarsTable").DataTable({
    dom: "<<t>lp>",
    ajax: "data/mysarsTable.json",
    pageLength: 10,
    lengthMenu: [5, 10, 25, 50, 75, 100],
    language: {
      paginate: {
        previous: "<",
        next: ">"
      },
      lengthMenu: "Pages Per Row _MENU_  "
    },
    columnDefs: [
      { targets: 0, data: "sarName"},
      { targets: 1, data: "client"},
      { targets: 2, data: "startDate"},
      { targets: 3, data: "deadline"},
      { targets: 4, data: "status" },
      {
        targets: 5,
        data: null,
        orderable: false,
        defaultContent:
          '<span class="fas fa-ellipsis-v font-color-darkgray"></span>'
      }
    ],
    responsive: true,
    order: [[0, "asc"]],
  });


  $("#fileTable").DataTable({
    dom: "<<t>lp>",
    ajax: "data/fileDetail.json",
    pageLength: 5,
    lengthMenu: [5, 10, 25, 50, 75, 100],
    language: {
      paginate: {
        previous: "<",
        next: ">"
      },
      lengthMenu: "Pages Per Row _MENU_  "
    },
    columnDefs: [
      { targets: 0, data: "text", class:"clickable"},
      { targets: 1, data: "label", class:"clickable"},
      { targets: 2, data: "regex", class:"clickable"},
      { targets: 3, data: "isKudse", class:"clickable"},
      { targets: 4, data: "classification", class:"clickable"},
      { targets: 5, data: "ml", class:"clickable"},
      { targets: 6, data: "redact" }

    ],
    responsive: true,
    order: [[0, "asc"]],
  });


  $("#feTable tfoot th").each(function () {
    var title = $(this).text();
    if (title) {
      $(this).html(
        '<input type="text" class="fas text-align-start" type="text" placeholder="&#xf002; Search ' +
        title +
        '" />'
      );
    }
  });



  $("#feTable").DataTable({
    dom: "<<t>lp>",
    ajax: "data/feTable.json",
    pageLength: 10,
    lengthMenu: [5, 10, 25, 50, 75, 100],
    language: {
      paginate: {
        previous: "<",
        next: ">"
      },
      lengthMenu: "Pages Per Row _MENU_  "
    },
    columnDefs: [
      {
        orderable: false,
        defaultContent: "<span></span>",
        'targets': 0,
      },
      {
        orderable: false,
        className: 'select-checkbox',
        data: null,
        defaultContent: "<span></span>",
        'targets': 1,
      },

      { targets: 2, data: "file", "width": "7%", class:"clickable"},
      { targets: 3, data: "label", "width": "7%", class:"clickable"},
      { targets: 4, data: "fileClassification", "width": "8%", class:"clickable"},
      { targets: 5, data: "maxClassification", "width": "8%", class:"clickable"},
      { targets: 6, data: "kudse", "width": "8%", class:"clickable"},
      { targets: 7, data: "fcp", "width": "8%", class:"clickable"},
      { targets: 8, data: "mcp", "width": "8%", class:"clickable"},
      { targets: 9, data: "dsnm", "width": "8%", class:"clickable"},
      { targets: 10, data: "dsgm", "width": "8%", class:"clickable"},
      { targets: 11, data: "kudsep", "width": "8%", class:"clickable"},
      { targets: 12, data: "fromtoccds", "width": "8%", class:"clickable"},
      { targets: 13, data: "inattachment", "width": "8%" }
    ],
    select: {
      style: 'multi',
      selector: 'td:nth-child(2)'
    },
    responsive: true,
    order: [[1, "asc"]],
    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();
            }
          });
        });
    }
  });



  $("#qfTable").DataTable({
    dom: "<<t>lp>",
    ajax: "data/qfTable.json",
    pageLength: 5,
    lengthMenu: [5, 10, 25, 50, 75, 100],
    language: {
      paginate: {
        previous: "<",
        next: ">"
      },
      lengthMenu: "Pages Per Row _MENU_  "
    },
    columnDefs: [
      {
        orderable: false,
        // className: 'select-checkbox',
        // 'checkboxes': {
        //   'selectRow': true
        // },
        //  data:null,
        defaultContent: "<span></span>",
        'targets': 0,
      },
      {
        orderable: false,
        className: 'select-checkbox',
        // 'checkboxes': {
        //   'selectRow': true
        // },
        data: null,
        defaultContent: "<span></span>",
        'targets': 1,
      },
      { targets: 2, data: "fname", class:"clickable"},
      { targets: 3, data: "attachment", class:"clickable"},
      { targets: 4, data: "sourceFile", class:"clickable"},
      { targets: 5, data: "ext", class:"clickable"},
      { targets: 6, data: "duplicate", class:"clickable"},
      { targets: 7, data: "duplicateOf", class:"clickable"},
      { targets: 8, data: "spam", class:"clickable"},
      { targets: 9, data: "fromToCCDS", class:"clickable"},
      { targets: 10, data: "processingError", class:"clickable" }
    ],
    // createdRow: function (row, data, dataIndex) {
    //   // Set the data-status attribute, and add a class
    //   // data-toggle="modal" data-target="#file-detail-modal-2"
    //   $(row).find('.clickable')
    //     .attr('data-target', '#file-detail-modal-2')
    //     .attr('data-toggle', 'modal')
    //   // .addClass('asset-context box');
    // },
    select: {
      style: 'multi',
      selector: 'td:nth-child(2)'
    },
    responsive: true,
    order: [[1, "asc"]],
    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();
            }
          });
        });
    }
  });

});

// $('#data-table').DataTable( {
//   createdRow: function( row, data, dataIndex ) {
//       // Set the data-status attribute, and add a class
//       $( row ).find('td:eq(0)')
//           .attr('data-status', data.status ? 'locked' : 'unlocked')
//           .addClass('asset-context box');
//   }
// } );

$(document).ready(function () {
  $("#dsTable tfoot th").each(function () {
    var title = $(this).text();
    if (title) {
      $(this).html(
        '<input type="text" class="fas text-align-start" type="text" placeholder="&#xf002; Search ' +
        title +
        '" />'
      );
    }
  });

  var table = $("#dsTable").DataTable({
    dom: "<<t>lp>",
    ajax: "data/dsTable.json",
    createdRow: function (row, data, dataIndex) {
      // Set the data-status attribute, and add a class
      // data-toggle="modal"
      $(row).find('.clickable')
        .attr('data-target', '#file-detail-modal')
        .attr('data-toggle', 'modal')
      // .addClass('asset-context box');
    },
    pageLength: 5,
    lengthMenu: [5, 10, 25, 50, 75, 100],
    language: {
      paginate: {
        previous: "<",
        next: ">"
      },
      lengthMenu: "Pages Per Row _MENU_  "
    },
    columnDefs: [
      {
        targets: [0, 9],
        data: null,
        defaultContent: "<span></span>",
        orderable: false
      },
      { targets: 1, data: "email", class:"clickable"},
      { targets: 2, data: "person", class:"clickable"},
      { targets: 3, data: "fileCount", class:"clickable"},
      { targets: 4, data: "fromCount", class:"clickable"},
      { targets: 5, data: "toCount", class:"clickable"},
      { targets: 6, data: "ccCount", class:"clickable"},
      { targets: 7, data: "classification", class:"clickable"},
      {
        targets: 8,
        data: null,
        orderable: false,
        defaultContent:
          '<span class="fas fa-ellipsis-v font-color-darkgray"></span>'
      }
    ],
    responsive: {
      details: {
        renderer: function (api, rowIdx, columns) {
          var data = $.map(columns, function (col, i) {
            return col.hidden && col.title
              ? '<div class="div-row col-md-12" data-dt-row="' +
              col.rowIndex +
              '" data-dt-column="' +
              col.columnIndex +
              '">' +
              '<span class="bold">' +
              col.title +
              "" +
              "</span> " +
              "<span>" +
              col.data +
              "</span>" +
              "</div>"
              : "";
          }).join("");

          var divData = data
            ? '<div class="row background-default">' + data + "</div>"
            : "";

          var email = columns[1].data;

          var expanded_row =
            `    <div class="row expanded-row">
                    <div class="col-lg-3">
                        <ul class="list-group">
                        <li class="list-group-item" data-toggle="modal" data-target="#file-detail-modal-2"><span>` +
            email +
            `</span></li>
                        <li class="list-group-item"><input class="form-control" type="text" /></li>
                            <li class="list-group-item">
                                <div class="expanded-row-btn-group btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary active">
                                    <input type="radio" name="options" id="option1" checked> ALWAYS REDACT
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option2"> NEVER REDACT
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option3"> PROCEED DIRECT
                                </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <ul class="list-group padding-left">
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
                                    <span>CLASSIFICATION</span>
                                    <div class="form-check">
                                    <label class="radio-container">DS
                                    <input type="radio" checked="checked" name="radio-name2" id="radio-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">NON DS
                                    <input type="radio" checked="checked" name="radio-name2" id="radio-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group padding-left">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>REGEX</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name3" id="radio-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
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
                            <li class="list-group-item"><button class="btn save"> SAVE </button></li>
                        </ul>
                    </div>
                </div>
                <div class="row expanded-row">
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item" data-toggle="modal" data-target="#file-detail-modal-2"><span>` +
            email +
            `</span></li>
                            <li class="list-group-item"><input class="form-control" type="text" /></li>
                            <li class="list-group-item">
                                <div class="row">
                                <div class="expanded-row-btn-group btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary active">
                                    <input type="radio" name="optionsa" id="optiona1" checked> ALWAYS REDACT
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="optionsa" id="optiona2"> NEVER REDACT
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="optionsa" id="optiona3"> PROCEED DIRECT
                                </label>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <ul class="list-group padding-left">
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
                                    <span>CLASSIFICATION</span>
                                    <div class="form-check">
                                    <label class="radio-container">DS
                                    <input type="radio" checked="checked" name="radio1-name2" id="radio1-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">NO DS
                                    <input type="radio" checked="checked" name="radio1-name2" id="radio1-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group padding-left">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>REGEX</span>
                                    <div class="form-check">
                                    <label class="radio-container">TRUE
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
                            <li class="list-group-item"><button class="btn save"> SAVE </button></li>
                        </ul>
                    </div>
                </div>
                `;

          return expanded_row ? divData + expanded_row : false;
        }
      }
    },
    order: [[1, "asc"]],
    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();
            }
          });
        });
    }
  });
});

function openNav() {
  var elmnt = document.getElementById("body");
  var width = elmnt.offsetWidth || "70%";

  if (width < 800) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "70%";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function createChip(e) {
  var value = document.getElementById(e).value;
  document.getElementById(e).value = null;
  var chipDiv = document.getElementById(e + "Chips").innerHTML;
  var newChip = null;
  if (value) {
    newChip = `
            <div class="chip" >
             `+ value + `
             <span onclick="this.parentElement.style.display='none'">&times;</span>
            </div>
      `

  }
  document.getElementById(e + "Chips").innerHTML = chipDiv + newChip;

}

$(".stepper__item").click(function () {
  $(".stepper__item").removeClass('active');
});

$(".md-step").click(function () {
  $(".md-step").removeClass('active');
  $(".form-btn").removeClass('active');

});

$(".form-btn").click(function (e) {
  var id = e.target.attributes.href.value ? e.target.attributes.href.value.replace("#", "") : "";
  $(".md-step").removeClass('active');
  var classes = document.getElementById(id + "id").className;
  document.getElementById(id + "id").className = classes + " active";
  //   $(id+"id").removeClass('active');
  $(".form-btn").removeClass('active');
});

// $(".group-row").hover(function () {
//   $(this).addClass("group-row-box-shadow");
// }, function () {
//   $(this).removeClass("group-row-box-shadow");
// });

// $(".checkmark-box").click(function () {
//   console.log(this, "ddddd")
//   if (this.checked) {
//     $(this).parent().parent().parent().addClass("group-row-box-shadow");
//   }
//   else {
//     $(this).parent().parent().parent().removeClass("group-row-box-shadow");
//   }
// });

// $(".checkmark-box").after().click(function(){
 
//     $(this).parent().parent().parent().parent().addClass("group-row-box-shadow");
    
// });


function toggle(id){
if(document.getElementById(id).checked){
  document.getElementById(id).parentElement.parentElement.parentElement.parentElement.classList.add('group-row-box-shadow')
}
else{
  document.getElementById(id).parentElement.parentElement.parentElement.parentElement.classList.remove('group-row-box-shadow')
}
}
