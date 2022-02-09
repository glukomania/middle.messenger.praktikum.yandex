// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _transparency = require("transparency");
var _transparencyDefault = parcelHelpers.interopDefault(_transparency);
var _dataJs = require("../data.js");
const breeds = [
    "poodle",
    "bulldog",
    "labrador",
    "corgi",
    "beagle",
    "husky",
    "rottweiler",
    "boxer",
    "shih tzu", 
];
const userNameDecorator = function() {
    return "<b>" + this.title + "</b>  (" + breeds[Math.floor(Math.random() * breeds.length)] + ")";
};
directives = {
    title: {
        html: userNameDecorator
    }
};
const getHTML = function() {
    console.log("gethtml", this.owner);
    if (this.owner === "me") {
        console.log("hetHTML - me");
        return ownMessage(this.message, this.time);
    } else {
        console.log("hetHTML - other");
        return otherMessage(this.message, this.time);
    }
};
const otherMessage = function(message, time) {
    console.log("other");
    return `
  <div class="message-container-outcome">
    <i class="fa fa-user"></i>
    <div class="message-outcome">
      <div class="message-text">${message}</div>
      <div class="message-time">${time}</div>
    </div>
  </div>`;
};
const ownMessage = function(message, time) {
    console.log("my");
    return `
  <div class="message-container-income">
    <i class="fa fa-user"></i>
    <div class="message-income">
      <div class="message-text">${message}</div>
      <div class="message-time">${time}</div>
    </div>
  </div>`;
};
directivesMessage = {
    insert: {
        html: getHTML
    }
};
_transparencyDefault.default.render(document.getElementById("user-wrapper"), _dataJs.privatChats, directives);
_transparencyDefault.default.render(document.getElementById("message"), _dataJs.messages, directivesMessage);

},{"transparency":"iTZ6d","../data.js":"5pclG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTZ6d":[function(require,module,exports) {
module.exports = require('./lib/transparency');

},{"./lib/transparency":"heKgN"}],"heKgN":[function(require,module,exports) {
var $, Context, Transparency, _, helpers, indexOf = [].indexOf || function(item) {
    for(var i = 0, l = this.length; i < l; i++){
        if (i in this && this[i] === item) return i;
    }
    return -1;
};
_ = require('../lib/lodash.js');
helpers = require('./helpers');
Context = require('./context');
Transparency = {
};
Transparency.render = function(context, models, directives, options) {
    var base, log;
    if (models == null) models = [];
    if (directives == null) directives = {
    };
    if (options == null) options = {
    };
    log = options.debug && console ? helpers.consoleLogger : helpers.nullLogger;
    log("Transparency.render:", context, models, directives, options);
    if (!context) return;
    if (!_.isArray(models)) models = [
        models
    ];
    context = (base = helpers.data(context)).context || (base.context = new Context(context, Transparency));
    return context.render(models, directives, options).el;
};
Transparency.matcher = function(element, key) {
    return element.el.id === key || indexOf.call(element.classNames, key) >= 0 || element.el.name === key || element.el.getAttribute('data-bind') === key;
};
Transparency.clone = function(node) {
    return $(node).clone()[0];
};
Transparency.jQueryPlugin = helpers.chainable(function(models, directives, options) {
    var context, i, len, results;
    results = [];
    for(i = 0, len = this.length; i < len; i++){
        context = this[i];
        results.push(Transparency.render(context, models, directives, options));
    }
    return results;
});
if (typeof jQuery !== "undefined" && jQuery !== null || typeof Zepto !== "undefined" && Zepto !== null) {
    $ = jQuery || Zepto;
    if ($ != null) $.fn.render = Transparency.jQueryPlugin;
}
if (typeof module !== "undefined" && module !== null ? module.exports : void 0) module.exports = Transparency;
if (typeof window !== "undefined" && window !== null) window.Transparency = Transparency;
if (typeof define !== "undefined" && define !== null ? define.amd : void 0) define(function() {
    return Transparency;
});

},{"../lib/lodash.js":"aWvWW","./helpers":"3B1hx","./context":"630ft"}],"aWvWW":[function(require,module,exports) {
var _ = {
};
_.toString = Object.prototype.toString;
_.toArray = function(obj) {
    var arr = new Array(obj.length);
    for(var i = 0; i < obj.length; i++)arr[i] = obj[i];
    return arr;
};
_.isString = function(obj) {
    return _.toString.call(obj) == '[object String]';
};
_.isNumber = function(obj) {
    return _.toString.call(obj) == '[object Number]';
};
_.isArray = Array.isArray || function(obj) {
    return _.toString.call(obj) === '[object Array]';
};
_.isDate = function(obj) {
    return _.toString.call(obj) === '[object Date]';
};
_.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
};
_.isPlainValue = function(obj) {
    var type;
    type = typeof obj;
    return type !== 'object' && type !== 'function' || exports.isDate(obj);
};
_.isBoolean = function(obj) {
    return obj === true || obj === false;
};
module.exports = _;

},{}],"3B1hx":[function(require,module,exports) {
var ElementFactory, _getElements, expando, html5Clone;
ElementFactory = require('./elementFactory');
exports.before = function(decorator) {
    return function(method) {
        return function() {
            decorator.apply(this, arguments);
            return method.apply(this, arguments);
        };
    };
};
exports.after = function(decorator) {
    return function(method) {
        return function() {
            method.apply(this, arguments);
            return decorator.apply(this, arguments);
        };
    };
};
exports.chainable = exports.after(function() {
    return this;
});
exports.onlyWith$ = function(fn) {
    if (typeof jQuery !== "undefined" && jQuery !== null || typeof Zepto !== "undefined" && Zepto !== null) return (function($) {
        return fn(arguments);
    })(jQuery || Zepto);
};
exports.getElements = function(el) {
    var elements;
    elements = [];
    _getElements(el, elements);
    return elements;
};
_getElements = function(template, elements) {
    var child, results;
    child = template.firstChild;
    results = [];
    while(child){
        if (child.nodeType === exports.ELEMENT_NODE) {
            elements.push(new ElementFactory.createElement(child));
            _getElements(child, elements);
        }
        results.push(child = child.nextSibling);
    }
    return results;
};
exports.ELEMENT_NODE = 1;
exports.TEXT_NODE = 3;
html5Clone = function() {
    return document.createElement('nav').cloneNode(true).outerHTML !== '<:nav></:nav>';
};
exports.cloneNode = typeof document === "undefined" || document === null || html5Clone() ? function(node) {
    return node.cloneNode(true);
} : function(node) {
    var cloned, element, i, len, ref;
    cloned = Transparency.clone(node);
    if (cloned.nodeType === exports.ELEMENT_NODE) {
        cloned.removeAttribute(expando);
        ref = cloned.getElementsByTagName('*');
        for(i = 0, len = ref.length; i < len; i++){
            element = ref[i];
            element.removeAttribute(expando);
        }
    }
    return cloned;
};
expando = 'transparency';
exports.data = function(element) {
    return element[expando] || (element[expando] = {
    });
};
exports.nullLogger = function() {
};
exports.consoleLogger = function() {
    return console.log(arguments);
};
exports.log = exports.nullLogger;

},{"./elementFactory":"47N6x"}],"47N6x":[function(require,module,exports) {
var AttributeFactory, Checkbox, Element, ElementFactory, Input, Radio, Select, TextArea, VoidElement, _, helpers, hasProp = {
}.hasOwnProperty, extend = function(child, parent) {
    for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
};
_ = require('../lib/lodash.js');
helpers = require('./helpers');
AttributeFactory = require('./attributeFactory');
module.exports = ElementFactory = {
    Elements: {
        input: {
        }
    },
    createElement: function(el) {
        var El, name;
        if ('input' === (name = el.nodeName.toLowerCase())) El = ElementFactory.Elements[name][el.type.toLowerCase()] || Input;
        else El = ElementFactory.Elements[name] || Element;
        return new El(el);
    }
};
Element = (function() {
    function Element1(el1) {
        this.el = el1;
        this.attributes = {
        };
        this.childNodes = _.toArray(this.el.childNodes);
        this.nodeName = this.el.nodeName.toLowerCase();
        this.classNames = this.el.className.split(' ');
        this.originalAttributes = {
        };
    }
    Element1.prototype.empty = function() {
        var child;
        while(child = this.el.firstChild)this.el.removeChild(child);
        return this;
    };
    Element1.prototype.reset = function() {
        var attribute, name, ref, results;
        ref = this.attributes;
        results = [];
        for(name in ref){
            attribute = ref[name];
            results.push(attribute.set(attribute.templateValue));
        }
        return results;
    };
    Element1.prototype.render = function(value) {
        return this.attr('text', value);
    };
    Element1.prototype.attr = function(name, value) {
        var attribute, base;
        attribute = (base = this.attributes)[name] || (base[name] = AttributeFactory.createAttribute(this.el, name, value));
        if (value != null) attribute.set(value);
        return attribute;
    };
    Element1.prototype.renderDirectives = function(model, index, attributes) {
        var directive, name, results, value;
        results = [];
        for(name in attributes){
            if (!hasProp.call(attributes, name)) continue;
            directive = attributes[name];
            if (!(typeof directive === 'function')) continue;
            value = directive.call(model, {
                element: this.el,
                index: index,
                value: this.attr(name).templateValue
            });
            if (value != null) results.push(this.attr(name, value));
            else results.push(void 0);
        }
        return results;
    };
    return Element1;
})();
Select = (function(superClass) {
    extend(Select1, superClass);
    ElementFactory.Elements['select'] = Select1;
    function Select1(el) {
        Select1.__super__.constructor.call(this, el);
        this.elements = helpers.getElements(el);
    }
    Select1.prototype.render = function(value) {
        var i, len, option, ref, results;
        value = value.toString();
        ref = this.elements;
        results = [];
        for(i = 0, len = ref.length; i < len; i++){
            option = ref[i];
            if (option.nodeName === 'option') results.push(option.attr('selected', option.el.value === value));
        }
        return results;
    };
    return Select1;
})(Element);
VoidElement = (function(superClass) {
    var VOID_ELEMENTS, i, len, nodeName;
    extend(VoidElement1, superClass);
    function VoidElement1() {
        return VoidElement1.__super__.constructor.apply(this, arguments);
    }
    VOID_ELEMENTS = [
        'area',
        'base',
        'br',
        'col',
        'command',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
    ];
    for(i = 0, len = VOID_ELEMENTS.length; i < len; i++){
        nodeName = VOID_ELEMENTS[i];
        ElementFactory.Elements[nodeName] = VoidElement1;
    }
    VoidElement1.prototype.attr = function(name, value) {
        if (name !== 'text' && name !== 'html') return VoidElement1.__super__.attr.call(this, name, value);
    };
    return VoidElement1;
})(Element);
Input = (function(superClass) {
    extend(Input1, superClass);
    function Input1() {
        return Input1.__super__.constructor.apply(this, arguments);
    }
    Input1.prototype.render = function(value) {
        return this.attr('value', value);
    };
    return Input1;
})(VoidElement);
TextArea = (function(superClass) {
    extend(TextArea1, superClass);
    function TextArea1() {
        return TextArea1.__super__.constructor.apply(this, arguments);
    }
    ElementFactory.Elements['textarea'] = TextArea1;
    return TextArea1;
})(Input);
Checkbox = (function(superClass) {
    extend(Checkbox1, superClass);
    function Checkbox1() {
        return Checkbox1.__super__.constructor.apply(this, arguments);
    }
    ElementFactory.Elements['input']['checkbox'] = Checkbox1;
    Checkbox1.prototype.render = function(value) {
        return this.attr('checked', Boolean(value));
    };
    return Checkbox1;
})(Input);
Radio = (function(superClass) {
    extend(Radio1, superClass);
    function Radio1() {
        return Radio1.__super__.constructor.apply(this, arguments);
    }
    ElementFactory.Elements['input']['radio'] = Radio1;
    return Radio1;
})(Checkbox);

},{"../lib/lodash.js":"aWvWW","./helpers":"3B1hx","./attributeFactory":"3aMpL"}],"3aMpL":[function(require,module,exports) {
var Attribute, AttributeFactory, BooleanAttribute, Class, Html, Text, _, helpers, extend = function(child, parent) {
    for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
}, hasProp = {
}.hasOwnProperty;
_ = require('../lib/lodash');
helpers = require('./helpers');
module.exports = AttributeFactory = {
    Attributes: {
    },
    createAttribute: function(element, name) {
        var Attr;
        Attr = AttributeFactory.Attributes[name] || Attribute;
        return new Attr(element, name);
    }
};
Attribute = (function() {
    function Attribute1(el1, name1) {
        this.el = el1;
        this.name = name1;
        this.templateValue = this.el.getAttribute(this.name) || '';
    }
    Attribute1.prototype.set = function(value) {
        this.el[this.name] = value;
        return this.el.setAttribute(this.name, value.toString());
    };
    return Attribute1;
})();
BooleanAttribute = (function(superClass) {
    var BOOLEAN_ATTRIBUTES, i, len, name;
    extend(BooleanAttribute1, superClass);
    BOOLEAN_ATTRIBUTES = [
        'hidden',
        'async',
        'defer',
        'autofocus',
        'formnovalidate',
        'disabled',
        'autofocus',
        'formnovalidate',
        'multiple',
        'readonly',
        'required',
        'checked',
        'scoped',
        'reversed',
        'selected',
        'loop',
        'muted',
        'autoplay',
        'controls',
        'seamless',
        'default',
        'ismap',
        'novalidate',
        'open',
        'typemustmatch',
        'truespeed'
    ];
    for(i = 0, len = BOOLEAN_ATTRIBUTES.length; i < len; i++){
        name = BOOLEAN_ATTRIBUTES[i];
        AttributeFactory.Attributes[name] = BooleanAttribute1;
    }
    function BooleanAttribute1(el1, name1) {
        this.el = el1;
        this.name = name1;
        this.templateValue = this.el.getAttribute(this.name) || false;
    }
    BooleanAttribute1.prototype.set = function(value) {
        this.el[this.name] = value;
        if (value) return this.el.setAttribute(this.name, this.name);
        else return this.el.removeAttribute(this.name);
    };
    return BooleanAttribute1;
})(Attribute);
Text = (function(superClass) {
    extend(Text1, superClass);
    AttributeFactory.Attributes['text'] = Text1;
    function Text1(el1, name1) {
        var child;
        this.el = el1;
        this.name = name1;
        this.templateValue = (function() {
            var i, len, ref, results;
            ref = this.el.childNodes;
            results = [];
            for(i = 0, len = ref.length; i < len; i++){
                child = ref[i];
                if (child.nodeType === helpers.TEXT_NODE) results.push(child.nodeValue);
            }
            return results;
        }).call(this).join('');
        this.children = _.toArray(this.el.children);
        if (!(this.textNode = this.el.firstChild)) this.el.appendChild(this.textNode = this.el.ownerDocument.createTextNode(''));
        else if (this.textNode.nodeType !== helpers.TEXT_NODE) this.textNode = this.el.insertBefore(this.el.ownerDocument.createTextNode(''), this.textNode);
    }
    Text1.prototype.set = function(text) {
        var child, i, len, ref, results;
        while(child = this.el.firstChild)this.el.removeChild(child);
        this.textNode.nodeValue = text;
        this.el.appendChild(this.textNode);
        ref = this.children;
        results = [];
        for(i = 0, len = ref.length; i < len; i++){
            child = ref[i];
            results.push(this.el.appendChild(child));
        }
        return results;
    };
    return Text1;
})(Attribute);
Html = (function(superClass) {
    extend(Html1, superClass);
    AttributeFactory.Attributes['html'] = Html1;
    function Html1(el1) {
        this.el = el1;
        this.templateValue = '';
        this.children = _.toArray(this.el.children);
    }
    Html1.prototype.set = function(html) {
        var child, i, len, ref, results;
        while(child = this.el.firstChild)this.el.removeChild(child);
        this.el.innerHTML = html + this.templateValue;
        ref = this.children;
        results = [];
        for(i = 0, len = ref.length; i < len; i++){
            child = ref[i];
            results.push(this.el.appendChild(child));
        }
        return results;
    };
    return Html1;
})(Attribute);
Class = (function(superClass) {
    extend(Class1, superClass);
    AttributeFactory.Attributes['class'] = Class1;
    function Class1(el) {
        Class1.__super__.constructor.call(this, el, 'class');
    }
    return Class1;
})(Attribute);

},{"../lib/lodash":"aWvWW","./helpers":"3B1hx"}],"630ft":[function(require,module,exports) {
var Context, Instance, after, before, chainable, cloneNode, ref;
ref = require('./helpers'), before = ref.before, after = ref.after, chainable = ref.chainable, cloneNode = ref.cloneNode;
Instance = require('./instance');
module.exports = Context = (function() {
    var attach, detach;
    detach = chainable(function() {
        this.parent = this.el.parentNode;
        if (this.parent) {
            this.nextSibling = this.el.nextSibling;
            return this.parent.removeChild(this.el);
        }
    });
    attach = chainable(function() {
        if (this.parent) {
            if (this.nextSibling) return this.parent.insertBefore(this.el, this.nextSibling);
            else return this.parent.appendChild(this.el);
        }
    });
    function Context1(el, Transparency) {
        this.el = el;
        this.Transparency = Transparency;
        this.template = cloneNode(this.el);
        this.instances = [
            new Instance(this.el, this.Transparency)
        ];
        this.instanceCache = [];
    }
    Context1.prototype.render = before(detach)(after(attach)(chainable(function(models, directives, options) {
        var children, i, index, instance, len, model, results;
        while(models.length < this.instances.length)this.instanceCache.push(this.instances.pop().remove());
        while(models.length > this.instances.length){
            instance = this.instanceCache.pop() || new Instance(cloneNode(this.template), this.Transparency);
            this.instances.push(instance.appendTo(this.el));
        }
        results = [];
        for(index = i = 0, len = models.length; i < len; index = ++i){
            model = models[index];
            instance = this.instances[index];
            children = [];
            results.push(instance.prepare(model, children).renderValues(model, children).renderDirectives(model, index, directives).renderChildren(model, children, directives, options));
        }
        return results;
    })));
    return Context1;
})();

},{"./helpers":"3B1hx","./instance":"8UYto"}],"8UYto":[function(require,module,exports) {
var Instance, _, chainable, helpers, hasProp = {
}.hasOwnProperty;
_ = require('../lib/lodash.js');
chainable = (helpers = require('./helpers')).chainable;
module.exports = Instance = (function() {
    function Instance1(template, Transparency) {
        this.Transparency = Transparency;
        this.queryCache = {
        };
        this.childNodes = _.toArray(template.childNodes);
        this.elements = helpers.getElements(template);
    }
    Instance1.prototype.remove = chainable(function() {
        var i, len, node, ref, results;
        ref = this.childNodes;
        results = [];
        for(i = 0, len = ref.length; i < len; i++){
            node = ref[i];
            results.push(node.parentNode.removeChild(node));
        }
        return results;
    });
    Instance1.prototype.appendTo = chainable(function(parent) {
        var i, len, node, ref, results;
        ref = this.childNodes;
        results = [];
        for(i = 0, len = ref.length; i < len; i++){
            node = ref[i];
            results.push(parent.appendChild(node));
        }
        return results;
    });
    Instance1.prototype.prepare = chainable(function(model) {
        var element, i, len, ref, results;
        ref = this.elements;
        results = [];
        for(i = 0, len = ref.length; i < len; i++){
            element = ref[i];
            element.reset();
            results.push(helpers.data(element.el).model = model);
        }
        return results;
    });
    Instance1.prototype.renderValues = chainable(function(model, children) {
        var element, key, results, value;
        if (_.isElement(model) && (element = this.elements[0])) return element.empty().el.appendChild(model);
        else if (typeof model === 'object') {
            results = [];
            for(key in model){
                if (!hasProp.call(model, key)) continue;
                value = model[key];
                if (value != null) {
                    if (_.isString(value) || _.isNumber(value) || _.isBoolean(value) || _.isDate(value)) results.push((function() {
                        var i, len, ref, results1;
                        ref = this.matchingElements(key);
                        results1 = [];
                        for(i = 0, len = ref.length; i < len; i++){
                            element = ref[i];
                            results1.push(element.render(value));
                        }
                        return results1;
                    }).call(this));
                    else if (typeof value === 'object') results.push(children.push(key));
                    else results.push(void 0);
                }
            }
            return results;
        }
    });
    Instance1.prototype.renderDirectives = chainable(function(model, index, directives) {
        var attributes, element, key, results;
        results = [];
        for(key in directives){
            if (!hasProp.call(directives, key)) continue;
            attributes = directives[key];
            if (!(typeof attributes === 'object')) continue;
            if (typeof model !== 'object') model = {
                value: model
            };
            results.push((function() {
                var i, len, ref, results1;
                ref = this.matchingElements(key);
                results1 = [];
                for(i = 0, len = ref.length; i < len; i++){
                    element = ref[i];
                    results1.push(element.renderDirectives(model, index, attributes));
                }
                return results1;
            }).call(this));
        }
        return results;
    });
    Instance1.prototype.renderChildren = chainable(function(model, children, directives, options) {
        var element, i, key, len, results;
        results = [];
        for(i = 0, len = children.length; i < len; i++){
            key = children[i];
            results.push((function() {
                var j, len1, ref, results1;
                ref = this.matchingElements(key);
                results1 = [];
                for(j = 0, len1 = ref.length; j < len1; j++){
                    element = ref[j];
                    results1.push(this.Transparency.render(element.el, model[key], directives[key], options));
                }
                return results1;
            }).call(this));
        }
        return results;
    });
    Instance1.prototype.matchingElements = function(key) {
        var base, el, elements;
        elements = (base = this.queryCache)[key] || (base[key] = (function() {
            var i, len, ref, results;
            ref = this.elements;
            results = [];
            for(i = 0, len = ref.length; i < len; i++){
                el = ref[i];
                if (this.Transparency.matcher(el, key)) results.push(el);
            }
            return results;
        }).call(this));
        helpers.log("Matching elements for '" + key + "':", elements);
        return elements;
    };
    return Instance1;
})();

},{"../lib/lodash.js":"aWvWW","./helpers":"3B1hx"}],"5pclG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "privatChats", ()=>privatChats
);
parcelHelpers.export(exports, "messages", ()=>messages
);
const privatChats = [
    {
        id: 123,
        title: "my-chat",
        avatar: "/123/avatar1.jpg",
        unread_count: 0,
        last_message: {
            user: {
                first_name: "Petya",
                second_name: "Pupkin",
                avatar: "/path/to/avatar.jpg",
                email: "my@email.com",
                login: "userLogin",
                phone: "8(911)-222-33-22"
            },
            time: "2020-01-02T14:22:22.000Z",
            content: "this is message content"
        }
    },
    {
        id: 234,
        title: "poodles",
        avatar: "/123/avatar2.jpg",
        unread_count: 10,
        last_message: {
            user: {
                first_name: "Petya",
                second_name: "Pupkin",
                avatar: "/path/to/avatar.jpg",
                email: "my@email.com",
                login: "userLogin",
                phone: "8(911)-222-33-22"
            },
            time: "2020-01-02T14:22:22.000Z",
            content: "this is message content"
        }
    },
    {
        id: 456,
        title: "central-park",
        avatar: "/123/avatar3.jpg",
        unread_count: 1,
        last_message: {
            user: {
                first_name: "Petya",
                second_name: "Pupkin",
                avatar: "/path/to/avatar.jpg",
                email: "my@email.com",
                login: "userLogin",
                phone: "8(911)-222-33-22"
            },
            time: "2020-01-02T14:22:22.000Z",
            content: "this is message content"
        }
    }, 
];
const messages = [
    {
        owner: "me",
        message: "test from me",
        time: "11:45"
    },
    {
        owner: "Ivan",
        message: "test from Ivan",
        time: "11:50"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire713d")

//# sourceMappingURL=index.975ef6c8.js.map
