"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

var _axios = _interopRequireDefault(require("axios"));

var _fundBasicsJSON = _interopRequireDefault(require("../../../public/data/fundBasicsJSON"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
* FundBasics Component
* */
var FundBasics = function FundBasics(props) {
  var classes = props.classes;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      response = _useState2[0],
      setResponse = _useState2[1];

  (0, _react.useEffect)(function () {
    var fundsUrl = props.fundsUrl;

    if (response === null) {
      _axios["default"].get(fundsUrl).then(function (res) {
        if (res.data.trim() === "") {
          setResponse(_fundBasicsJSON["default"]);
        } else {
          setResponse(res);
        }
      })["catch"](function (error) {
        setResponse(_fundBasicsJSON["default"]);
        console.log(error);
      });
    }
  });
  return _react["default"].createElement(_core.Grid, {
    container: true
  }, _react["default"].createElement("div", {
    className: classes.container
  }, _react["default"].createElement(_core.Grid, {
    item: 12
  }, _react["default"].createElement("div", {
    className: classes.header
  }, "FUND BASICS"), response && response.date && _react["default"].createElement("div", {
    className: classes.legal
  }, "as of ".concat(response.date))), _react["default"].createElement("hr", null), _react["default"].createElement(_core.Grid, {
    container: true,
    className: classes.table
  }, response && response.fundDetails && response.fundDetails.length > 0 && response.fundDetails.map(function (item, index) {
    return _react["default"].createElement(_react.Fragment, {
      id: "fundBasic-".concat(index)
    }, _react["default"].createElement(_core.Grid, {
      item: true,
      xs: 8,
      className: classes.title
    }, item.title), _react["default"].createElement(_core.Grid, {
      item: true,
      xs: 4,
      className: classes.value
    }, "".concat(item.isDollar ? '$' : '').concat(item.value).concat(item.unit ? " ".concat(item.unit) : '').concat(item.postSymbol ? item.postSymbol : '')));
  })), response && response.legalText && _react["default"].createElement(_core.Grid, {
    container: true
  }, _react["default"].createElement("div", {
    className: classes.legal
  }, response.legalText))));
};

FundBasics.propTypes = {
  /** component style class */
  classes: PropTypes.object,

  /** Fund header */
  header: PropTypes.string.isRequired,

  /** Fund description */
  description: PropTypes.string,

  /** Fund content */
  content: PropTypes.string.isRequired
};

var _default = (0, _styles.withStyles)(_styles2["default"])(FundBasics);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Z1bmRCYXNpY3MvaW5kZXguanMiXSwibmFtZXMiOlsiRnVuZEJhc2ljcyIsInByb3BzIiwiY2xhc3NlcyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJmdW5kc1VybCIsIkF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJ0cmltIiwiZnVuZEJhc2ljcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImhlYWRlciIsImRhdGUiLCJsZWdhbCIsInRhYmxlIiwiZnVuZERldGFpbHMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsInZhbHVlIiwiaXNEb2xsYXIiLCJ1bml0IiwicG9zdFN5bWJvbCIsImxlZ2FsVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBR0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbkJDLE9BRG1CLEdBQ1JELEtBRFEsQ0FDbkJDLE9BRG1COztBQUFBLGtCQUVNLHFCQUFTLElBQVQsQ0FGTjtBQUFBO0FBQUEsTUFFbkJDLFFBRm1CO0FBQUEsTUFFVEMsV0FGUzs7QUFJMUIsd0JBQVUsWUFBTTtBQUFBLFFBQ0xDLFFBREssR0FDT0osS0FEUCxDQUNMSSxRQURLOztBQUVaLFFBQUlGLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQkcsd0JBQU1DLEdBQU4sQ0FBVUYsUUFBVixFQUFvQkcsSUFBcEIsQ0FBeUIsVUFBVUMsR0FBVixFQUFlO0FBQ3BDLFlBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxJQUFULE9BQW9CLEVB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Y3QnO1xyXG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7R3JpZCwgUGFwZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IGZ1bmRCYXNpY3MgZnJvbSAnLi4vLi4vLi4vcHVibGljL2RhdGEvZnVuZEJhc2ljc0pTT04nO1xyXG5cclxuLypcclxuKiBGdW5kQmFzaWNzIENvbXBvbmVudFxyXG4qICovXHJcbmNvbnN0IEZ1bmRCYXNpY3MgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtmdW5kc1VybH0gPSBwcm9wcztcclxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgQXhpb3MuZ2V0KGZ1bmRzVXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZShmdW5kQmFzaWNzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2UocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZShmdW5kQmFzaWNzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5GVU5EIEJBU0lDUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZSAmJiByZXNwb25zZS5kYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVnYWx9PntgYXMgb2YgJHtyZXNwb25zZS5kYXRlfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZSAmJiByZXNwb25zZS5mdW5kRGV0YWlscyAmJiByZXNwb25zZS5mdW5kRGV0YWlscy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZnVuZERldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQgaWQ9e2BmdW5kQmFzaWMtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLmlzRG9sbGFyID8gJyQnIDogJyd9JHtpdGVtLnZhbHVlfSR7aXRlbS51bml0ID8gYCAke2l0ZW0udW5pdH1gIDogJyd9JHtpdGVtLnBvc3RTeW1ib2wgPyBpdGVtLnBvc3RTeW1ib2wgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAge3Jlc3BvbnNlICYmIHJlc3BvbnNlLmxlZ2FsVGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZ2FsfT57cmVzcG9uc2UubGVnYWxUZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5GdW5kQmFzaWNzLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBjb21wb25lbnQgc3R5bGUgY2xhc3MgKi9cclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAvKiogRnVuZCBoZWFkZXIgKi9cclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgLyoqIEZ1bmQgZGVzY3JpcHRpb24gKi9cclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqIEZ1bmQgY29udGVudCAqL1xyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEZ1bmRCYXNpY3MpO1xyXG4iXX0=