var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import './TreeView.css';
var TreeView = function (_a) {
    var data = _a.data, _b = _a.ulClassName, ulClassName = _b === void 0 ? 'tree-view-list' : _b, _c = _a.liClassName, liClassName = _c === void 0 ? 'tree-view-node' : _c, _d = _a.collapsedIcon, collapsedIcon = _d === void 0 ? '►' : _d, _e = _a.notCollapsedIcon, notCollapsedIcon = _e === void 0 ? '▼' : _e, onNodeSelect = _a.onNodeSelect;
    var _f = useState(new Set()), expandedNodes = _f[0], setExpandedNodes = _f[1];
    var _g = useState(null), selectedNode = _g[0], setSelectedNode = _g[1];
    var toggleNode = function (id) {
        setExpandedNodes(function (prev) {
            var newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
        });
    };
    var handleNodeClick = function (node) {
        setSelectedNode(node);
        onNodeSelect === null || onNodeSelect === void 0 ? void 0 : onNodeSelect(node);
    };
    var renderTree = function (nodes) { return (_jsx("div", __assign({ className: ulClassName }, { children: nodes.map(function (node) { return (_jsxs(React.Fragment, { children: [_jsxs("div", __assign({ className: "".concat(liClassName, " ").concat((selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.id) === node.id && 'selected', " ").concat((node === null || node === void 0 ? void 0 : node.disabled) && 'disable-element'), onClick: function () { return handleNodeClick(node); } }, { children: [node.children && (_jsx("span", __assign({ className: "tree-view-toggle ".concat(expandedNodes.has(node.id) && 'expanded'), onClick: function (e) {
                                e.stopPropagation();
                                toggleNode(node.id);
                            } }, { children: expandedNodes.has(node.id) ? "".concat(notCollapsedIcon) : "".concat(collapsedIcon) }))), node.label] })), node.children && expandedNodes.has(node.id) && (_jsx("div", __assign({ className: "tree-view-children" }, { children: renderTree(node.children) })))] }, node.id)); }) }))); };
    return _jsx("div", __assign({ className: "tree-view-container" }, { children: renderTree(data) }));
};
export default TreeView;
