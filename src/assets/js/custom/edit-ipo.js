"use strict";
var KTAppEcommerceSaveProduct = function() {
    const e = () => {
            $("#kt_ecommerce_add_product_options").repeater({
                initEmpty: !1,
                defaultValues: {
                    "text-input": "foo"
                },
                show: function() {
                    $(this).slideDown(), t()
                },
                hide: function(e) {
                    $(this).slideUp(e)
                }
            })
        },
        t = () => {
            document.querySelectorAll('[data-kt-ecommerce-catalog-add-product="product_option"]').forEach((e => {
                $(e).hasClass("select2-hidden-accessible") || $(e).select2({
                    minimumResultsForSearch: -1
                })
            }))
        };
    return {
        init: function() {
            var o, a;
            ["#kt_company_description", "#kt_objects_issue_description"].forEach((e => {
                let t = document.querySelector(e);
                t && (t = new Quill(e, {
                    modules: {
                        toolbar: [
                            ["bold", "italic", "underline"],
                            [{ "list": "ordered"}, { "list": "bullet" }],
                            ["link"]
                        ]
                    },
                    placeholder: "Type your text here...",
                    theme: "snow"
                }))
            })),
            ["#kt_company_description_view", "#kt_objects_issue_description_view"].forEach((e => {
                let t = document.querySelector(e);
                t && (t = new Quill(e, {
                    modules: {
                        toolbar: [
                            ["bold", "italic", "underline"],
                            [{ "list": "ordered"}, { "list": "bullet" }],
                            ["link"]
                        ]
                    },
                    placeholder: "Type your text here...",
                    theme: "snow",
                    readOnly: true,
                }))
            })), t(), (() => {
                const e = document.getElementById("kt_ipo_status"),
                    t = document.getElementById("kt_ipo_status_select"),
                    o = ["bg-danger", "bg-warning", "bg-primary", "bg-info", "bg-success"];
                $(t).on("change", (function(t) {
                    switch (t.target.value) {
                        case "live":
                            e.classList.remove(...o), e.classList.add("bg-danger");
                            break;
                        case "waitingallotment":
                            e.classList.remove(...o), e.classList.add("bg-warning");
                            break;
                        case "allotmentout":
                            e.classList.remove(...o), e.classList.add("bg-primary");
                            break;
                        case "upcoming":
                            e.classList.remove(...o), e.classList.add("bg-info");
                            break;
                        case "listed":
                            e.classList.remove(...o), e.classList.add("bg-success")
                    }
                }));
            })(), (() => {
                const e = document.querySelectorAll('[name="method"][type="radio"]'),
                    t = document.querySelector('[data-kt-ecommerce-catalog-add-category="auto-options"]');
                e.forEach((e => {
                    e.addEventListener("change", (e => {
                        "1" === e.target.value ? t.classList.remove("d-none") : t.classList.add("d-none")
                    }))
                }))
            })(), (() => {
                $('#kt_promoters_list').repeater({
                    initEmpty: false,
                    defaultValues: {
                        'text-input': 'foo'
                    },
                    show: function () {
                        $(this).slideDown();
                    },
                    hide: function (deleteElement) {
                        $(this).slideUp(deleteElement);
                    }
                });
            })(), (() => {
                $('#kt_financial_info').repeater({
                    initEmpty: false,
                    defaultValues: {
                        'text-input': 'foo'
                    },
                    show: function () {
                        $(this).slideDown();
                    },
                    hide: function (deleteElement) {
                        $(this).slideUp(deleteElement);
                    }
                });
            })(), (() => {
                $('#kt_ipo_lot_size_repeater').repeater({
                    initEmpty: false,
                    defaultValues: {
                        'text-input': 'foo'
                    },
                    show: function () {
                        $(this).slideDown();
                    },
                    hide: function (deleteElement) {
                        $(this).slideUp(deleteElement);
                    }
                });
            })(), (() => {
                $('#kt_ipo_peers_comparison_repeater').repeater({
                    initEmpty: false,
                    defaultValues: {
                        'text-input': 'foo'
                    },
                    show: function () {
                        $(this).slideDown();
                    },
                    hide: function (deleteElement) {
                        $(this).slideUp(deleteElement);
                    }
                });
            })(), (() => {
                $('#kt_subscription_repeater').repeater({
                    initEmpty: false,
                    defaultValues: {
                        'text-input': 'foo'
                    },
                    show: function () {
                        $(this).slideDown();
                    },
                    hide: function (deleteElement) {
                        $(this).slideUp(deleteElement);
                    }
                });
            })(), (() => {
                $("#ipo_open_date").daterangepicker({
                    singleDatePicker: true,
			        showDropdowns: true,
			        minYear: 1901,
			        autoApply: true,
			        locale: {
				      format: 'MMM DD, YYYY'
				    },
			        maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#ipo_close_date").daterangepicker({
                    singleDatePicker: true,
			        showDropdowns: true,
			        minYear: 1901,
			        autoApply: true,
			        locale: {
				      format: 'MMM DD, YYYY'
				    },
			        maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#ipo_allotment_date").daterangepicker({
                    singleDatePicker: true,
			        showDropdowns: true,
			        minYear: 1901,
			        autoApply: true,
			        locale: {
				      format: 'MMM DD, YYYY'
				    },
			        maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#ipo_refunds_date").daterangepicker({
                    singleDatePicker: true,
			        showDropdowns: true,
			        minYear: 1901,
			        autoApply: true,
			        locale: {
				      format: 'MMM DD, YYYY'
				    },
			        maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#ipo_demat_date").daterangepicker({
                    singleDatePicker: true,
			        showDropdowns: true,
			        minYear: 1901,
			        autoApply: true,
			        locale: {
				      format: 'MMM DD, YYYY'
				    },
			        maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#ipo_listing_date").daterangepicker({
                    singleDatePicker: true,
			        showDropdowns: true,
			        minYear: 1901,
			        autoApply: true,
			        locale: {
				      format: 'MMM DD, YYYY'
				    },
			        maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $(".kt_financial_info_period").daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    autoApply: true,
                    locale: {
                      format: 'MMM DD, YYYY'
                    },
                    maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $(".kt_subscription_date").daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    autoApply: true,
                    locale: {
                      format: 'MMM DD, YYYY'
                    },
                    maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#live_listtiing_date").daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    autoApply: true,
                    locale: {
                      format: 'MMM DD, YYYY'
                    },
                    maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                $("#live_closing_date").daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    autoApply: true,
                    locale: {
                      format: 'MMM DD, YYYY'
                    },
                    maxYear: parseInt(moment().format("YYYY"),12)
                });
            })(), (() => {
                const e = document.querySelectorAll('input[name="discount_option"]'),
                    t = document.getElementById("kt_ecommerce_add_product_discount_percentage"),
                    o = document.getElementById("kt_ecommerce_add_product_discount_fixed");
                e.forEach((e => {
                    e.addEventListener("change", (e => {
                        switch (e.target.value) {
                            case "2":
                                t.classList.remove("d-none"), o.classList.add("d-none");
                                break;
                            case "3":
                                t.classList.add("d-none"), o.classList.remove("d-none");
                                break;
                            default:
                                t.classList.add("d-none"), o.classList.add("d-none")
                        }
                    }))
                }))
            })(), (() => {
                let e;
                const t = document.getElementById("edit_ipo_form"),
                    o = document.getElementById("kt_ecommerce_add_product_submit");
                e = FormValidation.formValidation(t, {
                    fields: {
                        product_name: {
                            validators: {
                                notEmpty: {
                                    message: "Product name is required"
                                }
                            }
                        },
                        sku: {
                            validators: {
                                notEmpty: {
                                    message: "SKU is required"
                                }
                            }
                        },
                        sku: {
                            validators: {
                                notEmpty: {
                                    message: "Product barcode is required"
                                }
                            }
                        },
                        shelf: {
                            validators: {
                                notEmpty: {
                                    message: "Shelf quantity is required"
                                }
                            }
                        },
                        price: {
                            validators: {
                                notEmpty: {
                                    message: "Product base price is required"
                                }
                            }
                        },
                        tax: {
                            validators: {
                                notEmpty: {
                                    message: "Product tax class is required"
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger,
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: ""
                        })
                    }
                }), o.addEventListener("click", (a => {
                    a.preventDefault(), e && e.validate().then((function(e) {
                        console.log("validated!"), "Valid" == e ? (o.setAttribute("data-kt-indicator", "on"), o.disabled = !0, setTimeout((function() {
                            o.removeAttribute("data-kt-indicator"), Swal.fire({
                                text: "Form has been successfully submitted!",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then((function(e) {
                                e.isConfirmed && (o.disabled = !1, window.location = t.getAttribute("data-kt-redirect"))
                            }))
                        }), 2e3)) : Swal.fire({
                            html: "Sorry, looks like there are some errors detected, please try again. <br/><br/>Please note that there may be errors in the <strong>General</strong> or <strong>Advanced</strong> tabs",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        })
                    }))
                }))
            })()
        }
    }
}();
KTUtil.onDOMContentLoaded((function() {
    KTAppEcommerceSaveProduct.init()
}));