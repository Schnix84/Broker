(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/moment/src/lib/locale sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/moment/src/lib/locale sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/moment/src/lib/locale sync recursive";

/***/ }),

/***/ "./src/app/ExchangesList/exchanges-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ExchangesList/exchanges-list.component.ts ***!
  \***********************************************************/
/*! exports provided: ExchangesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesListComponent", function() { return ExchangesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _financial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../financial.service */ "./src/app/financial.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");









function ExchangesListComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r0.availableExchanges.length, "): ");
} }
function ExchangesListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " W\u00E4hrung ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExchangesListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r4 = ctx.$implicit;
    const exchange_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSelectableRow", rowData_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exchange_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exchange_r5.code == "indices" ? "PKT" : exchange_r5.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exchange_r5.code);
} }
const _c0 = function () { return ["name", "currency", "code"]; };
class ExchangesListComponent {
    constructor(financialService) {
        this.financialService = financialService;
        this.availableExchanges = [{ code: '', currency: '', name: '' }];
        this.exchangeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('ngOnInit()');
        this.loadAvailableExchanges();
    }
    loadAvailableExchanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('loadAvailableExchanges()');
            return yield this.financialService
                .getAvailableExchanges()
                .then(res => this.availableExchanges = res);
        });
    }
    rowSelected() {
        console.log('rowSelected() >> row=' + JSON.stringify(this.selectedExchange));
        // set currency to 'PKT' if selectedExchange.code === 'indices'
        if (this.selectedExchange.code === 'indices') {
            this.selectedExchange.currency = 'PKT';
        }
        this.exchangeSelected.emit(this.selectedExchange);
    }
    filterSuggestions(event) {
        console.log('filterSuggestions() >> searchString= ' + event.query);
        this.filteredSuggestions = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.availableExchanges.length; i++) {
            let suggestion = this.availableExchanges[i].name;
            if (suggestion.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredSuggestions.push(suggestion);
            }
        }
    }
}
ExchangesListComponent.ɵfac = function ExchangesListComponent_Factory(t) { return new (t || ExchangesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_financial_service__WEBPACK_IMPORTED_MODULE_2__["FinancialService"])); };
ExchangesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExchangesListComponent, selectors: [["app-exchanges-list"]], outputs: { exchangeSelected: "exchangeSelected" }, decls: 11, vars: 11, consts: [[2, "margin-bottom", "15px"], [4, "ngIf"], ["dropdown", "true", "size", "42", "placeholder", "Name, W\u00E4hrung, Code", 3, "ngModel", "suggestions", "ngModelChange", "completeMethod", "input", "onFocus"], ["id", "table", "selectionMode", "single", "scrollHeight", "200px", 3, "value", "selection", "globalFilterFields", "paginator", "rows", "scrollable", "resizableColumns", "selectionChange", "onRowSelect"], ["table", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name"], ["pSortableColumn", "currency"], ["pSortableColumn", "code"], [3, "pSelectableRow"]], template: function ExchangesListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Handelspl\u00E4tze");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExchangesListComponent_label_5_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p-autoComplete", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExchangesListComponent_Template_p_autoComplete_ngModelChange_6_listener($event) { return ctx.suggestion = $event; })("completeMethod", function ExchangesListComponent_Template_p_autoComplete_completeMethod_6_listener($event) { return ctx.filterSuggestions($event); })("input", function ExchangesListComponent_Template_p_autoComplete_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r1.filterGlobal($event.target.value, "contains"); })("onFocus", function ExchangesListComponent_Template_p_autoComplete_onFocus_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r1.filterGlobal($event.target.value, "contains"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ExchangesListComponent_Template_p_table_selectionChange_7_listener($event) { return ctx.selectedExchange = $event; })("onRowSelect", function ExchangesListComponent_Template_p_table_onRowSelect_7_listener() { return ctx.rowSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExchangesListComponent_ng_template_9_Template, 7, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExchangesListComponent_ng_template_10_Template, 7, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.availableExchanges !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.suggestion)("suggestions", ctx.filteredSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.availableExchanges)("selection", ctx.selectedExchange)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0))("paginator", true)("rows", 20)("scrollable", true)("resizableColumns", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SelectableRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0V4Y2hhbmdlc0xpc3QvZXhjaGFuZ2VzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExchangesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-exchanges-list',
                templateUrl: './exchanges-list.component.html',
                styleUrls: ['./exchanges-list.component.css']
            }]
    }], function () { return [{ type: _financial_service__WEBPACK_IMPORTED_MODULE_2__["FinancialService"] }]; }, { exchangeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/StockDetails/stock-details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/StockDetails/stock-details.component.ts ***!
  \*********************************************************/
/*! exports provided: StockDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDetailsComponent", function() { return StockDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _financial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../financial.service */ "./src/app/financial.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-selectbutton.js");













const _c0 = function (a0, a1) { return [a0, a1, "symbol", "1.2-3", "de"]; };
function StockDetailsComponent_div_0_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2BC5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c0, ctx_r2.stockQuote.c, ctx_r2.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c0, ctx_r2.change, ctx_r2.selectedExchange.currency)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 15, ctx_r2.changePercentage, "1.2-3", "de"), "");
} }
function StockDetailsComponent_div_0_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2BC8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c0, ctx_r3.stockQuote.c, ctx_r3.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u00B1", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c0, ctx_r3.change, ctx_r3.selectedExchange.currency)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u00B1", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 15, ctx_r3.changePercentage, "1.2-3", "de"), "");
} }
function StockDetailsComponent_div_0_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2BC6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c0, ctx_r4.stockQuote.c, ctx_r4.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c0, ctx_r4.change, ctx_r4.selectedExchange.currency)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 15, ctx_r4.changePercentage, "1.2-3", "de"), "");
} }
function StockDetailsComponent_div_0_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r5.stockQuote.c, ctx_r5.selectedExchange.currency)));
} }
function StockDetailsComponent_div_0_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " PKT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r6.stockQuote.c, "1.2-3", "de"));
} }
function StockDetailsComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r7.stockQuote.o, ctx_r7.selectedExchange.currency)));
} }
function StockDetailsComponent_div_0_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " PKT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r8.stockQuote.o, "1.2-3", "de"));
} }
function StockDetailsComponent_div_0_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r9.stockQuote.pc, ctx_r9.selectedExchange.currency)));
} }
function StockDetailsComponent_div_0_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " PKT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r10.stockQuote.pc, "1.2-3", "de"));
} }
function StockDetailsComponent_div_0_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r11.stockQuote.h, ctx_r11.selectedExchange.currency)));
} }
function StockDetailsComponent_div_0_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " PKT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r12.stockQuote.h, "1.2-3", "de"));
} }
function StockDetailsComponent_div_0_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r13.stockQuote.l, ctx_r13.selectedExchange.currency)));
} }
function StockDetailsComponent_div_0_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " PKT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r14.stockQuote.l, "1.2-3", "de"));
} }
function StockDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.addData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "add Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.reloadChartDataAndUpdateCharts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "update charts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StockDetailsComponent_div_0_p_8_Template, 11, 25, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, StockDetailsComponent_div_0_p_9_Template, 11, 25, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, StockDetailsComponent_div_0_p_10_Template, 11, 25, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-tabView");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p-tabPanel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Aktueller Kurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, StockDetailsComponent_div_0_td_17_Template, 3, 10, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, StockDetailsComponent_div_0_td_18_Template, 5, 5, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Er\u00F6ffnung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, StockDetailsComponent_div_0_td_22_Template, 3, 10, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, StockDetailsComponent_div_0_td_23_Template, 5, 5, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Vortag");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, StockDetailsComponent_div_0_td_27_Template, 3, 10, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, StockDetailsComponent_div_0_td_28_Template, 5, 5, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Tageshoch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, StockDetailsComponent_div_0_td_32_Template, 3, 10, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, StockDetailsComponent_div_0_td_33_Template, 5, 5, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Tagestief");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, StockDetailsComponent_div_0_td_37_Template, 3, 10, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, StockDetailsComponent_div_0_td_38_Template, 5, 5, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Kurszeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "B\u00F6rse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p-calendar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClose", function StockDetailsComponent_div_0_Template_p_calendar_onClose_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.reloadChartDataAndUpdateCharts(); })("ngModelChange", function StockDetailsComponent_div_0_Template_p_calendar_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.selectedDates = $event; })("placeholderChange", function StockDetailsComponent_div_0_Template_p_calendar_placeholderChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.datePlaceholder = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p-selectButton", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StockDetailsComponent_div_0_Template_p_selectButton_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.reloadChartDataAndUpdateCharts(); })("ngModelChange", function StockDetailsComponent_div_0_Template_p_selectButton_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.selectedResolution = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "canvas", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "canvas", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "p-tabPanel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "p-tabPanel", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedStock.description == "" ? "Kein Name vorhanden..." : ctx_r0.selectedStock.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.changePercentage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.changePercentage == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.changePercentage < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange.currency == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](44, 30, ctx_r0.numberToDateString(ctx_r0.stockQuote.t), "HH:mm:ss"), " Uhr ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](45, 33, ctx_r0.numberToDateString(ctx_r0.stockQuote.t), "E, dd. MMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedExchange.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.selectedDates)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate)("monthNavigator", true)("yearNavigator", true)("yearRange", ctx_r0.range)("showIcon", true)("showWeek", true)("locale", ctx_r0.de)("placeholder", ctx_r0.datePlaceholder)("readonlyInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.availableResolutions)("ngModel", ctx_r0.selectedResolution);
} }
function StockDetailsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.status);
} }
Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_2___default.a, 'de');
class StockDetailsComponent {
    // MessageService needed for chart
    constructor(financialService, messageService) {
        this.financialService = financialService;
        this.messageService = messageService;
        this.stockQuote = { c: '0', h: '0', l: '0', o: '0', pc: '0', t: '0' };
        this.status = '';
        this.candleDates = [''];
        this.minDate = new Date(1980, 0, 1);
        this.maxDate = new Date();
        this.endDate = Math.round(new Date().getTime() / 1000);
        this.startDate = Math.round(new Date().setFullYear(new Date().getFullYear() - 1) / 1000);
        this.datePlaceholder = this.numberToDateString(this.startDate) + ' - ' + this.numberToDateString(this.endDate);
        this.availableResolutions = [
            { label: '1m', value: '1' },
            { label: '5m', value: '5' },
            { label: '15m', value: '15' },
            { label: '30m', value: '30' },
            { label: '60m', value: '60' },
            { label: 'Tag', value: 'D' },
            { label: 'Woche', value: 'W' },
            { label: 'Monat', value: 'M' }
        ];
        this.selectedResolution = 'D';
        this.range = '1980:' + this.maxDate.getFullYear();
        this.de = {
            firstDayOfWeek: 0,
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
            dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            today: 'Heute',
            clear: 'Leeren',
            dateFormat: 'dd.mm.yyyy',
            weekHeader: 'KW'
        };
        this.testCurrency = '€';
    }
    ngOnInit() {
        console.log('initial startDate=' + this.startDate + ' initial endDate=' + this.endDate);
    }
    ngOnChanges() {
        console.log('ngOnChanges()');
        if (this.selectedStock !== undefined && this.selectedStock.symbol !== '') {
            this.loadStockQuotesBySymbol();
            this.loadStockCandlesBySymbol();
            this.updateCharts();
        }
    }
    loadStockQuotesBySymbol() {
        this.status = 'Lade Daten';
        this.financialService
            .getStockQuoteBySymbol(this.selectedStock.symbol)
            .then((res) => {
            this.stockQuote = res;
            console.log('stock details: ' + JSON.stringify(this.stockQuote));
            // tslint:disable-next-line: triple-equals
            if (this.stockQuote !== undefined && this.stockQuote.c != '0' || this.stockQuote.pc != '0') {
                this.changePercentage = Number(this.stockQuote.c) / Number(this.stockQuote.pc) - 1;
                this.change = Number(this.stockQuote.c) - Number(this.stockQuote.pc);
                this.status = 'ok';
                console.log('calculated change=' + this.change +
                    ', calculated changePercentage=' + this.changePercentage +
                    ', status=' + this.status);
            }
            else {
                this.status = 'Keine Daten';
            }
        });
    }
    loadStockCandlesBySymbol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.financialService
                .getStockCandlesBySymbol(this.selectedStock.symbol, this.selectedResolution, this.startDate, this.endDate)
                .then((res) => {
                this.stockCandles = res;
            });
            // if status of returned stockCandles is 'ok' then format dates and fill charts data
            if (this.stockCandles !== undefined && this.stockCandles.s === 'ok') {
                for (let i = 0; this.stockCandles.t.length > i; i++) {
                    this.candleDates[i] = this.numberToDateString(this.stockCandles.t[i]);
                }
                // fill closingPrice-chart
                this.closingPriceChart = new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(document.getElementById('closingPrice-chart'), { type: 'line',
                    data: {
                        labels: this.candleDates,
                        datasets: [{
                                label: this.selectedExchange.currency,
                                type: 'line',
                                data: this.stockCandles.c,
                                borderColor: '#4bc0c0',
                                fill: false
                            }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Kursverlauf pro eingestelltem Intervall'
                        },
                        legend: { display: true }
                    }
                });
                // fill volume-chart
                this.volumeChart = new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(document.getElementById('volume-chart'), { type: 'line',
                    data: {
                        labels: this.candleDates,
                        datasets: [{
                                label: 'Volumen in Stück',
                                type: 'line',
                                data: this.stockCandles.v,
                                borderColor: '#0f2626',
                                fill: false
                            }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Gehandeltes Volumen pro eingestelltem Intervall'
                        },
                        legend: { display: true }
                    }
                });
                // fill mixed chart (closing price and volume)
                this.mixedChart = new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(document.getElementById('mixed-chart'), { type: 'bar',
                    data: {
                        labels: this.candleDates,
                        datasets: [{
                                label: this.selectedExchange.currency,
                                type: 'line',
                                data: this.stockCandles.c,
                                borderColor: '#8e5ea2',
                                fill: false
                            }, {
                                label: 'Volumen',
                                type: 'bar',
                                borderColor: '#3e95cd',
                                data: this.stockCandles.v,
                                fill: false
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Kursverlauf und gehandletes Volumen pro eingestelltem Intervall'
                        },
                        legend: { display: true }
                    }
                });
            }
            else {
                console.log('stock candles status not ok, status=' + this.stockCandles.s);
            }
            document.getElementById('detailtable').scrollIntoView();
        });
    }
    reloadChartDataAndUpdateCharts() {
        console.log('reloadChartDataAndUpdateCharts()');
        this.transformSelectedDates();
        this.loadStockCandlesBySymbol();
        this.updateCharts();
    }
    numberToDateString(seconds) {
        const t = new Date(seconds * 1000);
        t.toLocaleTimeString('de', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });
        return t.toDateString();
    }
    reset() {
        console.log('reset()');
        this.status = '';
    }
    transformSelectedDates() {
        console.log('dates: ' + this.selectedDates + ' resolution: ' + this.selectedResolution);
        if (this.selectedDates !== undefined) {
            this.startDate = Math.round(this.selectedDates[0].getTime() / 1000) - 28800; // Dirty hack - 28_800 seconds to match german time
            this.endDate = Math.round(this.selectedDates[1].getTime() / 1000) - 28800; // Dirty hack - 28_800 seconds to match german time
        }
        this.loadStockCandlesBySymbol();
    }
    updateCharts() {
        console.log('updateCharts()');
        if (this.closingPriceChart !== undefined) {
            this.closingPriceChart.update();
            console.log('closingPriceChart updated');
        }
        if (this.volumeChart !== undefined) {
            this.volumeChart.update();
            console.log('volumeChart updated');
        }
        if (this.volumeChart !== undefined) {
            this.mixedChart.update();
            console.log('volumeChart updated');
        }
    }
    addData() {
        const label = 'neues Label';
        this.closingPriceChart.data.labels.push(label);
        this.closingPriceChart.data.datasets.forEach((dataset) => {
            dataset.data.push(Math.floor((Math.random() * 100) + 270));
        });
        this.closingPriceChart.update();
    }
}
StockDetailsComponent.ɵfac = function StockDetailsComponent_Factory(t) { return new (t || StockDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_financial_service__WEBPACK_IMPORTED_MODULE_5__["FinancialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
StockDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StockDetailsComponent, selectors: [["app-stock-details"]], inputs: { selectedStock: "selectedStock", selectedExchange: "selectedExchange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["id", "detailtable"], [3, "click"], ["style", "color:green", 4, "ngIf"], ["style", "color:black", 4, "ngIf"], ["style", "color:red", 4, "ngIf"], ["header", "\u00DCberblick"], [1, "bold"], [2, "margin-right", "10px"], ["selectionMode", "range", "showTime", "true", "hourFormat", "24", "dateFormat", "dd.mm.yyyy", 3, "ngModel", "minDate", "maxDate", "monthNavigator", "yearNavigator", "yearRange", "showIcon", "showWeek", "locale", "placeholder", "readonlyInput", "onClose", "ngModelChange", "placeholderChange"], [3, "options", "ngModel", "click", "ngModelChange"], ["width", "600", "height", "400", 2, "width", "600px", "height", "400px"], ["id", "closingPrice-chart", "width", "600", "height", "400", 2, "width", "600px", "height", "400px"], ["id", "volume-chart", "width", "600", "height", "400", 2, "width", "600px", "height", "400px"], ["id", "mixed-chart", "width", "600", "height", "400", 2, "width", "600px", "height", "400px"], ["header", "News"], ["header", "Profil"], [2, "color", "green"], [2, "font-size", "1.2rem"], [2, "color", "black"], [2, "color", "red"], [2, "font-size", "0.7rem"]], template: function StockDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, StockDetailsComponent_div_0_Template, 76, 36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StockDetailsComponent_span_1_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.status === "ok" && ctx.selectedStock !== undefined && ctx.selectedStock.description != "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.status !== "ok" && ctx.status !== "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__["SelectButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".bold[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU3RvY2tEZXRhaWxzL3N0b2NrLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9TdG9ja0RldGFpbHMvc3RvY2stZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](StockDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-stock-details',
                templateUrl: './stock-details.component.html',
                styleUrls: ['./stock-details.component.css'],
            }]
    }], function () { return [{ type: _financial_service__WEBPACK_IMPORTED_MODULE_5__["FinancialService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, { selectedStock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], selectedExchange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/StockList/stock-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/StockList/stock-list.component.ts ***!
  \***************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _financial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../financial.service */ "./src/app/financial.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");








function StockListComponent_div_0_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.selectedExchange.name, " | Aktien");
} }
function StockListComponent_div_0_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.selectedExchange.name, " | Indizes");
} }
function StockListComponent_div_0_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.selectedExchange.name, " | Fonds");
} }
function StockListComponent_div_0_div_4_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r6.availableStocks.length, "): ");
} }
function StockListComponent_div_0_div_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockListComponent_div_0_div_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r10 = ctx.$implicit;
    const stock_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stock_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stock_r11.displaySymbol);
} }
const _c0 = function () { return ["description", "displaySymbol", "symbol"]; };
function StockListComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockListComponent_div_0_div_4_label_4_Template, 2, 1, "label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-autoComplete", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StockListComponent_div_0_div_4_Template_p_autoComplete_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.suggestion = $event; })("completeMethod", function StockListComponent_div_0_div_4_Template_p_autoComplete_completeMethod_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.filterSuggestions($event); })("input", function StockListComponent_div_0_div_4_Template_p_autoComplete_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r7.filterGlobal($event.target.value, "contains"); })("onFocus", function StockListComponent_div_0_div_4_Template_p_autoComplete_onFocus_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r7.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-table", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function StockListComponent_div_0_div_4_Template_p_table_selectionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectedStock = $event; })("onRowSelect", function StockListComponent_div_0_div_4_Template_p_table_onRowSelect_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.rowSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StockListComponent_div_0_div_4_ng_template_8_Template, 5, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StockListComponent_div_0_div_4_ng_template_9_Template, 5, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.availableStocks !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.suggestion)("suggestions", ctx_r4.filteredSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.availableStocks)("selection", ctx_r4.selectedStock)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("paginator", true)("rows", 20)("scrollable", true)("resizableColumns", true);
} }
function StockListComponent_div_0_div_5_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r19.availableStocks.length, "): ");
} }
function StockListComponent_div_0_div_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Punkte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00C4nderung in PKT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00C4nderung in % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Vortag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Er\u00F6ffnung ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Tageshoch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Tagestief ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Jahreshoch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Jahrestief ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Kurszeit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "color": "green" }; };
const _c2 = function (a0, a1) { return [a0, a1, "symbol", "1.2-3", "de"]; };
function StockListComponent_div_0_div_5_ng_template_9_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableStock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c2, availableStock_r24.change, ctx_r25.selectedExchange.currency)), " ");
} }
const _c3 = function () { return { "color": "red" }; };
function StockListComponent_div_0_div_5_ng_template_9_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableStock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c2, availableStock_r24.change, ctx_r26.selectedExchange.currency)), " ");
} }
const _c4 = function () { return { "color": "black" }; };
function StockListComponent_div_0_div_5_ng_template_9_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableStock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00B1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c2, availableStock_r24.change, ctx_r27.selectedExchange.currency)), " ");
} }
function StockListComponent_div_0_div_5_ng_template_9_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableStock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, availableStock_r24.changesPercentage / 100, "1.2-3", "de"), " ");
} }
function StockListComponent_div_0_div_5_ng_template_9_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableStock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, availableStock_r24.changesPercentage / 100, "1.2-3", "de"), " ");
} }
function StockListComponent_div_0_div_5_ng_template_9_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableStock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00B1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, availableStock_r24.changesPercentage / 100, "1.2-3", "de"), " ");
} }
function StockListComponent_div_0_div_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StockListComponent_div_0_div_5_ng_template_9_td_8_Template, 3, 12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StockListComponent_div_0_div_5_ng_template_9_td_9_Template, 3, 12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StockListComponent_div_0_div_5_ng_template_9_td_10_Template, 3, 12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StockListComponent_div_0_div_5_ng_template_9_td_11_Template, 3, 7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StockListComponent_div_0_div_5_ng_template_9_td_12_Template, 3, 7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StockListComponent_div_0_div_5_ng_template_9_td_13_Template, 3, 7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r23 = ctx.$implicit;
    const availableStock_r24 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](availableStock_r24.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](availableStock_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](7, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](66, _c2, availableStock_r24.price, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableStock_r24.change > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableStock_r24.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableStock_r24.change === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableStock_r24.changesPercentage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableStock_r24.changesPercentage < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", availableStock_r24.changesPercentage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](16, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](69, _c2, availableStock_r24.previousClose, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](19, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](72, _c2, availableStock_r24.open, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](22, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](75, _c2, availableStock_r24.dayHigh, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](25, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](78, _c2, availableStock_r24.dayLow, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](28, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](81, _c2, availableStock_r24.yearHigh, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](31, 54, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](84, _c2, availableStock_r24.yearLow, ctx_r22.selectedExchange.currency)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 60, ctx_r22.numberToDate(availableStock_r24.timestamp), "HH:mm:ss"), " Uhr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 63, ctx_r22.numberToDate(availableStock_r24.timestamp), "E, dd.MM.yyyy"));
} }
const _c5 = function () { return ["symbol", "name"]; };
function StockListComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockListComponent_div_0_div_5_label_4_Template, 2, 1, "label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-autoComplete", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StockListComponent_div_0_div_5_Template_p_autoComplete_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.suggestion = $event; })("completeMethod", function StockListComponent_div_0_div_5_Template_p_autoComplete_completeMethod_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.filterSuggestions($event); })("input", function StockListComponent_div_0_div_5_Template_p_autoComplete_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r20.filterGlobal($event.target.value, "contains"); })("onFocus", function StockListComponent_div_0_div_5_Template_p_autoComplete_onFocus_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r20.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-table", 3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function StockListComponent_div_0_div_5_Template_p_table_selectionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.selectedStock = $event; })("onRowSelect", function StockListComponent_div_0_div_5_Template_p_table_onRowSelect_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.rowSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StockListComponent_div_0_div_5_ng_template_8_Template, 37, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StockListComponent_div_0_div_5_ng_template_9_Template, 39, 87, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.availableStocks !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.suggestion)("suggestions", ctx_r5.filteredSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.availableStocks)("selection", ctx_r5.selectedStock)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c5))("paginator", true)("rows", 20)("scrollable", true)("resizableColumns", true);
} }
function StockListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StockListComponent_div_0_h1_1_Template, 2, 1, "h1", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StockListComponent_div_0_h1_2_Template, 2, 1, "h1", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StockListComponent_div_0_h1_3_Template, 2, 1, "h1", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockListComponent_div_0_div_4_Template, 10, 11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StockListComponent_div_0_div_5_Template, 10, 11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange !== undefined && ctx_r0.selectedExchange.code !== "indices" && ctx_r0.selectedExchange.code !== "mutualFund");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange !== undefined && ctx_r0.selectedExchange.code === "indices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange !== undefined && ctx_r0.selectedExchange.code === "mutualFund");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange !== undefined && ctx_r0.selectedExchange.code !== "indices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedExchange !== undefined && ctx_r0.selectedExchange.code == "indices");
} }
class StockListComponent {
    constructor(financialService) {
        this.financialService = financialService;
        this.stockSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exchangeCurrency = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        this.availableStocks = [];
        if (this.selectedExchange !== undefined) {
            console.log('ngOnChanges() >> selectedExchange=' + JSON.stringify(this.selectedExchange));
            if (this.selectedExchange.code !== undefined) {
                this.loadStocksByExchangeCode();
            }
        }
        this.filterString = '';
        this.suggestion = '';
    }
    loadStocksByExchangeCode() {
        this.financialService
            // .getStocksByExchangeCode(this.selectedExchange.code)
            .getStocksByExchangeCode(this.selectedExchange.code)
            .then((res) => {
            for (let i = 0; res.length > i; i++) {
                // TODO: getStocksByExchangeCode() doesn't deliver description but name for indices.
                // Somehow I have to identify that it's an index and check on res[i].description.
                // Due to ToPromise having "description" the service most likely must get splittet like:
                // if (this.selectedExchange.code === 'indices')
                // { this.getIndicesByExchangeCode() }
                // else { this.getStocksByExchangeCode() }
                if (res[i].description !== '' && res[i].description !== 'N/A') {
                    this.availableStocks.push(res[i]);
                }
            }
        });
    }
    rowSelected() {
        console.log('rowSelected() >> row=' + JSON.stringify(this.selectedStock));
        this.stockSelected.emit(this.selectedStock);
        this.exchangeCurrency.emit(this.selectedExchange);
    }
    numberToDate(seconds) {
        const t = new Date(seconds * 1000);
        t.toLocaleTimeString('de', { day: 'numeric', month: 'numeric', year: 'numeric' });
        return t;
    }
    filterSuggestions(event) {
        console.log('filterSuggestions() >> searchString= ' + event.query);
        this.filteredSuggestions = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.availableStocks.length; i++) {
            if (this.selectedExchange.code !== 'indices') {
                let suggestion = this.availableStocks[i].description;
                if (suggestion.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                    this.filteredSuggestions.push(suggestion);
                }
            }
            else {
                let suggestion = this.availableStocks[i].name;
                if (suggestion.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                    this.filteredSuggestions.push(suggestion);
                }
            }
        }
    }
}
StockListComponent.ɵfac = function StockListComponent_Factory(t) { return new (t || StockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_financial_service__WEBPACK_IMPORTED_MODULE_1__["FinancialService"])); };
StockListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockListComponent, selectors: [["app-stock-list"]], inputs: { selectedExchange: "selectedExchange" }, outputs: { stockSelected: "stockSelected", exchangeCurrency: "exchangeCurrency" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "margin-bottom", "15px"], ["dropdown", "true", "size", "42", "placeholder", "Name, W\u00E4hrung, Code", 3, "ngModel", "suggestions", "ngModelChange", "completeMethod", "input", "onFocus"], ["selectionMode", "single", "scrollHeight", "200px", 3, "value", "selection", "globalFilterFields", "paginator", "rows", "scrollable", "resizableColumns", "selectionChange", "onRowSelect"], ["stocktable", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name"], ["pSortableColumn", "symbol"], [3, "pSelectableRow"], ["dropdown", "true", "size", "42", "placeholder", "Name, Symbol", 3, "ngModel", "suggestions", "ngModelChange", "completeMethod", "input", "onFocus"], ["indicestable", ""], ["field", "symbol"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "change"], ["field", "change"], ["pSortableColumn", "changesPercentage"], ["field", "changesPercentage"], ["pSortableColumn", "previousClose"], ["field", "previousClose"], ["pSortableColumn", "open"], ["field", "open"], ["pSortableColumn", "dayHigh"], ["field", "dayHigh"], ["pSortableColumn", "dayLow"], ["field", "dayLow"], ["pSortableColumn", "yearHigh"], ["field", "yearHigh"], ["pSortableColumn", "yearLow"], ["field", "yearLow"], ["pSortableColumn", "timestamp"], ["field", "timestamp"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function StockListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StockListComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.availableStocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["SelectableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1N0b2NrTGlzdC9zdG9jay1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stock-list',
                templateUrl: './stock-list.component.html',
                styleUrls: ['./stock-list.component.css']
            }]
    }], function () { return [{ type: _financial_service__WEBPACK_IMPORTED_MODULE_1__["FinancialService"] }]; }, { selectedExchange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stockSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], exchangeCurrency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var _exchange_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exchange-view.component */ "./src/app/exchange-view.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["header", "B\u00F6rse"], ["header", "News"], ["width", "100%", "src", "./assets/news.jpg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-tabPanel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-exchange-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-tabPanel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_tabview__WEBPACK_IMPORTED_MODULE_1__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], _exchange_view_component__WEBPACK_IMPORTED_MODULE_2__["ExchangeViewComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
  <p-tabView>

    <p-tabPanel header="Börse">
      <app-exchange-view></app-exchange-view>
    </p-tabPanel>

    <p-tabPanel header="News">
      <img width="100%" src="./assets/news.jpg">
    </p-tabPanel>

  </p-tabView>
  `,
                styles: [`
  /* img {
    margin-right: 4px;
    position: relative;
    left:   0%} */
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _exchange_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exchange-view.component */ "./src/app/exchange-view.component.ts");
/* harmony import */ var _ExchangesList_exchanges_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ExchangesList/exchanges-list.component */ "./src/app/ExchangesList/exchanges-list.component.ts");
/* harmony import */ var _financial_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./financial.service */ "./src/app/financial.service.ts");
/* harmony import */ var _StockDetails_stock_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StockDetails/stock-details.component */ "./src/app/StockDetails/stock-details.component.ts");
/* harmony import */ var _StockList_stock_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StockList/stock-list.component */ "./src/app/StockList/stock-list.component.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-selectbutton.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_financial_service__WEBPACK_IMPORTED_MODULE_9__["FinancialService"], primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_12__["ChartModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__["SelectButtonModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _ExchangesList_exchanges_list_component__WEBPACK_IMPORTED_MODULE_8__["ExchangesListComponent"],
        _StockList_stock_list_component__WEBPACK_IMPORTED_MODULE_11__["StockListComponent"],
        _exchange_view_component__WEBPACK_IMPORTED_MODULE_7__["ExchangeViewComponent"],
        _StockDetails_stock_details_component__WEBPACK_IMPORTED_MODULE_10__["StockDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_12__["ChartModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__["SelectButtonModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _ExchangesList_exchanges_list_component__WEBPACK_IMPORTED_MODULE_8__["ExchangesListComponent"],
                    _StockList_stock_list_component__WEBPACK_IMPORTED_MODULE_11__["StockListComponent"],
                    _exchange_view_component__WEBPACK_IMPORTED_MODULE_7__["ExchangeViewComponent"],
                    _StockDetails_stock_details_component__WEBPACK_IMPORTED_MODULE_10__["StockDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                    primeng_chart__WEBPACK_IMPORTED_MODULE_12__["ChartModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__["SelectButtonModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"]
                ],
                providers: [_financial_service__WEBPACK_IMPORTED_MODULE_9__["FinancialService"], primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/exchange-view.component.ts":
/*!********************************************!*\
  !*** ./src/app/exchange-view.component.ts ***!
  \********************************************/
/*! exports provided: ExchangeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeViewComponent", function() { return ExchangeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ExchangesList_exchanges_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExchangesList/exchanges-list.component */ "./src/app/ExchangesList/exchanges-list.component.ts");
/* harmony import */ var _StockList_stock_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockList/stock-list.component */ "./src/app/StockList/stock-list.component.ts");
/* harmony import */ var _StockDetails_stock_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockDetails/stock-details.component */ "./src/app/StockDetails/stock-details.component.ts");





class ExchangeViewComponent {
    exchangeSelected(selectedExchange) {
        console.log('exchangeSelected()');
        this.selectedExchange = selectedExchange;
        this.selectedStock = undefined;
    }
    stockSelected(selectedStock) {
        console.log('stockSelected()');
        this.selectedStock = selectedStock;
    }
}
ExchangeViewComponent.ɵfac = function ExchangeViewComponent_Factory(t) { return new (t || ExchangeViewComponent)(); };
ExchangeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExchangeViewComponent, selectors: [["app-exchange-view"]], decls: 5, vars: 3, consts: [[3, "exchangeSelected"], [3, "selectedExchange", "stockSelected"], [3, "selectedExchange", "selectedStock"], ["stockdetails", ""]], template: function ExchangeViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-exchanges-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("exchangeSelected", function ExchangeViewComponent_Template_app_exchanges_list_exchangeSelected_1_listener($event) { return ctx.exchangeSelected($event); })("exchangeSelected", function ExchangeViewComponent_Template_app_exchanges_list_exchangeSelected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-stock-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stockSelected", function ExchangeViewComponent_Template_app_stock_list_stockSelected_2_listener($event) { return ctx.stockSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-stock-details", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedExchange", ctx.selectedExchange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedExchange", ctx.selectedExchange)("selectedStock", ctx.selectedStock);
    } }, directives: [_ExchangesList_exchanges_list_component__WEBPACK_IMPORTED_MODULE_1__["ExchangesListComponent"], _StockList_stock_list_component__WEBPACK_IMPORTED_MODULE_2__["StockListComponent"], _StockDetails_stock_details_component__WEBPACK_IMPORTED_MODULE_3__["StockDetailsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exchange-view',
                template: `
    <p>
      <app-exchanges-list (exchangeSelected)="exchangeSelected($event)" (exchangeSelected)="stockdetails.reset()"></app-exchanges-list>
      <app-stock-list [selectedExchange]="this.selectedExchange" (stockSelected)="stockSelected($event)"></app-stock-list>
      <app-stock-details #stockdetails [selectedExchange]="this.selectedExchange" [selectedStock]="this.selectedStock"></app-stock-details>
    </p>
  `,
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/financial.service.ts":
/*!**************************************!*\
  !*** ./src/app/financial.service.ts ***!
  \**************************************/
/*! exports provided: FinancialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialService", function() { return FinancialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FinancialService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAvailableExchanges() {
        console.log('getAvailableExchanges()');
        try {
            return this.httpClient.get('https://finnhub.io/api/v1/stock/exchange?token=bqlvdjfrh5rf7sg5u5og')
                .toPromise()
                .catch(this.handleError);
        }
        catch (error) {
            console.log('an error occured: ' + error);
        }
    }
    getStocksByExchangeCode(exchangeCode) {
        console.log('getStocksByExchangeCode() >> exchangeCode=' + exchangeCode);
        try {
            if (exchangeCode === 'indices') {
                return this.httpClient.get('https://financialmodelingprep.com/api/v3/quotes/index')
                    .toPromise()
                    .catch(this.handleError);
            }
            else {
                return this.httpClient.get('https://finnhub.io/api/v1/stock/symbol?exchange=' + exchangeCode + '&token=bqlvdjfrh5rf7sg5u5og')
                    .toPromise()
                    .catch(this.handleError);
            }
        }
        catch (error) {
            console.log('an error occured: ' + error);
        }
    }
    getStockQuoteBySymbol(stockSymbol) {
        console.log('getStockQuoteBySymbol() >> stockSymbol=' + stockSymbol);
        try {
            return this.httpClient.get('https://finnhub.io/api/v1/quote?symbol=' + stockSymbol + '&token=bqlvdjfrh5rf7sg5u5og')
                .toPromise()
                .catch(this.handleError);
        }
        catch (error) {
            console.log('an error occured: ' + error);
        }
    }
    getStockCandlesBySymbol(stockSymbol, resolution, from, to) {
        console.log('getStockCandlesBySymbol() >> stockSymbol=' + stockSymbol + ' resolution=' + resolution + ' from=' + from + ' to=' + to);
        try {
            return this
                .httpClient
                .get('https://finnhub.io/api/v1/stock/candle?symbol=' + stockSymbol +
                '&resolution=' + resolution +
                '&from=' + from +
                '&to=' + to +
                '&token=bqlvdjfrh5rf7sg5u5og')
                .toPromise()
                .catch(this.handleError);
        }
        catch (error) {
            console.log('an error occured: ' + error);
        }
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
FinancialService.ɵfac = function FinancialService_Factory(t) { return new (t || FinancialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FinancialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinancialService, factory: FinancialService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinancialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Entwicklung\Repository\mein-aad\06_Web-Frontends-mit-Angular\Sourcen\Broker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map