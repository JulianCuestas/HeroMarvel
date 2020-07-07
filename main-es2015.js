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

/***/ "./src/app/ServicioAPI/servicio-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/ServicioAPI/servicio-api.service.ts ***!
  \*****************************************************/
/*! exports provided: ServicioAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioAPIService", function() { return ServicioAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

// Importar environment donde se guardo la API KEY por defecto


class ServicioAPIService {
    constructor() { }
    /**
     * Método para construir la url del recurso que se va a consumir
     * luego llama al método del servicio obtenerDatosAPI()
     * => Recibe como parámetro el id del botón
     * @param item
     */
    construirUrl(item) {
        let url = `http://gateway.marvel.com/v1/public/${item}?ts=1&apikey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey}&limit=100`;
        /**
         * Llamar método obtenerDatosAPI() propio del servicio
         * => Recibe como parámetro la url construida
         */
        this.obtenerDatosAPI(url, item);
    }
    /**
     * Función para hacer Get a la API, obtener una respuesta
     * y los datos, se usa la funcionalidad fetch API interfaz propia
     * del lenguaje JS para trabajar con el estándar HTTPRequest
     * => Recibe como parámetro la url que se va a consumir o consultar
     * @param url
     */
    obtenerDatosAPI(url, item) {
        fetch(url)
            .then((resp => {
            return resp.json();
        }))
            .then((datos => {
            /**
             * Una vez obtenidos los datos llamar el método que se encargará
             * de mostrar la información en cards dentro del contenedor principal
             * por medio de un swicth sabrá que información mostrar.
             */
            switch (item) {
                case 'characters': {
                    setTimeout(() => {
                        this.pintarCharacters(datos);
                    }, 800);
                    break;
                }
                case 'comics': {
                    setTimeout(() => {
                        this.pintarComics(datos);
                    }, 800);
                    break;
                }
                case 'creators': {
                    setTimeout(() => {
                        this.pintarCreators(datos);
                    }, 800);
                    break;
                }
                case 'stories': {
                    setTimeout(() => {
                        this.pintarStories(datos);
                    }, 800);
                    break;
                }
                case 'series': {
                    setTimeout(() => {
                        this.pintarSeries(datos);
                    }, 800);
                    break;
                }
                default: {
                    alert('La opción seleccionada no es válida!!');
                    break;
                }
            }
        }))
            .catch((error) => {
            alert(`Hubo errores en la consulta a la API, error: \n${error}`);
        });
    }
    // Método para pintar Personajes
    pintarCharacters(datos) {
        const contenedor = document.getElementById('contenedorCards');
        let templateHTML = "";
        for (const hero of datos.data.results) {
            if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
            }
            else {
                let urlHero = hero.urls[0].url;
                templateHTML += `
          <div class="card" style="width: 19rem;" >
              <a href="${urlHero} target="_blank" >
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-character" />
              </a><br/>
              <div class="card-title">${hero.name}</div>
          </div>
        `;
            }
        }
        /**
         * Estilos para el contenedor principal
         */
        contenedor.style.paddingTop = "5rem";
        contenedor.style.borderRadius = ".8rem";
        contenedor.style.background = "#3536367a";
        // Agregar el template literal al contenedor que deseamos mostrar la información
        document.querySelector('#contenedorCards').innerHTML = templateHTML;
    }
    // Commit 11
    pintarComics(datos) {
        const contenedor = document.getElementById('contenedorCards');
        document.getElementById('title_marvel').style.display = "none";
        console.log(datos);
        let templateHTML = "";
        for (const hero of datos.data.results) {
            if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
            }
            else {
                let urlHero = hero.urls[0].url;
                templateHTML += `
            <div class="card" style="width: 19rem;" >
                <div class="card-title">${hero.title}</div><br/>
                <span class="items">Páginas: ${hero.pageCount}</span><br/>
                <span class="items">Formato: ${hero.format}</span>
                <a href="${urlHero} target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-comics" />
                </a>
            </div>
          `;
            }
        }
        /**
         * Estilos para el contenedor principal
         */
        contenedor.style.paddingTop = "5rem";
        contenedor.style.borderRadius = ".8rem";
        contenedor.style.background = "#3536367a";
        // Agregar el template literal al contenedor que deseamos mostrar la información
        document.querySelector('#contenedorCards').innerHTML = templateHTML;
    }
    pintarStories(datos) {
        const contenedor = document.getElementById('contenedorCards');
        document.getElementById('title_marvel').style.display = "none";
        console.log(datos);
        let templateHTML = "";
        for (const hero of datos.data.results) {
            let urlHero = hero.series.collectionURI;
            templateHTML += `
          <div class="card" style="width: 19rem;" >
              <div class="card-title">${hero.originalIssue.name}</div><br/>
              <span class="items">Descripción: ${hero.title}</span>
          </div>
        `;
        }
        /**
         * Estilos para el contenedor principal
         */
        contenedor.style.paddingTop = "5rem";
        contenedor.style.borderRadius = ".8rem";
        contenedor.style.background = "#3536367a";
        // Agregar el template literal al contenedor que deseamos mostrar la información
        document.querySelector('#contenedorCards').innerHTML = templateHTML;
    }
    pintarSeries(datos) {
        const contenedor = document.getElementById('contenedorCards');
        console.log(datos);
        let templateHTML = "";
        for (const hero of datos.data.results) {
            if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
            }
            else {
                let urlHero = hero.urls[0].url;
                let url2 = `${hero.characters.collectionURI}?ts=1&apikey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey}`;
                let template2 = "";
                fetch(url2)
                    .then(res => {
                    return res.json();
                })
                    .then(dat => {
                    for (const c of dat.data.results) {
                        template2 += ` ${c.name},`;
                        templateHTML += `
                <div class="card" style="width: 19rem;" >
                    <div class="card-title">${hero.title}</div><br/>
                    <span class="items">Año: ${hero.endYear}</span><br/>
                    <span class="items">Personajes: ${template2}</span><br/>
                    <a href="${urlHero} target="blank">
                      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-comics" target="_blank" />
                    </a>
                </div>
              `;
                        /**
                        * Estilos para el contenedor principal
                        */
                        contenedor.style.paddingTop = "5rem";
                        contenedor.style.borderRadius = ".8rem";
                        contenedor.style.background = "#3536367a";
                        // Agregar el template literal al contenedor que deseamos mostrar la información
                        document.querySelector('#contenedorCards').innerHTML = templateHTML;
                    }
                })
                    .catch(err => {
                    console.log(err);
                });
            }
        }
    }
    pintarCreators(datos) {
        const contenedor = document.getElementById('contenedorCards');
        document.getElementById('title_marvel').style.display = "none";
        console.log(datos);
        let templateHTML = "";
        for (const hero of datos.data.results) {
            if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
            }
            else {
                let urlHero = hero.urls[0].url;
                templateHTML += `
          <div class="card" style="width: 19rem;" >
              <div class="card-title">${hero.firstName}</div><br/>
              <a href="${urlHero} target="blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagen-comics" target="_blank" />
              </a>
          </div>
        `;
            }
        }
        /**
         * Estilos para el contenedor principal
         */
        contenedor.style.paddingTop = "5rem";
        contenedor.style.borderRadius = ".8rem";
        contenedor.style.background = "#3536367a";
        // Agregar el template literal al contenedor que deseamos mostrar la información
        document.querySelector('#contenedorCards').innerHTML = templateHTML;
    }
}
ServicioAPIService.ɵfac = function ServicioAPIService_Factory(t) { return new (t || ServicioAPIService)(); };
ServicioAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicioAPIService, factory: ServicioAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicioAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _ServicioAPI_servicio_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicioAPI/servicio-api.service */ "./src/app/ServicioAPI/servicio-api.service.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");




class AppComponent {
    /**
     * Cargar el servicio como parámetro del constructor para poder usar
     * sus métodos internos
     * @param datosMarvel
     */
    constructor(datosMarvel) {
        this.datosMarvel = datosMarvel;
        this.title = 'Marvel';
    }
    mostrar_menu() {
        document.getElementById('menu_resp').style.display = 'block';
    }
    cerrar_menu() {
        document.getElementById('menu_resp').style.display = 'none';
    }
    /**
     * Método para obtener el id del botón presionado en el aside.
     * => Recibe como parámetro un event para saber en donde se disparo el event
     *    y así obtener el Id de los botones
     * @param e
     */
    botonPresionado(e) {
        let item;
        /**
         * Los botones están compuestos por tags <li>
         */
        if (e.target.localName === "li") {
            item = e.target.id;
            console.log(item);
        }
        /**
         * Llamar función obtenerDatosCompletosXItem del servicio DatosAPIService
         * => Recibe como parámetro el item con el id obtenido
         */
        this.datosMarvel.construirUrl(item);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ServicioAPI_servicio_api_service__WEBPACK_IMPORTED_MODULE_1__["ServicioAPIService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 47, vars: 0, consts: [["id", "menu_nav"], ["id", "div_log"], ["id", "logo", "src", "./assets/Imagenes/shield_b.png"], ["id", "div_list_n"], ["id", "list_nav", 3, "click"], ["id", "comics"], ["id", "creators"], ["id", "characters"], ["id", "stories"], ["id", "series"], ["id", "nom_app"], ["id", "titulo_app"], ["id", "menu_nav2"], ["id", "div_log_s2"], ["id", "title_app2"], ["id", "img_menu", 3, "click"], ["id", "img"], ["id", "ico_menu", "src", "./assets/Imagenes/menu.png"], ["id", "menu_resp"], ["id", "li_titulo_mr"], ["id", "titulo_mr"], ["id", "img_close", 3, "click"], ["src", "./assets/Imagenes/close.png", 2, "width", "10px"], ["id", "ul_mr"], [1, "item_ul_mr"], ["id", "contenido"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_ul_click_4_listener($event) { return ctx.botonPresionado($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " COMICS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " CREADORES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PERSONAJES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " STORIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " SERIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " HEROMARVEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " HEROMARVEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_25_listener() { return ctx.mostrar_menu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " HEROMARVEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_32_listener() { return ctx.cerrar_menu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " PERSONAJES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " COMICS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " CREADORES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " STORIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " SERIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ServicioAPI_servicio_api_service__WEBPACK_IMPORTED_MODULE_1__["ServicioAPIService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InicioComponent {
    constructor() { }
    ngOnInit() { }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 6, vars: 0, consts: [["id", "slide_inicio"], [1, "contenedor1"], ["id", "contenedorCards", 1, "contenedor2"], ["id", "title_marvel"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " MARVEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#slide_inicio[_ngcontent-%COMP%]{\n  height: 433pt;\n  background-image: url('2.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n#title_marvel[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 45%;\n  left: 38%;\n  margin: auto;\n  background:red;\n  font-family: 'Marvel';\n  font-size: 100pt;\n  color: white;\n  align-content: center;\n  width: 224pt;\n  height: 90pt;\n  z-index: 1;\n}\n\n#title_marvel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\ntext-align: center;\nmargin: 5px 12px; \n}\n\n.contenedor1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contenedor2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: .8rem;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n\n@media (max-width: 1010px) {\n  #title_marvel[_ngcontent-%COMP%]{\n    left: 28%;\n  }\n}\n\n@media (max-width: 659px) {\n  #title_marvel[_ngcontent-%COMP%]{\n    left: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2xpZGVfaW5pY2lve1xuICBoZWlnaHQ6IDQzM3B0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZW5lcy8yLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4jdGl0bGVfbWFydmVse1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAzOCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDpyZWQ7XG4gIGZvbnQtZmFtaWx5OiAnTWFydmVsJztcbiAgZm9udC1zaXplOiAxMDBwdDtcbiAgY29sb3I6IHdoaXRlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMjRwdDtcbiAgaGVpZ2h0OiA5MHB0O1xuICB6LWluZGV4OiAxO1xufVxuXG4jdGl0bGVfbWFydmVsIHNwYW57XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5tYXJnaW46IDVweCAxMnB4OyBcbn1cblxuLmNvbnRlbmVkb3IxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVuZWRvcjIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDEwcHgpIHtcbiAgI3RpdGxlX21hcnZlbHtcbiAgICBsZWZ0OiAyOCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY1OXB4KSB7XG4gICN0aXRsZV9tYXJ2ZWx7XG4gICAgbGVmdDogMjAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio',
                templateUrl: './inicio.component.html',
                styleUrls: ['./inicio.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    // Clave para consumir la API
    apikey: '57af49e0876f7ff1c1145a1843a1089c&hash=4ea944eb957925a4f8d2ef14aa7adb9d'
};


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

module.exports = __webpack_require__(/*! /home/travis/build/JulianCuestas/HeroMarvel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map