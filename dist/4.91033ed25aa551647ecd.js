webpackJsonp([4],{108:function(e,t,i){i(128);var o=i(21)(i(117),i(125),null,null);e.exports=o.exports},114:function(e,t,i){t=e.exports=i(9)(void 0),t.push([e.i,'html{color:#666;background:#fff;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}.movieImg{cursor:pointer;transition:all .6s}.movieImg:hover{transform:scale(1.4)}article,aside,blockquote,body,button,code,dd,details,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,input,legend,li,menu,nav,ol,p,pre,section,td,textarea,th,ul{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}body,button,input,select,textarea{font:12px/1.62 Helvetica,Arial,sans-serif}input,select,textarea{outline:none;font-size:100%}table{border-spacing:0;border-collapse:collapse}th{text-align:inherit;font-weight:700}fieldset,img{border:0}iframe{display:block}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-weight:500;font-style:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:after,q:before{content:""}sub,sup{position:relative;vertical-align:baseline;font-size:75%;line-height:0}sup{top:-.5em}sub{bottom:-.25em}a:link,a:visited{color:#08c}a.redlink:link,a.redlink:visited{color:#910004}a:hover{text-decoration:underline}a,ins{text-decoration:none}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}.clearfix:after{display:block;visibility:hidden;clear:both;height:0;content:" ";font-size:0}.clearfix{zoom:1}.fn-hide{display:none}.fn-left,.fn-right{display:inline}.fn-left{float:left}.fn-right{float:right}.fn-text-overflow{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.fn-linear{background:-webkit-gradient(linear,left top,left bottom,from(#fbfbfb),to(#f2f2f2));background:-moz-linear-gradient(top,#fbfbfb,#f2f2f2);background:-o-linear-gradient(top,#fbfbfb,#f2f2f2);background:-ms-linear-gradient(top,#fbfbfb,#f2f2f2);background:linear-gradient(top,#fbfbfb,#f2f2f2);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfbfb",endColorstr="#f2f2f2")}.fn-linear-light{background:-webkit-gradient(linear,left top,left bottom,from(#fdfdfd),to(#eee));background:-moz-linear-gradient(top,#fdfdfd,#eee);background:-o-linear-gradient(top,#fdfdfd,#eee);background:-ms-linear-gradient(top,#fdfdfd,#eee);background:linear-gradient(top,#fdfdfd,#eee);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#fdfdfd",endColorstr="#eee")}.fn-webkit-adjust{-webkit-text-size-adjust:none}::-webkit-input-placeholder{color:#999}:-moz-placeholder,::-moz-placeholder{color:#999}:-ms-input-placeholder{color:#999}.grid-950{width:950px;margin:0 auto}.fade-enter-active,.fade-leave-active{transition:opacity .2s;opacity:0}.bounce-enter-active{animation:bounce-in .5s}.bounce-leave-active{animation:bounce-out .5s}@keyframes bounce-in{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-out{0%{transform:scale(1)}50%{transform:scale(1.5)}to{transform:scale(0)}}',""])},115:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{data:Object},data:function(){return{value:0,subject:{},maxNum:12}},watch:{data:function(){console.log(this.data)}},methods:{showDetail:function(e){this.$store.commit("DETAIL_LOADING",{loading:!0}),this.$router.push({path:"/moviesDetail",query:{id:e}})}},computed:{loadingMoving:function(){return this.$store.getters.loadingMoving}}}},117:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(121),a=i.n(o);t.default={data:function(){return{citys:[{name:"北京"},{name:"上海"},{name:"广州"},{name:"深圳"},{name:"杭州"}]}},mounted:function(){this.$store.dispatch("getMoving")},methods:{changeCity:function(e){this.$store.commit("MOVING_LOADING",{loading:!0}),this.$store.commit("MOVIE_CITY",{city:e}),this.$store.dispatch("getMoving")}},components:{MoviesTag:a.a},computed:{movingList:function(){return this.$store.getters.movingList},city:function(){return this.$store.getters.city}}}},119:function(e,t,i){t=e.exports=i(9)(void 0),t.i(i(114),""),t.push([e.i,".moviesList{width:950px;margin:10px auto 0;min-height:500px}.moviesList .movie-container{width:560px;border-top:1px dashed #ccc;margin-top:-10px}.moviesList .movie-container .movieTag{padding-top:20px;width:118px;height:270px;overflow:hidden;font-size:12px;text-align:center;display:inline-block;margin:0 20px 20px 0}.moviesList .movie-container .movieTag ul{margin:0 auto;padding:0}.moviesList .movie-container .movieTag ul li{list-style:none}.moviesList .movie-container .movieTag a{cursor:pointer;text-decoration:none}.moviesList .movie-container .movieTag .film-pic{height:180px;margin-bottom:12px;overflow:hidden}.moviesList .movie-container .movieTag .film-pic a img{width:128px;vertical-align:middle}.moviesList .movie-container .movieTag .film-name{font-size:14px;white-space:nowrap;height:22px;overflow:hidden}.moviesList .movie-container .movieTag .film-name a{display:inline-block;word-spacing:normal;height:24px;line-height:24px;text-decoration:none;color:#000}.moviesList .movie-container .movieTag .film-rate{display:inline-block;margin:4px auto 2px;height:19px}.moviesList .movie-container .movieTag .film-rate .el-rate{display:inline-block}.moviesList .movie-container .movieTag .film-rate .el-rate .el-rate__icon{font-size:12px}.moviesList .movie-container .movieTag .film-rate .rateNum{display:inline-block;font-size:12px}.moviesList .movie-container .movieTag .film-button span{display:block;margin:0 auto;text-align:center;width:90px;height:24px;line-height:24px;background-color:#268dcd;border-radius:2px}.moviesList .movie-container .movieTag .film-button span a{color:#fff}.moviesList .movie-container .load-more{cursor:pointer;width:530px;height:30px;line-height:30px;text-align:center;background:#eee;color:#27a}",""])},120:function(e,t,i){t=e.exports=i(9)(void 0),t.push([e.i,".moving{margin-bottom:20px}.moving p{color:red}.moving .tit{width:950px;margin:0 auto;margin-top:20px}.moving .tit h1{display:inline-block;width:126px;font-size:20px;color:#000}.moving .tit .locat{position:relative;display:inline-block}.moving .tit .hd{border:none}.tab-hd{vertical-align:bottom}.tab-hd li{margin:0 5px;float:left}.tab-hd .on{background-color:#69c;color:#fff;padding:0 10px;border-radius:2px}.hd{padding:10px 0;border-bottom:1px dashed #ccc}.hd .tab-hd,.hd h2{display:inline-block}",""])},121:function(e,t,i){i(127);var o=i(21)(i(115),i(124),null,null);e.exports=o.exports},124:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingMoving,expression:"loadingMoving"}],staticClass:"moviesList"},[i("div",{staticClass:"movie-container"},[e._l(e.data.subjects,function(t,o){return o<e.maxNum?i("div",{staticClass:"movieTag"},[i("ul",[i("li",{staticClass:"film-pic"},[i("a",{on:{click:function(i){e.showDetail(t.id)}}},[i("img",{staticClass:"movieImg",attrs:{src:t.images.large,alt:""}})])]),i("li",{staticClass:"film-name"},[i("a",{attrs:{href:""}},[e._v(e._s(t.title))])]),i("li",{staticClass:"film-rate"},[i("el-rate",{attrs:{disabled:""},model:{value:t.rating.average,callback:function(e){t.rating.average=e},expression:"subject.rating.average"}}),i("span",{staticClass:"rateNum"},[e._v(e._s(2*t.rating.average))])],1),e._m(0,!0)])]):e._e()}),e.maxNum<e.data.subjects.length?i("div",{staticClass:"load-more",on:{click:function(t){e.maxNum=e.data.subjects.length}}},[e._v("加载更多")]):e._e()],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"film-button"},[i("span",[i("a",{attrs:{href:""}},[e._v("特惠选座")])])])}]}},125:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"moving"},[i("div",{staticClass:"tit"},[i("h1",[e._v("电影票 - "+e._s(e.city))]),i("div",{staticClass:"locat",attrs:{id:""}},[i("el-dropdown",{attrs:{trigger:"click"},on:{command:e.changeCity}},[i("a",{staticClass:"el-dropdown-link",attrs:{href:"javascript:;"}},[e._v("\n            [切换城市]\n          ")]),i("el-dropdown-menu",{slot:"dropdown"},e._l(e.citys,function(t,o){return i("el-dropdown-item",{key:o,attrs:{command:t.name}},[e._v(e._s(t.name))])}))],1)],1),e._m(0)]),i("MoviesTag",{staticClass:"movieTag",attrs:{data:e.movingList}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hd"},[i("h2",[e._v("影院上映")]),i("ul",{staticClass:"tab-hd clearfix"},[i("li",{staticClass:"on"},[e._v("正在上映")])])])}]}},127:function(e,t,i){var o=i(119);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(22)("75e1f798",o,!0)},128:function(e,t,i){var o=i(120);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(22)("6c1858f9",o,!0)}});