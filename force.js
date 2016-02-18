//create a password in Chrome under bookmarks bar 
//insert script to force remember on password
javascript:(function(){var ac,c,f,fa,fe,fea,x,y,z;ac="autocomplete";c=0;f=document.forms;for(x=0;x<f.length;x++){fa=f[x].attributes;for(y=0;y<fa.length;y++){if(fa[y].name.toLowerCase()==ac){fa[y].value="on";c++;}}fe=f[x].elements;for(y=0;y<fe.length;y++){fea=fe[y].attributes;for(z=0;z<fea.length;z++){if(fea[z].name.toLowerCase()==ac){fea[z].value="on";c++;}}}}alert("Enabled '"+ac+"' on "+c+" objects.");})();
