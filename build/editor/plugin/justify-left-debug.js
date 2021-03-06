/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: May 14 22:20
*/
/*
combined modules:
editor/plugin/justify-left
*/
/**
 * @ignore
 * justifyLeft button.
 * @author yiminghe@gmail.com
 */
KISSY.add('editor/plugin/justify-left', [
    'editor',
    './justify-left/cmd',
    './button',
    'node'
], function (S, require) {
    var Editor = require('editor');
    var justifyCenterCmd = require('./justify-left/cmd');
    require('./button');
    var Node = require('node');
    function exec() {
        var editor = this.get('editor');
        editor.execCommand('justifyLeft');
        editor.focus();
    }
    function justifyLeft() {
    }
    justifyLeft.prototype = {
        pluginRenderUI: function (editor) {
            justifyCenterCmd.init(editor);
            editor.addButton('justifyLeft', {
                tooltip: '\u5DE6\u5BF9\u9F50',
                checkable: true,
                listeners: {
                    click: exec,
                    afterSyncUI: function () {
                        var self = this;
                        editor.on('selectionChange', function () {
                            if (editor.get('mode') === Editor.Mode.SOURCE_MODE) {
                                return;
                            }
                            if (editor.queryCommandValue('justifyLeft')) {
                                self.set('checked', true);
                            } else {
                                self.set('checked', false);
                            }
                        });
                    }
                },
                mode: Editor.Mode.WYSIWYG_MODE
            });
            editor.docReady(function () {
                editor.get('document').on('keydown', function (e) {
                    if (e.ctrlKey && e.keyCode === Node.KeyCode.L) {
                        editor.execCommand('justifyLeft');
                        e.preventDefault();
                    }
                });
            });
        }
    };
    return justifyLeft;
});



