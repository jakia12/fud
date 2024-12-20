layui
  .config({
    base: "./js/extend/",
  })
  .extend({
    clipboardJS: "clipboardJS",
  })
  .use(["element", "layer", "dropdown", "clipboardJS", "util"], function () {
    var $ = layui.jquery;
    var device = layui.device("mobile");
    var element = layui.element;
    var layer = layui.layer;
    var dropdown = layui.dropdown;
    var clipboardJS = layui.clipboardJS;
    var util = layui.util;

    util.on("lay-on", {
      copy: function () {
        var clipboard = new clipboardJS("#btnCopy");
        clipboard.on("success", function (e) {
          layer.msg("Copied successfully！");
          e.clearSelection();
        });
        clipboard.on("error", function (e) {
          layer.msg("Copy failed!");
        });
      },
    });
  });
