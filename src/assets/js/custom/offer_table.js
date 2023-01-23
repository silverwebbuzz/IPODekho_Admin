"use strict";
var KTUsersList = function() {
    var e, t, n, r, o = document.getElementById("offer_table"),
        l = () => {
            const c = o.querySelectorAll('[type="checkbox"]');
            t = document.querySelector('[data-kt-user-table-toolbar="base"]'), n = document.querySelector('[data-kt-user-table-toolbar="selected"]'), r = document.querySelector('[data-kt-user-table-select="selected_count"]');
            const s = document.querySelector('[data-kt-user-table-select="delete_selected"]');
            c.forEach((e => {
                e.addEventListener("click", (function() {
                    setTimeout((function() {
                        a()
                    }), 50)
                }))
            }))
        };
    return {
        init: function() {
            o && (o.querySelectorAll("tbody tr").forEach((e => {
                // const t = e.querySelectorAll("td"),
                //     n = t[3].innerText.toLowerCase();
                // let r = 0,
                //     o = "minutes";
                // n.includes("yesterday") ? (r = 1, o = "days") : n.includes("mins") ? (r = parseInt(n.replace(/\D/g, "")), o = "minutes") : n.includes("hours") ? (r = parseInt(n.replace(/\D/g, "")), o = "hours") : n.includes("days") ? (r = parseInt(n.replace(/\D/g, "")), o = "days") : n.includes("weeks") && (r = parseInt(n.replace(/\D/g, "")), o = "weeks");
                // const c = moment().subtract(r, o).format();
                // const l = moment(t[2].innerHTML, "MMM DD YYYY, LT").format();
                // t[2].setAttribute("data-order", l)
            })), (e = $(o).DataTable({
                order: [],
                pageLength: 10,
                columnDefs: [{
                    orderable: !1,
                    targets: 0
                }]
            })).on("draw", (function() {
                l(), c(), a()
            })), l(), document.querySelector('[data-kt-news-table-filter="search"]').addEventListener("keyup", (function(t) {
                e.search(t.target.value).draw()
            })), document.querySelector('[data-kt-news-table-filter="reset"]').addEventListener("click", (function() {
                document.querySelector('[data-kt-news-table-filter="form"]').querySelectorAll("select").forEach((e => {
                    $(e).val("").trigger("change")
                })), e.search("").draw()
            })), c(), (() => {
                const t = document.querySelector('[data-kt-news-table-filter="form"]'),
                    n = t.querySelector('[data-kt-news-table-filter="filter"]'),
                    r = t.querySelectorAll("select");
                n.addEventListener("click", (function() {
                    var t = "";
                    r.forEach(((e, n) => {
                        e.value && "" !== e.value && (0 !== n && (t += " "), t += e.value)
                    })), e.search(t).draw()
                }))
            })())
        }
    }
}();
KTUtil.onDOMContentLoaded((function() {
    KTUsersList.init()
}));