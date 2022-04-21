const body=$("body"),html=$("html");function quixSettings({version:a,layout:t,navheaderBg:e,headerBg:o,sidebarStyle:r,sidebarBg:i,sidebarPosition:d,headerPosition:s,containerLayout:b,direction:l}){this.version=a||"light",this.layout=t||"vertical",this.navheaderBg=e||"color_1",this.headerBg=o||"color_1",this.sidebarStyle=r||"full",this.sidebarBg=i||"color_1",this.sidebarPosition=d||"static",this.headerPosition=s||"static",this.containerLayout=b||"wide",this.direction=l||"ltr",this.manageVersion(),this.manageLayout(),this.manageNavHeaderBg(),this.manageHeaderBg(),this.manageSidebarStyle(),this.manageSidebarBg(),this.manageSidebarPosition(),this.manageHeaderPosition(),this.manageContainerLayout(),this.manageRtlLayout(),this.manageResponsiveSidebar()}quixSettings.prototype.manageVersion=function(){switch(this.version){case"light":default:body.attr("data-theme-version","light");break;case"dark":body.attr("data-theme-version","dark")}},quixSettings.prototype.manageLayout=function(){if("horizontal"===this.layout)"overlay"===this.sidebarStyle?body.attr("data-sidebar-style","full"):body.attr("data-sidebar-style",`${this.sidebarStyle}`),body.attr("data-layout","horizontal");else body.attr("data-layout","vertical")},quixSettings.prototype.manageNavHeaderBg=function(){switch(this.navheaderBg){case"color_1":default:body.attr("data-nav-headerbg","color_1");break;case"color_2":body.attr("data-nav-headerbg","color_2");break;case"color_3":body.attr("data-nav-headerbg","color_3");break;case"color_4":body.attr("data-nav-headerbg","color_4");break;case"color_5":body.attr("data-nav-headerbg","color_5");break;case"color_6":body.attr("data-nav-headerbg","color_6");break;case"color_7":body.attr("data-nav-headerbg","color_7");break;case"color_8":body.attr("data-nav-headerbg","color_8");break;case"color_9":body.attr("data-nav-headerbg","color_9");break;case"color_10":body.attr("data-nav-headerbg","color_10")}},quixSettings.prototype.manageHeaderBg=function(){switch(this.headerBg){case"color_1":default:body.attr("data-headerbg","color_1");break;case"color_2":body.attr("data-headerbg","color_2");break;case"color_3":body.attr("data-headerbg","color_3");break;case"color_4":body.attr("data-headerbg","color_4");break;case"color_5":body.attr("data-headerbg","color_5");break;case"color_6":body.attr("data-headerbg","color_6");break;case"color_7":body.attr("data-headerbg","color_7");break;case"color_8":body.attr("data-headerbg","color_8");break;case"color_9":body.attr("data-headerbg","color_9");break;case"color_10":body.attr("data-headerbg","color_10")}},quixSettings.prototype.manageSidebarStyle=function(){switch(this.sidebarStyle){case"full":default:body.attr("data-sidebar-style","full");break;case"mini":body.attr("data-sidebar-style","mini");break;case"compact":body.attr("data-sidebar-style","compact");break;case"overlay":"horizontal"===this.layout?body.attr("data-sidebar-style","full"):body.attr("data-sidebar-style","overlay")}},quixSettings.prototype.manageSidebarBg=function(){switch(this.sidebarBg){case"color_1":default:body.attr("data-sibebarbg","color_1");break;case"color_2":body.attr("data-sibebarbg","color_2");break;case"color_3":body.attr("data-sibebarbg","color_3");break;case"color_4":body.attr("data-sibebarbg","color_4");break;case"color_5":body.attr("data-sibebarbg","color_5");break;case"color_6":body.attr("data-sibebarbg","color_6");break;case"color_7":body.attr("data-sibebarbg","color_7");break;case"color_8":body.attr("data-sibebarbg","color_8");break;case"color_9":body.attr("data-sibebarbg","color_9");break;case"color_10":body.attr("data-sibebarbg","color_10")}},quixSettings.prototype.manageSidebarPosition=function(){if("fixed"===this.sidebarPosition)"overlay"===this.sidebarStyle&&"vertical"===this.layout?body.attr("data-sidebar-position","static"):body.attr("data-sidebar-position","fixed");else body.attr("data-sidebar-position","static")},quixSettings.prototype.manageHeaderPosition=function(){if("fixed"===this.headerPosition)body.attr("data-header-position","fixed");else body.attr("data-header-position","static")},quixSettings.prototype.manageContainerLayout=function(){if("boxed"===this.containerLayout)"vertical"===this.layout&&"full"===this.sidebarStyle&&body.attr("data-sidebar-style","overlay"),body.attr("data-container","boxed");else body.attr("data-container","wide")},quixSettings.prototype.manageRtlLayout=function(){switch(this.direction){case"rtl":html.attr("dir","rtl"),html.addClass("rtl"),body.attr("direction","rtl");break;case"ltr":html.attr("dir","ltr"),html.removeClass("rtl"),body.attr("direction","ltr");break;default:html.attr("dir","ltr"),body.attr("direction","ltr")}},quixSettings.prototype.manageResponsiveSidebar=function(){const a=$(window).innerWidth();a<1200&&(body.attr("data-layout","vertical"),body.attr("data-container","wide")),a>767&&a<1200&&body.attr("data-sidebar-style","mini"),a<768&&body.attr("data-sidebar-style","overlay")};