(function(){tinymce.PluginManager.requireLangPack('imageupload');tinymce.create('tinymce.plugins.ImageUploadPlugin',{init:function(ed,url){ed.addCommand('mceImageUpload',function(){ed.windowManager.open({file:url+'/dialog.htm',width:520+parseInt(ed.getLang('imageUpload.delta_width',0)),height:350+parseInt(ed.getLang('imageUpload.delta_height',0)),inline:1},{plugin_url:url})});ed.addButton('imageupload',{title:'imageupload.desc',cmd:'mceImageUpload',image:url+'/img/pictures.png'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('imageupload',n.nodeName=='IMG')})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'Image Upload',author:'Adrian Slade',authorurl:'http://adeslade.co.uk',infourl:'http://adeslade.co.uk',version:"1.0"}}});tinymce.PluginManager.add('imageupload',tinymce.plugins.ImageUploadPlugin)})();
