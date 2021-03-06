/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: May 14 22:19
*/
/*
combined modules:
editor/plugin/flash-common/utils
*/
/**
 * @ignore
 * flash utilities
 * @author yiminghe@gmail.com
 */
KISSY.add('editor/plugin/flash-common/utils', [
    'swf',
    'dom',
    'node'
], function (S, require) {
    var SWF = require('swf');
    var Dom = require('dom');
    var $ = require('node').all;
    var flashUtils = {
            insertFlash: function (editor, src, attrs, _cls, _type) {
                var nodeInfo = flashUtils.createSWF({
                        src: src,
                        attrs: attrs,
                        document: editor.get('document')[0]
                    }), real = nodeInfo.el, substitute = editor.createFakeElement(real, _cls || 'ke_flash', _type || 'flash', true, nodeInfo.html, attrs);
                editor.insertElement(substitute);
                return substitute;
            },
            isFlashEmbed: function (element) {
                return Dom.attr(element, 'type') === 'application/x-shockwave-flash' || /\.swf(?:$|\?)/i.test(Dom.attr(element, 'src') || '');
            },
            getUrl: function (r) {
                return SWF.getSrc(r);
            },
            createSWF: function (cfg) {
                var render = Dom.create('<div style="' + 'position:absolute;left:-9999px;top:-9999px;' + '"></div>', undefined, cfg.document);
                cfg.htmlMode = 'full';
                Dom.append(render, cfg.document.body);
                cfg.render = render;
                var swf = new SWF(cfg);
                Dom.remove(render);
                return {
                    el: $(swf.get('el')),
                    html: swf.get('html')
                };
            }
        };
    return flashUtils;
});


