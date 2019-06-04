"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _core = require("@material-ui/core");

var _axios = _interopRequireDefault(require("axios"));

var _styles = _interopRequireDefault(require("./styles"));

var _yieldJSON = _interopRequireDefault(require("../../../public/data/yieldJSON"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Yield = function Yield(props) {
  var classes = props.classes;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      yieldContent = _useState2[0],
      setYieldData = _useState2[1];

  (0, _react.useEffect)(function () {
    var yieldUrl = props.yieldUrl;

    if (yieldContent === null) {
      _axios["default"].get(yieldUrl).then(function (res) {
        if (res.data.trim() === "") {
          setYieldData(_yieldJSON["default"]);
        } else {
          setYieldData(res);
        }
      })["catch"](function (error) {
        setYieldData(_yieldJSON["default"]);
        console.log(error);
      });
    }
  });
  return _react["default"].createElement(_core.Grid, {
    container: true
  }, _react["default"].createElement("div", {
    className: classes.container
  }, yieldContent && _react["default"].createElement(_core.Grid, {
    item: 12
  }, yieldContent.title && _react["default"].createElement("div", {
    className: classes.header
  }, yieldContent.title), yieldContent.date && _react["default"].createElement("div", {
    className: classes.dateText
  }, "as of ".concat(yieldContent.date))), _react["default"].createElement("hr", null), _react["default"].createElement(_core.Grid, {
    container: true
  }, yieldContent && yieldContent.yieldDetails && yieldContent.yieldDetails.length > 0 && yieldContent.yieldDetails.map(function (item, index) {
    return _react["default"].createElement(_react.Fragment, {
      id: "yield-".concat(index)
    }, _react["default"].createElement(_core.Grid, {
      item: true,
      xs: 6,
      className: classes.title
    }, item.title), _react["default"].createElement(_core.Grid, {
      item: true,
      xs: 6,
      className: classes.value
    }, "".concat(item.value, "%")));
  })), yieldContent && yieldContent.legalText && _react["default"].createElement(_core.Grid, {
    container: true
  }, _react["default"].createElement("div", {
    className: classes.legal
  }, yieldContent.legalText))));
};

Yield.propTypes = {
  /** Yield component css classes*/
  classes: PropTypes.object
};

var _default = (0, _core.withStyles)(_styles["default"])(Yield);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1lpZWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbIllpZWxkIiwicHJvcHMiLCJjbGFzc2VzIiwieWllbGRDb250ZW50Iiwic2V0WWllbGREYXRhIiwieWllbGRVcmwiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidHJpbSIsInlpZWxkRGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsInRpdGxlIiwiaGVhZGVyIiwiZGF0ZSIsImRhdGVUZXh0IiwieWllbGREZXRhaWxzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwidmFsdWUiLCJsZWdhbFRleHQiLCJsZWdhbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIllpZWxkU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsT0FEYyxHQUNIRCxLQURHLENBQ2RDLE9BRGM7O0FBQUEsa0JBRWdCLHFCQUFTLElBQVQsQ0FGaEI7QUFBQTtBQUFBLE1BRWRDLFlBRmM7QUFBQSxNQUVBQyxZQUZBOztBQUlyQix3QkFBVSxZQUFNO0FBQUEsUUFDTEMsUUFESyxHQUNPSixLQURQLENBQ0xJLFFBREs7O0FBRVosUUFBSUYsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3ZCRyx3QkFBTUMsR0FBTixDQUFVRixRQUFWLEVBQW9CRyxJQUFwQixDQUF5QixVQUFVQyxHQUFWLEVBQWU7QUFDcEMsWUFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLElBQVQsT0FBb0IsRUFBeEIsRUFBNEI7QUFDeEJQLFVBQUFBLFlBQVksQ0FBQ1EscUJBQUQsQ0FBWjtBQUNILFNBRkQsTUFFTztBQUNIUixVQUFBQSxZQUFZLENBQUNLLEdBQUQsQ0FBWjtBQUNIO0FBQ0osT0FORCxXQU1TLFVBQVVJLEtBQVYsRUFBaUI7QUFDdEJULFFBQUFBLFlBQVksQ0FBQ1EscUJBQUQsQ0FBWjtBQUNBRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BVEQ7QUFVSDtBQUNKLEdBZEQ7QUFnQkEsU0FDSSxnQ0FBQyxVQUFEO0FBQU0sSUFBQSxTQUFTO0FBQWYsS0FDSTtBQUFLLElBQUEsU0FBUyxFQUFFWCxPQUFPLENBQUNjO0FBQXhCLEtBQ0tiLFlBQVksSUFDYixnQ0FBQyxVQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUU7QUFBWixLQUNLQSxZQUFZLENBQUNjLEtBQWIsSUFDRDtBQUFLLElBQUEsU0FBUyxFQUFFZixPQUFPLENBQUNnQjtBQUF4QixLQUNLZixZQUFZLENBQUNjLEtBRGxCLENBRkosRUFNS2QsWUFBWSxDQUFDZ0IsSUFBYixJQUNEO0FBQUssSUFBQSxTQUFTLEVBQUVqQixPQUFPLENBQUNrQjtBQUF4QixxQkFDY2pCLFlBQVksQ0FBQ2dCLElBRDNCLEVBUEosQ0FGSixFQWVJLDJDQWZKLEVBZ0JJLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLFNBQVM7QUFBZixLQUNLaEIsWUFBWSxJQUFJQSxZQUFZLENBQUNrQixZQUE3QixJQUE2Q2xCLFlBQVksQ0FBQ2tCLFlBQWIsQ0FBMEJDLE1BQTFCLEdBQW1DLENBQWhGLElBQ0RuQixZQUFZLENBQUNrQixZQUFiLENBQTBCRSxHQUExQixDQUE4QixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUMxQixnQ0FBQyxlQUFEO0FBQVUsTUFBQSxFQUFFLGtCQUFXQSxLQUFYO0FBQVosT0FDSSxnQ0FBQyxVQUFEO0FBQU0sTUFBQSxJQUFJLE1BQVY7QUFBVyxNQUFBLEVBQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUEsU0FBUyxFQUFFdkIsT0FBTyxDQUFDZTtBQUFyQyxPQUNLTyxJQUFJLENBQUNQLEtBRFYsQ0FESixFQUlJLGdDQUFDLFVBQUQ7QUFBTSxNQUFBLElBQUksTUFBVjtBQUFXLE1BQUEsRUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBQSxTQUFTLEVBQUVmLE9BQU8sQ0FBQ3dCO0FBQXJDLGlCQUNRRixJQUFJLENBQUNFLEtBRGIsT0FKSixDQUQwQjtBQUFBLEdBQTlCLENBRkosQ0FoQkosRUE4Qkt2QixZQUFZLElBQUlBLFlBQVksQ0FBQ3dCLFNBQTdCLElBQ0QsZ0NBQUMsVUFBRDtBQUFNLElBQUEsU0FBUztBQUFmLEtBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBRXpCLE9BQU8sQ0FBQzBCO0FBQXhCLEtBQWdDekIsWUFBWSxDQUFDd0IsU0FBN0MsQ0FESixDQS9CSixDQURKLENBREo7QUF3Q0gsQ0E1REQ7O0FBOERBM0IsS0FBSyxDQUFDNkIsU0FBTixHQUFrQjtBQUNkO0FBQ0EzQixFQUFBQSxPQUFPLEVBQUU0QixTQUFTLENBQUNDO0FBRkwsQ0FBbEI7O2VBS2Usc0JBQVdDLGtCQUFYLEVBQXdCaEMsS0FBeEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtHcmlkLCB3aXRoU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBZaWVsZFN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB5aWVsZERhdGEgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9kYXRhL3lpZWxkSlNPTlwiO1xyXG5cclxuXHJcbmNvbnN0IFlpZWxkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7Y2xhc3Nlc30gPSBwcm9wcztcclxuICAgIGNvbnN0IFt5aWVsZENvbnRlbnQsIHNldFlpZWxkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt5aWVsZFVybH0gPSBwcm9wcztcclxuICAgICAgICBpZiAoeWllbGRDb250ZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEF4aW9zLmdldCh5aWVsZFVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0WWllbGREYXRhKHlpZWxkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFlpZWxkRGF0YShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFlpZWxkRGF0YSh5aWVsZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt5aWVsZENvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW09ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7eWllbGRDb250ZW50LnRpdGxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3lpZWxkQ29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3lpZWxkQ29udGVudC5kYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZVRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YGFzIG9mICR7eWllbGRDb250ZW50LmRhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7eWllbGRDb250ZW50ICYmIHlpZWxkQ29udGVudC55aWVsZERldGFpbHMgJiYgeWllbGRDb250ZW50LnlpZWxkRGV0YWlscy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGRDb250ZW50LnlpZWxkRGV0YWlscy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBpZD17YHlpZWxkLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7aXRlbS52YWx1ZX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHt5aWVsZENvbnRlbnQgJiYgeWllbGRDb250ZW50LmxlZ2FsVGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZ2FsfT57eWllbGRDb250ZW50LmxlZ2FsVGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKVxyXG59O1xyXG5cclxuWWllbGQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqIFlpZWxkIGNvbXBvbmVudCBjc3MgY2xhc3NlcyovXHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhZaWVsZFN0eWxlcykoWWllbGQpO1xyXG5cclxuIl19