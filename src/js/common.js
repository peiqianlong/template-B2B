(function() {
    var p = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        y = [],
        w;
    radix = p.length;
    y[8] = y[13] = y[18] = y[23] = "-";
    y[14] = "4";
    for (w = 0; w < 36; w++) {
        if (!y[w]) {
            var n = 0 | Math.random() * 16;
            y[w] = p[(w == 19) ? (n & 3) | 8 : n]
        }
    }
    var m = 0;
    var B = "";
    var d = 8;

    function l(r) {
        return o(g(q(r), r.length * d))
    }

    function h(r) {
        return v(g(q(r), r.length * d))
    }

    function k(r) {
        return C(g(q(r), r.length * d))
    }

    function z(E, r) {
        return o(s(E, r))
    }

    function f(E, r) {
        return v(s(E, r))
    }

    function D(E, r) {
        return C(s(E, r))
    }

    function g(E, I) {
        E[I >> 5] |= 128 << ((I) % 32);
        E[(((I + 64) >>> 9) << 4) + 14] = I;
        var r = 1732584193;
        var F = -271733879;
        var G = -1732584194;
        var H = 271733878;
        for (var L = 0; L < E.length; L += 16) {
            var J = r;
            var K = F;
            var M = G;
            var N = H;
            r = b(r, F, G, H, E[L + 0], 7, -680876936);
            H = b(H, r, F, G, E[L + 1], 12, -389564586);
            G = b(G, H, r, F, E[L + 2], 17, 606105819);
            F = b(F, G, H, r, E[L + 3], 22, -1044525330);
            r = b(r, F, G, H, E[L + 4], 7, -176418897);
            H = b(H, r, F, G, E[L + 5], 12, 1200080426);
            G = b(G, H, r, F, E[L + 6], 17, -1473231341);
            F = b(F, G, H, r, E[L + 7], 22, -45705983);
            r = b(r, F, G, H, E[L + 8], 7, 1770035416);
            H = b(H, r, F, G, E[L + 9], 12, -1958414417);
            G = b(G, H, r, F, E[L + 10], 17, -42063);
            F = b(F, G, H, r, E[L + 11], 22, -1990404162);
            r = b(r, F, G, H, E[L + 12], 7, 1804603682);
            H = b(H, r, F, G, E[L + 13], 12, -40341101);
            G = b(G, H, r, F, E[L + 14], 17, -1502002290);
            F = b(F, G, H, r, E[L + 15], 22, 1236535329);
            r = e(r, F, G, H, E[L + 1], 5, -165796510);
            H = e(H, r, F, G, E[L + 6], 9, -1069501632);
            G = e(G, H, r, F, E[L + 11], 14, 643717713);
            F = e(F, G, H, r, E[L + 0], 20, -373897302);
            r = e(r, F, G, H, E[L + 5], 5, -701558691);
            H = e(H, r, F, G, E[L + 10], 9, 38016083);
            G = e(G, H, r, F, E[L + 15], 14, -660478335);
            F = e(F, G, H, r, E[L + 4], 20, -405537848);
            r = e(r, F, G, H, E[L + 9], 5, 568446438);
            H = e(H, r, F, G, E[L + 14], 9, -1019803690);
            G = e(G, H, r, F, E[L + 3], 14, -187363961);
            F = e(F, G, H, r, E[L + 8], 20, 1163531501);
            r = e(r, F, G, H, E[L + 13], 5, -1444681467);
            H = e(H, r, F, G, E[L + 2], 9, -51403784);
            G = e(G, H, r, F, E[L + 7], 14, 1735328473);
            F = e(F, G, H, r, E[L + 12], 20, -1926607734);
            r = u(r, F, G, H, E[L + 5], 4, -378558);
            H = u(H, r, F, G, E[L + 8], 11, -2022574463);
            G = u(G, H, r, F, E[L + 11], 16, 1839030562);
            F = u(F, G, H, r, E[L + 14], 23, -35309556);
            r = u(r, F, G, H, E[L + 1], 4, -1530992060);
            H = u(H, r, F, G, E[L + 4], 11, 1272893353);
            G = u(G, H, r, F, E[L + 7], 16, -155497632);
            F = u(F, G, H, r, E[L + 10], 23, -1094730640);
            r = u(r, F, G, H, E[L + 13], 4, 681279174);
            H = u(H, r, F, G, E[L + 0], 11, -358537222);
            G = u(G, H, r, F, E[L + 3], 16, -722521979);
            F = u(F, G, H, r, E[L + 6], 23, 76029189);
            r = u(r, F, G, H, E[L + 9], 4, -640364487);
            H = u(H, r, F, G, E[L + 12], 11, -421815835);
            G = u(G, H, r, F, E[L + 15], 16, 530742520);
            F = u(F, G, H, r, E[L + 2], 23, -995338651);
            r = a(r, F, G, H, E[L + 0], 6, -198630844);
            H = a(H, r, F, G, E[L + 7], 10, 1126891415);
            G = a(G, H, r, F, E[L + 14], 15, -1416354905);
            F = a(F, G, H, r, E[L + 5], 21, -57434055);
            r = a(r, F, G, H, E[L + 12], 6, 1700485571);
            H = a(H, r, F, G, E[L + 3], 10, -1894986606);
            G = a(G, H, r, F, E[L + 10], 15, -1051523);
            F = a(F, G, H, r, E[L + 1], 21, -2054922799);
            r = a(r, F, G, H, E[L + 8], 6, 1873313359);
            H = a(H, r, F, G, E[L + 15], 10, -30611744);
            G = a(G, H, r, F, E[L + 6], 15, -1560198380);
            F = a(F, G, H, r, E[L + 13], 21, 1309151649);
            r = a(r, F, G, H, E[L + 4], 6, -145523070);
            H = a(H, r, F, G, E[L + 11], 10, -1120210379);
            G = a(G, H, r, F, E[L + 2], 15, 718787259);
            F = a(F, G, H, r, E[L + 9], 21, -343485551);
            r = t(r, J);
            F = t(F, K);
            G = t(G, M);
            H = t(H, N)
        }
        return Array(r, F, G, H)
    }

    function c(r, G, H, I, E, F) {
        return t(A(t(t(G, r), t(I, F)), E), H)
    }

    function b(H, I, r, E, J, F, G) {
        return c((I & r) | ((~I) & E), H, I, J, F, G)
    }

    function e(H, I, r, E, J, F, G) {
        return c((I & E) | (r & (~E)), H, I, J, F, G)
    }

    function u(H, I, r, E, J, F, G) {
        return c(I ^ r ^ E, H, I, J, F, G)
    }

    function a(H, I, r, E, J, F, G) {
        return c(r ^ (I | (~E)), H, I, J, F, G)
    }

    function s(J, G) {
        var H = q(J);
        if (H.length > 16) {
            H = g(H, J.length * d)
        }
        var E = Array(16),
            I = Array(16);
        for (var r = 0; r < 16; r++) {
            E[r] = H[r] ^ 909522486;
            I[r] = H[r] ^ 1549556828
        }
        var F = g(E.concat(q(G)), 512 + G.length * d);
        return g(I.concat(F), 512 + 128)
    }

    function t(E, F) {
        var G = (E & 65535) + (F & 65535);
        var r = (E >> 16) + (F >> 16) + (G >> 16);
        return (r << 16) | (G & 65535)
    }

    function A(E, r) {
        return (E << r) | (E >>> (32 - r))
    }

    function q(F) {
        var G = Array();
        var E = (1 << d) - 1;
        for (var r = 0; r < F.length * d; r += d) {
            G[r >> 5] |= (F.charCodeAt(r / d) & E) << (r % 32)
        }
        return G
    }

    function C(G) {
        var F = "";
        var E = (1 << d) - 1;
        for (var r = 0; r < G.length * 32; r += d) {
            F += String.fromCharCode((G[r >> 5] >>> (r % 32)) & E)
        }
        return F
    }

    function o(G) {
        var r = m ? "0123456789ABCDEF" : "0123456789abcdef";
        var F = "";
        for (var E = 0; E < G.length * 4; E++) {
            F += r.charAt((G[E >> 2] >> ((E % 4) * 8 + 4)) & 15) + r.charAt((G[E >> 2] >> ((E % 4) * 8)) & 15)
        }
        return F
    }

    function v(H) {
        var I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var F = "";
        for (var r = 0; r < H.length * 4; r += 3) {
            var G = (((H[r >> 2] >> 8 * (r % 4)) & 255) << 16) | (((H[r + 1 >> 2] >> 8 * ((r + 1) % 4)) & 255) << 8) | ((H[r + 2 >> 2] >> 8 * ((r + 2) % 4)) & 255);
            for (var E = 0; E < 4; E++) {
                if (r * 8 + E * 6 > H.length * 32) {
                    F += B
                } else {
                    F += I.charAt((G >> 6 * (3 - E)) & 63)
                }
            }
        }
        return F
    }
    var m = 0;
    var B = "";
    var d = 8;

    function l(r) {
        return o(g(q(r), r.length * d))
    }

    function h(r) {
        return v(g(q(r), r.length * d))
    }

    function k(r) {
        return C(g(q(r), r.length * d))
    }

    function z(E, r) {
        return o(s(E, r))
    }

    function f(E, r) {
        return v(s(E, r))
    }

    function D(E, r) {
        return C(s(E, r))
    }

    function g(E, I) {
        E[I >> 5] |= 128 << ((I) % 32);
        E[(((I + 64) >>> 9) << 4) + 14] = I;
        var r = 1732584193;
        var F = -271733879;
        var G = -1732584194;
        var H = 271733878;
        for (var L = 0; L < E.length; L += 16) {
            var J = r;
            var K = F;
            var M = G;
            var N = H;
            r = b(r, F, G, H, E[L + 0], 7, -680876936);
            H = b(H, r, F, G, E[L + 1], 12, -389564586);
            G = b(G, H, r, F, E[L + 2], 17, 606105819);
            F = b(F, G, H, r, E[L + 3], 22, -1044525330);
            r = b(r, F, G, H, E[L + 4], 7, -176418897);
            H = b(H, r, F, G, E[L + 5], 12, 1200080426);
            G = b(G, H, r, F, E[L + 6], 17, -1473231341);
            F = b(F, G, H, r, E[L + 7], 22, -45705983);
            r = b(r, F, G, H, E[L + 8], 7, 1770035416);
            H = b(H, r, F, G, E[L + 9], 12, -1958414417);
            G = b(G, H, r, F, E[L + 10], 17, -42063);
            F = b(F, G, H, r, E[L + 11], 22, -1990404162);
            r = b(r, F, G, H, E[L + 12], 7, 1804603682);
            H = b(H, r, F, G, E[L + 13], 12, -40341101);
            G = b(G, H, r, F, E[L + 14], 17, -1502002290);
            F = b(F, G, H, r, E[L + 15], 22, 1236535329);
            r = e(r, F, G, H, E[L + 1], 5, -165796510);
            H = e(H, r, F, G, E[L + 6], 9, -1069501632);
            G = e(G, H, r, F, E[L + 11], 14, 643717713);
            F = e(F, G, H, r, E[L + 0], 20, -373897302);
            r = e(r, F, G, H, E[L + 5], 5, -701558691);
            H = e(H, r, F, G, E[L + 10], 9, 38016083);
            G = e(G, H, r, F, E[L + 15], 14, -660478335);
            F = e(F, G, H, r, E[L + 4], 20, -405537848);
            r = e(r, F, G, H, E[L + 9], 5, 568446438);
            H = e(H, r, F, G, E[L + 14], 9, -1019803690);
            G = e(G, H, r, F, E[L + 3], 14, -187363961);
            F = e(F, G, H, r, E[L + 8], 20, 1163531501);
            r = e(r, F, G, H, E[L + 13], 5, -1444681467);
            H = e(H, r, F, G, E[L + 2], 9, -51403784);
            G = e(G, H, r, F, E[L + 7], 14, 1735328473);
            F = e(F, G, H, r, E[L + 12], 20, -1926607734);
            r = u(r, F, G, H, E[L + 5], 4, -378558);
            H = u(H, r, F, G, E[L + 8], 11, -2022574463);
            G = u(G, H, r, F, E[L + 11], 16, 1839030562);
            F = u(F, G, H, r, E[L + 14], 23, -35309556);
            r = u(r, F, G, H, E[L + 1], 4, -1530992060);
            H = u(H, r, F, G, E[L + 4], 11, 1272893353);
            G = u(G, H, r, F, E[L + 7], 16, -155497632);
            F = u(F, G, H, r, E[L + 10], 23, -1094730640);
            r = u(r, F, G, H, E[L + 13], 4, 681279174);
            H = u(H, r, F, G, E[L + 0], 11, -358537222);
            G = u(G, H, r, F, E[L + 3], 16, -722521979);
            F = u(F, G, H, r, E[L + 6], 23, 76029189);
            r = u(r, F, G, H, E[L + 9], 4, -640364487);
            H = u(H, r, F, G, E[L + 12], 11, -421815835);
            G = u(G, H, r, F, E[L + 15], 16, 530742520);
            F = u(F, G, H, r, E[L + 2], 23, -995338651);
            r = a(r, F, G, H, E[L + 0], 6, -198630844);
            H = a(H, r, F, G, E[L + 7], 10, 1126891415);
            G = a(G, H, r, F, E[L + 14], 15, -1416354905);
            F = a(F, G, H, r, E[L + 5], 21, -57434055);
            r = a(r, F, G, H, E[L + 12], 6, 1700485571);
            H = a(H, r, F, G, E[L + 3], 10, -1894986606);
            G = a(G, H, r, F, E[L + 10], 15, -1051523);
            F = a(F, G, H, r, E[L + 1], 21, -2054922799);
            r = a(r, F, G, H, E[L + 8], 6, 1873313359);
            H = a(H, r, F, G, E[L + 15], 10, -30611744);
            G = a(G, H, r, F, E[L + 6], 15, -1560198380);
            F = a(F, G, H, r, E[L + 13], 21, 1309151649);
            r = a(r, F, G, H, E[L + 4], 6, -145523070);
            H = a(H, r, F, G, E[L + 11], 10, -1120210379);
            G = a(G, H, r, F, E[L + 2], 15, 718787259);
            F = a(F, G, H, r, E[L + 9], 21, -343485551);
            r = t(r, J);
            F = t(F, K);
            G = t(G, M);
            H = t(H, N)
        }
        return Array(r, F, G, H)
    }

    function c(r, G, H, I, E, F) {
        return t(A(t(t(G, r), t(I, F)), E), H)
    }

    function b(H, I, r, E, J, F, G) {
        return c((I & r) | ((~I) & E), H, I, J, F, G)
    }

    function e(H, I, r, E, J, F, G) {
        return c((I & E) | (r & (~E)), H, I, J, F, G)
    }

    function u(H, I, r, E, J, F, G) {
        return c(I ^ r ^ E, H, I, J, F, G)
    }

    function a(H, I, r, E, J, F, G) {
        return c(r ^ (I | (~E)), H, I, J, F, G)
    }

    function s(J, G) {
        var H = q(J);
        if (H.length > 16) {
            H = g(H, J.length * d)
        }
        var E = Array(16),
            I = Array(16);
        for (var r = 0; r < 16; r++) {
            E[r] = H[r] ^ 909522486;
            I[r] = H[r] ^ 1549556828
        }
        var F = g(E.concat(q(G)), 512 + G.length * d);
        return g(I.concat(F), 512 + 128)
    }

    function t(E, F) {
        var G = (E & 65535) + (F & 65535);
        var r = (E >> 16) + (F >> 16) + (G >> 16);
        return (r << 16) | (G & 65535)
    }

    function A(E, r) {
        return (E << r) | (E >>> (32 - r))
    }

    function q(F) {
        var G = Array();
        var E = (1 << d) - 1;
        for (var r = 0; r < F.length * d; r += d) {
            G[r >> 5] |= (F.charCodeAt(r / d) & E) << (r % 32)
        }
        return G
    }

    function C(G) {
        var F = "";
        var E = (1 << d) - 1;
        for (var r = 0; r < G.length * 32; r += d) {
            F += String.fromCharCode((G[r >> 5] >>> (r % 32)) & E)
        }
        return F
    }

    function o(G) {
        var r = m ? "0123456789ABCDEF" : "0123456789abcdef";
        var F = "";
        for (var E = 0; E < G.length * 4; E++) {
            F += r.charAt((G[E >> 2] >> ((E % 4) * 8 + 4)) & 15) + r.charAt((G[E >> 2] >> ((E % 4) * 8)) & 15)
        }
        return F
    }

    function v(H) {
        var I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var F = "";
        for (var r = 0; r < H.length * 4; r += 3) {
            var G = (((H[r >> 2] >> 8 * (r % 4)) & 255) << 16) | (((H[r + 1 >> 2] >> 8 * ((r + 1) % 4)) & 255) << 8) | ((H[r + 2 >> 2] >> 8 * ((r + 2) % 4)) & 255);
            for (var E = 0; E < 4; E++) {
                if (r * 8 + E * 6 > H.length * 32) {
                    F += B
                } else {
                    F += I.charAt((G >> 6 * (3 - E)) & 63)
                }
            }
        }
        return F
    }
    if (document.location.href.indexOf("/test/") == -1 && !document.cookie.replace(/(?:(?:^|.*;\s*)ueid\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
        document.cookie = "ueid=" + l(y.join("")) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; domain=" + document.location.hostname.replace(/^(www\.|french\.|german\.|italian\.|russian\.|spanish\.|portuguese\.|dutch\.|greek\.|japanese\.|korean\.|english\.|china\.|arabic\.|hindi\.|turkish\.|indonesian\.|vietnamese\.|thai\.|bengali\.|persian\.|polish\.|fr\.|de\.|it\.|ru\.|es\.|pt\.|nl\.|el\.|ja\.|jp\.|ko\.|en\.|cn\.|ar\.|hi\.|tr\.|id\.|vi\.|th\.|bn\.|fa\.|pl\.|m\.french\.|m\.german\.|m\.italian\.|m\.russian\.|m\.spanish\.|m\.portuguese\.|m\.dutch\.|m\.greek\.|m\.japanese\.|m\.korean\.|m\.english\.|m\.china\.|m\.arabic\.|m\.hindi\.|m\.turkish\.|m\.indonesian\.|m\.vietnamese\.|m\.thai\.|m\.bengali\.|m\.persian\.|m\.polish\.|m\.fr\.|m\.de\.|m\.it\.|m\.ru\.|m\.es\.|m\.pt\.|m\.nl\.|m\.el\.|m\.ja\.|m\.jp\.|m\.ko\.|m\.en\.|m\.cn\.|m\.ar\.|m\.hi\.|m\.tr\.|m\.id\.|m\.vi\.|m\.th\.|m\.bn\.|m\.fa\.|m\.pl\.|m\.)/, ".")
    }
})();
var webim_config = {
    path: "/webim/",
    selector: "button[chatnow]",
    title_info: "Chat with Supplier",
    title_chat: "Chat with Supplier",
    getseller: "/getseller.html",
    device: 0,
    getpinfo: function(a) {
        return {
            type: $(a).attr("type"),
            pid: $(a).attr("pid"),
            pname: $(a).attr("pname"),
            purl: $(a).attr("purl"),
            picurl: $(a).attr("picurl")
        }
    },
    getlancontent: function(a) {
        return $(a).attr("lancontent")
    }
};
var g_getseller = null;

function f_header_main_float_selectLanguage(event) {
    $(".select_language").toggle();
    event.stopPropagation()
}

function f_header_main_selectLanguage(c, d) {
    var g = c.parentNode;

    function e(h) {
        var a = {
            left: 0,
            top: 0
        };
        while (1) {
            if (!h) {
                break
            }
            a.left += h.offsetLeft;
            a.top += h.offsetTop;
            h = h.offsetParent
        }
        return a
    }
    var f = e(g);
    var b = document.getElementById("p_l");
    if (c.className == "col") {
        c.className = "ope";
        b.style.width = 153 + "px";
        b.style.height = "auto";
        b.style.display = "block";
        b.style.left = f.left + "px";
        b.style.top = f.top + 20 + "px";
        $(c).closest(".sel").addClass("sel_bg")
    } else {
        c.className = "col";
        b.style.display = "none";
        $(c).closest(".sel").removeClass("sel_bg")
    }
}

function f_header_main_dealZoneHour(a, p, b, r, g, o, c) {
    var q = new Date().getTimezoneOffset() / 60;
    var f = q + 8;
    var d = new Date().getTime();
    var l = d + f * 3600 * 1000;
    var m = new Date(l).getHours();
    var h = new Date(l).getMinutes();
    var n = m * 60 + h;
    var e = parseInt(p) * 60 + parseInt(a);
    var k = parseInt(r) * 60 + parseInt(b);
    if (n >= e && n <= k || e <= 0 && k <= 0) {
        document.getElementById("hourZone").innerHTML = g
    } else {
        document.getElementById("hourZone").innerHTML = o
    }
    if (c != "" && $("#hourZoneFax").length) {
        document.getElementById("hourZoneFax").innerHTML = c
    }
}

function f_header_main_dealZoneHour_contact(a, o, b, q, f, n) {
    var p = new Date().getTimezoneOffset() / 60;
    var e = p + 8;
    var c = new Date().getTime();
    var k = c + e * 3600 * 1000;
    var l = new Date(k).getHours();
    var g = new Date(k).getMinutes();
    var m = l * 60 + g;
    var d = parseInt(o) * 60 + parseInt(a);
    var h = parseInt(q) * 60 + parseInt(b);
    if (m >= d && m <= h) {
        document.getElementById("hourZonecontact").innerHTML = f
    } else {
        document.getElementById("hourZonecontact").innerHTML = n
    }
}

function no_product_flash_change_img(d, b, c) {
    no_product_flash_closeallcss();
    if (c && no_product_flash_timeid) {
        clearTimeout(no_product_flash_timeid)
    }
    $("#no_product_flash_li" + d).addClass("cur textf");
    $("#no_product_flash_a" + d).removeClass();
    var a = new Image();
    a.onload = function() {
        $("#no_product_flash_indexpic").attr("src", $("#no_product_flash_hidden" + d + " img").attr("src"))
    };
    a.src = $("#no_product_flash_hidden" + d + " img").attr("src");
    if (document.getElementById("no_product_flash_indexb")) {
        $("#no_product_flash_indexb").text($("#no_product_flash_a" + d).text())
    }
    $("#no_product_flash_indexhref").attr("href", $("#no_product_flash_hidden" + d).attr("href"));
    $("#no_product_flash_indexhref").attr("title", $("#no_product_flash_hidden" + d).attr("title"));
    $("#no_product_flash_indexpic").attr("alt", $("#no_product_flash_hidden" + d + " img").attr("alt"));
    no_product_flash_peter.id = d
}

function no_product_flash_closeallcss() {
    for (var a = 0; a < no_product_flash_max; a++) {
        $("#no_product_flash_li" + a).removeClass();
        $("#no_product_flash_a" + a).addClass("b")
    }
}

function no_product_flash_autoChange() {
    no_product_flash_closeallcss();
    no_product_flash_peter.id++;
    if (no_product_flash_peter.id >= no_product_flash_max) {
        no_product_flash_peter.id = 0
    }
    no_product_flash_timeid = setTimeout("no_product_flash_autoChange()", 5000);
    no_product_flash_change_img(no_product_flash_peter.id)
}

function no_product_flash_start_change() {
    no_product_flash_timeid = setTimeout("no_product_flash_autoChange()", 5000)
}

function no_product_flashcate_change_img(d, b, c) {
    no_product_flashcate_closeallcss();
    if (c && no_product_flashcate_timeid) {
        clearTimeout(no_product_flashcate_timeid)
    }
    $("#no_product_flashcate_li" + d).addClass("cur textf");
    $("#no_product_flashcate_a" + d).removeClass();
    var a = new Image();
    a.onload = function() {
        $("#no_product_flashcate_indexpic").attr("src", $("#no_product_flashcate_hidden" + d + " img").attr("src"))
    };
    a.src = $("#no_product_flashcate_hidden" + d + " img").attr("src");
    if (document.getElementById("no_product_flashcate_indexb")) {
        $("#no_product_flashcate_indexb").text($("#no_product_flashcate_a" + d).text())
    }
    $("#no_product_flashcate_indexhref").attr("href", $("#no_product_flashcate_hidden" + d).attr("href"));
    $("#no_product_flashcate_indexhref").attr("title", $("#no_product_flashcate_hidden" + d).attr("title"));
    $("#no_product_flashcate_indexpic").attr("alt", $("#no_product_flashcate_hidden" + d + " img").attr("alt"));
    no_product_flashcate_peter.id = d
}

function no_product_flashcate_closeallcss() {
    for (var a = 0; a < no_product_flashcate_max; a++) {
        $("#no_product_flashcate_li" + a).removeClass();
        $("#no_product_flashcate_a" + a).addClass("b")
    }
}

function no_product_flashcate_autoChange() {
    no_product_flashcate_closeallcss();
    no_product_flashcate_peter.id++;
    if (no_product_flashcate_peter.id >= no_product_flashcate_max) {
        no_product_flashcate_peter.id = 0
    }
    no_product_flashcate_timeid = setTimeout("no_product_flashcate_autoChange()", 5000);
    no_product_flashcate_change_img(no_product_flashcate_peter.id)
}

function no_product_flashcate_start_change() {
    no_product_flashcate_timeid = setTimeout("no_product_flashcate_autoChange()", 5000)
}

function no_product_detailmain_inquiry_submit() {
    $("#no_product_detailmain_pform").submit();
    return false
}

function no_company_intro_ready() {
    $(".no_company_intro").toggle_img({
        show_btn: " .page_box span.picid",
        show_div: " .flpho img.compic",
        active: "cur"
    })
}

function f_error_box_ready(a) {
    return false;
    setTimeout(function() {
        window.location = a
    }, 5000)
}

function n_contact_box_ready() {
    if (typeof(changeAction) == "undefined") {
        changeAction = function(b, a) {
            b.action = a
        }
    }
}
n_contact_box_ready();

function floatAd(b, a) {
    var c = function(e, d) {
        if (d == 1) {
            var f = 73 + $(document).scrollTop()
        }
        if (d == 2) {
            var f = $(window).height() - $(e).height() + $(document).scrollTop() - 60
        }
        $(e).animate({
            top: f
        }, {
            duration: 1000,
            queue: false
        })
    };
    c(b, a);
    $(window).scroll(function() {
        c(b, a)
    })
}

function jsWidgetSearch(d, e, a) {
    if (typeof(a) === "undefined") {
        a = "buy"
    }
    var b = $.trim(d.keyword.value);
    if (b == "") {
        alert("keyword not be empty!");
        return false
    } else {
        var c = "";
        c = b.replace(/\s+/g, "_");
        c = c.replace(/-+/g, "_");
        c = c.replace(/\//g, "_");
        c = c.replace(/%/g, "");
        c = c.replace(/#/g, "");
        c = c.replace(/&/g, "%26");
        d.action = e + "/" + a + "-" + c + ".html";
        d.submit()
    }
}

function no_company_general_ready() {
    $(".no_company_general").toggle_img({
        root: ".pic_title",
        show_btn: ".page span",
        show_div: ".img_wrap img",
        active: "cur",
        relateElement: [".pic_title span"]
    })
}

function no_company_detail_ready() {
    var b = ".no_company_detail ";
    var a = $(b + ".isho > .but > span");
    var c = $(b + ".isho > .confac");
    a.click(function() {
        pos = a.index(this);
        c.hide();
        c.eq(pos).show();
        a.removeClass("cur");
        $(this).addClass("cur")
    })
}

function no_company_factory_general_ready() {
    var b = ".no_company_factory_general ";
    var a = $(b + ".isho > .but > span.factory ");
    var c = $(b + ".isho > .confac ");
    a.eq(0).addClass("cur");
    c.eq(0).addClass("cur");
    a.mouseover(function() {
        a.removeClass("cur");
        $(this).addClass("cur");
        pos = a.index(this);
        c.removeClass("cur");
        c.eq(pos).addClass("cur")
    });
    $(".no_company_factory_general .confac").each(function() {
        $(this).toggle_img({
            root: $(this),
            show_btn: ".page span",
            show_div: ".img_wrap img",
            active: "cur",
            relateElement: [".name_td"]
        })
    })
}

function no_contact_main_ready() {
    checknum = function(c, b, a) {
        maxLength = c.getAttribute("maxlength");
        if (maxLength && c.value.length > maxLength) {
            c.value = c.value.substr(0, maxLength)
        } else {
            c.value = c.value.substr(0, b)
        }
        $("#" + a).html(c.value.length)
    };
    jsSubmit = function(b) {
        var a = $(b).find("textarea[name='message']").val();
        if (a == "") {
            alert("Message not be empty!");
            return false
        } else {
            if (a.length > 3000) {
                alert("Sorry,your message is too long!");
                return false
            }
        }
    }
}

function f_inquiry_recommend_ready(a) {
    quireone = function(b, d) {
        var c = document.getElementById("contact_form");
        c.action = a;
        c.target = "_blank";
        c.pid.value = b;
        if (d) {
            c.MESSAGE.value = "I am Interesting " + d
        } else {
            c.MESSAGE.value = document.getElementById("content").value
        }
        c.submit()
    }
}

function no_contact_detail_ready() {
    jsSubmit = function(b) {
        var a = $(b).find("textarea[name='message']").val();
        if (a == "") {
            alert("Message not be empty!");
            return false
        } else {
            if (a.length > 3000) {
                alert("Sorry,your message is too long!");
                return false
            }
        }
    };
    checknum = function(c, b, a) {
        maxLength = c.getAttribute("maxlength");
        if (maxLength && c.value.length > maxLength) {
            c.value = c.value.substr(0, maxLength)
        }
        document.getElementById(a).innerHTML = c.value.length
    }
}

function on_product_oricompany_ready(a) {
    var b = navigator.appName;
    var c = 1;
    var d;
    if (b == "Netscape") {
        if (navigator.languages) {
            d = navigator.languages;
            d = d.join(",")
        } else {
            d = navigator.language
        }
    } else {
        d = navigator.browserLanguage
    }
    if (d.toLowerCase().indexOf("zh") != -1) {
        c = 0
    }
    a.isBrowser = c;
    a.url = getJumpUrl("ppi", a.url, a.kw);
    ifr2ec().load(a)
}
var ifr2ec = function() {
    var a = {
        load: function(b) {
            $(window).load(function() {
                if (!b || !b.isBrowser || typeof(b.url) == "undefined" || b.url == "" || b.url == "null") {} else {
                    a.pub(b)
                }
                $("#show_iframe").show();
                if ($("#show_iframe")) {
                    $(document).on("click", "#show_iframe, .delete_wrap", function() {
                        a.pub(b);
                        $("#visit_ifr_wrap").toggle()
                    })
                }
            })
        },
        tpl: function(e, d, b, c) {
            if ($("#visit_ifr_wrap" + e).length > 0) {
                return ""
            }
            return '<div class="visit_ifr_wrap" id="visit_ifr_wrap' + e + '" style="left:' + d + "px; height:" + b + 'px; display:none"><div class="top_bar"> <b class="v_wrap">Detail Information</b> <span class="delete_wrap">x</span> </div><img src="/images/waiting.gif" style="position: absolute; z-index:1; left:345px; top:' + (b / 2) + 'px"><iframe frameborder="0" style="width:715px; left:0; top:30px;position: absolute; z-index:5; height:' + (b - 40) + 'px;" src=' + c + " ></iframe></div>"
        },
        pub: function(d) {
            if (!d || !d.isBrowser || typeof(d.url) == "undefined" || d.url == "" || d.url == "null") {}
            var c = parseInt($(".cont_main_box")[0].offsetLeft) + 110;
            var b = parseInt($(window).height()) > 1 ? ($(window).height()) - 170 : 768;
            if (typeof(d.url) == "object" && d.url instanceof Array) {
                for (i in d.url) {
                    var e = d.url[i];
                    for (j in e) {
                        $("body").append(a.tpl(j, c, b, e[j]))
                    }
                }
            } else {
                $("body").append(a.tpl("", c, b, d.url))
            }
        }
    };
    return a
};

function pcb_t_quick_inquiry_check() {
    $("input[name='email'], input[name='message']").removeClass("alert_tip");
    var a = $("input[name='email']").val();
    var c = "";
    if (a.length == 0) {
        c = "email can not be empty";
        alert(c);
        $("input[name='email']").addClass("alert_tip").focus();
        return false
    }
    var b = $("input[name='message']").val();
    if (b.length == 0) {
        c = "message can not be empty";
        alert(c);
        $("input[name='message']").addClass("alert_tip").focus();
        return false
    }
    return true
}

function f_company_video_info() {}

function no_product_list() {
    if (typeof(localData) != "undefined") {
        toggle_product_list = function(d) {
            d.closest(".view").find("> span > span").removeClass("ico_cur");
            var c = {
                ico_lv: ["no_product_list_grid", "no_product_list", "/photo/pc", "/photo/pd", ""],
                ico_gv: ["no_product_list", "no_product_list_grid", "/photo/pd", "/photo/pc", "1px"]
            };
            var b = d.attr("class");
            $(".toggle_product_list").removeClass(c[b][0]).addClass(c[b][1]);
            $(".toggle_product_list .item-wrap").each(function() {
                $(this).find("td:eq(1)").css({
                    width: c[b][4]
                })
            });
            $(".toggle_product_list .item-wrap img").each(function() {
                var e = $(this).attr("src").replace(c[b][2], c[b][3]);
                $(this).attr("src", e)
            });
            d.find("span").addClass("ico_cur");
            localData.set("product_list_view_type", b)
        };
        var a = "ico_lv";
        if (localData.get("product_list_view_type") != null && localData.get("product_list_view_type") != "undefined") {
            a = localData.get("product_list_view_type")
        }
        if (a != "ico_gv") {
            a = "ico_lv"
        }
        localData.set("product_list_view_type", a);
        toggle_product_list($("." + a));
        $(".toggle_product_list .view > span").on("click", function() {
            toggle_product_list($(this))
        })
    }
}

function pcb_no_service_show(a) {
    $(".pcb_no_service_show").toggle_img();
    var e = $(".pcb_no_service_show .product_detailother .details_wrap");
    var d = e.height();
    var b = e.css("max-height");
    if (parseInt(d) >= parseInt(b) && a) {
        var c = '<div class="toggle-btn"></div>';
        e.after(c)
    }
    $(document).on("click", ".pcb_no_service_show .toggle-btn", function() {
        $(this).toggleClass("arrow-up");
        toggleObjHeight = $(this).hasClass("arrow-up") ? "100%" : "";
        $(this).prev().css("max-height", toggleObjHeight)
    })
}

function pcb_no_equipment_show() {
    $(".pcb_no_equipment_show").each(function() {
        $(this).toggle_img()
    })
}

function pcb_no_capability_show() {
    $(".pcb_no_capability_show").toggle_img()
}
(function(a) {
    a.fn.extend({
        toggle_img: function(b) {
            var d = {
                root: ".toggle_img ",
                show_btn: " div.thumb span",
                show_div: " ul.pic_show_list span",
                pos: 0,
                auto: 1,
                active: "active",
                timeout: 1500,
                relateElement: []
            };
            var c = a.extend({}, d, b);
            var k = this.find(c.show_btn);
            var g = this.find(c.show_div);
            var h = c.pos;
            var f = k.length;
            var m;
            var l = new Array(k, g);
            k.mouseover(function() {
                clearTimeout(m);
                h = k.index(this);
                e(h)
            }).mouseout(function() {
                n()
            });
            if (c.relateElement.length > 0) {
                a.each(c.relateElement, function(o, q) {
                    if (a(q).length > 0) {
                        var p = q.split(" ").pop();
                        l.push(a(q).closest(c.root).find(p))
                    }
                })
            }
            var e = function(o) {
                a.each(l, function() {
                    this.removeClass(c.active);
                    this.eq(o).addClass(c.active)
                })
            };
            var n = function() {
                e(h);
                if (!c.auto) {
                    return
                }
                h = h < (f - 1) ? h + 1 : 0;
                m = setTimeout(n, c.timeout)
            };
            n()
        }
    })
})(jQuery);
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(g) {
    var c, e, a;
    var f, d, b;
    a = g.length;
    e = 0;
    c = "";
    while (e < a) {
        f = g.charCodeAt(e++) & 255;
        if (e == a) {
            c += base64EncodeChars.charAt(f >> 2);
            c += base64EncodeChars.charAt((f & 3) << 4);
            c += "==";
            break
        }
        d = g.charCodeAt(e++);
        if (e == a) {
            c += base64EncodeChars.charAt(f >> 2);
            c += base64EncodeChars.charAt(((f & 3) << 4) | ((d & 240) >> 4));
            c += base64EncodeChars.charAt((d & 15) << 2);
            c += "=";
            break
        }
        b = g.charCodeAt(e++);
        c += base64EncodeChars.charAt(f >> 2);
        c += base64EncodeChars.charAt(((f & 3) << 4) | ((d & 240) >> 4));
        c += base64EncodeChars.charAt(((d & 15) << 2) | ((b & 192) >> 6));
        c += base64EncodeChars.charAt(b & 63)
    }
    return c
}

function base64decode(h) {
    var g, f, d, b;
    var e, a, c;
    a = h.length;
    e = 0;
    c = "";
    while (e < a) {
        do {
            g = base64DecodeChars[h.charCodeAt(e++) & 255]
        } while (e < a && g == -1);
        if (g == -1) {
            break
        }
        do {
            f = base64DecodeChars[h.charCodeAt(e++) & 255]
        } while (e < a && f == -1);
        if (f == -1) {
            break
        }
        c += String.fromCharCode((g << 2) | ((f & 48) >> 4));
        do {
            d = h.charCodeAt(e++) & 255;
            if (d == 61) {
                return c
            }
            d = base64DecodeChars[d]
        } while (e < a && d == -1);
        if (d == -1) {
            break
        }
        c += String.fromCharCode(((f & 15) << 4) | ((d & 60) >> 2));
        do {
            b = h.charCodeAt(e++) & 255;
            if (b == 61) {
                return c
            }
            b = base64DecodeChars[b]
        } while (e < a && b == -1);
        if (b == -1) {
            break
        }
        c += String.fromCharCode(((d & 3) << 6) | b)
    }
    return c
}

function utf16to8(e) {
    var b, d, a, f;
    b = "";
    a = e.length;
    for (d = 0; d < a; d++) {
        f = e.charCodeAt(d);
        if ((f >= 1) && (f <= 127)) {
            b += e.charAt(d)
        } else {
            if (f > 2047) {
                b += String.fromCharCode(224 | ((f >> 12) & 15));
                b += String.fromCharCode(128 | ((f >> 6) & 63));
                b += String.fromCharCode(128 | ((f >> 0) & 63))
            } else {
                b += String.fromCharCode(192 | ((f >> 6) & 31));
                b += String.fromCharCode(128 | ((f >> 0) & 63))
            }
        }
    }
    return b
}

function utf8to16(g) {
    var b, e, a, h;
    var f, d;
    b = "";
    a = g.length;
    e = 0;
    while (e < a) {
        h = g.charCodeAt(e++);
        switch (h >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                b += g.charAt(e - 1);
                break;
            case 12:
            case 13:
                f = g.charCodeAt(e++);
                b += String.fromCharCode(((h & 31) << 6) | (f & 63));
                break;
            case 14:
                f = g.charCodeAt(e++);
                d = g.charCodeAt(e++);
                b += String.fromCharCode(((h & 15) << 12) | ((f & 63) << 6) | ((d & 63) << 0));
                break
        }
    }
    return b
}

function jumpUrl(f, e, g) {
    var d = utf8to16(base64decode(e));
    var a = document.createElement("form");
    if (typeof(g) == "undefined") {
        g = g_ad_kw
    }
    g = encodeURIComponent(g);
    var c = utf8to16(base64decode("aHR0cDovL3NlYXJjaC5ldmVyeWNoaW5hLmNvbS8="));
    a.action = c + f + "/" + g + "/";
    a.method = "get";
    a.style.visibility = "hidden";
    a.name = "loadConfigPage";
    $(a).append('<input type="hidden" name="turl" value="' + d + '">');
    a.target = "_blank";
    var b = $(".cont_header");
    b[0].appendChild(a);
    a.submit()
}

function getJumpUrl(d, c, e) {
    var b = utf8to16(base64decode(c));
    e = encodeURIComponent(e);
    var a = utf8to16(base64decode("aHR0cDovL3NlYXJjaC5ldmVyeWNoaW5hLmNvbS8="));
    return a + d + "/" + e + "/?turl=" + b
}

function jumpInquiryUrl(e, b) {
    var e = utf8to16(base64decode(e));
    var d = utf8to16(base64decode("L2NvbnRhY3Rub3cuaHRtbA=="));
    var a = document.createElement("form");
    a.action = "http://" + e + d;
    a.method = "post";
    a.style.visibility = "hidden";
    a.name = "loadConfigPage";
    $(a).append('<input type="hidden" name="pid" value="' + b + '">');
    a.target = "_blank";
    var c = $(".cont_header");
    c[0].appendChild(a);
    a.submit();
    return false
}

function window_open(b) {
    var c = "_blank";
    var a = b;
    var d = window.open(c);
    d.location = a
}

function ZouMa(d, a) {
    this.maxLength = 4;
    this.Timer = 3000;
    this.Sleep = 600;
    this.Ul = $(d);
    var c;
    var b = this;
    this.Start = function() {
        if (b.Ul.children().length < this.maxLength) {
            b.Ul.append(b.Ul.children().clone())
        }
        c = setInterval(b.Play, b.Timer)
    };
    this.Play = function() {
        var e = b.Ul.children().eq(0);
        var f = e.children().eq(0).width();
        e.animate({
            marginLeft: (-1 * f) + "px"
        }, b.Sleep, function() {
            $(this).css("margin-left", "auto").appendTo(b.Ul)
        })
    };
    this.Stop = function() {
        clearTimeout(c);
        c = 0
    };
    $(a).hover(function() {
        c ? b.Stop() : b.Start()
    })
}

function slider(g, e, a) {
    var f = [{
        $Duration: 1200,
        $Opacity: 2
    }];
    var d = {
        $AutoPlay: true,
        $ArrowKeyNavigation: true,
        $DragOrientation: 3,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: f,
            $TransitionsOrder: 1,
            $ShowLink: true
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2,
            $AutoCenter: 1,
            $SpacingX: 10,
            $SpacingY: 10
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: e
        }
    };
    var c = new $JssorSlider$("slider_container", d);

    function b() {
        var h = c.$Elmt.parentNode.clientWidth;
        if (h) {
            c.$ScaleWidth(Math.min(h, a))
        } else {
            window.setTimeout(b, 30)
        }
    }
    b();
    g(window).bind("load", b);
    g(window).bind("resize", b);
    g(window).bind("orientationchange", b)
}
if (typeof(g_tp) === "undefined") {
    g_tp = ""
}

function f_header_mainseach_selectLanguage(c, d) {
    var g = c.parentNode;

    function e(h) {
        var a = {
            left: 0,
            top: 0
        };
        while (1) {
            if (!h) {
                break
            }
            a.left += h.offsetLeft;
            a.top += h.offsetTop;
            h = h.offsetParent
        }
        return a
    }
    var f = e(g);
    var b = document.getElementById("p_l");
    if (c.className == "col") {
        c.className = "ope";
        b.style.width = 153 + "px";
        b.style.height = "auto";
        b.style.display = "block" || b.attr("display", "block");
        b.style.left = f.left + "px";
        b.style.top = f.top + 20 + "px";
        $(c).closest(".sel").addClass("sel_bg")
    } else {
        c.className = "col";
        b.style.display = "none" || b.attr("display", "none");
        $(c).closest(".sel").removeClass("sel_bg")
    }
}
(function(a) {
    a.fn.slide = function(b) {
        a.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: false,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            titNameCell: ".hd li.name",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            titNameOnClassName: "show",
            autoPage: false,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: false,
            pnLoop: true,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: true,
            defaultPlay: true,
            returnDefault: false
        };
        return this.each(function() {
            var J = a.extend({}, a.fn.slide.defaults, b);
            var g = a(this);
            var ah = J.effect;
            var o = a(J.prevCell, g);
            var I = a(J.nextCell, g);
            var H = a(J.pageStateCell, g);
            var O = a(J.playStateCell, g);
            var C = a(J.titCell, g);
            var ac = a(J.titNameCell, g);
            var m = C.size();
            var ab = a(J.mainCell, g);
            var e = ab.children().size();
            var h = J.switchLoad;
            var ak = a(J.targetCell, g);
            var L = parseInt(J.defaultIndex);
            var A = parseInt(J.delayTime);
            var p = parseInt(J.interTime);
            var at = parseInt(J.triggerTime);
            var ae = parseInt(J.scroll);
            var ai = parseInt(J.vis);
            var ap = J.itemcustom == undefined ? [] : J.itemcustom;
            var ad = (J.autoPlay == "false" || J.autoPlay == false) ? false : true;
            var D = (J.opp == "false" || J.opp == false) ? false : true;
            var s = (J.autoPage == "false" || J.autoPage == false) ? false : true;
            var Q = (J.pnLoop == "false" || J.pnLoop == false) ? false : true;
            var ag = (J.mouseOverStop == "false" || J.mouseOverStop == false) ? false : true;
            var y = (J.defaultPlay == "false" || J.defaultPlay == false) ? false : true;
            var R = (J.returnDefault == "false" || J.returnDefault == false) ? false : true;
            var K = 0;
            var G = 0;
            var q = 0;
            var F = 0;
            var S = J.easing;
            var af = null;
            var N = null;
            var X = null;
            var ar = J.titOnClassName;
            var aa = J.titNameOnClassName;
            var E = C.index(g.find("." + ar));
            var aq = L = E == -1 ? L : E;
            var f = L;
            var ao = L;
            var r = e >= ai ? (e % ae != 0 ? e % ae : ae) : 0;
            var W;
            var V = ah == "leftMarquee" || ah == "topMarquee" ? true : false;
            var an = function() {
                if (a.isFunction(J.startFun)) {
                    J.startFun(L, m, g, a(J.titCell, g), ab, ak, o, I)
                }
            };
            var k = function() {
                if (a.isFunction(J.endFun)) {
                    J.endFun(L, m, g, a(J.titCell, g), ab, ak, o, I)
                }
            };
            var c = function() {
                C.removeClass(ar);
                ac.removeClass(aa);
                if (y) {
                    C.eq(f).addClass(ar);
                    ac.eq(f).addClass(aa)
                }
            };
            if (J.type == "menu") {
                if (y) {
                    C.removeClass(ar).eq(L).addClass(ar);
                    ac.removeClass(aa).eq(L).addClass(aa)
                }
                C.hover(function() {
                    W = a(this).find(J.targetCell);
                    var au = C.index(a(this));
                    N = setTimeout(function() {
                        L = au;
                        C.removeClass(ar).eq(L).addClass(ar);
                        ac.removeClass(aa).eq(L).addClass(aa);
                        an();
                        switch (ah) {
                            case "fade":
                                W.stop(true, true).animate({
                                    opacity: "show"
                                }, A, S, k);
                                break;
                            case "slideDown":
                                W.stop(true, true).animate({
                                    height: "show"
                                }, A, S, k);
                                break
                        }
                    }, J.triggerTime)
                }, function() {
                    clearTimeout(N);
                    switch (ah) {
                        case "fade":
                            W.animate({
                                opacity: "hide"
                            }, A, S);
                            break;
                        case "slideDown":
                            W.animate({
                                height: "hide"
                            }, A, S);
                            break
                    }
                });
                if (R) {
                    g.hover(function() {
                        clearTimeout(X)
                    }, function() {
                        X = setTimeout(c, A)
                    })
                }
                return
            }
            if (m == 0) {
                m = e
            }
            if (V) {
                m = 2
            }
            if (s) {
                if (e >= ai) {
                    if (ah == "leftLoop" || ah == "topLoop") {
                        m = e % ae != 0 ? (e / ae ^ 0) + 1 : e / ae
                    } else {
                        var T = e - ai;
                        m = 1 + parseInt(T % ae != 0 ? (T / ae + 1) : (T / ae));
                        if (m <= 0) {
                            m = 1
                        }
                    }
                } else {
                    m = 1
                }
                C.html("");
                var M = "";
                if (J.autoPage == true || J.autoPage == "true") {
                    for (var am = 0; am < m; am++) {
                        M += "<li></li>"
                    }
                } else {
                    for (var am = 0; am < m; am++) {
                        M += J.autoPage.replace("$", (am + 1))
                    }
                }
                if (ap.length > 1) {
                    M = "";
                    for (x in ap) {
                        M += "<li><span>" + ap[x] + "</span></li>"
                    }
                }
                C.html(M);
                var C = C.children()
            }
            if (e >= ai) {
                ab.children().each(function() {
                    if (a(this).width() > q) {
                        q = a(this).width();
                        G = a(this).outerWidth(true)
                    }
                    if (a(this).height() > F) {
                        F = a(this).height();
                        K = a(this).outerHeight(true)
                    }
                });
                var z = ab.children();
                var w = function() {
                    for (var au = 0; au < ai; au++) {
                        z.eq(au).clone().addClass("clone").appendTo(ab)
                    }
                    for (var au = 0; au < r; au++) {
                        z.eq(e - au - 1).clone().addClass("clone").prependTo(ab)
                    }
                };
                switch (ah) {
                    case "fold":
                        ab.css({
                            position: "relative",
                            width: G,
                            height: K
                        }).children().css({
                            position: "absolute",
                            width: q,
                            left: 0,
                            top: 0,
                            display: "none"
                        });
                        break;
                    case "top":
                        ab.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + ai * K + 'px"></div>').css({
                            top: -(L * ae) * K,
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            height: F
                        });
                        break;
                    case "left":
                        ab.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + ai * G + 'px"></div>').css({
                            width: e * G,
                            left: -(L * ae) * G,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            "float": "left",
                            width: q
                        });
                        break;
                    case "right":
                        ab.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + ai * G + 'px"></div>').css({
                            width: e * G,
                            left: (L * ae) * G,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0"
                        }).children().css({
                            "float": "left",
                            width: q
                        });
                        break;
                    case "leftLoop":
                    case "leftMarquee":
                        w();
                        ab.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + ai * G + 'px"></div>').css({
                            width: (e + ai + r) * G,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0",
                            left: -(r + L * ae) * G
                        }).children().css({
                            "float": "left",
                            width: q
                        });
                        break;
                    case "topLoop":
                    case "topMarquee":
                        w();
                        ab.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + ai * K + 'px"></div>').css({
                            height: (e + ai + r) * K,
                            position: "relative",
                            padding: "0",
                            margin: "0",
                            top: -(r + L * ae) * K
                        }).children().css({
                            height: F
                        });
                        break
                }
            }
            var Z = function(av) {
                var au = av * ae;
                if (av == m) {
                    au = e
                } else {
                    if (av == -1 && e % ae != 0) {
                        au = -e % ae
                    }
                }
                return au
            };
            var d = function(az) {
                var ay = function(aB) {
                    for (var aA = aB; aA < (ai + aB); aA++) {
                        az.eq(aA).find("img[" + h + "]").each(function() {
                            var aE = a(this);
                            aE.attr("src", aE.attr(h)).removeAttr(h);
                            if (ab.find(".clone")[0]) {
                                var aD = ab.children();
                                for (var aC = 0; aC < aD.size(); aC++) {
                                    aD.eq(aC).find("img[" + h + "]").each(function() {
                                        if (a(this).attr(h) == aE.attr("src")) {
                                            a(this).attr("src", a(this).attr(h)).removeAttr(h)
                                        }
                                    })
                                }
                            }
                        })
                    }
                };
                switch (ah) {
                    case "fade":
                    case "fold":
                    case "top":
                    case "left":
                    case "right":
                    case "slideDown":
                        ay(L * ae);
                        break;
                    case "leftLoop":
                    case "topLoop":
                        ay(r + Z(ao));
                        break;
                    case "leftMarquee":
                    case "topMarquee":
                        var aw = ah == "leftMarquee" ? ab.css("left").replace("px", "") : ab.css("top").replace("px", "");
                        var av = ah == "leftMarquee" ? G : K;
                        var au = r;
                        if (aw % av != 0) {
                            var ax = Math.abs(aw / av ^ 0);
                            if (L == 1) {
                                au = r + ax
                            } else {
                                au = r + ax - 1
                            }
                        }
                        ay(au);
                        break
                }
            };
            var P = function(ax) {
                if (y && aq == L && !ax && !V) {
                    return
                }
                if (V) {
                    if (L >= 1) {
                        L = 1
                    } else {
                        if (L <= 0) {
                            L = 0
                        }
                    }
                } else {
                    ao = L;
                    if (L >= m) {
                        L = 0
                    } else {
                        if (L < 0) {
                            L = m - 1
                        }
                    }
                }
                an();
                if (h != null) {
                    d(ab.children())
                }
                if (ak[0]) {
                    W = ak.eq(L);
                    if (h != null) {
                        d(ak)
                    }
                    if (ah == "slideDown") {
                        ak.not(W).stop(true, true).slideUp(A);
                        W.slideDown(A, S, function() {
                            if (!ab[0]) {
                                k()
                            }
                        })
                    } else {
                        ak.not(W).stop(true, true).hide();
                        W.animate({
                            opacity: "show"
                        }, A, function() {
                            if (!ab[0]) {
                                k()
                            }
                        })
                    }
                }
                if (e >= ai) {
                    switch (ah) {
                        case "fade":
                            ab.children().stop(true, true).eq(L).animate({
                                opacity: "show"
                            }, A, S, function() {
                                k()
                            }).siblings().hide();
                            break;
                        case "fold":
                            ab.children().stop(true, true).eq(L).animate({
                                opacity: "show"
                            }, A, S, function() {
                                k()
                            }).siblings().animate({
                                opacity: "hide"
                            }, A, S);
                            break;
                        case "top":
                            ab.stop(true, false).animate({
                                top: -L * ae * K
                            }, A, S, function() {
                                k()
                            });
                            break;
                        case "left":
                            ab.stop(true, false).animate({
                                left: -L * ae * G
                            }, A, S, function() {
                                k()
                            });
                            break;
                        case "right":
                            ab.stop(true, false).animate({
                                left: L * ae * G
                            }, A, S, function() {
                                k()
                            });
                            break;
                        case "leftLoop":
                            var av = ao;
                            ab.stop(true, true).animate({
                                left: -(Z(ao) + r) * G
                            }, A, S, function() {
                                if (av <= -1) {
                                    ab.css("left", -(r + (m - 1) * ae) * G)
                                } else {
                                    if (av >= m) {
                                        ab.css("left", -r * G)
                                    }
                                }
                                k()
                            });
                            break;
                        case "topLoop":
                            var av = ao;
                            ab.stop(true, true).animate({
                                top: -(Z(ao) + r) * K
                            }, A, S, function() {
                                if (av <= -1) {
                                    ab.css("top", -(r + (m - 1) * ae) * K)
                                } else {
                                    if (av >= m) {
                                        ab.css("top", -r * K)
                                    }
                                }
                                k()
                            });
                            break;
                        case "leftMarquee":
                            var aw = ab.css("left").replace("px", "");
                            if (L == 0) {
                                ab.animate({
                                    left: ++aw
                                }, 0, function() {
                                    if (ab.css("left").replace("px", "") >= 0) {
                                        ab.css("left", -e * G)
                                    }
                                })
                            } else {
                                ab.animate({
                                    left: --aw
                                }, 0, function() {
                                    if (ab.css("left").replace("px", "") <= -(e + r) * G) {
                                        ab.css("left", -r * G)
                                    }
                                })
                            }
                            break;
                        case "topMarquee":
                            var au = ab.css("top").replace("px", "");
                            if (L == 0) {
                                ab.animate({
                                    top: ++au
                                }, 0, function() {
                                    if (ab.css("top").replace("px", "") >= 0) {
                                        ab.css("top", -e * K)
                                    }
                                })
                            } else {
                                ab.animate({
                                    top: --au
                                }, 0, function() {
                                    if (ab.css("top").replace("px", "") <= -(e + r) * K) {
                                        ab.css("top", -r * K)
                                    }
                                })
                            }
                            break
                    }
                }
                C.removeClass(ar).eq(L).addClass(ar);
                ac.removeClass(aa).eq(L).addClass(aa);
                aq = L;
                if (!Q) {
                    I.removeClass("nextStop");
                    o.removeClass("prevStop");
                    if (L == 0) {
                        o.addClass("prevStop")
                    }
                    if (L == m - 1) {
                        I.addClass("nextStop")
                    }
                }
                H.html("<span>" + (L + 1) + "</span>/" + m)
            };
            if (y) {
                P(true)
            }
            if (R) {
                g.hover(function() {
                    clearTimeout(X)
                }, function() {
                    X = setTimeout(function() {
                        L = f;
                        if (y) {
                            P()
                        } else {
                            if (ah == "slideDown") {
                                W.slideUp(A, c)
                            } else {
                                W.animate({
                                    opacity: "hide"
                                }, A, c)
                            }
                        }
                        aq = L
                    }, 300)
                })
            }
            var U = function(au) {
                af = setInterval(function() {
                    D ? L-- : L++;
                    P()
                }, !!au ? au : p)
            };
            var u = function(au) {
                af = setInterval(P, !!au ? au : p)
            };
            var B = function() {
                if (!ag) {
                    clearInterval(af);
                    U()
                }
            };
            var Y = function() {
                if (Q || L != m - 1) {
                    L++;
                    P();
                    if (!V) {
                        B()
                    }
                }
            };
            var v = function() {
                if (Q || L != 0) {
                    L--;
                    P();
                    if (!V) {
                        B()
                    }
                }
            };
            var t = function() {
                clearInterval(af);
                V ? u() : U();
                O.removeClass("pauseState")
            };
            var al = function() {
                clearInterval(af);
                O.addClass("pauseState")
            };
            if (ad) {
                if (V) {
                    D ? L-- : L++;
                    u();
                    if (ag) {
                        ab.hover(al, t)
                    }
                } else {
                    U();
                    if (ag) {
                        g.hover(al, t)
                    }
                }
            } else {
                if (V) {
                    D ? L-- : L++
                }
                O.addClass("pauseState")
            }
            O.click(function() {
                O.hasClass("pauseState") ? t() : al()
            });
            if (J.trigger == "mouseover") {
                C.hover(function() {
                    var au = C.index(this);
                    N = setTimeout(function() {
                        L = au;
                        P();
                        B()
                    }, J.triggerTime)
                }, function() {
                    clearTimeout(N)
                })
            } else {
                C.click(function() {
                    L = C.index(this);
                    P();
                    B()
                })
            }
            if (V) {
                I.mousedown(Y);
                o.mousedown(v);
                if (Q) {
                    var n;
                    var l = function() {
                        n = setTimeout(function() {
                            clearInterval(af);
                            u(p / 10 ^ 0)
                        }, 150)
                    };
                    var aj = function() {
                        clearTimeout(n);
                        clearInterval(af);
                        u()
                    };
                    I.mousedown(l);
                    I.mouseup(aj);
                    o.mousedown(l);
                    o.mouseup(aj)
                }
                if (J.trigger == "mouseover") {
                    I.hover(Y, function() {});
                    o.hover(v, function() {})
                }
            } else {
                I.click(Y);
                o.click(v)
            }
        })
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, n, m) {
        var k = 1.70158;
        var l = 0;
        var g = n;
        if (h == 0) {
            return e
        }
        if ((h /= m) == 1) {
            return e + n
        }
        if (!l) {
            l = m * 0.3
        }
        if (g < Math.abs(n)) {
            g = n;
            var k = l / 4
        } else {
            var k = l / (2 * Math.PI) * Math.asin(n / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * m - k) * (2 * Math.PI) / l)) + e
    },
    easeOutElastic: function(f, h, e, n, m) {
        var k = 1.70158;
        var l = 0;
        var g = n;
        if (h == 0) {
            return e
        }
        if ((h /= m) == 1) {
            return e + n
        }
        if (!l) {
            l = m * 0.3
        }
        if (g < Math.abs(n)) {
            g = n;
            var k = l / 4
        } else {
            var k = l / (2 * Math.PI) * Math.asin(n / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * m - k) * (2 * Math.PI) / l) + n + e
    },
    easeInOutElastic: function(f, h, e, n, m) {
        var k = 1.70158;
        var l = 0;
        var g = n;
        if (h == 0) {
            return e
        }
        if ((h /= m / 2) == 2) {
            return e + n
        }
        if (!l) {
            l = m * (0.3 * 1.5)
        }
        if (g < Math.abs(n)) {
            g = n;
            var k = l / 4
        } else {
            var k = l / (2 * Math.PI) * Math.asin(n / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * m - k) * (2 * Math.PI) / l)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * m - k) * (2 * Math.PI) / l) * 0.5 + n + e
    },
    easeInBack: function(e, f, a, k, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return k * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, k, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return k * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, k, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return k / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return k / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
(function(a) {
    a.fn.touchSlider = function(c) {
        c.supportsCssTransitions = (function(g) {
            var h = ["Webkit", "Moz", "Ms"];
            for (var f = 0, e = h.length; f < e; f++) {
                if (typeof g[h[f] + "Transition"] !== "undefined") {
                    return true
                }
            }
            return false
        })(document.createElement("div").style);
        c = jQuery.extend({
            roll: true,
            flexible: false,
            btn_prev: null,
            btn_next: null,
            paging: null,
            speed: 75,
            view: 1,
            range: 0.15,
            page: 1,
            transition: false,
            initComplete: null,
            counter: null,
            tgwidth: 0,
            itemwidth: 0,
            multi: false
        }, c);
        var d = [];
        d = a.extend({}, a.fn.touchSlider.defaults, c);
        return this.each(function() {
            a.fn.extend(this, b);
            var e = this;
            this.opts = d;
            this._view = this.opts.view;
            this._speed = this.opts.speed;
            this._tg = a(this);
            this._list = this._tg.children().children();
            this._width = this.opts.tgwidth > 0 ? this.opts.tgwidth : parseInt(this._tg.css("width"));
            this._item_w = this.opts.itemwidth > 0 ? this.opts.itemwidth : parseInt(this._list.css("width"));
            this._len = this._list.length;
            this._range = this.opts.range * this._width;
            this._pos = [];
            this._start = [];
            this._startX = 0;
            this._startY = 0;
            this._left = 0;
            this._top = 0;
            this._drag = false;
            this._scroll = false;
            this._btn_prev;
            this._btn_next;
            this.init();
            a(this).bind("touchstart", this.touchstart).bind("touchmove", this.touchmove).bind("touchend", this.touchend).bind("dragstart", this.touchstart).bind("drag", this.touchmove).bind("dragend", this.touchend);
            a(window).bind("orientationchange resize", function() {
                e.resize(e)
            })
        })
    };
    var b = {
        init: function() {
            var e = this;
            a(this).children().css({
                width: this._width + "px",
                overflow: "visible"
            });
            if (this.opts.flexible) {
                this._item_w = this._width / this._view
            }
            if (this.opts.roll) {
                this._len = Math.ceil(this._len / this._view) * this._view
            }
            var c = (this.opts.page > 1 && this.opts.page <= this._len) ? (this.opts.page - 1) * this._item_w : 0;
            for (var d = 0; d < this._len; ++d) {
                this._pos[d] = this._item_w * d - c;
                this._start[d] = this._pos[d];
                this._list.eq(d).css({
                    "float": "none",
                    display: "block",
                    position: "absolute",
                    top: "0",
                    left: this._pos[d] + "px",
                    width: this._item_w + "px"
                });
                if (this.opts.supportsCssTransitions && this.opts.transition) {
                    this._list.eq(d).css({
                        "-moz-transition": "0ms",
                        "-moz-transform": "",
                        "-ms-transition": "0ms",
                        "-ms-transform": "",
                        "-webkit-transition": "0ms",
                        "-webkit-transform": "",
                        transition: "0ms",
                        transform: ""
                    })
                }
            }
            if (this.opts.btn_prev && this.opts.btn_next) {
                this.opts.btn_prev.bind("click", function() {
                    e.animate(1, true);
                    return false
                });
                this.opts.btn_next.bind("click", function() {
                    e.animate(-1, true);
                    return false
                })
            }
            if (this.opts.paging) {
                a(this._list).each(function(g, h) {
                    var f = e.opts.paging.eq(g);
                    f.bind("click", function(k) {
                        e.go_page(g, k);
                        return false
                    })
                })
            }
            this.counter();
            this.initComplete()
        },
        initComplete: function() {
            if (typeof(this.opts.initComplete) == "function") {
                this.opts.initComplete(this)
            }
        },
        resize: function(f) {
            if (f.opts.flexible) {
                var c = f._item_w;
                f._width = parseInt(f._tg.css("width"));
                f._item_w = f._width / f._view;
                f._range = f.opts.range * f._width;
                for (var d = 0; d < f._len; ++d) {
                    f._pos[d] = f._pos[d] / c * f._item_w;
                    f._start[d] = f._start[d] / c * f._item_w;
                    f._list.eq(d).css({
                        left: f._pos[d] + "px",
                        width: f._item_w + "px"
                    });
                    if (this.opts.supportsCssTransitions && this.opts.transition) {
                        f._list.eq(d).css({
                            "-moz-transition": "0ms",
                            "-moz-transform": "",
                            "-ms-transition": "0ms",
                            "-ms-transform": "",
                            "-webkit-transition": "0ms",
                            "-webkit-transform": "",
                            transition: "0ms",
                            transform: ""
                        })
                    }
                }
            }
            this.counter()
        },
        touchstart: function(d) {
            if ((d.type == "touchstart" && d.originalEvent.touches.length <= 1) || d.type == "dragstart") {
                this._startX = d.pageX || d.originalEvent.touches[0].pageX;
                this._startY = d.pageY || d.originalEvent.touches[0].pageY;
                this._scroll = false;
                this._start = [];
                for (var c = 0; c < this._len; ++c) {
                    this._start[c] = this._pos[c]
                }
            }
        },
        touchmove: function(l) {
            if ((l.type == "touchmove" && l.originalEvent.touches.length <= 1) || l.type == "drag") {
                this._left = (l.pageX || l.originalEvent.touches[0].pageX) - this._startX;
                this._top = (l.pageY || l.originalEvent.touches[0].pageY) - this._startY;
                var c = this._left < 0 ? this._left * -1 : this._left;
                var k = this._top < 0 ? this._top * -1 : this._top;
                if (c < k || this._scroll) {
                    this._left = 0;
                    this._drag = false;
                    this._scroll = true
                } else {
                    l.preventDefault();
                    this._drag = true;
                    this._scroll = false;
                    this.position(l)
                }
                for (var g = 0; g < this._len; ++g) {
                    var f = this._start[g] + this._left;
                    if (this.opts.supportsCssTransitions && this.opts.transition) {
                        var d = "translate3d(" + f + "px,0,0)";
                        this._list.eq(g).css({
                            left: "",
                            "-moz-transition": "0ms",
                            "-moz-transform": d,
                            "-ms-transition": "0ms",
                            "-ms-transform": d,
                            "-webkit-transition": "0ms",
                            "-webkit-transform": d,
                            transition: "0ms",
                            transform: d
                        })
                    } else {
                        this._list.eq(g).css("left", f + "px")
                    }
                    this._pos[g] = f
                }
            }
        },
        touchend: function(c) {
            if ((c.type == "touchend" && c.originalEvent.touches.length <= 1) || c.type == "dragend") {
                if (this._scroll) {
                    this._drag = false;
                    this._scroll = false;
                    return false
                }
                this.animate(this.direction());
                this._drag = false;
                this._scroll = false
            }
        },
        position: function(k) {
            var l = this._view * this._item_w;
            if (k == -1 || k == 1) {
                this._startX = 0;
                this._start = [];
                for (var g = 0; g < this._len; ++g) {
                    this._start[g] = this._pos[g]
                }
                this._left = k * l
            } else {
                if (this._left > l) {
                    this._left = l
                }
                if (this._left < -l) {
                    this._left = -l
                }
            }
            if (this.opts.roll) {
                var f = [];
                for (var g = 0; g < this._len; ++g) {
                    f[g] = this._pos[g]
                }
                f.sort(function(m, d) {
                    return m - d
                });
                var c = f[this._len - this._view];
                var h = a.inArray(f[0], this._pos);
                var e = a.inArray(c, this._pos);
                if (this._view <= 1) {
                    c = this._len - 1
                }
                if (this.opts.multi) {
                    if ((k == 1 && f[0] >= 0) || (this._drag && f[0] >= 100)) {
                        for (var g = 0; g < this._view; ++g,
                            ++h,
                            ++e) {
                            this._start[e] = this._start[h] - l;
                            this._list.eq(e).css("left", this._start[e] + "px")
                        }
                    } else {
                        if ((k == -1 && f[0] <= 0) || (this._drag && f[0] <= -100)) {
                            for (var g = 0; g < this._view; ++g,
                                ++h,
                                ++e) {
                                this._start[h] = this._start[e] + l;
                                this._list.eq(h).css("left", this._start[h] + "px")
                            }
                        }
                    }
                } else {
                    if ((k == 1 && f[0] >= 0) || (this._drag && f[0] > 0)) {
                        for (var g = 0; g < this._view; ++g,
                            ++h,
                            ++e) {
                            this._start[e] = this._start[h] - l;
                            this._list.eq(e).css("left", this._start[e] + "px")
                        }
                    } else {
                        if ((k == -1 && f[c] <= 0) || (this._drag && f[c] <= 0)) {
                            for (var g = 0; g < this._view; ++g,
                                ++h,
                                ++e) {
                                this._start[h] = this._start[e] + l;
                                this._list.eq(h).css("left", this._start[h] + "px")
                            }
                        }
                    }
                }
            } else {
                if (this.limit_chk()) {
                    this._left = this._left / 2
                }
            }
        },
        animate: function(f, c) {
            if (this._drag || !this._scroll || c) {
                var h = this;
                var e = this._speed;
                if (c) {
                    this.position(f)
                }
                var g = f * (this._item_w * this._view);
                if (this._left == 0 || (!this.opts.roll && this.limit_chk())) {
                    g = 0
                }
                this._list.each(function(k, l) {
                    h._pos[k] = h._start[k] + g;
                    if (h.opts.supportsCssTransitions && h.opts.transition) {
                        var m = e + "ms";
                        var d = "translate3d(" + h._pos[k] + "px,0,0)";
                        if (c) {
                            m = "0ms"
                        }
                        a(this).css({
                            left: "",
                            "-moz-transition": m,
                            "-moz-transform": d,
                            "-ms-transition": m,
                            "-ms-transform": d,
                            "-webkit-transition": m,
                            "-webkit-transform": d,
                            transition: m,
                            transform: d
                        })
                    } else {
                        a(this).stop();
                        a(this).animate({
                            left: h._pos[k] + "px"
                        }, e)
                    }
                });
                this.counter()
            }
        },
        direction: function() {
            var c = 0;
            if (this._left < -(this._range)) {
                c = -1
            } else {
                if (this._left > this._range) {
                    c = 1
                }
            }
            if (!this._drag || this._scroll) {
                c = 0
            }
            return c
        },
        limit_chk: function() {
            var c = parseInt((this._len - 1) / this._view) * this._view;
            return ((this._start[0] == 0 && this._left > 0) || (this._start[c] == 0 && this._left < 0))
        },
        go_page: function(d, g) {
            var c = (a.inArray(0, this._pos) / this._view) + 1;
            var f = c - (d + 1);
            while (f != 0) {
                if (f < 0) {
                    this.animate(-1, true);
                    f++
                } else {
                    if (f > 0) {
                        this.animate(1, true);
                        f--
                    }
                }
            }
        },
        counter: function() {
            if (typeof(this.opts.counter) == "function") {
                var c = {
                    total: Math.ceil(this._len / this._view),
                    current: (a.inArray(0, this._pos) / this._view) + 1
                };
                this.opts.counter(c)
            }
        }
    }
})(jQuery);

function f_headmenucur() {
    $("#head_menu").find("li").removeClass("cur");
    $("#head_menu").find("dt").removeClass("cur");
    if (typeof(query_string) != "undefined" && query_string != "") {
        if (query_string[0] == "Products") {
            if (query_string[1] == "Detail") {
                if ($("#headProductsDetail").length > 0) {
                    var b = $("#headProductsDetail").attr("ptype");
                    if (typeof(query_string[2]) != "undefined" && typeof(b) != "undefined" && query_string[2] == b) {
                        $("#headProductsDetail").addClass("cur")
                    } else {
                        $("#headProducts").addClass("cur");
                        $("#productLi").addClass("cur")
                    }
                } else {
                    $("#headProducts").addClass("cur");
                    $("#productLi").addClass("cur")
                }
            } else {
                $("#headProducts").addClass("cur");
                $("#productLi").addClass("cur")
            }
        } else {
            if (query_string[0] == "Company" && query_string[1] == "Company") {
                $("#headAboutUs").addClass("cur")
            } else {
                if (query_string[0] == "Company" && query_string[1] == "Factory") {
                    $("#headFactorytour").addClass("cur")
                } else {
                    if (query_string[0] == "Company" && query_string[1] == "Quality") {
                        $("#headQualityControl").addClass("cur")
                    } else {
                        if (query_string[0] == "Company" && query_string[1] == "ContactUs") {
                            $("#headContactUs").addClass("cur")
                        } else {
                            if (query_string[0] == "News") {
                                if (query_string[1] == "Detail") {
                                    if ($("#headNewsDetail").length > 0) {
                                        var a = $("#headNewsDetail").attr("newsId");
                                        if (typeof(query_string[2]) != "undefined" && typeof(a) != "undefined" && query_string[2] == a) {
                                            $("#headNewsDetail").addClass("cur")
                                        } else {
                                            $("#headNewsList").addClass("cur")
                                        }
                                    } else {
                                        $("#headNewsList").addClass("cur")
                                    }
                                } else {
                                    $("#headNewsList").addClass("cur")
                                }
                            } else {
                                if (query_string[0] == "Index" && query_string[1] == "TechnicalService") {
                                    $("#headTechnicalService").addClass("cur")
                                } else {
                                    if (query_string[0] == "Index" && query_string[1] == "EasySourcing") {
                                        $("#headEasySourcing").addClass("cur")
                                    } else {
                                        $("#headHome").addClass("cur")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};