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
if (typeof(g_tp) === "undefined") {
    g_tp = ""
}
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
};