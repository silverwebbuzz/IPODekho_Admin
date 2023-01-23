"use strict";
var KTCustomersList = function() {
    var t, e, o, n
    return {
        init: function() {
            (n = document.querySelector("#contact_entries_table")) && (n.querySelectorAll("tbody tr").forEach((t => {
                const e = t.querySelectorAll("td"),
            })), (t = $(n).DataTable({
                info: !1,
                order: [],
                columnDefs: [{
                    orderable: !1,
                    targets: 0
                }, {
                    orderable: !1,
                    targets: 6
                }]
            })) document.querySelector('[data-kt-entries-table-filter="search"]').addEventListener("keyup", (function(e) {
                t.search(e.target.value).draw()
            }))
        }
    }
}();
KTUtil.onDOMContentLoaded((function() {
    KTCustomersList.init()
}));