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
import { useState } from 'react';
import TreeView from './components/TreeView';
var treeData = [
    {
        id: '49da57b8-4104-43a4-ac36-7bb4ca28378b',
        label: 'Parent 1',
        disabled: false,
        children: [
            { id: 'f7c4512e-5a80-4d3a-b141-9b526635e34c', label: 'Child 1-1' },
            { id: 'a1bf2b62-f9c2-4095-aafe-8140e5b63f2d', label: 'Child 1-2' },
        ],
    },
    {
        id: '3f0cce85-0256-49fb-a2e3-df75d70fbd19',
        label: 'Parent 2',
        disabled: true,
        children: [
            {
                id: '81c99b34-765a-4899-a688-2d7b4a88cf92',
                label: 'Child 2-1',
                children: [{ id: 'ddb23ebe-8df0-48c9-83a8-8bd68aa46514', label: 'Child 2-1-1' }],
            },
        ],
    },
];
var App = function () {
    var _a = useState(null), selectedNode = _a[0], setSelectedNode = _a[1];
    var handleNodeSelect = function (node) {
        setSelectedNode(node);
    };
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx("h1", { children: "TreeView Component Demo" }), _jsx("div", __assign({ style: { width: '20%' } }, { children: _jsx(TreeView, { data: treeData, onNodeSelect: handleNodeSelect }) }))] })));
};
export default App;
