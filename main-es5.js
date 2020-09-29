function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ServicioAPI/servicio-api.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ServicioAPI/servicio-api.service.ts ***!
    \*****************************************************/

  /*! exports provided: ServicioAPIService */

  /***/
  function srcAppServicioAPIServicioApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioAPIService", function () {
      return ServicioAPIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts"); // Importar environment donde se guardo la API KEY por defecto


    var ServicioAPIService = /*#__PURE__*/function () {
      function ServicioAPIService() {
        _classCallCheck(this, ServicioAPIService);

        this.imgNoDisponibleAPI = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';
        this.imgNoDisponibleLocal = "assets/Imagenes/no-disponible.png";
      }
      /**
       * Método para construir la url del recurso que se va a consumir
       * luego llama al método del servicio obtenerDatosAPI()
       * => Recibe como parámetro el id del botón
       * @param item
       */


      _createClass(ServicioAPIService, [{
        key: "construirUrl",
        value: function construirUrl(item) {
          var url = "https://gateway.marvel.com/v1/public/".concat(item, "?ts=1&apikey=").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey, "&limit=100");
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

      }, {
        key: "obtenerDatosAPI",
        value: function obtenerDatosAPI(url, item) {
          var _this = this;

          fetch(url).then(function (resp) {
            return resp.json();
          }).then(function (datos) {
            /**
             * Una vez obtenidos los datos llamar el método que se encargará
             * de mostrar la información en cards dentro del contenedor principal
             * por medio de un swicth sabrá que información mostrar.
             */
            if (datos.data.results.length > 0) {
              document.getElementById('main_slide').style.display = 'none';
              document.getElementById('title_marvel').style.display = "none";
            }

            switch (item) {
              case 'characters':
                {
                  _this.pintarCharacters(datos);

                  break;
                }

              case 'comics':
                {
                  _this.pintarComics(datos);

                  break;
                }

              case 'creators':
                {
                  _this.pintarCreators(datos);

                  break;
                }

              case 'stories':
                {
                  _this.pintarStories(datos);

                  break;
                }

              case 'series':
                {
                  _this.pintarSeries(datos);

                  break;
                }

              default:
                {
                  alert('La opción seleccionada no es válida!!');
                  break;
                }
            }

            document.getElementById('loadingPage').style.display = '';
          })["catch"](function (error) {
            alert("Hubo errores en la consulta a la API, error: \n".concat(error));
            document.getElementById('loadingPage').style.display = '';
          });
        } // Método para pintar Personajes

      }, {
        key: "pintarCharacters",
        value: function pintarCharacters(datos) {
          var contenedor = document.getElementById('contenedorCards');
          var templateHTML = '';

          var _iterator = _createForOfIteratorHelper(datos.data.results),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var hero = _step.value;

              if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
              } else {
                var imgHero = "".concat(hero.thumbnail.path, ".").concat(hero.thumbnail.extension);
                var urlHero = hero.urls[0].url;
                templateHTML += "\n      <a class=\"container-cards\" href=\"".concat(urlHero, "\" target=\"_blank\" >\n        <div class=\"card\" style=\"width: 19rem;\" >\n          <div class=\"card-title\">").concat(hero.name, "</div>\n          <img src=\"").concat(this.imgNoDisponibleAPI === imgHero ? this.imgNoDisponibleLocal : imgHero, "\" class=\"imagen-character\" />\n        </div>\n      </a>\n        ");
              }
            }
            /**
             * Estilos para el contenedor principal
             */

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          contenedor.style.paddingTop = "5rem";
          contenedor.style.borderRadius = ".8rem";
          contenedor.style.background = "#3536367a"; // Agregar el template literal al contenedor que deseamos mostrar la información

          document.querySelector('#contenedorCards').innerHTML = templateHTML;
        }
      }, {
        key: "pintarComics",
        value: function pintarComics(datos) {
          var contenedor = document.getElementById('contenedorCards');
          console.log(datos);
          var templateHTML = "";

          var _iterator2 = _createForOfIteratorHelper(datos.data.results),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var hero = _step2.value;

              if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
              } else {
                var urlHero = hero.urls[0].url;
                templateHTML += "\n            <a class=\"container-cards\" href=\"".concat(urlHero, "\" target=\"_blank\">\n              <div class=\"card\" style=\"width: 19rem;\" >\n                  <div class=\"card-title\">").concat(hero.title, "</div><br/>\n                    <img src=\"").concat(hero.thumbnail.path, ".").concat(hero.thumbnail.extension, "\" class=\"imagen-comics\" />\n                  <div class=\"mt-8\">\n                  <span class=\"items\">P\xE1ginas: ").concat(hero.pageCount, "</span><br/>\n                  <span class=\"items\">Formato: ").concat(hero.format, "</span>\n                  </div>\n              </div>\n            </a>\n          ");
              }
            }
            /**
             * Estilos para el contenedor principal
             */

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          contenedor.style.paddingTop = "5rem";
          contenedor.style.borderRadius = ".8rem";
          contenedor.style.background = "#3536367a"; // Agregar el template literal al contenedor que deseamos mostrar la información

          document.querySelector('#contenedorCards').innerHTML = templateHTML;
        }
      }, {
        key: "pintarStories",
        value: function pintarStories(datos) {
          var contenedor = document.getElementById('contenedorCards');
          console.log(datos);
          var templateHTML = "";

          var _iterator3 = _createForOfIteratorHelper(datos.data.results),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var hero = _step3.value;
              var urlHero = hero.series.collectionURI;
              templateHTML += "\n          <div class=\"card\" style=\"width: 19rem;\" >\n              <div class=\"card-title\">".concat(hero.originalIssue.name, "</div><br/>\n              <span class=\"items\">Descripci\xF3n: ").concat(hero.title, "</span>\n          </div>\n        ");
            }
            /**
             * Estilos para el contenedor principal
             */

          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          contenedor.style.paddingTop = "5rem";
          contenedor.style.borderRadius = ".8rem";
          contenedor.style.background = "#3536367a"; // Agregar el template literal al contenedor que deseamos mostrar la información

          document.querySelector('#contenedorCards').innerHTML = templateHTML;
        }
      }, {
        key: "pintarSeries",
        value: function pintarSeries(datos) {
          var contenedor = document.getElementById('contenedorCards');
          console.log(datos);
          var templateHTML = "";

          var _iterator4 = _createForOfIteratorHelper(datos.data.results),
              _step4;

          try {
            var _loop = function _loop() {
              var hero = _step4.value;

              if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                return "continue";
              } else {
                var urlHero = hero.urls[0].url;
                var url2 = "".concat(hero.characters.collectionURI, "?ts=1&apikey=").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey);
                var template2 = "";
                fetch(url2).then(function (res) {
                  return res.json();
                }).then(function (dat) {
                  var _iterator5 = _createForOfIteratorHelper(dat.data.results),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var c = _step5.value;
                      template2 += " ".concat(c.name, ",");
                      templateHTML += "\n                <div class=\"card\" style=\"width: 19rem;\" >\n                    <div class=\"card-title\">".concat(hero.title, "</div><br/>\n                    <span class=\"items\">A\xF1o: ").concat(hero.endYear, "</span><br/>\n                    <span class=\"items\">Personajes: ").concat(template2, "</span><br/>\n                    <a href=\"").concat(urlHero, "\" target=\"blank\">\n                      <img src=\"").concat(hero.thumbnail.path, ".").concat(hero.thumbnail.extension, "\" class=\"imagen-comics\" target=\"_blank\" />\n                    </a>\n                </div>\n              ");
                      /**
                      * Estilos para el contenedor principal
                      */

                      contenedor.style.paddingTop = "5rem";
                      contenedor.style.borderRadius = ".8rem";
                      contenedor.style.background = "#3536367a"; // Agregar el template literal al contenedor que deseamos mostrar la información

                      document.querySelector('#contenedorCards').innerHTML = templateHTML;
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }
            };

            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "pintarCreators",
        value: function pintarCreators(datos) {
          var contenedor = document.getElementById('contenedorCards');
          console.log(datos);
          var templateHTML = "";

          var _iterator6 = _createForOfIteratorHelper(datos.data.results),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var hero = _step6.value;

              if (hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                continue;
              } else {
                var urlHero = hero.urls[0].url;
                templateHTML += "\n          <a class=\"container-cards\" href=\"".concat(urlHero, "\" target=\"blank\">\n            <div class=\"card\" style=\"width: 19rem;\" >\n              <div class=\"card-title\">").concat(hero.firstName, "</div>\n              <img src=\"").concat(hero.thumbnail.path, ".").concat(hero.thumbnail.extension, "\" class=\"imagen-comics\" target=\"_blank\" />\n            </div>\n          </a>\n        ");
              }
            }
            /**
             * Estilos para el contenedor principal
             */

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          contenedor.style.paddingTop = "5rem";
          contenedor.style.borderRadius = ".8rem";
          contenedor.style.background = "#3536367a"; // Agregar el template literal al contenedor que deseamos mostrar la información

          document.querySelector('#contenedorCards').innerHTML = templateHTML;
        }
      }]);

      return ServicioAPIService;
    }();

    ServicioAPIService.ɵfac = function ServicioAPIService_Factory(t) {
      return new (t || ServicioAPIService)();
    };

    ServicioAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServicioAPIService,
      factory: ServicioAPIService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicioAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ServicioAPI_servicio_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ServicioAPI/servicio-api.service */
    "./src/app/ServicioAPI/servicio-api.service.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      /**
       * Cargar el servicio como parámetro del constructor para poder usar
       * sus métodos internos
       * @param datosMarvel
       */
      function AppComponent(datosMarvel) {
        _classCallCheck(this, AppComponent);

        this.datosMarvel = datosMarvel;
        this.title = 'Marvel';
      }

      _createClass(AppComponent, [{
        key: "mostrar_menu",
        value: function mostrar_menu() {
          document.getElementById('menu_resp').style.display = 'block';
        }
      }, {
        key: "cerrar_menu",
        value: function cerrar_menu() {
          document.getElementById('menu_resp').style.display = 'none';
        }
        /**
         * Método para obtener el id del botón presionado en el aside.
         * => Recibe como parámetro un event para saber en donde se disparo el event
         *    y así obtener el Id de los botones
         * @param e
         */

      }, {
        key: "botonPresionado",
        value: function botonPresionado(e) {
          document.getElementById('loadingPage').style.display = 'block';
          var item;
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
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ServicioAPI_servicio_api_service__WEBPACK_IMPORTED_MODULE_1__["ServicioAPIService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 50,
      vars: 0,
      consts: [["id", "menu_nav"], ["id", "div_log"], ["id", "logo", "src", "./assets/Imagenes/shield_b.png"], ["id", "div_list_n"], ["id", "list_nav", 3, "click"], ["id", "comics"], ["id", "creators"], ["id", "characters"], ["id", "stories"], ["id", "series"], ["id", "nom_app"], ["id", "titulo_app"], ["id", "menu_nav2"], ["id", "div_log_s2"], ["id", "title_app2"], ["id", "img_menu", 3, "click"], ["id", "img"], ["id", "ico_menu", "src", "./assets/Imagenes/menu.png"], ["id", "menu_resp"], ["id", "li_titulo_mr"], ["id", "titulo_mr"], ["id", "img_close", 3, "click"], ["src", "./assets/Imagenes/close.png", 2, "width", "10px"], ["id", "ul_mr", 3, "click"], ["id", "characters", 1, "item_ul_mr"], ["id", "comics", 1, "item_ul_mr"], ["id", "creators", 1, "item_ul_mr"], ["id", "stories", 1, "item_ul_mr"], ["id", "series", 1, "item_ul_mr"], ["id", "loadingPage", "hidden", "", 1, "loading"], ["src", "./assets/Imagenes/marvel_loader.gif"], ["id", "contenido"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_ul_click_4_listener($event) {
            return ctx.botonPresionado($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_25_listener() {
            return ctx.mostrar_menu();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_32_listener() {
            return ctx.cerrar_menu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_ul_click_34_listener($event) {
            return ctx.botonPresionado($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " PERSONAJES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " COMICS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " CREADORES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " STORIES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " SERIES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _ServicioAPI_servicio_api_service__WEBPACK_IMPORTED_MODULE_1__["ServicioAPIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 59,
      vars: 0,
      consts: [[1, "containerAll"], [1, "containerContactos"], [1, "columna1"], [1, "columna2"], [1, "filas"], ["href", "https://www.facebook.com", "target", "_blank"], ["src", "../../assets/Imagenes/footer/facebook.png"], ["href", "https://www.instagram.com", "target", "_blank"], ["src", "../../assets/Imagenes/footer/insta.png"], ["href", "https://www.twitter.com", "target", "_blank"], ["src", "../../assets/Imagenes/footer/twitter.png"], ["href", "https://www.whatsapp.com", "target", "_blank"], ["src", "../../assets/Imagenes/footer/whats.png"], ["href", "https://www.youtube.com", "target", "_blank"], ["src", "../../assets/Imagenes/footer/youtube.png"], [1, "columna3"], [1, "filaContactos"], ["src", "../../assets/Imagenes/footer/home.png"], ["src", "../../assets/Imagenes/footer/mail.png"], ["src", "../../assets/Imagenes/footer/cell.png"], [1, "containerFooter"], [1, "copyright"], [1, "marvel"], ["href", "https://www.marvel.com", "target", "_blank"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "M\xE1s informaci\xF3n de la compa\xF1\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nos dedicamos a la programaci\xF3n, dise\xF1o, y desarrollo de aplicaciones y sitios web.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Redes Sociales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "S\xEDguenos en Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "S\xEDguenos en Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "S\xEDguenos en Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "S\xEDguenos en whatsapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "S\xEDguenos en YouTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Informaci\xF3n Contactos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bogot\xE1 Colombia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "contactohero@test.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "777 666 666");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\xA9 2020 Todos los Derechos Reservados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Marvel Comics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["html[_ngcontent-%COMP%] {\n    min-height: 100%;\n    position: relative;\n}\n\nbody[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-bottom: 40px;\n}\n\n*[_ngcontent-%COMP%]{\n\tmargin: 0px;\n\tpadding: 0px;\n\tbox-sizing: border-box;\n\tfont-family: sans-serif;\n}\n\nfooter[_ngcontent-%COMP%]{\n\tbackground: #BE0D0D;\n\tposition: relative;\n    clear:both;\n\twidth: 100%;\n\tcolor: white;\n\tmargin-top: -5px;\n}\n\n.containerAll[_ngcontent-%COMP%]{\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: auto;\n\tpadding: 5px;\n}\n\n.containerContactos[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.columna1[_ngcontent-%COMP%]{\n\tmax-width: 400px;\n}\n\n.columna1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tfont-size: 20px;\n}\n\n.columna1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n\tfont-size: 14px;\n\tcolor: #ECF0F1;\n\tmargin-top: 20px;\n}\n\n.columna2[_ngcontent-%COMP%]{\n\tmax-width: 400px;\n}\n\n.columna2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tfont-size: 20px; \n}\n\n.filas[_ngcontent-%COMP%]{\n\tmargin-top: 8px;\n\tdisplay: flex;\n}\n\n.filas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n\twidth: 19px;\n\theight: 19px;\n}\n\n.filas[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n\tmargin-top: 3px;\n\tmargin-left: 8px;\n\tcolor: #ECF0F1;\n}\n\n.columna3[_ngcontent-%COMP%]{\n\tmax-width: 400px;\n}\n\n.columna3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tfont-size: 20px;\n}\n\n.filaContactos[_ngcontent-%COMP%]{\n\tmargin-top: 10px;\n\tdisplay: flex;\n}\n\n.filaContactos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n\twidth: 25px;\n\theight: 25px;\n}\n\n.filaContactos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n\tmargin-top: 3px;\n\tmargin-left: 8px;\n\tmax-width: 180px;\n}\n\n.containerFooter[_ngcontent-%COMP%]{\n\twidth: 100%;\n\tbackground: #2A2828;\n\tdisplay: flex;\n\tpadding: 1px;\n\tjustify-content: center;\n}\n\n.copyright[_ngcontent-%COMP%]{\n\tcolor: #ECF0F1;\n}\n\n.marvel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n\ttext-decoration: none;\n\tcolor: white;\n\tfont-weight: bold;\n\tmargin-left: 20px;\n}\n\n@media screen and (max-width: 1100px){\n\n\t.containerContactos[_ngcontent-%COMP%]{\n\t\tflex-wrap: wrap;\n\t}\n\n\t.columna1[_ngcontent-%COMP%]{\n\t\tmax-width: 100%;\n\t}\n\n\t.columna2[_ngcontent-%COMP%], .columna3[_ngcontent-%COMP%]{\n\t\tmargin-top: 40px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHNCQUFzQjtDQUN0Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0lBQ2YsVUFBVTtDQUNiLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1osdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7O0VBRUMsZ0JBQWdCO0NBQ2pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbip7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG5mb290ZXJ7XG5cdGJhY2tncm91bmQ6ICNCRTBEMEQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjbGVhcjpib3RoO1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IHdoaXRlO1xuXHRtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uY29udGFpbmVyQWxse1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdG1hcmdpbjogYXV0bztcblx0cGFkZGluZzogNXB4O1xufVxuXG4uY29udGFpbmVyQ29udGFjdG9ze1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb2x1bW5hMXtcblx0bWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmNvbHVtbmExIGgxe1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb2x1bW5hMSBwe1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjRUNGMEYxO1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29sdW1uYTJ7XG5cdG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5jb2x1bW5hMiBoMXtcblx0Zm9udC1zaXplOiAyMHB4OyBcbn1cblxuLmZpbGFze1xuXHRtYXJnaW4tdG9wOiA4cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maWxhcyBpbWd7XG5cdHdpZHRoOiAxOXB4O1xuXHRoZWlnaHQ6IDE5cHg7XG59XG5cbi5maWxhcyBsYWJlbHtcblx0bWFyZ2luLXRvcDogM3B4O1xuXHRtYXJnaW4tbGVmdDogOHB4O1xuXHRjb2xvcjogI0VDRjBGMTtcbn1cblxuLmNvbHVtbmEze1xuXHRtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uY29sdW1uYTMgaDF7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZpbGFDb250YWN0b3N7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maWxhQ29udGFjdG9zIGltZ3tcblx0d2lkdGg6IDI1cHg7XG5cdGhlaWdodDogMjVweDtcbn0gXG5cbi5maWxhQ29udGFjdG9zIGxhYmVse1xuXHRtYXJnaW4tdG9wOiAzcHg7XG5cdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdG1heC13aWR0aDogMTgwcHg7XG59XG5cbi5jb250YWluZXJGb290ZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAjMkEyODI4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nOiAxcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0e1xuXHRjb2xvcjogI0VDRjBGMTtcbn1cblxuLm1hcnZlbCBhe1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpe1xuXG5cdC5jb250YWluZXJDb250YWN0b3N7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHR9XG5cblx0LmNvbHVtbmExe1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0fVxuXG5cdC5jb2x1bW5hMixcblx0LmNvbHVtbmEze1xuXHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inicio/inicio.component.ts":
  /*!********************************************!*\
    !*** ./src/app/inicio/inicio.component.ts ***!
    \********************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InicioComponent = /*#__PURE__*/function () {
      function InicioComponent() {
        _classCallCheck(this, InicioComponent);
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InicioComponent;
    }();

    InicioComponent.ɵfac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)();
    };

    InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      decls: 7,
      vars: 0,
      consts: [["id", "main_slide"], ["src", "../../assets/Imagenes/2.jpg", "alt", "HEROMAR"], [1, "contenedor1"], ["id", "contenedorCards", 1, "contenedor2"], ["id", "title_marvel"]],
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " HEROMARVEL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#main_slide[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n#main_slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 70vh;\n}\n\n#title_marvel[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 45%;\n  left: 38%;\n  margin: auto;\n  background:red;\n  font-family: 'Marvel';\n  font-size: 100pt;\n  color: white;\n  align-content: center;\n  width: 224pt;\n  height: 90pt;\n  z-index: 1;\n}\n\n#title_marvel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\ntext-align: center;\nmargin: 5px 12px; \n}\n\n.contenedor1[_ngcontent-%COMP%] {\n  background-image: url('2.jpg');\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contenedor2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: .8rem;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n\n@media (min-width: 1285px) {\n  #slide_inicio[_ngcontent-%COMP%]{\n    height: 670pt;\n  }\n}\n\n@media (max-width: 1010px) {\n  #title_marvel[_ngcontent-%COMP%]{\n    left: 28%;\n  }\n}\n\n@media (max-width: 659px) {\n  #title_marvel[_ngcontent-%COMP%]{\n    left: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7O0FBRUE7RUFDRSw4QkFBb0Q7RUFDcEQsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluX3NsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbWFpbl9zbGlkZSBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbiN0aXRsZV9tYXJ2ZWx7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDM4JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOnJlZDtcbiAgZm9udC1mYW1pbHk6ICdNYXJ2ZWwnO1xuICBmb250LXNpemU6IDEwMHB0O1xuICBjb2xvcjogd2hpdGU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIyNHB0O1xuICBoZWlnaHQ6IDkwcHQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbiN0aXRsZV9tYXJ2ZWwgc3BhbntcbnRleHQtYWxpZ246IGNlbnRlcjtcbm1hcmdpbjogNXB4IDEycHg7IFxufVxuXG4uY29udGVuZWRvcjEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZW5lcy8yLmpwZycpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVuZWRvcjIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjg1cHgpIHtcbiAgI3NsaWRlX2luaWNpb3tcbiAgICBoZWlnaHQ6IDY3MHB0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAxMHB4KSB7XG4gICN0aXRsZV9tYXJ2ZWx7XG4gICAgbGVmdDogMjglO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTlweCkge1xuICAjdGl0bGVfbWFydmVse1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inicio',
          templateUrl: './inicio.component.html',
          styleUrls: ['./inicio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      // Clave para consumir la API
      apikey: '57af49e0876f7ff1c1145a1843a1089c&hash=4ea944eb957925a4f8d2ef14aa7adb9d'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/JulianCuestas/HeroMarvel/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map