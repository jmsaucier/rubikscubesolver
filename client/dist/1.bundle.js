(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/src/components/landing.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/landing.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Rubiks_Logo = __webpack_require__(/*! ../images/Rubiks_Logo.png */ \"./client/src/images/Rubiks_Logo.png\");\n\nvar _Rubiks_Logo2 = _interopRequireDefault(_Rubiks_Logo);\n\nvar _Rubiks_Insert = __webpack_require__(/*! ../images/Rubiks_Insert.png */ \"./client/src/images/Rubiks_Insert.png\");\n\nvar _Rubiks_Insert2 = _interopRequireDefault(_Rubiks_Insert);\n\nvar _grey_brain = __webpack_require__(/*! ../images/grey_brain.png */ \"./client/src/images/grey_brain.png\");\n\nvar _grey_brain2 = _interopRequireDefault(_grey_brain);\n\nvar _smoothscroll = __webpack_require__(/*! smoothscroll */ \"./node_modules/smoothscroll/smoothscroll.js\");\n\nvar _smoothscroll2 = _interopRequireDefault(_smoothscroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RubiksLanding = function (_React$Component) {\n  _inherits(RubiksLanding, _React$Component);\n\n  function RubiksLanding(props) {\n    _classCallCheck(this, RubiksLanding);\n\n    return _possibleConstructorReturn(this, (RubiksLanding.__proto__ || Object.getPrototypeOf(RubiksLanding)).call(this, props));\n  }\n\n  _createClass(RubiksLanding, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.learnMoreDestination = document.getElementById('learn-more');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'header',\n          { className: 'header' },\n          _react2.default.createElement(\n            'div',\n            { className: 'header__logo-box' },\n            _react2.default.createElement('img', { src: _Rubiks_Logo2.default, alt: 'Logo', className: 'header__logo' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'header__text-box' },\n            _react2.default.createElement(\n              'h1',\n              { className: 'heading-primary' },\n              _react2.default.createElement(\n                'span',\n                { className: 'heading-primary--main' },\n                'Ether Cube'\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'heading-primary--sub' },\n                'Send ETH locked inside a puzzle.'\n              )\n            ),\n            _react2.default.createElement(\n              'a',\n              { href: '/', className: 'btn btn--grey btn--animated' },\n              'Just Play'\n            ),\n            _react2.default.createElement(\n              'a',\n              { href: '/', className: 'btn btn--grey btn--animated' },\n              'Set Up a Cube'\n            ),\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'a',\n                { onClick: function onClick() {\n                    (0, _smoothscroll2.default)(_this2.learnMoreDestination);\n                  }, href: 'javascript:;', className: 'btn btn--white btn--animated below' },\n                'Learn more'\n              )\n            )\n          )\n        ),\n        _react2.default.createElement('div', { className: 'u-margin-bottom-big' }),\n        _react2.default.createElement(\n          'main',\n          null,\n          _react2.default.createElement(\n            'section',\n            { className: 'section-about' },\n            _react2.default.createElement(\n              'div',\n              { className: 'u-center-text u-margin-bottom-big', id: 'learn-more' },\n              _react2.default.createElement(\n                'h2',\n                { className: 'heading-secondary' },\n                'What is an Ether Cube?'\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'row row-animated__letter u-margin-bottom-medium' },\n              _react2.default.createElement(\n                'div',\n                { className: 'col-2-of-3' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-1-of-4 u-center-text' },\n                  _react2.default.createElement(\n                    'p',\n                    { className: 'capital-letter' },\n                    '1'\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-3-of-4' },\n                  _react2.default.createElement(\n                    'h3',\n                    { className: 'heading-tertiary u-margin-bottom-small' },\n                    'A challenging puzzle with a compelling reward.'\n                  ),\n                  _react2.default.createElement(\n                    'p',\n                    { className: 'paragraph' },\n                    'This year, instead of sending a giftcard, cash or other ambigious gift to your family and friends; send a digital Rubik\\'s Cube with real value inside! Load up a small amount of ethereum and it will be stored in a Rubik\\'s cube accessible at a unique link. If they can\\'t figure it out, send them a solve code to unlock their prize. Or don\\'t! Up to you man.'\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-1-of-3' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'photo-centered' },\n                  _react2.default.createElement('img', { src: _Rubiks_Insert2.default, alt: 'photo1', className: 'photo-centered__photo' })\n                )\n              )\n            ),\n            _react2.default.createElement('div', { className: 'u-horizontal-divider u-margin-bottom-medium' }),\n            _react2.default.createElement(\n              'div',\n              { className: 'row row-animated__letter' },\n              _react2.default.createElement(\n                'div',\n                { className: 'col-2-of-3' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-1-of-4 u-center-text' },\n                  _react2.default.createElement(\n                    'p',\n                    { className: 'capital-letter' },\n                    '2'\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-3-of-4' },\n                  _react2.default.createElement(\n                    'h3',\n                    { className: 'heading-tertiary u-margin-bottom-small' },\n                    'An excellent learning opportunity.'\n                  ),\n                  _react2.default.createElement(\n                    'p',\n                    { className: 'paragraph' },\n                    'Whether you\\'re interested in learning how a Rubik\\'s cube works or you\\'re a dedicated speed-cuber; learning to solve a cube in a digital setting will help train your critical thinking skills. Want to take a deeper dive? Consider checking out the solving algorithm on Github.'\n                  ),\n                  _react2.default.createElement(\n                    'a',\n                    { href: 'https://github.com/rogersanick/rubikscubesolver', className: 'btn-text' },\n                    ' Learn more on GitHub \\u2192'\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-1-of-3' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'photo-centered' },\n                  _react2.default.createElement('img', { src: _grey_brain2.default, alt: 'photo2', className: 'photo-centered__photo' })\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'section',\n            { className: 'section-UX' },\n            _react2.default.createElement(\n              'div',\n              { className: 'u-center-text u-margin-top-big' },\n              _react2.default.createElement(\n                'a',\n                { href: '/visualize', className: 'btn btn--white' },\n                'Just Play'\n              ),\n              _react2.default.createElement(\n                'a',\n                { href: '/create', className: 'btn btn--white' },\n                'Load Up a Cube'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return RubiksLanding;\n}(_react2.default.Component);\n\nexports.default = RubiksLanding;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGFuZGluZy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9jb21wb25lbnRzL2xhbmRpbmcuanN4P2IwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2dvIGZyb20nLi4vaW1hZ2VzL1J1Ymlrc19Mb2dvLnBuZyc7XG5pbXBvcnQgcGhvdG8xIGZyb20nLi4vaW1hZ2VzL1J1Ymlrc19JbnNlcnQucG5nJztcbmltcG9ydCBwaG90bzIgZnJvbScuLi9pbWFnZXMvZ3JleV9icmFpbi5wbmcnO1xuaW1wb3J0IHNtb290aFNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwnXG5cbmNsYXNzIFJ1Ymlrc0xhbmRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubGVhcm5Nb3JlRGVzdGluYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhcm4tbW9yZScpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190ZXh0LWJveFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLW1haW5cIj5FdGhlciBDdWJlPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLXByaW1hcnktLXN1YlwiPlNlbmQgRVRIIGxvY2tlZCBpbnNpZGUgYSBwdXp6bGUuPC9zcGFuPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZ3JleSBidG4tLWFuaW1hdGVkXCI+SnVzdCBQbGF5PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidG4gYnRuLS1ncmV5IGJ0bi0tYW5pbWF0ZWRcIj5TZXQgVXAgYSBDdWJlPC9hPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgb25DbGljayA9IHsoKSA9PiB7c21vb3RoU2Nyb2xsKHRoaXMubGVhcm5Nb3JlRGVzdGluYXRpb24pfX0gaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cImJ0biBidG4tLXdoaXRlIGJ0bi0tYW5pbWF0ZWQgYmVsb3dcIj5MZWFybiBtb3JlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1tYXJnaW4tYm90dG9tLWJpZ1wiPjwvZGl2PlxuXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1jZW50ZXItdGV4dCB1LW1hcmdpbi1ib3R0b20tYmlnXCIgaWQgPSBcImxlYXJuLW1vcmVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgV2hhdCBpcyBhbiBFdGhlciBDdWJlP1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWFuaW1hdGVkX19sZXR0ZXIgdS1tYXJnaW4tYm90dG9tLW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yLW9mLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xLW9mLTQgdS1jZW50ZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FwaXRhbC1sZXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMy1vZi00XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGluZy10ZXJ0aWFyeSB1LW1hcmdpbi1ib3R0b20tc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgQSBjaGFsbGVuZ2luZyBwdXp6bGUgd2l0aCBhIGNvbXBlbGxpbmcgcmV3YXJkLlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICBUaGlzIHllYXIsIGluc3RlYWQgb2Ygc2VuZGluZyBhIGdpZnRjYXJkLCBjYXNoIG9yIG90aGVyIGFtYmlnaW91cyBnaWZ0IHRvIHlvdXIgZmFtaWx5IGFuZCBmcmllbmRzOyBzZW5kIGEgZGlnaXRhbCBSdWJpaydzIEN1YmUgd2l0aCByZWFsIHZhbHVlIGluc2lkZSEgTG9hZCB1cCBhIHNtYWxsIGFtb3VudCBvZiBldGhlcmV1bSBhbmQgaXQgd2lsbCBiZSBzdG9yZWQgaW4gYSBSdWJpaydzIGN1YmUgYWNjZXNzaWJsZSBhdCBhIHVuaXF1ZSBsaW5rLiBJZiB0aGV5IGNhbid0IGZpZ3VyZSBpdCBvdXQsIHNlbmQgdGhlbSBhIHNvbHZlIGNvZGUgdG8gdW5sb2NrIHRoZWlyIHByaXplLiBPciBkb24ndCEgVXAgdG8geW91IG1hbi4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMS1vZi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90by1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bob3RvMX0gYWx0PVwicGhvdG8xXCIgY2xhc3NOYW1lPVwicGhvdG8tY2VudGVyZWRfX3Bob3RvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWhvcml6b250YWwtZGl2aWRlciB1LW1hcmdpbi1ib3R0b20tbWVkaXVtXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1hbmltYXRlZF9fbGV0dGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yLW9mLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMS1vZi00IHUtY2VudGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXBpdGFsLWxldHRlclwiPlxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMy1vZi00XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmctdGVydGlhcnkgdS1tYXJnaW4tYm90dG9tLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICBBbiBleGNlbGxlbnQgbGVhcm5pbmcgb3Bwb3J0dW5pdHkuXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgICAgIFdoZXRoZXIgeW91J3JlIGludGVyZXN0ZWQgaW4gbGVhcm5pbmcgaG93IGEgUnViaWsncyBjdWJlIHdvcmtzIG9yIHlvdSdyZSBhIGRlZGljYXRlZCBzcGVlZC1jdWJlcjsgbGVhcm5pbmcgdG8gc29sdmUgYSBjdWJlIGluIGEgZGlnaXRhbCBzZXR0aW5nIHdpbGwgaGVscCB0cmFpbiB5b3VyIGNyaXRpY2FsIHRoaW5raW5nIHNraWxscy4gV2FudCB0byB0YWtlIGEgZGVlcGVyIGRpdmU/IENvbnNpZGVyIGNoZWNraW5nIG91dCB0aGUgc29sdmluZyBhbGdvcml0aG0gb24gR2l0aHViLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JvZ2Vyc2FuaWNrL3J1Ymlrc2N1YmVzb2x2ZXJcIiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPiBMZWFybiBtb3JlIG9uIEdpdEh1YiAmcmFycjs8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEtb2YtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaG90bzJ9IGFsdD1cInBob3RvMlwiIGNsYXNzTmFtZT1cInBob3RvLWNlbnRlcmVkX19waG90b1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1VWFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInUtY2VudGVyLXRleHQgdS1tYXJnaW4tdG9wLWJpZ1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3Zpc3VhbGl6ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tLXdoaXRlXCI+SnVzdCBQbGF5PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2NyZWF0ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tLXdoaXRlXCI+TG9hZCBVcCBhIEN1YmU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdWJpa3NMYW5kaW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFQQTtBQUpBO0FBaUJBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVBBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQWxCQTtBQXlCQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBUEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBbkJBO0FBbkNBO0FBOERBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQS9EQTtBQXBCQTtBQThGQTs7OztBQXpHQTtBQUNBO0FBMkdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/landing.jsx\n");

/***/ }),

/***/ "./client/src/images/Rubiks_Insert.png":
/*!*********************************************!*\
  !*** ./client/src/images/Rubiks_Insert.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"36a720eccf10ecaa681b514e12aefbd0.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2ltYWdlcy9SdWJpa3NfSW5zZXJ0LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW1hZ2VzL1J1Ymlrc19JbnNlcnQucG5nP2NiODAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzZhNzIwZWNjZjEwZWNhYTY4MWI1MTRlMTJhZWZiZDAucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/images/Rubiks_Insert.png\n");

/***/ }),

/***/ "./client/src/images/Rubiks_Logo.png":
/*!*******************************************!*\
  !*** ./client/src/images/Rubiks_Logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"822486723a0a391b387abbe4f6a79188.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2ltYWdlcy9SdWJpa3NfTG9nby5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2ltYWdlcy9SdWJpa3NfTG9nby5wbmc/NDM1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MjI0ODY3MjNhMGEzOTFiMzg3YWJiZTRmNmE3OTE4OC5wbmdcIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/images/Rubiks_Logo.png\n");

/***/ }),

/***/ "./client/src/images/grey_brain.png":
/*!******************************************!*\
  !*** ./client/src/images/grey_brain.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"044733ada982869bc45f5e830702eaa0.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2ltYWdlcy9ncmV5X2JyYWluLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW1hZ2VzL2dyZXlfYnJhaW4ucG5nPzdmYmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDQ0NzMzYWRhOTgyODY5YmM0NWY1ZTgzMDcwMmVhYTAucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/images/grey_brain.png\n");

/***/ }),

/***/ "./node_modules/smoothscroll/smoothscroll.js":
/*!***************************************************!*\
  !*** ./node_modules/smoothscroll/smoothscroll.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, smoothScroll) {\n  'use strict';\n\n  // Support RequireJS and CommonJS/NodeJS module formats.\n  // Attach smoothScroll to the `window` when executed as a <script>.\n\n  // RequireJS\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (smoothScroll),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n  // CommonJS\n  } else {}\n\n})(this, function(){\n'use strict';\n\n// Do not initialize smoothScroll when running server side, handle it in client:\nif (typeof window !== 'object') return;\n\n// We do not want this script to be applied in browsers that do not support those\n// That means no smoothscroll on IE9 and below.\nif(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }\n\n// Get the top position of an element in the document\nvar getTop = function(element, start) {\n    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset\n    if(element.nodeName === 'HTML') return -start\n    return element.getBoundingClientRect().top + start\n}\n// ease in out function thanks to:\n// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/\nvar easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }\n\n// calculate the scroll position we should be in\n// given the start and end point of the scroll\n// the time elapsed from the beginning of the scroll\n// and the total duration of the scroll (default 500ms)\nvar position = function(start, end, elapsed, duration) {\n    if (elapsed > duration) return end;\n    return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there\n    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll\n}\n\n// we use requestAnimationFrame to be called by the browser before every repaint\n// if the first argument is an element then scroll to the top of this element\n// if the first argument is numeric then scroll to this location\n// if the callback exist, it is called when the scrolling is finished\n// if context is set then scroll that element, else scroll window\nvar smoothScroll = function(el, duration, callback, context){\n    duration = duration || 500;\n    context = context || window;\n    var start = context.scrollTop || window.pageYOffset;\n\n    if (typeof el === 'number') {\n      var end = parseInt(el);\n    } else {\n      var end = getTop(el, start);\n    }\n\n    var clock = Date.now();\n    var requestAnimationFrame = window.requestAnimationFrame ||\n        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||\n        function(fn){window.setTimeout(fn, 15);};\n\n    var step = function(){\n        var elapsed = Date.now() - clock;\n        if (context !== window) {\n          context.scrollTop = position(start, end, elapsed, duration);\n        }\n        else {\n          window.scroll(0, position(start, end, elapsed, duration));\n        }\n\n        if (elapsed > duration) {\n            if (typeof callback === 'function') {\n                callback(el);\n            }\n        } else {\n            requestAnimationFrame(step);\n        }\n    }\n    step();\n}\n\nvar linkHandler = function(ev) {\n    if (!ev.defaultPrevented) {\n        ev.preventDefault();\n\n        if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)\n        // using the history api to solve issue #1 - back doesn't work\n        // most browser don't update :target when the history api is used:\n        // THIS IS A BUG FROM THE BROWSERS.\n        // change the scrolling duration in this call\n        var node = document.getElementById(this.hash.substring(1))\n        if (!node) return; // Do not scroll to non-existing node\n\n        smoothScroll(node, 500, function (el) {\n            location.replace('#' + el.id)\n            // this will cause the :target to be activated.\n        });\n    }\n}\n\n// We look for all the internal links in the documents and attach the smoothscroll function\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var internal = document.querySelectorAll('a[href^=\"#\"]:not([href=\"#\"])'), a;\n    for(var i=internal.length; a=internal[--i];){\n        a.addEventListener(\"click\", linkHandler, false);\n    }\n});\n\n// return smoothscroll API\nreturn smoothScroll;\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc21vb3Roc2Nyb2xsL3Ntb290aHNjcm9sbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbW9vdGhzY3JvbGwvc21vb3Roc2Nyb2xsLmpzPzc0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChyb290LCBzbW9vdGhTY3JvbGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFN1cHBvcnQgUmVxdWlyZUpTIGFuZCBDb21tb25KUy9Ob2RlSlMgbW9kdWxlIGZvcm1hdHMuXG4gIC8vIEF0dGFjaCBzbW9vdGhTY3JvbGwgdG8gdGhlIGB3aW5kb3dgIHdoZW4gZXhlY3V0ZWQgYXMgYSA8c2NyaXB0Pi5cblxuICAvLyBSZXF1aXJlSlNcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShzbW9vdGhTY3JvbGwpO1xuXG4gIC8vIENvbW1vbkpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzbW9vdGhTY3JvbGwoKTtcblxuICB9IGVsc2Uge1xuICAgIHJvb3Quc21vb3RoU2Nyb2xsID0gc21vb3RoU2Nyb2xsKCk7XG4gIH1cblxufSkodGhpcywgZnVuY3Rpb24oKXtcbid1c2Ugc3RyaWN0JztcblxuLy8gRG8gbm90IGluaXRpYWxpemUgc21vb3RoU2Nyb2xsIHdoZW4gcnVubmluZyBzZXJ2ZXIgc2lkZSwgaGFuZGxlIGl0IGluIGNsaWVudDpcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuXG4vLyBXZSBkbyBub3Qgd2FudCB0aGlzIHNjcmlwdCB0byBiZSBhcHBsaWVkIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgdGhvc2Vcbi8vIFRoYXQgbWVhbnMgbm8gc21vb3Roc2Nyb2xsIG9uIElFOSBhbmQgYmVsb3cuXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsID09PSB2b2lkIDAgfHwgd2luZG93LnBhZ2VZT2Zmc2V0ID09PSB2b2lkIDAgfHwgaGlzdG9yeS5wdXNoU3RhdGUgPT09IHZvaWQgMCkgeyByZXR1cm47IH1cblxuLy8gR2V0IHRoZSB0b3AgcG9zaXRpb24gb2YgYW4gZWxlbWVudCBpbiB0aGUgZG9jdW1lbnRcbnZhciBnZXRUb3AgPSBmdW5jdGlvbihlbGVtZW50LCBzdGFydCkge1xuICAgIC8vIHJldHVybiB2YWx1ZSBvZiBodG1sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAuLi4gSUUgOiAwLCBvdGhlciBicm93c2VycyA6IC1wYWdlWU9mZnNldFxuICAgIGlmKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykgcmV0dXJuIC1zdGFydFxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHN0YXJ0XG59XG4vLyBlYXNlIGluIG91dCBmdW5jdGlvbiB0aGFua3MgdG86XG4vLyBodHRwOi8vYmxvZy5ncmV3ZWIuZnIvMjAxMi8wMi9iZXppZXItY3VydmUtYmFzZWQtZWFzaW5nLWZ1bmN0aW9ucy1mcm9tLWNvbmNlcHQtdG8taW1wbGVtZW50YXRpb24vXG52YXIgZWFzZUluT3V0Q3ViaWMgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDwuNSA/IDQqdCp0KnQgOiAodC0xKSooMip0LTIpKigyKnQtMikrMSB9XG5cbi8vIGNhbGN1bGF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIHdlIHNob3VsZCBiZSBpblxuLy8gZ2l2ZW4gdGhlIHN0YXJ0IGFuZCBlbmQgcG9pbnQgb2YgdGhlIHNjcm9sbFxuLy8gdGhlIHRpbWUgZWxhcHNlZCBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNjcm9sbFxuLy8gYW5kIHRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIChkZWZhdWx0IDUwMG1zKVxudmFyIHBvc2l0aW9uID0gZnVuY3Rpb24oc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24pIHtcbiAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSByZXR1cm4gZW5kO1xuICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBlYXNlSW5PdXRDdWJpYyhlbGFwc2VkIC8gZHVyYXRpb24pOyAvLyA8LS0geW91IGNhbiBjaGFuZ2UgdGhlIGVhc2luZyBmdW50aW9uIHRoZXJlXG4gICAgLy8gcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIChlbGFwc2VkIC8gZHVyYXRpb24pOyAvLyA8LS0gdGhpcyB3b3VsZCBnaXZlIGEgbGluZWFyIHNjcm9sbFxufVxuXG4vLyB3ZSB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIGJlIGNhbGxlZCBieSB0aGUgYnJvd3NlciBiZWZvcmUgZXZlcnkgcmVwYWludFxuLy8gaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGFuIGVsZW1lbnQgdGhlbiBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGlzIGVsZW1lbnRcbi8vIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBudW1lcmljIHRoZW4gc2Nyb2xsIHRvIHRoaXMgbG9jYXRpb25cbi8vIGlmIHRoZSBjYWxsYmFjayBleGlzdCwgaXQgaXMgY2FsbGVkIHdoZW4gdGhlIHNjcm9sbGluZyBpcyBmaW5pc2hlZFxuLy8gaWYgY29udGV4dCBpcyBzZXQgdGhlbiBzY3JvbGwgdGhhdCBlbGVtZW50LCBlbHNlIHNjcm9sbCB3aW5kb3dcbnZhciBzbW9vdGhTY3JvbGwgPSBmdW5jdGlvbihlbCwgZHVyYXRpb24sIGNhbGxiYWNrLCBjb250ZXh0KXtcbiAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDUwMDtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB3aW5kb3c7XG4gICAgdmFyIHN0YXJ0ID0gY29udGV4dC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbmQgPSBnZXRUb3AoZWwsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICB2YXIgY2xvY2sgPSBEYXRlLm5vdygpO1xuICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICBmdW5jdGlvbihmbil7d2luZG93LnNldFRpbWVvdXQoZm4sIDE1KTt9O1xuXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBjbG9jaztcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHdpbmRvdykge1xuICAgICAgICAgIGNvbnRleHQuc2Nyb2xsVG9wID0gcG9zaXRpb24oc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgcG9zaXRpb24oc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RlcCgpO1xufVxuXG52YXIgbGlua0hhbmRsZXIgPSBmdW5jdGlvbihldikge1xuICAgIGlmICghZXYuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbi5oYXNoICE9PSB0aGlzLmhhc2gpIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLmhhc2gpXG4gICAgICAgIC8vIHVzaW5nIHRoZSBoaXN0b3J5IGFwaSB0byBzb2x2ZSBpc3N1ZSAjMSAtIGJhY2sgZG9lc24ndCB3b3JrXG4gICAgICAgIC8vIG1vc3QgYnJvd3NlciBkb24ndCB1cGRhdGUgOnRhcmdldCB3aGVuIHRoZSBoaXN0b3J5IGFwaSBpcyB1c2VkOlxuICAgICAgICAvLyBUSElTIElTIEEgQlVHIEZST00gVEhFIEJST1dTRVJTLlxuICAgICAgICAvLyBjaGFuZ2UgdGhlIHNjcm9sbGluZyBkdXJhdGlvbiBpbiB0aGlzIGNhbGxcbiAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmhhc2guc3Vic3RyaW5nKDEpKVxuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjsgLy8gRG8gbm90IHNjcm9sbCB0byBub24tZXhpc3Rpbmcgbm9kZVxuXG4gICAgICAgIHNtb290aFNjcm9sbChub2RlLCA1MDAsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnIycgKyBlbC5pZClcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjYXVzZSB0aGUgOnRhcmdldCB0byBiZSBhY3RpdmF0ZWQuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gV2UgbG9vayBmb3IgYWxsIHRoZSBpbnRlcm5hbCBsaW5rcyBpbiB0aGUgZG9jdW1lbnRzIGFuZCBhdHRhY2ggdGhlIHNtb290aHNjcm9sbCBmdW5jdGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnRlcm5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJyksIGE7XG4gICAgZm9yKHZhciBpPWludGVybmFsLmxlbmd0aDsgYT1pbnRlcm5hbFstLWldOyl7XG4gICAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpbmtIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxufSk7XG5cbi8vIHJldHVybiBzbW9vdGhzY3JvbGwgQVBJXG5yZXR1cm4gc21vb3RoU2Nyb2xsO1xuXG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsV0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/smoothscroll/smoothscroll.js\n");

/***/ })

}]);