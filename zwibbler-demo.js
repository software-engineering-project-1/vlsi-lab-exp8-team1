/**
   Zwibbler

   Copyright 2013 Hanov Solutions Inc. All Rights Reserved. This software is
   NOT open source. For licensing information, contact the author.

   steve.hanov@gmail.com

   @license
 */
(function(){
"use strict";var m;
function aa(a, b, c, d, e) {
  this.Ta = a || "transparent";
  this.left = b || 0;
  this.top = c || 0;
  this.right = d || 0;
  this.bottom = e || 0;
  this.$ = 1;
  this.insertBefore = null;
}
aa.prototype.Ma = function() {
  this.ha.remove();
};
aa.prototype.show = function(a) {
  this.ha = p("<div>");
  this.ha.da("position", "fixed");
  this.ha.da("background", this.Ta);
  this.ha.da("opacity", "0.25");
  this.ha.da("left", "" + this.left + "px");
  this.ha.da("top", "" + this.top + "px");
  this.ha.da("right", "" + this.right + "px");
  this.ha.da("bottom", "" + this.bottom + "px");
  this.ha.da("display", "none");
  this.ha.click(function(b) {
    a(b);
  });
  this.insertBefore ? (this.ha.da("z-index", "" + this.$), ba(p(this.ha), this.insertBefore)) : (this.ha.da("z-index", "" + this.$), p("body").append(this.ha));
  ca(this.ha);
};
var da = {}, ea = {};
function fa(a) {
  for (var b = ["base64"], c = 0;c < b.length;c++) {
    a = da[b[c]](a);
  }
  return a;
}
da.base64 = function(a) {
  for (var b = "", c, d, e, f, g, h, l = 0;l < a.length;) {
    c = a.charCodeAt(l++), d = a.charCodeAt(l++), e = a.charCodeAt(l++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)
    ;
  }
  return b;
};
ea.base64 = function(a) {
  var b = "", c, d, e, f, g, h = 0, l = {A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10, L:11, M:12, N:13, O:14, P:15, Q:16, R:17, S:18, T:19, U:20, V:21, W:22, X:23, Y:24, Z:25, a:26, b:27, c:28, d:29, e:30, f:31, g:32, h:33, i:34, j:35, k:36, l:37, m:38, n:39, o:40, p:41, q:42, r:43, s:44, t:45, u:46, v:47, w:48, x:49, y:50, z:51, 0:52, 1:53, 2:54, 3:55, 4:56, 5:57, 6:58, 7:59, 8:60, 9:61, "+":62, "/":63, "=":64};
  for (a = a.replace(/[^A-Za-z0-9\-_\=\+\/]/g, "");h < a.length;) {
    c = l[a.charAt(h++)], d = l[a.charAt(h++)], f = l[a.charAt(h++)], g = l[a.charAt(h++)], c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !== f && (b += String.fromCharCode(d)), 64 !== g && (b += String.fromCharCode(e));
  }
  return b;
};
da.ascii85 = function(a) {
  for (var b = "", c, d, e, f, g, h, l, k, n = 0;n < a.length;) {
    c = a.charCodeAt(n++), d = a.charCodeAt(n++), e = a.charCodeAt(n++), f = a.charCodeAt(n++), g = (c << 24 | d << 16 | e << 8 | f) >>> 0, c = (g / 52200625 | 0) % 85 + 33, h = (g / 614125 | 0) % 85 + 33, l = (g / 7225 | 0) % 85 + 33, k = (g / 85 | 0) % 85 + 33, g = g % 85 + 33, (118 < c || 118 < h || 118 < l || 118 < k || 118 < g) && console.log(c, h, l, k, g), (33 > c || 33 > h || 33 > l || 33 > k || 33 > g) && console.log(c, h, l, k, g), b += String.fromCharCode(c) + String.fromCharCode(h), isNaN(d) || 
    (b += String.fromCharCode(l), isNaN(e) || (b += String.fromCharCode(k), isNaN(f) || (b += String.fromCharCode(g))));
  }
  return b + "~>";
};
da.utf8 = function(a) {
  for (var b = "", c = 0;c < a.length;c++) {
    var d = a.charCodeAt(c);
    128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128));
  }
  return b;
};
ea.utf8 = function(a) {
  for (var b = "", c = 0;c < a.length;c++) {
    var d = a.charCodeAt(c);
    127 >= d ? b += String.fromCharCode(d) : 2047 >= a ? (b += String.fromCharCode(192 | a >> 6), b += String.fromCharCode(128 | a & 63)) : 65535 >= a ? (b += String.fromCharCode(224 | a >> 12), b += String.fromCharCode(128 | a >> 6 & 63), b += String.fromCharCode(128 | a & 63)) : 1114111 >= a ? (b += String.fromCharCode(240 | a >> 18), b += String.fromCharCode(128 | a >> 12 & 63), b += String.fromCharCode(128 | a >> 6 & 63), b += String.fromCharCode(128 | a & 63)) : b += String.fromCharCode(63);
  }
  return b;
};
ea.utf8 = function(a) {
  for (var b = "", c = 0;c < a.length;c++) {
    var d = a.charCodeAt(c);
    128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128));
  }
  return b;
};
da.hex = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    var d = a.charCodeAt(c);
    16 > d && b.push("0");
    b.push(d.toString(16));
  }
  return b.join("");
};
da.sha1 = function(a) {
  var b = [1518500249, 1859775393, 2400959708, 3395469782];
  a += String.fromCharCode(128);
  for (var c = Math.ceil((a.length / 4 + 2) / 16), d = Array(c), e = 0;e < c;e++) {
    d[e] = Array(16);
    for (var f = 0;16 > f;f++) {
      d[e][f] = a.charCodeAt(64 * e + 4 * f) << 24 | a.charCodeAt(64 * e + 4 * f + 1) << 16 | a.charCodeAt(64 * e + 4 * f + 2) << 8 | a.charCodeAt(64 * e + 4 * f + 3);
    }
  }
  d[c - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
  d[c - 1][14] = Math.floor(d[c - 1][14]);
  d[c - 1][15] = 8 * (a.length - 1) & 4294967295;
  a = 1732584193;
  for (var f = 4023233417, g = 2562383102, h = 271733878, l = 3285377520, k = Array(80), n, q, r, t, w, e = 0;e < c;e++) {
    for (var v = 0;16 > v;v++) {
      k[v] = d[e][v];
    }
    for (v = 16;80 > v;v++) {
      n = k[v - 3] ^ k[v - 8] ^ k[v - 14] ^ k[v - 16], k[v] = n << 1 | n >>> 31;
    }
    n = a;
    q = f;
    r = g;
    t = h;
    w = l;
    for (v = 0;80 > v;v++) {
      var x = Math.floor(v / 20), C;
      a: {
        switch(x) {
          case 0:
            C = q & r ^ ~q & t;
            break a;
          case 1:
            C = q ^ r ^ t;
            break a;
          case 2:
            C = q & r ^ q & t ^ r & t;
            break a;
          case 3:
            C = q ^ r ^ t;
            break a;
        }
        C = void 0;
      }
      x = (n << 5 | n >>> 27) + C + w + b[x] + k[v] & 4294967295;
      w = t;
      t = r;
      r = q << 30 | q >>> 2;
      q = n;
      n = x;
    }
    a = a + n & 4294967295;
    f = f + q & 4294967295;
    g = g + r & 4294967295;
    h = h + t & 4294967295;
    l = l + w & 4294967295;
  }
  return String.fromCharCode(a >> 24 & 255) + String.fromCharCode(a >> 16 & 255) + String.fromCharCode(a >> 8 & 255) + String.fromCharCode(a >> 0 & 255) + String.fromCharCode(f >> 24 & 255) + String.fromCharCode(f >> 16 & 255) + String.fromCharCode(f >> 8 & 255) + String.fromCharCode(f >> 0 & 255) + String.fromCharCode(g >> 24 & 255) + String.fromCharCode(g >> 16 & 255) + String.fromCharCode(g >> 8 & 255) + String.fromCharCode(g >> 0 & 255) + String.fromCharCode(h >> 24 & 255) + String.fromCharCode(h >> 
  16 & 255) + String.fromCharCode(h >> 8 & 255) + String.fromCharCode(h >> 0 & 255) + String.fromCharCode(l >> 24 & 255) + String.fromCharCode(l >> 16 & 255) + String.fromCharCode(l >> 8 & 255) + String.fromCharCode(l >> 0 & 255);
};
function u(a, b) {
  if (!a) {
    throw b || "Assertion failed";
  }
}
function ia(a) {
  u("number" === typeof a, "Expected a number");
}
function ja(a) {
  return "object" === typeof a && "[object Array]" === Object.prototype.toString.apply(a);
}
function ka(a) {
  return "string" === typeof a;
}
function y(a) {
  return "number" === typeof a;
}
;function z(a) {
  this.keys = {};
  1 === arguments.length && this.add(arguments[0]);
  1 === arguments.length && "object" === typeof arguments[0] && this.add(arguments[0]);
}
z.prototype = {contains:function(a) {
  return a in this.keys;
}, add:function(a) {
  var b, c;
  if ("string" === typeof a || "number" === typeof a) {
    this.keys[a] = !0;
  } else {
    if ("object" === typeof a) {
      if ("[object Array]" === Object.prototype.toString.apply(a)) {
        for (c = 0;c < a.length;c++) {
          b = a[c], this.keys[b] = !0;
        }
      } else {
        for (b in a) {
          a.hasOwnProperty(b) && (this.keys[b] = !0);
        }
      }
    } else {
      return u(!1, "Arg must be an array");
    }
  }
}, remove:function(a) {
  delete this.keys[a];
}, Hb:function() {
  var a, b;
  b = [];
  for (a in this.keys) {
    this.keys.hasOwnProperty(a) && b.push(a);
  }
  return b;
}};
function la(a) {
  var b, c;
  c = [];
  for (b in a.keys) {
    a.keys.hasOwnProperty(b) && c.push(parseFloat(b));
  }
  return c;
}
function ma(a, b) {
  var c, d;
  u(b instanceof z);
  d = new z;
  for (c in a.keys) {
    b.contains(c) || d.add(c);
  }
  return d;
}
;var na;
try {
  na = Function("return this")();
} catch (a) {
  na = window;
}
var oa = {}, pa = [];
function A(a, b) {
  function c(b) {
    var c = arguments, f = [], g = c[0];
    if (!oa[a]) {
      var h = g.split("%s");
      f.push(h[0]);
      for (g = 1;g < h.length;g++) {
        g - 1 >= c.length - 1 ? f.push("<too few args>") : "string" === typeof c[g] || "number" === typeof c[g] ? f.push(c[g]) : void 0 === c[g] ? f.push("(undefined)") : null === c[g] ? f.push("(null)") : c[g] instanceof Object && c[g].toString instanceof Function ? f.push(c[g].toString()) : f.push(JSON.stringify(c[g])), f.push(h[g]);
      }
      c = f.join("");
      for (g = 0;g < pa.length;g++) {
        pa[g](a, c);
      }
    }
  }
  !1 === b && (oa[a] = !0);
  c.$ = function() {
    return 0 < pa.length && !oa[a];
  };
  return c;
}
function qa(a) {
  pa.push(a);
}
"console" in na || (na.console = {log:function() {
  for (var a = [], b = 0;b < arguments.length;b++) {
    try {
      "string" === typeof arguments[b] ? a.push(arguments[b]) : a.push(JSON.stringify(arguments[b]));
    } catch (c) {
      a.push(c.toString());
    }
  }
  for (b = 0;b < pa.length;b++) {
    pa[b]("Console", a.join(""));
  }
}}, na.console.error = na.console.log);
function ra() {
  this.length = 0;
}
var sa = A("JQUERY"), ta, ua = /\s+/, va = /^[\s\xA0]+/, wa = /[\s\xA0]+$/, xa, za = {B:1, BIG:1, I:1, SMALL:1, TT:1, ABBR:1, ACRONYM:1, CITE:1, CODE:1, DFN:1, EM:1, KBD:1, STRONG:1, SAMP:1, VAR:1, A:1, BDO:1, BR:1, IMG:1, MAP:1, OBJECT:1, Q:1, SCRIPT:1, SPAN:1, SUB:1, SUP:1, BUTTON:1, INPUT:1, LABEL:1, SELECT:1, TEXTAREA:1}, Aa = [], Ba = !1;
function Ca() {
  !Ba && window.attachEvent && (window.attachEvent("onresize", function(a) {
    for (var b = 0;b < Aa.length;b++) {
      Aa[b](a);
    }
  }), Ba = !0);
}
function Da(a, b) {
  var c = /#(.*)$/, d = /\.(.*)$/, e = /^<\s*([a-zA-Z0-9]+).*>$/, f = /^([A-Za-z]+)$/;
  b = b || document;
  var g = new ra, h, l, k;
  try {
    k = ("object" === typeof HTMLElement ? a instanceof HTMLElement : "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName || 3 === a.nodeType) || a === window || a === document || a === document.body || a instanceof Element;
  } catch (r) {
    k = !1;
  }
  if (k) {
    return g[g.length++] = a, g;
  }
  if (a instanceof ra) {
    return a;
  }
  k = a.split(",");
  for (var n = 0;n < k.length;n++) {
    if (l = k[n], null !== (h = c.exec(l))) {
      h = document.getElementById(h[1]), null !== h && (g[g.length++] = h);
    } else {
      if (null !== (h = e.exec(l))) {
        h = h[1], g[g.length++] = document.createElement(h);
      } else {
        if (null !== (h = d.exec(l))) {
          l = g;
          h = xa(b, h[1], null);
          for (var q = 0;q < h.length;q++) {
            l[l.length++] = h[q];
          }
        } else {
          if (null !== (h = f.exec(l))) {
            for (l = g, h = b.getElementsByTagName(h[1]), q = 0;q < h.length;q++) {
              l[l.length++] = h[q];
            }
          } else {
            throw console.log(l), "Error: can't parse selector: " + l + " (" + l.nodeType;
          }
        }
      }
    }
  }
  return g;
}
ra.prototype = {children:function() {
  for (var a = new ra, b = 0;b < this.length;b++) {
    for (var c = this[b].firstChild;c;) {
      a[a.length++] = c, c = c.nextSibling;
    }
  }
  return a;
}, Ma:function() {
  for (var a = 0;a < this.length;a++) {
    var b = p(this[a]).da("display");
    "none" !== b && (this[a].Wd = b);
    this[a].style.display = "none";
  }
  return this;
}, show:function() {
  for (var a = 0;a < this.length;a++) {
    this[a].Wd ? this[a].style.display = this[a].Wd : "none" === p(this[a]).da("display") && (this[a].style.display = this[a].tagName in za ? "inline" : "block");
  }
  return this;
}, append:function(a) {
  a = Da(a);
  if (0 < this.length) {
    for (var b = 0;b < a.length;b++) {
      this[0].appendChild(a[b]);
    }
  }
  return this;
}, remove:function() {
  for (var a = 0;a < this.length;a++) {
    this[a].parentNode && this[a].parentNode.removeChild(this[a]);
  }
  return this;
}, empty:function() {
  for (var a = 0;a < this.length;a++) {
    for (;null !== this[a].firstChild;) {
      this[a].removeChild(this[a].firstChild);
    }
  }
  return this;
}, text:function(a) {
  if (0 === arguments.length) {
    var b = "";
    Ea(this, function(a) {
      3 === a.nodeType && (b += a.nodeValue);
    });
    return b;
  }
  for (var c = 0;c < this.length;c++) {
    for (;null !== this[c].firstChild;) {
      this[c].removeChild(this[c].firstChild);
    }
    this[c].appendChild(document.createTextNode(a));
  }
  return this;
}, width:function() {
  if (0 < this.length) {
    if (1 === arguments.length) {
      for (var a = Math.max(0, arguments[0]), b = 0;b < this.length;b++) {
        this[b].style.width = "" + a + "px";
      }
      return this;
    }
    return this[0] === window ? this[0].innerWidth || document.documentElement.clientWidth : this[0].clientWidth;
  }
  return 0;
}, height:function() {
  if (0 < this.length) {
    if (1 === arguments.length) {
      for (var a = 0;a < this.length;a++) {
        this[a].style.height = "" + arguments[0] + "px";
      }
      return this;
    }
    return this[0] === window ? this[0].innerHeight || document.documentElement.clientHeight : this[0].clientHeight;
  }
  return 0;
}, outerWidth:function() {
  return 0 < this.length ? this[0].offsetWidth : 0;
}, outerHeight:function() {
  return 0 < this.length ? this[0].offsetHeight : 0;
}, offset:function(a) {
  if (a) {
    if (0 < this.length) {
      var b = p(this[0].parentNode).offset();
      this[0].style.left = a.left - b.left + "px";
      this[0].style.top = a.top - b.top + "px";
    }
  } else {
    if (0 < this.length) {
      a = this[0].getBoundingClientRect();
      var c = b = 0;
      "pageYOffset" in window ? (b = window.pageXOffset, c = window.pageYOffset) : (b = document.body.scrollLeft, c = document.body.scrollTop);
      return {top:a.top + c, left:a.left + b};
    }
    return {left:0, top:0};
  }
}, clone:function() {
  return this.length ? Da(this[0].cloneNode(!0)) : new ra;
}, find:function(a) {
  return this.length ? Da(a, this[0]) : new ra;
}, Ja:function(a, b) {
  if (2 === arguments.length) {
    for (var c = 0;c < this.length;c++) {
      this[c].setAttribute(a, b);
    }
    return this;
  }
  return 0 < this.length ? this[0].getAttribute(a) : "";
}, mb:function(a) {
  for (var b = 0;b < this.length;b++) {
    a(b, this[b]);
  }
}, focus:function() {
  0 < this.length && this[0].focus();
  return this;
}, blur:function() {
  0 < this.length && this[0].blur();
  return this;
}, submit:function() {
  for (var a = 0;a < this.length;a++) {
    this[a].submit();
  }
  return this;
}, select:function() {
  for (var a = 0;a < this.length;a++) {
    this[a].select();
  }
  return this;
}, da:function(a, b) {
  var c = a.split("-");
  a = c[0];
  for (var d = 1;d < c.length;d++) {
    a = "ms" !== c[d] ? a + (c[d].substr(0, 1).toUpperCase() + c[d].substr(1)) : a + c[d];
  }
  if (2 === arguments.length) {
    for (d = 0;d < this.length;d++) {
      this[d].style[a] = "" + b;
    }
    return this;
  }
  return this[0].currentStyle ? this[0].currentStyle[a] : window.getComputedStyle ? window.getComputedStyle(this[0], null)[a] : this[0].style[a];
}, on:function(a, b) {
  function c(a) {
    d[0] === window && "resize" === a && window.attachEvent ? (Aa.push(b), Ca()) : window.addEventListener ? d.mb(function(c, d) {
      b.Ne = function(a) {
        a.ab = a;
        "which" in a || (a.which = a.button);
        return b.call(d, a);
      };
      d.addEventListener(a, b.Ne, !1);
    }) : d.mb(function(c, d) {
      d.attachEvent("on" + a, function(a) {
        a.ab = a;
        a.which = a.button;
        a.pageX = a.clientX;
        a.pageY = a.clientY;
        a.preventDefault = function() {
          a.returnValue = !1;
        };
        a.stopPropagation = function() {
          a.cancelBubble = !0;
        };
        a.target = a.target || a.srcElement;
        return b.call(d, a);
      });
    });
  }
  var d = this;
  a = a.split(" ");
  for (var e = 0;e < a.length;e++) {
    c(a[e]);
  }
  return this;
}, bind:function(a, b) {
  return this.on(a, b);
}, click:function(a) {
  return a ? this.on("click", a) : Fa(this, "click");
}, scrollLeft:function(a) {
  if (1 === arguments.length) {
    for (var b = 0;b < this.length;b++) {
      this[b].scrollLeft = a;
    }
    return this;
  }
  return this[0].scrollLeft;
}, scrollTop:function(a) {
  if (1 === arguments.length) {
    for (var b = 0;b < this.length;b++) {
      this[b].scrollTop = a;
    }
    return this;
  }
  return this[0].scrollTop;
}};
function ca(a) {
  for (var b = 0;b < a.length;b++) {
    a[b].style.display = "block";
  }
}
function Ga(a) {
  var b = p(window);
  if (a) {
    b.on("resize", a);
  } else {
    Fa(b, "resize");
  }
}
function Ha(a, b) {
  a.on("change", b);
}
function Ia(a, b) {
  a.on("mouseout", b);
}
function Ja(a, b) {
  a.on("mouseover", b);
}
function Ka(a, b) {
  a.on("dblclick", b);
}
function La(a, b) {
  a.on("mousemove", b);
}
function Ma(a, b) {
  a.on("mouseup", b);
}
function Na(a, b) {
  a.on("mousedown", b);
}
function Oa(a, b) {
  a.on("keydown", b);
}
function Pa() {
  var a = p("<input>").Ja("type", "button");
  a[0].value = "OK";
  return a;
}
function Qa(a, b) {
  if (b && "string" === typeof b) {
    for (var c = (b || "").split(ua), d = 0, e = a.length;d < e;d++) {
      var f = a[d];
      if (1 === f.nodeType) {
        if (f.className) {
          for (var g = " " + f.className + " ", h = f.className, l = 0, k = c.length;l < k;l++) {
            0 > g.indexOf(" " + c[l] + " ") && (h += " " + c[l]);
          }
          f.className = ta.ba(h);
        } else {
          f.className = b;
        }
      }
    }
  }
  return a;
}
function Ra(a) {
  for (var b = 0;b < a.length;b++) {
    a[b].removeAttribute("id");
  }
  return a;
}
function Sa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c].innerHTML = b;
  }
  return a;
}
function Fa(a, b) {
  a.mb(function(a, d) {
    var e;
    sa("Trigger " + b);
    if (document.createEventObject) {
      if (e = document.createEventObject(), "resize" === b) {
        sa("Calling stored window resize functions");
        for (var f = 0;f < Aa.length;f++) {
          Aa[f](e);
        }
      } else {
        d.fireEvent("on" + b, e);
      }
    } else {
      e = document.createEvent("HTMLEvents"), e.initEvent(b, !0, !0), d.dispatchEvent(e);
    }
  });
}
function ba(a, b) {
  b = Da(b);
  0 < a.length && 0 < b.length && b[0].parentNode.insertBefore(a[0], b[0]);
}
function Ta(a, b) {
  b = Da(b);
  0 < a.length && 0 < b.length && a[0].parentNode.insertBefore(b[0], a[0]);
}
function Ea(a, b) {
  for (var c = [], d = a.length - 1;0 <= d;d--) {
    c.push(a[d]);
  }
  for (;c.length;) {
    for (d = c.pop(), b(d), d = d.lastChild;d;) {
      c.push(d), d = d.previousSibling;
    }
  }
}
ta = function(a) {
  return Da(a);
};
ta.ba = function(a) {
  return null === a ? "" : a.toString().replace(va, "").replace(wa, "");
};
ta.aa = function(a) {
  var b = a.url || "", c = a.type || "GET", d = a.Lf || function() {
  }, e = a.error || function() {
  }, f = a.data || "";
  a = a.Se || function() {
  };
  var g = "", h;
  try {
    h = new XMLHttpRequest;
  } catch (k) {
    try {
      h = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (n) {
      try {
        h = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (q) {
        e(null, "", null);
      }
    }
  }
  if ("object" === typeof f) {
    for (var l in f) {
      Object.hasOwnProperty.call(f, l) && (g.length && (g += "&"), g += encodeURIComponent(l), g += "=", g += encodeURIComponent(f[l]));
    }
  }
  "GET" === c && (b += "?" + g, g = "");
  a(h, h);
  h.open(c, b, !0);
  h.onreadystatechange = function() {
    if (4 === h.readyState) {
      if (200 === h.status) {
        var a = h.responseText, b = h.getResponseHeader("content-type");
        if (b && 0 === b.indexOf("application/json")) {
          try {
            a = ta.ia(a);
          } catch (c) {
          }
        }
        d(a, "", h);
      } else {
        e(h, "", null);
      }
    }
  };
  "POST" === c && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  h.send(g);
};
xa = function(a, b, c) {
  var d = [], e = b.split(/\s+/);
  for (b = 0;b < e.length;b++) {
    var f = e[b].replace(/([\/\\\^$*+?.()|\[\]{}])/g, "\\$1");
    d.push(new RegExp("(^|\\s)" + f + "(\\s|$)"));
  }
  e = a.getElementsByTagName(c || "*");
  f = [];
  b = 0;
  for (c = e.length;b < c;b++) {
    var g = e[b], h = !0;
    for (a = 0;a < d.length;a++) {
      if (!d[a].test(g.className)) {
        h = !1;
        break;
      }
    }
    h && f.push(g);
  }
  return f;
};
ta.ia = function(a) {
  return window.JSON ? window.JSON.parse(a) : eval("(" + a + ")");
};
ta.$ = function(a) {
  for (var b = arguments[0], c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    for (e in d) {
      d.hasOwnProperty(e) && (b[e] = d[e]);
    }
  }
  return b;
};
ta.cc = ra.prototype;
var p = ta;
A("Cookies");
function Ua(a) {
  this.$ = a;
}
Ua.prototype = {Ya:function(a) {
  this.$.Ya(a);
}, flush:function() {
  this.$.flush();
}, Xc:function() {
  return this.$.Xc();
}};
function Va() {
  this.data = "";
}
Va.prototype = {log:A("BYTESTREAM"), Xc:function() {
  return this;
}, Ya:function(a) {
  if (255 < a || 0 > a) {
    throw "Bad data written to byte buffer";
  }
  this.data += String.fromCharCode(a);
}, flush:function() {
}, toString:function() {
  return this.data;
}, Hb:function() {
  for (var a = [], b = 0;b < this.data.length;b++) {
    a.push(this.data.charCodeAt(b));
  }
  return a;
}};
var Wa = {};
function Xa() {
  var a, b = new Va;
  a = ["LZWEncoder", "Ascii85Encoder"];
  a.reverse();
  for (var c = 0;c < a.length;c++) {
    b = new Wa[a[c]](b);
  }
  return b;
}
;function Ya(a) {
  this.$ = a;
  this.aa = [];
}
Ya.prototype = {Ya:function(a) {
  4 === this.aa.length && Za(this);
  this.aa.push(a);
}, flush:function() {
  0 < this.aa.length && Za(this);
  for (var a = this.$, b = 0;2 > b;b++) {
    a.Ya("~>".charCodeAt(b));
  }
  this.$.flush();
}};
function Za(a) {
  var b, c, d, e, f, g, h, l;
  b = a.aa[0];
  c = a.aa[1];
  d = a.aa[2];
  e = a.aa[3];
  f = (b << 24 | c << 16 | d << 8 | e) >>> 0;
  b = (f / 52200625 | 0) % 85 + 33;
  g = (f / 614125 | 0) % 85 + 33;
  h = (f / 7225 | 0) % 85 + 33;
  l = (f / 85 | 0) % 85 + 33;
  f = f % 85 + 33;
  (118 < b || 118 < g || 118 < h || 118 < l || 118 < f) && console.log(b, g, h, l, f);
  (33 > b || 33 > g || 33 > h || 33 > l || 33 > f) && console.log(b, g, h, l, f);
  a.$.Ya(b);
  a.$.Ya(g);
  isNaN(c) || (a.$.Ya(h), isNaN(d) || (a.$.Ya(l), isNaN(e) || a.$.Ya(f)));
  a.aa.length = 0;
}
Ya.prototype = p.$({}, Ua.prototype, Ya.prototype);
Wa.Ascii85Encoder = Ya;
function $a(a) {
  this.$ = a;
  this.aa = this.ba = 0;
  this.ia = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8193];
}
$a.prototype = {log:A("BITWRITER"), Ya:function(a) {
  ab(this, a, 8);
}, flush:function() {
  this.aa && (this.$.Ya(this.ba << 8 - this.aa), this.ba = this.aa = 0);
  this.$.flush();
}};
function ab(a, b, c) {
  a.ba = a.ba << c | b & a.ia[c];
  for (a.aa += c;8 <= a.aa;) {
    a.$.Ya(a.ba >>> a.aa - 8 & 255), a.aa -= 8, a.ba &= a.ia[a.aa];
  }
}
Wa.BitWriter = $a;
$a.prototype = p.$({}, Ua.prototype, $a.prototype);
function bb(a) {
  this.$ = new $a(a);
  this.ia = 258;
  this.aa = 0;
  this.oa = !0;
  this.la = [];
  this.Ca = [];
  this.sa = [];
  this.ba = 9;
  cb(this);
}
bb.prototype = {log:A("LZWEncoder"), Ya:function(a) {
  var b;
  if (this.oa) {
    this.aa = a, this.oa = !1;
  } else {
    a: {
      b = this.aa;
      var c, d;
      c = a << 4 ^ b;
      for (d = 0 === c ? 1 : 18041 - c;;) {
        if (void 0 === this.la[c] || this.Ca[c] === b && this.sa[c] === a) {
          b = c;
          break a;
        }
        c -= d;
        0 > c && (c += 18041);
      }
    }
    void 0 !== this.la[b] ? this.aa = this.la[b] : (ab(this.$, this.aa, this.ba), this.la[b] = this.ia, this.Ca[b] = this.aa, this.aa = this.sa[b] = a, 4095 > this.ia ? (this.ia += 1, this.ba = Math.ceil(Math.log(this.ia) / Math.log(2))) : cb(this));
  }
}, flush:function() {
  this.oa || (ab(this.$, this.aa, this.ba), ab(this.$, 257, this.ba));
}};
function cb(a) {
  ab(a.$, 256, a.ba);
  a.ia = 258;
  a.ba = 9;
  a.la.length = 0;
  a.Ca.length = 0;
  a.sa.length = 0;
}
Wa.LZWEncoder = bb;
bb.prototype = p.$({}, Ua.prototype, bb.prototype);
(function(a) {
  this.algorithm = a.algorithm || "wrap";
  this.$ = a.gravity || "down";
  this.aa = !1 !== a.resize;
  "down" === this.$ ? (this.offsetWidth = "offsetWidth", this.offsetHeight = "offsetHeight", this.width = "width", this.height = "height", this.top = "top", this.left = "left", this.clientWidth = "clientWidth", this.clientHeight = "clientHeight") : "up" === this.$ ? (this.offsetWidth = "offsetWidth", this.offsetHeight = "offsetHeight", this.width = "width", this.height = "height", this.top = "bottom", this.left = "left", this.clientWidth = "clientWidth", this.clientHeight = "clientHeight") : (this.offsetWidth = 
  "offsetHeight", this.offsetHeight = "offsetWidth", this.width = "height", this.height = "width", this.top = "left", this.left = "top", this.clientWidth = "clientHeight", this.clientHeight = "clientWidth");
}).prototype = {log:A("Layout")};
function db(a) {
  this.$ = "en";
  "string" === typeof a && (a = eb(this, a, {}));
  this.data = a;
}
db.prototype = {log:A("LANGUAGE"), cc:function() {
  var a = this;
  return function(b, c) {
    return fb(a, arguments);
  };
}, get:function(a, b) {
  return fb(this, arguments);
}};
function fb(a, b) {
  var c = b[0], d = "<not translated:" + c + ">";
  a.$ in a.data && c in a.data[a.$] && (d = a.data[a.$][c]);
  for (c = 1;c < b.length;c++) {
    d = d.replace("^" + c, b[c]);
  }
  return d;
}
function eb(a, b, c) {
  b = b.split("\n");
  for (var d = /^([ \t]*)([^:]+):([^:]+):(.*)/, e = 0;e < b.length;e++) {
    var f = d.exec(b[e]);
    if (f) {
      var g = f[2], h = f[3], f = f[4];
      g in c || (c[g] = {});
      h in c[g] && a.log("Warning: Replacing %s:%s", g, h);
      c[g][h] = f;
    }
  }
  return c;
}
function gb(a, b) {
  b = b.split(",");
  a.log("Choice of languages: %s", b);
  for (var c = 0;c < b.length;c++) {
    var d = b[c].split("-")[0];
    if (d in a.data) {
      a.log("Using language code %s", d);
      a.$ = d;
      break;
    } else {
      a.log("No language for code %s", d);
    }
  }
}
;function hb(a, b, c, d, e) {
  this.view = a;
  this.node = b;
  this.$ = c;
  this.aa = b.Qd(c);
  this.La(d, e);
}
hb.prototype = {log:A("MoveEditNode"), Bb:function() {
  this.log("Entering MoveEditNode");
}, Gb:function() {
  this.log("Leaving MoveEditNode");
}, Va:function(a) {
  "touchmove" === a.type ? (a = a.touches[0], a = D(this.view, a.pageX, a.pageY), this.Na(a.x, a.y)) : "touchend" === a.type && (a = a.changedTouches[0], a = D(this.view, a.pageX, a.pageY), this.Oa(a.x, a.y));
}, La:function(a, b) {
  this.log("onMouseDown(%s,%s)", a, b);
  this.ba = a;
  this.ia = b;
}, Na:function(a, b) {
  var c = this.view.Ra(new F(a, b));
  a = c.x;
  b = c.y;
  this.node.wc(this.$, a, b);
  this.node.format(this.view.ma, this.view.request);
  this.view.na();
}, Oa:function(a, b) {
  this.log("onMouseUp(%s,%s)", a, b);
  var c = this.view.Ra(new F(a, b));
  a = c.x;
  b = c.y;
  a === this.ba && b === this.ia || this.view.ya([new ib(this.node.id, this.$, this.aa.x, this.aa.y, a, b)]);
  this.view.na();
  G(this.view, new jb(this.view));
}};
function kb(a, b) {
  this.view = a;
  this.state = "none";
  this.Ga = document.createElement("img");
  this.url = this.Ga.src = b;
}
kb.prototype = {log:A("ImageStamp"), Bb:function() {
  this.log("Entering ImageStampBehaviour");
  this.view.canvas.style.cursor = "move";
}, Gb:function() {
  this.log("Leaving ImageStampBehaviour");
  this.view.na();
}, Va:function(a) {
  var b;
  "touchstart" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.La(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Na(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Oa(b.x, b.y, a));
}, Ra:function(a, b) {
  this.Ga.complete && (a -= this.Ga.width / 2, b -= this.Ga.height / 2);
  return this.view.Ra(new F(a, b));
}, La:function(a, b, c) {
  this.log("onMouseDown type %s", c.type);
  a = this.Ra(a, b);
  this.view.ya([new H("ImageNode", {url:this.url, layer:this.view.Ia, matrix:new I(a.x, a.y)})]);
  this.view.ea.get("autoPickTool") && J(this.view);
}, Na:function(a, b) {
  this.Ga.complete || this.log("Don't draw; image not loaded.");
  var c = this.Ra(a, b), d = this;
  this.view.na(function(a) {
    var b = a.globalAlpha;
    a.globalAlpha = .5;
    a.drawImage(d.Ga, c.x, c.y);
    a.globalAlpha = b;
  });
}, Oa:function() {
}, pb:function(a) {
  "cancel" === a && (J(this.view), this.view.nb.emit("goto-toolbar"));
}};
function lb(a) {
  this.view = a;
  this.state = "none";
}
lb.prototype = {log:A("PanTool"), Bb:function() {
  this.log("Entering PanToolBehaviour");
  this.view.canvas.style.cursor = "move";
}, Gb:function() {
  this.log("Leaving PanToolBehaviour");
}, Va:function(a) {
  var b;
  "touchstart" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.La(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Na(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Oa(b.x, b.y, a));
}, La:function(a, b, c) {
  this.log("onMouseDown type %s", c.type);
  this.state = "dragging";
  this.start = mb(c);
  this.$ = this.view.Ha;
  this.aa = this.view.Fa;
}, Na:function(a, b, c) {
  "dragging" === this.state && (a = mb(c), b = this.aa + a.y - this.start.y, this.view.Ha = this.$ + a.x - this.start.x, this.view.Fa = b, nb(this.view), this.view.na());
}, Oa:function() {
  this.state = "none";
}, Bd:function(a, b, c) {
  if (!this.view.ea.get("allowZoom")) {
    return this.log("Zooming is disabled."), !1;
  }
  this.log("onMouseWheel(%s, %s, %s)", a, b, c);
  0 < c ? this.view.Sc() : this.view.Tc();
}, pb:function(a) {
  "cancel" === a && J(this.view);
}};
function mb(a) {
  return "changedTouches" in a ? new F(a.changedTouches[0].pageX, a.changedTouches[0].pageY) : new F(a.pageX, a.pageY);
}
;function ob() {
  this.$ = [];
  this.next = 0;
  this.ac = !1;
}
ob.prototype = {log:A("UNDOSTACK"), ya:function(a, b, c) {
  "object" === typeof a && "[object Array]" === Object.prototype.toString.apply(a) || (a = [a]);
  this.next < this.$.length && (this.$.length = this.next);
  if (!b) {
    for (var d = [], e = 2;e < arguments.length;e++) {
      d.push(arguments[e]);
    }
    for (e = 0;e < a.length;e++) {
      a[e].ob.apply(a[e], d);
    }
  }
  for (d = this.top();d;) {
    if (d[d.length - 1].Vd(a[0])) {
      if (a.shift(), 0 === a.length) {
        break;
      }
    } else {
      break;
    }
  }
  a.length && this.$.push(a);
  this.ac = !0;
  this.next = this.$.length;
}, Sa:function(a) {
  this.log("Undo index %s of %s", this.next, this.$.length);
  if (this.Zb()) {
    for (var b = this.$[--this.next], c = b.length - 1;0 <= c;c--) {
      b[c].Sa.apply(b[c], arguments);
    }
    this.ac = !0;
  }
}, Pb:function(a) {
  this.log("Redo index %s of %s", this.next, this.$.length);
  if (this.Yb()) {
    for (var b = this.$[this.next++], c = 0;c < b.length;c++) {
      b[c].ob.apply(b[c], arguments);
    }
    this.ac = !0;
  }
}, Zb:function() {
  return 0 < this.next;
}, Yb:function() {
  return this.next < this.$.length;
}, top:function() {
  return this.$.length ? this.$[this.$.length - 1] : 0;
}};
function pb() {
}
pb.prototype = {ob:function() {
}, Sa:function() {
}, Vd:function() {
  return !1;
}};
function qb(a, b) {
  this.ka = b;
  this.Kf = !0;
}
qb.prototype = {na:function(a) {
  a.moveTo(this.ka.x, this.ka.y);
}, rc:function() {
  return null;
}, Sb:function() {
  return {x:1, y:0};
}};
function rb(a, b, c, d, e) {
  this.ka = b;
  this.xa = a;
  this.pf = !0;
  this.ba = e;
  this.sa = d;
  c.next();
  this.la = c.next();
  this.oa = c.next();
  this.moveTo = this.gc = null;
  this.format();
}
rb.prototype = {log:A("LINE"), format:function() {
  var a = sb(this.xa.ka.x, this.xa.ka.y, this.ka.x, this.ka.y);
  this.ia = this.length = a;
  var b = this.xa.ka.clone();
  if (this.xa.pf && this.ba) {
    this.ba = Math.min(this.ba, a / 2, this.xa.length / 2);
    a = K(this.xa.ka.x, this.xa.ka.y, this.ka.x, this.ka.y);
    b.x += a.x * this.ba;
    b.y += a.y * this.ba;
    var a = this.xa, c = this.ba, d = K(a.aa.x, a.aa.y, a.ka.x, a.ka.y), e = a.ka.clone();
    e.x -= d.x * c;
    e.y -= d.y * c;
    a.gc = e;
    a.ia -= c;
    c = a.ia / 10 * a.sa;
    10 < c && (c = 10);
    var d = a.aa.x, f = a.aa.y, g = e.x, h = e.y, d = d + c, f = f + c;
    a.$ = new F(d + a.la * (g + c - d), f + a.la * (h + c - f));
    d = a.aa.x - c;
    g = e.x - c;
    f = a.aa.y - c;
    h = e.y - c;
    a.Qa = new F(d + a.oa * (g - d), f + a.oa * (h - f));
    this.ia -= this.ba;
  }
  this.aa = b;
  null === this.gc && (this.gc = this.ka);
  a = this.ia / 10 * this.sa;
  10 < a && (a = 10);
  e = b.x;
  c = b.y;
  d = this.ka.x;
  f = this.ka.y;
  e += a;
  c += a;
  this.$ = new F(e + this.la * (d + a - e), c + this.la * (f + a - c));
  e = b.x - a;
  d = this.ka.x - a;
  c = b.y - a;
  f = this.ka.y - a;
  this.Qa = new F(e + this.oa * (d - e), c + this.oa * (f - c));
}, dd:function(a) {
  this.xa = a;
  this.format();
  this.xa.gc && (this.moveTo = this.xa.gc);
}, na:function(a) {
  this.ba && (this.moveTo && a.moveTo(this.moveTo.x, this.moveTo.y), a.quadraticCurveTo(this.xa.ka.x, this.xa.ka.y, this.aa.x, this.aa.y));
  a.bezierCurveTo(this.$.x, this.$.y, this.Qa.x, this.Qa.y, this.gc.x, this.gc.y);
}, rc:function() {
  return this.xa ? K(this.xa.ka.x, this.xa.ka.y, this.$.x, this.$.y) : null;
}, Sb:function() {
  return K(this.Qa.x, this.Qa.y, this.ka.x, this.ka.y);
}};
function tb(a, b, c) {
  this.ka = b;
  this.xa = a;
  this.aa = c;
  var d = sb(a.ka.x, a.ka.y, b.x, b.y);
  d || (d = 1);
  var e = (b.x - a.ka.x) / d, f = (b.y - a.ka.y) / d;
  this.Qa = new F(b.x - d * c * e, b.y - d * c * f);
  if (b = a.Qa) {
    var g = K(a.xa.ka.x, a.xa.ka.y, a.ka.x, a.ka.y), h = sb(a.xa.ka.x, a.xa.ka.y, a.ka.x, a.ka.y), e = .5 * (e + g.x), f = .5 * (f + g.y);
    b.x = a.ka.x - h * c * e;
    b.y = a.ka.y - h * c * f;
  }
  this.$ = new F(a.ka.x + d * c * e, a.ka.y + d * c * f);
  this.length = d;
}
tb.prototype = {dd:function(a) {
  this.xa = a;
  var b = a.Qa, c = (this.ka.x - a.ka.x) / this.length, d = (this.ka.y - a.ka.y) / this.length, e = this.aa;
  if (b) {
    var f = K(a.xa.ka.x, a.xa.ka.y, a.ka.x, a.ka.y), g = sb(a.xa.ka.x, a.xa.ka.y, a.ka.x, a.ka.y), c = .5 * (c + f.x), d = .5 * (d + f.y);
    b.x = a.ka.x - g * e * c;
    b.y = a.ka.y - g * e * d;
  }
  this.$ = new F(a.ka.x + this.length * e * c, a.ka.y + this.length * e * d);
}, na:function(a) {
  a.bezierCurveTo(this.$.x, this.$.y, this.Qa.x, this.Qa.y, this.ka.x, this.ka.y);
}, rc:function() {
  return this.xa ? K(this.xa.ka.x, this.xa.ka.y, this.$.x, this.$.y) : null;
}, Sb:function() {
  return 0 < this.aa ? K(this.Qa.x, this.Qa.y, this.ka.x, this.ka.y) : K(this.xa.ka.x, this.xa.ka.y, this.ka.x, this.ka.y);
}};
function ub(a, b, c) {
  this.control = b;
  this.ka = c;
}
ub.prototype = {na:function(a) {
  a.quadraticCurveTo(this.control.x, this.control.y, this.ka.x, this.ka.y);
}, rc:function() {
  return this.xa ? K(this.xa.ka.x, this.xa.ka.y, this.control.x, this.control.y) : null;
}, Sb:function() {
  return K(this.control.x, this.control.y, this.ka.x, this.ka.y);
}};
function vb(a, b, c, d) {
  this.control = b;
  this.ka = c;
  this.Tb = d;
}
vb.prototype = {na:function(a) {
  a.arcTo(this.control.x, this.control.y, this.ka.x, this.ka.y, this.Tb);
}};
function wb(a, b, c, d) {
  this.$ = b;
  this.Qa = c;
  this.ka = d;
  this.xa = a;
}
wb.prototype = {na:function(a) {
  a.bezierCurveTo(this.$.x, this.$.y, this.Qa.x, this.Qa.y, this.ka.x, this.ka.y);
}, rc:function() {
  return this.xa ? K(this.xa.ka.x, this.xa.ka.y, this.$.x, this.$.y) : null;
}, Sb:function() {
  return K(this.Qa.x, this.Qa.y, this.ka.x, this.ka.y);
}};
function xb(a, b, c, d, e) {
  this.xa = a;
  this.aa = b;
  e = 2 * e;
  var f = 2 * d.next() - 1;
  d.next();
  d = this.xa.Sb();
  if (!this.xa.Kf && d) {
    var g = sb(a.ka.x, a.ka.y, b.x, b.y);
    this.$ = new F(a.ka.x + .5522847498 * d.x * g, a.ka.y + .5522847498 * d.y * g);
  } else {
    this.$ = new F(a.ka.x + .5522847498 * (b.x - a.ka.x), a.ka.y + .5522847498 * (b.y - a.ka.y));
  }
  this.Qa = new F(c.x - .5522847498 * (c.x - b.x) * (1 - f * e), c.y - .5522847498 * (c.y - b.y) * (1 - f * e));
  this.ka = c;
}
xb.prototype = {log:A("SEGMENT"), dd:function(a) {
  this.xa = a;
  var b = this.xa.Sb();
  if (b) {
    var c = sb(a.ka.x, a.ka.y, this.aa.x, this.aa.y);
    this.$ = new F(a.ka.x + .5522847498 * b.x * c, a.ka.y + .5522847498 * b.y * c);
  } else {
    this.$ = new F(a.ka.x + .5522847498 * (this.aa.x - this.xa.ka.x), a.ka.y + .5522847498 * (this.aa.y - this.xa.ka.y));
  }
}, na:function(a) {
  a.bezierCurveTo(this.$.x, this.$.y, this.Qa.x, this.Qa.y, this.ka.x, this.ka.y);
}, rc:function() {
  return this.xa ? K(this.xa.ka.x, this.xa.ka.y, this.$.x, this.$.y) : null;
}, Sb:function() {
  return K(this.Qa.x, this.Qa.y, this.ka.x, this.ka.y);
}};
function zb(a) {
  this.aa = a;
  this.Tb = 30;
  this.$ = [];
}
zb.prototype = {log:A("AngleAddon"), format:function() {
  var a = this.aa.ba, b = 0, c = [], d = [];
  this.$.length = 0;
  for (var e = 0 > Ab(a);b < a.ga.length;) {
    switch(a.ga[b]) {
      case Bb:
        c = [new F(a.ga[b + 1], a.ga[b + 2])];
        d = c.concat();
        break;
      case Cb:
        3 === c.length && c.shift();
        c.push(new F(a.ga[b + 1], a.ga[b + 2]));
        d.push(c[c.length - 1]);
        3 === c.length && Db(this, c[0], c[1], c[2], e);
        break;
      case Eb:
        3 <= d.length && Db(this, d[d.length - 2], d[0], d[1], e);
    }
    b += Fb[a.ga[b]];
  }
}, na:function(a) {
  a.beginPath();
  var b, c;
  for (c = 0;c < this.$.length;c++) {
    b = this.$[c], a.moveTo(b.x + this.Tb * Math.cos(b.pc), b.y + this.Tb * Math.sin(b.pc)), a.arc(b.x, b.y, this.Tb, b.pc, b.Vc, !1);
  }
  a.lineWidth = 3;
  a.strokeStyle = "red";
  a.stroke();
  a.fillStyle = "red";
  a.font = "20px Arial";
  for (c = 0;c < this.$.length;c++) {
    b = this.$[c];
    var d = (b.pc + b.Vc) / 2 + Math.PI;
    0 < b.pc && 0 > b.Vc && (d -= Math.PI);
    var e = b.Vc - b.pc;
    0 > e && (e += 2 * Math.PI);
    a.fillText("" + Math.round(e / Math.PI * 180) + "\u00b0", b.x + this.Tb * Math.cos(d), b.y + this.Tb * Math.sin(d));
  }
}};
function Db(a, b, c, d, e) {
  var f;
  b = K(c.x, c.y, b.x, b.y);
  f = K(c.x, c.y, d.x, d.y);
  d = Math.atan2(b.y, b.x);
  b = Math.atan2(f.y, f.x);
  e && (e = d, d = b, b = e);
  a.$.push({x:c.x, y:c.y, pc:b, Vc:d});
}
;var L = [], Gb = null, Hb = A("ImageLoader");
function Ib() {
  var a = [];
  Hb("Timeout running... %s images remaining", L.length);
  for (var b = 0;b < L.length;b++) {
    L[b].complete ? L[b].cc(L[b], L[b].Mc) : 5E3 > L[b].ed ? (L[b].ed += 250, a.push(L[b])) : L[b].cc(L[b], L[b].Mc);
  }
  L = a;
  L.length ? setTimeout(Ib, 250) : (Hb("Timeout Stopped"), Gb = !1);
}
function Jb(a, b) {
  function c() {
    Hb("LoadFn called. complete=%s", d.complete);
    if (d.complete) {
      for (var a = 0;a < L.length;a++) {
        if (L[a] === d) {
          L.splice(a, 1);
          b(d, d.Mc);
          break;
        }
      }
    } else {
      Gb || (Gb = !0, setTimeout(Ib, 250), d.ed = 250);
    }
  }
  var d = document.createElement("img");
  L.push(d);
  d.cc = b;
  d.Mc = a;
  d.ed = 0;
  -1 === a.indexOf("://" + window.location.host) && (Hb("Using cross origin request for img"), d.crossOrigin = "");
  d.addEventListener ? (d.addEventListener("load", function() {
    c();
  }, !1), d.addEventListener("error", function() {
    Hb("Error loading %s", a);
    b(null, d.Mc);
  }, !1)) : (d.attachEvent("onload", function() {
    c();
  }), d.attachEvent("onerror", function() {
    Hb("Error loading %s", a);
    b(null, d.Mc);
  }));
  d.src = a;
}
;function Kb() {
}
Kb.prototype = {log:A("MJAX")};
function Lb(a, b, c) {
  var d, e;
  d = window.MathJax.Hub.queue;
  e = Sa(p("<div>"), b);
  e.da("position", "absolute");
  e.da("z-index", "10000");
  e.da("background", "#cccccc");
  e.da("display", "block");
  p(document.body).append(e);
  d.Push(["Typeset", window.MathJax.Hub, e[0]]);
  d.Push(function() {
    var b, d, h, l, k, n, q, r, t, w, v, x, C;
    d = e.find("svg");
    if (0 === d.length) {
      a.log("Failed to render MJax -- no SVG found"), e.da("display", "none"), c && c(null);
    } else {
      l = d[0].getBoundingClientRect();
      t = 2 * l.width;
      l = 2 * l.height;
      r = d.find("use");
      x = 0;
      for (C = r.length;x < C;x++) {
        b = r[x], b = p(b), k = b.Ja("href"), w = b.Ja("x") || 0, v = b.Ja("y") || 0, h = b.Ja("transform") || "", a.log("USE HREF=%s x=%s y=%s... cloning", k, w, v), k = Ra(p(k).clone()), h = "" !== h ? h + (",translate(" + w + "," + v + ")") : "translate(" + w + "," + v + ")", k.Ja("transform", h), b.length && b[0].parentNode.replaceChild(k[0], b[0]);
      }
      h = document.createElement("svg");
      v = d[0].childNodes;
      r = 0;
      for (w = v.length;r < w;r++) {
        b = v[r], h.appendChild(b.cloneNode(!0));
      }
      d.Ja("id", "hello");
      d = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" ' + ('viewBox="' + d[0].getAttribute("viewBox") + '" ');
      d = d + ('width="' + t + '" ') + ('height="' + l + '" ');
      d += ">";
      d += h.innerHTML;
      d += "</svg>";
      e.remove();
      d = "data:image/svg+xml," + encodeURIComponent(d);
      q = new Image;
      q.src = d;
      q = p(q);
      q.da("position", "absolute");
      q.da("z-index", "10000");
      q.da("top", "100px");
      q.da("width", "" + t + "px");
      q.da("height", "" + l + "px");
      q.da("visibility", "hidden");
      p(document.body).append(q);
      a.log("img loaded: %s", q[0].complete);
      n = setInterval(function() {
        a.log("img loaded: %s", q[0].complete);
        if (q[0].complete && (clearInterval(n), c)) {
          return c(q[0]);
        }
      }, 100);
    }
  });
}
function Mb(a, b) {
  var c, d;
  d = p("<script>").Ja("type", "text/x-mathjax-config");
  d.text("MathJax.Hub.Config({\n   extensions: [\"mml2jax.js\"],\n   mml2jax: { \n   },\n   jax: ['input/MathML', 'output/SVG']\n});");
  p(document.body).append(d);
  d = p("<script>").Ja("type", "text/javascript");
  d.Ja("src", "http://cdn.mathjax.org/mathjax/latest/MathJax.js?delayStartupUntil=loaded");
  p(document.body).append(d);
  a.log("Loading mathjax");
  c = setInterval(function() {
    if ("MathJax" in window) {
      return a.log("MathJax finished loading."), clearInterval(c), window.MathJax.Hub.Startup.onload(), b && b(), MathJax.Hub.Startup.signal.Interest(function(b) {
        return a.log("%s", b);
      });
    }
  }, 500);
}
;function M() {
  this.Ua = !1;
  this.aa = {};
}
M.prototype = {log:A("EventEmitter"), emit:function(a, b) {
  var c, d = this;
  this.aa || (this.aa = {});
  c = Array.prototype.slice.call(arguments, 1);
  setTimeout(function() {
    var b, f, g, h, l = !1;
    if (a in d.aa) {
      for (h = d.aa[a], f = 0, g = h.length;f < g;f++) {
        b = h[f], d.Ua || l || (d.log("Emit %s", a), l = !0), b.apply(null, c);
      }
    }
  }, 0);
  return this;
}, wd:function(a, b) {
  var c;
  this.aa || (this.aa = {});
  c = Array.prototype.slice.call(arguments, 1);
  var d, e, f, g, h = !1;
  if (a in this.aa) {
    for (g = this.aa[a], e = 0, f = g.length;e < f;e++) {
      d = g[e], this.Ua || h || (this.log("Emit %s", a), h = !0), d.apply(null, c);
    }
  }
  return this;
}, on:function(a, b) {
  this.aa || (this.aa = {});
  this.bind(a, b);
  return this;
}, bind:function(a, b) {
  a in this.aa ? this.aa[a].push(b) : this.aa[a] = [b];
  return b;
}};
function Nb(a, b) {
  function c() {
    var d = c, e, f, g, h;
    if ("done" in a.aa) {
      for (e = a.aa.done, f = g = 0, h = e.length - 1;g <= h;f = g += 1) {
        if (e[f] === d) {
          e.splice(f, 1);
          break;
        }
      }
    }
    b.apply(null, arguments);
  }
  a.bind("done", c);
}
;function Ob(a) {
  M.call(this);
  this.ha = a;
  this.oa = !1;
  a.da("display", "none");
  this.right = !0;
  a: {
    a = (document.body || document.documentElement).style;
    for (var b = "transition", c = ["Moz", "Webkit", "Khtml", "O", "ms"], b = b.charAt(0).toUpperCase() + b.substr(1), d = 0;d < c.length;d++) {
      if ("string" === typeof a[c[d] + b]) {
        Pb = c[d];
        a = !0;
        break a;
      }
    }
    a = !1;
  }
  this.ia = a;
  this.sa = Pb;
  this.$ = null;
  this.ia && (a = this.ha.outerWidth(), this.da("TransitionProperty", "transform"), this.da("Transform", "translate(" + a + "px,0)"));
  this.la = p(".body");
}
var Pb;
Ob.prototype = {log:A("SlidingPanel", !1), show:function(a, b) {
  var c = this;
  this.$ && (clearTimeout(this.$), this.$ = null);
  !1 !== b && (b = !0);
  this.oa = !0;
  this.ha.show();
  var d = this.ha.outerWidth();
  this.ha.Ma();
  "right" === a ? (this.left = !1, this.ha.da("left", "" + (p(window).width() - d) + "px")) : this.left = !0;
  b && (c.ba = new aa, c.ba.$ = c.ha.da("z-index"), c.ba.insertBefore = c.ha, c.ba.show(function() {
    c.Ma();
  }));
  c.ia ? (this.log("Performing transition"), c.ha.da("display", "block"), c.left ? c.da("Transform", "translate(-" + d + "px,0)") : c.da("Transform", "translate(" + d + "px,0)"), c.da("TransitionDuration", "200ms"), c.da("TransitionDuration", "200ms", c.la), window.setTimeout(function() {
    c.da("Transform", "translate(0,0)");
    c.da("Transform", "translate(" + (c.left ? d : -d) + "px,0)", c.la);
    window.setTimeout(function() {
      Qb(c);
    }, 200);
  }, 1)) : (this.log("No transitions allowed"), c.ha.da("display", "block"), Qb(c));
}, da:function(a, b, c) {
  c = c || this.ha;
  a = "" !== this.sa ? this.sa + a : a.charAt(0).toLowerCase() + a.substr(1);
  c[0].style[a] = b;
  this.log("%s=%s", a, b);
}, bb:function() {
  return this.oa;
}, Ma:function() {
  var a = this;
  if (!this.$) {
    this.oa = !1;
    a.ba && a.ba.Ma();
    var b = this.ha.outerWidth();
    a.ia ? this.left ? a.da("Transform", "translate(-" + b + "px,0)") : a.da("Transform", "translate(" + b + "px,0)") : a.ha.da("display", "none");
    a.da("Transform", "translate(0,0)", this.la);
    a.ia ? this.$ = window.setTimeout(function() {
      a.ha.da("display", "none");
      a.emit("hide");
    }, 200) : a.emit("hide");
  }
}};
function Qb(a) {
  console.log("Set focus on ", a.ha.find(".focus"));
  a.ha.find(".focus").focus();
  a.emit("show");
}
Ob.prototype = p.$({}, M.prototype, Ob.prototype);
function Rb() {
  M.apply(this, arguments);
  this.ba = [];
  this.$ = !1;
  this.canvas = this.ia = null;
}
Rb.prototype = {log:A("FORMAT", !0), add:function(a, b, c, d, e) {
  var f, g, h, l;
  l = this.ba;
  g = 0;
  for (h = l.length;g < h;g++) {
    f = l[g], f.type === b && f.node === a && (f.Lc = !0);
  }
  this.log("Request URL %s", c);
  this.ba.push({node:a, type:b, url:c, uf:d, pd:e, Lc:!1});
  Sb(this);
}};
function Tb(a, b) {
  a.$ = !0;
  a.log("Processing request for item %s url=%s", b.node.id, b.url);
  0 === b.type.indexOf("image") ? Jb(b.url, function(c, d) {
    null !== c ? (a.log("Image request completed for item %s url %s", b.node.id, d), b.pd(c, d)) : a.log("Image request failed for url %s", d);
    a.$ = !1;
    b.Lc = !0;
    Sb(a);
  }) : 0 === b.type.indexOf("math") ? null === a.ia ? a.$ = !1 : Lb(a.ia, b.url, function(c) {
    a.log("MathJax request completed for item %s", b.node.id);
    b.pd(c, b.url);
    a.$ = !1;
    b.Lc = !0;
    Sb(a);
  }) : p.aa({url:b.url, data:b.uf, dataType:"json", success:function(c) {
    b.Lc || (a.log("Request completed for item %s", b.node.id), b.pd(c), a.emit("reformat", b.node), a.$ = !1, a.ba.shift(), Sb(a));
  }, error:function(b, d, e) {
    a.log("Error: %s %s", d, e);
    a.$ = !1;
    a.ba.shift();
    Sb(a);
  }});
}
function Sb(a) {
  for (var b = 0;!a.$ && b < a.ba.length;) {
    a.ba[b].Lc ? a.ba.shift() : (Tb(a, a.ba[0]), b += 1);
  }
  a.$ || a.emit("done");
}
Rb.prototype = p.$({}, M.prototype, Rb.prototype);
function Ub(a) {
  var b = this;
  this.xb = 0;
  "string" === typeof a ? (this.getUint8 = function() {
    u(b.xb < b.data.length);
    return b.data.charCodeAt(b.xb++) & 255;
  }, this.data = a) : this.data = new Uint8Array(a);
}
Ub.prototype = {log:A("BinaryReader"), seek:function(a) {
  u(0 <= a && a <= this.data.length);
  var b = this.xb;
  this.xb = a;
  return b;
}, getUint8:function() {
  u(this.xb < this.data.length);
  return this.data[this.xb++];
}, getUint16:function() {
  return (this.getUint8() << 8 | this.getUint8()) >>> 0;
}, getUint32:function() {
  return Vb(this) >>> 0;
}, getInt16:function() {
  var a = this.getUint16();
  a & 32768 && (a -= 65536);
  return a;
}, getDate:function() {
  var a = 1E3 * (4294967296 * this.getUint32() + this.getUint32()) + Date.UTC(1904, 1, 1);
  return new Date(a);
}};
function Wb(a, b) {
  for (var c = "", d = 0;d < b;d++) {
    c += String.fromCharCode(a.getUint8());
  }
  return c;
}
function Vb(a) {
  return a.getUint8() << 24 | a.getUint8() << 16 | a.getUint8() << 8 | a.getUint8();
}
function Xb(a) {
  this.format = 0;
  this.$ = [];
  for (var b = 0;256 > b;b++) {
    var c = a.getUint8();
    this.log("   Glyph[%s] = %s", b, c);
    this.$.push(c);
  }
}
Xb.prototype = {log:A("CMAP0"), map:function(a) {
  return 0 <= a && 255 >= a ? this.$[a] : 0;
}};
function Yb(a) {
  this.format = 4;
  var b, c = [], d = a.getUint16() / 2;
  a.getUint16();
  a.getUint16();
  a.getUint16();
  for (b = 0;b < d;b++) {
    c.push({Md:a.getUint16()});
  }
  a.getUint16();
  for (b = 0;b < d;b++) {
    c[b].Dd = a.getUint16();
  }
  for (b = 0;b < d;b++) {
    c[b].nf = a.getUint16();
  }
  for (b = 0;b < d;b++) {
    var e = a.getUint16();
    e ? c[b].$c = a.xb - 2 + e : c[b].$c = 0;
  }
  this.$ = c;
  this.aa = {};
  this.ba = a;
}
Yb.prototype = {log:A("CMAP4"), map:function(a) {
  if (!(a in this.aa)) {
    for (var b = 0;b < this.$.length;b++) {
      var c = this.$[b];
      if (c.Dd <= a && c.Md >= a) {
        var d, e;
        c.$c ? (e = c.$c + 2 * (a - c.Dd), this.ba.seek(e), d = this.ba.getUint16()) : d = c.nf + a & 65535;
        this.log("Charcode %s is between %s and %s; maps to %s (%s) roffset=%s", a, c.Dd, c.Md, e, d, c.$c);
        this.aa[a] = d;
        break;
      }
    }
    b === this.$.length && (this.aa[a] = 0);
  }
  return this.aa[a];
}};
function Zb(a, b, c) {
  this.ba = b && !c || !b && c;
  this.offset = a.xb;
  this.aa = a.getUint16();
  a.getUint16();
  a.getUint16();
  a.getUint16();
  this.map = {};
  for (b = 0;b < this.aa;b++) {
    c = a.getUint16();
    var d = a.getUint16(), e = a.getInt16();
    this.map[c << 16 | d] = e;
  }
  this.reset();
}
Zb.prototype = {log:A("KERN0"), reset:function() {
  this.$ = -1;
}, get:function(a) {
  var b = 0;
  if (0 <= this.$) {
    var c = this.$ << 16 | a;
    c in this.map && (b = this.map[c]);
  }
  this.$ = a;
  return this.ba ? {x:0, y:b} : {x:b, y:0};
}};
function $b(a) {
  this.aa = new Ub(a);
  this.la = [];
  this.vc = [];
  a = this.aa;
  var b = {};
  a.getUint32();
  var c = a.getUint16();
  a.getUint16();
  a.getUint16();
  a.getUint16();
  for (var d = 0;d < c;d++) {
    var e = Wb(a, 4);
    b[e] = {Te:a.getUint32(), offset:a.getUint32(), length:a.getUint32()};
    "head" !== e && this.log("Table %s has checksum 0x%s", e, b[e].Te.toString(16));
  }
  this.$ = b;
  a = this.aa;
  u("head" in this.$);
  a.seek(this.$.head.offset);
  this.version = Vb(a) / 65536;
  Vb(a);
  a.getUint32();
  this.Ca = a.getUint32();
  u(1594834165 === this.Ca);
  a.getUint16();
  this.oa = a.getUint16();
  a.getDate();
  a.getDate();
  this.dg = a.getInt16();
  this.fg = a.getInt16();
  this.cg = a.getInt16();
  this.eg = a.getInt16();
  a.getUint16();
  a.getUint16();
  a.getInt16();
  this.sa = a.getInt16();
  a.getInt16();
  a = this.aa;
  u("name" in this.$);
  b = this.$.name.offset;
  a.seek(b);
  a.getUint16();
  c = a.getUint16();
  d = a.getUint16();
  for (e = 0;e < c;e++) {
    var f = a.getUint16(), g = a.getUint16(), h = a.getUint16(), l = a.getUint16(), k = a.getUint16(), n = a.getUint16(), n = a.seek(b + d + n), q;
    if (0 === f || 3 === f) {
      q = a;
      for (var r = "", t = 0;t < k;t += 2) {
        r += String.fromCharCode(q.getUint16());
      }
      q = r;
    } else {
      q = Wb(a, k);
    }
    this.log("Name %s/%s id %s language %s: %s", f, g, l, h, q);
    a.seek(n);
    switch(l) {
      case 1:
        this.fontFamily = q;
        break;
      case 4:
        this.ba = q;
    }
  }
  a = this.aa;
  u("cmap" in this.$);
  b = this.$.cmap.offset;
  a.seek(b);
  a.getUint16();
  c = a.getUint16();
  for (d = 0;d < c;d++) {
    e = a.getUint16(), g = a.getUint16(), f = a.getUint32(), this.log("CMap platformid=%s specificid=%s offset=%s", e, g, f), 3 === e && 1 >= g && (e = a, f = e.seek(b + f), g = e.getUint16(), h = e.getUint16(), e.getUint16(), l = void 0, this.log("    Cmap format %s length %s", g, h), 0 === g ? l = new Xb(e) : 4 === g && (l = new Yb(e)), l && this.la.push(l), e.seek(f));
  }
  a = this.aa;
  u("hhea" in this.$);
  a.seek(this.$.hhea.offset);
  Vb(a);
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getUint16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  a.getInt16();
  this.ia = a.getUint16();
  a = this.aa;
  if ("kern" in this.$) {
    for (a.seek(this.$.kern.offset), h = a.getUint16(), b = a.getUint16(), this.log("Kern Table version: %s", h), this.log("Kern nTables: %s", b), c = 0;c < b;c++) {
      h = a.getUint16(), d = a.getUint16(), l = a.getUint16(), e = l >> 8, f = l & 4, g = 0 === (l & 1), this.log("Kerning subtable version %s format %s length %s coverage: %s", h, e, d, l), h = null, 0 === e ? h = new Zb(a, g, f) : (this.log("Unknown format -- skip"), a.seek(a.xb + d)), h && this.vc.push(h);
    }
  }
  u("maxp" in this.$);
  a = this.aa.seek(this.$.maxp.offset + 4);
  b = this.aa.getUint16();
  this.aa.seek(a);
  this.length = b;
}
$b.prototype = {log:A("TrueType"), transform:function(a, b) {
  a.scale(b / this.oa, -b / this.oa);
}};
function ac(a, b) {
  function c(b, c, e) {
    for (var h = 0, l = 0;l < f;l++) {
      var w = g[l];
      w & c ? h = w & e ? h + a.getUint8() : h - a.getUint8() : ~w & e && (h += a.getInt16());
      d[l][b] = h;
    }
  }
  b.type = "simple";
  b.Rb = [];
  for (var d = b.qa = [], e = 0;e < b.xc;e++) {
    b.Rb.push(a.getUint16());
  }
  a.seek(a.getUint16() + a.xb);
  if (0 !== b.xc) {
    for (var f = Math.max.apply(null, b.Rb) + 1, g = [], e = 0;e < f;e++) {
      var h = a.getUint8();
      g.push(h);
      d.push({lc:0 < (h & 1)});
      if (h & 8) {
        var l = a.getUint8();
        u(0 < l);
        for (e += l;l--;) {
          g.push(h), d.push({lc:0 < (h & 1)});
        }
      }
    }
    c("x", 2, 16);
    c("y", 4, 32);
  }
}
function bc(a, b) {
  var c;
  u("loca" in a.$);
  c = a.$.loca;
  var d = a.aa, e, f;
  1 === a.sa ? (e = d.seek(c.offset + 4 * b), c = d.getUint32(), f = d.getUint32()) : (e = d.seek(c.offset + 2 * b), c = 2 * d.getUint16(), f = d.getUint16());
  d.seek(e);
  c = c === f ? 0 : c + a.$.glyf.offset;
  d = a.aa;
  if (0 === c || c >= a.$.glyf.offset + a.$.glyf.length) {
    return null;
  }
  u(c >= a.$.glyf.offset);
  u(c < a.$.glyf.offset + a.$.glyf.length);
  d.seek(c);
  c = {xc:d.getInt16(), dg:d.getInt16(), fg:d.getInt16(), cg:d.getInt16(), eg:d.getInt16()};
  u(-1 <= c.xc);
  if (-1 === c.xc) {
    var g, h, l, k, n;
    c.type = "simple";
    var q = 32;
    c.Rb = [];
    for (c.qa = [];q & 32;) {
      var r, t, q = d.getUint16();
      n = d.getUint16();
      e = 1;
      g = f = 0;
      h = 1;
      k = l = 0;
      q & 1 ? (r = d.getInt16(), t = d.getInt16()) : (r = d.getUint8(), t = d.getUint8());
      q & 2 && (l = r, k = t);
      q & 8 ? h = e = d.getInt16() / 16384 : q & 64 ? (e = d.getInt16() / 16384, h = d.getInt16() / 16384) : q & 128 && (e = d.getInt16() / 16384, f = d.getInt16() / 16384, g = d.getInt16() / 16384, h = d.getInt16() / 16384);
      a.log("Read component glyph index %s", n);
      a.log("Transform: [%s %s %s %s %s %s]", e, f, g, h, l, k);
      r = d.xb;
      if (n = bc(a, n)) {
        var w = c.qa.length;
        for (t = 0;t < n.Rb.length;t++) {
          c.Rb.push(n.Rb[t] + w);
        }
        for (t = 0;t < n.qa.length;t++) {
          var w = n.qa[t].x, v = n.qa[t].y, w = e * w + f * v + l, v = g * w + h * v + k;
          c.qa.push({x:w, y:v, lc:n.qa[t].lc});
        }
      }
      d.seek(r);
    }
    c.xc = c.Rb.length;
    q & 256 && d.seek(d.getUint16() + d.xb);
  } else {
    ac(d, c);
  }
  return c;
}
function cc() {
  M.call(this);
  this.fonts = {};
  this.error = null;
  this.$ = 0;
}
cc.prototype = {log:A("FontCollection"), add:function(a) {
  this.$ += 1;
  var b = this;
  p.aa({url:a, Lf:function(c) {
    b.log("Got font %s; result is %s bytes", a, c.length);
    for (var d = "", e = 0;e < c.length;e++) {
      d += String.fromCharCode(c.charCodeAt(e) & 255);
    }
    c = new $b(d);
    b.log("Loaded '%s'", c.ba);
    for (e = 0;e < c.ba.length;e++) {
      b.log("   %s, %s", c.ba.charAt(e), c.ba.charCodeAt(e));
    }
    b.fonts[c.ba] = {name:c.ba, url:a, data:d, font:c};
    --b.$;
    0 === b.$ && b.emit("done");
  }, error:function() {
    b.log("Error fetching " + a);
  }, Se:function(a, b) {
    b.overrideMimeType("text/plain; charset=x-user-defined");
  }});
}, get:function(a) {
  if (a in this.fonts) {
    return this.fonts[a].font;
  }
}};
cc.prototype = p.$({}, M.prototype, cc.prototype);
function N(a, b) {
  this.type = a;
  this.values = b;
  if (4 > this.values.length) {
    throw "Bad value";
  }
}
var dc;
function ec(a, b) {
  a.toLowerCase() in fc && (a = fc[a.toLowerCase()]);
  var c = /\#([0-9a-f])([0-9a-f])([0-9a-f])/i, d = /rgba\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *, *([0-9\.]+) *\)/, e, f;
  f = /\#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i.exec(a);
  if (null !== f) {
    c = parseInt(f[1], 16) / 255, d = parseInt(f[2], 16) / 255, e = parseInt(f[3], 16) / 255, f = 1;
  } else {
    if (f = d.exec(a), null !== f) {
      c = parseFloat(f[1]) / 255, d = parseFloat(f[2]) / 255, e = parseFloat(f[3]) / 255, f = parseFloat(f[4]);
    } else {
      f = c.exec(a);
      if (null !== f) {
        c = parseInt(f[1], 16), c = (16 * c + c) / 255, d = parseInt(f[2], 16), d = (16 * d + d) / 255, e = parseInt(f[2], 16), e = (16 * e + e) / 255;
      } else {
        if (b) {
          return null;
        }
        c = 1;
        d = 0;
        e = 1;
      }
      f = 1;
    }
  }
  return new N(0, [c, d, e, f]);
}
N.prototype = {toString:function() {
  function a(a) {
    a = Math.round(255 * a);
    return 16 > a ? "0" + a.toString(16) : a.toString(16);
  }
  var b = ic(this, 0);
  return 1 === b.values[3] ? "#" + a(b.values[0]) + a(b.values[1]) + a(b.values[2]) : "rgba(" + Math.round(255 * b.values[0]) + "," + Math.round(255 * b.values[1]) + "," + Math.round(255 * b.values[2]) + "," + b.values[3] + ")";
}, lb:function(a) {
  a.type !== this.type && (a = ic(a, this.type));
  if (2 === this.type) {
    var b = this.values[0], c = a.values[0], b = b > c ? Math.min(b - c, c - b + 360) : Math.min(c - b, b - c + 360), b = b / 360;
    return Math.pow(b * b + (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) + (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]), .5);
  }
  return Math.pow((this.values[0] - a.values[0]) * (this.values[0] - a.values[0]) + (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) + (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]), .5);
}};
function ic(a, b) {
  return dc[a.type][b](a);
}
(function() {
  function a(a) {
    var b = a.values[0], c = a.values[1], d = a.values[2];
    0 > b && (b += 360);
    var e = b / 60 - Math.floor(b / 60), f = d * (1 - c), g = d * (1 - e * c), c = d * (1 - (1 - e) * c), h, k, l;
    switch(Math.floor(b / 60) % 6) {
      case 0:
        h = d;
        k = c;
        l = f;
        break;
      case 1:
        h = g;
        k = d;
        l = f;
        break;
      case 2:
        h = f;
        k = d;
        l = c;
        break;
      case 3:
        h = f;
        k = g;
        l = d;
        break;
      case 4:
        h = c;
        k = f;
        l = d;
        break;
      case 5:
        h = d, k = f, l = g;
    }
    return new N(0, [h, k, l, a.values[3]]);
  }
  function b(a) {
    var b, c = a.values[0], d = a.values[1], e = a.values[2], f = Math.max(c, d, e), g = Math.min(c, d, e);
    f === g ? b = 0 : f === c ? b = (60 * (d - e) / (f - g) + 360) % 360 : f === d ? b = 60 * (e - c) / (f - g) + 120 : f === e && (b = 60 * (c - d) / (f - g) + 240);
    return new N(2, [b, 0 === f ? 0 : 1 - g / f, f, a.values[3]]);
  }
  function c(a) {
    function b(a) {
      return a > 6 / 29 * (6 / 29) * (6 / 29) ? Math.pow(a, 1 / 3) : 1 / 3 * (29 / 6) * (29 / 6) * a + 4 / 29;
    }
    var c = b(a.values[1] / k.kd);
    return new N(3, [116 * c - 16, 500 * (b(a.values[0] / k.jd) - c), 200 * (c - b(a.values[2] / k.ld)), a.values[3]]);
  }
  function d(a) {
    var b = (a.values[0] + 16) / 116, c = b + a.values[1] / 500, d = b - a.values[2] / 200, e = 6 / 29;
    return new N(1, [c > e ? k.jd * c * c * c : 3 * (c - 16 / 116) * e * e * k.jd, b > e ? k.kd * b * b * b : 3 * (b - 16 / 116) * e * e * k.kd, d > e ? k.ld * d * d * d : 3 * (d - 16 / 116) * e * e * k.ld, a.values[3]]);
  }
  function e(a) {
    for (var b = [], c = 0;3 > c;c++) {
      b[c] = .04045 >= a.values[c] ? a.values[c] / 12.92 : Math.pow((a.values[c] + .055) / 1.055, 2.4);
    }
    return new N(1, [.4124 * b[0] + .3576 * b[1] + .1805 * b[2], .2126 * b[0] + .7152 * b[1] + .0722 * b[2], .0193 * b[0] + .1192 * b[1] + .9505 * b[2], a.values[3]]);
  }
  function f(a) {
    var b = [], c = [];
    b[0] = 3.241 * a.values[0] - 1.5374 * a.values[1] - .4986 * a.values[2];
    b[1] = -.9692 * a.values[0] + 1.876 * a.values[1] + .0416 * a.values[2];
    b[2] = .0556 * a.values[0] - .204 * a.values[1] + 1.057 * a.values[2];
    for (var d = 0;3 > d;d++) {
      c[d] = .0031308 >= b[d] ? 12.92 * b[d] : 1.055 * Math.pow(b[d], 1 / 2.4) - .055;
    }
    c[3] = a.values[3];
    return new N(0, c);
  }
  function g(a) {
    return new N(a.type, a.values.concat());
  }
  function h(a) {
    return c(e(a));
  }
  function l(a) {
    return b(f(a));
  }
  var k = {jd:.9505, kd:1, ld:1.089};
  dc = [[g, e, b, h], [f, g, l, c], [a, function(b) {
    return e(a(b));
  }, g, function(b) {
    return h(a(b));
  }], [function(a) {
    return f(d(a));
  }, d, function(a) {
    return l(d(a));
  }, g]];
})();
var fc = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", 
gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgreen:"#90ee90", lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", 
lightskyblue:"#87cefa", lightslategray:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", 
navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", 
seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", yellowgreen:"#9acd32"};
var jc = A("MISC");
function kc(a) {
  window.jQuery && a instanceof window.jQuery && (a = a[0]);
  return p(a);
}
function oc(a) {
  var b = document.createElement("canvas");
  a && a.appendChild(b);
  "G_vmlCanvasManager" in window && (jc("Emulating canvas in IE"), G_vmlCanvasManager.initElement(b), p(b).bind("selectstart", function(a) {
    jc("Cancelled selectstart on canvas");
    a.stopPropagation();
    a.preventDefault();
  }));
  b.style.background = "transparent";
  return b;
}
var pc = /MSIE ([0-9]{1,}[\.0-9]{0,})/, qc = null;
function rc() {
  var a;
  if (null !== qc) {
    a = qc;
  } else {
    a = -1;
    if ("Microsoft Internet Explorer" === navigator.appName) {
      var b = pc.exec(navigator.userAgent);
      null !== b && (a = parseFloat(b[1]));
    }
    qc = a;
    jc("IE version is %s", a);
  }
  return 0 <= a && 9 > a;
}
function sc(a) {
  for (var b = 0;a;) {
    try {
      var c = parseInt(p(a).da("z-index"), 10);
      c && (b = Math.max(b, c));
      a = a.parentNode;
    } catch (d) {
      break;
    }
  }
  return b;
}
var tc = null;
function uc(a, b) {
  var c = ec(a);
  c.values[3] = b;
  return c.toString();
}
function vc(a) {
  var b = atob(a.split(",")[1]);
  a = a.split(",")[0].split(":")[1].split(";")[0];
  for (var c = new ArrayBuffer(b.length), d = new Uint8Array(c), e = 0;e < b.length;e++) {
    d[e] = b.charCodeAt(e);
  }
  return new Blob([c], {type:a});
}
function wc(a, b) {
  var c;
  "function" !== typeof b ? c = function(a) {
    return a === b;
  } : c = b;
  for (var d = 0, e = 0;e < a.length;e++) {
    c(a[e]) ? d += 1 : d && (a[e - d] = a[e]);
  }
  a.length -= d;
}
;function xc(a, b, c, d) {
  yc(this, a, b, c, d);
}
function yc(a, b, c, d, e) {
  function f(a) {
    for (var b = 30;100 > b;b += 20) {
      a.values[2] = b / 100, g.$.push(a.toString());
    }
  }
  M.call(a);
  a.canvas = p(oc(b[0]));
  a.ha = a.canvas;
  a.canvas.da("position", "absolute");
  a.canvas.da("border", "none");
  a.canvas.da("border-top", "1px solid black");
  a.canvas.da("display", "block");
  a.ma = a.canvas[0].getContext("2d");
  a.size = c;
  a.Fb = d;
  a.la = e;
  a.$ = "rgba(0,0,0,0.0) rgba(0,0,0,0.5) #000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" ");
  var g = a;
  f(new N(2, [0, 0, 0, 1]));
  for (b = 0;720 > b;b += 35) {
    c = new N(2, [b, .5, 0, 1]), f(c);
  }
  zc(a, 100);
  a.canvas.bind("touchstart", function(a) {
    var b = g.canvas.offset();
    g.qb(a.touches[0].pageX - b.left - 0, a.touches[0].pageY - b.top - 0, 1);
    a.preventDefault();
    a.stopPropagation();
  });
  Na(a.canvas, function(a) {
    var b = g.canvas.offset();
    g.qb(a.pageX - b.left - 0, a.pageY - b.top - 0, a.which) || (a.preventDefault(), a.stopPropagation());
  });
  a.canvas.bind("contextmenu", function(a) {
    a.preventDefault();
    a.stopPropagation();
    return !1;
  });
}
m = xc.prototype;
m.log = A("COLOURPANEL");
function Ac(a, b) {
  a.$ = b.slice(0);
  a.log("Set colours to %s len=%s", a.$, a.$.length);
  a.format();
  a.na();
}
function zc(a, b) {
  a.width = b;
  a.canvas.Ja("width", "" + a.width);
  a.format();
  a.na();
}
function Bc(a, b) {
  a.ia = b;
  a.canvas.Ja("height", "" + (a.ia - 1));
}
m.height = function() {
  return this.ia;
};
m.moveTo = function(a, b) {
  this.canvas.da("left", "" + a + "px");
  this.canvas.da("top", "" + b + "px");
};
m.format = function() {
  this.ba = Math.floor(this.width / this.size);
  var a = Math.ceil(this.$.length / this.ba);
  this.log("Format to width=%s; height=%s wrap=%s, cpr=%s", this.width, a * this.size, this.la, this.ba);
  this.la ? Bc(this, a * this.size) : Bc(this, this.size);
};
function Cc(a, b, c, d) {
  a.fillStyle = "#ffffff";
  a.fillRect(b, c, d, d);
  a.beginPath();
  a.strokeStyle = "#000000";
  a.moveTo(b, c);
  a.lineTo(b + d, c + d);
  a.moveTo(b + d, c);
  a.lineTo(b, c + d);
  a.stroke();
}
function Dc(a, b, c, d) {
  for (var e, f = 0;f < d;f += 5) {
    e = 0 === f / 5 % 2;
    for (var g = 0;g < d;g += 5) {
      a.fillStyle = e ? "#000000" : "#ffffff", e = !e, a.fillRect(b + g, c + f, 5, 5);
    }
  }
  e = a.createLinearGradient(b + d, c + d, b, c);
  e.addColorStop(0, "rgba(255, 255, 255, 1.0)");
  e.addColorStop(1, "rgba(255, 255, 255, 0.0)");
  a.fillStyle = e;
  a.fillRect(b, c, d, d);
}
m.na = function() {
  for (var a = 0, b = 0, c = 0;c < this.$.length;c++) {
    var d = ec(this.$[c]);
    this.ma.fillStyle = this.$[c];
    this.ma.fillRect(a, b, this.size, this.size);
    0 === d.values[3] ? Cc(this.ma, a, b, this.size) : .5 === d.values[3] && Dc(this.ma, a, b, this.size);
    a += this.size;
    a >= this.width && (b += this.size, a = 0);
  }
};
m.Ma = function() {
  this.canvas.Ma();
};
m.show = function() {
  this.canvas.show();
};
m.qb = function(a, b, c) {
  a = Math.floor(a / this.size);
  var d = Math.floor(b / this.size);
  b = d * this.ba + a;
  this.log("row=%s col=%s index=%s coloursPerRow=%s", d, a, b, this.ba);
  c = 1 === c;
  return 0 === b ? (this.emit("opacity", 0, c), !0) : 1 === b ? (this.emit("opacity", .5, c), !0) : b < this.$.length ? (this.emit("colour", {Ta:this.$[b], fd:c}), !0) : !1;
};
p.$(xc.prototype, M.prototype);
function Ec(a, b, c) {
  var d = this;
  M.call(this);
  this.ia = b;
  this.ha = p(a);
  b || (this.ha.da("overflow-y", "scroll"), this.ha.da("text-align", "center"));
  b || c || (a = p("<input>").Ja("type", "button").Ja("value", "Add Page"), this.ha.append(a), a.click(function() {
    d.ta.hc(d.ta.uc(d.ta.dc() + 1));
  }), a = p("<input>").Ja("type", "button").Ja("value", "Delete Page"), this.ha.append(a), a.click(function() {
    d.ta.Kd(d.ta.dc());
  }), this.ba = !1);
  this.$ = [];
}
Ec.prototype = {log:A("PageSelector"), ib:function(a) {
  this.log("Set page %s", a);
  this.page < this.$.length && p(this.$[this.page]).da("border-color", "transparent");
  this.page = a;
  this.page < this.$.length && p(this.$[this.page]).da("border-color", "#9fb3e7");
}};
function Fc(a, b) {
  var c = oc(a.ha[0]);
  a.ia || (p(c).da("margin-left", "10px"), p(c).da("margin-right", "10px"), p(c).da("margin-top", "5px"), p(c).da("margin-bottom", "5px"));
  p(c).da("border-width", "3px");
  a.log("Make canvas for page %s, currentPage is %s", b, a.page);
  b === a.page ? p(c).da("border-color", "#9fb3e7") : p(c).da("border-color", "transparent");
  p(c).da("border-style", "solid");
  a.$.push(c);
  c.page = b;
  p(c).click(function() {
    a.ta.hc(c.page);
  });
  return c;
}
function Gc(a) {
  a.log("Regenerate page views.");
  var b = a.ha.width() - 6 - 10;
  if (null === tc) {
    var c = document.createElement("div");
    c.style.visibility = "hidden";
    c.style.width = "100px";
    document.body.appendChild(c);
    var d = c.offsetWidth;
    c.style.overflow = "scroll";
    var e = document.createElement("div");
    e.style.width = "100%";
    c.appendChild(e);
    e = e.offsetWidth;
    c.parentNode.removeChild(c);
    tc = d - e;
    jc("ScrollbarWidth calculated as %spx", tc);
  }
  b = b - tc;
  c = a.ha.height() - 6;
  d = a.ta.Kb();
  e = a.ta.tc();
  c > b ? c = b / e.width * e.height : b = c / e.height * e.width;
  for (var f = 0;f < d;f++) {
    var g;
    g = f === a.$.length ? Fc(a, f) : a.$[f];
    g.width = b;
    g.height = c;
    g = g.getContext("2d");
    g.save();
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, b, c);
    g.scale(b / e.width, b / e.width);
    g.translate(-e.x, -e.y);
    a.ta.na(g, {page:f});
    g.restore();
  }
  for (;f < a.$.length;f++) {
    p(a.$[f]).remove();
  }
  a.$.length = d;
}
function Hc(a, b) {
  function c() {
    null === e && d.ba && (e = setTimeout(function() {
      Gc(d);
      d.ib(d.ta.dc());
      e = null;
    }, 100));
  }
  var d = a, e = null;
  a.ta = b;
  b.on("document-changed", function() {
    c();
  });
  b.on("resource-loaded", function() {
    c();
  });
  b.on("set-page", function(a) {
    d.ib(a);
  });
}
function Ic(a, b) {
  a.ba = b;
  a.ba && a.ta && setTimeout(function() {
    Gc(a);
  }, 10);
}
Ec.prototype = p.$({}, M.prototype, Ec.prototype);
function Jc(a, b) {
  this.ha = a;
  this.canvas = document.createElement("canvas");
  this.height = this.width = b;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.canvas.style.cursor = "crosshair";
  this.sa = 0;
  this.ha.appendChild(this.canvas);
  "G_vmlCanvasManager" in window && window.G_vmlCanvasManager.initElement(this.canvas);
  this.ma = this.canvas.getContext("2d");
  var c = document.createElement("input");
  c.setAttribute("type", "range");
  this.la = document.createElement("input");
  this.la.setAttribute("type", "checkbox");
  "range" === c.type ? (this.ha.appendChild(document.createElement("br")), this.ha.appendChild(c), c.min = 0, c.max = 255, c.value = 255, this.ba = c) : (this.ba = null, c = "colourcheckbox" + this.sa, this.la.setAttribute("id", c), this.ha.appendChild(document.createElement("br")), this.ha.appendChild(this.la), this.sa += 1, c = p("<label>").Ja("for", c).text("Transparent"), this.ha.appendChild(c[0]));
  this.$ = this.height;
  this.ia = .8 * this.height;
  if (Jc[b]) {
    this.data = Jc[b];
  } else {
    for (var c = this.ma.getImageData(0, 0, this.$, this.$), d = this.$ / 2, e = this.ia / 2, f, g = 0;g < this.$;g++) {
      var h = Math.sqrt(d * d - (g - d) * (g - d)), l = Math.floor(-h + d), k = Math.floor(h + d), n = e * e - (g - d) * (g - d);
      if (0 <= n) {
        for (var h = Math.sqrt(n), n = Math.floor(-h + d), q = Math.floor(h + d), h = g * this.$ * 4 + 4 * l;l <= n;l++) {
          f = Math.atan2(g - d, l - d), f = new N(2, [f / Math.PI * 180, 1, 1, 1]), f = ic(f, 0), c.data[h++] = 255 * f.values[0], c.data[h++] = 255 * f.values[1], c.data[h++] = 255 * f.values[2], c.data[h++] = 255;
        }
        h = g * this.$ * 4 + 4 * q;
        l = q;
      } else {
        h = g * this.$ * 4 + 4 * l;
      }
      for (;l <= k;l++) {
        f = Math.atan2(g - d, l - d), f = new N(2, [f / Math.PI * 180, 1, 1, 1]), f = ic(f, 0), c.data[h++] = 255 * f.values[0], c.data[h++] = 255 * f.values[1], c.data[h++] = 255 * f.values[2], c.data[h++] = 255;
      }
    }
    this.data = c;
    Jc[b] = c;
  }
  this.aa = new N(2, [20, 1, 1, 1]);
  this.update();
  this.na();
  var r = this;
  r.Ca = !1;
  r.oa = "";
  Na(p(this.canvas), function(a) {
    var b = p(r.canvas).offset(), c = a.pageX - b.left, b = a.pageY - b.top;
    r.Ca = !0;
    Kc(r, c, b);
    a.stopPropagation();
    a.preventDefault();
  });
  La(p(this.canvas), function(a) {
    if (r.Ca) {
      var b = p(r.canvas).offset();
      Kc(r, a.pageX - b.left, a.pageY - b.top);
    }
    a.stopPropagation();
    a.preventDefault();
  });
  Ma(p(window), function() {
    r.Ca = !1;
    r.oa = "";
  });
  null !== this.ba && Ha(p(this.ba), function() {
    r.aa.values[3] = r.ba.value / 255;
    r.update();
    r.na();
  });
  Ha(p(this.la), function() {
    r.aa.values[3] = r.la.checked ? 0 : 1;
    r.update();
    r.na();
  });
}
Jc.prototype = {update:function() {
  this.Ka && this.Ka(this.aa.toString());
}, na:function() {
  this.ma.save();
  this.ma.lineWidth = 1;
  this.ma.fillStyle = "rgb(128, 128, 128)";
  this.ma.fillRect(0, 0, this.width, this.height);
  this.ma.putImageData(this.data, 0, 0);
  var a = this.aa.values[0] / 180 * Math.PI;
  this.ma.beginPath();
  var b = {x:Math.cos(a) * this.ia / 2 + this.$ / 2, y:Math.sin(a) * this.ia / 2 + this.$ / 2}, c = {x:Math.cos(a + 2 * Math.PI / 3) * this.ia / 2 + this.$ / 2, y:Math.sin(a + 2 * Math.PI / 3) * this.ia / 2 + this.$ / 2}, d = {x:Math.cos(a + 4 * Math.PI / 3) * this.ia / 2 + this.$ / 2, y:Math.sin(a + 4 * Math.PI / 3) * this.ia / 2 + this.$ / 2}, e = Math.cos(a) * this.$ / 2 + this.$ / 2, a = Math.sin(a) * this.$ / 2 + this.$ / 2, f = c.x + (d.x - c.x) / 2, g = c.y + (d.y - c.y) / 2;
  this.ma.moveTo(b.x, b.y);
  this.ma.lineTo(c.x, c.y);
  this.ma.lineTo(d.x, d.y);
  this.ma.lineTo(b.x, b.y);
  var h = this.ma.createLinearGradient(c.x, c.y, d.x, d.y);
  h.addColorStop(0, "#ffffff");
  h.addColorStop(1, "#000000");
  this.ma.fillStyle = h;
  this.ma.fill();
  h = this.ma.createLinearGradient(b.x, b.y, f, g);
  f = ic(this.aa, 2);
  f.values[1] = 1;
  f.values[2] = 1;
  f = ic(f, 0);
  f.values[3] = 1;
  h.addColorStop(0, f.toString());
  f.values[3] = 0;
  h.addColorStop(1, f.toString());
  this.ma.fillStyle = h;
  this.ma.fill();
  this.strokeStyle = "#000000";
  this.ma.beginPath();
  this.ma.moveTo(b.x, b.y);
  this.ma.lineTo(e, a);
  this.ma.stroke();
  a = 1 - this.aa.values[2];
  e = this.aa.values[1] * b.x + a * d.x + (1 - this.aa.values[1] - a) * c.x;
  a = this.aa.values[1] * b.y + a * d.y + (1 - this.aa.values[1] - a) * c.y;
  this.ma.beginPath();
  this.ma.arc(e, a, 4, 0, 2 * Math.PI, !1);
  this.ma.stroke();
  this.ma.restore();
  this.Ua = b;
  this.$a = c;
  this.eb = d;
}};
function Kc(a, b, c) {
  var d = Math.sqrt((b - a.$ / 2) * (b - a.$ / 2) + (c - a.$ / 2) * (c - a.$ / 2));
  if ("ring" === a.oa || "triangle" !== a.oa && d >= a.ia / 2 && d <= a.$ / 2) {
    a.aa.values[0] = Math.atan2(a.$ / 2 - c, a.$ / 2 - b) / Math.PI * 180 + 180, 0 === a.aa.values[1] && (a.aa.values[1] = 1, a.aa.values[2] = 1), a.oa = "ring";
  } else {
    var e, f = a.Ua, d = a.$a, g = a.eb;
    e = (f.x - g.x) * (d.y - g.y) - (d.x - g.x) * (f.y - g.y);
    d = ((d.y - g.y) * (b - g.x) - (d.x - g.x) * (c - g.y)) / e;
    b = 1 - Math.max(0, d) - Math.max(0, (-(f.y - g.y) * (b - g.x) + (f.x - g.x) * (c - g.y)) / e);
    a.aa.values[1] = Math.min(Math.max(d, 0), 1);
    a.aa.values[2] = 1 - Math.min(Math.max(b, 0), 1);
    a.oa = "triangle";
  }
  0 === a.aa.values[3] && (a.aa.values[3] = 1, null !== a.ba && (a.ba.value = 255));
  a.na();
  a.update();
}
function Lc(a, b) {
  a.aa = ic(ec(b), 2);
  null !== a.ba && (a.ba.value = Math.round(255 * a.aa.values[3]));
  a.la.checked = 0 === a.aa.values[3] ? !0 : !1;
  a.na();
  a.update();
}
function Mc() {
  var a = document.createElement("canvas");
  "G_vmlCanvasManager" in window && window.G_vmlCanvasManager.initElement(a);
  return a.getContext && a.getContext("2d").getImageData;
}
;var Nc = Function("return this")();
Nc.JSON || (Nc.JSON = {});
(function() {
  function a(a) {
    return 10 > a ? "0" + a : a;
  }
  function b(a) {
    e.lastIndex = 0;
    return e.test(a) ? '"' + a.replace(e, function(a) {
      var b = h[a];
      return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function c(a, d) {
    var e, h, t, w, v = f, x, C = d[a];
    C && "object" === typeof C && "function" === typeof C.toJSON && (C = C.toJSON(a));
    "function" === typeof l && (C = l.call(d, a, C));
    switch(typeof C) {
      case "string":
        return b(C);
      case "number":
        return isFinite(C) ? String(C) : "null";
      case "boolean":
      ;
      case "null":
        return String(C);
      case "object":
        if (!C) {
          return "null";
        }
        f += g;
        x = [];
        if ("[object Array]" === Object.prototype.toString.apply(C)) {
          w = C.length;
          for (e = 0;e < w;e += 1) {
            x[e] = c(e, C) || "null";
          }
          t = 0 === x.length ? "[]" : f ? "[\n" + f + x.join(",\n" + f) + "\n" + v + "]" : "[" + x.join(",") + "]";
          f = v;
          return t;
        }
        if (l && "object" === typeof l) {
          for (w = l.length, e = 0;e < w;e += 1) {
            h = l[e], "string" === typeof h && (t = c(h, C)) && x.push(b(h) + (f ? ": " : ":") + t);
          }
        } else {
          for (h in C) {
            Object.hasOwnProperty.call(C, h) && (t = c(h, C)) && x.push(b(h) + (f ? ": " : ":") + t);
          }
        }
        t = 0 === x.length ? "{}" : f ? "{\n" + f + x.join(",\n" + f) + "\n" + v + "}" : "{" + x.join(",") + "}";
        f = v;
        return t;
    }
  }
  "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : "";
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
    return "" + this.valueOf();
  });
  var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f, g, h = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"}, l;
  "function" !== typeof Nc.JSON.stringify && (Nc.JSON.stringify = function(a, b, d) {
    var e;
    g = f = "";
    if ("number" === typeof d) {
      for (e = 0;e < d;e += 1) {
        g += " ";
      }
    } else {
      "string" === typeof d && (g = d);
    }
    if ((l = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) {
      throw Error("JSON.stringify");
    }
    return c("", {"":a});
  });
  "function" !== typeof Nc.JSON.parse && (Nc.JSON.parse = function(a, b) {
    function c(a, d) {
      var e, f, g = a[d];
      if (g && "object" === typeof g) {
        for (e in g) {
          Object.hasOwnProperty.call(g, e) && (f = c(g, e), void 0 !== f ? g[e] = f : delete g[e]);
        }
      }
      return b.call(a, d, g);
    }
    var e;
    a = String(a);
    d.lastIndex = 0;
    d.test(a) && (a = a.replace(d, function(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }));
    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
      return e = eval("(" + a + ")"), "function" === typeof b ? c({"":e}, "") : e;
    }
    throw new SyntaxError("JSON.parse");
  });
})();
function Oc() {
  var a = this;
  M.call(this);
  window.addEventListener("message", function(b) {
    Pc(a, b);
  }, !1);
  window.parent.postMessage('{"event": "ready"}', "*");
}
Oc.prototype = {log:A("Api")};
function Pc(a, b) {
  function c(a) {
    "ticket" in d && (a = {ticket:d.ticket, args:a}, window.parent.postMessage(window.JSON.stringify(a), "*"));
  }
  var d;
  try {
    d = window.JSON.parse(b.data);
  } catch (g) {
    a.log("Error parsing %s from %s", b.data, b.origin);
    return;
  }
  a.log("Received %s", b.data);
  if (d["function"] in a.aa) {
    for (var e = a.aa[d["function"]], f = 0;f < e.length;f++) {
      (0,e[f])(d.args, c);
    }
  }
}
Oc.prototype = p.$({}, M.prototype, Oc.prototype);
function Qc(a) {
  if ("string" === typeof a) {
    for (;8 > a.length;) {
      a += a;
    }
    for (var b = 16777619, c = 0;c < a.length;c++) {
      b = (16777619 * b ^ a.charCodeAt(c)) & 4294967295;
    }
    a = b;
  }
  this.ba = a;
  this.reset();
}
Qc.prototype = {reset:function() {
  this.aa = this.$ = this.ba;
}, next:function() {
  this.aa = 36969 * (this.aa & 65535) + (this.aa >> 16);
  this.$ = 18E3 * (this.$ & 65535) + (this.$ >> 16);
  return ((this.aa << 16) + this.$) / 4294967295 / 2 + .5;
}};
function Rc(a, b) {
  for (var c in a) {
    a.hasOwnProperty(c) && !b.hasOwnProperty(c) && (b[c] = a[c]);
  }
}
;function Sc(a, b) {
  M.call(this);
  this.Qb = b;
  this.ha = document.createElement("div");
  this.ha.style.width = b + "px";
  this.ha.style.height = "320px";
  this.ha.style.border = "none";
  this.ha.style.backgroundColor = "#ffffff";
  this.ha.style.MozUserSelect = "none";
  this.ha.style.WebkitUserSelect = "none";
  this.ha.style.$ = "none";
  this.ha.style.ia = "none";
  this.ia = {};
  this.la = 1;
  this.$ = [];
  this.ba = 0;
}
Sc.prototype = {width:function() {
  return parseInt(this.ha.style.width, 10);
}, focus:function(a) {
  0 < this.$.length && (0 < arguments.length && (Tc(this, !1), this.ba = a), Tc(this, !0));
}, blur:function() {
  0 < this.$.length && Tc(this, !1);
}, pb:function(a, b) {
  if (0 !== this.$.length) {
    var c = "next" === a || "previous" === a;
    c && Tc(this, !1);
    switch(a) {
      case "next":
        this.ba = Math.min(this.ba + 1, this.$.length - 1);
        break;
      case "previous":
        this.ba = Math.max(this.ba - 1, 0);
        break;
      case "enter":
        this.$[this.ba].Ve(b);
    }
    c && (Tc(this, !0), b.stopPropagation(), b.preventDefault());
  }
}, moveTo:function(a, b) {
  p(this.ha).da("left", "" + a + "px");
  p(this.ha).da("top", "" + b + "px");
}, show:function(a) {
  this.ha.style.display = a || 0 === arguments.length ? "block" : "none";
}, log:A("TOOLBAR"), jb:function(a, b, c) {
  function d() {
    var a = e.style.background;
    e.style.background = "#e7d69f";
    f.style.background = "#e7d69f";
    var b = e.style.background;
    setTimeout(function() {
      e.style.background === b && (e.style.background = a, f.style.background = a);
    }, 200);
  }
  var e = document.createElement("div"), f = document.createElement("img"), g = this;
  e.style.display = "inline";
  e.style.cssFloat = "left";
  e.style.overflow = "hidden";
  e.style.width = this.Qb + "px";
  e.style.height = this.Qb + "px";
  e.style.margin = "1px";
  f.src = a;
  f.ha = e;
  f.style.cursor = "hand";
  f.setAttribute("title", b);
  f.style.maxWidth = this.Qb + "px";
  f.style.maxHeight = this.Qb + "px";
  f.draggable = !1;
  e.appendChild(f);
  p(f).bind("load", function() {
    g.log("Toolbar image loaded; %sx%s", f.width, f.height);
    var a = (this.Qb - f.height) / 2;
    f.style.marginLeft = (this.Qb - f.width) / 2 + "px";
    f.style.marginTop = a + "px";
  });
  this.ha.appendChild(e);
  var h = this.$.length;
  c && (p(e).bind("touchstart", function(a) {
    a.preventDefault();
    g.log("Got touchstart");
    d();
    c(a);
    g.emit("click", a);
  }), p(e).click(function(a) {
    g.log("Got a click");
    d();
    c(a);
    g.focus(h);
    g.emit("click", a);
  }));
  this.la += this.Qb + 1;
  this.$.push({element:e, Ve:c});
  return f;
}};
function Uc(a, b) {
  for (var c in a.ia) {
    a.ia.hasOwnProperty(c) && (a.ia[c].ha.style.background = "#ffffff", a.ia[c].style.background = "#ffffff");
  }
  b in a.ia ? (c = a.ia[b], a.log("Highlight %s", b), c.ha.style.background = "#9fb3e7", c.style.background = "#9fb3e7") : a.log("Failed to highlight %s", b);
}
function Vc(a, b, c, d, e) {
  a.ia[b] = a.jb(d, c, e);
}
function Tc(a, b) {
  a.$[a.ba].element.style.outline = b ? "1px dotted gray" : "none";
}
Rc(M.prototype, Sc.prototype);
function Wc() {
  M.call(this);
  Xc(this);
}
Wc.prototype = {log:A("KEYMAP"), map:function(a, b) {
  var c = a.toLowerCase().split(","), d;
  if ("string" === typeof b) {
    var e = b.split(",");
    for (d = 0;d < c.length;d++) {
      for (var f = 0;f < e.length;f++) {
        $c(this, c[d], e[f]);
      }
    }
  } else {
    for (d = 0;d < c.length;d++) {
      $c(this, c[d], b);
    }
  }
}, translate:function(a) {
  var b = [], c = "";
  a.keyCode && (c += a.keyCode);
  a.shiftKey && (c += "-shift");
  a.ctrlKey && (c += "-control");
  a.altKey && (c += "-alt");
  a.metaKey && (c += "-meta");
  a = c;
  a in this.keys && (b = this.keys[a]);
  this.log("%s", a);
  return b;
}, mb:function(a, b) {
  for (var c = this.translate(a), d = 0;d < c.length;d++) {
    b(c[d]);
  }
}};
function ad(a, b) {
  p(b).bind("keydown", a.$);
}
function $c(a, b, c) {
  if (0 !== b.length) {
    var d = b.match(a.ba) || [], e = !1, f = !1, g = !1, h = !1, l = [], k;
    for (k = 0;k < d.length;k++) {
      switch(d[k]) {
        case "alt":
          g = !0;
          break;
        case "control":
        ;
        case "ctrl":
          f = !0;
          break;
        case "shift":
          e = !0;
          break;
        case "shift":
          e = !0;
          break;
        case "home":
          l.push(36);
          break;
        case "end":
          l.push(35);
          break;
        case "pageup":
          l.push(33);
          break;
        case "pagedown":
          l.push(34);
          break;
        case "delete":
        ;
        case "del":
          l.push(46);
          break;
        case "backspace":
          l.push(8);
          break;
        case "up":
          l.push(38);
          break;
        case "right":
          l.push(39);
          break;
        case "down":
          l.push(40);
          break;
        case "left":
          l.push(37);
          break;
        case "escape":
        ;
        case "esc":
          l.push(27);
          break;
        case "enter":
          l.push(13);
          break;
        case "ins":
        ;
        case "insert":
          l.push(45);
          break;
        case "f4":
          l.push(115);
          break;
        case "meta":
        ;
        case "command":
        ;
        case "cmd":
        ;
        case "\u2318":
          h = !0;
          break;
        default:
          alert("key entry not found: " + d[k]);
      }
    }
    d = function(b) {
      e && -1 === b.indexOf("-shift") && (b += "-shift");
      f && -1 === b.indexOf("-control") && (b += "-control");
      g && -1 === b.indexOf("-alt") && (b += "-alt");
      h && -1 === b.indexOf("-meta") && (b += "-meta");
      "string" === typeof c ? a.log("Keyboard mapping: %s->%s", b, c) : a.log("Keyboard mapping: %s->%s", b, "function()");
      if (b in a.keys) {
        for (var d = 0, k = a.keys[b], d = 0;d < k.length && k[d] !== c;d++) {
        }
        d === k.length && a.keys[b].push(c);
      } else {
        a.keys[b] = [c];
      }
    };
    if (0 === l.length) {
      switch(b = b.toUpperCase().charAt(b.length - 1), b) {
        case "=":
          d("107-shift");
          d("187");
          d("61");
          break;
        case "+":
          d("107");
          d("61-shift");
          break;
        case "-":
          d("109");
          d("189");
          d("173");
          break;
        default:
          l.push(b.charCodeAt(0));
      }
    }
    for (k = 0;k < l.length;k++) {
      d("" + l[k]);
    }
  }
}
function Xc(a) {
  a.keys = {};
  a.Ua = !0;
  a.ba = new RegExp("alt backspace cmd command control ctrl del delete down end enter esc escape f4 home ins insert left meta pagedown pageup right shift up \u2318".split(" ").sort(function(a, c) {
    return c.length - a.length;
  }).join("|"), "g");
  a.$ = function(b) {
    for (var c = a.translate(b), d = 0;d < c.length;d++) {
      if ("string" === typeof c[d]) {
        a.log("action: %s", c[d]), a.wd("*", c[d], b);
      } else {
        c[d](b);
      }
    }
  };
}
Rc(M.prototype, Wc.prototype);
function bd() {
  var a = document.createElement("input");
  p(a).Ja("type", "range");
  if ("range" === a.type) {
    return a.Ef = function(b, c) {
      a.min = b;
      a.max = c;
    }, a.lf = function() {
      return a.value;
    }, a.fe = function(b) {
      a.value = b;
    }, a;
  }
  var b = p("<div>");
  b.da("display", "inline-block");
  b.da("vertical-align", "top");
  b.da("height", "1em");
  b.da("width", "10em");
  b.da("padding", "0.25em");
  b.da("position", "relative");
  var c = p("<div>");
  c.da("top", "50%");
  c.da("height", "0");
  c.da("border-top", "1px solid black");
  c.da("border-bottom", "1px solid #888888");
  c.da("position", "absolute");
  c.da("left", "0");
  c.da("right", "0");
  var d = p("<div>");
  d.da("height", "1em");
  d.da("left", "0px");
  d.da("background", "#888888");
  d.da("border-top", "1px solid #cccccc");
  d.da("border-left", "1px solid #cccccc");
  d.da("border-bottom", "1px solid #000000");
  d.da("border-right", "1px solid #000000");
  d.da("width", "0.5em");
  d.da("position", "absolute");
  d.da("cursor", "pointer");
  b.append(c);
  b.append(d);
  b[0].type = "range";
  b[0].min = 0;
  b[0].max = 100;
  b[0].value = 0;
  b[0].onchange = function() {
  };
  b[0].Ef = function(a, c) {
    b[0].min = a;
    b[0].max = c;
  };
  b[0].fe = function(a) {
    b[0].value = a;
    var c = b.width() - d.width();
    a = a / b[0].max * c;
    a = Math.round(a);
    a = Math.max(a, 0);
    a = Math.min(a, b.width());
    d.da("left", "" + a + "px");
  };
  b[0].lf = function() {
    return b[0].value;
  };
  var e, f, g, h = A("RANGE");
  Na(p(d), function(a) {
    g = !0;
    e = a.pageX;
    f = parseInt(d.da("left"), 10);
    h("Mousedown at %s, ox=%s", e, f);
    a.stopPropagation();
    a.preventDefault();
  });
  Na(p(b), function(a) {
    var c = b.width() - d.width(), h = a.pageX - p(b).offset().left, h = Math.max(h, 0), h = Math.min(h, c);
    d.da("left", "" + h + "px");
    e = a.pageX;
    f = h;
    h = h / c * (b[0].max - b[0].min) + b[0].min;
    h = Math.round(h);
    b[0].value = h;
    b[0].onchange();
    g = !0;
  });
  La(p(b), function(a) {
    if (g) {
      var c = b.width() - d.width();
      a = a.pageX - e + f;
      a = Math.max(a, 0);
      a = Math.min(a, c);
      d.da("left", "" + a + "px");
      a = a / c * (b[0].max - b[0].min) + b[0].min;
      a = Math.round(a);
      b[0].value = a;
      b[0].onchange();
    }
  });
  Ma(p(document.body), function() {
    g = !1;
  });
  return b[0];
}
;function F(a, b) {
  this.x = a;
  this.y = b;
}
F.prototype.lb = function(a) {
  return Math.sqrt((a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y));
};
F.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};
F.prototype.bc = function(a) {
  return this.x === a.x && this.y === a.y;
};
F.prototype.clone = function() {
  return new F(this.x, this.y);
};
function cd(a, b) {
  this.width = a;
  this.height = b;
}
function sb(a, b, c, d) {
  return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
}
function K(a, b, c, d) {
  var e = sb(a, b, c, d);
  return 0 === e ? {x:1, y:0} : {x:(c - a) / e, y:(d - b) / e};
}
function dd(a) {
  a.x *= -1;
  a.y *= -1;
  return a;
}
function O(a, b, c, d) {
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  0 > this.width && (this.x += this.width, this.width = -this.width);
  0 > this.height && (this.y += this.height, this.height = -this.height);
}
function ed(a) {
  if (0 === a.length) {
    return new O(0, 0, 0, 0);
  }
  for (var b = a[0].x, c = a[0].x, d = a[0].y, e = a[0].y, f = 1;f < a.length;f++) {
    a[f].x < b && (b = a[f].x), a[f].x > c && (c = a[f].x), a[f].y < d && (d = a[f].y), a[f].y > e && (e = a[f].y);
  }
  return new O(b, d, c - b, e - d);
}
O.prototype = {save:function() {
  return {x:this.x, y:this.y, width:this.width, height:this.height};
}, clone:function() {
  return new O(this.x, this.y, this.width, this.height);
}, bc:function(a) {
  return this.x === a.x && this.y === a.y && this.width === a.width && this.height === a.height;
}, contains:function(a) {
  return this.x <= a.x && this.x + this.width > a.x + a.width && this.y <= a.y && this.y + this.height > a.y + a.height;
}, Ib:function(a, b) {
  return this.x <= a && this.x + this.width > a && this.y <= b && this.y + this.height > b;
}, Nb:function(a, b) {
  void 0 === b && (b = a);
  this.x -= a / 2;
  this.y -= b / 2;
  this.width += a;
  this.height += b;
}, transform:function(a) {
  var b, c, d;
  b = a.apply(this.x, this.y);
  c = a.apply(this.x + this.width, this.y);
  d = a.apply(this.x + this.width, this.y + this.height);
  a = a.apply(this.x, this.y + this.height);
  this.x = Math.min(b.x, c.x, d.x, a.x);
  this.y = Math.min(b.y, c.y, d.y, a.y);
  this.width = Math.max(b.x, c.x, d.x, a.x) - this.x;
  this.height = Math.max(b.y, c.y, d.y, a.y) - this.y;
}, right:function() {
  return this.x + this.width;
}, bottom:function() {
  return this.y + this.height;
}, toString:function() {
  return "Rectangle(" + this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")";
}};
function fd(a) {
  return new F(a.x + a.width / 2, a.y + a.height / 2);
}
function gd(a, b, c) {
  b < a.x ? (a.width += a.x - b, a.x = b) : b > a.x + a.width && (a.width = b - a.x);
  c < a.y ? (a.height += a.y - c, a.y = c) : c > a.y + a.height && (a.height = c - a.y);
}
function hd(a, b) {
  b.x < a.x && (a.width += a.x - b.x, a.x = b.x);
  b.y < a.y && (a.height += a.y - b.y, a.y = b.y);
  b.x + b.width > a.x + a.width && (a.width += b.x + b.width - a.x - a.width);
  b.y + b.height > a.y + a.height && (a.height += b.y + b.height - a.y - a.height);
}
function P(a) {
  if (0 === arguments.length) {
    this.m11 = 1, this.m21 = this.m12 = 0, this.m22 = 1, this.Ba = this.Aa = 0;
  } else {
    if (1 === arguments.length) {
      if (6 !== arguments[0].length) {
        throw "Bad array initializer for Matrix.";
      }
      this.m11 = arguments[0][0];
      this.m12 = arguments[0][1];
      this.m21 = arguments[0][2];
      this.m22 = arguments[0][3];
      this.Aa = arguments[0][4];
      this.Ba = arguments[0][5];
    } else {
      if (6 === arguments.length) {
        this.m11 = arguments[0], this.m12 = arguments[1], this.m21 = arguments[2], this.m22 = arguments[3], this.Aa = arguments[4], this.Ba = arguments[5];
      } else {
        throw "Bad initializer for Matrix.";
      }
    }
  }
}
P.prototype = {log:A("MATRIX"), toString:function() {
  return "[ " + this.m11 + " " + this.m12 + " " + this.Aa + "    " + this.m21 + " " + this.m22 + " " + this.Ba + "    0 0 1 ]";
}, Hb:function() {
  return [this.m11, this.m12, this.m21, this.m22, this.Aa, this.Ba];
}, multiply:function(a) {
  var b = new P;
  b.m11 = this.m11 * a.m11 + this.m12 * a.m21;
  b.m21 = this.m21 * a.m11 + this.m22 * a.m21;
  b.m12 = this.m11 * a.m12 + this.m12 * a.m22;
  b.m22 = this.m21 * a.m12 + this.m22 * a.m22;
  b.Aa = this.m11 * a.Aa + this.m12 * a.Ba + this.Aa;
  b.Ba = this.m21 * a.Aa + this.m22 * a.Ba + this.Ba;
  return b;
}, apply:function(a, b) {
  return new F(this.m11 * a + this.m12 * b + this.Aa, this.m21 * a + this.m22 * b + this.Ba);
}, clone:function() {
  return new P(this.m11, this.m12, this.m21, this.m22, this.Aa, this.Ba);
}, inverse:function() {
  var a = this.m11 * this.m22 - this.m12 * this.m21;
  return new P(this.m22 / a, -this.m12 / a, -this.m21 / a, this.m11 / a, (this.m12 * this.Ba - this.Aa * this.m22) / a, (this.Aa * this.m21 - this.m11 * this.Ba) / a);
}};
function jd(a, b) {
  b.transform(a.m11, a.m21, a.m12, a.m22, a.Aa, a.Ba);
}
function kd(a) {
  return 1 === a.m11 && 0 === a.m12 && 0 === a.m21 && 1 === a.m22 && 0 === a.Aa && 0 === a.Ba;
}
function ld(a, b, c, d) {
  void 0 === c ? (this.m11 = a, this.m21 = this.m12 = 0, this.m22 = b, this.aa = this.$ = this.Ba = this.Aa = 0) : (this.m11 = a, this.m21 = this.m12 = 0, this.m22 = b, this.Aa = c - a * c, this.Ba = d - b * d, this.$ = c, this.aa = d);
  this.ba = a;
  this.ia = b;
}
ld.prototype.inverse = function() {
  return new ld(1 / this.ba, 1 / this.ia, this.$, this.aa);
};
Rc(P.prototype, ld.prototype);
function md(a, b, c) {
  var d = Math.cos(a), e = Math.sin(a);
  this.m11 = d;
  this.m12 = e;
  this.m21 = -e;
  this.m22 = d;
  this.Aa = -b * d - c * e + b;
  this.Ba = b * e - c * d + c;
  this.$ = a;
  this.x = b;
  this.y = c;
}
md.prototype.inverse = function() {
  return new md(-this.$, this.x, this.y);
};
Rc(P.prototype, md.prototype);
function nd(a, b, c) {
  var d = Math.cos(2 * a), e = Math.sin(2 * a);
  this.m11 = d;
  this.m21 = this.m12 = e;
  this.m22 = -d;
  this.Aa = -b * d - c * e + b;
  this.Ba = -b * e + c * d + c;
  this.$ = a;
  this.x = b;
  this.y = c;
}
nd.prototype.inverse = function() {
  return new nd(-this.$, this.x, this.y);
};
Rc(P.prototype, nd.prototype);
function I(a, b) {
  this.m11 = 1;
  this.m21 = this.m12 = 0;
  this.m22 = 1;
  this.Aa = a;
  this.Ba = b;
}
I.prototype.inverse = function() {
  return new I(-this.Aa, -this.Ba);
};
Rc(P.prototype, I.prototype);
function od(a, b, c, d, e, f, g, h, l, k) {
  if (!(8 < ++pd)) {
    var n = (b + d) / 2, q = (c + e) / 2, r = (d + f) / 2, t = (e + g) / 2, w = (f + h) / 2, v = (g + l) / 2, x = (n + r) / 2, C = (q + t) / 2, r = (r + w) / 2, t = (t + v) / 2, Yc = (x + r) / 2, Zc = (C + t) / 2, gc = h - b, hc = l - c;
    d = Math.abs((d - h) * hc - (e - l) * gc);
    f = Math.abs((f - h) * hc - (g - l) * gc);
    (d + f) * (d + f) < k * (gc * gc + hc * hc) ? a.push(new F(Yc, Zc)) : (od(a, b, c, n, q, x, C, Yc, Zc, k), od(a, Yc, Zc, r, t, w, v, h, l, k));
  }
  --pd;
}
var pd = 0;
function qd(a, b, c, d, e, f, g, h) {
  if (!(8 < ++pd)) {
    var l = (b + d) / 2, k = (c + e) / 2, n = (d + f) / 2, q = (e + g) / 2, r = (l + n) / 2, t = (k + q) / 2, w = f - b, v = g - c;
    d = Math.abs((d - f) * v - (e - g) * w);
    d * d <= h * (w * w + v * v) ? a.push(new F(r, t)) : (qd(a, b, c, l, k, r, t, h), qd(a, r, t, n, q, f, g, h));
  }
  --pd;
}
function rd(a, b, c) {
  var d, e, f, g, h, l, k, n, q = 0;
  if (3 > a.length) {
    return 0;
  }
  f = a[a.length - 1].x;
  g = a[a.length - 1].y;
  for (n = 0;n < a.length;n++) {
    d = a[n].x, e = a[n].y, d > f ? (h = f, k = d, l = g, g = e) : (h = d, k = f, l = e), d < b === b <= f && (c - l) * (k - h) < (g - l) * (b - h) && (q = !q), f = d, g = e;
  }
  return q;
}
function sd(a) {
  this.closed = !1;
  this.ga = [];
  a instanceof O && (this.moveTo(a.x, a.y), this.lineTo(a.x + a.width, a.y), this.lineTo(a.x + a.width, a.y + a.height), this.lineTo(a.x, a.y + a.height), this.lineTo(a.x, a.y), this.close());
}
var Bb = 0, Cb = 1, Eb = 4, Fb = [3, 3, 7, 5, 1], td = [1, 1, 3, 2, 0];
sd.prototype = {moveTo:function(a, b) {
  this.ga.push(Bb, a, b);
}, lineTo:function(a, b) {
  this.ga.push(Cb, a, b);
}, bezierCurveTo:function(a, b, c, d, e, f) {
  this.ga.push(2, a, b, c, d, e, f);
}, quadraticCurveTo:function(a, b, c, d) {
  this.ga.push(3, a, b, c, d);
}, close:function() {
  this.ga.push(Eb);
}, na:function(a) {
  for (var b = 0;b < this.ga.length;) {
    switch(this.ga[b]) {
      case Bb:
        a.moveTo(this.ga[b + 1], this.ga[b + 2]);
        break;
      case Cb:
        a.lineTo(this.ga[b + 1], this.ga[b + 2]);
        break;
      case 2:
        a.bezierCurveTo(this.ga[b + 1], this.ga[b + 2], this.ga[b + 3], this.ga[b + 4], this.ga[b + 5], this.ga[b + 6]);
        break;
      case 3:
        a.quadraticCurveTo(this.ga[b + 1], this.ga[b + 2], this.ga[b + 3], this.ga[b + 4]);
        break;
      case Eb:
        a.closePath();
        break;
      default:
        alert("Error!");
    }
    b += Fb[this.ga[b]];
  }
}, transform:function(a) {
  for (var b = 0, c, d;b < this.ga.length;) {
    d = td[this.ga[b]];
    for (c = 0;c < d;c++) {
      var e = a.apply(this.ga[b + 1 + 2 * c], this.ga[b + 1 + 2 * c + 1]);
      this.ga[b + 1 + 2 * c] = e.x;
      this.ga[b + 1 + 2 * c + 1] = e.y;
    }
    b += Fb[this.ga[b]];
  }
}, clone:function() {
  var a = new sd;
  a.ga = this.ga.concat();
  return a;
}, append:function(a) {
  this.ga = this.ga.concat(a.ga);
}};
function Ab(a) {
  function b(a, b) {
    f -= (a - d) * (b + e);
    d = a;
    e = b;
  }
  for (var c = 0, d, e, f = 0;c < a.ga.length;) {
    switch(a.ga[c]) {
      case Bb:
        d = a.ga[c + 1];
        e = a.ga[c + 2];
        break;
      case Cb:
        b(a.ga[c + 1], a.ga[c + 2]);
        break;
      case 2:
        b(a.ga[c + 5], a.ga[c + 6]);
        break;
      case 3:
        b(a.ga[c + 3], a.ga[c + 4]);
    }
    c += Fb[a.ga[c]];
  }
  return f / 2;
}
function ud(a, b, c) {
  for (var d = 0, e = 0, f = c[0], g, h = new F(0, 0), l;d < a.ga.length;) {
    switch(a.ga[d]) {
      case Bb:
        l = a.ga[d + 1];
        g = a.ga[d + 2];
        b.moveTo(l, g);
        h = new F(l, g);
        break;
      case Cb:
        l = a.ga[d + 1];
        var k = g = a.ga[d + 2], n = new F(l, k);
        g = h.lb(n);
        if (!(0 >= g)) {
          for (;g > f;) {
            h.x += (n.x - h.x) * f / g, h.y += (n.y - h.y) * f / g, e & 1 ? b.moveTo(h.x, h.y) : b.lineTo(h.x, h.y), g -= f, e = (e + 1) % c.length, f = c[e];
          }
          g <= f && (h = new F(l, k), e & 1 ? b.moveTo(h.x, h.y) : b.lineTo(h.x, h.y), f -= g);
        }
      ;
    }
    d += Fb[a.ga[d]];
  }
}
function vd(a, b) {
  for (var c = 0, d, e, f = new O(a.ga[1], a.ga[2], 0, 0), g;c < a.ga.length;) {
    switch(a.ga[c]) {
      case Bb:
      ;
      case Cb:
        d = a.ga[c + 1];
        e = a.ga[c + 2];
        gd(f, d, e);
        break;
      case 2:
        var h = g = [], l = a.ga[c + 5], k = a.ga[c + 6];
        d !== l && e !== k && od(h, d, e, a.ga[c + 1], a.ga[c + 2], a.ga[c + 3], a.ga[c + 4], l, k, b * b);
        h.push(new F(l, k));
        for (d = 0;d < g.length;d++) {
          gd(f, g[d].x, g[d].y);
        }
        d = a.ga[c + 5];
        e = a.ga[c + 6];
        break;
      case 3:
        h = g = [];
        l = a.ga[c + 3];
        k = a.ga[c + 4];
        d !== l && e !== k && qd(h, d, e, a.ga[c + 1], a.ga[c + 2], l, k, b * b);
        h.push(new F(l, k));
        for (d = 0;d < g.length;d++) {
          gd(f, g[d].x, g[d].y);
        }
        d = a.ga[c + 3];
        e = a.ga[c + 4];
    }
    c += Fb[a.ga[c]];
  }
  return f;
}
function wd(a) {
  for (var b = 0, c, d = [];b < a.ga.length;) {
    var e = td[a.ga[b]];
    for (c = 0;c < e;c++) {
      d.push(new F(a.ga[b + 1 + 2 * c], a.ga[b + 1 + 2 * c + 1]));
    }
    b += Fb[a.ga[b]];
  }
  return d;
}
function xd(a, b, c, d, e) {
  var f;
  if (2 >= d - c) {
    e.push(a[c]);
  } else {
    var g = a[c], h = a[d - 1], l = 0, k = 0;
    for (f = c + 1;f < d;f++) {
      var n, q = a[f], r = g.x;
      n = g.y;
      var t = q.x, q = q.y, w = h.x - r, v = h.y - n, x = ((t - r) * w + (q - n) * v) / (w * w + v * v);
      1 < x ? x = 1 : 0 > x && (x = 0);
      r = r + x * w - t;
      n = n + x * v - q;
      n = Math.sqrt(r * r + n * n);
      n > l && (l = n, k = f);
    }
    0 < k && l > b ? (xd(a, b, c, k, e), xd(a, b, k, d, e)) : e.push(g);
  }
}
function yd(a, b) {
  var c = [];
  xd(a, b, 0, a.length, c);
  0 < a.length && 0 < c.length && !a[a.length - 1].bc(c[c.length - 1]) && c.push(a[a.length - 1]);
  return c;
}
function zd(a) {
  this.qa = [];
  if (1 === arguments.length) {
    var b = arguments[0];
    if (b instanceof O) {
      this.qa.push(new F(b.x, b.y)), this.qa.push(new F(b.right(), b.y)), this.qa.push(new F(b.right(), b.bottom())), this.qa.push(new F(b.x, b.bottom()));
    } else {
      if (b instanceof Array) {
        this.qa = b;
      } else {
        throw alert("Bad parameter passed to Polygon() constructor."), "Error";
      }
    }
  }
}
zd.prototype = {transform:function(a) {
  for (var b = 0;b < this.qa.length;b++) {
    this.qa[b] = a.apply(this.qa[b].x, this.qa[b].y);
  }
}, add:function(a, b) {
  this.qa.push(new F(a, b));
}, Ib:function(a, b) {
  return rd(this.qa, a, b);
}, clone:function() {
  return new zd(this.qa.slice(0));
}, bc:function(a) {
  if (this.qa.length !== a.qa.length) {
    return !1;
  }
  for (var b = 0;b < this.qa.length;b++) {
    var c = this.qa[b], d = a.qa[b];
    if (c.x !== d.x || c.y !== d.y) {
      return !1;
    }
  }
  return !0;
}, Nb:function(a) {
  for (var b = [], c = 0;c < this.qa.length;c++) {
    var d = this.qa[0 === c ? this.qa.length - 1 : c - 1], e = this.qa[c], f = this.qa[c === this.qa.length - 1 ? 0 : c + 1], g = sb(d.x, d.y, e.x, e.y), h = sb(f.x, f.y, e.x, e.y);
    b.push({x:e.x + ((e.x - d.x) / g + (e.x - f.x) / h) / Math.sqrt(2) * a, y:e.y + ((e.y - d.y) / g + (e.y - f.y) / h) / Math.sqrt(2) * a});
  }
  this.qa = b;
}, na:function(a) {
  if (!(1 > this.qa.length)) {
    a.moveTo(this.qa[0].x, this.qa[0].y);
    for (var b = 1;b < this.qa.length;b++) {
      a.lineTo(this.qa[b].x, this.qa[b].y);
    }
    a.closePath();
  }
}};
function Ad(a, b) {
  function c(a) {
    var b, c, h, l, k;
    b = [];
    c = h = 0;
    for (l = a.length;c < l;c++) {
      k = a[c], a[h + 1] && (b[h] = d(k, a[h + 1])), h += 1;
    }
    return b;
  }
  function d(a, b) {
    return new F(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2);
  }
  return b ? Ad(c(c(function(a) {
    var b, c, h, l, k;
    a = [a[0]].concat(a).concat(a[a.length - 1]);
    k = [];
    b = c = 0;
    for (h = a.length;b < h;b++) {
      l = a[b], k[2 * c] = l, a[c + 1] && (k[2 * c + 1] = d(l, a[c + 1])), c += 1;
    }
    return k;
  }(a))), b - 1) : a;
}
;function Bd(a, b) {
  Cd(this, a, b);
}
function Cd(a, b, c) {
  M.call(a);
  a.Ua = !0;
  a.id = b;
  a.canvas = oc(document.body);
  a.canvas.style.position = "absolute";
  a.canvas.style.border = "none";
  a.ma = a.canvas.getContext("2d");
  a.Mb = c;
  a.width = 32;
  a.height = 500;
  a.canvas.width = a.width;
  a.canvas.height = a.height;
  p(a.canvas).bind("click", function(b) {
    a.qb(b);
  });
  p(a.canvas).bind("mousedown", function(b) {
    a.La(b);
  });
  p(document.body).bind("mousemove", function(b) {
    a.Na(b);
  });
  p(document.body).bind("mouseup", function(b) {
    a.Oa(b);
  });
  p(a.canvas).bind("touchstart", function(b) {
    a.Va(b);
  });
  p(document.body).bind("touchmove", function(b) {
    a.Va(b);
  });
  p(document.body).bind("touchend", function(b) {
    a.Va(b);
  });
  a.$ = null;
  a.Pa = !1;
  a.sa = "#c0c0c0";
  a.oa = "#808080";
  a.borderWidth = 1;
  a.ia = 0;
  a.ba = 100;
  a.la = 10;
  a.position = 5;
  a.format();
}
m = Bd.prototype;
m.log = A("SCROLLBAR", !0);
m.moveTo = function(a, b) {
  this.canvas.style.left = "" + a + "px";
  this.canvas.style.top = "" + b + "px";
};
function Dd(a, b, c) {
  a.width = b;
  a.height = c;
  a.canvas.width = a.width;
  a.canvas.height = c;
  a.format();
  a.na();
}
m.Ma = function() {
  this.canvas.style.display = "none";
};
m.show = function() {
  this.canvas.style.display = "block";
};
m.format = function() {
  var a;
  a = this.Mb ? this.width : this.height;
  var b = this.la / this.ba * a;
  a = (this.position - this.ia) / this.ba * a;
  this.$ = this.Mb ? new O(a, 0, b - 1, this.height - 1) : new O(0, a, this.width - 1, b - 1);
  this.$.x = Math.round(this.$.x) + .5;
  this.$.y = Math.round(this.$.y) + .5;
  this.$.width = Math.round(this.$.width);
  this.$.height = Math.round(this.$.height);
};
m.na = function() {
  this.ma.beginPath();
  this.ma.fillStyle = this.sa;
  this.ma.strokeStyle = this.oa;
  this.ma.lineWidth = this.borderWidth;
  this.ma.rect(this.borderWidth / 2, this.borderWidth / 2, this.width - this.borderWidth, this.height - this.borderWidth);
  this.ma.fill();
  this.ma.stroke();
  this.ma.beginPath();
  this.ma.fillStyle = this.oa;
  this.ma.strokeStyle = "#000000";
  this.ma.rect(this.$.x, this.$.y, this.$.width, this.$.height);
  this.ma.fill();
  this.ma.stroke();
};
function Ed(a, b) {
  var c = p(a.canvas).offset();
  if ("touchstart" === b.type || "touchend" === b.type || "touchmove" === b.type) {
    b = b.changedTouches[0];
  }
  return new F(b.pageX - c.left, b.pageY - c.top);
}
m.Va = function(a) {
  switch(a.type) {
    case "touchstart":
      this.La(a);
      break;
    case "touchend":
      this.Oa(a);
      break;
    case "touchmove":
      this.Na(a);
  }
};
m.qb = function() {
};
function Fd(a, b) {
  var c;
  c = a.Mb ? b.x / a.width * a.ba + a.ia : b.y / a.height * a.ba + a.ia;
  c = Math.min(c, a.ba - a.la + a.ia);
  return c = Math.max(c, a.ia);
}
m.La = function(a) {
  a.preventDefault();
  a = Ed(this, a);
  this.$.Ib(a.x, a.y) ? this.Mb ? (this.offset = a.x - this.$.x, a.x -= this.offset) : (this.offset = a.y - this.$.y, a.y -= this.offset) : (this.position = Fd(this, a), this.offset = 0, this.Mb ? this.$.x = (this.position - this.ia) / this.ba * this.width : this.$.y = (this.position - this.ia) / this.ba * this.height, this.emit("scroll", this.position), this.na());
  this.Pa = !0;
};
m.Na = function(a) {
  this.Pa && (this.Pa && "mousemove" === a.type && ("buttons" in a && 0 === a.buttons || 0 === a.which) ? this.Pa = !1 : (a.preventDefault(), a = Ed(this, a), this.Mb ? a.x -= this.offset : a.y -= this.offset, this.position = Fd(this, a), this.emit("scroll", this.position), this.format(), this.na()));
};
m.Oa = function() {
  this.Pa && (this.Pa = !1);
};
function Gd(a) {
  return a.Mb ? a.height : a.width;
}
Bd.prototype = p.$({}, M.prototype, Bd.prototype);
function Hd(a, b, c, d, e) {
  this.view = a;
  this.ba = b;
  this.Ka = c;
  this.view.Gc = this.ba instanceof Id;
  this.oa = !1;
  this.La(d, e);
}
function Jd(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    b.push(a[c].id);
  }
  return b;
}
Hd.prototype = {log:A("TransformSelectionBehaviour"), Va:function(a) {
  var b;
  if (!this.oa) {
    for (b = 0;b < a.touches.length;) {
      b = a.touches[b];
      b = D(this.view, b.pageX, b.pageY);
      "touchmove" === a.type && this.Na(b.x, b.y, a);
      break;
    }
    for (b = 0;b < a.changedTouches.length;) {
      b = a.changedTouches[b];
      b = D(this.view, b.pageX, b.pageY);
      "touchend" === a.type && this.Oa(b.x, b.y, a);
      break;
    }
  }
}, mc:function(a) {
  this.log("%s scale=%s rotation=%s", a.type, a.scale, a.rotation);
  this.oa = !0;
  var b = this.$.x + this.$.width / 2, c = this.$.y + this.$.height / 2, d = a.scale;
  this.view.vb || (d = 1);
  var e = -a.rotation / 180 * Math.PI;
  if (0 < this.view.ea.get("snap")) {
    var f = Math.PI / 16, e = Math.floor(e / f) * f
  }
  b = (new ld(d, d, b, c)).multiply(new md(e, b, c));
  c = b.inverse();
  for (d = 0;d < this.za.length;d++) {
    Kd(this.za[d], b.multiply(this.la[d]), this.ia[d].multiply(c)), this.za[d].format(this.view.ma, this.view.request);
  }
  this.view.fc = b;
  this.view.na();
  if ("gestureend" === a.type) {
    for (d = 0;d < this.za.length;d++) {
      Kd(this.za[d], this.la[d], this.ia[d]);
    }
    this.view.ya([new R(Jd(this.za), b, b.inverse())]);
    Ld(this);
  }
}, La:function(a, b) {
  this.log("onMouseDown(%s,%s)", a, b);
  this.aa = this.view.Ra(new F(a, b));
  var c = this.za = Md(this.view);
  this.la = [];
  this.ia = [];
  for (var d = 0;d < c.length;d++) {
    this.la.push(S(c[d])), this.ia.push(Nd(c[d]));
  }
  this.$ = new O(this.view.$.x, this.view.$.y, this.view.$.width, this.view.$.height);
  this.sa = fd(this.$).x;
  this.Ca = fd(this.$).y;
}, Na:function(a, b) {
  var c = this, d = this.view.Ra(new F(a, b));
  a = d.x;
  b = d.y;
  for (var d = this.ba.Zc(new F(d.x - this.aa.x, d.y - this.aa.y)), e = d.inverse(), f = 0;f < this.za.length;f++) {
    Kd(this.za[f], d.multiply(this.la[f]), this.ia[f].multiply(e)), this.za[f].format(this.view.ma, this.view.request);
  }
  this.view.fc = d;
  this.ba instanceof Id && (this.view.Hc = a, this.view.Nc = b);
  this.view.na(function() {
    if (c.ba instanceof Id) {
      var d = c.view.ma;
      d.save();
      d.beginPath();
      d.strokeStyle = "#0050B7";
      d.lineWidth = 1 / c.view.scale;
      d.moveTo(c.sa, c.Ca);
      d.lineTo(a, b);
      d.stroke();
      d.restore();
    }
  });
}, Oa:function(a, b) {
  this.log("onMouseUp(%s,%s)", a, b);
  var c = this.view.Ra(new F(a, b));
  a = c.x;
  b = c.y;
  if (c.bc(this.aa)) {
    this.Ka ? (c = this.view.ja.Za(a, b, this.view.Ia)) && c.xd() && (this.log("Didn't move, and has edit mode. Selecting node %s", c.id), this.view.Wa(), this.view.Ea = c) : this.log("Didn't move, but toggleEditNode=false");
  } else {
    for (var c = this.ba.Zc(new F(c.x - this.aa.x, c.y - this.aa.y)), d = 0;d < this.za.length;d++) {
      Kd(this.za[d], this.la[d], this.ia[d]);
    }
    this.view.ya([new R(Jd(this.za), c, c.inverse())]);
  }
  Ld(this);
}, ec:function() {
  this.log("onDoubleClick");
}};
function Ld(a) {
  var b = new P;
  a.view.fc = b;
  a.view.Gc = !0;
  Od(a.view);
  a.view.update(!0);
  J(a.view);
}
;var Pd = A("FitCurve");
function Qd(a) {
  function b(a) {
    x.bezierCurveTo(a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y);
    Pd("Bezier: (%s,%s), (%s,%s), (%s,%s), (%s,%s)", a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y);
  }
  function c(a, b) {
    return a.x * b.x + a.y * b.y;
  }
  function d(a) {
    var b = 1 - a;
    return 3 * a * b * b;
  }
  function e(a) {
    return 3 * a * a * (1 - a);
  }
  function f(a, b) {
    var c = a.x - b.x, d = a.y - b.y;
    return Math.sqrt(c * c + d * d);
  }
  function g(a) {
    return a.x * a.x + a.y * a.y;
  }
  function h(a, b) {
    var c = Math.sqrt(g(a));
    0 !== c && (a.x *= b / c, a.y *= b / c);
    return a;
  }
  function l(a, b, c) {
    void 0 === c && Pd("Undef!");
    c.x = a.x + b.x;
    c.y = a.y + b.y;
  }
  function k(a, b) {
    return {x:a.x + b.x, y:a.y + b.y};
  }
  function n(a, b) {
    return {x:a.x * b, y:a.y * b};
  }
  function q(a, b) {
    return {x:a.x - b.x, y:a.y - b.y};
  }
  function r(a, b, g, r, t) {
    var w, v = [], x, B = [[], []], Q = [], ga, V;
    V = [{}, {}, {}, {}];
    x = b - 0 + 1;
    for (w = 0;w < x;w++) {
      ga = {x:r.x, y:r.y};
      var ha = {x:t.x, y:t.y};
      h(ga, d(g[w]));
      h(ha, e(g[w]));
      v[w] = [ga, ha];
    }
    B[0][0] = 0;
    B[0][1] = 0;
    B[1][0] = 0;
    B[1][1] = 0;
    Q[0] = 0;
    for (w = Q[1] = 0;w < x;w++) {
      B[0][0] += c(v[w][0], v[w][0]), B[0][1] += c(v[w][0], v[w][1]), B[1][0] = B[0][1], B[1][1] += c(v[w][1], v[w][1]), ga = 1 - g[w], ha = g[w], ga = q(a[0 + w], k(n(a[0], ga * ga * ga), k(n(a[0], d(g[w])), k(n(a[b], e(g[w])), n(a[b], ha * ha * ha))))), Q[0] += c(v[w][0], ga), Q[1] += c(v[w][1], ga);
    }
    g = B[0][0] * B[1][1] - B[1][0] * B[0][1];
    w = B[0][0] * Q[1] - B[0][1] * Q[0];
    Q = Q[0] * B[1][1] - Q[1] * B[0][1];
    0 === g && (g = B[0][0] * B[1][1] * 1E-11);
    B = Q / g;
    Q = w / g;
    if (0 > B || 0 > Q) {
      return B = f(a[b], a[0]) / 3, V[0] = a[0], V[3] = a[b], l(V[0], h(r, B), V[1]), l(V[3], h(t, B), V[2]), V;
    }
    V[0] = a[0];
    V[3] = a[b];
    l(V[0], h(r, B), V[1]);
    l(V[3], h(t, Q), V[2]);
    return V;
  }
  function t(a, b, c) {
    var d, e;
    e = [];
    for (d = 0;d <= a;d++) {
      e[d] = {x:b[d].x, y:b[d].y};
    }
    for (d = 1;d <= a;d++) {
      for (b = 0;b <= a - d;b++) {
        e[b].x = (1 - c) * e[b].x + c * e[b + 1].x, e[b].y = (1 - c) * e[b].y + c * e[b + 1].y;
      }
    }
    return e[0];
  }
  function w(a) {
    var b = Math.sqrt(Math.sqrt(g(a)));
    0 !== b && (a.x /= b, a.y /= b);
    return a;
  }
  function v(a, b, c, d) {
    var e, f, h, k = (b - 0 + 1) / 2;
    f = 0;
    for (e = 1;e < b;e++) {
      h = t(3, c, d[e - 0]), h = q(h, a[e]), h = g(h), h >= f && (f = h, k = e);
    }
    return {sf:f, hg:k};
  }
  var x = new sd;
  x.moveTo(a[0].x, a[0].y);
  (function(a, c, d) {
    var e;
    e = q(a[1], a[0]);
    e = w(e);
    var g = c - 1, g = q(a[g - 1], a[g]), g = w(g);
    a: {
      c = c - 1;
      var k, n;
      k = [{}, {}, {}, {}];
      if (2 === c - 0 + 1) {
        d = f(a[c], a[0]) / 3, k[0] = a[0], k[3] = a[c], l(k[0], h(e, d), k[1]), l(k[3], h(g, d), k[2]), b(k);
      } else {
        var x = [0];
        for (n = 1;n <= c;n++) {
          x[n - 0] = x[n - 0 - 1] + f(a[n], a[n - 1]);
        }
        for (n = 1;n <= c;n++) {
          x[n - 0] /= x[c - 0];
        }
        k = r(a, c, x, e, g);
        n = v(a, c, k, x).sf;
        if (n < d) {
          b(k);
        } else {
          for (;;) {
            d = a;
            n = c;
            for (var B = void 0, Q = [], Q = [], B = 0;B <= n;B++) {
              for (var ga = Q, V = B - 0, ha = k, lc = d[B], mc = x[B - 0], ya = [], nc = [], yb = void 0, E = void 0, id = void 0, E = void 0, yb = t(3, ha, mc), E = 0;2 >= E;E++) {
                ya[E] = {}, ya[E].x = 3 * (ha[E + 1].x - ha[E].x), ya[E].y = 3 * (ha[E + 1].y - ha[E].y);
              }
              for (E = 0;1 >= E;E++) {
                nc[E] = {}, nc[E].x = 2 * (ya[E + 1].x - ya[E].x), nc[E].y = 2 * (ya[E + 1].y - ya[E].y);
              }
              E = t(2, ya, mc);
              id = t(1, nc, mc);
              ga[V] = mc - ((yb.x - lc.x) * E.x + (yb.y - lc.y) * E.y) / (E.x * E.x + E.y * E.y + (yb.x - lc.x) * id.x + (yb.y - lc.y) * id.y);
            }
            d = Q;
            k = r(a, c, d, e, g);
            v(a, c, k, d);
            b(k);
            break a;
          }
        }
      }
    }
  })(a, a.length, 25);
  return x;
}
;function Rd(a, b, c, d, e, f) {
  var g = this;
  this.view = a;
  this.nodeType = b;
  this.fa = c;
  this.width = d;
  this.height = e;
  this.$ = f;
  this.state = "initial";
  this.node = this.aa = null;
  this.ba = function() {
  };
  "rectangle-tl" === f && (this.ba = function(a) {
    a.lineWidth = 1 / g.view.scale;
    a.strokeStyle = "#ccc";
    a.beginPath();
    a.rect(g.start.x, g.start.y, g.end.x - g.start.x, g.end.y - g.start.y);
    a.stroke();
  });
}
Rd.prototype = {log:A("DrawShape"), Bb:function() {
  this.log("Entering DrawShapeBehaviour");
  this.view.canvas.style.cursor = "crosshair";
}, Gb:function() {
  this.log("Leaving DrawShapeBehaviour");
  this.node && (this.view.ja.removeNode(this.node), this.view.update(), this.node = null);
}, pb:function(a) {
  "cancel" === a && J(this.view);
}, Va:function(a) {
  var b;
  "touchstart" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.La(b.x, b.y)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Na(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Oa(b.x, b.y, a));
}, La:function(a, b) {
  "initial" === this.state && (this.start = this.view.Ra(new F(a, b)), this.state = "predraw", this.log("initial -> predraw"));
}, Na:function(a, b, c) {
  a = this.view.Ra(new F(a, b));
  "predraw" === this.state && 10 < this.start.lb(a) && (Sd(this), this.state = "drawing", this.log("predraw -> drawing"));
  "drawing" === this.state && (this.transform(this.start, a, c.ctrlKey), this.end = a, this.view.update(!1, this.ba));
}, Oa:function(a, b, c) {
  "predraw" === this.state ? (Sd(this), this.transform(this.start, null, c.ctrlKey), this.ya(), this.view.ea.get("autoPickTool") && J(this.view), this.state = "initial") : "drawing" === this.state && (this.transform(this.start, this.view.Ra(new F(a, b)), c.ctrlKey), this.ya(), this.view.ea.get("autoPickTool") && J(this.view), this.state = "initial");
}, transform:function(a, b, c) {
  var d, e;
  if (b) {
    if ("circle" === this.$) {
      d = a, a = a.lb(b), e = 2 * a / this.width, a = 2 * a / this.height;
    } else {
      if ("rectangle-tl" === this.$) {
        a = a.clone(), b = b.clone(), a.x > b.x && (e = a.x, a.x = b.x, b.x = e), a.y > b.y && (e = a.y, a.y = b.y, b.y = e), d = a, e = (b.x - a.x) / this.width, a = (b.y - a.y) / this.height;
      } else {
        e = [a, b];
        if (0 === e.length) {
          d = new F(0, 0);
        } else {
          d = e[0].x;
          for (var f = e[0].y, g = 1;g < e.length;g++) {
            d += e[g].x, f += e[g].y;
          }
          d = new F(d / e.length, f / e.length);
        }
        e = (b.x - a.x) / this.width;
        a = (b.y - a.y) / this.height;
      }
    }
  } else {
    d = a, a = e = 1;
  }
  c && (a = e = Math.min(e, a));
  c = new I(d.x, d.y);
  c = c.multiply(new ld(e, a));
  Kd(this.node, c, c.inverse());
  Td(this.view.ja, this.node.id);
}, ya:function() {
  this.fa.matrix = S(this.node);
  this.fa.inverse = Nd(this.node);
  this.view.ja.removeNode(this.node);
  this.node = null;
  this.view.ya([new H(this.nodeType, this.fa)]);
}, wb:function(a) {
  jb.prototype.wb.call(this, a);
  this.fa[a.fd ? "fillStyle" : "strokeStyle"] = a.Ta;
}, Ob:function(a, b) {
  jb.prototype.Ob.call(this, a, b);
  var c = b ? "fillStyle" : "strokeStyle", d = uc(this.fa[c]);
  this.fa[c] = d;
}, Lb:function() {
  return this.$;
}};
function Sd(a) {
  a.node = Ud(a.nodeType, a.view.ja.cb, a.view.ja);
  Vd(a.node, a.fa);
  Wd(a.view.ja, a.node);
}
;function Xd(a) {
  this.view = a;
  this.ba = !1;
  this.aa = this.$ = null;
  this.la = a.ea.get("multilineText");
  this.ia = "normal";
  a.ea.get("iPadNoScrollText") && null !== navigator.userAgent.match(/iPad/i) && (this.ia = "top");
}
Xd.prototype = {log:A("Text"), Bb:function() {
  this.log("Entering text mode");
  this.view.canvas.style.cursor = "text";
}, Gb:function() {
  this.ba && Yd(this);
  this.view.canvas.style.cursor = "default";
  this.log("Leaving text mode");
  this.$ && (this.$.parentNode.removeChild(this.$), this.$ = null);
}, Va:function(a) {
  for (var b = 0;b < a.touches.length;b++) {
    var c = a.touches[b], c = D(this.view, c.pageX, c.pageY);
    "touchstart" === a.type && this.La(c.x, c.y, a);
  }
}, La:function(a, b) {
  if (this.ba && (this.log("Editing somewhere else on mousedown; submit that first."), Yd(this), this.view.ea.get("autoPickTool"))) {
    J(this.view);
    return;
  }
  var c = this.view.ja.Za(a, b, this.view.Ia);
  Zd(this, c, a, b);
}, Na:function() {
}, pb:function(a) {
  this.log("keyboard: %s", a);
  "cancel" === a && null === this.$ && (J(this.view), this.view.nb.emit("goto-toolbar"));
}, wb:function(a) {
  this.log("Set text colour to %s", a.Ta);
  this.view.setProperty("textFillStyle", a.Ta);
}, Ob:function(a, b) {
  $d(this.view, a, b);
}, Lb:function() {
  return "text";
}};
function Yd(a) {
  var b = a.$.value;
  ae(a);
  if (a.Ea && a.Ea.wa("text") === b) {
    a.log("Text was not changed.");
  } else {
    if (null === a.Ea && "" === b) {
      a.log("No text entered.");
    } else {
      if (a.Ea) {
        a.log("Update text in node %s", a.Ea.id), a.view.ya([new be([a.Ea.id], "text", b)]);
      } else {
        a.log("Create new text node.");
        var c = a.view.ja.cb, d = new I(a.aa.x, a.aa.y + a.view.ua.fontSize);
        a.view.ya([new H("TextNode", {text:b, fontSize:a.view.ua.fontSize, fontName:a.view.ua.fontName, bold:a.view.ua.bold, italic:a.view.ua.italic, textFillStyle:a.view.ua.textFillStyle, strokeStyle:a.view.ua.textStrokeStyle, lineWidth:a.view.ua.textLineWidth, layer:a.view.Ia, wrap:a.view.ea.get("multilineText")}), new R([c], d, d.inverse())]);
      }
    }
  }
}
function ae(a) {
  a.$ && (a.$.parentNode.removeChild(a.$), a.view.ta.emit("edit-text-hidden"));
  a.$ = null;
  a.ba = !1;
  a.Ea && (a.Ea.Jc(!1), a.view.na());
}
function Zd(a, b, c, d) {
  function e() {
    a.$ && (a.log("Set editBox height to %s", "" + a.$.scrollHeight + "px"), a.$.style.height = "" + a.$.scrollHeight + "px", a.$.style.width = "" + a.$.scrollWidth + "px");
    n = null;
  }
  var f, g, h, l, k = 0;
  b && "TextNode" === b.type() || b && "PathNode" === b.type() && a.view.ea.get("allowTextInShape") ? (a.Ea = b, "top" !== a.ia && "TextNode" === b.type() && a.Ea.Jc(!0), a.view.na(), a.aa = new F(b.rect.x, b.rect.y), f = b.wa("fontName"), g = b.wa("fontSize"), h = b.wa("bold"), l = b.wa("italic"), k = b.hb().width * a.view.scale, k = Math.max(k, 200)) : (a.Ea = null, a.aa = new F(c, d), f = a.view.ua.fontName, g = a.view.ua.fontSize, h = a.view.ua.bold, l = a.view.ua.italic);
  a.$ = document.createElement("textarea");
  b = p(a.$).height();
  k && (a.$.style.width = "" + k + "px");
  k = ce(a.view, a.aa.x, a.aa.y);
  a.$.style.position = "absolute";
  a.$.style.fontFamily = f;
  a.$.style.fontSize = "" + g * a.view.scale + "px";
  a.$.style.overflow = "auto";
  a.$.style.fontWeight = h ? "bold" : "normal";
  a.$.style.fontStyle = l ? "italic" : "normal";
  a.$.style.zIndex = a.view.kc() + 1;
  "top" === a.ia ? (f = p(a.view.canvas).offset(), g = p(a.view.canvas).width(), k = p(a.$).width(), a.$.style.left = "" + (f.left + g / 2 - k / 2) + "px", a.$.style.top = "" + f.top + "px") : (a.$.style.left = "" + Math.round(k.x) + "px", a.$.style.top = "" + Math.round(k.y) + "px");
  a.$.style.WebkitTransitionDuration = "0";
  a.$.style.MozTransitionDuration = "0";
  a.$.style.ba = "0";
  a.$.style.aa = "0";
  a.$.style.transitionDuration = "0";
  document.body.appendChild(a.$);
  a.ba = !0;
  a.aa = new F(c, d + b);
  a.Ea && (a.$.value = a.Ea.wa("text"));
  var n = null, n = setTimeout(e, 0);
  p(a.$).bind("keydown", function(b) {
    27 === b.keyCode && a.la || 13 === b.keyCode && (b.shiftKey || !a.la) ? (a.log("Enter pressed. create text."), Yd(a), a.view.Da.bb && de(a.view), a.view.nb.wd("goto-canvas"), a.view.ea.get("autoPickTool") && J(a.view)) : 27 === b.keyCode ? (a.log("ESC pressed; cancel."), ae(a), J(a.view), a.view.nb.emit("goto-toolbar")) : 13 === b.keyCode && (n || (n = setTimeout(e, 0)));
  });
  setTimeout(function() {
    a.$ && a.$.focus();
  }, 200);
  a.$.focus();
  a.view.ta.emit("edit-text-shown", a.$);
}
;function ee(a, b, c, d) {
  this.node = a;
  this.va = b;
  this.$ = c;
  this.origin = d;
  a = this.va.apply(c.x, c.y);
  this.x = a.x;
  this.y = a.y;
}
ee.prototype = {Zc:function(a) {
  var b = 1, c = 1, d = this.va.inverse(), e = d.apply(this.x + a.x, this.y + a.y);
  a = new F(this.$.x - this.origin.x, this.$.y - this.origin.y);
  e = new F(e.x - this.origin.x, e.y - this.origin.y);
  e = (e.x * a.x + e.y * a.y) / (a.x * a.x + a.y * a.y);
  0 !== a.x && 0 !== a.y ? c = b = e : 0 !== a.x ? b = e : c = e;
  return this.va.multiply(new ld(b, c, this.origin.x, this.origin.y)).multiply(d);
}};
function Id(a, b, c, d, e) {
  this.node = a;
  this.va = b;
  this.origin = this.va.apply(d.x, d.y);
  a = this.va.apply(c.x, c.y);
  this.x = a.x;
  this.y = a.y;
  this.aa = Math.atan2(this.y - this.origin.y, this.x - this.origin.x);
  this.$ = e;
}
Id.prototype = {log:A("RotationSelHandle"), Zc:function(a) {
  a = Math.atan2(this.y + a.y - this.origin.y, this.x + a.x - this.origin.x) - this.aa;
  if (this.$) {
    var b = Math.PI / 16;
    a = Math.floor(a / b) * b;
  }
  return new md(-a, this.origin.x, this.origin.y);
}};
function fe(a, b) {
  this.node = a;
  this.va = b;
  this.y = this.x = 0;
}
fe.prototype = {Zc:function(a) {
  return new I(a.x, a.y);
}};
function ge() {
  this.text = "";
  this.font = "10px Arial";
  this.la = "Arial";
  this.fontSize = 10;
  this.$ = [];
  this.rect = new O(0, 0, 0, this.fontSize);
  this.ba = "left";
  this.aa = "top";
  this.oa = this.ia = !1;
}
m = ge.prototype;
m.log = A("TextBox");
function he(a, b, c) {
  switch(b) {
    case "left":
    ;
    case "centre":
    ;
    case "right":
      a.aa = b;
      break;
    case null:
      break;
    default:
      a.log("Unknnown alignment: %s", b);
  }
  switch(c) {
    case "top":
    ;
    case "middle":
    ;
    case "bottom":
      a.ba = c;
      break;
    case null:
      break;
    default:
      a.log("Unknnown alignment: %s", c);
  }
}
m.format = function(a, b, c) {
  this.font = "" + this.fontSize + 'px "' + this.la + '"';
  this.ia && (this.font = "bold " + this.font);
  this.oa && (this.font = "italic " + this.font);
  this.$.length = 0;
  var d, e;
  a.font = this.font;
  var f = 0;
  this.rect.width = 0;
  if (0 === b) {
    var g = this.text.split("\n");
    for (d = 0;d < g.length;d++) {
      var h = g[d];
      e = a.measureText(h).width;
      f += this.fontSize;
      this.$.push({x:0, y:f, width:e, text:h});
      this.rect.width = Math.max(this.rect.width, e);
    }
  } else {
    var h = g = 0, l = !1;
    for (d = 0;d < this.text.length;d++) {
      var k = this.text.charAt(d);
      e = a.measureText(this.text.substr(g, d - g + 1)).width;
      "\n" === k ? l = !0 : e > b ? h ? (d = h, l = !0) : d > g && (--d, l = !0) : " " === k && (h = d);
      l && (e = " " === this.text.charAt(d) ? a.measureText(this.text.substr(g, d - g)).width : a.measureText(this.text.substr(g, d - g + 1)).width, f += this.fontSize, this.$.push({x:0, y:f, width:e, text:this.text.substr(g, d - g + 1)}), g = d + 1, h = 0, l = !1, this.rect.width = Math.max(this.rect.width, e));
    }
    e && (f += this.fontSize, this.$.push({x:0, y:f, width:e, text:this.text.substr(g, d - g)}), this.rect.width = Math.max(this.rect.width, e));
  }
  this.rect.x = 0;
  this.rect.y = 0;
  this.rect.height = f;
  if ("centre" === this.aa) {
    for (d = 0;d < this.$.length;d++) {
      a = this.$[d], a.x = this.rect.width / 2 - a.width / 2;
    }
  } else {
    if ("right" === this.aa) {
      for (d = 0;d < this.$.length;d++) {
        a = this.$[d], a.x = this.rect.width - a.width;
      }
    }
  }
  b && "centre" === this.aa ? this.rect.x = b / 2 - this.rect.width / 2 : b && "right" === this.aa && (this.rect.x = b - this.rect.width);
  c && "middle" === this.ba ? this.rect.y = c / 2 - this.rect.height / 2 : c && "bottom" === this.ba && (this.rect.y = c - this.rect.height);
};
m.na = function(a, b, c) {
  this.fillText(a, b, c);
};
m.fillText = function(a, b, c) {
  a.textBaseline = "alphabetic";
  a.font = this.font;
  for (var d = 0;d < this.$.length;d++) {
    var e = this.$[d];
    a.fillText(e.text, this.rect.x + e.x + b, this.rect.y + e.y + c);
  }
};
m.strokeText = function(a, b, c) {
  a.textBaseline = "alphabetic";
  a.font = this.font;
  for (var d = 0;d < this.$.length;d++) {
    var e = this.$[d];
    a.strokeText(e.text, this.rect.x + e.x + b, this.rect.y + e.y + c);
  }
};
function ie(a, b) {
  je(this, a, b, ie);
}
var ke = {fillStyle:"#cccccc", strokeStyle:"#000000", lineWidth:2, shadow:!1};
ie.prototype = {log:A("BaseNode"), clip:function() {
}, xd:function() {
  return !1;
}, zd:function() {
  return null;
}, vd:function() {
}, yd:function() {
  return "text" in this.fa;
}, clone:function(a) {
  a = new this.constructor(a(), this.ja);
  Vd(a, le(this));
  return a;
}, type:function() {
  return "BaseNode";
}, setProperty:function(a, b) {
  if (a in this.fa || "tag" === a || "locked" === a || "lockSize" === a) {
    this.fa[a] = b;
  }
}, wa:function(a) {
  return this.fa[a];
}, hb:function() {
  return this.rect;
}, Pd:function() {
  return new zd(this.rect);
}, kc:function() {
  return this.wa("zIndex") || 0;
}, transform:function(a, b) {
  this.fa.matrix = a.multiply(this.fa.matrix);
  this.fa.inverse = this.fa.inverse.multiply(b);
}, format:function() {
}, Za:function(a, b) {
  var c = Nd(this).apply(a, b);
  return this.oa || this.wa("locked") || !this.Eb.Ib(c.x, c.y) ? null : this;
}, Jc:function(a) {
  this.oa = a;
}, qc:function() {
}, Xd:function() {
}, Zd:function() {
}, na:function(a) {
  a.save();
  var b = this.fa.matrix;
  a.transform(b.m11, b.m21, b.m12, b.m22, b.Aa, b.Ba);
  "erase" === this.fa.strokeStyle ? (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out") : a.strokeStyle = this.fa.strokeStyle;
  a.fillStyle = this.fa.fillStyle;
  a.lineWidth = this.fa.lineWidth;
  this.fa.shadow && (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
  this.Xb(a);
  a.restore();
}, Xb:function() {
}};
function Kd(a, b, c) {
  a.fa.matrix = b;
  a.fa.inverse = c;
}
function Nd(a) {
  return a.fa.inverse;
}
function S(a) {
  return a.fa.matrix;
}
function me(a) {
  return null !== a.parent && null !== a.parent.parent && "PageNode" !== a.parent.type();
}
function ne(a) {
  return void 0 !== a.children;
}
function oe(a) {
  return (a = a.wa("layer")) ? "" + a : "default";
}
function Vd(a, b) {
  for (var c in b) {
    b.hasOwnProperty(c) && a.setProperty(c, b[c]);
  }
}
function le(a) {
  var b = {}, c;
  for (c in a.fa) {
    a.fa.hasOwnProperty(c) && (b[c] = a.wa(c));
  }
  return b;
}
function pe(a, b) {
  for (var c in b) {
    b.hasOwnProperty(c) && (a.fa[c] = b[c]);
  }
}
function je(a, b, c, d) {
  a.id = b;
  a.ja = c;
  a.fa = {};
  pe(a, ke);
  a.rect = new O(0, 0, 1, 1);
  a.fa.matrix = new P;
  a.fa.inverse = new P;
  a.fa.layer = "default";
  a.parent = null;
  a.constructor = d;
  a.oa = !1;
  a.Eb = new O(0, 0, 1, 1);
}
var qe = {};
function re(a, b) {
  b.prototype = p.$({}, ie.prototype, b.prototype);
  qe[a] = b;
}
function Ud(a, b, c) {
  return a in qe ? new qe[a](b, c) : null;
}
;function se(a, b) {
  je(this, a, b, se);
  this.parent = null;
  this.children = [];
}
m = se.prototype;
m.type = function() {
  return "GroupNode";
};
m.clone = function(a) {
  for (var b = new se(a(), this.ja), c = 0;c < this.children.length;c++) {
    var d = this.children[c].clone(a);
    d.parent = b;
    b.children.push(d);
  }
  return b;
};
m.format = function(a, b) {
  for (var c = 0;c < this.children.length;c++) {
    this.children[c].format(a, b), 0 === c ? this.rect = this.children[c].rect.clone() : hd(this.rect, this.children[c].rect);
  }
};
m.na = function(a) {
  for (var b = 0;b < this.children.length;b++) {
    this.children[b].na(a);
  }
};
m.Za = function(a, b) {
  for (var c = this.children.length - 1;0 <= c;c--) {
    var d = this.children[c].Za(a, b);
    if (d) {
      return d;
    }
  }
  return null;
};
function te(a, b) {
  for (var c = 0;c < a.children.length;c++) {
    if (b === a.children[c]) {
      return c;
    }
  }
  return -1;
}
Rc(ie.prototype, se.prototype);
re("GroupNode", se);
function ue(a, b) {
  je(this, a, b, ue);
  this.children = [];
}
ue.prototype = {log:A("PAGE", !0), type:function() {
  return "PageNode";
}, format:function() {
}, Za:function() {
  return null;
}, na:function() {
}};
Rc(se.prototype, ue.prototype);
re("PageNode", ue);
function ve(a, b) {
  je(this, a, b, ve);
  this.log("New BrushNode created.");
  this.fa.points = [];
  this.fa.strokeStyle = "#ff00ff";
  this.fa.lineWidth = 10;
  this.qa = [];
  this.ia = [];
  this.inverse = null;
}
ve.prototype = {log:A("BRUSH", !0), type:function() {
  return "BrushNode";
}, setProperty:function(a, b) {
  "fillStyle" === a && (a = "strokeStyle");
  if (a in this.fa || "dashes" === a) {
    this.fa[a] = b;
  }
}, wa:function(a) {
  "fillStyle" === a && (a = "strokeStyle");
  return ie.prototype.wa.call(this, a);
}, format:function() {
  var a, b, c, d;
  this.qa.length = 0;
  b = this.fa.points;
  a = c = 0;
  for (d = b.length - 1;c <= d;a = c += 2) {
    this.qa.push(new F(b[a], b[a + 1]));
  }
  a = ed(this.qa);
  this.Eb = a.clone();
  a.Nb(this.fa.lineWidth + 3, this.fa.lineWidth + 3);
  a = new zd(a);
  a.transform(this.fa.matrix);
  this.rect = ed(a.qa);
  this.inverse = this.fa.matrix.inverse();
  this.ia = [];
  if ("dashes" in this.fa) {
    for (b = this.fa.dashes.split(","), a = 0;a < b.length;a++) {
      c = parseFloat(b[a]), isNaN(c) || this.ia.push(c);
    }
  }
}, Za:function(a, b) {
  var c;
  if (this.rect.Ib(a, b)) {
    c = this.inverse.apply(a, b);
    var d;
    a: {
      d = this.qa;
      var e = c.x;
      c = c.y;
      for (var f = this.fa.lineWidth / 2, f = f * f, g = 1;g < d.length;g++) {
        var h = d[g - 1].x, l = d[g - 1].y, k = d[g].x - h, n = d[g].y - l, q = ((e - h) * k + (c - l) * n) / (k * k + n * n);
        1 < q ? q = 1 : 0 > q && (q = 0);
        h = h + q * k - e;
        l = l + q * n - c;
        if (h * h + l * l <= f) {
          d = !0;
          break a;
        }
      }
      d = !1;
    }
    if (d) {
      return this;
    }
  }
  return null;
}, Xb:function(a) {
  var b, c, d, e;
  c = this.fa.points;
  if (0 !== c.length) {
    a.save();
    a.beginPath();
    a.lineCap = "round";
    a.lineJoin = "round";
    if (1 < this.ia.length) {
      if (b = this.qa, d = this.ia, 0 !== b.length) {
        a.moveTo(b[0].x, b[0].y);
        e = 0;
        for (var f = 1, g = d[0], h = b[0].clone(), l;f < b.length;) {
          l = h.lb(b[f]), 0 === l ? f += 1 : l <= g ? (h = b[f].clone(), e & 1 ? a.moveTo(h.x, h.y) : a.lineTo(h.x, h.y), g -= l, f += 1) : (h.x += (b[f].x - h.x) * g / l, h.y += (b[f].y - h.y) * g / l, e & 1 ? a.moveTo(h.x, h.y) : a.lineTo(h.x, h.y), e = (e + 1) % d.length, g = d[e]);
        }
      }
    } else {
      for (a.moveTo(c[0], c[1]), b = d = 2, e = c.length - 1;d <= e;b = d += 2) {
        a.lineTo(c[b], c[b + 1]);
      }
    }
    a.stroke();
    if (we) {
      a.beginPath();
      b = d = 0;
      for (e = c.length - 1;d <= e;b = d += 2) {
        a.rect(c[b] - 2, c[b + 1] - 2, 4, 4);
      }
      a.fillStyle = "#ff0000";
      a.fill();
    }
    a.restore();
  }
}};
var we = !1;
re("BrushNode", ve);
function xe(a, b, c, d) {
  this.zb = c;
  this.view = a;
  this.ba = d;
  this.Pa = !1;
  this.Ud = !0;
  this.$ = [];
  this.ia = {};
}
xe.prototype = {log:A("Brush"), Bb:function() {
  this.view.canvas.style.cursor = "crosshair";
}, reset:function() {
  this.Pa = !1;
  this.$ = [];
  this.ia = {};
}, cd:function(a) {
  this.zb.strokeStyle = a;
}, Va:function(a) {
  var b, c, d, e, f;
  if ("touchstart" === a.type) {
    for (f = a.changedTouches, d = 0, e = f.length;d < e;d++) {
      c = f[d], a = D(this.view, c.pageX, c.pageY), this.$.push([a]), c.identifier && (this.ia[c.identifier] = this.$[this.$.length - 1]);
    }
  } else {
    if ("touchmove" === a.type) {
      f = a.changedTouches;
      d = 0;
      for (e = f.length;d < e;d++) {
        c = f[d];
        a = D(this.view, c.pageX, c.pageY);
        if (c.identifier) {
          c.identifier in this.ia ? b = this.ia[c.identifier] : (b = [a], this.$.push(b), this.ia[c.identifier] = b);
        } else {
          c = a;
          var g = b = void 0, h = void 0;
          b = null;
          for (h = 0;h < this.$.length;h++) {
            var l = this.$[h], k = l[l.length - 1].lb(c);
            if (null === b || k < g) {
              b = l, g = k;
            }
          }
        }
        b ? a.x === b[b.length - 1].x && a.y === b[b.length - 1].y || b.push(a) : this.log("WARNING: Can't find path for touch!");
      }
      this.view.na();
    } else {
      "touchend" === a.type && 0 === a.touches.length && this.ya();
    }
  }
}, La:function(a, b) {
  var c;
  c = this.view.Ra(new F(a, b));
  this.Pa = !0;
  this.$.push([c]);
}, Yd:function(a) {
  var b, c, d, e, f, g, h, l = ye(this.view);
  "erase" === this.zb.strokeStyle ? (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out") : a.strokeStyle = this.zb.strokeStyle;
  a.lineCap = "round";
  a.lineJoin = "round";
  a.lineWidth = this.zb.lineWidth;
  a.beginPath();
  g = this.$;
  d = 0;
  for (f = g.length;d < f;d++) {
    for (c = g[d], a.moveTo(c[0].x, c[0].y), b = e = 1, h = c.length - 1;e <= h;b = e += 1) {
      b = c[b], a.lineTo(b.x, b.y);
    }
  }
  a.stroke();
  a.globalCompositeOperation = "source-over";
  l && a.restore();
}, Na:function(a, b) {
  var c;
  "freehand" === this.ba ? c = new F(a, b) : c = this.view.Ra(new F(a, b));
  this.Pa && (this.aa = this.$[0][this.$[0].length - 1], c.x !== this.aa.x || c.y !== this.aa.y) && (this.$[0].push(c), this.view.na());
}, Oa:function(a, b) {
  this.Na(a, b);
  this.Pa = !1;
  this.ya();
}, ya:function() {
  var a, b, c, d, e, f, g, h, l, k;
  a = [];
  l = this.$;
  var n = this.view.ja.cb;
  f = 0;
  for (h = l.length;f < h;f++) {
    if (e = l[f], "brush" === this.ba) {
      if (c = [], 1 === e.length && e.push(new F(e[0].x + .1, e[0].y + .1)), 1 < e.length) {
        d = b = 0;
        for (g = e.length - 1;b <= g;d = b += 1) {
          c.push(e[d].x), c.push(e[d].y);
        }
        a.push(new H("BrushNode", p.$({points:c, layer:this.view.Ia}, this.zb)));
      }
    } else {
      if ("shapebrush" === this.ba) {
        e = yd(e, 20);
        c = e;
        g = k = b = e = k = d = void 0;
        if (!(3 > c.length)) {
          e = c[0];
          b = c[c.length - 1];
          g = 40 > e.lb(b);
          for (d = 0;d < c.length;d++) {
            var q = c[d];
            for (k = d + 1;k < c.length;k++) {
              var r = c[k];
              20 > Math.abs(q.x - r.x) ? r.x = q.x : 20 > Math.abs(q.y - r.y) && (r.y = q.y);
            }
          }
          q = fd(ed(c));
          for (d = 0;d < c.length;d++) {
            k = c[d], 20 > Math.abs(k.x - q.x) && (k.x = q.x), 20 > Math.abs(k.y - q.y) && (k.y = q.y);
          }
          g && (e.x = b.x, e.y = b.y);
        }
        e = c;
      } else {
        if ("freehand" === this.ba) {
          c = e, c = yd(c, 2), c = Ad(c, 4), e = c = yd(c, .5);
        } else {
          if ("quadratic" === this.ba) {
            e = yd(e, 10);
            b = Qd(e);
            c = b.ga[1];
            d = b.ga[2];
            k = b.ga[4];
            g = b.ga[5];
            e = b.ga[8];
            b = b.ga[9];
            k = ((3 * k - c) / 2 + (3 * k - e) / 2) / 2;
            g = ((3 * g - d) / 2 + (3 * g - b) / 2) / 2;
            q = new sd;
            q.moveTo(c, d);
            q.quadraticCurveTo(k, g, e, b);
            e = q;
            c = new ze;
            d = 0;
            for (e = e.ga;d < e.length;) {
              switch(e[d]) {
                case Bb:
                  c.moveTo(e[d + 1], e[d + 2]);
                  break;
                case Cb:
                  c.lineTo(e[d + 1], e[d + 2]);
                  break;
                case 2:
                  b = c;
                  g = e[d + 1];
                  k = e[d + 2];
                  var q = e[d + 3], r = e[d + 4], t = e[d + 5], w = e[d + 6];
                  b.ga.push(4);
                  b.ga.push(t);
                  b.ga.push(w);
                  b.ga.push(g);
                  b.ga.push(k);
                  b.ga.push(q);
                  b.ga.push(r);
                  break;
                case 3:
                  b = c;
                  g = e[d + 1];
                  k = e[d + 2];
                  q = e[d + 3];
                  r = e[d + 4];
                  b.ga.push(2);
                  b.ga.push(q);
                  b.ga.push(r);
                  b.ga.push(g);
                  b.ga.push(k);
                  break;
                case Eb:
                  c.close();
              }
              d += Fb[e[d]];
            }
            c = c.ga;
            a.push(new H("PathNode", p.$({commands:c, fillStyle:this.view.Xa, sloppiness:0, layer:this.view.Ia}, this.zb)));
            continue;
          }
        }
      }
      if (1 < e.length) {
        c = new ze;
        c.moveTo(e[0].x, e[0].y);
        b = e[0].bc(e[e.length - 1]);
        d = g = 1;
        for (k = e.length - 1;g <= k;d = g += 1) {
          c.lineTo(e[d].x, e[d].y);
        }
        b && c.close();
        a.push(new H("PathNode", p.$({commands:c.Hb(), fillStyle:this.view.Xa, sloppiness:0, layer:this.view.Ia}, this.zb)));
      }
    }
  }
  this.view.ya(a);
  a.length && "quadratic" === this.ba ? (this.view.Wa(), T(this.view), a = U(this.view.ja, n), this.view.Ea = a, J(this.view)) : (this.view.Wa(), T(this.view), this.reset());
}, Gb:function() {
  this.view.canvas.style.cursor = "default";
  this.view.na();
}, wb:function(a) {
  this.view.fb = a.Ta;
  this.zb.strokeStyle = a.Ta;
  this.view.Xa = a.Ta;
}, Ob:function(a) {
  this.view.fb = uc(this.view.fb, a);
  this.zb.strokeStyle = uc(this.zb.strokeStyle, a);
  this.view.Xa = this.view.fb;
}, pb:function(a) {
  this.log("keyboard: %s", a);
  "cancel" === a && (this.log("ESC pressed. Abort brush and go back to toolbar."), J(this.view), this.view.nb.emit("goto-toolbar"));
}, Lb:function() {
  return "circle" === this.ba ? "ellipse" : this.ba;
}};
function Ae(a, b) {
  je(this, a, b, Ae);
  this.$ = null;
}
Ae.prototype = {log:A("CUSTOM"), type:function() {
  return "CustomNode";
}, setProperty:function(a, b) {
  var c;
  null === this.$ && "type" === a && (c = Be[b], this.$ = new c);
  this.$ && this.$.setProperty ? this.$.setProperty(a, b) : ie.prototype.setProperty.call(this, a, b);
}, wa:function(a) {
  return this.$ && this.$.setProperty ? this.$.getProperty(a) : ie.prototype.wa.call(this, a);
}, format:function(a) {
  "format" in this.$ ? this.$.format(a) : alert("Error: custom item must have a format(ctx) function");
  a = this.$.rect;
  this.rect = new O(a.x, a.y, a.width, a.height);
}, na:function(a) {
  this.$.draw(a);
}};
re("CustomNode", Ae);
function Ce(a, b) {
  je(this, a, b, Ce);
  this.fa.data = "";
  this.fa.locked = !1;
  this.element = null;
  this.ia = void 0;
  this.ba = null;
  this.$ = new P;
  this.la = !1;
}
Ce.prototype = {log:A("DomNode", !0), type:function() {
  return "DomNode";
}, setProperty:function(a, b) {
  if ("data" === a) {
    this.element && (p(this.element).remove(), this.ia = this.element = null);
  } else {
    if ("border" === a || "lockSize" === a || "lockRotate" === a) {
      this.fa[a] = b;
      return;
    }
  }
  ie.prototype.setProperty.call(this, a, b);
}, ce:function(a) {
  this.log("Node %s receives DOM element and requests reformat", this.id);
  this.element = a;
  this.element.style.position = "absolute";
  "IFRAME" !== a.tagName && (this.element.style.pointerEvents = "none");
  this.qc(this.la);
  this.width = this.element.offsetWidth;
  this.height = this.element.offsetHeight;
  this.element.style.top = "0px";
  this.element.style.left = "0px";
  De(this, "transformOrigin", "top left");
  this.aa.emit("reformat", this);
}, Jc:function(a) {
  ie.prototype.Jc.call(this, a);
  this.element && (this.element.style.visibility = this.oa ? "hidden" : "visible");
}, qc:function(a) {
  this.la = a;
  this.element && this.aa && (a ? Ta(p(this.element), p(this.aa.canvas)) : ba(p(this.element), p(this.aa.canvas)));
}, format:function(a, b) {
  null === this.element && this.ia !== this.wa("data") && b && (this.ia = this.wa("data"), this.aa = b, this.log("DomNode %s requests conversion to DOM element", this.id), this.aa.emit("convert-dom-request", this.ia, this.id));
  if (this.element) {
    var c = this.$, c = c.multiply(S(this));
    1 === c.m11 && 1 === c.m22 && 0 === c.m12 && 0 === c.m21 ? (De(this, "transform", ""), this.element.style.left = "" + c.Aa + "px", this.element.style.top = "" + c.Ba + "px") : (this.element.style.left = "0px", this.element.style.top = "0px", De(this, "transform", "matrix(" + c.m11 + "," + c.m21 + "," + c.m12 + "," + c.m22 + "," + c.Aa + "," + c.Ba + ")"));
    this.rect.x = 0;
    this.rect.y = 0;
    this.rect.width = this.width;
    this.rect.height = this.height;
    this.element.style.visibility = this.oa ? "hidden" : "visible";
  } else {
    this.rect.x = 0, this.rect.y = 0, this.rect.width = 100, this.rect.height = 22;
  }
  this.ba = new zd(this.rect);
  this.Eb = this.rect.clone();
  this.rect.transform(S(this));
  this.ba.transform(S(this));
  if (c = this.fa.border) {
    this.rect.Nb(c), this.sa = this.ba.clone(), this.sa.Nb(c / 2), this.ba.Nb(c);
  }
}, Xb:function(a) {
  !a.Wb || a.Wb.m11 === this.$.m11 && a.Wb.m21 === this.$.m21 && a.Wb.m12 === this.$.m12 && a.Wb.m22 === this.$.m22 && a.Wb.Aa === this.$.Aa && a.Wb.Ba === this.$.Ba || (this.log("Moving DOM element as result of draw zooming"), this.$ = a.Wb, this.format(a, null));
  if (this.element) {
    var b = this.fa.border;
    if (b) {
      var c = this.sa;
      a.setTransform(1, 0, 0, 1, 0, 0);
      a.beginPath();
      a.lineWidth = b;
      a.strokeStyle = "#cccccc";
      a.moveTo(c.qa[0].x, c.qa[0].y);
      a.lineTo(c.qa[1].x, c.qa[1].y);
      a.lineTo(c.qa[2].x, c.qa[2].y);
      a.lineTo(c.qa[3].x, c.qa[3].y);
      a.lineTo(c.qa[0].x, c.qa[0].y);
      a.closePath();
      a.stroke();
    }
  } else {
    a.beginPath(), a.lineWidth = 1, a.fillStyle = "#888888", a.strokeStyle = "#CCCCCC", a.rect(0, 0, 100, 22), a.stroke(), a.font = "20px Arial", a.textBaseline = "top", a.fillText("DomNode", 0, 0);
  }
}, Za:function(a, b) {
  return !this.fa.locked && this.rect.Ib(a, b) && this.ba.Ib(a, b, 3) ? this : null;
}, Xd:function() {
  this.element && ba(p(this.element), p(this.aa.canvas));
}, Zd:function() {
  this.log("Removed DOM NODE");
  this.element && p(this.element).remove();
}};
function De(a, b, c) {
  for (var d = b.charAt(0).toUpperCase() + b.substr(1), e = ["ms", "Webkit", "O", "Moz"], f = 0;f < e.length;f++) {
    a.element.style[e[f] + d] = c;
  }
  a.element.style[b] = c;
}
re("DomNode", Ce);
function Ee(a, b) {
  je(this, a, b, Ee);
  this.fa.url = "";
  this.Ga = null;
  this.width = 100;
  this.height = 20;
  this.ia = new zd;
  this.ba = [];
  this.aa = new O(0, 0, this.width, this.height);
  this.$ = new O(0, 0, this.width, this.height);
}
Ee.prototype = {log:A("IMAGE", !0), type:function() {
  return "ImageNode";
}, setProperty:function(a, b) {
  this.fa[a] = b;
  "url" === a && (this.Ga = null);
}, format:function(a, b) {
  function c(a, b, c) {
    k.ba.push({x:k.$.x + a * k.$.width, y:k.$.y + b * k.$.height, Mb:c});
  }
  var d, e, f, g, h, l = this;
  null === this.Ga && "ImageSurface" in window ? (this.Ga = new ImageSurface(this.fa.url), this.aa = new O(0, 0, this.Ga.width, this.Ga.height)) : null === this.Ga ? (this.aa = new O(0, 0, this.width, this.height), b.add(this, "image", this.fa.url, null, function(a) {
    l.log("Got image response.");
    l.Ga = a;
    return b.emit("reformat", l);
  })) : this.aa = new O(0, 0, this.Ga.width, this.Ga.height);
  this.$ = Fe(this);
  this.rect = this.$.clone();
  if (d = this.wa("boundingPolygon")) {
    f = [];
    e = g = 0;
    for (h = d.length - 1;g <= h;e = g += 2) {
      f.push(new F(d[e], d[e + 1]));
    }
    this.ia = new zd(f);
  } else {
    this.ia = new zd(this.rect);
  }
  this.Eb = this.rect.clone();
  this.ia.transform(this.fa.matrix);
  this.rect.transform(this.fa.matrix);
  this.ba.length = 0;
  var k = this;
  c(.5, 0, !0);
  c(1, .5, !1);
  c(.5, 1, !0);
  c(0, .5, !1);
}, Pd:function() {
  return this.ia;
}, Za:function(a, b) {
  return !this.fa.locked && this.ia.Ib(a, b, 3) ? this : null;
}, Xb:function(a) {
  var b, c, d, e, f = !1;
  if (this.Ga) {
    try {
      if (a.drawImage(this.Ga, this.$.x, this.$.y, this.$.width, this.$.height, this.$.x, this.$.y, this.$.width, this.$.height), Ge) {
        c = this.ia.qa;
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.beginPath();
        a.lineWidth = 2;
        a.strokeStyle = "#000000";
        a.moveTo(c[0].x, c[0].y);
        b = d = 1;
        for (e = c.length - 1;d <= e;b = d += 1) {
          a.lineTo(c[b].x, c[b].y);
        }
        a.closePath();
        a.stroke();
        a.restore();
      }
    } catch (g) {
      this.log("Error drawing image: %s", g.message), f = g;
    }
  }
  if (null === this.Ga || f) {
    a.save(), a.lineWidth = 1, a.strokeStyle = "#cccccc", a.strokeRect(0, 0, this.width, this.height), a.restore();
  }
}, xd:function() {
  return !0;
}, vd:function(a, b) {
  a.save();
  a.beginPath();
  a.lineWidth = 1 * b;
  a.strokeStyle = "#0050B7";
  for (var c = S(this), d = 0;d < this.ba.length;d++) {
    var e = this.ba[d], f = c.apply(e.x, e.y), g, h, l, k;
    e.Mb ? (g = 20, l = h = 0, k = 3, e = f.x - 10, f = f.y - 6) : (g = 0, h = 20, l = 3, k = 0, e = f.x - 6, f = f.y - 10);
    for (var n = 0;5 > n;n++) {
      a.moveTo(e, f), a.lineTo(e + g * b, f + h * b), e += l * b, f += k * b;
    }
  }
  a.stroke();
  a.restore();
}, zd:function(a, b, c) {
  var d = S(this);
  c = 10 * c;
  for (var e = 0;e < this.ba.length;e++) {
    var f = this.ba[e], f = d.apply(f.x, f.y);
    if (f.x - c <= a && a < f.x + c && f.y - c <= b && b < f.y + c) {
      return e;
    }
  }
  return null;
}, Qd:function(a) {
  a = this.ba[a];
  return S(this).apply(a.x, a.y);
}, wc:function(a, b, c) {
  var d = Fe(this);
  b = Nd(this).apply(b, c);
  0 === a && 0 <= b.y ? (d.height -= b.y - d.y, d.y = b.y) : 1 === a && b.x < this.aa.width ? d.width = b.x - d.x : 2 === a && b.y < this.aa.height ? d.height = b.y - d.y : 3 === a && 0 <= b.x && (d.width -= b.x - d.x, d.x = b.x);
  d.x = Math.max(d.x, 0);
  d.y = Math.max(d.y, 0);
  d.width = Math.min(d.width, this.aa.width);
  d.height = Math.min(d.height, this.aa.height);
  d.width = Math.max(1, d.width);
  d.height = Math.max(1, d.height);
  this.fa.crop = [d.x, d.y, d.width, d.height].join();
}};
function Fe(a) {
  var b = a.fa.crop;
  a = new O(0, 0, a.aa.width, a.aa.height);
  b && (b = b.split(","), a.x = parseFloat(b[0]), a.y = parseFloat(b[1]), a.width = parseFloat(b[2]), a.height = parseFloat(b[3]));
  return a;
}
var Ge = !1;
re("ImageNode", Ee);
function He(a, b) {
  je(this, a, b, He);
  this.fa.mathml = "";
  this.Ga = null;
  this.width = 100;
  this.height = 20;
  this.$ = new zd;
}
He.prototype = {log:A("MATHNODE", !0), type:function() {
  return "MathNode";
}, setProperty:function(a, b) {
  this.fa[a] = b;
  "mathml" === a && (this.Ga = null);
}, format:function(a, b) {
  var c = this;
  null === this.Ga ? (this.rect = new O(0, 0, this.width, this.height), b.add(this, "math", this.fa.mathml, null, function(a) {
    c.log("Got math response.");
    c.Ga = a;
    if (c.Ga) {
      return b.emit("reformat", c);
    }
  })) : (this.ba = this.Ga.width, this.aa = this.Ga.height, this.rect = new O(0, 0, this.ba, this.aa));
  this.$ = new zd(this.rect);
  this.$.transform(this.fa.matrix);
  this.rect.transform(this.fa.matrix);
}, Za:function(a, b) {
  return !this.fa.locked && this.$.Ib(a, b, 3) ? this : null;
}, Xb:function(a) {
  if (null === this.Ga) {
    a.save(), a.lineWidth = 1, a.strokeStyle = "#cccccc", a.strokeRect(0, 0, this.width, this.height), a.restore();
  } else {
    try {
      a.drawImage(this.Ga, 0, 0);
    } catch (b) {
      this.log("Error: %s", b);
    }
  }
}};
re("MathNode", He);
function Ie(a, b) {
  je(this, a, b, Ie);
  this.aa = "UnknownNode";
  this.width = 100;
  this.height = 20;
  this.$ = new ge;
  he(this.$, "centre", "middle");
}
Ie.prototype = {log:A("UNKNOWN", !0), type:function() {
  return this.aa;
}, setProperty:function(a, b) {
  this.fa[a] = b;
}, format:function(a) {
  this.log("Formatting placeholder for %s", this.aa);
  this.rect = new O(0, 0, this.width, this.height);
  this.rect.transform(this.fa.matrix);
  this.$.format(a, this.width, this.height);
}, Xb:function(a) {
  this.log("Drawing placeholder for for %s", this.aa);
  a.save();
  a.lineWidth = 1;
  a.fillStyle = "#888888";
  a.fillRect(0, 0, this.width, this.height);
  a.fillStyle = "#000000";
  this.$.na(a, 0, 0);
  a.restore();
}};
re("UnknownNode", Ie);
function Je(a, b) {
  je(this, a, b, Je);
  pe(this, Ke);
  this.fa.text = "lorum ipsum dolor";
  this.$ = new ge;
  this.Sd = 0;
}
Je.prototype = {log:A("TEXT", !0), type:function() {
  return "TextNode";
}, setProperty:function(a, b) {
  this.fa[a] = b;
  if ("fontName" === a || "text" === a) {
    this.path = null;
  }
  "textFillStyle" === a ? this.fa.fillStyle = b : "fillStyle" === a && (this.fa.textFillStyle = b);
}, format:function(a) {
  var b, c = this.$;
  b = this.fa.fontSize;
  var d = this.fa.bold, e = this.fa.italic;
  c.la = this.fa.fontName;
  c.fontSize = b;
  c.ia = d;
  c.oa = e;
  c = this.fa.text;
  c.length && 10 === c.charCodeAt(c.length - 1) && (this.log("Lastchar=%s; remove trailing newline", c.charCodeAt(c.length - 1)), c = c.substr(0, c.length - 1));
  this.$.text = c;
  b = this.fa.matrix;
  c = b.apply(0, 0);
  b = b.apply(1, 0);
  c = c.lb(b);
  he(this.$, this.fa.textAlign, "top");
  !0 === this.wa("wrap") ? (b = this.fa.baseWidth, void 0 === b && (this.$.format(a, 0, 0), b = Math.max(this.$.rect.width, 10), 500 < b && (b = 500), this.fa.baseWidth = b, this.log("Formatting text for first time; baseWidth=%s", b)), c = Math.ceil(c * b), this.$.format(a, c, 0), a = this.$.rect.height, this.Eb = new O(0, 0, b, a)) : (this.$.format(a, 0, 0), c = this.$.rect.width, a = this.$.rect.height, this.Eb = new O(0, -(0 + this.wa("fontSize")), c, a));
  a = new zd(this.Eb);
  a.transform(S(this));
  this.rect = ed(a.qa);
  this.Sd = this.rect.height;
  this.rect.height += 1.3 * this.fa.fontSize;
  a = this.wa("lineWidth") + 0;
  this.rect.Nb(a, a);
}, na:function(a) {
  if (0 !== this.fa.text.length) {
    a.save();
    if (this.wa("wrap")) {
      var b;
      b = S(this);
      var c = b.m11, d = b.m21, e = b.m12, f = b.m22, g = Math.sqrt(c * c + d * d), h = Math.sqrt(e * e + f * f);
      b = new P(c / g, e / h, d / g, f / h, b.Aa, b.Ba);
      jd(b, a);
    } else {
      jd(S(this), a);
    }
    a.strokeStyle = this.fa.strokeStyle;
    a.fillStyle = this.fa.fillStyle;
    a.lineWidth = this.fa.lineWidth;
    b = 0;
    this.fa.wrap || (b = -(0 + this.wa("fontSize")));
    this.fa.shadow && (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
    0 < this.fa.lineWidth && this.$.strokeText(a, 0, b);
    this.$.fillText(a, 0, b);
    a.restore();
  }
}};
Je.prototype = p.$({}, ie.prototype, Je.prototype);
var Ke = {textFillStyle:"#000000", fontName:"Arial", fontSize:20, lineWidth:0, fillStyle:"#000000", wrap:!1, textAlign:"left", bold:!1, italic:!1};
re("TextNode", Je);
function Le(a, b) {
  je(this, a, b, Le);
  pe(this, Me);
  this.fa.closed = !1;
  this.fa.commands = [];
  this.$ = [];
  this.sa = 0;
  this.fa.seed = 0;
  this.aa = new Je(0, b);
  this.aa.setProperty("text", this.fa.text);
  this.la = [];
}
var Me = {strokeStyle:"#000000", fillStyle:"#ffffff", textFillStyle:"#000000", fontName:"Arial", fontSize:20, lineWidth:2, dashes:"", shapeWidth:0, smoothness:.3, sloppiness:.5, shadow:!1, closed:!1, arrowSize:0, arrowStyle:"simple", doubleArrow:!1, text:"", roundRadius:0, wrap:!1, angleArcs:0}, Ne = [2, 2, 4, 5, 6, 2, 4, 0];
m = Le.prototype;
m.log = A("PATHNODE");
m.moveTo = function(a, b) {
  var c = this.fa.commands;
  c.push(0);
  c.push(a);
  c.push(b);
};
m.type = function() {
  return "PathNode";
};
m.yd = function() {
  return !0 === this.fa.closed;
};
m.setProperty = function(a, b) {
  ie.prototype.setProperty.apply(this, arguments);
  "fontName" === a || "fontSize" === a || "text" === a || "wrap" === a ? this.aa.setProperty(a, b) : "textFillStyle" === a ? this.aa.setProperty("fillStyle", b) : "spotHighlight" === a && (this.fa.spotHighlight = !0);
};
m.Qd = function(a) {
  for (var b = 0, c = this.fa.commands, d = a / 2 | 0, e = 0;e < d | 0;e++) {
    b += Ne[c[b]] + 1;
  }
  a & 1 ? (d = c[b + 3], b = c[b + 4]) : (d = c[b + 1], b = c[b + 2]);
  this.log("getEditHandle(%s) = (%s, %s)", a, d, b);
  return S(this).apply(d, b);
};
m.wc = function(a, b, c) {
  for (var d = 0, e = this.fa.commands, f = a / 2 | 0, g = 0;g < f;g++) {
    d += Ne[e[d]] + 1;
  }
  f = this.fa.inverse.apply(b, c);
  a & 1 ? (e[d + 3] = f.x, e[d + 4] = f.y) : (e[d + 1] = f.x, e[d + 2] = f.y);
  if (0 === a && this.fa.closed) {
    for (a = null;d < e.length;) {
      f = Ne[e[d]], 2 <= f && (a = d), d += f + 1;
    }
    a && (d = a, f = this.fa.inverse.apply(b, c), e[d + 1] = f.x, e[d + 2] = f.y);
  }
};
m.format = function(a, b) {
  this.origin = null;
  this.$.length = 0;
  for (var c = new F(0, 0), d = this.fa.commands, e = null, f, g, h = this.fa.matrix, l = new Qc(this.fa.seed), k = 0;k < d.length;) {
    switch(d[k++]) {
      case 0:
        c = h.apply(d[k++], d[k++]);
        this.$.push(new qb(0, c));
        null === this.origin && (this.origin = c);
        break;
      case 1:
        c = h.apply(d[k++], d[k++]);
        this.$.push(new rb(e, c, l, this.fa.sloppiness, this.fa.roundRadius));
        break;
      case 2:
        c = h.apply(d[k++], d[k++]);
        e = h.apply(d[k++], d[k++]);
        this.$.push(new ub(0, e, c));
        break;
      case 3:
        c = h.apply(d[k++], d[k++]);
        e = h.apply(d[k++], d[k++]);
        f = d[k++];
        this.$.push(new vb(0, e, c, f));
        break;
      case 4:
        c = h.apply(d[k++], d[k++]);
        f = h.apply(d[k++], d[k++]);
        g = h.apply(d[k++], d[k++]);
        this.$.push(new wb(e, f, g, c));
        break;
      case 5:
        c = h.apply(d[k++], d[k++]);
        this.$.push(new tb(e, c, this.fa.smoothness));
        break;
      case 6:
        c = h.apply(d[k++], d[k++]);
        f = h.apply(d[k++], d[k++]);
        this.$.push(new xb(e, f, c, l, this.fa.sloppiness));
        break;
      case 7:
        this.fa.closed = !0;
        break;
      default:
        k++;
    }
    e = this.$[this.$.length - 1];
  }
  this.fa.closed && 4 <= this.$.length && this.$[1].dd && (this.$[1].dd(e), e.ka = this.origin);
  this.sa = this.$.length;
  Oe(this, l);
  this.rect.x = this.origin.x;
  this.rect.y = this.origin.y;
  this.rect.width = 0;
  this.rect.height = 0;
  c = this.fa.dashes.split(",");
  this.ia = [];
  for (k = 0;k < c.length;k++) {
    d = parseFloat(c[k]), isNaN(d) || this.ia.push(d);
  }
  k = this.ia.length ? 2 : 8;
  c = new sd;
  for (d = 0;d < this.$.length;d++) {
    this.$[d].na(c);
  }
  this.fa.closed && c.close();
  f = e = d = 0;
  for (h = new sd;d < c.ga.length;) {
    switch(c.ga[d]) {
      case Bb:
        e = c.ga[d + 1];
        f = c.ga[d + 2];
        h.moveTo(e, f);
        break;
      case Cb:
        e = c.ga[d + 1];
        f = c.ga[d + 2];
        h.lineTo(e, f);
        break;
      case 2:
        g = l = [];
        var n = c.ga[d + 5], q = c.ga[d + 6];
        e !== n && f !== q && od(g, e, f, c.ga[d + 1], c.ga[d + 2], c.ga[d + 3], c.ga[d + 4], n, q, k * k);
        g.push(new F(n, q));
        2 === l.length && 1E-4 > e * (l[0].y - l[1].y) + l[0].x * (l[1].y - f) + l[1].x * (f - l[0].y) && (l[0] = l[1], l.length = 1);
        for (e = 0;e < l.length;e++) {
          h.lineTo(l[e].x, l[e].y);
        }
        e = c.ga[d + 5];
        f = c.ga[d + 6];
        break;
      case 3:
        g = l = [];
        n = c.ga[d + 3];
        q = c.ga[d + 4];
        e !== n && f !== q && qd(g, e, f, c.ga[d + 1], c.ga[d + 2], n, q, k * k);
        g.push(new F(n, q));
        for (e = 0;e < l.length;e++) {
          h.lineTo(l[e].x, l[e].y);
        }
        e = c.ga[d + 3];
        f = c.ga[d + 4];
        break;
      case Eb:
        h.close();
    }
    d += Fb[c.ga[d]];
  }
  this.ba = h;
  c = 0 + this.wa("shapeWidth");
  if (0 < c) {
    h = this.ba;
    this.log("ConvertToRects: width=%s", c);
    var d = 0, h = h.ga, r, t;
    for (f = new sd;d < h.length;) {
      this.log("cmd %s %s %s", h[d], h[d + 1], h[d + 2]);
      switch(h[d]) {
        case Bb:
          r = h[d + 1];
          t = h[d + 2];
          break;
        case Cb:
          l = h[d + 1], e = h[d + 2], this.log("(%s,%s-%s,%s)", r, t, l, e), 0 < sb(r, t, l, e) && (n = K(r, t, l, e), g = n.y * c / 2, n = -n.x * c / 2, f.moveTo(r + g, t + n), f.lineTo(l + g, e + n), f.lineTo(l - g, e - n), f.lineTo(r - g, t - n), f.close()), r = l, t = e;
      }
      d += Fb[h[d]];
    }
    this.ba = f;
  }
  this.rect = vd(this.ba, k);
  r = this.rect.width - 2 * (this.fa.lineWidth / 2 + 1);
  t = this.fa.lineWidth;
  k = this.ba.clone();
  k.transform(Nd(this));
  this.Eb = vd(k, 3);
  this.Eb.Nb(2 * t + 1, 2 * t + 1);
  this.rect.Nb(2 * t + 1, 2 * t + 1);
  8 > this.rect.width && (this.rect.x += this.rect.width / 2 - 4, this.rect.width = 8);
  8 > this.rect.height && (this.rect.y += this.rect.height / 2 - 4, this.rect.height = 8);
  this.fa.closed && (t = fd(this.rect), this.aa.setProperty("textAlign", "centre"), this.aa.setProperty("baseWidth", r), this.aa.format(a, b), r = t.x - this.aa.rect.x - this.aa.rect.width / 2, t = t.y - this.aa.rect.y - this.aa.Sd / 2, this.aa.transform(new I(r, t), new I(-r, -t)), this.aa.format(a, b));
  this.la.length = 0;
  0 < this.fa.angleArcs && (this.la.push(new zb(this)), this.la[this.la.length - 1].Tb = this.fa.angleArcs);
  for (k = 0;k < this.la.length;k++) {
    this.la[k].format(a);
  }
};
m.Yc = function() {
  return this.ba;
};
function Oe(a, b) {
  function c(a, c) {
    var g, n, q, r;
    g = a.x - c.x * e;
    n = a.y - c.y * e;
    q = g + c.y * e / 2;
    r = n - c.x * e / 2;
    g += -c.y * e / 2;
    n += c.x * e / 2;
    d.$.push(new qb(0, new F(g, n)));
    d.$.push(new tb(d.$[d.$.length - 1], a, f));
    d.$.push(new tb(d.$[d.$.length - 1], new F(q, r), f));
    "solid" === d.fa.arrowStyle && d.$.push(new rb(d.$[d.$.length - 1], new F(g, n), b, d.fa.smoothness, 0));
  }
  a.Ka = 0 < a.fa.arrowSize && !a.fa.closed && 0 < a.$.length;
  if (a.Ka) {
    var d = a, e = a.fa.arrowSize, f = a.fa.smoothness, g = a.$[a.$.length - 1];
    c(g.ka, g.Sb());
    a.fa.doubleArrow && c(a.$[0].ka, dd(a.$[1].rc()));
  }
}
m.close = function() {
  this.fa.commands.push(7);
};
m.clip = function(a) {
  if (this.fa.closed) {
    this.log("Clipping to a path");
    for (var b = 0;b < this.$.length;b++) {
      this.$[b].na(a);
    }
    a.closePath();
  }
};
m.Xb = function(a) {
  if (!this.fa.spotHighlight) {
    var b = this.fa.inverse;
    a.save();
    a.lineJoin = "round";
    a.transform(b.m11, b.m21, b.m12, b.m22, b.Aa, b.Ba);
    a.beginPath();
    a.lineCap = "round";
    for (b = 0;b < this.$.length;b++) {
      this.$[b].na(a);
    }
    this.fa.closed && (a.closePath(), a.fill(), a.shadowColor = "rgba(0,0,0,0.0)");
    this.ia.length && 0 < this.fa.lineWidth ? (a.beginPath(), ud(this.ba, a, this.ia), a.lineCap = "butt") : 0 < 0 + this.wa("shapeWidth") && (a.beginPath(), this.ba.na(a));
    0 < this.fa.lineWidth && a.stroke();
    if (this.fa.arrowSize && "solid" === this.fa.arrowStyle) {
      a.beginPath();
      for (b = this.sa;b < this.$.length;b++) {
        this.$[b].na(a);
      }
      a.fillStyle = this.fa.strokeStyle;
      a.fill();
    }
    this.fa.closed && this.aa.na(a);
    for (b = 0;b < this.la.length;b++) {
      this.la[b].na(a);
    }
    a.restore();
  }
};
m.Za = function(a, b) {
  if (this.oa || this.wa("locked")) {
    return null;
  }
  var c = 8 + this.fa.shapeWidth / 2 + this.fa.lineWidth / 2;
  if (a >= this.rect.x - c && a < this.rect.x + c + this.rect.width && b >= this.rect.y - c && b < this.rect.y + c + this.rect.height) {
    if (this.fa.closed) {
      if (rd(wd(this.ba), a, b)) {
        return this;
      }
    } else {
      a: {
        for (var d = this.ba, e = 0, f = 0, g = 0, h, l, k, n, q;g < d.ga.length;) {
          switch(d.ga[g]) {
            case Bb:
              e = d.ga[g + 1];
              f = d.ga[g + 2];
              break;
            case Cb:
              h = d.ga[g + 1];
              l = d.ga[g + 2];
              n = h - e;
              k = l - f;
              q = n * n + k * k;
              q = ((a - e) * n + (b - f) * k) / q;
              1 < q ? q = 1 : 0 > q && (q = 0);
              e += q * n;
              k = f + q * k;
              f = e - a;
              k = k - b;
              f = f * f + k * k;
              if (f <= c) {
                c = !0;
                break a;
              }
              e = h;
              f = l;
          }
          g += Fb[d.ga[g]];
        }
        c = !1;
      }
      if (c) {
        return this;
      }
    }
  }
  return null;
};
m.lineTo = function(a, b) {
  var c = this.fa.commands;
  c.push(1);
  c.push(a);
  c.push(b);
};
m.td = function(a, b) {
  var c = this.fa.commands;
  c.push(5);
  c.push(a);
  c.push(b);
};
m.xd = function() {
  return !1 !== this.fa.editable;
};
m.zd = function(a, b, c) {
  c = 8 * c;
  if (a >= this.origin.x - c && a < this.origin.x + c && b >= this.origin.y - c && b < this.origin.y + c) {
    return 0;
  }
  for (var d = 0;d < this.sa;d++) {
    var e = this.$[d];
    if (e.control && a >= e.control.x - c && a < e.control.x + c && b >= e.control.y - c && b < e.control.y + c) {
      return 2 * d + 1;
    }
    if (a >= this.$[d].ka.x - c && a < this.$[d].ka.x + c && b >= this.$[d].ka.y - c && b < this.$[d].ka.y + c) {
      return 2 * d;
    }
  }
  return null;
};
m.vd = function(a, b) {
  a.save();
  a.lineWidth = 1 * b;
  a.strokeStyle = "#0050B7";
  var c = 4 * b;
  a.strokeRect(this.origin.x - c, this.origin.y - c, 2 * c, 2 * c);
  var d = this.$.length;
  this.fa.closed && --d;
  a.beginPath();
  for (d = 1;d < this.sa;d++) {
    this.$[d].control && (a.arc(this.$[d].control.x, this.$[d].control.y, c, 0, 2 * Math.PI), a.arc(this.$[d].control.x, this.$[d].control.y, 2 * c, 0, 2 * Math.PI)), a.rect(this.$[d].ka.x - c, this.$[d].ka.y - c, 2 * c, 2 * c);
  }
  a.stroke();
  a.restore();
};
Rc(ie.prototype, Le.prototype);
function ze(a) {
  void 0 === a ? this.ga = [] : this.ga = a;
}
ze.prototype = {moveTo:function(a, b) {
  this.ga.push(0);
  this.ga.push(a);
  this.ga.push(b);
}, lineTo:function(a, b) {
  this.ga.push(1);
  this.ga.push(a);
  this.ga.push(b);
}, td:function(a, b) {
  this.ga.push(5);
  this.ga.push(a);
  this.ga.push(b);
}, arcTo:function(a, b, c, d, e) {
  this.ga.push(3);
  this.ga.push(c);
  this.ga.push(d);
  this.ga.push(a);
  this.ga.push(b);
  this.ga.push(e);
}, close:function() {
  this.ga.push(7);
}, Hb:function() {
  return this.ga;
}};
function Pe(a, b, c, d, e) {
  a.ga.push(6);
  a.ga.push(d);
  a.ga.push(e);
  a.ga.push(b);
  a.ga.push(c);
}
function Qe() {
  var a = new F(0, 0), b = new ze;
  b.moveTo(a.x, a.y - 50);
  Pe(b, a.x + 50, a.y - 50, a.x + 50, a.y);
  Pe(b, a.x + 50, a.y + 50, a.x, a.y + 50);
  Pe(b, a.x - 50, a.y + 50, a.x - 50, a.y);
  Pe(b, a.x - 50, a.y - 50, a.x, a.y - 50);
  b.close();
  return b.Hb();
}
re("PathNode", Le);
function Re(a, b, c, d) {
  this.view = a;
  this.node = null;
  this.type = b;
  this.url = c || "";
  this.fa = d || {};
  "wrap" in this.fa || (this.fa.wrap = this.view.ea.get("multilineText"));
  "fontSize" in this.fa || (this.fa.fontSize = this.view.ea.get("defaultFontSize"));
}
Re.prototype = {Bb:function() {
  this.log("Entering DrawLinesBehaviour");
  this.view.canvas.style.cursor = "crosshair";
  this.view.ea.Fb() || Se(this.view, "click-to-place-first-point-of-line");
  this.view.na();
  this.$ = new F(0, 0);
  this.aa = new F(0, 0);
  this.node = null;
  this.state = "start";
}, log:A("DRAWLINES"), reset:function() {
  this.Bb();
}, Va:function(a) {
  var b;
  "touchstart" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.La(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Na(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = D(this.view, b.pageX, b.pageY), this.Oa(b.x, b.y, a));
}, pb:function(a) {
  "cancel" === a && (null !== this.node && this.view.of && "curve" === this.type && this.ya(), null !== this.node && this.view.ja.removeNode(this.node), this.view.Da.bb ? this.view.nb.emit("goto-toolbar") : J(this.view));
}, done:function() {
  this.view.ea.get("autoPickTool") ? J(this.view) : this.state = "start";
}, La:function(a, b) {
  var c = this.view.Ra(new F(a, b));
  if ("start" === this.state) {
    if (this.$ = new F(a, b), "stampline" === this.type) {
      this.node = Ud("StampLineNode", Te(this.view.ja), this.view.ja), this.node.setProperty("x1", c.x), this.node.setProperty("y1", c.y), this.node.setProperty("x2", c.x), this.node.setProperty("y2", c.y), this.node.setProperty("url", this.url), Wd(this.view.ja, this.node), Se(this.view, "click-to-set-the-end-of-the-line"), this.view.update(), this.index = 2;
    } else {
      this.node = new Le(Te(this.view.ja), this.view.ja);
      this.node.setProperty("seed", Math.round(65535 * Math.random()));
      this.node.setProperty("strokeStyle", this.view.gb);
      this.node.setProperty("lineWidth", this.view.ua.lineWidth);
      this.node.setProperty("sloppiness", this.view.ua.sloppiness);
      this.node.setProperty("smoothness", this.view.ua.smoothness);
      for (var d in this.fa) {
        this.fa.hasOwnProperty(d) && this.node.setProperty(d, this.fa[d]);
      }
      Wd(this.view.ja, this.node);
      "arrow" === this.type && (this.node.setProperty("arrowSize", this.view.ea.ra.defaultArrowSize), this.node.setProperty("arrowStyle", this.view.ea.ra.defaultArrowStyle));
      this.node.moveTo(c.x, c.y);
      Ue(this, c.x, c.y);
      this.index = 2;
      this.view.update();
      this.state = "predrag";
    }
  } else {
    if ("placing" === this.state) {
      if ("arrow" !== this.type && 8 > this.$.lb(new F(a, b)) && 2 < this.index) {
        this.log("Clicked close to start; automatically closing path"), this.node.close(), this.ya(), this.done();
      } else {
        if (8 > this.aa.lb(new F(a, b))) {
          if (2 < this.index) {
            for (var c = this.node.fa.commands, e = d = 0;e < this.index;e++) {
              d += Ne[c[d]] + 1;
            }
            c.splice(d, Ne[c[d]] + 1);
            this.ya();
          } else {
            Ve(this);
          }
          this.done();
        } else {
          Ue(this, c.x, c.y), this.index += 2, Td(this.view.ja, this.node.id), this.view.update();
        }
      }
    } else {
      throw "Invalid state";
    }
  }
  this.aa = new F(a, b);
}, Oa:function(a, b) {
  var c = this.$.lb(new F(a, b));
  this.log("onMouseUp (%s,%s) %s", a, b, this.state);
  "predrag" === this.state && (this.log("MovedBy: %s", c), 10 < c ? (this.ya(), this.done()) : this.view.ea.Fb() ? (this.log("Touchscreen -- cancel line draw."), Ve(this), this.state = "start") : (this.state = "placing", Se(this.view, "click-to-place-another-point-or-double-click-to-end-the-line")));
}, Na:function(a, b) {
  this.log("onMouseMove (%s,%s) %s", a, b, this.state);
  var c = this.view.Ra(new F(a, b));
  a = c.x;
  b = c.y;
  this.node && (this.node.wc(this.index, a, b), this.node.format(this.view.ma, this.view.request), this.view.na());
}, ya:function() {
  var a = this.node, b = a.$[a.$.length - 1];
  8 >= sb(b.ka.x, b.ka.y, a.origin.x, a.origin.y) && a.close();
  this.view.ja.removeNode(this.node);
  var a = this.view.ea.ra.defaultArrowSize, a = {arrowSize:"arrow" === this.type ? a : 0, arrowStyle:this.view.ea.ra.defaultArrowStyle, commands:this.node.wa("commands"), seed:this.node.wa("seed"), fillStyle:this.view.Xa, strokeStyle:this.view.gb, lineWidth:this.view.ua.lineWidth, sloppiness:this.view.ua.sloppiness, smoothness:this.view.ua.smoothness, layer:this.view.Ia}, c;
  for (c in this.fa) {
    this.fa.hasOwnProperty(c) && (a[c] = this.fa[c]);
  }
  this.view.ya([new H("PathNode", a)]);
  this.node = null;
}, Gb:function() {
  this.view.canvas.style.cursor = "default";
  Se(this.view, null);
  this.view.na();
}, wb:function(a) {
  var b;
  a.fd ? (this.view.Xa = a.Ta, this.view.fb = a.Ta, b = "fillStyle") : (this.view.gb = a.Ta, b = "strokeStyle");
  this.view.setProperty(b, a.Ta);
}, Ob:function(a, b) {
  b ? (this.view.Xa = uc(this.view.Xa, a), this.view.fb = uc(this.view.fb, a)) : this.view.gb = uc(this.view.gb, a);
  $d(this.view, a, b);
}, Lb:function() {
  return this.type;
}};
function Ve(a) {
  a.node && (a.view.ja.removeNode(a.node), a.node = null);
}
function Ue(a, b, c) {
  "curve" === a.type || "arrow" === a.type ? a.node.td(b, c) : a.node.lineTo(b, c);
}
;function We() {
}
We.prototype = {sb:"Action", $d:function(a) {
  var b, c, d, e;
  this.id && (this.id = a(this.id));
  if (this.$ && 0 < this.$.length) {
    e = [];
    b = c = 0;
    for (d = this.$.length - 1;0 <= d ? c <= d : c >= d;b = 0 <= d ? ++c : --c) {
      e.push(this.$[b] = a(this.$[b]));
    }
    return e;
  }
}, log:A("ACTION"), toString:function() {
  return "" + this.sb + "()";
}};
We.prototype = p.$({}, pb.prototype, We.prototype);
function H(a, b, c, d) {
  this.type = a;
  this.aa = c;
  this.index = d;
  this.fa = b;
  this.id = 0;
}
H.prototype = {sb:"CreateAction", ob:function(a) {
  this.id = this.id || Te(a);
  this.node = Ud(this.type, this.id, a);
  if (!this.node) {
    if (this.type in Be) {
      this.node = new Ae(this.id, a), this.node.setProperty("type", this.type);
    } else {
      this.log("Bad node type: %s", this.type);
      var b = this.node = Ud("UnknownNode", this.id, a), c = this.type;
      b.aa = c;
      b.$.text = c;
      b.log("Creating placeholder for node type %s", c);
    }
  }
  Vd(this.node, this.fa);
  if (void 0 === this.aa || void 0 === this.index) {
    this.aa = a.$[a.kb].id, this.index = -1;
  }
  b = U(a, this.aa);
  W(a, b, this.node, this.index);
  this.log("Add %s id %s to parent %s index %s", this.node.type(), this.id, b.type(), this.index);
}, toString:function() {
  return "" + this.sb + "(" + this.type + ", " + JSON.stringify(this.fa) + ", parent=" + this.aa + ", index=" + this.index + ")";
}, Sa:function(a) {
  a.removeNode(this.node);
}};
H.prototype = p.$({}, We.prototype, H.prototype);
function Xe(a) {
  this.$ = a;
  this.aa = [];
}
Xe.prototype = {sb:"DeleteAction", ob:function(a) {
  var b, c, d, e;
  this.aa.length = 0;
  e = this.$;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], b = U(a, b), this.aa.push({node:b, parent:b.parent, index:a.removeNode(b)});
  }
}, Sa:function(a) {
  var b, c, d, e;
  if (0 !== this.aa.length) {
    for (e = this.aa, c = 0, d = e.length;c < d;c++) {
      b = e[c], W(a, b.parent, b.node, b.index);
    }
  }
}};
Xe.prototype = p.$({}, We.prototype, Xe.prototype);
function be(a, b, c) {
  this.$ = a;
  this.name = b;
  this.value = c;
  this.aa = [];
}
be.prototype = {sb:"SetAction", ob:function(a) {
  var b, c, d, e;
  this.aa.length = 0;
  e = this.$;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], b = U(a, b), this.aa.push(b.wa(this.name)), b.setProperty(this.name, this.value);
  }
}, Sa:function(a) {
  var b, c, d, e;
  if (0 !== this.$.length) {
    for (b = d = 0, e = this.$.length - 1;0 <= e ? d <= e : d >= e;b = 0 <= e ? ++d : --d) {
      c = U(a, this.$[b]), c.setProperty(this.name, this.aa[b]);
    }
  }
}, Vd:function(a) {
  if (this.name !== a.name) {
    return !1;
  }
  this.$.sort();
  a.$.sort();
  if (this.$.length !== a.$.length) {
    return !1;
  }
  for (var b = 0;b < this.$.length;b++) {
    if (this.$[b] !== a.$[b]) {
      return !1;
    }
  }
  this.log("Merging property change %s", this.name);
  this.value = a.value;
  return !0;
}};
be.prototype = p.$({}, We.prototype, be.prototype);
function R(a, b, c) {
  this.$ = a;
  this.va = b;
  this.inverse = c;
}
R.prototype = {sb:"TransformAction", ob:function(a) {
  this.log("Execute transformAction");
  var b, c, d, e;
  e = this.$;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], b = U(a, b), b.transform(this.va, this.inverse);
  }
}, Sa:function(a) {
  var b, c, d, e;
  e = this.$;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], b = U(a, b), b.transform(this.inverse, this.va);
  }
}, $d:function(a) {
  var b, c, d;
  if (0 !== this.$.length) {
    for (b = c = 0, d = this.$.length - 1;0 <= d ? c <= d : c >= d;b = 0 <= d ? ++c : --c) {
      this.$[b] = a(this.$[b]);
    }
  }
}};
R.prototype = p.$({}, We.prototype, R.prototype);
function ib(a, b, c, d, e, f) {
  this.id = a;
  this.aa = b;
  this.ba = c;
  this.ia = d;
  this.x = e;
  this.y = f;
}
ib.prototype = {sb:"MoveEditHandleAction", ob:function(a) {
  U(a, this.id).wc(this.aa, this.x, this.y);
}, Sa:function(a) {
  U(a, this.id).wc(this.aa, this.ba, this.ia);
}};
ib.prototype = p.$({}, We.prototype, ib.prototype);
function Ye(a) {
  this.id = 0;
  this.$ = a;
  this.aa = [];
}
Ye.prototype = {sb:"GroupAction", ob:function(a) {
  var b, c, d, e;
  this.aa.length = 0;
  e = this.$;
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], b = U(a, b), this.aa.push({node:b, parent:b.parent, index:te(b.parent, b)});
  }
  this.id = this.id || Te(a);
  this.node = a.jc(this.id, this.$);
}, Sa:function(a) {
  var b, c;
  if (0 !== this.$.length) {
    for (b = c = this.$.length - 1;0 <= c && !(0 > b);b = c += -1) {
      b = this.aa[b], W(a, b.parent, b.node, b.index);
    }
    a.removeNode(this.node);
  }
}, toString:function() {
  return "GroupAction(" + JSON.stringify(this.$) + ")";
}};
Ye.prototype = p.$({}, We.prototype, Ye.prototype);
function Ze(a) {
  this.$ = a;
  this.aa = [];
}
Ze.prototype = {sb:"UngroupAction", ob:function(a) {
  var b, c, d, e, f, g, h, l, k;
  d = {};
  l = this.$;
  e = 0;
  for (g = l.length;e < g;e++) {
    if (b = l[e], b = U(a, b), ne(b) && !(b.id in d)) {
      for (d[b.id] = !0, c = {node:b, parent:b.parent, children:b.children.concat(), index:a.removeNode(b)}, this.aa.push(c), k = c.children, f = 0, h = k.length;f < h;f++) {
        b = k[f], W(a, c.parent, b, -1);
      }
    }
  }
}, Sa:function(a) {
  var b, c, d, e;
  if (0 !== this.aa.length) {
    for (b = d = this.aa.length - 1;0 <= d && !(0 > b);b = d += -1) {
      if (b = this.aa[b], 0 !== b.children.length) {
        for (c = e = b.children.length - 1;0 <= e && !(0 > c);c = e += -1) {
          W(a, b.node, b.children[c], -1);
        }
        W(a, b.parent, b.node, b.index);
      }
    }
    a.Wc();
  }
}};
Ze.prototype = p.$({}, We.prototype, Ze.prototype);
function $e(a, b, c) {
  var d, e, f;
  if (ne(a)) {
    for (f = a.children, d = 0, e = f.length;d < e;d++) {
      a = f[d], $e(a, b, c);
    }
  } else {
    a.transform(b, c);
  }
}
function af(a, b) {
  this.$ = a;
  this.offset = b;
  this.za = [];
  this.aa = [];
}
af.prototype = {sb:"DuplicateAction", ob:function(a) {
  var b, c, d, e, f, g, h;
  e = new I(this.offset, this.offset);
  c = e.inverse();
  this.za.length = 0;
  var l = this;
  d = this.aa.length ? function() {
    return l.aa[f];
  } : function() {
    var b = Te(a);
    l.aa.push(b);
    return b;
  };
  h = this.$;
  f = 0;
  for (g = h.length;f < g;f++) {
    b = h[f], b = U(a, b).clone(d), $e(b, e, c), Wd(a, b), this.za.push(b);
  }
}, Sa:function(a) {
  var b, c;
  if (0 !== this.za.length) {
    for (b = c = this.za.length - 1;0 <= c && !(0 > b);b = c += -1) {
      a.removeNode(this.za[b]);
    }
  }
}};
af.prototype = p.$({}, We.prototype, af.prototype);
function bf(a, b) {
  this.$ = a;
  this.type = b;
  this.za = [];
  this.aa = [];
}
bf.prototype = {sb:"ChangeOrderAction", ob:function(a) {
  var b, c, d, e, f, g;
  this.aa.length = 0;
  this.za.length = 0;
  g = this.$;
  e = 0;
  for (f = g.length;e < f;e++) {
    switch(b = g[e], b = U(a, b), d = b.parent, c = a.removeNode(b), this.aa.push(c), this.za.push(b), this.type) {
      case cf:
        W(a, d, b, -1);
        break;
      case df:
        W(a, d, b, 0);
        break;
      case ef:
        0 < c ? W(a, d, b, c - 1) : W(a, d, b, c);
        break;
      case ff:
        c < d.children.length ? W(a, d, b, c + 1) : W(a, d, b, c);
    }
  }
}, Sa:function(a) {
  var b, c, d, e;
  if (0 !== this.$.length) {
    for (b = e = this.$.length - 1;0 <= e && !(0 > b);b = e += -1) {
      c = this.za[b], d = c.parent, a.removeNode(c), W(a, d, c, this.aa[b]);
    }
  }
}};
var cf = 0, df = 1, ff = 2, ef = 3;
bf.prototype = p.$({}, We.prototype, bf.prototype);
function gf(a) {
  this.fa = a;
}
gf.prototype = {sb:"SetDocumentPropertiesAction", ob:function(a) {
  var b;
  this.aa = {};
  for (b in this.fa) {
    this.fa.hasOwnProperty(b) && (this.aa[b] = a.wa(b), a.setProperty(b, this.fa[b]));
  }
}, Sa:function(a) {
  for (var b in this.aa) {
    this.aa.hasOwnProperty(b) && a.setProperty(b, this.aa[b]);
  }
}};
gf.prototype = p.$({}, We.prototype, gf.prototype);
function hf(a) {
  M.apply(this, arguments);
  this.la = new ob;
  this.za = {};
  this.sa = new z;
  this.Wc = this.$a = !0;
  this.cb = 0;
  this.ia = new z;
  this.ba = new z;
  this.oa = new z;
  this.root = new se(Te(this), this);
  this.za[this.root.id] = this.root;
  this.vb = 0;
  this.ub = "magenta";
  this.eb = this.la.next;
  this.fa = {};
  this.Ka = new z;
  this.Cb = new z;
  this.Ca = [];
  this.$ = [];
  this.kb = 0;
  a || (jf(this, this.root), this.ib(this.uc(0)));
}
hf.prototype = {log:A("DOC"), empty:function() {
  return 0 === this.root.children.length;
}, ac:function() {
  return this.eb !== this.la.next;
}, ya:function(a, b) {
  this.ia = new z;
  this.ba = new z;
  this.oa = new z;
  if (b) {
    this.log("Performing actions without adding to undo stack");
    for (var c = 0;c < a.length;c++) {
      a[c].ob(this);
    }
  } else {
    this.la.ya(a, !1, this);
  }
  return {tb:la(this.ia), Ub:la(this.ba), Vb:la(ma(ma(this.oa, this.ia), this.ba))};
}, Sa:function() {
  this.ia = new z;
  this.ba = new z;
  this.oa = new z;
  this.la.Sa(this);
  return {tb:la(this.ia), Ub:la(this.ba), Vb:la(ma(ma(this.oa, this.ia), this.ba))};
}, Pb:function() {
  this.ia = new z;
  this.ba = new z;
  this.oa = new z;
  this.la.Pb(this);
  return {tb:la(this.ia), Ub:la(this.ba), Vb:la(ma(ma(this.oa, this.ia), this.ba))};
}, Zb:function() {
  return this.la.Zb();
}, Yb:function() {
  return this.la.Yb();
}, format:function(a, b) {
  var c, d, e, f, g;
  d = this.$a ? this.za : this.sa.keys;
  e = [];
  for (c in d) {
    d.hasOwnProperty(c) && e.push(this.za[c]);
  }
  g = kf(this, e);
  d = 0;
  for (f = g.length;d < f;d++) {
    c = g[d], c.format(a, b);
  }
  this.sa.keys = {};
  this.$a = !1;
  return e.length;
}, na:function(a) {
  function b(b) {
    lf(f, a, b);
    mf(f, function(c) {
      f.Ka.contains(oe(c)) || c.kc() === b && (c.oa || c.na(a));
    });
  }
  var c, d, e, f = this;
  c = la(this.Cb);
  c.sort();
  d = 0;
  for (e = c.length;d < e;d++) {
    b(c[d]);
  }
}, Za:function(a, b, c) {
  var d;
  d = null;
  mf(this, function(e) {
    oe(e) === c && e.Za(a, b) && (null === d || d.kc() <= e.kc()) && (d = e);
  });
  return d;
}, mb:function(a, b) {
  var c;
  c = function(d) {
    var e, f, g;
    if (d.children) {
      for (a && b(d), g = d.children, e = 0, f = g.length;e < f;e++) {
        d = g[e], c(d);
      }
    } else {
      b(d);
    }
  };
  c(this.root);
}, jc:function(a, b) {
  var c, d, e, f;
  c = new se(a, this);
  Wd(this, c);
  e = 0;
  for (f = b.length;e < f;e++) {
    d = b[e], W(this, c, this.za[d], -1);
  }
  return c;
}, removeNode:function(a, b) {
  var c, d, e = this;
  void 0 === b && (b = !0);
  c = te(a.parent, a);
  0 <= c && (a.parent.children.splice(c, 1), a.parent = null, b && (d = function(b) {
    var c, h, l, k;
    delete e.za[b.id];
    a.Zd();
    e.sa.remove(b.id);
    if (ne(b)) {
      for (k = b.children, h = 0, l = k.length;h < l;h++) {
        c = k[h], d(c);
      }
    }
    b.wa("spotHighlight") && wc(e.Ca, b);
  }, d(a)));
  "PageNode" === a.type() && (this.$.splice(c, 1), c === this.kb && (this.log("Removed current page."), this.ib(Math.min(c, this.$.length - 1))));
  this.ba.add(a.id);
  return c;
}, hb:function() {
  var a, b, c, d, e;
  a = e = d = b = null;
  this.mb(!1, function(c) {
    if (null === b || c.rect.x < b) {
      b = c.rect.x;
    }
    if (null === d || c.rect.right() > d) {
      d = c.rect.right();
    }
    if (null === e || c.rect.y < e) {
      e = c.rect.y;
    }
    if (null === a || c.rect.bottom() > a) {
      a = c.rect.bottom();
    }
  });
  c = null === b ? new O(0, 0, 10, 10) : new O(b, e, d - b, a - e);
  this.log("getDrawingRectangle: %s", c);
  return c;
}, wa:function(a) {
  return this.fa[a];
}, setProperty:function(a, b) {
  void 0 === b ? a in this.fa && delete this.fa[a] : this.fa[a] = b;
}, Kc:function(a, b) {
  this.log("showLayer(%s, %s)", a, b);
  b ? this.Ka.remove(a) : this.Ka.add(a);
}, Ad:function(a) {
  return !this.Ka.contains(a);
}, uc:function(a) {
  this.log("Adding page to document with index %s", a);
  if (a > this.$.length) {
    return this.log("Error: Can insert page with index %s", a), -1;
  }
  var b = Ud("PageNode", Te(this), this);
  W(this, this.root, b, a);
  return a;
}, Kb:function() {
  return this.$.length;
}, ib:function(a) {
  if (0 <= a && a < this.$.length) {
    return this.log("Set current page to %s/%s", a, this.$.length), this.kb = a, !0;
  }
  this.log("Tried to set page to non-existing %s", a);
  return !1;
}, qc:function(a) {
  this.mb(!1, function(b) {
    b.qc(a);
  });
}};
function nf(a) {
  var b = 816, c = 1056;
  "width" in a.fa && (b = a.fa.width);
  "height" in a.fa && (c = a.fa.height);
  return new cd(b, c);
}
function of(a) {
  return "width" in a.fa ? new O(0, 0, a.fa.width, a.fa.height) : a.hb();
}
function W(a, b, c, d) {
  c.parent && a.removeNode(c, !1);
  -1 === d ? b.children.push(c) : b.children.splice(d, 0, c);
  jf(a, c);
  a.Wc = !0;
  "PageNode" === c.type() && (-1 === d ? a.$.push(c) : a.$.splice(d, 0, c));
  c.parent = b;
}
function pf(a, b, c) {
  var d, e, f, g, h, l, k, n, q, r;
  0 === b.indexOf("zwibblerclip.") && (b = b.substr(13));
  f = JSON.parse(b);
  b = [];
  h = a.cb;
  q = 0;
  for (r = f.length;q < r;q++) {
    if (e = f[q], "GroupAction" === e.type) {
      b.push(new Ye(e.members)), c.push(h++);
    } else {
      if ("CreateAction" === e.type) {
        n = e.properties;
        l = {};
        for (g in n) {
          n.hasOwnProperty(g) && (k = n[g], "[object Array]" === Object.prototype.toString.apply(k) && "Matrix" === k[0] && (k.splice(0, 1), k = new P(k)), l[g] = k);
        }
        b.push(new H(e.node, l));
        c.push(h++);
      }
    }
  }
  d = a.cb;
  g = function(b) {
    a.log("Remap %s -> %s", b, b + d);
    return b + d;
  };
  e = 0;
  for (f = b.length;e < f;e++) {
    c = b[e], c.$d(g);
  }
  return b;
}
function qf(a, b, c, d) {
  var e, f, g, h;
  if (ne(b)) {
    e = [];
    h = b.children;
    f = 0;
    for (g = h.length;f < g;f++) {
      b = h[f], d = qf(a, b, c, d), e.push(d - 1);
    }
    c.push({type:"GroupAction", members:e});
  } else {
    a = le(b);
    g = {};
    for (e in a) {
      a.hasOwnProperty(e) && (f = a[e], f instanceof P && (f = ["Matrix", f.m11, f.m12, f.m21, f.m22, f.Aa, f.Ba]), g[e] = f);
    }
    c.push({type:"CreateAction", node:b.type(), properties:g});
  }
  return d + 1;
}
function rf(a, b) {
  var c;
  c = 0;
  a.Wc && (a.Wc = !1, a.mb(!0, function(a) {
    a.Ca = c++;
  }));
  b.sort(function(a, b) {
    return a.Ca - b.Ca;
  });
}
function mf(a, b) {
  function c(a) {
    if (a.children) {
      for (var e = 0;e < a.children.length;e++) {
        c(a.children[e]);
      }
    } else {
      "PageNode" !== a.type() && b(a);
    }
  }
  c(a.$[a.kb]);
}
function kf(a, b) {
  var c, d, e, f, g;
  e = [];
  c = {};
  f = 0;
  for (g = b.length;f < g;f++) {
    for (d = b[f];me(d);) {
      d = d.parent;
    }
    d.id in c || (c[d.id] = !0, e.push(d));
  }
  rf(a, e);
  return e;
}
function sf(a, b) {
  var c = [];
  mf(a, function(a) {
    b.contains(a.hb()) && c.push(a);
  });
  return c;
}
function lf(a, b, c) {
  if (0 !== a.Ca.length && c === a.vb) {
    b.save();
    b.beginPath();
    c = of(a);
    b.moveTo(c.x, c.y);
    b.lineTo(c.x, c.bottom());
    b.lineTo(c.right(), c.bottom());
    b.lineTo(c.right(), c.y);
    b.closePath();
    for (var d = 0;d < a.Ca.length;d++) {
      a.Ca[d].clip(b);
    }
    b.clip();
    b.fillStyle = a.ub;
    b.fillRect(c.x, c.y, c.width, c.height);
    b.restore();
  }
}
function tf(a) {
  a.la = new ob;
}
function U(a, b) {
  var c;
  ia(b);
  return b in a.za ? (c = a.za[b], a.sa.add(b), a.oa.add(b), c) : null;
}
function Wd(a, b) {
  W(a, a.$[a.kb], b, -1);
}
function Td(a, b) {
  ia(b);
  a.oa.add(b);
  a.sa.add(b);
}
function jf(a, b, c) {
  var d, e, f, g;
  void 0 === c && (c = !0);
  u("id" in b, "Must be a node");
  if (!(b.id in a.za) && (a.za[b.id] = b, a.ia.add(b.id), ne(b))) {
    for (g = b.children, e = 0, f = g.length;e < f;e++) {
      d = g[e], jf(a, d, c);
    }
  }
  b.qc(!1);
  c && a.sa.add(b.id);
  a.Cb.add(b.kc());
  b.wa("spotHighlight") && "PathNode" === b.type() && a.Ca.push(b);
  b.Xd();
}
function Te(a) {
  a.log("nextId bumped to %s", a.cb + 1);
  return a.cb++;
}
p.$({}, M.prototype, hf.prototype);
function uf() {
  return "localStorage" in window && null !== window.localStorage;
}
var vf = {};
function wf(a, b, c, d) {
  this.view = a;
  this.Ba = this.Aa = 0;
  this.Pa = !1;
  this.$ = b;
  this.La(c, d);
}
wf.prototype = {log:A("SELECT"), Va:function(a) {
  "touchmove" === a.type ? (a = xf(this.view, a.changedTouches[0]), this.Na(a.x, a.y)) : "touchend" === a.type && (a = xf(this.view, a.changedTouches[0]), this.Oa(a.x, a.y));
}, La:function(a, b) {
  this.Aa = a;
  this.Ba = b;
  this.Pa = !0;
}, Na:function(a, b) {
  if (this.Pa) {
    var c = this.view.ma, d = this;
    this.view.na(function() {
      c.save();
      c.strokeStyle = "#0050B7";
      c.lineWidth = 2 / d.view.scale;
      c.fillStyle = "rgba(0, 80, 183, 0.2)";
      var e = new O(d.Aa + .5, d.Ba + .5, a - d.Aa, b - d.Ba);
      c.fillRect(e.x, e.y, e.width, e.height);
      c.strokeRect(e.x, e.y, e.width, e.height);
      c.restore();
    });
  }
}, Oa:function(a, b) {
  this.Pa = !1;
  this.view.Wa();
  for (var c = this.view, d = sf(c.ja, new O(this.Aa, this.Ba, a - this.Aa, b - this.Ba)), e = 0;e < d.length;e++) {
    yf(c, d[e]);
  }
  T(this.view);
  this.view.na();
  this.view.pa = this.$;
}};
function jb(a) {
  this.view = a;
  Se(this.view, "");
  this.Fb = this.view.ea.Fb();
  this.ia = 1;
  this.Fb && (this.ia = 2);
}
jb.prototype = {log:A("DefaultBehaviour"), Bb:function() {
  this.log("Entering pick tool.");
  this.view.canvas.style.cursor = "default";
}, Gb:function() {
  this.log("Leaving pick tool.");
}, Va:function(a) {
  for (var b, c = 0;c < a.touches.length;c++) {
    b = a.touches[c];
    b = D(this.view, b.pageX, b.pageY);
    if ("touchstart" === a.type) {
      return this.La(b.x, b.y, a);
    }
    if ("touchend" === a.type) {
      return this.Oa(b.x, b.y);
    }
  }
  return !1;
}, La:function(a, b, c) {
  var d, e;
  this.log("onMouseDown");
  if (this.view.ea.get("readOnly")) {
    (d = this.view.ja.Za(a, b, this.view.Ia)) ? (this.log("layer=%s active=%s", oe(d), this.view.Ia), this.view.ta.emit("node-clicked", d.id)) : this.log("readOnly mode: Ignoring click.");
  } else {
    d = this.view;
    if (d.Ea) {
      e = null;
    } else {
      e = d.he / d.scale;
      for (var f = null, g = Number.MAX_VALUE, h = 0;h < d.la.length;h++) {
        var l = d.la[h], k = sb(l.x, l.y, a, b);
        k < e && k < g && (g = k, f = l);
      }
      e = f;
    }
    if (e) {
      G(this.view, new Hd(this.view, e, !1, a, b));
    } else {
      if (d = this.view.selection.length) {
        d = this.view, g = zf(d), h = p(d.canvas).offset(), f = Gd(d.aa), "changedTouches" in c ? (e = c.changedTouches[0].pageX - h.left - g, g = c.changedTouches[0].pageY - h.top - g) : (e = c.pageX - h.left - g, g = c.pageY - h.top - g), d = d.Ka && e > d.canvas.width - d.Ka.width - f && g < d.Ka.height;
      }
      d && Af(this.view);
      if (this.view.Ea && (d = this.view.Ea, e = d.zd(a, b, 1 / this.view.scale * this.ia), null !== e)) {
        G(this.view, new hb(this.view, d, e, a, b));
        return;
      }
      if (d = this.view.ja.Za(a, b, this.view.Ia)) {
        this.log("layer=%s active=%s", oe(d), this.view.Ia), this.view.ta.emit("node-clicked", d.id);
      }
      if (d && oe(d) === this.view.Ia) {
        e = d === this.view.Ea, f = d.rb === this.view.rb, this.log("wasEditNode: %s, wasSelected: %s", e, f), f || (c.shiftKey || this.view.Wa(), yf(this.view, d), T(this.view)), G(this.view, new Hd(this.view, new fe(d, S(d)), !e && f, a, b));
      } else {
        if (c = this.view, c.selection.length && c.Pc.Ib(a, b)) {
          G(this.view, new Hd(this.view, new fe(this.view.selection[0], S(this.view.selection[0])), !0, a, b));
        } else {
          if (c = this.view.ea, "auto" === c.ra.allowSelectBox ? (d = c.Fb(), e = document.documentElement.clientHeight, f = window.innerHeight, g = !d || d && 0 < f - e + 50, c.log("Allowing select box: %s (useTouch=%s, documentHeight=%s, windowHeight=%s)", g, d, e, f), c = g) : c = c.ra.allowSelectBox, c) {
            this.view.Ea = null, G(this.view, new wf(this.view, this, a, b));
          } else {
            return this.log("Disabled select box -- mobile touch active."), this.view.Ea = null, this.view.Wa(), T(this.view), this.view.na(), !1;
          }
        }
      }
    }
  }
}, Oa:function() {
  this.log("onMouseUp");
}, pb:function(a, b) {
  this.log("keyboard: %s", a);
  var c = !0;
  switch(a) {
    case "bring-to-front":
      this.view.sc();
      break;
    case "send-to-back":
      this.view.Ic();
      break;
    case "left":
      Bf(this.view, -1, 0) || (this.view.Ha = Math.min(this.view.Ha + 16, 0), nb(this.view), this.view.na());
      break;
    case "right":
      Bf(this.view, 1, 0) || (this.view.Ha = Math.max(-(this.view.canvas.width * this.view.scale - this.view.canvas.width), this.view.Ha - 16), nb(this.view), this.view.na());
      break;
    case "up":
      Bf(this.view, 0, -1) || (this.view.Fa = Math.min(this.view.Fa + 16, 0), nb(this.view), this.view.na());
      break;
    case "down":
      Bf(this.view, 0, 1) || (this.view.Fa = Math.max(-(this.view.canvas.height * this.view.scale - this.view.canvas.height), this.view.Fa - 16), nb(this.view), this.view.na());
      break;
    case "select-none":
      this.view.Wa();
      T(this.view);
      this.view.na();
      this.view.Da.bb && this.view.nb.emit("goto-toolbar");
      break;
    case "select-all":
      var d = [];
      mf(this.view.ja, function(a) {
        d.push(a);
      });
      this.view.selectNodes(d);
      this.view.na();
      this.view.Da.bb && this.view.nb.emit("goto-toolbar");
      break;
    case "duplicate":
      this.view.duplicate();
      break;
    case "move-up":
      this.view.bd();
      break;
    case "move-down":
      this.view.ad();
      break;
    case "delete":
      Af(this.view);
      break;
    case "curve-tool":
      Cf(this.view);
      break;
    case "line-tool":
      Df(this.view);
      break;
    case "group":
      this.view.group();
      break;
    case "ungroup":
      this.view.Qc();
      break;
    case "undo":
      this.view.Sa();
      break;
    case "redo":
      this.view.Pb();
      break;
    case "cut":
      this.view.ud();
      break;
    case "copy":
      this.view.$b();
      break;
    case "paste":
      this.view.yc();
      break;
    case "zoom-normal":
      if (this.view.ea.get("allowZoom")) {
        var e = Ef(this.view);
        this.view.scale = 1;
        this.view.Ha = -e.x;
        this.view.Fa = -e.y;
        nb(this.view);
        this.view.na();
      } else {
        this.log("Zooming is disabled.");
      }
      break;
    case "zoom-in":
      this.view.ea.get("allowZoom") ? this.view.Sc() : this.log("Zooming is disabled.");
      break;
    case "zoom-out":
      this.view.ea.get("allowZoom") ? this.view.Tc() : this.log("Zooming is disabled.");
      break;
    default:
      c = !1;
  }
  c && (b.preventDefault(), b.stopPropagation());
}, wb:function(a) {
  var b;
  a.fd ? (this.view.Xa = a.Ta, this.view.fb = a.Ta, b = "fillStyle") : (this.view.gb = a.Ta, b = "strokeStyle");
  this.view.setProperty(b, a.Ta);
}, Ob:function(a, b) {
  b ? (this.view.Xa = uc(this.view.Xa, a), this.view.fb = uc(this.view.fb, a)) : this.view.gb = uc(this.view.gb, a);
  $d(this.view, a, b);
}, ec:function(a, b) {
  this.log("onDoubleClick");
  var c = this.view.ja.Za(a, b, this.view.Ia);
  this.log("hittest: %s, hasText: %s", null !== c, null !== c && c.yd());
  this.view.ta.emit("double-click", a, b, c ? c.id : null);
  c && "PathNode" === c.type() && !this.view.ea.get("allowTextInShape") ? this.log("Editing text in shape is disabled.") : c && c.yd() ? (this.log("Text double-clicked."), Ff(this.view), Zd(this.view.pa, c, a, b)) : c && "MathNode" === c.type() && this.view.ta.emit("math.edit", X(this.view)[0]);
}, Lb:function() {
  return "pick";
}};
for (var Gf, Hf = [], If = 0;4 > If;If++) {
  Hf.push(String.fromCharCode(">2$-".charCodeAt(If) ^ "zwibbler3".charCodeAt(If % 9)));
}
Gf = Hf.join("");
for (var Jf, Kf = [115, 116, 114, 111, 107, 101, 84, 101, 120, 116], Lf = [], Mf = 0;Mf < Kf.length;Mf++) {
  Lf.push(String.fromCharCode(Kf[Mf]));
}
Jf = Lf.join("");
function Nf(a, b, c, d, e, f, g) {
  this.ea = e;
  this.le = f;
  this.ie = c;
  this.nb = d;
  this.canvas = a[0];
  this.ma = this.canvas.getContext("2d");
  this.ta = g;
  this.Ca = !0 === e.get("pageView");
  Of(this);
  this.Da = {bb:!1, Pa:!1, qd:!1, x:100, y:100};
  this.pa = new jb(this);
  this.Cb = null;
  this.ba = new Bd("horizontal", !0);
  this.canvas.parentNode.appendChild(this.ba.canvas);
  this.aa = new Bd("vertical", !1);
  this.canvas.parentNode.appendChild(this.aa.canvas);
  this.oa = "none";
  this.$a = 0;
  this.Rc = this.vb = !0;
  this.la = [];
  this.Ia = "default";
  e.Fb() && (this.Ka = document.createElement("img"), this.Ka.setAttribute("src", Y(e, "wd-trash.png")));
  var h = this;
  this.request = new Rb;
  this.request.canvas = this.canvas;
  this.request.on("reformat", function(a) {
    h.log("Node %s requests reformat", a.id);
    a.id in h.ja.za && (h.log("   Reformatting... zoom=%s", h.oa), Td(h.ja, a.id), h.update(), Pf(h), h.ta.emit("resource-loaded"));
  });
  this.request.on("convert-dom-request", function(a, b) {
    h.ta.emit("convert-dom-request", b, a);
  });
  this.Ea = this.ia = null;
  this.sa = 4;
  this.ea.Fb() ? (this.he = 4 * this.sa, this.sa = 9) : this.he = 2 * this.sa;
  this.aa.on("scroll", function(a) {
    h.Fa = -a * h.scale;
    h.na();
  });
  this.ba.on("scroll", function(a) {
    h.Ha = -a * h.scale;
    h.na();
  });
  Qf(this);
  Rf(this, b);
  (a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ? (this.log("Using requestAnimationFrame"), this.Uc = a) : this.log("Emulating requestAnimationFrame");
  this.oc = !1;
  this.Jb = null;
  this.ea.on("update", function(a, b) {
    var c = !1;
    switch(a) {
      case "defaultBrushColour":
        h.fb = b;
        h.pa && void 0 !== h.pa.Ud && h.pa.cd(b);
        break;
      case "defaultFillStyle":
        h.ua.fillStyle = b;
        h.Xa = b;
        break;
      case "defaultStrokeStyle":
        h.gb = b;
        h.ua.strokeStyle = b;
        break;
      case "defaultLineWidth":
        h.ua.lineWidth = b;
        break;
      case "defaultFont":
        h.ua.fontName = b;
        break;
      case "defaultBold":
        h.ua.bold = b;
        break;
      case "defaultItalic":
        h.ua.italic = b;
        break;
      case "defaultFontSize":
        h.ua.fontSize = b;
        break;
      case "defaultTextFillStyle":
        h.ua.textFillStyle = b;
        break;
      case "defaultTextStokeStyle":
        h.ua.textStrokeStyle = b;
        break;
      case "defaultTextLineWidth":
        h.ua.textLineWidth = b;
        break;
      case "defaultBrushWidth":
        h.eb = b;
        h.pa && h.pa.Ud && (h.pa.zb.lineWidth = b);
        break;
      case "pageView":
        h.Ca = b;
        c = !0;
        break;
      case "snap":
      ;
      case "background":
        Qf(h);
        c = !0;
        break;
      case "symmetry":
        c = !0;
        break;
      case "readOnly":
        !0 === b && (J(h), h.Wa(), T(h), c = !0), h.ja.qc(b);
    }
    c && h.na();
  });
  p(document).on("webkitfullscreenchange", function() {
    0 <= navigator.userAgent.search("Safari") && 0 > navigator.userAgent.search("Chrome") && (h.log("SAFARI WORKAROUND: Disabling requestAnimationFrame."), h.Uc = Nf.prototype.Uc);
  });
  this.Ua = !1;
  J(this);
}
Nf.prototype = {log:A("VIEW"), Uc:function(a) {
  a();
}, Kc:function(a, b) {
  this.ja.Kc(a, b);
  b || a !== this.Ia || (this.Wa(), T(this));
  this.na();
}, pb:function(a, b) {
  var c;
  if (this.Da.bb) {
    var d = 0, e = 0, f = this.ea.get("nudge");
    switch(a) {
      case "right":
        d = f;
        break;
      case "left":
        d = -f;
        break;
      case "down":
        e = f;
        break;
      case "up":
        e = -f;
        break;
      case "enter":
        this.pa.qb ? (this.Da.Pa = !1, c = "click") : (this.Da.Pa = !this.Da.Pa, c = this.Da.Pa ? "mousedown" : "mouseup");
    }
    if (d || e) {
      this.Da.x += d, this.Da.x = Math.max(this.Da.x, 0), this.Da.x = Math.min(this.canvas.width, this.Da.x), this.Da.y += e, this.Da.y = Math.max(this.Da.y, 0), this.Da.y = Math.min(this.canvas.height, this.Da.y), this.na(), c = "mousemove";
    }
    c ? (b.preventDefault(), b.stopPropagation(), this.na(), e = p(this.canvas).offset(), d = this.Da.x + e.left, e = this.Da.y + e.top, this.log("Simulate a %s at (%s,%s)", c, d, e), f = document.createEvent("MouseEvents"), f.initMouseEvent(c, !0, !0, window, 0, d, e, d, e, !1, !1, !1, !1, this.Da.Pa ? 1 : 0, null), this.canvas.dispatchEvent(f), c = !0) : c = !1;
  } else {
    c = !1;
  }
  if (!c) {
    this.pa.pb && this.pa.pb(a, b);
    switch(a) {
      case "next-page":
        this.ib(this.ja.kb + 1);
        break;
      case "previous-page":
        this.ib(this.ja.kb - 1);
        break;
      case "zoom-to-page":
        this.ea.get("allowZoom") && Sf(this, "page");
        break;
      case "zoom-to-width":
        this.ea.get("allowZoom") && Sf(this, "width");
    }
    b.preventDefault();
    b.stopPropagation();
  }
}, of:function() {
  return this.Da.bb;
}, Ra:function(a) {
  var b = this.ea.get("snap"), c;
  0 < b ? (c = Math.round(a.x / b) * b, a = Math.round(a.y / b) * b) : (c = a.x, a = a.y);
  return new F(c, a);
}, bd:function() {
  var a = X(this);
  a.length && this.ya([new bf(a, ff)]);
}, ad:function() {
  var a = X(this);
  a.length && this.ya([new bf(a, ef)]);
}, sc:function() {
  var a = X(this);
  a.length && this.ya([new bf(a, cf)]);
}, Ic:function() {
  var a = X(this);
  a.length && this.ya([new bf(a, df)]);
}, setProperty:function(a, b) {
  var c = X(this, !0);
  this.ua[a] = b;
  c.length && this.ya([new be(c, a, b)]);
  0 < this.selection.length && "lineWidth" === a && "BrushNode" === this.selection[0].type() ? this.eb = b : "textFillStyle" === a && (this.ua.textFillStyle = b);
}, group:function() {
  var a = X(this);
  a.length && this.ya([new Ye(a)]);
}, Qc:function() {
  var a = X(this);
  a.length && this.ya([new Ze(a)]);
}, Wa:function() {
  0 < this.selection.length && (this.rb += 1, this.selection.length = 0, this.log("Clear selection. selectGeneration=%s", this.rb));
  this.Ea && (this.log("Clear selection."), this.Ea = null);
}, selectNodes:function(a) {
  this.Wa();
  for (var b = 0;b < a.length;b++) {
    a[b].wa("locked") || "PageNode" === a[b].type() || yf(this, a[b]);
  }
  T(this);
}, ya:function(a, b) {
  if (this.ea.get("readOnly")) {
    this.log("readOnly mode: Ignoring change.");
  } else {
    var c = this.ja.ya(a, b);
    this.log("Commit added %s nodes", c.tb.length);
    var d;
    this.ja.format(this.ma, this.request);
    if (c.tb.length) {
      var e = [];
      for (d = 0;d < c.tb.length;d++) {
        e.push(U(this.ja, c.tb[d]));
      }
      this.selectNodes(e);
    } else {
      if (this.selection.length || this.Ea) {
        e = 0;
        this.rb += 1;
        for (d = 0;d < this.selection.length;d++) {
          d !== e && (this.selection[e] = this.selection[d]), this.selection[e].id in this.ja.za && (this.selection[e].rb = this.rb, e++);
        }
        this.selection.length !== e && (this.selection.length = e);
        !this.Ea || this.Ea.id in this.ja.za || (this.log("EditNode %s no longer exists", this.Ea.id), this.Ea = null);
        0 !== this.selection.length || this.Ea || this.Wa();
        T(this);
      }
    }
    Pf(this);
    this.na();
    this.ta.emit("document-changed");
    c.tb.length && this.ta.emit("nodes-added", c.tb);
    c.Vb.length && this.ta.emit("nodes-changed", c.Vb);
    c.Ub.length && this.ta.emit("nodes-removed", c.Ub);
  }
}, update:function(a, b) {
  if (this.ja.format(this.ma, this.request) || a) {
    Od(this), this.na(b);
  }
}, na:function(a) {
  if (!Tf(this) && (this.Jb = a, !this.oc)) {
    this.oc = !0;
    var b = this;
    this.Uc.call(window, function() {
      b.oc = !1;
      var a = Uf(b), d = a.x, e = a.y, f = a.width, g = a.height;
      b.ma.setTransform(1, 0, 0, 1, 0, 0);
      b.ma.clearRect(0, 0, b.canvas.width, b.canvas.height);
      b.Ca && (b.ma.fillStyle = b.ea.get("outsidePageColour"), b.ma.fillRect(0, 0, b.canvas.width, b.canvas.height));
      b.ma.translate(b.Ha, b.Fa);
      b.ma.scale(b.scale, b.scale);
      a = new I(b.Ha, b.Fa);
      a = a.multiply(new ld(b.scale, b.scale));
      b.ma.Wb = a;
      b.Ca ? (d = b.ma, e = nf(b.ja), d.beginPath(), d.fillStyle = "#ffffff", d.shadowOffsetX = 3 / b.scale, d.shadowOffsetY = 3 / b.scale, d.shadowBlur = 5 / b.scale, d.shadowColor = "rgba(0,0,0,1.0)", d.rect(0, 0, e.width, e.height), d.fill(), d.shadowColor = "rgba(0,0,0,0.0)", d.shadowBlur = 0, d.shadowOffsetX = 0, d.shadowOffsetY = 0, b.ia && b.ia(d, 0, 0, e.width, e.height)) : b.ia ? (b.ma.save(), b.ia(b.ma, d, e, f, g), b.ma.restore()) : Vf(b, b.ma, d, e, Math.max(f, f - d), Math.max(g, g - 
      d));
      d = ye(b);
      e = b.ea.ra.symmetry;
      if (1 < e) {
        f = 2 * Math.PI / e;
        g = b.Ra(new F(b.canvas.width / 2, b.canvas.height / 2));
        e & 1 && (a = new md(f, g.x, g.y));
        for (b.ma.save();f < 2 * Math.PI - 1E-8;) {
          0 === (e & 1) && (a = new nd(f, g.x, g.y)), b.ma.transform(a.m11, a.m21, a.m12, a.m22, a.Aa, a.Ba), b.ja.na(b.ma), f += 2 * Math.PI / e;
        }
        b.ma.setTransform(1, 0, 0, 1, 0, 0);
        b.ma.fillStyle = "rgba(255,255,255,0.3)";
        b.ma.fillRect(0, 0, b.canvas.width, b.canvas.height);
        b.ma.restore();
      }
      b.ja.na(b.ma);
      b.ta.Jb && (b.ma.save(), b.ta.Jb(b.ma), b.ma.restore());
      if (0 < b.selection.length) {
        b.ma.save();
        a = b.ma;
        a.lineWidth = 1 / b.scale;
        a.strokeStyle = "#888888";
        a.beginPath();
        for (e = 0;e < b.selection.length;e++) {
          g = b.selection[e], f = S(g), g = new sd(g.Eb), g.transform(f), ud(g, a, [3 / b.scale, 3 / b.scale]);
        }
        a.stroke();
        f = b.scale;
        for (e = 0;e < b.la.length;e++) {
          var g = b.la[e], h = b.fc.apply(g.x, g.y);
          g instanceof Id ? b.Gc && (a.beginPath(), a.strokeStyle = "#008000", a.lineWidth = 3 / f, a.moveTo(h.x, h.y), a.arc(h.x, h.y, 6 / f, 0, 1.5 * Math.PI, !1), a.stroke()) : (a.beginPath(), a.strokeStyle = "#000", a.lineWidth = 1 / f, a.rect(h.x - b.sa / f, h.y - b.sa / f, b.sa / f * 2, b.sa / f * 2), a.stroke());
        }
        b.ma.restore();
      }
      d && b.ma.restore();
      b.Ea && b.Ea.vd(b.ma, 1 / b.scale);
      b.ub && b.ea.get("showHints") && (b.ma.save(), b.ma.font = 10 / b.scale + "px Arial", b.ma.fillStyle = "#000000", b.ma.textBaseline = "top", b.ma.fillText(b.ub, 0, 0), b.ma.restore());
      d = b.ma;
      b.Da.bb && (a = b.Da.x, e = b.Da.y, d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.beginPath(), b.Da.qd ? (d.moveTo(a - 3, e - 10), d.lineTo(a + 3, e - 10), d.moveTo(a - 3, e + 10), d.lineTo(a + 3, e + 10), d.moveTo(a, e - 10), d.lineTo(a, e + 10)) : (d.moveTo(a, e - 3), d.lineTo(a, e - 15), d.moveTo(a, e + 3), d.lineTo(a, e + 15), d.moveTo(a - 3, e), d.lineTo(a - 15, e), d.moveTo(a + 3, e), d.lineTo(a + 15, e)), b.Da.Pa && b.ma.arc(a, e, 8, 0, 2 * Math.PI, !1), d.lineWidth = 2, d.strokeStyle = 
      "#000000", d.stroke(), d.restore());
      b.pa.Yd && b.pa.Yd(b.ma);
      b.Jb && b.Jb(b.ma);
      0 < b.selection.length && b.Ka && (b.ma.setTransform(1, 0, 0, 1, 0, 0), b.ma.drawImage(b.Ka, b.canvas.width - b.Ka.width - Gd(b.aa), 0));
      b.ma.setTransform(1, 0, 0, 1, 0, 0);
      b.ma.beginPath();
      b.ma.font = "20px Arial";
      f = b.ma.measureText(Gf).width;
      d = b.canvas.width / f;
      b.ma.scale(d, d);
      b.ma.textBaseline = "top";
      b.ma.lineWidth = 4 / d;
      b.ma.strokeStyle = "rgba(128, 128, 128, 0.1)";
      b.ma[Jf](Gf, 0, 0);
    });
  }
}, Sa:function() {
  if (this.ea.get("readOnly")) {
    this.log("readOnly mode: Ignoring undo.");
  } else {
    if (this.ja.Zb()) {
      var a = this.ja.Sa();
      this.ja.format(this.ma, this.request);
      Wf(this);
      Od(this);
      this.na();
      this.ta.emit("document-changed");
      a.tb.length && this.ta.emit("nodes-added", a.tb);
      a.Vb.length && this.ta.emit("nodes-changed", a.Vb);
      a.Ub.length && this.ta.emit("nodes-removed", a.Ub);
    }
  }
}, Pb:function() {
  if (this.ea.get("readOnly")) {
    this.log("readOnly mode: Ignoring redo.");
  } else {
    if (this.ja.Yb()) {
      var a = this.ja.Pb();
      this.ja.format(this.ma, this.request);
      Wf(this);
      Od(this);
      this.na();
      this.ta.emit("document-changed");
      a.tb.length && this.ta.emit("nodes-added", a.tb);
      a.Vb.length && this.ta.emit("nodes-changed", a.Vb);
      a.Ub.length && this.ta.emit("nodes-removed", a.Ub);
    }
  }
}, ud:function() {
  this.$b();
  Af(this);
}, $b:function(a) {
  var b = Md(this);
  if (0 !== b.length) {
    var c;
    c = this.ja;
    var d, e, f, g, h;
    d = [];
    e = 0;
    h = kf(c, b);
    f = 0;
    for (g = h.length;f < g;f++) {
      b = h[f], e = qf(c, b, d, e);
    }
    c = "zwibblerclip." + JSON.stringify(d);
    !0 !== a && (uf() ? window.localStorage.setItem("clipboard", c) : vf.clipboard = "" + c);
    this.log("Reset paste offset to 0");
    this.$a = 0;
    return c;
  }
}, duplicate:function() {
  var a = X(this);
  0 < a.length && this.ya([new af(a, 10)]);
}, yc:function(a) {
  var b = [];
  a || (a = uf() ? window.localStorage.getItem("clipboard") : vf.clipboard);
  a = pf(this.ja, a, b);
  var c = this.ea.get("pasteOffset");
  0 !== c && (this.$a += c, this.log("Using paste offset %s", this.$a), c = new I(this.$a, this.$a), a.push(new R(b, c, c.inverse())));
  this.ya(a);
  this.update();
}, kc:function() {
  return sc(this.canvas);
}, wb:function(a, b) {
  this.pa.wb ? (this.log("Simulating click of colour %s", a), this.pa.wb({Ta:a, fd:b})) : this.log("A colour is not needed for this tool.");
}, ib:function(a) {
  this.ja.ib(a) && (this.Wa(), T(this), this.na(), this.ta.emit("set-page", a));
}, Sc:function() {
  Sf(this, 1.1 * this.scale);
}, Tc:function() {
  Sf(this, this.scale / 1.1);
}};
function Tf(a) {
  a.Ua && a.log("Updates are locked. Ignoring draw/format request");
  return a.Ua;
}
function Xf(a, b) {
  !a.Ua && b ? (a.log("Locking updates."), a.Ua = !0) : a.Ua && !b && (a.log("Resuming updates"), a.Ua = !1, Pf(a), nb(a), a.na());
}
function Uf(a) {
  return new O((0 - a.Ha) / a.scale, (0 - a.Fa) / a.scale, a.canvas.width / a.scale, a.canvas.height / a.scale);
}
function Yf(a, b, c, d) {
  if (!d) {
    if (0 === b.length) {
      d = new F(0, 0);
    } else {
      d = b[0].hb().clone();
      for (var e = 1;e < b.length;e++) {
        hd(d, b[e].hb());
      }
      d = fd(d);
    }
  }
  c = new nd(c, d.x, d.y);
  a.ya([new R(Zf(a, b), c, c.inverse())]);
}
function $f(a, b) {
  var c, d;
  c = a.ja.cb;
  d = a.Ra(new F(100, 100));
  d = new I(d.x, d.y);
  a.ya([new H("ImageNode", {url:b, layer:a.Ia}), new R([c], d, d.inverse())]);
  return J(a);
}
function ag(a, b) {
  b = p.$({}, {commands:Qe(), fillStyle:a.Xa, strokeStyle:a.gb, seed:Math.round(65535 * Math.random()), lineWidth:a.ua.lineWidth, sloppiness:a.ua.sloppiness, layer:a.Ia, wrap:a.ea.get("multilineText"), fontSize:a.ea.get("defaultFontSize")}, b);
  G(a, new Rd(a, "PathNode", b, 100, 100, "circle"));
}
function bg(a, b) {
  b = b || {};
  var c, d, e, f, g;
  e = new ze;
  f = new F(-50, -50);
  g = new F(50, -50);
  d = new F(50, 50);
  c = new F(-50, 50);
  e.moveTo(f.x, f.y);
  e.lineTo(g.x, g.y);
  e.lineTo(d.x, d.y);
  e.lineTo(c.x, c.y);
  e.lineTo(f.x, f.y);
  e.close();
  b = p.$({}, {commands:e.Hb(), fillStyle:a.Xa, strokeStyle:a.gb, seed:Math.round(65535 * Math.random()), lineWidth:a.ua.lineWidth, sloppiness:a.ua.sloppiness, layer:a.Ia, wrap:a.ea.get("multilineText"), fontSize:a.ea.get("defaultFontSize")}, b);
  a.log("Create an item on layer %s", a.Ia);
  G(a, new Rd(a, "PathNode", b, 100, 100, "rectangle"));
}
function Bf(a, b, c) {
  var d = a.ea.get("nudge");
  b *= d / a.scale;
  c *= d / a.scale;
  a.log("Nudge selection by %s, %s", b, c);
  d = X(a);
  d.length && (b = new I(b, c), a.ya([new R(d, b, b.inverse())]));
  return 0 < d.length;
}
function cg(a, b, c, d) {
  a.log("Set document size %s,%s", b, c);
  null === b && (b = void 0);
  null === c && (c = void 0);
  d ? d.push(new gf({width:b, height:c})) : (a.ja.setProperty("width", b), a.ja.setProperty("height", c), nb(a), Pf(a), a.ta.emit("document-changed"));
}
function nb(a) {
  if (!Tf(a)) {
    if (a.ea.get("scrollbars")) {
      var b = Ef(a), c = b.width, d = b.height, e = a.canvas.width / a.scale, f = a.canvas.height / a.scale;
      if (f >= d) {
        a.aa.Ma();
      } else {
        a.aa.show();
        var g = a.aa, h = b.y, l = b.bottom(), k = -a.Fa / a.scale;
        g.ia = h;
        g.ba = l - h;
        g.la = f;
        g.position = k;
        g.format();
        g.na();
      }
      e >= c ? a.ba.Ma() : (a.ba.show(), g = a.ba, h = b.x, b = b.right(), l = -a.Ha / a.scale, g.ia = h, g.ba = b - h, g.la = e, g.position = l, g.format(), g.na());
      e >= c && f >= d || (e >= c ? Dd(a.aa, 20, a.canvas.height) : f >= d ? Dd(a.ba, a.canvas.width, 20) : (Dd(a.aa, 20, a.canvas.height - 20), Dd(a.ba, a.canvas.width - 20, 20)));
    } else {
      a.aa.Ma(), a.ba.Ma();
    }
  }
}
function Ef(a) {
  a.Ca ? (a = nf(a.ja), a = new O(0, 0, a.width, a.height), a.Nb(20, 20)) : a = of(a.ja);
  return a;
}
function dg(a, b) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : G(a, new Re(a, "arrow", void 0, b));
}
function Cf(a, b) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : G(a, new Re(a, "curve", void 0, b));
}
function eg(a, b, c) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.eb, b.strokeStyle = b.strokeStyle || a.fb, G(a, new xe(a, 0, b, c)));
}
function fg(a, b) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.eb, b.strokeStyle = b.strokeStyle || a.fb, G(a, new xe(a, 0, b, "shapebrush")));
}
function gg(a, b) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.eb, b.strokeStyle = b.strokeStyle || a.fb, G(a, new xe(a, 0, b, "brush")));
}
function Df(a, b) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : G(a, new Re(a, "line", void 0, b));
}
function Ff(a) {
  a.ea.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : G(a, new Xd(a));
}
function G(a, b) {
  a.pa && a.pa.Gb && a.pa.Gb();
  a.pa = b;
  b.Bb && b.Bb();
  b.Lb && a.ta.emit("tool-changed", b.Lb());
}
function J(a) {
  G(a, new jb(a));
}
function Se(a, b) {
  b ? (a.ub = a.le.get(b), a.ta.emit("hint", a.ub)) : (a.ub = null, a.ta.emit("hint", ""));
}
function ye(a) {
  if (a.Ca) {
    var b = nf(a.ja);
    a.ma.save();
    a.ma.beginPath();
    a.ma.rect(0, 0, b.width, b.height);
    a.ma.clip();
  }
  return a.Ca;
}
function Pf(a) {
  if (!Tf(a)) {
    var b = Ef(a), c = new O(0, 0, a.canvas.width, a.canvas.height);
    b.bc(a.ke) && c.bc(a.je) ? a.log("No need to rezoom.") : Sf(a, a.oa) ? (a.log("Successfully rezoomed."), a.ke = b, a.je = c) : a.log("Failed to zoom");
  }
}
function Vf(a, b, c, d, e, f) {
  a.background ? (b.fillStyle = a.ma.createPattern(a.background, "repeat"), b.fillRect(c, d, e, f)) : a.ia ? a.ia(b, c, d, e, f) : "G_vmlCanvasManager" in window && (b.fillStyle = "rgba(0, 0, 0, 0.0)", b.fillRect(c, d, e, f));
}
function Qf(a) {
  var b = a.ea.get("snap"), c = null, d, e;
  d = a.ea.get("background");
  var f = ec(d, !0);
  if ("grid" === d) {
    var c = a.ea.get("gridBlocks"), b = a.ea.get("gridSpacing"), g = c * b, c = oc(document.body);
    c.width = g;
    c.height = g;
    d = c.getContext("2d");
    d.beginPath();
    for (e = 0;e < g;e += b) {
      e % g && (d.moveTo(e + .5, 0), d.lineTo(e + .5, g));
    }
    for (e = 0;e < g;e += b) {
      e % g && (d.moveTo(0, e + .5), d.lineTo(g, e + .5));
    }
    d.strokeStyle = a.ea.get("gridColour");
    d.lineWidth = .5;
    d.stroke();
    d.beginPath();
    for (e = 0;e <= g;e += g) {
      d.moveTo(e, 0), d.lineTo(e, g);
    }
    for (e = 0;e <= g;e += g) {
      d.moveTo(0, e + .5), d.lineTo(g, e + .5);
    }
    d.lineWidth = 2;
    d.stroke();
  } else {
    f ? (a.log("Using background colour %s", f.toString()), a.ia = function(a, b, c, d, e) {
      a.fillStyle = f.toString();
      a.fillRect(b, c, d, e);
    }) : 0 < b && "clear" !== d && (c = oc(document.body), c.width = b, c.height = b, d = c.getContext("2d"), d.beginPath(), d.moveTo(0, 0), d.arc(0, 0, 3, 0, 2 * Math.PI, !1), d.moveTo(b, 0), d.arc(b, 0, 3, 0, 2 * Math.PI, !1), d.moveTo(b, b), d.arc(b, b, 3, 0, 2 * Math.PI, !1), d.moveTo(0, b), d.arc(0, b, 3, 0, 2 * Math.PI, !1), d.fillStyle = "#c0c0c0", d.fill());
  }
  c && document.body.removeChild(c);
  a.background = c;
}
function X(a, b) {
  var c = Md(a);
  b || (c = kf(a.ja, c));
  return Zf(a, c);
}
function Zf(a, b) {
  for (var c = [], d = 0;d < b.length;d++) {
    a.log("Selected id=%s", b[d].id), c.push(b[d].id);
  }
  return c;
}
function Md(a) {
  var b = a.selection.concat();
  a.Ea && b.push(a.Ea);
  for (var c = 0;c < b.length;c++) {
    a.log("Selected node=%s", b[c].id);
  }
  return b;
}
function Wf(a) {
  for (var b = 0, c = 0;c < a.selection.length;c++) {
    c !== b && (a.selection[b] = a.selection[c]), a.selection[b].id in a.ja.za && (b += 1);
  }
  a.selection.length !== b && (a.selection.length = b);
  !a.Ea || a.Ea.id in a.ja.za || (a.Ea = null);
}
function Od(a) {
  function b(a, b, c, d, f) {
    !1 !== e.vb && e.la.push(new ee(a, c, new F(b.x + d * b.width, b.y + f * b.height), new F(b.x + (1 - d) * b.width, b.y + (1 - f) * b.height)));
  }
  var c;
  a.vb = !0;
  a.Rc = !0;
  a.la.length = 0;
  if (0 !== a.selection.length) {
    a.$ = a.selection[0].hb().clone();
    a.selection[0].wa("lockSize") && (a.vb = !1);
    a.selection[0].wa("lockRotate") && (a.Rc = !1);
    for (c = 1;c < a.selection.length;c++) {
      hd(a.$, a.selection[c].hb()), a.selection[c].wa("lockSize") && (a.vb = !1), a.selection[c].wa("lockRotate") && (a.Rc = !1);
    }
    1 === a.selection.length ? a.Pc = a.selection[0].Pd() : a.Pc = new zd(a.$);
    c = a.selection[0].wa("rotateHandle");
    var d;
    1 === a.selection.length && c ? (d = S(a.selection[0]), d = d.apply(c[0], c[1]), a.Hc = d.x, a.Nc = d.y) : (a.Hc = a.$.x + a.$.width - 30 / a.scale, a.Nc = a.$.y);
    var e = a, f, g, h = 0 < a.ea.get("snap");
    a.log("snap=%s", a.ea.get("snap"));
    if (1 < a.selection.length) {
      d = new P, f = null, g = a.$, a.ea.get("allowResize") && (b(f, g, d, .5, 0), b(f, g, d, 1, .5), b(f, g, d, .5, 1), b(f, g, d, 0, .5), b(f, g, d, 0, 0), b(f, g, d, 1, 0), b(f, g, d, 1, 1), b(f, g, d, 0, 1)), e.la.push(new Id(f, d, new F(g.x + .5 * g.width, g.y - 30 / a.scale), new F(g.x + .5 * g.width, g.y + .5 * g.height), h));
    } else {
      for (c = 0;c < a.selection.length;c++) {
        f = a.selection[c], g = f.Eb, d = S(f), a.ea.get("allowResize") && (b(f, g, d, .5, 0), b(f, g, d, 1, .5), b(f, g, d, .5, 1), b(f, g, d, 0, .5), b(f, g, d, 0, 0), b(f, g, d, 1, 0), b(f, g, d, 1, 1), b(f, g, d, 0, 1)), e.la.push(new Id(f, S(f), new F(g.x + .5 * g.width, g.y - 30 / a.scale), new F(g.x + .5 * g.width, g.y + .5 * g.height), h));
      }
    }
  }
}
function T(a) {
  Od(a);
  if (a.Cb) {
    var b = a.Cb, c = a.selection;
    b.action = null;
    b.$.length = 0;
    b.aa = {};
    b.za = c.concat();
    for (var d = !1, e = 0;e < c.length;e++) {
      var f = c[e];
      me(f) && (d = !0);
      var g = le(f), h;
      for (h in g) {
        if (g.hasOwnProperty(h)) {
          var l = b, k = h, n = f, q = void 0, q = l.ea;
          k in l.aa ? (q = l.aa[k], q.value !== n.wa(k) && (q.value = null)) : "locked" === k || "points" === k || !0 === n.wa("closed") && ("arrowSize" === k || "arrowStyle" === k || "doubleArrow" === k) || !1 === n.wa("closed") && ("fontName" === k || "fontSize" === k || "textFillStyle" === k || "text" === k || "fillStyle" === k) || "ImageNode" === n.type() && ("fillStyle" === k || "strokeStyle" === k || "lineWidth" === k || "shadow" === k) || "BrushNode" === n.type() && "fillStyle" === k || "MathNode" === 
          n.type() && ("fillStyle" === k || "strokeStyle" === k || "lineWidth" === k) || "TextNode" === n.type() && "fillStyle" === k || "lockSize" === k || "lockRotate" === k || "rotateAround" === k || "layer" === k || 0 === k.indexOf("cell-") || "fontName" === k && !q.get("showFontNameProperty") || "fontSize" === k && !q.get("showFontSizeProperty") || "smoothness" === k && !q.get("showSmoothnessProperty") || "sloppiness" === k && !q.get("showSloppinessProperty") || (q = {Cd:hg(l, n, k), value:n.wa(k)}, 
          q.Cd.display && 0 === q.Cd.display.indexOf("Display-") || (l.$.push(q), l.aa[k] = q));
        }
      }
    }
    ig(b);
    if (b.ea.get("showKeyboardHelp")) {
      for (f = d, d = Qa(p("<div>"), "keydiv"), d.da("font-size", "8pt"), d.da("color", "#909090"), d.da("font-weight", "normal"), p(b.ha).append(d), g = b.la.cc(), d.append("<h1>" + g("keyboard") + "</h1>"), e = [{key:b.ea.get("keyCurveTool"), description:g("draw-curves")}, {key:b.ea.get("keyLineTool"), description:g("draw-lines")}], 0 < c.length && e.push({key:b.ea.get("keyDelete"), description:g("delete-selection")}, {key:b.ea.get("keyDuplicate"), description:g("duplicate-selection")}, {key:b.ea.get("keyMoveUp"), 
      description:g("move-selection-closer")}, {key:b.ea.get("keyMoveDown"), description:g("move-selection-away")}), 1 < c.length && e.push({key:b.ea.get("keyGroup"), description:g("group-selection")}), f && e.push({key:b.ea.get("keyUngroup"), description:g("break-apart-group")}), e.push({key:b.ea.get("keyZoomIn"), description:g("zoom-in")}), e.push({key:b.ea.get("keyZoomOut"), description:g("zoom-out")}), e.push({key:g("arrow-keys"), description:g("move-while-zoomed")}), b = 0;b < e.length;b++) {
        c = Qa(p("<a>").text(e[b].key), "key"), c.da("background", "#d0d0d0"), c.da("border-left", "1px solid #808080"), c.da("border-right", "1px solid #e0e0e0"), c.da("border-top", "1px solid #808080"), c.da("border-bottom", "1px solid #e0e0e0"), c.da("padding-left", "0.5em"), c.da("padding-right", "0.5em"), c.da("margin-right", "1em"), c.da("color", "#4fa0d3"), c.da("font-weight", "bold"), c = p("<p>").append(c), c[0].appendChild(document.createTextNode(e[b].description)), d.append(c);
      }
    }
  }
  a.ta.emit("selected-nodes");
}
function yf(a, b) {
  a.Ea = null;
  if (b.rb !== a.rb && oe(b) === a.Ia) {
    a.selection.push(b);
    b.rb = a.rb;
    if (me(b)) {
      for (var c = b.parent, d = 0;d < c.children.length;d++) {
        yf(a, c.children[d]);
      }
      yf(a, c);
    }
    b.children && 0 < b.children.length && yf(a, b.children[0]);
  }
}
function Af(a) {
  var b = X(a);
  b.length && a.ya([new Xe(b)]);
}
function $d(a, b, c) {
  a.log("setSelectionOpacity(%s, fill=%s)", b, c);
  var d = X(a, !0), e = [];
  c = c ? "fillStyle" : "strokeStyle";
  for (var f = 0;f < d.length;f++) {
    var g = d[f], h = U(a.ja, g).wa(c);
    h && (h = uc(h, b), e.push(new be([g], c, h)), a.log("   set %s of %s to %s", c, g, h));
  }
  e.length && a.ya(e);
  a.log("   Affected %s of %s nodes", e.length, d.length);
}
function de(a) {
  a.Da.bb = !0;
  a.Da.qd = !1;
  if (0 < a.selection.length) {
    a.log("showKeyboardCursorAndStartMoving()");
    a.Da.Pa = !0;
    var b = fd(a.$);
    a.Da.x = b.x;
    a.Da.y = b.y;
    J(a);
    G(a, new Hd(a, new fe(a.selection[0], S(a.selection[0])), !1, b.x - 4, b.y - 4));
  }
  a.na();
}
function Of(a) {
  var b = zf(a), c = new Date;
  p(a.canvas).bind("touchstart", function(b) {
    if (a.pa.Va) {
      var d = !0;
      300 < (new Date).getTime() - c.getTime() ? d = !1 !== a.pa.Va(b.ab) : a.pa.ec && (d = xf(a, b.ab.touches[0]), d = !1 !== a.pa.ec(d.x, d.y, b.ab));
      d && (b.stopPropagation(), b.preventDefault());
      c = new Date;
    }
  });
  p(a.canvas).bind("touchmove", function(b) {
    a.pa.Va && !1 !== a.pa.Va(b.ab) && (b.stopPropagation(), b.preventDefault());
  });
  p(a.canvas).bind("touchend", function(b) {
    a.pa.Va && !1 !== a.pa.Va(b.ab) && (b.stopPropagation(), b.preventDefault());
  });
  p(a.canvas).bind("gesturestart", function(b) {
    a.log("GestureStart");
    a.pa.mc && !1 !== a.pa.mc(b.ab) && (b.stopPropagation(), b.preventDefault());
  });
  p(a.canvas).bind("gesturechange", function(b) {
    a.log("GestureChange");
    a.pa.mc && !1 !== a.pa.mc(b.ab) && (b.stopPropagation(), b.preventDefault());
  });
  p(a.canvas).bind("gestureend", function(b) {
    a.log("GestureEnd");
    a.pa.mc && !1 !== a.pa.mc(b.ab) && (b.stopPropagation(), b.preventDefault());
  });
  var d = new F(0, 0), e = 0;
  p(a.canvas).bind("pointerdown", function(c) {
    a.log("PointerDown");
    d = new F(c.pageX, c.pageY);
    e = (new Date).getTime();
    if (a.pa.La) {
      var f = p(a.canvas).offset();
      !1 !== a.pa.La((c.pageX - f.left - b - a.Ha) / a.scale, (c.pageY - f.top - b - a.Fa) / a.scale, c.ab) && (c.stopPropagation(), c.preventDefault());
    }
  });
  p(a.canvas).bind("pointermove", function(c) {
    if (a.pa.Na) {
      var d = p(a.canvas).offset();
      !1 !== a.pa.Na((c.pageX - d.left - b - a.Ha) / a.scale, (c.pageY - d.top - b - a.Fa) / a.scale, c.ab) && (c.stopPropagation(), c.preventDefault());
    }
  });
  p(a.canvas).bind("pointerup", function(c) {
    a.log("PointerUp");
    var f, l;
    a.pa.Oa && (f = p(a.canvas).offset(), l = (c.pageX - f.left - b - a.Ha) / a.scale, f = (c.pageY - f.top - b - a.Fa) / a.scale, !1 !== a.pa.Oa(l, f, c.ab) && (c.stopPropagation(), c.preventDefault()));
    a.log("TimeDist=%s PixelDist=%s", (new Date).getTime() - e, d.lb(new F(c.pageX, c.pageY)));
    a.pa.qb && 200 > (new Date).getTime() - e && 2 > d.lb(new F(c.pageX, c.pageY)) && (a.log("Simulate mouseclick from pointerup"), f = p(a.canvas).offset(), l = (c.pageX - f.left - b - a.Ha) / a.scale, f = (c.pageY - f.top - b - a.Fa) / a.scale, !1 !== a.pa.qb(l, f, c.ab) && (c.stopPropagation(), c.preventDefault()));
  });
  La(p(a.canvas), function(c) {
    if (a.pa.Na) {
      var d = p(a.canvas).offset();
      a.pa.Na((c.pageX - d.left - b - a.Ha) / a.scale, (c.pageY - d.top - b - a.Fa) / a.scale, c);
    }
    c.preventDefault();
  });
  Na(p(a.canvas), function(c) {
    var d = p(a.canvas).offset();
    a.pa.La && a.pa.La((c.pageX - d.left - b - a.Ha) / a.scale, (c.pageY - d.top - b - a.Fa) / a.scale, c);
    c.preventDefault();
  });
  Ma(p(a.canvas), function(c) {
    var d = p(a.canvas).offset();
    a.pa.Oa && a.pa.Oa((c.pageX - d.left - b - a.Ha) / a.scale, (c.pageY - d.top - b - a.Fa) / a.scale, c);
    c.stopPropagation();
    c.preventDefault();
  });
  p(a.canvas).click(function(c) {
    var d = p(a.canvas).offset();
    a.pa.qb && a.pa.qb((c.pageX - d.left - b - a.Ha) / a.scale, (c.pageY - d.top - b - a.Fa) / a.scale, c);
    c.stopPropagation();
    c.preventDefault();
  });
  Ka(p(a.canvas), function(c) {
    var d = p(a.canvas).offset();
    if (a.pa.ec || a.pa.qb) {
      var e = (c.pageX - d.left - b - a.Ha) / a.scale, d = (c.pageY - d.top - b - a.Fa) / a.scale;
      rc() && a.pa.qb && (a.log("Insert false mouse click for IE"), a.pa.qb(e, d));
      a.pa.ec && a.pa.ec(e, d, c);
    }
    c.stopPropagation();
    c.preventDefault();
  });
  p(a.canvas).bind("mouseenter", function(a) {
    a.stopPropagation();
    a.preventDefault();
  });
  p(a.canvas).bind("mouseleave", function(a) {
    a.stopPropagation();
    a.preventDefault();
  });
  p(a.canvas).bind("mouseover", function(a) {
    a.stopPropagation();
    a.preventDefault();
  });
  p(a.canvas).bind("mouseout", function(a) {
    a.stopPropagation();
    a.preventDefault();
  });
  !window.parent && a.ea.get("setFocus") && p(a.canvas).focus();
  a.ie.bind("colour", function(b) {
    a.pa.wb && a.pa.wb(b);
  });
  a.ie.bind("opacity", function(b, c) {
    a.pa.Ob && a.pa.Ob(b, c);
  });
  var f = "mousewheel";
  "onwheel" in document.createElement("div") && (f = "wheel");
  a.log("Binding to '%s' for mouse wheel", f);
  p(a.canvas).bind(f, function(c) {
    var d = c.ab.wheelDelta || -40 * c.ab.deltaY, e = d / 120 * 32, f = p(a.canvas).offset(), n = (c.pageX - f.left - b - a.Ha) / a.scale, f = (c.pageY - f.top - b - a.Fa) / a.scale;
    a.pa.Bd && !1 !== a.pa.Bd(n, f, e, c.ab) || "block" !== a.aa.canvas.style.display || (n = Ef(a), a.Fa = -120 >= d ? Math.max(a.Fa + e, -(n.bottom() * a.scale - a.canvas.height)) : Math.min(a.Fa + e, -n.y * a.scale), nb(a), a.na(), c.stopPropagation(), c.preventDefault());
  });
}
function xf(a, b) {
  return D(a, b.pageX, b.pageY);
}
function ce(a, b, c) {
  var d = zf(a), e = p(a.canvas).offset();
  return new F(b * a.scale + a.Ha + e.left + d, c * a.scale + a.Fa + e.top + d);
}
function D(a, b, c) {
  var d = zf(a), e = p(a.canvas).offset();
  return a.Ra(new F((b - e.left - d - a.Ha) / a.scale, (c - e.top - d - a.Fa) / a.scale));
}
function Sf(a, b) {
  var c;
  a.log("Zooming to: %s", b);
  var d = a.canvas.width - 20;
  c = "width" in a.ja.fa;
  var e = !0;
  a.oa = b;
  c || (a.log("WARNING: Cannot zoom to page/width because the document size has not been set."), e = !1);
  if (y(b)) {
    a.scale = b;
  } else {
    if ("none" === b || a.ja.empty() || !c) {
      a.scale = 1, a.Ha = 0, a.Fa = 0;
    } else {
      if ("page" === b) {
        c = Ef(a);
        var f = d = 0;
        a.scale = Math.min(a.canvas.width / c.width, a.canvas.height / c.height);
        a.scale * c.width < a.canvas.width && (d += (a.canvas.width - a.scale * c.width) / 2 / a.scale);
        a.scale * c.height < a.canvas.height && (f += (a.canvas.height - a.scale * c.height) / 2 / a.scale);
        "centre" === a.ea.get("pagePlacement") && (a.Ha = -(c.x - d) * a.scale);
        a.Fa = -(c.y - f) * a.scale;
        a.log("RECT=%s scale=%s tx=%s", c, a.scale, a.Ha);
        a.oa = b;
      } else {
        "width" === b && (c = Ef(a), a.scale = d / c.width, a.Ha = -c.x * a.scale, a.Fa = -c.y * a.scale, a.log("RECT=%s scale=%s tx=%s ty=%s", c, a.scale, a.Ha, a.Fa), a.oa = b);
      }
    }
  }
  nb(a);
  a.na();
  return e;
}
function jg(a, b, c) {
  a.ua[b] = c;
  "fillStyle" === b ? a.Xa = c : "strokeStyle" === b && (a.gb = c);
}
function Rf(a, b) {
  a.log("setDocument()");
  a.ja = b;
  a.scale = 1;
  a.Ha = 0;
  a.Fa = 0;
  a.selection = [];
  a.Ea = null;
  a.rb = 1;
  a.$ = new O(0, 0, 0, 0);
  a.Pc = new zd(a.$);
  a.fc = new P;
  a.Gc = !0;
  a.Hc = 0;
  a.Nc = 0;
  a.ub = null;
  a.Ia = "default";
  a.Xa = "#ffffff";
  a.fb = a.ea.ra.defaultBrushColour;
  a.gb = a.ea.ra.defaultStrokeStyle;
  a.ua = {};
  a.ua.lineWidth = a.ea.ra.defaultLineWidth;
  a.ua.sloppiness = .5;
  a.ua.fontName = a.ea.ra.defaultFont;
  a.ua.fontSize = a.ea.ra.defaultFontsize;
  a.ua.bold = a.ea.ra.defaultBold;
  a.ua.italic = a.ea.ra.defaultItalic;
  a.ua.smoothness = .3;
  a.ua.textFillStyle = a.ea.ra.defaultTextFillStyle;
  a.ua.textStrokeStyle = a.ea.ra.defaultTextStrokeStyle;
  a.ua.textLineWidth = a.ea.ra.defaultTextLineWidth;
  a.eb = a.ea.get("defaultBrushWidth");
  var c = Ef(a);
  a.Ha = -c.x;
  a.Fa = -c.y;
  nb(a);
  a.ja.ub = a.ea.get("spotHighlightColour");
  a.ja.vb = a.ea.get("spotHighlightZIndex");
  a.ja.format(a.ma, a.request);
  a.ke = new O(0, 0, 0, 0);
  a.je = new O(0, 0, 0, 0);
  "none" !== a.oa ? Sf(a, a.oa) : (Sf(a, a.ea.get("defaultZoom")), a.na());
}
function zf(a) {
  return parseInt(p(a.canvas).da("border-left-width"), 10) || 0;
}
;function kg(a, b) {
  this.methods = b;
  this.view = a;
}
kg.prototype = {log:A("CustomToolBehaviour"), Bb:function() {
  this.log("Entering CustomToolBehaviour");
  this.methods.enter && this.methods.enter();
}, Gb:function() {
  this.log("Leaving CustomToolBehaviour");
  this.methods.leave && this.methods.leave();
}, qb:function(a, b, c) {
  return this.methods.onMouseClick ? this.methods.onMouseClick(a, b, c) : !1;
}, La:function(a, b, c) {
  return this.methods.onMouseDown ? this.methods.onMouseDown(a, b, c) : !1;
}, Na:function(a, b, c) {
  return this.methods.onMouseMove ? this.methods.onMouseMove(a, b, c) : !1;
}, Oa:function(a, b, c) {
  return this.methods.onMouseUp ? this.methods.onMouseUp(a, b, c) : !1;
}, ec:function(a, b, c) {
  return this.methods.onDoubleClick ? this.methods.onDoubleClick(a, b, c) : !1;
}, wb:function(a) {
  return this.methods.onColour ? this.methods.onColour(a.Ta) : !1;
}, pb:function(a) {
  this.log("keyboard: %s", a);
  "cancel" === a && (this.log("ESC pressed. Abort brush and go back to toolbar."), J(this.view), this.view.nb.emit("goto-toolbar"));
}, Va:function(a) {
  if (this.methods.onTouch) {
    return this.methods.onTouch(a);
  }
  var b;
  b = a.touches[0];
  b = D(this.view, b.pageX, b.pageY);
  return "touchstart" === a.type ? this.La(b.x, b.y, a) : "touchend" === a.type ? this.Oa(b.x, b.y, a) : "touchmove" === a.type ? this.Na(b.x, b.y, a) : !1;
}, Bd:function(a, b, c, d) {
  return this.methods.onMouseWheel ? this.methods.onMouseWheel(a, b, c, d) : !1;
}, Lb:function() {
  return this.methods.getToolName ? this.methods.getToolName() : null;
}};
function lg(a, b) {
  this.$ = a;
  this.name = b;
  this.ha = p("<div>").da("border-top", "1px solid #888").da("padding", "5px").da("cursor", "default");
  this.$.append(this.ha);
  this.update(0);
}
lg.prototype = {update:function(a) {
  this.ha.text(this.name + "... " + Math.round(100 * a) + "%");
}, error:function(a) {
  var b = this, c = Pa();
  c.click(function() {
    b.done();
  });
  Sa(this.ha, this.name + "... " + a + " ");
  this.ha.append(c);
}, done:function() {
  this.ha.remove();
}};
function mg(a) {
  for (var b = [], c = 0;c < a;c++) {
    b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890"[Math.floor(63 * Math.random())]);
  }
  return b.join("");
}
"object" === typeof module && (exports.gg = mg);
function ng(a) {
  function b(b) {
    c && clearTimeout(c);
    c = setTimeout(function() {
      c = null;
      a();
    }, arguments.length ? b : 1E3);
  }
  var c = null;
  b.$ = function() {
    c && (clearTimeout(c), c = null);
  };
  return b;
}
;function og(a) {
  a = a.replace(/\+/g, " ");
  return window.decodeURIComponent ? window.decodeURIComponent(a) : unescape(a);
}
function pg() {
  var a;
  a = a || window.location.hash;
  0 === a.indexOf("#/") && (a = "#" + a.substr(2));
  var b = a, c, d, e, f;
  a = {};
  e = b.indexOf("#");
  0 <= e && (b = b.substr(e + 1));
  e = b.indexOf("#");
  0 <= e && (b = b.substr(0, e));
  b = b.split("&");
  e = 0;
  for (f = b.length;e < f;e++) {
    c = b[e], d = c.split("="), c = og(d[0]), d = 1 < d.length ? og(d[1]) : "", c.length && (a[c] = d);
  }
  return a;
}
;var qg, rg, sg;
sg = document.getElementsByTagName("script");
rg = sg[sg.length - 1];
qg = void 0 !== rg.getAttribute.length ? rg.src : rg.getAttribute("src", -1);
function tg(a) {
  var b, c;
  this.ra = {angleArcs:0, allowSelectBox:"auto", allowResize:!0, allowTextInShape:!0, allowZoom:!0, autoPickTool:!0, background:"clear", backgroundImage:null, colourPicker:"wheel", colourPalette:"#000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" "), debug:!1, defaultArrowStyle:"simple", defaultArrowSize:15, defaultItalic:!1, defaultBold:!1, defaultBrushColour:"#000000", defaultBrushWidth:10, defaultFillStyle:"#e0e0e0", 
  defaultFont:"Arial", defaultFontSize:20, defaultLineWidth:2, defaultPaperSize:"none", defaultRoundRectRadius:10, defaultSmoothness:"smooth", defaultStrokeStyle:"#000000", defaultText:"Lorum ipsum dolor", defaultTextFillStyle:"#000000", defaultTextStrokeStyle:"#000000", defaultTextLineWidth:0, defaultZoom:1, fonts:["Arial", "Times New Roman"], gridBlocks:10, gridSpacing:20, gridColour:"#cccccc", imageFolder:"$SCRIPT", iPadNoScrollText:!1, keyBringToFront:"Home", keyCancel:"ESC", keyCopy:"Ctrl+C,\u2318+C", 
  keyCurveTool:"C", keyCut:"Ctrl+X,\u2318+X,Shift+Delete", keyDelete:"Delete,Backspace", keyDown:"Down", keyDuplicate:"Ctrl+D", keyEnter:"Enter", keyGroup:"Ctrl+G", keyLeft:"Left", keyLineTool:"L", keyMoveDown:"PageDown", keyMoveUp:"PageUp", keyNext:"Down,Right", keyNextPage:"Shift+PageDown", keyPaste:"Ctrl+V,\u2318+V,Shift+Insert", keyPrevious:"Left,Up", keyPreviousPage:"Shift+Pageup", keyRedo:"Ctrl+Shift+Z", keyRight:"Right", keySelectNone:"ESC", keySelectAll:"Ctrl+A", keySendToBack:"End", keyUndo:"Ctrl+Z", 
  keyUngroup:"Ctrl+Shift+G", keyUp:"Up", keyZoomIn:"+,Shift+=", keyZoomNormal:"=", keyZoomOut:"-", keyZoomToPage:"F4", keyZoomToWidth:"Shift+F4", language:"en", multilineText:!1, nudge:10, outsidePageColour:"#808080", pagePlacement:"centre", pageSelectorDiv:"", pageView:!1, pasteOffset:10, persistent:!1, readOnly:!1, scrollbars:!0, setFocus:!0, showArrowTool:!0, showBackgroundSelector:!1, showBrushTool:!0, showCircleTool:!0, showColourPanel:!0, showCopyPaste:!0, showCurveTool:!0, showDebug:!1, showFontNameProperty:!0, 
  showFontSizeProperty:!0, showHints:!0, showImageSelector:!1, showImageTool:!1, showKeyboardHelp:!0, showLineTool:!0, showMathTool:!1, showMoveToFrontBack:!1, showPageSelector:!1, showPageSelectorControls:!0, showPickTool:!0, showPropertyPanel:!1, showRoundRectTool:!1, showShapeBrushTool:!1, showSloppinessProperty:!0, showSmoothnessProperty:!0, showSquareTool:!0, showTextTool:!0, showToolbar:!0, showUndoRedo:!0, sloppy:!1, snap:0, spotHighlightColour:"rgba(0,0,0,0.2)", spotHighlightZIndex:0, symmetry:0, 
  textMode:"interactive", toolbarButtonSize:50, useTouch:"auto", enableArrowKeysNudge:!1, showMenu:!1};
  for (c in a) {
    a.hasOwnProperty(c) && (c in this.ra || alert("Zwibbler: Unknown option '" + c + "'"), this.ra[c] = a[c]);
  }
  a = pg();
  for (c in a) {
    a.hasOwnProperty(c) && ug(this, c, a[c]);
  }
  "" === vg() ? (this.$ = this.ra.imageFolder.replace("$SCRIPT/", ""), this.$ = this.$.replace("$SCRIPT", "")) : this.$ = this.ra.imageFolder.replace("$SCRIPT", vg());
  "" !== this.$ && "/" !== this.$[this.$.length - 1] && (this.$ += "/");
  "auto" === this.ra.useTouch && (c = "ontouchstart" in window || "onmsgesturechange" in window, this.log("Detected touch support: %s", c));
  for (b in this.ra) {
    this.ra.hasOwnProperty(b) && this.log("%s=%s", b, this.ra[b]);
  }
}
tg.prototype = {log:A("CONFIG"), Hf:function() {
  return this.ra.showBrushTool;
}, ge:function() {
  return this.ra.showPropertyPanel;
}, If:function() {
  return this.ra.showColourPanel;
}, Jf:function() {
  return this.ra.showToolbar;
}, get:function(a) {
  return this.ra[a];
}, Fb:function() {
  return "auto" === this.ra.useTouch ? "ontouchstart" in window || "onmsgesturechange" in window : this.ra.useTouch;
}};
function wg(a, b) {
  for (var c in a.ra) {
    if (a.ra.hasOwnProperty(c) && 0 === c.indexOf("key")) {
      for (var d = "", e = 0;e < c.length;e++) {
        var f = c.charAt(e), d = f === f.toUpperCase() ? d + ("-" + f.toLowerCase()) : d + f
      }
      b.map(a.ra[c], d.substr(4));
    }
  }
}
function xg(a) {
  a = a.get("pageSelectorDiv");
  return void 0 !== a.className ? a : "" !== a && p(a).length ? p(a)[0] : null;
}
function Y(a, b) {
  return 0 === b.indexOf("http:") || 0 === b.indexOf("https:") || 0 === b.indexOf("/") ? b : a.$ + b;
}
function vg() {
  var a, b;
  b = qg;
  a = b.lastIndexOf("/");
  0 <= a ? b = b.substr(0, a + 1) : b = "";
  return b;
}
function ug(a, b, c) {
  if (!(b in a.ra)) {
    return a.log("Error: %s is not a configuration option.", b), !1;
  }
  if ("defaultZoom" === b) {
    if ("page" !== c && "width" !== c && !y(c) && (c = parseFloat(c), isNaN(c))) {
      return a.log("Error: Config option %s must be a number or 'page' or 'width'", b), !1;
    }
  } else {
    if ("string" === typeof c) {
      if ("number" === typeof a.ra[b]) {
        if (c = parseFloat(c), isNaN(c)) {
          return a.log("Error: Config option %s expects a number", b), !1;
        }
      } else {
        "boolean" === typeof a.ra[b] && (c = "1" === c || "true" === c || "" === c);
      }
    }
  }
  a.log("Set config %s=%s", b, c);
  a.ra[b] = c;
  a.wd("update", b, c);
  return !0;
}
tg.prototype = p.$({}, M.prototype, tg.prototype);
function yg(a) {
  zg(this, a);
}
function zg(a, b) {
  a.ha = b || p("<div>");
  a.ha.da("position", "absolute");
  a.ha.da("margin", "0px");
  a.ha.da("padding", "0px");
  p("body").append(a.ha);
}
m = yg.prototype;
m.width = function(a) {
  function b(a) {
    a = parseInt(c.ha.da(a), 10);
    return isNaN(a) ? 0 : a;
  }
  var c = this;
  if (void 0 === a) {
    return this.ha.outerWidth();
  }
  a -= b("border-left-width");
  a -= b("border-right-width");
  a -= b("padding-right");
  a -= b("padding-left");
  a -= b("margin-left");
  a -= b("margin-right");
  a = Math.max(0, a);
  this.ha.da("width", "" + a + "px");
};
m.height = function(a) {
  function b(a) {
    a = parseInt(c.ha.da(a), 10);
    return isNaN(a) ? 0 : a;
  }
  var c = this;
  if (void 0 === a) {
    return this.ha.outerHeight();
  }
  a -= b("border-top-width");
  a -= b("border-bottom-width");
  a -= b("padding-top");
  a -= b("padding-bottom");
  a -= b("margin-top");
  a -= b("margin-bottom");
  this.ia = a = Math.max(0, a);
  this.ha.da("height", "" + this.ia + "px");
};
m.moveTo = function(a, b) {
  null !== a && this.ha.da("left", "" + a + "px");
  null !== b && this.ha.da("top", "" + b + "px");
};
m.show = function() {
  this.ha.show();
};
m.Ma = function() {
  this.ha.Ma();
};
function Ag(a) {
  yg.apply(this, arguments);
  var b = this;
  this.ha.da("background", "black");
  this.ha.da("font-family", '"Lucida Console","Dejavu Sans Mono",Monospace,"Courier New"');
  this.ha.da("font-size", "10px");
  this.ha.da("line-height", "12px");
  this.ha.da("overflow", "scroll");
  this.ha.da("cursor", "default");
  this.oa = 0;
  this.la = {};
  this.bb = !1;
  qa(function(a, d) {
    return Bg(b, a, d);
  });
  this.ba = null;
  this.aa = [];
  Bg(this, "DEBUG", "Debug window starting");
}
Ag.prototype = {$:"#ffffff #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" "), show:function() {
  yg.prototype.show.call(this);
  this.bb = !0;
  Cg(this);
  this.ha[0].scrollTop = this.ha[0].scrollHeight;
}, Ma:function() {
  this.bb = !1;
  yg.prototype.Ma.call(this);
}};
function Cg(a) {
  var b, c, d, e, f, g;
  g = a.aa;
  e = 0;
  for (f = g.length;e < f;e++) {
    c = g[e];
    d = c.key;
    c = c.rf;
    b = a;
    var h = d;
    h in b.la || (b.la[h] = b.$[b.oa], b.oa = (b.oa + 1) % b.$.length);
    b = b.la[h];
    b = p("<div>").da("color", b);
    b.da("border-bottom", "1px solid #222");
    b.text("" + d + ": " + c);
    a.ha.append(b);
  }
  a.ha[0].scrollTop = a.ha[0].scrollHeight;
  a.ba = null;
  a.aa.length = 0;
}
function Bg(a, b, c) {
  var d, e, f;
  f = c.split("\n");
  d = 0;
  for (e = f.length;d < e;d++) {
    c = f[d], a.aa.push({key:b, rf:c});
  }
  a.bb && null === a.ba && (a.ba = setTimeout(function() {
    return Cg(a);
  }, 100));
}
Rc(yg.prototype, Ag.prototype);
function Dg(a) {
  var b = p("<div>");
  zg(this, b);
  a.append(this.ha);
  this.oa = {};
  this.aa = 128;
  this.$ = 0;
  this.ha.da("overflow-x", "auto");
  this.ha.da("overflow-y", "auto");
  this.sa = 0;
  this.la = 1;
  this.ba = [];
  this.Ca = null;
}
Dg.prototype = {on:function(a, b) {
  this.oa[a] = b;
}, log:A("ListView"), format:function() {
  var a, b, c, d, e;
  b = null;
  e = this.ba;
  c = 0;
  for (d = e.length;c < d;c++) {
    a = e[c];
    if (!a.Td) {
      if (null === b) {
        b = this.ha;
        var f = a.Ga, f = Da(f);
        0 < b.length ? b[0].insertBefore(f[0], b[0].firstChild) : b[0].appendChild(f[0]);
      } else {
        Ta(b.Ga, a.Ga);
      }
      a.Td = !0;
    }
    b = a;
  }
}};
function Eg(a) {
  a.ha.empty();
  a.ba.length = 0;
  a.la += 1;
}
function Fg(a, b, c, d) {
  var e, f;
  f = a.la;
  e = {Ga:null, index:a.sa, Td:!1};
  a.sa += 1;
  Jb(b, function(b) {
    var h, l;
    f === a.la && (l = b.width, h = b.height, a.aa && l > a.aa && (b.width = a.aa, b.height = h / l * a.aa), a.$ && h > a.$ && (b.width = a.$ / (h / l), b.height = a.$), b = p(b), b.da("margin", "2px"), b.da("border-width", "3"), b.da("border-color", "white"), b.da("border-style", "solid"), b.da("image-rendering", "optimizeQuality"), Ja(b, function() {
      a.log("Mouseenter");
      return b.da("border-color", "#888888");
    }), Ia(b, function() {
      return b.da("border-color", "white");
    }), b.click(function() {
      if ("click" in a.oa) {
        return a.oa.click(c);
      }
    }), d && b.Ja("title", d), e.Ga = b, a.ba.push(e), a.ba.sort(function(a, b) {
      return a.index - b.index;
    }), a.Ca || (a.Ca = setTimeout(function() {
      a.Ca = null;
      a.format();
    }, 500)));
  });
}
Dg.prototype = p.$({}, yg.prototype, Dg.prototype);
function Gg(a, b) {
  this.ea = a;
  this.la = b;
  zg(this, p("<div>"));
  Qa(this.ha, "PropertyPanel");
  this.$ = [];
  this.aa = {};
  this.view = null;
  this.za = [];
  (this.oa = Mc() && "wheel" === a.get("colourPicker")) || this.log("ColourWheel not supported in this canvas.");
  this.action = null;
  this.ha.da("background", "#ffffff");
  this.ha.da("border", "none");
  this.ha.da("font-family", "tahoma,arial,helvetica,sans");
  this.ha.da("color", "#4fa0d3");
  this.ha.da("font-weight", "bold");
  this.ha.da("font-size", "10pt");
  this.ha.da("overflow-y", "scroll");
  var c = this;
  this.ha.click(function() {
    c.log("PropertyPanel clicked.");
    c.emit("click");
  });
  this.ba = null;
}
Gg.prototype = {log:A("PROP"), on:function(a, b) {
  if ("click" === a) {
    this.ba = b;
  } else {
    throw "This object only handles the click event";
  }
}, emit:function() {
  this.ba && this.ba();
}, apply:function(a, b) {
  this.view.setProperty(a, b);
}};
function Hg(a, b, c, d) {
  null !== a.action && a.action.name === d.name || a.view.setProperty(d.name, b);
  c.value = b;
}
function Ig(a, b) {
  if (!b.Rd) {
    if (a.oa) {
      var c = document.createElement("div"), d = new Jc(c, 120);
      Lc(d, b.input.value);
      d.Ka = function(c) {
        Hg(a, c, b.input, b.input.yb);
      };
      b.bg = d;
      b.Rd = !0;
      b.parentNode.appendChild(c);
    } else {
      c = new xc(p(b.parentNode), 20, !1, !0);
      c.ha.da("position", "static");
      Ac(c, a.ea.get("colourPalette"));
      b.bg = c;
      b.Rd = !0;
      b.parentNode.appendChild(c.ha[0]);
      var e;
      c.on("colour", function(c) {
        Hg(a, c.Ta, b.input, b.input.yb);
        c = ec(c.Ta).values[3];
        e.value = Math.round(100 * c);
      });
      e = bd();
      e.min = 0;
      e.max = 100;
      var f = ec(b.input.value);
      e.fe(Math.round(100 * f.values[3]));
      e.onchange = function() {
        f = ec(b.input.value);
        f.values[3] = e.value / 100;
        Hg(a, f.toString(), b.input, b.input.yb);
      };
      b.parentNode.appendChild(document.createElement("br"));
      b.parentNode.appendChild(e);
    }
  }
}
function ig(a) {
  function b() {
    Ig(a, this);
  }
  function c() {
    var b = this;
    "timer" in b && clearTimeout(b.timer);
    b.timer = setTimeout(function() {
      a.apply(b.yb.name, b.value);
    }, 250);
  }
  function d() {
    var b = a.view, c = this.yb.name;
    b.log("Someone clicked a button for %s", c);
    "mathml" === c && b.ta.emit("math.edit", X(b)[0]);
  }
  function e(b) {
    13 === b.keyCode && a.apply(this.yb.name, this.value);
  }
  function f() {
    a.apply(this.yb.name, this.yb.values[parseInt(this.value, 10)].value);
  }
  p(a.ha).empty();
  var g, h;
  for (g = 0;g < a.$.length;g++) {
    var l = a.$[g], k = l.Cd;
    if ("none" !== k.type) {
      var n = document.createElement("div");
      h = document.createElement("span");
      h.appendChild(document.createTextNode(k.display));
      n.appendChild(h);
      n.appendChild(document.createElement("br"));
      if ("select" === k.type) {
        var q = document.createElement("select");
        for (h = 0;h < k.values.length;h++) {
          var r = k.values[h], t = document.createElement("option");
          t.appendChild(document.createTextNode(r.name));
          t.setAttribute("value", h);
          r.value === l.value && t.setAttribute("selected", "");
          q.appendChild(t);
        }
        q.yb = k;
        q.onchange = f;
        n.appendChild(q);
      } else {
        if ("colour" === k.type) {
          h = document.createElement("input"), h.setAttribute("type", "text"), h.value = l.value, h.yb = k, Oa(p(h), e), n.appendChild(h), l = document.createElement("img"), l.src = Y(a.ea, "wd-wheel.png"), l.style.verticalAlign = "middle", l.input = h, n.appendChild(l), p(l).click(b);
        } else {
          if ("text" === k.type) {
            h = document.createElement("input"), h.setAttribute("type", "text"), h.value = l.value, h.yb = k, Oa(p(h), e), n.appendChild(h);
          } else {
            if ("textarea" === k.type) {
              h = document.createElement("textarea"), h.setAttribute("rows", "3"), h.setAttribute("cols", "20"), h.value = l.value, h.yb = k, Oa(p(h), c), n.appendChild(h);
            } else {
              if ("button" === k.type) {
                h = document.createElement("input"), h.setAttribute("type", "button"), h.value = "Edit", h.yb = k, p(h).click(d), n.appendChild(h);
              } else {
                throw "Error: No such property";
              }
            }
          }
        }
      }
      a.ha.append(n);
    }
  }
}
function hg(a, b, c) {
  var d = a.la.cc();
  if ("strokeStyle" === c) {
    return {name:c, type:"colour", display:d("outline-colour")};
  }
  if ("fillStyle" === c) {
    return {name:c, type:"colour", display:d("fill-colour")};
  }
  if ("lineWidth" === c) {
    return a = [{name:d("thickness-pencil"), value:1}, {name:d("thickness-pen"), value:2}, {name:d("thickness-marker"), value:4}, {name:d("thickness-brush"), value:10}], !0 !== b.wa("closed") && "TextNode" !== b.type() || a.unshift({name:d("none"), value:0}), {name:c, display:d("outline-thickness"), type:"select", values:a};
  }
  if ("sloppiness" === c) {
    return {name:"sloppiness", display:d("sloppiness"), type:"select", values:[{name:d("sloppiness-draftsman"), value:0}, {name:d("sloppiness-artist"), value:.25}, {name:d("sloppiness-cartoonist"), value:.5}, {name:d("sloppiness-child"), value:1}, {name:d("sloppiness-drunk"), value:2}]};
  }
  if ("smoothness" === c) {
    return {name:"smoothness", display:d("smoothness"), type:"select", values:[{name:d("smoothness-sharpest"), value:0}, {name:d("smoothness-sharper"), value:.1}, {name:d("smoothness-sharp"), value:.2}, {name:d("smoothness-smooth"), value:.3}, {name:d("smoothness-smoothest"), value:.5}]};
  }
  if ("shadow" === c) {
    return {name:"shadow", display:d("shadow"), type:"select", values:[{name:d("yes"), value:!0}, {name:d("no"), value:!1}]};
  }
  if ("dashes" === c) {
    return {name:"dashes", display:d("line-style"), type:"select", values:[{name:d("line-style-solid"), value:""}, {name:d("line-style-short-dashes"), value:"5,5"}, {name:d("line-style-long-dashes"), value:"10,5"}]};
  }
  if ("matrix" === c || "inverse" === c || "closed" === c || "commands" === c || "seed" === c) {
    return {name:c, type:"none"};
  }
  if ("text" === c) {
    return {name:"text", display:d("text"), type:"textarea"};
  }
  if ("textFillStyle" === c) {
    return {name:"textFillStyle", display:d("text-colour"), type:"colour"};
  }
  if ("fontSize" === c) {
    return {name:"fontSize", display:d("font-size"), type:"select", values:[{name:"10", value:10}, {name:"12", value:12}, {name:"15", value:15}, {name:"20", value:20}, {name:"30", value:30}, {name:"40", value:40}, {name:"50", value:50}, {name:"60", value:60}, {name:"100", value:100}]};
  }
  if ("fontName" === c) {
    b = [];
    c = a.ea.ra.fonts;
    for (a = 0;a < c.length;a++) {
      b.push({name:c[a], value:c[a]});
    }
    return {name:"fontName", display:d("font"), type:"select", values:b};
  }
  return "arrowSize" === c ? {name:"arrowSize", display:d("arrowhead-size"), type:"select", values:[{name:d("arrowhead-size-none"), value:0}, {name:d("arrowhead-size-tiny"), value:10}, {name:d("arrowhead-size-small"), value:15}, {name:d("arrowhead-size-medium"), value:20}, {name:d("arrowhead-size-large"), value:30}]} : "arrowStyle" === c ? {name:"arrowStyle", display:d("arrowhead-style"), type:"select", values:[{name:d("arrowhead-style-simple"), value:"simple"}, {name:d("arrowhead-style-solid"), 
  value:"solid"}]} : "doubleArrow" === c ? {name:"doubleArrow", display:d("double-arrows"), type:"select", values:[{name:d("no"), value:!1}, {name:d("yes"), value:!0}]} : "url" === c ? {name:"url", display:d("image-url"), type:"text"} : "mathml" === c ? {name:"mathml", display:"Equation", type:"button"} : "rows" === c ? {name:c, display:"Rows", type:"text"} : "columns" === c ? {name:c, display:"Columns", type:"text"} : {name:c, display:"Display-" + c, type:"text"};
}
Gg.prototype = p.$({}, yg.prototype, Gg.prototype);
function Jg() {
  this.va = new P;
  this.ia = [];
  this.lineCap = "butt";
  this.lineJoin = "miter";
  this.strokeStyle = "#000000";
  this.lineWidth = 1;
  this.fillStyle = "#000000";
  this.textBaseline = "top";
  this.font = "10pt arial";
}
Jg.prototype = {save:function() {
  this.ia.push({fillStyle:this.fillStyle, font:this.font, lineJoin:this.lineJoin, lineCap:this.lineCap, lineWidth:this.lineWidth, va:this.va.clone(), strokeStyle:this.strokeStyle, textBaseline:this.textBaseline});
}, restore:function() {
  var a = this.ia.pop();
  this.fillStyle = a.fillStyle;
  this.font = a.font;
  this.lineJoin = a.lineJoin;
  this.lineCap = a.lineCap;
  this.lineWidth = a.lineWidth;
  this.va = a.va;
  this.strokeStyle = a.strokeStyle;
  this.textBaseline = a.textBaseline;
}, strokeRect:function(a, b, c, d) {
  this.beginPath();
  this.rect(a, b, c, d);
  this.stroke();
}, rect:function(a, b, c, d) {
  this.beginPath();
  this.moveTo(a, b);
  this.lineTo(a + c, b);
  this.lineTo(a + c, b + d);
  this.lineTo(a, b + d);
  this.lineTo(a, b);
  this.closePath();
}, fillRect:function(a, b, c, d) {
  this.rect(a, b, c, d);
  this.fill();
}, ic:function(a) {
  var b = null, c = null, d = "normal", e = "normal", f = "normal", g = "normal";
  a = a.split(/\s+/);
  a: for (;;) {
    var h = a.shift();
    if (!h) {
      break;
    }
    switch(h) {
      case "normal":
        break;
      case "italic":
      ;
      case "oblique":
        d = h;
        break;
      case "small-caps":
        f = h;
        break;
      case "bold":
      ;
      case "bolder":
      ;
      case "lighter":
      ;
      case "100":
      ;
      case "200":
      ;
      case "300":
      ;
      case "400":
      ;
      case "500":
      ;
      case "600":
      ;
      case "700":
      ;
      case "800":
      ;
      case "900":
        e = h;
        break;
      default:
        if (!c) {
          h = h.split("/");
          c = h[0];
          1 < h.length && (g = h[1]);
          break;
        }
        b = h;
        a.length && (b += " " + a.join(" "));
        break a;
    }
  }
  return {fontStyle:d, fontVariant:f, fontWeight:e, fontSize:c, lineHeight:g, fontFamily:b};
}};
function Kg(a, b, c, d) {
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.aa = [];
  this.ba = Lg(this, "Pages", {Kids:[], Count:0});
  this.oa = Lg(this, "Catalog", {Pages:this.ba._id + " 0 R"});
  this.fonts = {};
  this.ia = {};
  this.la = {};
  this.$ = 1;
  Mg(this);
}
Kg.prototype = {log:A("PdfWriter"), Oc:function() {
  for (var a = Ng(this), b = new Uint8Array(a.length), c = 0;c < a.length;c++) {
    b[c] = a.charCodeAt(c);
  }
  return new Blob([b], {type:"application/pdf"});
}, Db:function(a) {
  for (var b = [], c = 0;c < arguments.length;c++) {
    var d = "" + arguments[c];
    0 < d.indexOf("e") && (d = arguments[c].toFixed(20));
    b.push(d);
  }
  return b.join(" ");
}};
function Og(a, b, c, d, e) {
  e ? b.push("<<\n") : (c.push(b.join("").length), b.push(d._id + " 0 obj\n"), "Type" in d ? b.push("<< /Type /" + d.Type + "\n") : b.push("<<\n"));
  "_stream" in d && (d.Length = d._stream.toString().length);
  for (var f in d) {
    if (d.hasOwnProperty(f) && "Type" !== f && "_" !== f.charAt(0)) {
      e && b.push("    ");
      b.push("   /" + f + " ");
      var g = d[f];
      "object" === typeof g && "[object Array]" === Object.prototype.toString.apply(g) ? b.push("[ " + g.join(" ") + " ]") : "object" === typeof g ? Og(a, b, c, g, !0) : b.push(g);
      b.push("\n");
    }
  }
  e && b.push("    ");
  b.push(">>\n");
  "_stream" in d && (b.push("stream\n"), b.push(d._stream + "\n"), b.push("endstream\n"));
  e || b.push("endobj\n");
}
function Ng(a) {
  var b = [], c = [], d;
  b.push("%PDF-1.4\n%\u0080\u0081\u0082\u0083\n");
  for (d = 0;d < a.aa.length;d++) {
    Og(a, b, c, a.aa[d], !1);
  }
  var e = b.join("").length;
  b.push("xref\n0 " + (a.aa.length + 1) + "\n");
  b.push("0000000000 65535 f\n");
  for (d = 0;d < a.aa.length;d++) {
    for (var f = c[d], f = "" + f;10 > f.length;) {
      f = "0" + f;
    }
    b.push(f + " 00000 n \n");
  }
  b.push("trailer\n");
  b.push("<< /Size " + (a.aa.length + 1) + "\n");
  b.push("   /Root " + a.oa._id + " 0 R\n");
  b.push(">>\n");
  b.push("startxref\n");
  b.push(e + "\n");
  b.push("%%EOF\n");
  return b.join("");
}
function Pg(a, b, c) {
  "Resources" in a.page || (a.page.Resources = {});
  b in a.page.Resources || (a.page.Resources[b] = {});
  a.page.Resources[b][c._name] = c._id + " 0 R";
}
function Qg(a, b, c) {
  var d = "" + b + "-" + c;
  if (!(d in a.la)) {
    var e = "gs" + a.$;
    a.$ += 1;
    var f = Lg(a, "ExtGState", {_name:e});
    c ? f.ca = a.Db(b) : f.CA = a.Db(b);
    a.la[d] = e;
    Pg(a, "ExtGState", f);
  }
  return a.la[d];
}
function Lg(a, b, c) {
  var d = a.aa.length + 1;
  b && (c.Type = b);
  c._id = d;
  a.aa.push(c);
  return c;
}
function Mg(a, b, c, d, e) {
  b = b || a.x;
  c = c || a.y;
  d = d || a.width;
  e = e || a.height;
  a.log("StartPage MediaBox=[%s %s %s %s]", b, c, d, e);
  a.page = Lg(a, "Page", {MediaBox:[b, c, b + d, c + e], Parent:a.ba._id + " 0 R"});
  a.ba.Kids.push(a.page._id + " 0 R");
  a.ba.Count += 1;
  a.la = {};
}
function Rg(a, b) {
  Jg.call(this);
  this.sa = b;
  this.la = this.Pe;
  this.ba = a.clone();
  this.ba.transform(new ld(.75, .75, 0, 0));
  this.nc = "black";
  this.aa = new Kg(72 * a.x / 96, 72 * a.y / 96, 72 * a.width / 96, 72 * a.height / 96);
  this.$ = [];
  this.path = [];
  this.y = this.x = 0;
  this.oa = [];
  Sg(this);
}
Rg.prototype = {log:A("PDFContext"), save:function() {
  Jg.prototype.save.call(this);
  this.$.push("q");
  this.oa.push({va:this.va.clone(), nc:this.nc, Fc:this.Fc, Ec:this.Ec, Dc:this.Dc, Cc:this.Cc, Bc:this.Bc, Ac:this.Ac, zc:this.zc});
}, restore:function() {
  Jg.prototype.restore.call(this);
  this.$.push("Q");
  var a = this.oa.pop();
  this.va = a.va;
  this.nc = a.nc;
  this.Fc = a.Fc;
  this.Ec = a.Ec;
  this.Dc = a.Dc;
  this.Cc = a.Cc;
  this.Bc = a.Bc;
  this.Ac = a.Ac;
  this.zc = a.zc;
}, beginPath:function() {
  this.path.length = 0;
}, toString:function() {
  Tg(this);
  return Ng(this.aa);
}, Oc:function() {
  Tg(this);
  return this.aa.Oc();
}, setTransform:function(a, b, c, d, e, f) {
  var g = fd(this.ba);
  this.va = (new P(a, c, b, d, e, f)).multiply(new nd(0, g.x, g.y)).multiply(new ld(.75, .75, 0, 0));
}, transform:function(a, b, c, d, e, f) {
  a = new P(a, c, b, d, e, f);
  this.va = this.va.multiply(a);
}, translate:function(a, b) {
  this.transform(1, 0, 0, 1, a, b);
}, scale:function(a, b) {
  this.transform(a, 0, 0, b, 0, 0);
}, closePath:function() {
  this.path.push("h");
}, fill:function() {
  Ug(this);
  for (var a = 0;a < this.path.length;a++) {
    this.$.push(this.path[a]);
  }
  this.$.push("f");
}, stroke:function() {
  Vg(this);
  for (var a = 0;a < this.path.length;a++) {
    this.$.push(this.path[a]);
  }
  this.$.push("S");
}, moveTo:function(a, b) {
  var c = this.va.apply(a, b);
  this.path.push(this.aa.Db(c.x, c.y) + " m");
  this.x = a;
  this.y = b;
}, lineTo:function(a, b) {
  var c = this.va.apply(a, b);
  this.path.push(this.aa.Db(c.x, c.y) + " l");
  this.x = a;
  this.y = b;
}, quadraticCurveTo:function(a, b, c, d) {
  this.bezierCurveTo(2 / 3 * a + 1 / 3 * this.x, 2 / 3 * b + 1 / 3 * this.y, 2 / 3 * a + 1 / 3 * c, 2 / 3 * b + 1 / 3 * d, c, d);
}, bezierCurveTo:function(a, b, c, d, e, f) {
  a = this.va.apply(a, b);
  c = this.va.apply(c, d);
  d = this.va.apply(e, f);
  this.path.push(this.aa.Db(a.x, a.y, c.x, c.y, d.x, d.y) + " c");
  this.x = e;
  this.y = f;
}, arc:function() {
}, fillText:function(a, b, c) {
  this.la(a, b, c, 0);
}, strokeText:function(a, b, c) {
  this.la(a, b, c, 1);
}, Pe:function(a, b, c, d) {
  var e, f, g = this.ic(this.font), h = this.sa.get(g.fontFamily);
  if (h) {
    0 === d ? Ug(this) : Vg(this);
    this.beginPath();
    g = parseFloat(g.fontSize);
    this.save();
    this.translate(b, c);
    h.transform(this, g);
    for (g = c = b = 0;g < h.vc.length;g++) {
      h.vc[g].reset();
    }
    for (g = 0;g < a.length;g++) {
      var l, k = h;
      l = a.charCodeAt(g);
      var n = 0;
      for (e = 0;e < k.la.length && !(n = k.la[e].map(l));e++) {
      }
      l = n;
      k = h;
      n = l;
      u("hmtx" in k.$);
      e = k.aa;
      f = e.seek(k.$.hmtx.offset + 4);
      var q = k.$.hmtx.offset, r = {};
      n < k.ia ? (q += 4 * n, f = k.aa.seek(q), r.od = e.getUint16()) : (f = e.seek(q + 4 * k.ia), r.od = e.getUint16(), e.seek(q + 4 * k.ia + 2 * (n - k.ia)));
      r.qf = e.getInt16();
      k.aa.seek(f);
      k = r;
      e = h;
      f = l;
      for (var q = void 0, t = n = r = 0;t < e.vc.length;t++) {
        q = e.vc[t].get(f), r += q.x, n += q.y;
      }
      e = r;
      f = n;
      h.log("Metrics for %s code %s index %s: %s %s kern: %s,%s", a.charAt(g), a.charCodeAt(g), l, k.od, k.qf, e, f);
      n = b + e;
      e = c + f;
      l = bc(h, l);
      if (null !== l && "simple" === l.type) {
        for (var t = r = q = f = 0, w = void 0;q < l.qa.length;q++) {
          var v = l.qa[q];
          0 === f ? (this.moveTo(v.x + n, v.y + e), f = 1) : 1 === f ? v.lc ? this.lineTo(v.x + n, v.y + e) : f = 2 : (w = l.qa[q - 1], v.lc ? (this.quadraticCurveTo(w.x + n, w.y + e, v.x + n, v.y + e), f = 1) : this.quadraticCurveTo(w.x + n, w.y + e, (w.x + v.x) / 2 + n, (w.y + v.y) / 2 + e));
          q === l.Rb[r] && (2 === f && (w = v, v = l.qa[t], v.lc ? this.quadraticCurveTo(w.x + n, w.y + e, v.x + n, v.y + e) : this.quadraticCurveTo(w.x + n, w.y + e, (w.x + v.x) / 2 + n, (w.y + v.y) / 2 + e)), t = q + 1, r += 1, f = 0);
        }
      }
      b += k.od;
    }
    this.restore();
    0 === d ? this.fill() : this.stroke();
  } else {
    h = this.ic(this.font);
    if (this.Bc !== h.fontSize || this.Ac !== h.fontFamily) {
      g = this.aa, k = h.fontFamily, k in g.fonts || (l = "F" + g.$, g.$ += 1, n = "/" + k.replace(/ /g, ""), l = Lg(g, "Font", {_name:l, BaseFont:n, Encoding:"/StandardEncoding", Subtype:"/Type1"}), g.fonts[k] = l), Pg(g, "Font", g.fonts[k]), this.$.push("/" + g.fonts[k]._name + " " + this.aa.Db(parseFloat(h.fontSize)) + " Tf"), this.Bc = h.fontSize, this.Ac = h.fontFamily;
    }
    this.zc !== d && (this.$.push(d + " Tr"), this.zc = 0);
    0 === d ? Ug(this) : Vg(this);
    this.$.push("BT");
    d = this.va.multiply(new P(1, 0, 0, -1, b, c));
    this.$.push(this.aa.Db(d.m11, d.m21, d.m12, d.m22, d.Aa, d.Ba) + " Tm");
    this.$.push("(" + a.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") + ") Tj");
    this.$.push("ET");
  }
}, ic:function(a) {
  var b = null, c = null, d = "normal", e = "normal", f = "normal", g = "normal";
  a = a.split(/\s+/);
  a: for (;;) {
    var h = a.shift();
    if (!h) {
      break;
    }
    switch(h) {
      case "normal":
        break;
      case "italic":
      ;
      case "oblique":
        d = h;
        break;
      case "small-caps":
        f = h;
        break;
      case "bold":
      ;
      case "bolder":
      ;
      case "lighter":
      ;
      case "100":
      ;
      case "200":
      ;
      case "300":
      ;
      case "400":
      ;
      case "500":
      ;
      case "600":
      ;
      case "700":
      ;
      case "800":
      ;
      case "900":
        e = h;
        break;
      default:
        if (!c) {
          h = h.split("/");
          c = h[0];
          1 < h.length && (g = h[1]);
          break;
        }
        b = h;
        a.length && (b += " " + a.join(" "));
        break a;
    }
  }
  return {fontStyle:d, fontVariant:f, fontWeight:e, fontSize:c, lineHeight:g, fontFamily:b};
}, drawImage:function(a, b, c, d, e, f, g, h, l) {
  var k = parseInt(a.width, 10), n = parseInt(a.height, 10);
  if (3 === arguments.length) {
    return this.drawImage(a, 0, 0, k, n, arguments[1], arguments[2], k, n);
  }
  if (5 === arguments.length) {
    return this.drawImage(a, 0, 0, k, n, arguments[1], arguments[2], arguments[3], arguments[4]);
  }
  this.log("DrawImage(%s, %s, %s, %s, %s, %s, %s %s)", b, c, d, e, f, g, h, l);
  g = g + l;
  k = document.createElement("canvas");
  n = k.getContext("2d");
  k.width = d;
  k.height = e;
  n.drawImage(a, -b, -c);
  var n = this.aa, q = [a.src, b, c, d, e].join(), r;
  if (!(q in n.ia)) {
    var t = "I" + n.$;
    n.$ += 1;
    var w = k.getContext("2d").getImageData(0, 0, k.width, k.height);
    r = "";
    var v = !1, x = Xa();
    for (r = 0;r < w.data.length;r += 4) {
      x.Ya(w.data[r]), x.Ya(w.data[r + 1]), x.Ya(w.data[r + 2]), v = v || 255 > w.data[r + 3];
    }
    x.flush();
    r = x.Xc().toString();
    t = Lg(n, "XObject", {Subtype:"/Image", Width:k.width, Height:k.height, ColorSpace:"/DeviceRGB", BitsPerComponent:8, Length:r.length, Interpolate:"true", Filter:"[/ASCII85Decode /LZWDecode]", DecodeParms:"[ null << /EarlyChange 0 >> ]", _name:t, _stream:r});
    if (v) {
      x = Xa();
      for (r = 0;r < w.data.length;r += 4) {
        x.Ya(w.data[r + 3]);
      }
      x.flush();
      r = x.Xc().toString();
      k = Lg(n, "XObject", {Subtype:"/Image", Width:k.width, Height:k.height, ColorSpace:"/DeviceGray", BitsPerComponent:8, Length:r.length, Filter:"[/ASCII85Decode /LZWDecode]", DecodeParms:"[ null << /EarlyChange 0 >> ]", _stream:r});
      t.SMask = k._id + " 0 R";
    }
    n.ia[q] = t;
  }
  Pg(n, "XObject", n.ia[q]);
  k = "/" + n.ia[q]._name;
  this.$.push("q");
  n = this.va.multiply(new P(h, 0, 0, -l, f, g));
  this.$.push(this.aa.Db(n.m11, n.m21, n.m12, n.m22, n.Aa, n.Ba) + " cm");
  this.$.push(k + " Do");
  this.$.push("Q");
}};
function Vg(a) {
  function b(a) {
    return "miter" === a ? 0 : "round" === a ? 1 : 2;
  }
  function c(a) {
    return "butt" === a ? 0 : "round" === a ? 1 : 2;
  }
  if (a.Fc !== a.strokeStyle) {
    var d = ic(ec(a.strokeStyle), 0);
    a.$.push(a.aa.Db(d.values[0], d.values[1], d.values[2]) + " RG");
    d = Qg(a.aa, d.values[3], !1);
    a.$.push("/" + d + " gs");
    a.Fc = a.strokeStyle;
  }
  a.Ec !== a.lineWidth && (a.Ec = a.lineWidth, a.$.push(a.aa.Db(a.lineWidth) + " w"));
  a.Dc !== a.lineJoin && (a.Dc = a.lineJoin, a.$.push(b(a.lineJoin) + " j"));
  a.Cc !== a.lineCap && (a.Cc = a.lineCap, a.$.push(c(a.lineCap) + " J"));
}
function Ug(a) {
  if (a.nc !== a.fillStyle) {
    var b = ic(ec(a.fillStyle), 0);
    a.$.push(a.aa.Db(b.values[0], b.values[1], b.values[2]) + " rg");
    b = Qg(a.aa, b.values[3], !0);
    a.$.push("/" + b + " gs");
    a.nc = a.fillStyle;
  }
}
function Tg(a) {
  if (a.$.length) {
    var b = a.aa, c;
    c = Lg(a.aa, null, {_stream:a.$.join("\n")});
    b.page.Contents = c._id + " 0 R";
  }
  a.$.length = 0;
}
function Sg(a) {
  a.log("Start page: %s", a.ba);
  a.setTransform(1, 0, 0, 1, 0, 0);
}
Rg.prototype = p.$({}, Jg.prototype, Rg.prototype);
function Wg(a, b, c) {
  this.name = a;
  this.$ = b;
  this.children = [];
  this.text = c;
}
Wg.prototype = {toString:function() {
  var a = [];
  Xg(this, a, "  ");
  return a.join("");
}};
function Yg(a, b) {
  a.children.push(b);
}
function Xg(a, b, c) {
  var d;
  b.push(c);
  b.push("<");
  b.push(a.name);
  for (d in a.$) {
    a.$.hasOwnProperty(d) && (b.push(" "), b.push(d), void 0 !== a.$[d] && null !== a.$[d] && (b.push('="'), b.push(a.$[d]), b.push('"')));
  }
  if (a.children.length || void 0 !== a.text) {
    b.push(">\n");
    for (d = 0;d < a.children.length;d++) {
      Xg(a.children[d], b, c + "  ");
    }
    void 0 !== a.text && b.push(c + "  " + a.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"));
    b.push("</" + a.name + ">");
  } else {
    b.push("/>");
  }
  b.push("\n");
}
;function Zg(a) {
  Jg.call(this);
  this.va = new P;
  this.ga = [];
  this.path = [];
  this.log("SVG context rect: %s", a);
  this.root = new Wg("svg", {xmlns:"http://www.w3.org/2000/svg", "xmlns:xlink":"http://www.w3.org/1999/xlink", version:1.2, baseProfile:"tiny", width:a.width, height:a.height, viewBox:a.x + " " + a.y + " " + a.width + " " + a.height});
}
Zg.prototype = {log:A("SvgContext"), gd:1, hd:2, FONT:4, node:function(a, b, c, d) {
  function e(a, b) {
    var d = ec(b), e = d.values[3];
    1 > e && (d.values[3] = 1, c[a + "-opacity"] = "" + e);
    c[a] = d.toString();
  }
  kd(this.va) || (c.transform = "matrix(" + this.va.m11 + " " + this.va.m21 + " " + this.va.m12 + " " + this.va.m22 + " " + this.va.Aa + " " + this.va.Ba + ")");
  b & this.gd ? e("fill", this.fillStyle) : c.fill = "none";
  b & this.hd && (e("stroke", this.strokeStyle), c["stroke-width"] = this.lineWidth, "miter" !== this.lineJoin && (c["stroke-linejoin"] = this.lineJoin), "butt" !== this.lineCap && (c["stroke-linecap"] = this.lineCap));
  b & this.FONT && (b = this.ic(this.font), c["font-weight"] = b.fontWeight, c["font-size"] = parseFloat(b.fontSize), c["font-style"] = b.fontStyle, c["font-family"] = b.fontFamily);
  Yg(this.root, new Wg(a, c, d));
}, toString:function() {
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + this.root.toString();
}, Oc:function() {
  for (var a = this.toString(), b = new Uint8Array(a.length), c = 0;c < a.length;c++) {
    b[c] = a.charCodeAt(c);
  }
  return new Blob([b], {type:"image/svg+xml"});
}, beginPath:function() {
  this.path.length = 0;
}, transform:function(a, b, c, d, e, f) {
  a = new P(a, c, b, d, e, f);
  this.va = this.va.multiply(a);
}, setTransform:function(a, b, c, d, e, f) {
  this.va = new P(a, c, b, d, e, f);
}, translate:function(a, b) {
  this.va.Aa += a;
  this.va.Ba += b;
}, scale:function(a, b) {
  this.va = this.va.multiply(new ld(a, b));
}, closePath:function() {
  this.path.push("Z");
}, fill:function() {
  this.node("path", this.gd, {d:this.path.join(" ")});
}, stroke:function() {
  this.node("path", this.hd, {d:this.path.join(" ")});
}, moveTo:function(a, b) {
  this.path.push("M" + a + "," + b);
}, lineTo:function(a, b) {
  this.path.push("L" + a + "," + b);
}, quadraticCurveTo:function(a, b, c, d) {
  this.path.push("Q" + a + "," + b);
  this.path.push(c + "," + d);
}, bezierCurveTo:function(a, b, c, d, e, f) {
  this.path.push("C" + a + "," + b);
  this.path.push(c + "," + d);
  this.path.push(e + "," + f);
}, arc:function(a, b, c, d, e, f) {
  var g = a + c * Math.cos(d);
  d = b + c * Math.sin(d);
  a += c * Math.cos(e);
  b += c * Math.sin(e);
  this.path.push("M");
  this.path.push(g);
  this.path.push(d);
  this.path.push("A");
  this.path.push(c);
  this.path.push(c);
  this.path.push(0);
  this.path.push(f ? 0 : 1);
  this.path.push(0);
  this.path.push(a);
  this.path.push(b);
}, fillText:function(a, b, c) {
  this.ic(this.font);
  this.node("text", this.gd | this.FONT, {x:b, y:c}, a);
}, strokeText:function(a, b, c) {
  this.ic(this.font);
  this.node("text", this.hd | this.FONT, {x:b, y:c}, a);
}, drawImage:function(a, b, c, d, e, f, g, h, l) {
  var k = document.createElement("canvas"), n = k.getContext("2d");
  k.width = d;
  k.height = e;
  n.drawImage(a, -b, -c);
  a = k.toDataURL();
  Yg(this.root, new Wg("image", {transform:"matrix(" + this.va.m11 + " " + this.va.m21 + " " + this.va.m12 + " " + this.va.m22 + " " + this.va.Aa + " " + this.va.Ba + ")", x:f, y:g, width:h, height:l, "xlink:href":a}));
}};
Zg.prototype = p.$({}, Jg.prototype, Zg.prototype);
var $g = A("DOC");
hf.prototype.save = function(a, b) {
  var c, d;
  if ("list" === a) {
    d = ah(this), c = "application/json";
  } else {
    if ("zwibbler3" === a) {
      c = ah(this), d = "zwibbler3." + window.JSON.stringify(c), c = "application/octet-stream";
    } else {
      if ("svg" === a) {
        c = of(this), d = new Zg(c), this.na(d), c = "image/svg+xml";
      } else {
        if ("pdf" === a) {
          c = of(this);
          d = new Rg(c, window.Zwibbler.fonts);
          var e = this.kb;
          for (c = 0;c < this.Kb();c++) {
            if (0 < c) {
              var f = d;
              Tg(f);
              Mg(f.aa, f.ba.x, f.ba.y, f.ba.width, f.ba.height);
              Sg(f);
              f.beginPath();
            }
            this.ib(c);
            this.na(d);
          }
          this.ib(e);
          c = "application/pdf";
        } else {
          throw "Unknown save format: " + a;
        }
      }
    }
  }
  var g;
  if (ka(d)) {
    if ("string" === b) {
      g = d;
    } else {
      if ("data-uri" === b) {
        g = "data:" + c + ";base64," + fa(d);
      } else {
        if ("blob" === b) {
          for (e = new Uint8Array(d.length), c = 0;c < d.length;c++) {
            e[c] = d.charCodeAt(c);
          }
        }
      }
    }
  } else {
    if (d.Oc && d.toString) {
      "string" === b ? g = d.toString() : "data-uri" === b ? g = "data:" + c + ";base64," + fa(d.toString()) : "blob" === b && (g = d.Oc());
    } else {
      if ("object" === b) {
        g = d;
      } else {
        throw "Error in ZwibblerDocument.save()";
      }
    }
  }
  return g;
};
function bh(a) {
  if ("{" === a.charAt(0)) {
    return ch(a);
  }
  if (0 === a.indexOf("zwibbler3.")) {
    var b = window.JSON.parse(a.substr(10));
    return dh(b);
  }
  if (0 === a.indexOf("zwibblerclip.")) {
    return b = new hf(!1), a = pf(b, a, []), b.ya(a), tf(b), b;
  }
  throw "Format detection failed.";
}
function ch(a) {
  var b = A("IMPORT"), c = new hf, d = c.cb, e, f, g, h, l, k = [];
  l = function(a) {
    var b = new P;
    b.m11 = a.m11;
    b.m12 = a.m12;
    b.m21 = a.m21;
    b.m22 = a.m22;
    b.Aa = a.dx;
    b.Ba = a.dy;
    return b;
  };
  g = function(a) {
    var b = 0;
    "arrowSize" in a && (b = a.arrowSize, a = a.path);
    var c = l(a.matrix), b = {strokeStyle:a.strokeStyle, fillStyle:a.fillStyle, lineWidth:a.lineWidth, smoothness:a.smoothness, sloppiness:a.sloppiness, shadow:a.shadow, arrowSize:b, seed:Math.round(65535 * Math.random())};
    if ("textNode" in a) {
      var e = a.textNode;
      b.fontSize = e.fontSize;
      b.fontName = e.fontName;
      b.text = e.text;
      b.textFillStyle = "textFillStyle" in e ? e.textFillStyle : e.fillStyle;
    }
    "path" in a && (a = a.path);
    var e = a.closed, f = new ze, g = a.segments;
    a = c.apply(a.startX, a.startY);
    f.moveTo(a.x, a.y);
    for (a = 0;a < g.length;a++) {
      var h = g[a], n;
      switch(h.type) {
        case 1:
          n = c.apply(h.x, h.y);
          f.lineTo(n.x, n.y);
          break;
        case 2:
          n = c.apply(h.x, h.y);
          f.td(n.x, n.y);
          break;
        case 3:
          n = c.apply(h.x1, h.y1);
          h = c.apply(h.x, h.y);
          Pe(f, n.x, n.y, h.x, h.y);
          break;
        default:
          throw "Unknown path segment type: " + h.type;;
      }
    }
    e && f.close();
    b.commands = f.Hb();
    k.push(new H("PathNode", b));
    d += 1;
  };
  e = function(a, b) {
    for (var c = [], e = a.children, g = e.length - 1;0 <= g;g--) {
      var h = d;
      try {
        f(e[g], b + 1);
      } catch (l) {
        continue;
      }
      c.push(h);
    }
    0 < b && (d += 1, k.push(new Ye(c)));
  };
  h = function(a) {
    var b = l(a.matrix), b = b.multiply(new I(0, 1.3 * a.fontSize));
    a = {fillStyle:a.fillStyle, lineWidth:0, text:a.text, fontName:a.fontName, fontSize:a.fontSize, matrix:b, inverse:b.inverse()};
    k.push(new H("TextNode", a));
    d += 1;
  };
  f = function(a, b) {
    switch(a.type) {
      case "Node":
        e(a, b);
        break;
      case "PathNode":
      ;
      case "ArrowNode":
        g(a);
        break;
      case "TextNode":
        h(a);
        break;
      default:
        throw "Unknown node type: " + a.type;;
    }
  };
  var n;
  try {
    n = window.JSON.parse(a);
  } catch (q) {
    a = a.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
    try {
      n = window.JSON.parse(a);
    } catch (r) {
      a = a.replace(",", ",\n");
      try {
        n = eval("(" + a + ")");
      } catch (t) {
        throw b("Couldn't parse file."), "Couldn't parse file.";
      }
    }
  }
  b("Successfully parsed!");
  f(n, 0);
  c.ya(k);
  return c;
}
function ah(a) {
  function b(a, d) {
    var e = {id:d.id, type:d.type()};
    c.push(e);
    a && (e.parent = a.id);
    var f = le(d), n;
    for (n in f) {
      f.hasOwnProperty(n) && ("matrix" === n ? e[n] = f[n].Hb() : "inverse" !== n && (e[n] = f[n]));
    }
    if (ne(d)) {
      for (e = 0;e < d.children.length;e++) {
        b(d, d.children[e]);
      }
    }
  }
  var c = [], d = {type:"document"}, e = !1, f;
  for (f in a.fa) {
    a.fa.hasOwnProperty(f) && (d[f] = a.fa[f], e = !0);
  }
  e && c.push(d);
  b(null, a.root);
  return c;
}
function dh(a) {
  function b(a, c) {
    var d;
    if (void 0 !== a) {
      d = {};
      for (var e in a) {
        a.hasOwnProperty(e) && "children" !== e && "parent" !== e && "id" !== e && "type" !== e && ("matrix" === e ? (d[e] = new P(a[e]), d.inverse = d.matrix.inverse()) : d[e] = a[e]);
      }
      e = h;
      0 !== a.id && f.push(new H(a.type, d, c, -1));
      g[a.id] = h;
      h += 1;
      if (void 0 !== a.children) {
        for (d = 0;d < a.children.length;d++) {
          b(a.children[d], e);
        }
      }
    }
  }
  var c, d, e;
  a = window.JSON.parse(window.JSON.stringify(a));
  var f = [], g = {}, h = 0, l = {}, k = !1;
  for (c = 0;c < a.length;c++) {
    if (e = a[c], "document" === e.type) {
      delete e.type, f.push(new gf(e));
    } else {
      "PageNode" === e.type && (k = !0);
      if ("parent" in e) {
        if (!(e.parent in l)) {
          throw "Error: child " + e.id + " references parent " + e.parent + " before it was defined.";
        }
        d = l[e.parent];
        void 0 !== d.children ? d.children.push(e) : d.children = [e];
      }
      "GroupNode" !== e.type && "PageNode" !== e.type || void 0 !== e.children || (e.children = []);
      l[e.id] = e;
    }
  }
  k || (h += 1);
  b(l[0], h);
  $g(JSON.stringify(g));
  for (c = 0;c < f.length;c++) {
    $g(f[c].toString());
  }
  a = new hf(k);
  a.ya(f);
  tf(a);
  return a;
}
;function eh(a, b, c) {
  var d, e = this;
  this.ta = a;
  this.ha = b;
  this.ha.empty();
  "absolute" !== this.ha.da("position") && "fixed" !== this.ha.da("position") && this.ha.da("position", "relative");
  this.ha.da("overlow", "none");
  this.ha.da("text-align", "left");
  this.Ka = new Ag(p("<div>").da("width", "300px"));
  this.log("Starting Zwibbler Version %s", 14);
  this.ha.append(this.Ka.ha);
  this.ea = new tg(c);
  this.Ca = new db("en:arrowhead-size:Arrowhead size\nes:arrowhead-size:Flecha tama\u00f1o\n\nen:arrowhead-size-large:Large\nes:arrowhead-size-large:Grande\n\nen:arrowhead-size-medium:Medium\nes:arrowhead-size-medium:Medio\n\nen:arrowhead-size-none:None\nes:arrowhead-size-none:Nada\n\nen:arrowhead-size-small:Small\nes:arrowhead-size-small:Peque\u00f1o\n\nen:arrowhead-size-tiny:Tiny\nes:arrowhead-size-tiny:Diminuto\n\nen:arrowhead-style:Arrowhead style\nes:arrowhead-style:Flecha estilo\n\nen:arrowhead-style-simple:Simple\nes:arrowhead-style-simple:Llanura\n\nen:arrowhead-style-solid:Solid\nes:arrowhead-style-solid:Denso\n\nen:arrow-keys:Arrow Keys\nes:arrow-keys:Teclas de flecha\n\nen:arrow-tool:Arrow tool\nes:arrow-tool:Flecha\nfr:arrow-tool:Fl\u00e8che\nnl:arrow-tool:Pijl\n\nen:break-apart-group:Break apart group\nes:break-apart-group:Dividir el grupo\n\nen:bring-to-front:Bring to front\nes:bring-to-front:Traer al frente\n\nen:brush-tool:Brush tool\nes:brush-tool:Brocha\nfr:brush-tool:Brosse\nnl:brush-tool:Penseel\n\nen:circle-tool:Circle tool\nes:circle-tool:C\u00edrculo\nfr:circle-tool:Cercle\nnl:circle-tool:Cirkel\n\nen:click-to-place-another-point-or-double-click-to-end-the-line:Click to place another point, or double-click to end the line.\nes:click-to-place-another-point-or-double-click-to-end-the-line:Haga clic para colocar otro punto, o doble clic para finalizar la l\u00ednea\nfr:click-to-place-another-point-or-double-click-to-end-the-line:Cliquez pour placer un autre point, ou double-cliquez pour terminer la ligne.\nnl:click-to-place-another-point-or-double-click-to-end-the-line:Klik op een ander punt te plaatsen, of dubbelklik om de lijn te be\u00ebindigen.\n\nen:click-to-place-first-point-of-line:Click to place first point of line\nes:click-to-place-first-point-of-line:Haga clic para colocar el primer punto de la l\u00ednea\nfr:click-to-place-the-first-point-of-line:Cliquez pour placer le premier point de la ligne\nnl:click-to-place-the-first-point-of-line:Klik om het eerste punt van de lijn te plaatsen.\n\nen:click-to-set-the-end-of-the-line:Click to set the end of the line\nes:click-to-set-the-end-of-the-line:Haga clic para colocar el extremo de la l\u00ednea\nfr:click-to-set-the-end-of-the-line:Cliquez pour d\u00e9finir la fin de la ligne\nnl:click-to-set-the-end-of-the-line:Klik hier voor het einde van de lijn in te stellen.\n\nen:copy:Copy\nes:copy:Copiar\nfr:copy:Copie\nnl:copy:Kopi\u00ebren\n\nen:curve-tool:Curve tool\nes:curve-tool:Curva\nfr:curve-tool:Courbes\nnl:curve-tool:Kromme\n\nen:delete-selection:Delete selection\nes:delete-selection:Eliminar la selecci\u00f3n\n\nen:del-key:Del\nes:del-key:Del\n\nen:double-arrows:Double arrows\nes:double-arrows:flechas dobles\n\nen:draw-curves:Draw curves\nes:draw-curves:Dibuje las curvas\n\nen:draw-lines:Draw lines\nes:draw-lines:Dibujar l\u00edneas\n\nen:duplicate-selection:Duplicate selection\nes:duplicate-selection:Duplica la selecci\u00f3n\n\nen:fill-colour:Fill colour\nes:fill-colour:Color de relleno\n\nen:font:Font\nes:font:Font\n\nen:font-size:Font size\nes:font-size:Tama\u00f1o de letra\n\nen:group-selection:Group selection\nes:group-selection:Grupo la selecci\u00f3n\n\nen:image-tool:Image tool\nes:image-tool:Imagen\nfr:image-tool:Image\nnl:image-tool:Afbeelding\n\nen:image-url:Image URL\nes:image-url:URL de la imagen\n\nen:keyboard:Keyboard\nes:keyboard:Teclado\n\nen:line-style:Line style\nes:line-style:Estilo de l\u00ednea\n\nen:line-style-long-dashes:Long dashes\nes:line-style-long-dashes:Gui\u00f3n largo\n\nen:line-style-short-dashes:Short dashes\nes:line-style-short-dashes:Gui\u00f3n corto\n\nen:line-style-solid:Solid\nes:line-style-solid:Denso\n\nen:line-tool:Line tool\nes:line-tool:Raya\nfr:line-tool:Lignes\nnl:line-tool:Lijn\n\nen:math-tool:Equation tool\nes:math-tool:Ecuaci\u00f3n\n\nen:move-selection-away:Move selection away\nes:move-selection-away:Mover la selecci\u00f3n de distancia\n\nen:move-selection-closer:Move selection closer\nes:move-selection-closer:Mover la selecci\u00f3n de distancia\n\nen:move-while-zoomed:Move while zoomed\nes:move-while-zoomed:Desplazarse por la pantalla\n\nen:none:None\nes:none:Nada\n\nen:no:No\nes:no:No\n\nen:outline-colour:Outline colour\nes:outline-colour:Color del contorno\n\nen:outline-thickness:Outline thickness\nes:outline-thickness:Grosor del contorno\n\nen:page-down-key:Page Down\nes:page-down-key:Page Down\n\nen:page-up-key:Page Up\nes:page-up-key:Page Up\n\nen:paste:Paste\nes:paste:Pegar\nfr:paste:Coller\nnl:paste:Plak\n\nen:pick-tool:Pick tool\nes:pick-tool:Seleccionar\nfr:pick-tool:S\u00e9lectionner\nnl:pick-tool:Uitkiezen\n\nen:rectangle-tool:Rectangle tool\nes:rectangle-tool:rect\u00e1ngulo\nfr:rectangle-tool:Rectangle\nnl:rectangle-tool:Rechthoek\n\nen:redo:Redo\nes:redo:Rehacer\nfr:redo:Refaire\nnl:redo:Opnieuw maken\n\nen:rounded-rectangle-tool:Rounded rectangle tool\nes:rounded-rectangle-tool:Rect\u00e1ngulo redondeado\n\nen:save:Save\nes:save:Guardar\n\nen:send-to-back:Send to back\nes:send-to-back:Enviar a la parte posterior\n\nen:shadow:Shadow\nes:shadow:Sombra\n\nen:shape-brush-tool:Shape brush tool\nes:shape-brush-tool:Brush que dibuja formas\n\nen:sloppiness-artist:Artist\nes:sloppiness-artist:Artista\n\nen:sloppiness-cartoonist:Cartoonist\nes:sloppiness-cartoonist:Caricaturista\n\nen:sloppiness-child:Child\nes:sloppiness-child:Ni\u00f1o\n\nen:sloppiness-draftsman:Draftsman\nes:sloppiness-draftsman:Dibujante\n\nen:sloppiness-drunk:Drunk\nes:sloppiness-drunk:Borracho\n\nen:sloppiness:Sloppiness\nes:sloppiness:La dejadez\n\nen:smoothness-sharper:Sharper\nes:smoothness-sharper:Muy afilado\n\nen:smoothness-sharpest:Sharpest\nes:smoothness-sharpest:M\u00e1s afilado\n\nen:smoothness-sharp:Sharp\nes:smoothness-sharp:Afilado\n\nen:smoothness-smoothest:Smoothest\nes:smoothness-smoothest:Muy liso\n\nen:smoothness:Smoothness\nes:smoothness:Lisura\n\nen:smoothness-smooth:Smooth\nes:smoothness-smooth:Liso\n\nen:text-colour:Text colour\nes:text-colour:Color del texto\n\nen:text:Text\nes:text:Texto\n\nen:text-tool:Text tool\nes:text-tool:Texto\nfr:text-tool:Texte\nnl:text-tool:Tekst\n\nen:thickness-brush:Brush\nes:thickness-brush:Brocha\n\nen:thickness-marker:Marker\nes:thickness-marker:Rotulador\n\nen:thickness-pencil:Pencil\nes:thickness-pencil:L\u00e1piz\n\nen:thickness-pen:Pen\nes:thickness-pen:Pluma\n\nen:undo:Undo\nes:undo:Deshacer\nfr:undo:D\u00e9faire\nnl:undo:Ongedaan maken\n\nen:yes:Yes\nes:yes:S\u00ed\n\nen:zoom-in:Zoom in\nes:zoom-in:Zoom\n\nen:zoom-out:Zoom out\nes:zoom-out:Disminuir el zoom\n");
  gb(this.Ca, this.ea.get("language"));
  this.oa = null;
  this.sa = p("<div>");
  this.sa.da("position", "absolute");
  this.sa.da("overflow", "hidden");
  this.ha.append(this.sa);
  this.canvas = p(oc(this.sa[0]));
  this.canvas.da("outline", "0");
  this.canvas.da("position", "absolute");
  this.canvas.da("left", "0");
  this.canvas.da("top", "0");
  this.canvas.Ja("tabindex", "0");
  this.ma = this.canvas[0].getContext("2d");
  this.ea.Fb() ? this.la = new xc(this.ha, 40, !0, !1) : this.la = new xc(this.ha, 20, !1, !1);
  this.nb = new M;
  this.view = new Nf(this.canvas, new hf, this.la, this.nb, this.ea, this.Ca, this.ta);
  fh(this);
  gh(this);
  hh(this);
  this.ia = new Gg(this.ea, this.Ca);
  this.ha.append(this.ia.ha);
  this.ea.ge() && (this.view.Cb = this.ia);
  this.ia.view = this.view;
  this.ia.on("click", function() {
    e.focus("none");
  });
  Ga(function() {
    return ih(e);
  });
  this.Gc = pg();
  this.ub = "debug" in this.Gc || this.ea.ra.showDebug;
  this.aa = new Dg(this.ha);
  this.aa.ha.da("border-right", "1px solid black");
  this.ba = new Dg(this.ha);
  this.ba.ha.da("border-top", "1px solid black");
  this.ba.on("click", function(a) {
    return $f(e.view, a);
  });
  this.aa.on("click", function(a) {
    return jh(e, a);
  });
  null !== this.ea.ra.backgroundImage && (jh(this, this.ea.ra.backgroundImage), tf(this.view.ja));
  kh(this);
  this.ea.get("showMathTool") && (d = new Kb, Mb(d, function() {
    e.log("App: MJAX loaded.");
    var a = e.view.request;
    a.ia = d;
    Sb(a);
  }));
  this.ea.on("update", function(a, b) {
    var c = !1;
    e.log("onConfigChange %s=%s", a, b);
    switch(a) {
      case "debug":
        e.ub = b;
        c = !0;
        break;
      case "showPageSelector":
        c = !0;
        Ic(e.$, b);
        break;
      case "backgroundImage":
        jh(e, b);
        break;
      case "showToolbar":
      ;
      case "showColourPanel":
        c = !0;
        break;
      case "language":
        gb(e.Ca, b);
    }
    c && ih(e, !0);
  });
  this.fc = this.oc = -1;
  this.$ = new Ec(p("<div>"), !1, !this.ea.get("showPageSelectorControls"));
  this.$.ha.da("position", "absolute");
  this.$.ha.da("top", "0");
  this.$.ha.da("bottom", "0");
  this.$.ha.da("width", "160px");
  this.$.ha.da("left", "50px");
  this.$.ha.da("background", this.ea.get("outsidePageColour"));
  Ic(this.$, this.ea.get("showPageSelector"));
  this.ha.append(this.$.ha);
  this.Cb = p("<div>").da("position", "absolute").da("top", "0").da("right", "0").da("box-shadow", "3px 3px 3px #444").da("background", "#ccc").da("color", "black").da("border-bottom-left-radius", "4px").da("font-family", "arial,sans");
  this.ha.append(this.Cb);
  ih(this);
  (a = xg(this.ea)) ? this.$a = new Ec(p(a), !0, !0) : this.$a = null;
  this.ea.get("setFocus") && this.focus("toolbar");
  this.ea.get("pageView") && Sf(this.view, "page");
  this.eb = [];
  Hc(this.$, this.ta);
  this.$a && (Hc(this.$a, this.ta), Ic(this.$a, !0));
  this.ta.emit("document-changed");
  this.ta.emit("set-page", this.view.ja.kb);
  if ("localStorage" in window) {
    var f = window.localStorage;
    this.ea.get("persistent") && (a = f.getItem("zwibbler-document")) && lh(this, bh(a));
    this.Hc = ng(function() {
      e.ea.get("persistent") && (e.log("Saving document"), f.setItem("zwibbler-document", e.ta.save()));
    });
    e.ta.on("document-changed", function() {
      e.Hc();
    });
  }
}
eh.prototype = {log:A("APP"), focus:function(a) {
  this.log("Set focus to %s", a);
  if ("toolbar" !== a && "canvas" !== a && "none" !== a) {
    throw "Focus must be toolbar or canvas or none, not " + a;
  }
  this.Ua = a;
  "toolbar" === this.Ua ? (this.toolbar.focus(), a = this.view, a.Da.bb && (a.Da.bb = !1, a.na()), this.ha.focus()) : "canvas" === this.Ua && (this.toolbar.blur(), this.ha.focus());
}, jc:function(a, b) {
  var c;
  c = this.view.ja.cb;
  a.push(new Ye(b));
  return c;
}, Qc:function(a, b) {
  a.push(new Ze(b));
}};
function mh(a, b, c) {
  return nh(a, b, "PathNode", {commands:c, fillStyle:a.view.Xa, strokeStyle:a.view.gb, seed:Math.round(65535 * Math.random()), lineWidth:a.view.ua.lineWidth, sloppiness:a.view.ua.sloppiness, angleArcs:a.ea.get("angleArcs")});
}
function oh(a, b, c) {
  var d, e;
  d = p("<canvas>");
  d.Ja("width", "" + c.width);
  d.Ja("height", "" + c.height);
  e = d[0].getContext("2d");
  "image/jpeg" === b && (e.fillStyle = "#ffffff", e.fillRect(0, 0, c.width, c.height));
  e.translate(-c.x, -c.y);
  Vf(a.view, e, c.x, c.y, c.width, c.height);
  a.view.ja.na(e);
  a.ta.Jb && a.ta.Jb(e);
  return d[0].toDataURL(b);
}
function ih(a, b) {
  var c, d, e, f, g, h, l, k, n, q, r, t, w, v, x;
  k = p(window).width();
  c = p(window).height();
  if (b || k !== a.Rc || c !== a.Pc) {
    a.Rc = k, a.Pc = c, v = a.ha.width() - 0, k = a.ha.height() - 0, 0 >= v || !b && v === a.oc && k === a.fc || (a.oc = v, a.fc = k, a.ea.ra.showBackgroundSelector ? (c = 100, a.aa.show(), g = a.aa, g.aa = c - 24, g.$ = 0) : (c = 0, a.aa.Ma()), a.ea.ra.showImageSelector ? (f = 100, g = a.ba, g.aa = 0, g.$ = f - 24, a.ba.show()) : (f = 0, a.ba.Ma()), a.ea.ra.showPageSelector ? (a.$.ha.show(), x = a.$.ha.outerWidth()) : (a.$.ha.Ma(), x = 0), a.ea.If() ? (a.la.show(), zc(a.la, v), g = a.la.height()) : 
    (a.la.Ma(), g = 0), a.log("Colour panel height is %s", g), a.ea.Jf() ? (a.toolbar.show(!0), d = k - g, e = a.toolbar, 0 >= d || (h = (e.Qb + 2) * Math.ceil(e.la / d) + 1, e.ha.style.width = "" + h + "px", e.ha.style.height = "" + d + "px", e.log("Toolbar width/height = %s,%s totalHeight=%s", h, d, e.la)), w = a.toolbar.width()) : (a.toolbar.show(!1), w = 0), d = zf(a.view), a.toolbar.moveTo(c + x, 0), h = k - g, l = q = t = 0, a.ub && (l = a.Ka.width()), (r = a.ea.ge() && 700 <= v) && (q = 300), 
    t += q + l, n = v - 2 * d - c - t, e = k - 2 * d - g - f, a.aa.width(c), a.aa.height(k - 2 * d - g), a.aa.moveTo(0, 0), a.$.ha.da("top", "0"), a.$.ha.da("left", "0"), a.ba.width(n), a.ba.height(f), a.ba.moveTo(c, k - 2 * d - g - f), f = v - 2 * d - w - t - c - x, a.sa.da("left", "" + (x + c + w) + "px"), a.sa.da("top", "0"), a.sa.da("width", "" + f + "px"), a.sa.da("height", "" + e + "px"), a.canvas.Ja("width", "" + f), a.canvas.Ja("height", "" + e), a.la.moveTo(0, h), zc(a.la, v), a.la.na(), 
    a.Cb.da("top", "0").da("right", "" + (q + l) + "px"), a.ub ? (a.Ka.show(), a.Ka.moveTo(v - l, 0), a.Ka.height(k - 2 * d - g)) : a.Ka.Ma(), r ? (a.ia.show(), a.ia.moveTo(v - l - q, 0), a.ia.width(q), a.ia.height(k - 2 * d - g)) : a.Nc || a.ia.Ma(), c = a.view, v = p(c.canvas), f = v.offset(), x = p(c.canvas.parentNode).offset(), k = v.width(), v = v.height(), g = f.left - x.left, f = f.top - x.top, x = zf(c), c.aa.moveTo(g + k - 20 + x, f + x), Dd(c.aa, 20, v - 20), c.ba.moveTo(g + x, f + v - 
    20 + x), Dd(c.ba, k - 20, 20), Pf(c), c.na());
  }
}
function jh(a, b) {
  var c, d;
  c = [];
  null !== a.oa && a.oa in a.view.ja.za && c.push(new Xe([a.oa]));
  d = a.view.ja.cb;
  c.push(new H("ImageNode", {url:b, locked:!0, layer:a.view.Ia}));
  c.push(new bf([d], df));
  a.oa = d;
  a.view.ya(c);
  a.view.Wa();
  T(a.view);
}
function ph(a) {
  a.oa = null;
  a.view.ja.mb(!1, function(b) {
    "ImageNode" === b.type() && !0 === b.wa("locked") && (a.log("Found background image at nodeid %s", b.id), a.oa = b.id);
  });
}
function nh(a, b, c, d) {
  var e;
  e = a.view.ja.cb;
  "layer" in d || (d.layer = a.view.Ia);
  b.push(new H(c, d));
  return e;
}
function qh(a, b) {
  a.focus("canvas");
  var c = a.view;
  c.Da.bb = !0;
  c.Da.Pa = !1;
  c.Da.qd = b;
  c.log("Showing keyboard cursor, caret=%s", b);
  c.na();
}
function rh(a) {
  a.focus("canvas");
  de(a.view);
}
function hh(a) {
  a.Ua = "none";
  a.vb = new Wc;
  wg(a.ea, a.vb);
  a.vb.on("*", function(b, c) {
    "toolbar" === a.Ua ? a.toolbar.pb(b, c) : "canvas" === a.Ua ? a.view.pb(b, c) : a.log("Ignore key action -- don't have focus.");
  });
  a.ha.Ja("tabindex", "0");
  ad(a.vb, a.ha[0]);
  a.canvas.click(function() {
    rc() ? a.Ua = "canvas" : a.focus("canvas");
  });
  p(a.toolbar.ha).click(function() {
    a.focus("toolbar");
  });
  a.la.on("colour", function() {
    a.focus("canvas");
  });
  a.nb.on("goto-toolbar", function() {
    a.focus("toolbar");
  });
  a.nb.on("goto-canvas", function() {
    a.focus("canvas");
  });
}
function gh(a) {
  function b(a) {
    return 0 === a.type.indexOf("key");
  }
  var c, d, e, f, g, h, l = a.Ca.cc();
  a.toolbar = new Sc(a.ea.Fb(), a.ea.get("toolbarButtonSize"));
  if (a.ea.get("showToolbar")) {
    a.ea.get("showPickTool") && Vc(a.toolbar, "pick", l("pick-tool"), Y(a.ea, "wd-pick.png"), function(c) {
      J(a.view);
      b(c) && qh(a);
    });
    a.ea.get("showSquareTool") && a.toolbar.jb(Y(a.ea, "wd-box.png"), l("rectangle-tool"), function(c) {
      bg(a.view);
      b(c) && rh(a);
    });
    a.ea.get("showRoundRectTool") && a.toolbar.jb(Y(a.ea, "wd-roundrect.png"), l("rounded-rectangle-tool"), function(c) {
      bg(a.view, {roundRadius:a.ea.get("defaultRoundRectRadius")});
      b(c) && rh(a);
    });
    a.ea.get("showCircleTool") && a.toolbar.jb(Y(a.ea, "wd-circle.png"), l("circle-tool"), function(c) {
      ag(a.view);
      b(c) && rh(a);
    });
    a.ea.get("showShapeBrushTool") && Vc(a.toolbar, "shapebrush", l("shape-brush-tool"), Y(a.ea, "wd-shapebrush.png"), function(c) {
      fg(a.view, {});
      b(c) && qh(a);
    });
    a.ea.Hf() && Vc(a.toolbar, "brush", l("brush-tool"), Y(a.ea, "wd-brush.png"), function(c) {
      gg(a.view, {});
      b(c) && qh(a);
    });
    a.ea.get("showLineTool") && Vc(a.toolbar, "line", l("line-tool"), Y(a.ea, "wd-line.png"), function(c) {
      Df(a.view, {angleArcs:a.ea.get("angleArcs")});
      b(c) && qh(a);
    });
    a.ea.get("showCurveTool") && Vc(a.toolbar, "curve", l("curve-tool"), Y(a.ea, "wd-curve.png"), function(c) {
      Cf(a.view, {});
      b(c) && qh(a);
    });
    a.ea.get("showArrowTool") && Vc(a.toolbar, "arrow", l("arrow-tool"), Y(a.ea, "wd-arrow.png"), function(c) {
      dg(a.view, {});
      b(c) && qh(a);
    });
    a.ea.get("showTextTool") && Vc(a.toolbar, "text", l("text-tool"), Y(a.ea, "wd-text.png"), function(c) {
      var d = a.view, e, f;
      "interactive" === d.ea.get("textMode") ? Ff(d) : (e = d.ja.cb, f = d.Ra(new F(100, 100)), f = new I(f.x, f.y), d.ya([new H("TextNode", {text:d.ea.ra.defaultText, fontSize:d.ua.fontSize, fontName:d.ua.fontName, bold:d.ua.bold, italic:d.ua.italic, textFillStyle:d.ua.textFillStyle, strokeStyle:d.ua.textStrokeStyle, lineWidth:d.ua.textLineWidth, layer:d.Ia}), new R([e], f, f.inverse())]));
      b(c) && qh(a, !0);
    });
    a.ea.get("showMathTool") && a.toolbar.jb(Y(a.ea, "wd-equation.png"), l("math-tool"), function() {
      var b = a.view, c, d;
      J(b);
      c = b.ja.cb;
      d = new I(100, 100);
      b.ya([new H("MathNode", {mathml:"<math xmlns='http://www.w3.org/1998/Math/MathML'></math>", layer:b.Ia}), new R([c], d, d.inverse())]);
      b.ta.emit("math.edit", c);
    });
    c = function(b) {
      a.toolbar.jb(d, b.name, function(c) {
        a.log("Custom button %s clicked.", b.name);
        b.onclick.call(c.target, a.ta);
      });
    };
    g = 0;
    for (h = sh.length;g < h;g++) {
      e = sh[g], f = e.name, d = e.image, a.log("add custom button %s", f), c(e);
    }
    Uc(a.toolbar, "pick");
    a.ea.ra.showImageTool && a.toolbar.jb(Y(a.ea, "wd-image.png"), l("image-tool"), function() {
      $f(a.view, "logo.png");
    });
    a.ea.ra.showMoveToFrontBack && (a.toolbar.jb(Y(a.ea, "wd-moveup.png"), l("bring-to-front"), function() {
      a.view.sc();
    }), a.toolbar.jb(Y(a.ea, "wd-movedown.png"), l("send-to-back"), function() {
      a.view.Ic();
    }));
    a.ea.get("showUndoRedo") && (a.toolbar.jb(Y(a.ea, "wd-undo.png"), l("undo"), function() {
      a.view.Sa();
    }), a.toolbar.jb(Y(a.ea, "wd-redo.png"), l("redo"), function() {
      a.view.Pb();
    }));
    a.ea.get("showCopyPaste") && (a.toolbar.jb(Y(a.ea, "wd-copy.png"), l("copy"), function() {
      a.view.$b();
    }), a.toolbar.jb(Y(a.ea, "wd-paste.png"), l("paste"), function() {
      a.view.yc();
    }));
  }
  a.toolbar.on("click", function() {
    a.focus("toolbar");
  });
  a.toolbar.ha.style.position = "absolute";
  a.toolbar.ha.style.left = "0";
  a.toolbar.ha.style.right = "0";
  a.ha.append(a.toolbar.ha);
  a.ta.on("tool-changed", function(b) {
    Uc(a.toolbar, b);
  });
}
function lh(a, b) {
  a.oa = null;
  Rf(a.view, b);
  fh(a);
  ph(a);
  a.ta && (a.ta.emit("document-changed"), a.ta.emit("set-page", b.kb));
  for (var c = 0;c < a.eb.length;c++) {
    var d = a.eb[c];
    a.log("Removing old DomElement of type %s", d.tagName);
    p(d).remove();
  }
  a.eb = [];
}
function fh(a) {
  a.ea.ra.sloppy || jg(a.view, "sloppiness", 0);
  var b;
  b = ("" + a.ea.ra.defaultSmoothness).toLowerCase();
  jg(a.view, "smoothness", "sharpest" === b ? 0 : "sharper" === b ? .1 : "sharp" === b ? .2 : "smoothest" === b ? .5 : .3);
  jg(a.view, "fillStyle", a.ea.ra.defaultFillStyle);
  jg(a.view, "strokeStyle", a.ea.ra.defaultStrokeStyle);
  jg(a.view, "fontName", a.ea.ra.defaultFont);
  jg(a.view, "fontSize", a.ea.ra.defaultFontSize);
  jg(a.view, "lineWidth", a.ea.ra.defaultLineWidth);
  jg(a.view, "textFillStyle", a.ea.ra.defaultTextFillStyle);
}
function kh(a) {
  var b, c, d, e, f;
  a.canvas[0].getContext("2d");
  e = a.ea.ra.fonts;
  f = [];
  c = 0;
  for (d = e.length;c < d;c++) {
    b = e[c], a.log("Preloading: %s", b), b = p("<div>").da("font-family", b).text("abcd"), b.da("color", "transparent"), f.push(a.ha.append(b));
  }
}
;function Z(a, b) {
  this.ba = {};
  this.ia = !1;
  this.$ = [];
  this.aa = 0;
  this.app = new eh(this, a, b);
  th(this);
  this.Jb = null;
}
Z.prototype = {log:A("CONTEXT"), Qe:function() {
  this.ia = !1;
  this.$ = [];
}, me:function(a) {
  var b = this.app.Ca;
  eb(b, a, b.data);
}, Re:function() {
  return this.uc(this.Kb());
}, Id:function() {
  this.$ = [];
  this.aa = 0;
  this.ia = !0;
  this.log("beginTransaction()");
}, sc:function() {
  this.app.view.sc();
}, Yb:function() {
  return this.app.view.ja.Yb();
}, Zb:function() {
  return this.app.view.ja.Zb();
}, Wa:function() {
  this.app.view.Wa();
  T(this.app.view);
  this.app.view.na();
}, Ue:function() {
  tf(this.app.view.ja);
}, rd:function(a, b) {
  this.cd(a, !b);
}, We:function() {
  this.app.view.ya(this.$, !0);
  this.ia = !1;
  this.$ = [];
  this.aa = 0;
}, sd:function() {
  this.app.view.ya(this.$);
  this.ia = !1;
  this.$ = [];
  this.aa = 0;
}, $b:function(a) {
  return this.app.view.$b(a);
}, jc:function(a) {
  if (0 < a.length) {
    return uh(this, this.app.jc(this.$, a));
  }
}, ne:function(a, b) {
  this.log("createNode(%s)", a);
  var c = {}, d;
  for (d in b) {
    if (b.hasOwnProperty(d)) {
      var e = b[d];
      "matrix" === d ? (e = new P(e), c.matrix = e, c.inverse = e.inverse()) : c[d] = e;
    }
  }
  return uh(this, nh(this.app, this.$, a, c));
}, oe:function(a) {
  return uh(this, mh(this.app, this.$, a));
}, qe:function(a, b) {
  function c(a, b) {
    b.click(function(b) {
      a.onclick.call(this, d, b);
    });
  }
  a = kc(a);
  ja(b) || this.error("createToolbar: second paramter must be array");
  var d = this, e;
  e = "javascript:void(0)";
  for (var f = 0;f < b.length;f++) {
    var g = b[f], h = p("<a>").Ja("href", e);
    h.da("background-repeat", "no-repeat");
    h.da("background-position", "center");
    h.da("display", "inline-block");
    Qa(h, "zwibbler-button");
    g.onclick && c(g, h);
    g.title && h.Ja("title", g.title);
    g.background ? h.da("background", g.background) : g.image && h.da("background-image", "url(" + Y(this.app.view.ea, g.image) + ")");
    a.append(h);
  }
}, Xe:function(a, b) {
  "string" === typeof b && (b = p("#" + b));
  if ("PageSelector" === a) {
    this.log("Creating page selector");
    var c = new Ec(b, !1, !1);
    Ic(c, !0);
    Hc(c, this);
    Gc(c);
  } else {
    return this.Ab("Cannot create UI Elemment %s", a), !1;
  }
  return !0;
}, pe:function(a) {
  var b = this.app, c = this.$, d, e, f, g, h, l;
  if (6 > a.length) {
    b.log("newShape: Cannot create shape with fewer than three points."), a = void 0;
  } else {
    d = new ze;
    f = h = 0;
    for (l = a.length - 1;h <= l;f = h += 2) {
      g = b.view.Ra(new F(a[f], a[f + 1])), 0 === f ? (d.moveTo(g.x, g.y), e = g) : d.lineTo(g.x, g.y);
    }
    d.lineTo(e.x, e.y);
    d.close();
    a = mh(b, c, d.Hb());
  }
  return uh(this, a);
}, ud:function() {
  var a = this.app.view.$b(!1);
  this.Ld();
  return a;
}, re:function(a) {
  this.Jd(a);
}, Jd:function(a) {
  this.log("deleteNodes()");
  var b = this.$;
  ja(a) || (a = [a]);
  b.push(new Xe(a));
  return uh(this, void 0);
}, Kd:function() {
  if (1 === this.Kb()) {
    this.log("Cannot remove all the pages.");
  } else {
    var a = this.app.view.ja;
    this.$.push(new Xe([a.$[a.kb].id]));
    uh(this);
  }
}, Ld:function() {
  Af(this.app.view);
}, ac:function() {
  if (1 === arguments.length && !1 === arguments[0]) {
    var a = this.app.view.ja;
    a.eb = a.la.next;
  }
  return this.app.view.ja.ac();
}, se:function(a, b, c) {
  "jpeg" === a && (a = "jpg");
  var d, e;
  if ("pdf" === a || "svg" === a || "png" === a || "jpg" === a) {
    ("pdf" === a || "svg" === a) && "Blob" in window ? e = this.app.view.ja.save(a, "blob") : "png" === a || "jpg" === a ? (d = this.save(a, c), "Blob" in window && (e = vc(d))) : d = this.app.view.ja.save(a, "data-uri");
    if (e) {
      if (window.navigator.msSaveOrOpenBlob) {
        this.log("Using msSaveOrOpenBlob()");
        window.navigator.msSaveOrOpenBlob(e, b);
        return;
      }
      d = window.URL.createObjectURL(e);
    }
    var f = document.createElement("a");
    f.innerHTML = "download";
    f.setAttribute("href", d);
    f.setAttribute("download", b);
    f.style.display = "none";
    document.body.appendChild(f);
    f.click();
    setTimeout(function() {
      document.body.removeChild(f);
    }, 100);
  } else {
    this.log("unsupported format for download: %s", a);
  }
}, na:function(a, b) {
  b = b || {};
  var c = b.page || 0, d = this.app.view.ja.kb, e = of(this.app.view.ja);
  this.app.view.ja.ib(c);
  Vf(this.app.view, a, 0, 0, e.width, e.height);
  this.app.view.ja.na(a);
  this.app.view.ja.ib(d);
}, duplicate:function() {
  this.app.view.duplicate();
}, emit:function(a, b) {
  var c, d = this;
  this.ba || (this.ba = {});
  c = Array.prototype.slice.call(arguments, 1);
  setTimeout(function() {
    var b, f, g, h;
    if (a in d.ba) {
      for (h = d.ba[a], f = 0, g = h.length;f < g;f++) {
        b = h[f], b.apply(null, c);
      }
    }
  }, 0);
  return this;
}, focus:function() {
  this.app.ha.focus();
}, Ye:function(a) {
  a = this.Nd(a);
  return a.length ? a[0] : null;
}, Nd:function(a) {
  var b = this.app.view.ja, c = [], d;
  for (d in b.za) {
    if (b.za.hasOwnProperty(d)) {
      var e = b.za[d];
      e.wa("tag") === a && c.push(e);
    }
  }
  a = [];
  for (b = 0;b < c.length;b++) {
    a.push(c[b].id);
  }
  return a;
}, Ze:function(a, b, c) {
  var d = null;
  if (3 === arguments.length) {
    if (!y(b) || !y(c)) {
      this.Ab("flip: 2nd and 3rd args must be numbers.");
      return;
    }
    d = new F(b, c);
  }
  var e = this.app.view, f = a / 180 * Math.PI;
  0 === e.selection.length && null === e.Ea || e.log("flipSelection: selection is empty");
  Yf(e, Md(e), f, d);
}, te:function(a, b, c, d) {
  var e = vh(this, a), f = null;
  if (4 === arguments.length) {
    if (!y(c) || !y(d)) {
      this.Ab("flip: 3rd and 4th args must be numbers.");
      return;
    }
    f = new F(c, d);
  }
  Yf(this.app.view, e, b / 180 * Math.PI, f);
}, $e:function(a, b) {
  function c(a) {
    a.on("click", function(b) {
      f.rd(a.da("background-color"), 1 !== b.which);
    });
  }
  function d() {
    var c = p("<div>").da("width", b + "px").da("height", b + "px").da("display", "inline-block");
    a.append(c);
    return c;
  }
  function e(a, b) {
    var c = document.createElement("canvas");
    c.width = a;
    c.height = a;
    b(c.getContext("2d"), 0, 0, a);
    return d().append(c);
  }
  var f = this;
  a = p(a);
  var g, h, l;
  g = e(b, Cc);
  g.on("click", function(a) {
    f.rd("transparent", 1 !== a.which);
  });
  g = e(b, Dc);
  g.on("click", function(a) {
    f.de(.5, 1 !== a.which);
  });
  for (h = 0;1 >= h;h += 1 / 13) {
    l = (new N(2, [0, 0, h, 1])).toString(), c(d().da("background-color", l));
  }
  for (h = .3;1 >= h;h += .7 / 14) {
    for (g = 0;360 > g;g += 22.5) {
      l = (new N(2, [g, .7, h, 1])).toString(), c(d().da("background-color", l));
    }
  }
  for (g = 0;360 > g;g += 22.5) {
    l = (new N(2, [g, 1, 1, 1])).toString(), c(d().da("background-color", l));
  }
}, md:function() {
  var a = this.app.view;
  a.log("getActiveLayer() -> %s", a.Ia);
  return a.Ia;
}, Od:function(a) {
  var b = [];
  this.app.view.ja.mb(!a, function(a) {
    b.push(a.id);
  });
  return b;
}, ue:function() {
  var a = this.app;
  return null !== a.oa && a.oa in a.view.ja.za ? U(a.view.ja, a.oa).wa("url") : null;
}, ve:function(a) {
  var b = this.app.view;
  ja(a) || (a = [a]);
  for (var c = null, d = 0;d < a.length;d++) {
    var e = U(b.ja, a[d]);
    e && (null === c ? c = e.hb().clone() : hd(c, e.hb()));
  }
  null === c && (c = new O(0, 0, 0, 0));
  return wh(c);
}, dc:function() {
  return this.app.view.ja.kb;
}, we:function() {
  var a = this.app.view, b = null;
  a.pa.Lb && (b = a.pa.Lb());
  return b;
}, af:function(a, b) {
  var c = D(this.app.view, a, b);
  return {x:c.x, y:c.y};
}, tc:function() {
  var a = of(this.app.view.ja);
  return {x:a.x, y:a.y, width:a.width, height:a.height};
}, df:function(a) {
  return this.app.Ca.get(a);
}, error:function(a) {
  alert(a);
}, bf:function() {
  return wh(this.app.view.ja.hb());
}, cf:function(a, b) {
  return this.Ed(a, b);
}, ff:function() {
  var a = [], b = {}, c;
  this.app.view.ja.mb(!1, function(d) {
    !(c = oe(d)) || c in b || (b[c] = 1, a.push(c));
  });
  c = this.md();
  c in b || a.push(c);
  return a;
}, ef:function(a) {
  var b = [];
  this.app.view.ja.mb(!1, function(c) {
    oe(c) === a && b.push(c.id);
  });
  return b;
}, Ed:function(a, b) {
  var c = this.app, d, e;
  (d = U(c.view.ja, a)) && (e = d.wa(b));
  c.log("GetItemProperty %s: %s=%s", a, b, e);
  return e;
}, gf:function(a) {
  var b = U(this.app.view.ja, a);
  null === b && this.Ab("Error: node %s does not exist", a);
  a = b.hb();
  return {x:a.x, y:a.y, width:a.width, height:a.height};
}, xe:function(a) {
  return (a = U(this.app.view.ja, a)) ? a.type() : "";
}, hf:function(a, b) {
  var c = this.app.view.ja.Za(a, b, this.app.view.Ia);
  return c ? c.id : null;
}, Kb:function() {
  return this.app.view.ja.Kb();
}, Yc:function(a) {
  a = U(this.app.view.ja, a);
  if ("PathNode" !== a.type()) {
    return null;
  }
  a = wd(a.Yc().clone());
  for (var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    b.push(d.x);
    b.push(d.y);
  }
  return b;
}, jf:function(a) {
  a = U(this.app.view.ja, a);
  if ("PathNode" !== a.type()) {
    return null;
  }
  a = a.Yc();
  for (var b = [], c = [], d = 0;d < a.ga.length;) {
    switch(a.ga[d]) {
      case Bb:
        c = [{x:a.ga[d + 1], y:a.ga[d + 2]}];
        b.push(c);
        break;
      case Cb:
        c.push({x:a.ga[d + 1], y:a.ga[d + 2]});
    }
    d += Fb[a.ga[d]];
  }
  return b;
}, Oe:function() {
  this.app.view.Cb = this.app.ia;
  this.app.Nc = !0;
  return this.app.ia.ha[0];
}, kf:function(a, b, c, d) {
  var e;
  e = ce(this.app.view, a, b);
  if (void 0 === c) {
    return {x:e.x, y:e.y};
  }
  a = ce(this.app.view, a + c, b + d);
  return wh(new O(e.x, e.y, a.x - e.x, a.y - e.y));
}, ye:function(a) {
  return X(this.app.view, a);
}, mf:function() {
  return wh(Uf(this.app.view));
}, Ab:function(a, b) {
  for (var c = arguments[0].split("%s"), d = [], e = 0;e < c.length;e++) {
    d.push(c[e]), e < c.length - 1 && d.push(JSON.stringify(arguments[e + 1]));
  }
  this.log(d.join(""));
  throw {message:d, toString:function() {
    return d;
  }};
}, uc:function(a) {
  var b = this.app.view.ja.cb;
  this.$.push(new H("PageNode", {}, this.app.view.ja.root.id, a));
  uh(this, b);
  return a;
}, Ad:function(a) {
  return this.app.view.ja.Ad(a);
}, ze:function(a, b) {
  1 === arguments.length && (b = arguments[0], a = "zwibbler3");
  var c;
  "list" === a ? (lh(this.app, dh(b)), c = void 0) : c = lh(this.app, bh(b));
  return c;
}, Ae:function(a) {
  var b = this;
  y(a) || this.error("lockUpdates: Expected a number");
  this.la && clearTimeout(this.la);
  this.la = setTimeout(function() {
    Xf(b.app.view, !1);
  }, a);
  Xf(b.app.view, !0);
}, ad:function() {
  this.app.view.ad();
}, bd:function() {
  this.app.view.bd();
}, Be:function() {
  var a = this.app;
  lh(a, new hf);
  null !== a.ea.ra.backgroundImage && (jh(a, a.ea.ra.backgroundImage), tf(a.view.ja));
  th(this);
}, Ce:function() {
  this.hc(Math.min(this.dc() + 1, this.Kb() - 1));
}, on:function(a, b) {
  "draw" === a ? this.Jb = b : a in this.ba ? this.ba[a].push(b) : this.ba[a] = [b];
  return this;
}, tf:function(a) {
  "function" === typeof a || this.Ab("Error: onComplete needs a function argument.");
  var b = this.app.view;
  b.request.$ ? (b.log("Formatting in progress; will call function soon"), Nb(b.request, a)) : (b.log("Format already done; call function in 1 tick"), setTimeout(a, 0));
}, yc:function(a) {
  this.app.view.yc(a);
}, vf:function() {
  this.hc(Math.max(this.dc() - 1, 0));
}, De:function(a, b) {
  var c = [], d;
  if (y(a)) {
    c.push(a);
  } else {
    if (ja(a)) {
      for (d = 0;d < a.length;d++) {
        y(a[d]) ? c.push(a[d]) : this.error("print(): pageSpec must be array of numbers");
      }
    } else {
      if (!a) {
        for (d = 0;d < this.Kb();d++) {
          c.push(d);
        }
      }
    }
  }
  b = b ? xh(b) : xh(this.tc());
  var e = this.dc(), f = document.createElement("canvas");
  f.width = b.width;
  f.height = b.height;
  var g = f.getContext("2d");
  g.translate(-b.x, -b.y);
  var h = window.open("about:blank", "_blank");
  h.document.write("<!DOCTYPE html><html><body>");
  for (d = 0;d < c.length;d++) {
    this.hc(c[d]), Vf(this.app.view, g, b.x, b.y, b.width, b.height), this.app.view.ja.na(g), 0 < d ? h.document.write("<div style='page-break-before:always'>") : h.document.write("<div>"), h.document.write("<img style='width:100%' src='"), h.document.write(f.toDataURL()), h.document.write("'></div>"), g.clearRect(b.x, b.y, b.width, b.height);
  }
  h.document.write("</body></html>");
  h.document.close();
  h.focus();
  h.print();
  h.close();
  this.hc(e);
}, Pb:function() {
  this.app.view.Pb();
}, Ee:function() {
  var a = this;
  setTimeout(function() {
    ih(a.app, !0);
  }, 1);
}, save:function(a, b) {
  a = a || "zwibbler3";
  var c = {jpeg:"image/jpeg", jpg:"image/jpeg", png:"image/png"};
  b = xh(b || this.tc());
  switch(a) {
    case "list":
      return this.app.view.ja.save("list", "object");
    case "png":
    ;
    case "jpeg":
    ;
    case "jpg":
      return oh(this.app, c[a], b);
    case "zwibbler3":
      return this.app.view.ja.save("zwibbler3", "string");
    case "svg":
    ;
    case "pdf":
      return this.app.view.ja.save(a, "string");
    case "image/png":
    ;
    case "image/jpeg":
      for (var d = oh(this.app, a, b), d = d.substr(d.indexOf(",") + 1), c = ["base64"], e = 0;e < c.length;e++) {
        d = ea[c[e]](d);
      }
      return d;
    default:
      return "Unsupported format: " + a;
  }
}, selectNodes:function(a) {
  a = vh(this, a);
  this.app.view.selectNodes(a);
  T(this.app.view);
  this.app.view.na();
}, Ic:function() {
  this.app.view.Ic();
}, Fd:function(a) {
  var b = this.app.view;
  b.log("setActiveLayer(%s)", a);
  b.Ia = a;
  b.Wa();
  T(b);
  b.na();
}, xf:function(a, b) {
  var c = this.app, d, e, f, g;
  Eg(c.aa);
  b && (d = c.aa, d.aa = b, d.$ = b);
  g = [];
  e = 0;
  for (f = a.length;e < f;e++) {
    d = a[e], "string" === typeof d ? g.push(Fg(c.aa, d, d)) : g.push(Fg(c.aa, d.small, d.large, d.tooltip));
  }
}, yf:function(a, b) {
  return ug(this.app.ea, a, b);
}, cd:function(a, b) {
  this.app.view.wb(a, b);
}, hc:function(a) {
  this.app.view.ib(a);
}, Ge:function(a) {
  var b = this.app.view;
  a ? (b.log("Setting a custom background function."), b.ia = a) : b.log("Clearing custom background function.");
}, nd:function(a, b) {
  !y(a) && null !== a || !y(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : cg(this.app.view, a, b);
}, be:function(a, b) {
  !y(a) && null !== a || !y(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : uh(this, cg(this.app.view, a, b, this.$));
}, zf:function(a, b) {
  var c = U(this.app.view.ja, a);
  c || this.Ab("setDomElement: Node %s does not exist", a);
  "DomNode" !== c.type() && this.Ab("setDomElement: Node %s is not a DomNode. It is %s", a, c.type());
  c.ce(b);
  this.app.eb.push(b);
}, Cf:function(a, b) {
  ka(a) && ka(b) ? (this.md() === a && this.Fd(b), this.app.view.ja.mb(!1, function(c) {
    oe(c) === a && c.setProperty("layer", b);
  })) : this.Ab("setLayerName() needs string arguments.");
}, ee:function(a) {
  var b = null, c = null, d, e = !0, f = !1;
  if (2 === arguments.length) {
    y(arguments[0]) && y(arguments[1]) ? (d = arguments[0], b = arguments[1]) : ka(arguments[0]) && "boolean" === typeof arguments[1] ? (c = arguments[0], f = arguments[1]) : e = !1;
  } else {
    if (1 === arguments.length && ka(arguments[0])) {
      for (var g = arguments[0].split(" "), h = 0;h < g.length;h++) {
        "landscape" === g[h] ? f = !0 : "portrait" === g[h] ? f = !1 : c = g[h];
      }
    }
  }
  if (!1 === e) {
    return this.log("Bad arguments to setPaperSize()."), !1;
  }
  if (null === c) {
    return this.nd(d, b), !0;
  }
  switch(c) {
    case "letter":
      d = 816;
      b = 1056;
      break;
    case "legal":
      d = 816;
      b = 1344;
      break;
    case "11x17":
      d = 1056;
      b = 1632;
      break;
    case "tabloid":
      d = 1056;
      b = 1632;
      break;
    case "a0":
      d = 841 / 25.4 * 96;
      b = 1189 / 25.4 * 96;
      break;
    case "a1":
      d = 594 / 25.4 * 96;
      b = 841 / 25.4 * 96;
      break;
    case "a2":
      d = 420 / 25.4 * 96;
      b = 594 / 25.4 * 96;
      break;
    case "a3":
      d = 297 / 25.4 * 96;
      b = 420 / 25.4 * 96;
      break;
    case "a4":
      d = 210 / 25.4 * 96;
      b = 297 / 25.4 * 96;
      break;
    case "none":
      b = d = null;
      break;
    default:
      return this.log("Invalid paper size: %s", c), !1;
  }
  f && (c = d, d = b, b = c);
  this.nd(d, b);
  return !0;
}, Af:function(a, b) {
  var c = this.app, d, e, f, g;
  Eg(c.ba);
  g = [];
  b && (d = c.ba, d.aa = b, d.$ = b);
  e = 0;
  for (f = a.length;e < f;e++) {
    d = a[e], "string" === typeof d ? g.push(Fg(c.ba, d, d)) : g.push(Fg(c.ba, d.small, d.large, d.tooltip));
  }
}, Bf:function(a, b, c) {
  this.Gd(a, b, c);
}, He:function(a, b) {
  if (2 !== arguments.length) {
    throw "Error: setNodeProperties takes 2 arguments.";
  }
  var c;
  c = this.app;
  var d = this.$, e = a, f;
  c.log("External app setNodeProperty %s: %s", e, b);
  ja(e) || (e = [e]);
  for (f in b) {
    b.hasOwnProperty(f) && d.push(new be(e, f, b[f]));
  }
  c = 0 < d.length ? c.view.ya(d) : void 0;
  return uh(this, c);
}, Gd:function(a, b, c) {
  var d = this.$;
  this.app.log("External app setItemProperty %s: %s=%s", a, b, c);
  var e;
  ja(a) ? e = a : e = [a];
  d.push(new be(e, b, c));
  return uh(this, void 0);
}, Df:function(a, b) {
  var c = U(this.app.view.ja, a);
  c && (c.Jc(!b), this.app.view.na());
}, de:function(a, b) {
  var c = this.app.view;
  c.pa.Ob ? (c.log("Simulating opacity change %s", a), c.pa.Ob(a, b)) : c.log("An opacity is not needed for this tool.");
}, Ie:function(a) {
  var b = this.app.view;
  b.Ca = a;
  a = Ef(b);
  b.Ha = -a.x;
  b.Fa = -a.y;
  nb(b);
  b.na();
}, Ff:function(a) {
  "object" === typeof a && y(a.x) && y(a.y) && y(a.width) && y(a.height) || this.Ab("setViewRect: arg must be an object with numeric x, y, width, height properties");
  0 !== a.width && 0 !== a.height || this.Ab("setViewRect: width and height must be non-zero.");
  var b = this.app.view;
  a = xh(a);
  b.log("setViewRect(%s)", a);
  var c = Math.min(b.canvas.width / a.width, b.canvas.height / a.height), d = a.y * c;
  b.Ha = -(a.x * c);
  b.Fa = -d;
  b.scale = c;
  b.oa = "none";
  nb(b);
  b.na();
}, Gf:function(a) {
  y(a) || "page" === a || "width" === a ? Sf(this.app.view, a) : this.log("setZoom: invalid parameter.");
}, Kc:function(a, b) {
  this.app.view.Kc(a, b);
}, Hd:function(a, b, c) {
  this.log("Translate node %s by %s,%s actions=%s", a, b, c, this.$.length);
  b = new I(b, c);
  this.$.push(new R([a], b, b.inverse()));
  return uh(this, !0);
}, wf:function(a) {
  var b = Math.round(a / (Math.PI / 2));
  a = b * Math.PI / 2;
  var b = 0 === b % 2, c = this.Od(!0), d = this.tc(), e = d.width / 2, f = d.height / 2;
  this.Id();
  for (var g = 0;g < c.length;g++) {
    this.ae(c[g], a, e, f), b || this.Hd(c[g], f - e, e - f);
  }
  b || this.be(d.height, d.width);
  this.sd();
}, ae:function(a, b, c, d) {
  this.log("Rotate node %s by %s around (%s,%s) actions=%s", a, b / Math.PI * 180, c, d, this.$.length);
  var e = U(this.app.view.ja, a);
  null === e && this.Ab("rotateNode: Node %s doesn't exist", a);
  4 > arguments.length && (e = fd(e.hb()), c = e.x, d = e.y);
  e = new md(b, c, d);
  this.$.push(new R([a], e, e.inverse()));
  return uh(this, !0);
}, Fe:function(a, b, c) {
  this.log("Scale node %s by %s,%s actions=%s", a, b, c, this.$.length);
  b = new ld(b, c, 0, 0);
  this.$.push(new R([a], b, b.inverse()));
  return uh(this, !0);
}, Sa:function() {
  this.app.view.Sa();
}, Qc:function(a) {
  return uh(this, this.app.Qc(this.$, a));
}, Je:function(a, b) {
  function c() {
  }
  function d() {
  }
  var e = new lg(this.app.Cb, b || "Working"), f = new XMLHttpRequest, g = new FormData(a);
  f.upload.addEventListener("progress", function(a) {
    e.update(a.loaded / a.total);
  }, !1);
  f.addEventListener("load", function() {
    200 === f.status ? (e.done(), d(f.response, f)) : (e.error("Error"), c(f, f));
  }, !1);
  f.addEventListener("error", function() {
    e.error("Error");
    c(f, f);
  }, !1);
  f.addEventListener("abort", function() {
    e.error("Aborted");
    c(f);
  }, !1);
  f.open(a.method, a.action);
  f.send(g);
  var h = {success:function(a) {
    d = a;
    return h;
  }, error:function(a) {
    c = a;
    return h;
  }};
  return h;
}, Mf:function(a) {
  dg(this.app.view, a);
}, Nf:function(a, b) {
  2 === arguments.length ? gg(this.app.view, {lineWidth:b, strokeStyle:a}) : gg(this.app.view, arguments[0] || {});
}, Of:function(a) {
  ag(this.app.view, a);
}, Pf:function(a) {
  Cf(this.app.view, a);
}, Qf:function(a) {
  "object" === typeof a || this.error("useCustomTool(): requires an object as argument.");
  G(this.app.view, new kg(this.app.view, a));
}, Ke:function() {
  ag(this.app.view);
}, Rf:function(a, b, c) {
  eg(this.app.view, {strokeStyle:a, lineWidth:b}, c || "freehand");
}, $f:function(a) {
  var b = this.app.view;
  G(b, new kb(b, a));
}, Sf:function(a) {
  Df(this.app.view, a);
}, Tf:function() {
  var a = this.app.view;
  G(a, new lb(a));
}, Uf:function() {
  J(this.app.view);
}, Le:function(a, b) {
  var c = this.app.view, d = b, e;
  e = new ze;
  for (var f = 0;f <= a;f++) {
    var g = 50 * Math.sin(d), h = 50 * -Math.cos(d);
    0 === f ? e.moveTo(g, h) : e.lineTo(g, h);
    d += 2 * Math.PI / a;
  }
  e.close();
  d = {commands:e.Hb(), fillStyle:c.Xa, strokeStyle:c.gb, seed:Math.round(65535 * Math.random()), lineWidth:c.ua.lineWidth, sloppiness:c.ua.sloppiness, layer:c.Ia, wrap:c.ea.get("multilineText"), fontSize:c.ea.get("defaultFontSize")};
  c.log("Create an item on layer %s", c.Ia);
  G(c, new Rd(c, "PathNode", d, 100, 100, "circle"));
}, Vf:function(a) {
  eg(this.app.view, a || {}, "quadratic");
}, Me:function(a) {
  bg(this.app.view, a);
}, Wf:function(a) {
  bg(this.app.view, p.$({}, {roundRadius:this.app.ea.get("defaultRoundRectRadius")}, a || {}));
}, Xf:function(a, b) {
  fg(this.app.view, {strokeStyle:a, lineWidth:b});
}, Zf:function(a) {
  var b = this.app.view;
  b.ea.get("readOnly") ? b.log("readOnly mode: Ignoring tool click.") : G(b, new Re(b, "stampline", a));
}, Yf:function(a) {
  bg(this.app.view, a);
}, ag:function() {
  Ff(this.app.view);
}, Sc:function() {
  this.app.view.Sc();
}, Tc:function() {
  this.app.view.Tc();
}};
function vh(a, b) {
  var c = [];
  y(b) && (b = [b]);
  for (var d = 0;d < b.length;d++) {
    var e = U(a.app.view.ja, b[d]);
    e && c.push(e);
  }
  return c;
}
function th(a) {
  var b = a.app.ea.get("defaultPaperSize");
  a.log("onNewDocument()");
  "none" !== b && a.ee(b);
}
function xh(a) {
  return new O(a.x || 0, a.y || 0, a.width || 0, a.height || 0);
}
function wh(a) {
  return {x:a.x, y:a.y, width:a.width, height:a.height};
}
function uh(a, b) {
  if (!a.ia) {
    return a.log("Not in a transaction. committing immediately. id=%s", b), a.sd(), b;
  }
  if ("number" === typeof b) {
    return a.aa += 1, a.log("id=%s numCreated=%s realid=%s", b, a.aa, b + a.aa - 1), b + a.aa - 1;
  }
}
;"jQuery" in window && (window.jQuery.fn.zwibbler = function(a) {
  a = a || {};
  var b = null;
  this.each(function(c, d) {
    d.zwibbler && p(d).empty();
    b = new Z(p(d), a);
    d.zwibbler = b;
  });
  return b;
}, window.jQuery.fn.zwibblerContext = function() {
  return this[0].zwibbler;
});
var sh = [], Be = {};
window.Zwibbler = {create:function(a, b) {
  "string" === typeof a && 0 < a.length && "." !== a.charAt(0) && "#" !== a.charAt(0) && (a = "#" + a);
  var c = kc(a);
  return null === c ? (alert("Zwibbler.create: Cannot find an element with id " + a), null) : new Z(p(c), b);
}, addButton:function(a) {
  for (var b = ["name", "image", "onclick"], c = 0;c < b.length;c++) {
    if (!(b[c] in a)) {
      return alert("Zwibbler.addButton: missing " + b[c]), !1;
    }
  }
  sh.push(a);
  return !0;
}, addCustomNode:function(a, b) {
  Be[a] = b;
}, Dialog:function(a, b) {
  var c = kc(a);
  null === c[0].parentNode && p(document.body).append(c);
  "static" === c.da("position") && c.da("position", "absolute");
  c.da("display", "none");
  b = b || {};
  var d = sc(c[0]), e = new aa("transparent");
  c.da("z-index", "" + d);
  e.$ = d;
  e.insertBefore = c;
  var f = b.showNear, g = b.showHow, h = {hide:function() {
    e.Ma();
    c.Ma();
    if (h.onhide) {
      h.onhide();
    }
  }, show:function(a, b) {
    a = a || f;
    b = b || g;
    c.show();
    var d = c.width(), q = c.height();
    if (a && b) {
      var d = kc(a), q = b, r = d.offset(), q = q.toLowerCase().split(" ");
      2 !== q.length && (q = ["tl", "tl"]);
      0 <= q[0].indexOf("b") && (r.top += d.outerHeight());
      0 <= q[0].indexOf("r") && (r.left += d.outerWidth());
      0 <= q[1].indexOf("b") && (r.top -= c.outerHeight());
      0 <= q[1].indexOf("r") && (r.left -= c.outerWidth());
      c.da("position", "absolute");
      c.offset(r);
    } else {
      c.da("left", "50%"), c.da("top", "50%"), c.da("margin-left", "" + -d / 2 + "px"), c.da("margin-top", "" + -q / 2 + "px");
    }
    e.show(h.hide);
    if (h.onshow) {
      h.onshow();
    }
  }, onshow:b.onshow, onhide:b.onhide};
  return h;
}, ColourWheel:function(a, b) {
  a = p(a)[0];
  var c = new Jc(a, b), d = new M;
  c.Ka = function(a) {
    d.emit("change", a);
  };
  return {on:function(a, b) {
    d.on(a, b);
  }, colour:function() {
    if (arguments.length) {
      Lc(c, arguments[0]);
    } else {
      return c.aa.toString();
    }
  }};
}, SlidingPanel:function(a, b) {
  b = b || {};
  var c = b.autohide, d;
  d = "string" === typeof a ? p("#" + a) : p(a);
  var e = new Ob(d);
  if (b.onshow) {
    e.on("show", b.onshow);
  }
  if (b.onhide) {
    e.on("hide", b.onhide);
  }
  return {show:function(a) {
    e.show(a, c);
  }, hide:function() {
    e.Ma();
  }};
}, createPreview:function(a, b) {
  return window.Zwibbler.render(a, b);
}, render:function(a, b) {
  function c() {
    var a = q.hb(), b = 1, c = 0, r = 0;
    f && (a.y = f);
    l && (a.height = l - a.y);
    g && (a.x = g);
    h && (a.width = h - a.x);
    d && e ? b = Math.min(d / a.width, e / a.height) : d ? (b = d / a.width, e = a.height * b) : e ? (b = e / a.height, d = a.width * b) : (d = a.width, e = a.height);
    a.width * b < d && (c = d / 2 - a.width * b / 2);
    a.height * b < e && (r = e / 2 - a.height * b / 2);
    c -= a.x * b;
    r -= a.y * b;
    k.width = Math.ceil(d);
    k.height = Math.ceil(e);
    n.translate(c, r);
    n.scale(b, b);
    q.na(n);
  }
  b = b || {};
  var d = b.width || 0, e = b.height || 0, f = b.top || 0, g = b.left || 0, h = b.right || 0, l = b.bottom || 0, k = oc(null), n = k.getContext("2d"), q = bh(a), r = new Rb;
  q.format(n, r);
  r.on("reformat", function(a) {
    Td(q, a.id);
  });
  if (r.$) {
    r.on("done", function() {
      q.format(n, r);
      c();
    });
  } else {
    c();
  }
  return k;
}, parseColour:function(a) {
  a = ec(a);
  return {r:a.values[0], g:a.values[1], b:a.values[2], a:a.values[3]};
}, makeColour:function(a) {
  return (new N(0, [a.r, a.g, a.b, a.a])).toString();
}, getAbsoluteUrl:function(a) {
  var b = document.createElement("a");
  b.href = a;
  return b.href;
}, base64Encode:function(a) {
  return fa(a);
}, fonts:new cc, addFont:function(a, b) {
  window.Zwibbler.fonts.add(a, b);
}};
Ce.prototype.setElement = Ce.prototype.ce;
Z.prototype.log = Z.prototype.log;
Z.prototype.abortTransaction = Z.prototype.Qe;
Z.prototype.addToLanguage = Z.prototype.me;
Z.prototype.addPage = Z.prototype.Re;
Z.prototype.beginTransaction = Z.prototype.Id;
Z.prototype.bringToFront = Z.prototype.sc;
Z.prototype.canRedo = Z.prototype.Yb;
Z.prototype.canUndo = Z.prototype.Zb;
Z.prototype.clearSelection = Z.prototype.Wa;
Z.prototype.clearUndo = Z.prototype.Ue;
Z.prototype.clickColour = Z.prototype.rd;
Z.prototype.commitIrreversibleTransaction = Z.prototype.We;
Z.prototype.commitTransaction = Z.prototype.sd;
Z.prototype.copy = Z.prototype.$b;
Z.prototype.createGroup = Z.prototype.jc;
Z.prototype.createNode = Z.prototype.ne;
Z.prototype.createPath = Z.prototype.oe;
Z.prototype.createToolbar = Z.prototype.qe;
Z.prototype.createUiElement = Z.prototype.Xe;
Z.prototype.createShape = Z.prototype.pe;
Z.prototype.cut = Z.prototype.ud;
Z.prototype.deleteNode = Z.prototype.re;
Z.prototype.deleteNodes = Z.prototype.Jd;
Z.prototype.deletePage = Z.prototype.Kd;
Z.prototype.deleteSelection = Z.prototype.Ld;
Z.prototype.dirty = Z.prototype.ac;
Z.prototype.download = Z.prototype.se;
Z.prototype.draw = Z.prototype.na;
Z.prototype.duplicate = Z.prototype.duplicate;
Z.prototype.focus = Z.prototype.focus;
Z.prototype.findNode = Z.prototype.Ye;
Z.prototype.findNodes = Z.prototype.Nd;
Z.prototype.flip = Z.prototype.Ze;
Z.prototype.flipNodes = Z.prototype.te;
Z.prototype.generatePalette = Z.prototype.$e;
Z.prototype.getActiveLayer = Z.prototype.md;
Z.prototype.getAllNodes = Z.prototype.Od;
Z.prototype.getBackgroundImage = Z.prototype.ue;
Z.prototype.getBoundingRectangle = Z.prototype.ve;
Z.prototype.getCurrentPage = Z.prototype.dc;
Z.prototype.getCurrentTool = Z.prototype.we;
Z.prototype.getDocumentCoordinates = Z.prototype.af;
Z.prototype.getDocumentSize = Z.prototype.tc;
Z.prototype.getLanguageString = Z.prototype.df;
Z.prototype.getDrawingRectangle = Z.prototype.bf;
Z.prototype.getItemProperty = Z.prototype.cf;
Z.prototype.getLayers = Z.prototype.ff;
Z.prototype.getLayerNodes = Z.prototype.ef;
Z.prototype.getNodeProperty = Z.prototype.Ed;
Z.prototype.getNodeRectangle = Z.prototype.gf;
Z.prototype.getNodeType = Z.prototype.xe;
Z.prototype.getNodeUnderPoint = Z.prototype.hf;
Z.prototype.getPageCount = Z.prototype.Kb;
Z.prototype.getPathData = Z.prototype.Yc;
Z.prototype.getPathAsPoints = Z.prototype.jf;
Z.prototype._getPropertyPanelElement = Z.prototype.Oe;
Z.prototype.getScreenCoordinates = Z.prototype.kf;
Z.prototype.getSelectedNodes = Z.prototype.ye;
Z.prototype.getViewRectangle = Z.prototype.mf;
Z.prototype.insertPage = Z.prototype.uc;
Z.prototype.isLayerVisible = Z.prototype.Ad;
Z.prototype.load = Z.prototype.ze;
Z.prototype.lockUpdates = Z.prototype.Ae;
Z.prototype.moveDown = Z.prototype.ad;
Z.prototype.moveUp = Z.prototype.bd;
Z.prototype.newDocument = Z.prototype.Be;
Z.prototype.nextPage = Z.prototype.Ce;
Z.prototype.on = Z.prototype.on;
Z.prototype.onComplete = Z.prototype.tf;
Z.prototype.paste = Z.prototype.yc;
Z.prototype.previousPage = Z.prototype.vf;
Z.prototype.print = Z.prototype.De;
Z.prototype.redo = Z.prototype.Pb;
Z.prototype.resize = Z.prototype.Ee;
Z.prototype.save = Z.prototype.save;
Z.prototype.selectNodes = Z.prototype.selectNodes;
Z.prototype.sendToBack = Z.prototype.Ic;
Z.prototype.setActiveLayer = Z.prototype.Fd;
Z.prototype.setBackgroundBrowserImages = Z.prototype.xf;
Z.prototype.setConfig = Z.prototype.yf;
Z.prototype.setColour = Z.prototype.cd;
Z.prototype.setCurrentPage = Z.prototype.hc;
Z.prototype.setCustomBackgroundFn = Z.prototype.Ge;
Z.prototype.setDocumentSize = Z.prototype.nd;
Z.prototype.setDocumentSizeInTransaction = Z.prototype.be;
Z.prototype.setDomElement = Z.prototype.zf;
Z.prototype.setLayerName = Z.prototype.Cf;
Z.prototype.setPaperSize = Z.prototype.ee;
Z.prototype.setIconBrowserImages = Z.prototype.Af;
Z.prototype.setItemProperty = Z.prototype.Bf;
Z.prototype.setNodeProperties = Z.prototype.He;
Z.prototype.setNodeProperty = Z.prototype.Gd;
Z.prototype.setNodeVisibility = Z.prototype.Df;
Z.prototype.setOpacity = Z.prototype.de;
Z.prototype.setPageView = Z.prototype.Ie;
Z.prototype.setViewRectangle = Z.prototype.Ff;
Z.prototype.setZoom = Z.prototype.Gf;
Z.prototype.showLayer = Z.prototype.Kc;
Z.prototype.translateNode = Z.prototype.Hd;
Z.prototype.rotateDocument = Z.prototype.wf;
Z.prototype.rotateNode = Z.prototype.ae;
Z.prototype.scaleNode = Z.prototype.Fe;
Z.prototype.undo = Z.prototype.Sa;
Z.prototype.ungroup = Z.prototype.Qc;
Z.prototype.upload = Z.prototype.Je;
Z.prototype.useArrowTool = Z.prototype.Mf;
Z.prototype.useBrushTool = Z.prototype.Nf;
Z.prototype.useCircleTool = Z.prototype.Of;
Z.prototype.useCurveTool = Z.prototype.Pf;
Z.prototype.useCustomTool = Z.prototype.Qf;
Z.prototype.useEllipseTool = Z.prototype.Ke;
Z.prototype.useFreehandTool = Z.prototype.Rf;
Z.prototype.useStampTool = Z.prototype.$f;
Z.prototype.useLineTool = Z.prototype.Sf;
Z.prototype.usePanTool = Z.prototype.Tf;
Z.prototype.usePickTool = Z.prototype.Uf;
Z.prototype.usePolygonTool = Z.prototype.Le;
Z.prototype.useQuadraticBezierTool = Z.prototype.Vf;
Z.prototype.useRectangleTool = Z.prototype.Me;
Z.prototype.useRoundRectTool = Z.prototype.Wf;
Z.prototype.useShapeBrushTool = Z.prototype.Xf;
Z.prototype.useStampLineTool = Z.prototype.Zf;
Z.prototype.useSquareTool = Z.prototype.Yf;
Z.prototype.useTextTool = Z.prototype.ag;
Z.prototype.zoomIn = Z.prototype.Sc;
Z.prototype.zoomOut = Z.prototype.Tc;
eh.prototype.createGroup = eh.prototype.jc;


})();
