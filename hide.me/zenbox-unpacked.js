! function(a) {
    function b(b) {
        try {
            return b()
        } catch (c) {
            a.console && a.console.log && a.console.log.apply && a.console.log("Zenbox Error: ", c)
        }
    }

    function c(a, b, c) {
        a && a.addEventListener ? a.addEventListener(b, c, !1) : a && a.attachEvent && a.attachEvent("on" + b, c)
    }

    function d(a) {
        return a && !y.test(a) ? x.location.protocol + "//" + a : a
    }

    function e() {
        r = x.createElement("div"), r.setAttribute("id", "zenbox_tab"), r.setAttribute("href", "#"), r.style.display = "none", x.body.appendChild(r), s = x.createElement("div"), s.setAttribute("id", "zenbox_overlay"), s.style.display = "none", s.innerHTML = '<div id="zenbox_container"> <div class="zenbox_header"><img id="zenbox_close" width="46" height="46"></div> <iframe id="zenbox_body" frameborder="0" scrolling="auto" allowTransparency="true"></iframe></div><div id="zenbox_scrim">&nbsp;</div>', x.body.appendChild(s), t = x.getElementById("zenbox_container"), u = x.getElementById("zenbox_close"), v = x.getElementById("zenbox_body"), w = x.getElementById("zenbox_scrim"), c(r, "click", function() {
            a.Zenbox.show()
        }), c(u, "click", function() {
            a.Zenbox.hide()
        }), c(w, "click", function() {
            a.Zenbox.hide()
        })
    }

    function f(a) {
        var b;
        for (b in a) a.hasOwnProperty(b) && ("url" === b || "assetHost" === b ? z[b] = d(a[b]) : z[b] = a[b])
    }

    function g(a) {
        if ("left" === a && navigator.userAgent.match(/MSIE 10/)) return void(r.style.left = "-50px");
        if ("left" === a) r.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)", r.style["-ms-filter"] = '"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"', r.style.left = "-15px";
        else {
            r.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)", r.style["-ms-filter"] = '"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"';
            var b;
            b = navigator.userAgent.match(/MSIE 8/) ? "-87px" : navigator.userAgent.match(/MSIE 7/) ? "-17px" : "-50px", r.style.right = b
        }
    }

    function h() {
        if (z.hide_tab) r.style.display = "none";
        else {
            r.setAttribute("title", z.tabID), r.setAttribute("class", "ZenboxTab" + z.tabPosition), r.setAttribute("className", "ZenboxTab" + z.tabPosition), r.innerHTML = '<div id="feedback_tab_text">' + z.tabID + "</div>", r.style.backgroundColor = z.tabColor, r.style.display = "block";
            var a = Math.ceil(-(r.offsetWidth - (r.offsetHeight - 30)) / 2) + "px",
                b = "ZenboxTabRight" === r.className ? "right" : "left";
            r.style[b] = a, navigator.userAgent.match(/MSIE [^9]/) && g(b)
        }
    }

    function i(b) {
        var c = b || a.event || {};
        return c.cancelBubble = !0, c.returnValue = !1, c.stopPropagation && c.stopPropagation(), c.preventDefault && c.preventDefault(), !1
    }

    function j() {
        return Math.max(Math.max(x.body.scrollHeight, x.documentElement.scrollHeight), Math.max(x.body.offsetHeight, x.documentElement.offsetHeight), Math.max(x.body.clientHeight, x.documentElement.clientHeight))
    }

    function k() {
        return {
            left: a.pageXOffset || x.documentElement.scrollLeft || x.body.scrollLeft,
            top: a.pageYOffset || x.documentElement.scrollTop || x.body.scrollTop
        }
    }

    function l() {
        return z.assetHost + "/images/zendesk_close_big.png"
    }

    function m() {
        return z.assetHost + "/loading.html"
    }

    function n() {
        var a = z.url + "/account/dropboxes/" + z.dropboxID + "?x=1";
        return z.request_subject && (a += "&subject=" + z.request_subject), z.request_description && (a += "&description=" + z.request_description), z.requester_name && (a += "&name=" + z.requester_name), z.requester_email && (a += "&email=" + z.requester_email), a
    }

    function o(b) {
        r || e(), f(b), h(), u.src = l(), v.src = m(), a.addEventListener("message", function(a) {
            "hideZenbox" === a.data && q()
        }, !1)
    }

    function p(a) {
        return v.src = n(), s.style.height = w.style.height = j() + "px", t.style.top = k().top + 50 + "px", s.style.display = "block", i(a)
    }

    function q(a) {
        return s.style.display = "none", v.src = m(), i(a)
    }
    var r, s, t, u, v, w, x = a.document,
        y = /^([a-zA-Z]+:)?\/\//,
        z = {
            url: null,
            dropboxID: null,
            tabID: "support",
            tabText: "Support",
            tabColor: "#000000",
            assetHost: "//assets.zendesk.com",
            tabPosition: "Left",
            hide_tab: !1,
            request_subject: null,
            request_description: null,
            requester_name: null,
            requester_email: null
        },
        A = {
            init: function(a) {
                b(function() {
                    return o(a)
                })
            },
            update: function(a) {
                b(function() {
                    return o(a)
                })
            },
            render: function(a) {
                b(function() {
                    return p(a)
                })
            },
            show: function(a) {
                b(function() {
                    return p(a)
                })
            },
            hide: function(a) {
                b(function() {
                    return q(a)
                })
            }
        };
    c(a, "load", function() {
        a.zenbox_params && A.init(a.zenbox_params)
    }), a.Zenbox = A
}(this.window || this);
