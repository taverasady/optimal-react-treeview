import React from 'react';
import './TreeView.css';
interface TreeNode {
    id: string;
    label: string;
    disabled?: boolean;
    children?: TreeNode[];
    collapsedIcon?: string | React.ReactElement;
    notCollapsedIcon?: string | React.ReactElement;
}
interface TreeViewProps {
    data: TreeNode[];
    ulClassName?: string;
    liClassName?: string;
    onNodeSelect?: (node: TreeNode) => void;
    collapsedIcon?: string | React.ReactElement;
    notCollapsedIcon?: string | React.ReactElement;
}
declare const TreeView: React.FC<TreeViewProps>;
export default TreeView;
