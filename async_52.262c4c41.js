(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{347:function(t,e,o){"use strict";o.r(e);var n={i18n:{"zh-CN":{customContent:"自定义菜单内容",disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{customContent:"Custom Content",disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}},data:function(){return{switch1:!0,switch2:!1,value1:0,value2:"a"}},computed:{option1:function(){return this.$t("option1")},option2:function(){return this.$t("option2")}},methods:{onConfirm:function(){this.$refs.item.toggle()}}},i=o(1),l=Object(i.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("demo-section",[o("demo-block",{attrs:{title:t.$t("basicUsage")}},[o("van-dropdown-menu",[o("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),o("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)],1),o("demo-block",{attrs:{title:t.$t("customContent")}},[o("van-dropdown-menu",[o("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),o("van-dropdown-item",{ref:"item",attrs:{title:t.$t("itemTitle")}},[o("van-switch-cell",{attrs:{title:t.$t("switchTitle1")},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),o("van-switch-cell",{attrs:{title:t.$t("switchTitle2")},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}}),o("van-button",{attrs:{type:"info",block:""},on:{click:t.onConfirm}},[t._v("\n          "+t._s(t.$t("confirm"))+"\n        ")])],1)],1)],1),o("demo-block",{attrs:{title:t.$t("disableMenu")}},[o("van-dropdown-menu",[o("van-dropdown-item",{attrs:{disabled:"",options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),o("van-dropdown-item",{attrs:{disabled:"",options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);