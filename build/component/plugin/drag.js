/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: May 14 22:15
*/
KISSY.add("component/plugin/drag",["dd"],function(e,c){function d(){var a=this.component,b=a.$el.offset();a.setInternal("xy",[b.left,b.top])}return c("dd").Draggable.extend({pluginId:"component/plugin/drag",pluginBindUI:function(a){this.set("node",a.$el);this.start();this.component=a;this.on("dragend",d)},pluginDestructor:function(){this.destroy()}},{ATTRS:{move:{value:1},groups:{value:!1}}})});
