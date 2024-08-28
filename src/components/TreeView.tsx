import React, { useState } from 'react';
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

const TreeView: React.FC<TreeViewProps> = ({
    data,
    ulClassName = 'tree-view-list',
    liClassName = 'tree-view-node',
    collapsedIcon = '►',
    notCollapsedIcon = '▼',
    onNodeSelect,

}) => {
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
    const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

    const toggleNode = (id: string) => {
        setExpandedNodes((prev) => {
            const newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
        });
    };

    const handleNodeClick = (node: TreeNode) => {
        setSelectedNode(node);
        onNodeSelect?.(node);
    };

    const renderTree = (nodes: TreeNode[]) => (
        <div className={ulClassName}>
            {nodes.map((node) => (
                <React.Fragment key={node.id}>
                    <div
                        className={`${liClassName} ${selectedNode?.id === node.id && 'selected'} ${node?.disabled && 'disable-element'}`}
                        onClick={() => handleNodeClick(node)}
                    >
                        {node.children && (
                            <span
                                className={`tree-view-toggle ${expandedNodes.has(node.id) && 'expanded'}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleNode(node.id);
                                }}
                            >
                                {expandedNodes.has(node.id) ? `${notCollapsedIcon}` : `${collapsedIcon}`}
                            </span>
                        )}
                        {node.label}
                    </div>
                    {node.children && expandedNodes.has(node.id) && (
                        <div className="tree-view-children">{renderTree(node.children)}</div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );

    return <div className="tree-view-container">{renderTree(data)}</div>;
};

export default TreeView;
