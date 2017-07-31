/**
 * rangedate.js v1.0.1
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="rangedate clearfix">\n            <datepicker id="datepicker-', '"></datepicker>\n            <buttons id="buttons-', '"></buttons>\n        </div>\n        ' ], [ '\n        <div class="rangedate clearfix">\n            <datepicker id="datepicker-', '"></datepicker>\n            <buttons id="buttons-', '"></buttons>\n        </div>\n        ' ]);

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ComView = function(_Lego$UI$Baseview) {
    _inherits(ComView, _Lego$UI$Baseview);
    function ComView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, ComView);
        var options = {
            startValue: "",
            endValue: "",
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (ComView.__proto__ || Object.getPrototypeOf(ComView)).call(this, options));
    }
    _createClass(ComView, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            this.addCom([ {
                el: "#datepicker-" + opts.vid,
                type: "range",
                showClose: true,
                showClear: true,
                startValue: opts.startValue,
                endValue: opts.endValue,
                style: {
                    float: "left",
                    width: "77%"
                },
                onChange: function onChange(self, result) {
                    console.warn("点击了时间选项框6", result);
                }
            }, {
                el: "#buttons-" + opts.vid,
                type: "primary",
                text: "搜索",
                style: {
                    float: "right"
                },
                onClick: function onClick(self) {
                    if (typeof opts.onClick == "function") opts.onClick(opts.context, {
                        startDate: that.$(".startDate").val(),
                        endDate: that.$(".endDate").val()
                    });
                }
            } ]);
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject, opts.vid, opts.vid);
            return vDom;
        }
    } ]);
    return ComView;
}(Lego.UI.Baseview);

Lego.components("rangedate", ComView);

module.exports = ComView;
