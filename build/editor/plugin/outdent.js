/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: May 14 22:22
*/
KISSY.add("editor/plugin/outdent",["editor","./button","./outdent/cmd"],function(f,b){function c(){}var d=b("editor");b("./button");var e=b("./outdent/cmd");c.prototype={pluginRenderUI:function(a){e.init(a);a.addButton("outdent",{tooltip:"\u51cf\u5c11\u7f29\u8fdb\u91cf",listeners:{click:function(){a.execCommand("outdent");a.focus()},afterSyncUI:function(){var b=this;a.on("selectionChange",function(){a.get("mode")!==d.Mode.SOURCE_MODE&&(a.queryCommandValue("outdent")?b.set("disabled",!1):b.set("disabled",!0))})}},mode:d.Mode.WYSIWYG_MODE})}};
return c});
