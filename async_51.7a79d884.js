(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{349:function(t,e,r){"use strict";r.r(e);var n={i18n:{"zh-CN":{title1:"选择完整时间",title2:"选择日期（年月日）",title3:"选择日期（年月）",title4:"选择时间",year:"年",month:"月",optionFilter:"选项过滤器"},"en-US":{title1:"Choose DateTime",title2:"Choose Date",title3:"Choose Year-Month",title4:"Choose Time",year:" Year",month:" Month",optionFilter:"Option Filter"}},data:function(){return{minDate:new Date(2018,0,1),maxDate:new Date(2019,10,1),currentDate1:new Date(2018,0,1),currentDate2:null,currentDate3:new Date(2018,0,1),currentTime1:"12:00",currentTime2:"12:00"}},methods:{formatter:function(t,e){return"year"===t?e+this.$t("year"):"month"===t?e+this.$t("month"):e},filter:function(t,e){return"minute"===t?e.filter(function(t){return t%5==0}):e}}},a=r(1),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("demo-section",[r("demo-block",{attrs:{title:t.$t("title1")}},[r("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate,"max-date":t.maxDate},model:{value:t.currentDate1,callback:function(e){t.currentDate1=e},expression:"currentDate1"}})],1),r("demo-block",{attrs:{title:t.$t("title2")}},[r("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},model:{value:t.currentDate2,callback:function(e){t.currentDate2=e},expression:"currentDate2"}})],1),r("demo-block",{attrs:{title:t.$t("title3")}},[r("van-datetime-picker",{attrs:{type:"year-month","min-date":t.minDate,formatter:t.formatter},model:{value:t.currentDate3,callback:function(e){t.currentDate3=e},expression:"currentDate3"}})],1),r("demo-block",{attrs:{title:t.$t("title4")}},[r("van-datetime-picker",{attrs:{type:"time","min-hour":10,"max-hour":20},model:{value:t.currentTime1,callback:function(e){t.currentTime1=e},expression:"currentTime1"}})],1),r("demo-block",{attrs:{title:t.$t("optionFilter")}},[r("van-datetime-picker",{attrs:{type:"time",filter:t.filter},model:{value:t.currentTime2,callback:function(e){t.currentTime2=e},expression:"currentTime2"}})],1)],1)},[],!1,null,null,null);e.default=i.exports}}]);