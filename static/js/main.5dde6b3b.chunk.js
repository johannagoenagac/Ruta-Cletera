(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),s=a.n(r),c=(a(18),a(6)),o=a(1),l=a(2),u=a(4),m=a(3),d=a(7),p=a(5),h=a(8),b=a.n(h),f=a(11),g=(a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).platform=null,a.map=null,a.state={app_id:e.app_id,app_code:e.app_code,useHTTPS:!0,center:{lat:e.lat,lng:e.lng},zoom:e.zoom},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.platform=new window.H.service.Platform(this.state);var e=this.platform.createDefaultLayers(),t=this.refs["here-map"];this.map=new window.H.Map(t,e.normal.map,{center:this.state.center,zoom:this.state.zoom});var a=new window.H.mapevents.MapEvents(this.map);new window.H.mapevents.Behavior(a),new window.H.ui.UI.createDefault(this.map,e)}},{key:"componentDidUpdate",value:function(){var e=this;""!==this.props.startPoint.lat&&""!==this.props.endPoint.lat&&(this.routingParameters={mode:"fastest;pedestrian",waypoint0:"geo!"+this.props.startPoint.lat+","+this.props.startPoint.long,waypoint1:"geo!"+this.props.endPoint.lat+","+this.props.endPoint.long,representation:"display"},this.onResult=function(t){var a,n,i,r,s;console.log(t),t.response&&t.response.route&&(n=(a=t.response.route[0]).shape,s=new window.H.geo.LineString,n.forEach(function(e){var t=e.split(",");s.pushLatLngAlt(t[0],t[1])}),i=a.waypoint[0].mappedPosition,r=a.waypoint[1].mappedPosition,e.routeLine=new window.H.map.Polyline(s,{style:{strokeColor:"blue",lineWidth:2}}),e.startMarker=new window.H.map.Marker({lat:i.latitude,lng:i.longitude}),e.endMarker=new window.H.map.Marker({lat:r.latitude,lng:r.longitude}),e.map.addObjects([e.routeLine,e.startMarker,e.endMarker]),e.map.setViewBounds(e.routeLine.getBounds()))},this.router=this.platform.getRoutingService(),this.router.calculateRoute(this.routingParameters,this.onResult,function(e){alert(e.message)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"map",ref:"here-map",style:{width:"100%",height:"700px",background:"#00BCD4"}},i.a.createElement("a",{href:".#",className:"float",id:"menu-share"},i.a.createElement("i",{onClick:this.props.modal,class:"far fa-stop-circle"}))))}}]),t}(n.Component)),v=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"profile"},i.a.createElement("div",{className:"header-profile"},i.a.createElement("a",{href:".#"},i.a.createElement("img",{className:"userImage",src:"https://i.ibb.co/sQNBr7s/Whats-App-Image-2019-05-22-at-6-44-06-PM.jpg",alt:"userImage",border:"0"}))),i.a.createElement("div",{id:"profileRoutes"},i.a.createElement("button",{className:"button",onClick:this.props.btnSaveRoute,id:"myRoutes"},i.a.createElement("img",{id:"saveImg",src:"https://i.ibb.co/92vXgTF/floppy-disk-1.png",alt:"saveIcon"}),"Rutas Guardadas")),i.a.createElement("div",{id:"lastRoute"},i.a.createElement("p",{id:"textLastRoute"},"Tu \xfaltimo viaje lo realizaste",i.a.createElement("br",null),"el d\xeda 24-05 a las 07:30, ",i.a.createElement("br",null),"entre Providencia y Recoleta, ",i.a.createElement("br",null),"recorriste 10km.")))}}]),t}(n.Component)),E=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("i",{onClick:this.props.news,className:"far fa-newspaper icon"}),i.a.createElement("i",{onClick:this.props.map,className:"fas fa-map-marked-alt icon"}),i.a.createElement("i",{onClick:this.props.onClik,className:"far fa-user icon"})))))}}]),t}(n.Component)),j=(a(23),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={start:"",end:""},a.functionStart=a.functionStart.bind(Object(d.a)(a)),a.functionEnd=a.functionEnd.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"functionStart",value:function(e){this.setState(Object(c.a)({},this.state,{start:e.target.value}))}},{key:"functionEnd",value:function(e){this.setState(Object(c.a)({},this.state,{end:e.target.value}))}},{key:"render",value:function(){var e=this;return i.a.createElement("nav",{className:"navbar navbar-inverse"},i.a.createElement("a",{href:".#"},i.a.createElement("img",{id:"logo",src:"https://i.ibb.co/yk5DgYT/Group-1-1.png",alt:"Logotype",border:"0"})),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"navbar-header"},i.a.createElement("div",{id:"options"},i.a.createElement("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-search"})))),i.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},i.a.createElement("input",{className:"inputRoute",onChange:function(t){return e.functionStart(t)},value:this.state.start,placeholder:"Punto de Partida"}),i.a.createElement("input",{className:"inputRoute",onChange:function(t){return e.functionEnd(t)},value:this.state.end,placeholder:"Destino"}),i.a.createElement("div",{className:"buttonSearch"},i.a.createElement("button",{id:"search",onClick:function(){return e.props.coordinates(e.state.start,e.state.end)}},"Buscar ruta"))))))}}]),t}(n.Component)),O=(a(24),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("hola"),i.a.createElement("div",{className:"RouteSave"},i.a.createElement("img",{className:"imgShare",src:"https://i.ibb.co/Fb34MFX/routacity.png",alt:"routacity",border:"0"}),i.a.createElement("div",null,i.a.createElement("p",{className:"tittle"},"\xbfQu\xe9 tipo de ruta es?"),i.a.createElement("div",{className:"input"},i.a.createElement("input",{type:"radio",name:"gender"})," Ruta diaria",i.a.createElement("br",null),i.a.createElement("input",{id:"seconInput",type:"radio",name:"gender"})," Ruta tur\xedstica",i.a.createElement("br",null))),i.a.createElement("div",null,i.a.createElement("p",{className:"tittle"},"\xbfVisualisaste alguna de estas caracter\xedsticas durante tu viaje?"),i.a.createElement("div",{className:"input2"},i.a.createElement("label",{class:"container"},i.a.createElement("input",{className:"checkbox",type:"checkbox"})," Estacionamiento de Bicicletas",i.a.createElement("span",{className:"checkmark"})),i.a.createElement("label",{class:"container"},i.a.createElement("input",{className:"checkbox",type:"checkbox"})," Problemas en la v\xeda",i.a.createElement("span",{className:"checkmark"})))),i.a.createElement("div",{className:"containerBtn"},i.a.createElement("button",{className:"btnCancelar"},"Cancelar"),i.a.createElement("button",{onClick:this.props.finalize,className:"btnCancelar"},"Finalizar")))}}]),t}(n.Component)),k=(a(25),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("hola"),i.a.createElement("div",null,i.a.createElement("img",{className:"imgRoute",src:"https://i.ibb.co/MnXX4D0/ruta.jpg",alt:"ruta",border:"0"}),i.a.createElement("p",{className:"tittleShare"},"Tu ruta ha sido guardada"))}}]),t}(n.Component)),N=(a(26),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"save"},i.a.createElement("h3",{id:"textSave"},"Mis rutas"),i.a.createElement("div",{id:"saveRoute"},i.a.createElement("div",null,i.a.createElement("img",{className:"imgMap",src:"https://i.ibb.co/6X4SMGP/Captura-de-pantalla-2019-05-22-a-las-13-44-08.png",alt:""})),i.a.createElement("div",{className:"footerMap"},i.a.createElement("p",{className:"textLabel"},"Ruta turistica"),i.a.createElement("i",{onClick:this.props.btnShare,class:"far fa-share-square"}))),i.a.createElement("div",{id:"saveRoute2"},i.a.createElement("div",null,i.a.createElement("img",{className:"imgMap",src:"https://i.ibb.co/ygzZQNs/Captura-de-pantalla-2019-05-22-a-las-13-40-38.png",alt:""})),i.a.createElement("div",{className:"footerMap"},i.a.createElement("p",{className:"textLabel"},"Ruta diaria"),i.a.createElement("i",{onClick:this.props.btnShare,id:"iconShareSquare",class:"far fa-share-square"}))))}}]),t}(n.Component)),w=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h5",{id:"title"},"Recomendaciones para ti"),i.a.createElement("div",{id:"recomendation"},i.a.createElement("div",null,i.a.createElement("img",{className:"imgBike",src:"https://i.ibb.co/TTgVSXY/img-travel.jpg",alt:""})),i.a.createElement("div",{className:"footerImg"},i.a.createElement("p",{className:"textLabel"},"Ruta turistica"),i.a.createElement("img",{id:"iconTuristic",className:"iconImg",src:"https://i.ibb.co/GC6zqgG/cycling-4-1.png",alt:""}),i.a.createElement("img",{id:"iconParkin",className:"iconImg",src:"https://i.ibb.co/98QLg0Z/parking-1.png",alt:""}))),i.a.createElement("div",{id:"recomendation2"},i.a.createElement("div",null,i.a.createElement("img",{className:"imgBike",src:"https://i.ibb.co/W5bXj7s/arrow-direction-one-way-536.png",alt:""})),i.a.createElement("div",null,i.a.createElement("p",{className:"textLabel"},"Problemas en la via"),i.a.createElement("img",{id:"iconBrokenRoute",className:"iconIMg",src:"https://i.ibb.co/rv30Qdv/Group-11.png",alt:""}))),i.a.createElement("div",{id:"recomendation3"},i.a.createElement("div",null,i.a.createElement("img",{className:"imgBike",src:"https://i.ibb.co/6X4SMGP/Captura-de-pantalla-2019-05-22-a-las-13-44-08.png",alt:""})),i.a.createElement("div",{className:"footerImg"},i.a.createElement("p",{className:"textLabel"},"Ruta turistica"),i.a.createElement("img",{id:"iconTuristic",className:"iconImg",src:"https://i.ibb.co/GC6zqgG/cycling-4-1.png",alt:""}),i.a.createElement("img",{id:"iconParkin",className:"iconImg",src:"https://i.ibb.co/98QLg0Z/parking-1.png",alt:""}))),i.a.createElement("div",{id:"recomendation4"},i.a.createElement("div",null,i.a.createElement("img",{className:"imgBike",src:"https://i.ibb.co/ygzZQNs/Captura-de-pantalla-2019-05-22-a-las-13-40-38.png",alt:""})),i.a.createElement("div",{className:"footerImg"},i.a.createElement("p",{className:"textLabel"},"Ruta turistica"),i.a.createElement("img",{id:"iconTuristic",className:"iconImg",src:"https://i.ibb.co/GC6zqgG/cycling-4-1.png",alt:""}),i.a.createElement("img",{id:"iconParkin",className:"iconImg",src:"https://i.ibb.co/98QLg0Z/parking-1.png",alt:""}))))}}]),t}(n.Component)),y=(a(28),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.props.closeModal,className:"modal1"},i.a.createElement("div",{className:"container1"},i.a.createElement("div",{className:"modal2"},i.a.createElement("div",null,i.a.createElement("button",{onClick:this.props.btnguardar,className:"btnGuardar"},"Guardar Ruta")))))}}]),t}(n.Component)),S=(a(29),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{id:"share-image",src:"https://i.ibb.co/6PYsjPy/Ride-Image.jpg",alt:""}),i.a.createElement("p",{id:"text-share"},"Tu ruta fue compartida ",i.a.createElement("br",null),"exitosamente con la comunidad."))}}]),t}(n.Component)),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={app_id:"dPPKrUEpsqpYWIAVcmLD",app_code:"4Uosgp7aDFaZc0VoxXZTEg",user:!1,map:!1,btnguardar:!1,share:!1,news:!1,modal:!1,finalize:!1,screen:!0,btnRouteSave:!1,btnShare:!1,startPoint:{lat:"",long:""},endPoint:{lat:"",long:""}},a.functionCoordinates=a.functionCoordinates.bind(Object(d.a)(a)),a.functionUser=a.functionUser.bind(Object(d.a)(a)),a.functionMap=a.functionMap.bind(Object(d.a)(a)),a.functionNews=a.functionNews.bind(Object(d.a)(a)),a.functionModal=a.functionModal.bind(Object(d.a)(a)),a.functionCloseModal=a.functionCloseModal.bind(Object(d.a)(a)),a.functionGuardar=a.functionGuardar.bind(Object(d.a)(a)),a.functionfinalize=a.functionfinalize.bind(Object(d.a)(a)),a.seeRouteSave=a.seeRouteSave.bind(Object(d.a)(a)),a.shareRoute=a.shareRoute.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shareRoute",value:function(){this.setState(Object(c.a)({},this.state,{btnShare:!0,user:!1,map:!1,login:!1,share:!1,news:!1,modal:!1,btnguardar:!1,btnRouteSave:!1}))}},{key:"seeRouteSave",value:function(){this.setState(Object(c.a)({},this.state,{btnRouteSave:!0,user:!1,map:!1,btnguardar:!1,share:!1,news:!1,modal:!1,finalize:!1,screen:!1,btnShare:!1}))}},{key:"functionfinalize",value:function(){this.setState(Object(c.a)({},this.state,{modal:!1,share:!1,user:!1,map:!1,btnguardar:!1,news:!1,finalize:!0,btnRouteSave:!1,screen:!1,btnShare:!1}))}},{key:"functionGuardar",value:function(){this.setState(Object(c.a)({},this.state,{modal:!1,share:!1,user:!1,map:!1,btnguardar:!0,news:!1,finalize:!1,btnRouteSave:!1,screen:!1,btnShare:!1}))}},{key:"functionCloseModal",value:function(){this.setState(Object(c.a)({},this.state,{modal:!1,share:!1,user:!1,map:!1,btnguardar:!0,news:!1,finalize:!1,btnRouteSave:!1,screen:!1,btnShare:!1}))}},{key:"functionModal",value:function(){this.setState(Object(c.a)({},this.state,{modal:!0,share:!1,user:!1,map:!0,login:!1,news:!1,btnguardar:!1,finalize:!1,btnRouteSave:!1,screen:!1,btnShare:!1}))}},{key:"functionNews",value:function(){this.setState(Object(c.a)({},this.state,{news:!0,share:!1,user:!1,map:!1,login:!1,modal:!1,btnguardar:!1,finalize:!1,btnRouteSave:!1,screen:!1,btnShare:!1}))}},{key:"functionUser",value:function(){this.setState(Object(c.a)({},this.state,{user:!0,map:!1,login:!1,share:!1,news:!1,modal:!1,btnguardar:!1,btnRouteSave:!1,screen:!1,btnShare:!1}))}},{key:"functionMap",value:function(){this.setState(Object(c.a)({},this.state,{map:!0,user:!1,btnRouteSave:!1,screen:!1}))}},{key:"componentDidMount",value:function(){var e=this;this.setState(Object(c.a)({},this.state,{map:!0,user:!1,login:!1})),navigator.geolocation&&(console.log(navigator.geolocation),navigator.geolocation.getCurrentPosition(function(t){e.setState(Object(c.a)({},e.state,{lat:t.coords.latitude,long:t.coords.longitude,error:null}))},function(t){e.setState(Object(c.a)({},e.state,{error:t.message}))}))}},{key:"functionCoordinates",value:function(){var e=Object(f.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id="+this.state.app_id+"&app_code="+this.state.app_code+"&searchtext="+t).then(function(e){return e.json()}).then(function(e){return console.log(e,"esta"),{lat:e.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,long:e.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,address:e.Response.View[0].Result[0].Location.Address.Label}});case 2:return this.startPoint=e.sent,e.next=5,fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id="+this.state.app_id+"&app_code="+this.state.app_code+"&searchtext="+a).then(function(e){return e.json()}).then(function(e){return{lat:e.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude,long:e.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude,address:e.Response.View[0].Result[0].Location.Address.Label}});case 5:this.endPoint=e.sent,this.setState(Object(c.a)({},this.state,{startPoint:Object(c.a)({},this.startPoint),endPoint:Object(c.a)({},this.endPoint)}));case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,{coordinates:this.functionCoordinates}),this.state.user&&i.a.createElement(v,{btnSaveRoute:this.seeRouteSave}),this.state.btnRouteSave&&i.a.createElement(N,{btnShare:this.shareRoute}),this.state.btnShare&&i.a.createElement(S,null),this.state.map&&i.a.createElement(g,{app_id:this.state.app_id,app_code:this.state.app_code,lat:"-33.4489",lng:"-70.6693",zoom:"13",startPoint:this.state.startPoint,endPoint:this.state.endPoint,modal:this.functionModal}),this.state.btnguardar&&i.a.createElement(O,{finalize:this.functionfinalize}),this.state.finalize&&i.a.createElement(k,null),this.state.news&&i.a.createElement(w,null),this.state.modal&&i.a.createElement(y,{closeModal:this.functionCloseModal,btnguardar:this.functionGuardar}),i.a.createElement(E,{onClik:this.functionUser,map:this.functionMap,news:this.functionNews}))}}]),t}(n.Component),C=(a(30),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{className:"imgScreenOn",onClick:this.props.onclikscreen,src:"https://i.ibb.co/rxjXz66/Ruta-Cletera.png",alt:"Ruta-Cletera",border:"0"})))}}]),t}(n.Component)),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={screenOn:!0},a.functionScreenOn=a.functionScreenOn.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"functionScreenOn",value:function(){this.setState(Object(c.a)({},this.state,{screenOn:!1}))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.screenOn&&i.a.createElement(C,{onclikscreen:this.functionScreenOn}),!this.state.screenOn&&i.a.createElement(R,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.5dde6b3b.chunk.js.map