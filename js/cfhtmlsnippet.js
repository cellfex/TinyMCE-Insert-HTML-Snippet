tinyMCEPopup.requireLangPack();

var cfHtmlSnippetDialog = {
    init: function () {
        var f = document.forms[0];
        f.cfHtmlSnippetCode.value = tinyMCEPopup.editor.selection.getContent({ format: 'text' });
    },
    insert: function () {
        var code = document.forms[0].cfHtmlSnippetCode.value;
        if (code === null) { tinyMCEPopup.close(); return; }
        tinyMCEPopup.editor.execCommand('mceInsertContent', false, code);
        tinyMCEPopup.close();
    }
};

tinyMCEPopup.onInit.add(cfHtmlSnippetDialog.init, cfHtmlSnippetDialog);