(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{212:function(t,i,n){var o=n(296);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(13)(o,s);o.locals&&(t.exports=o.locals)},295:function(t,i,n){"use strict";var o=n(212);n.n(o).a},296:function(t,i,n){(t.exports=n(12)(!1)).push([t.i,".demo-submit-bar .van-submit-bar {\n  position: relative;\n}\n.demo-submit-bar .edit-address {\n  color: #1989fa;\n}\n.demo-submit-bar .van-checkbox {\n  margin-left: 15px;\n}\n",""])},316:function(t,i,n){"use strict";n.r(i);var o={i18n:{"zh-CN":{submit:"提交订单",tip1:"你的收货地址不支持同城送, 我们已为你推荐快递",tip2:"你的收货地址不支持同城送, ",tip3:"修改地址",check:"全选",clickButton:"点击按钮",clickLink:"修改地址"},"en-US":{submit:"Submit",tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",clickButton:"Click button",clickLink:"Click Link"}},data:function(){return{checked:!0}},methods:{onClickButton:function(){this.$toast(this.$t("clickButton"))},onClickLink:function(){this.$toast(this.$t("clickLink"))}}},s=(n(295),n(1)),c=Object(s.a)(o,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("basicUsage")}},[n("van-submit-bar",{attrs:{price:3050,"button-text":t.$t("submit")},on:{submit:t.onClickButton}})],1),n("demo-block",{attrs:{title:t.$t("disabled")}},[n("van-submit-bar",{attrs:{disabled:"",price:3050,"button-text":t.$t("submit"),tip:t.$t("tip1"),"tip-icon":"info-o"},on:{submit:t.onClickButton}})],1),n("demo-block",{attrs:{title:t.$t("loadingStatus")}},[n("van-submit-bar",{attrs:{loading:"",price:3050,"button-text":t.$t("submit")},on:{submit:t.onClickButton}})],1),n("demo-block",{attrs:{title:t.$t("advancedUsage")}},[n("van-submit-bar",{attrs:{price:3050,"button-text":t.$t("submit")},on:{submit:t.onClickButton}},[n("van-checkbox",{model:{value:t.checked,callback:function(i){t.checked=i},expression:"checked"}},[t._v(t._s(t.$t("check")))]),n("span",{attrs:{slot:"tip"},slot:"tip"},[t._v("\n        "+t._s(t.$t("tip2"))+"\n        "),n("span",{staticClass:"edit-address",on:{click:t.onClickLink}},[t._v("\n          "+t._s(t.$t("tip3"))+"\n        ")])])],1)],1)],1)},[],!1,null,null,null);i.default=c.exports}}]);