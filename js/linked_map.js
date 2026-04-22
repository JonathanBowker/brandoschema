console.log("linked_map.js loaded");
document.addEventListener('DOMContentLoaded', function () {
    const svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    const margin = { top: 20, right: 120, bottom: 20, left: 120 },
        treeWidth = width - margin.right - margin.left,
        treeHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const treeLayout = d3.tree().size([treeHeight, treeWidth]);

    // Tooltip div with pointer-events enabled for the link
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("pointer-events", "auto");  // Enable pointer-events to make link clickable

    let i = 0;
    let duration = 750;
    let tooltipLocked = false;  // Flag to keep track of whether the tooltip is locked (i.e., clicked)

    // Load the JSON data
    d3.json("data/brando-schema.json").then(function (data) {
        const root = d3.hierarchy(data, d => d.children);
        root.x0 = treeHeight / 2;
        root.y0 = 0;

        // Collapse all children initially
        root.children.forEach(collapse);

        update(root);

        // Collapse the node and all its children
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        function update(source) {
            const treeData = treeLayout(root);

            const nodes = treeData.descendants(),
                links = treeData.links();

            nodes.forEach(d => d.y = d.depth * 180);

            // Nodes
            const node = g.selectAll('.node')
                .data(nodes, d => d.id || (d.id = ++i));

            const nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr('id', d => `node-${d.id}`)  // Assign unique ID to each node
                .attr('transform', d => `translate(${source.y0},${source.x0})`)
                .on('click', function (event, d) {
                    if (d.data.url) {
                        tooltipLocked = !tooltipLocked; // Toggle tooltip lock on click
                    }
                    click(event, d);
                })
                .on('mouseover', function (event, d) {
                    if (!tooltipLocked && d.data.url) {  // Only show tooltip if it's not locked
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
                        tooltip.html(`<strong>${d.data.name}</strong><br/><a href="${d.data.url}" target="_blank" style="color: #00f; text-decoration: underline;">${d.data.url}</a>`)
                            .style("left", (event.pageX + 15) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    }
                })
                .on('mouseout', function () {
                    if (!tooltipLocked) {  // Only hide the tooltip if it's not locked
                        tooltip.transition()
                            .duration(500)
                            .style("opacity", 0);
                    }
                });

            // Add circles to nodes with smaller size
            nodeEnter.append('circle')
                .attr('r', 7) // Reduced circle radius
                .style('fill', d => d._children ? 'purple' : '#fff');

            // Add labels to nodes with more spacing
            nodeEnter.append('text')
                .attr('dy', '.35em')
                .attr('x', d => d.children || d._children ? -18 : 18) // Increased space between circle and label
                .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
                .text(d => d.data.name);

            const nodeUpdate = nodeEnter.merge(node);

            // Smooth transition for nodes
            nodeUpdate.transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('transform', d => `translate(${d.y},${d.x})`);

            nodeUpdate.select('circle')
                .attr('r', 7) // Keep reduced circle size
                .style('fill', d => d._children ? 'purple' : '#fff');

            const nodeExit = node.exit().transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('transform', d => `translate(${source.y},${source.x})`)
                .remove();

            nodeExit.select('circle')
                .attr('r', 1e-6);

            nodeExit.select('text')
                .style('fill-opacity', 1e-6);

            // Links
            const link = g.selectAll('.link')
                .data(links, d => d.target.id);

            const linkEnter = link.enter().insert('path', 'g')
                .attr('class', 'link')
                .attr('d', d => {
                    const o = { x: source.x0, y: source.y0 };
                    return diagonal(o, o);
                });

            const linkUpdate = linkEnter.merge(link);

            linkUpdate.transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('d', d => diagonal(d.source, d.target));

            link.exit().transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('d', d => {
                    const o = { x: source.x, y: source.y };
                    return diagonal(o, o);
                })
                .remove();

            nodes.forEach(d => {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            // Creates a curved (diagonal) path from parent to child nodes
            function diagonal(s, d) {
                return `M ${s.y} ${s.x}
                        C ${(s.y + d.y) / 2} ${s.x},
                          ${(s.y + d.y) / 2} ${d.x},
                          ${d.y} ${d.x}`;
            }

            // Toggle children on click, collapse siblings, and fade other nodes
            function click(event, d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    // Collapse siblings at the same depth level
                    if (d.parent) {
                        d.parent.children.forEach(function (sibling) {
                            if (sibling !== d && sibling.children) {
                                sibling._children = sibling.children;
                                sibling.children = null;
                            }
                        });
                    }
                    d.children = d._children;
                    d._children = null;
                }

                // Fade all nodes except the clicked node and its descendants
                g.selectAll('.node')
                    .transition()
                    .duration(500)
                    .style('opacity', 0.1); // Fade all nodes to 10% opacity

                d3.select(this)
                    .transition()
                    .duration(500)
                    .style('opacity', 1); // Keep clicked node at full opacity

                // Show ancestors and descendants at full opacity
                fadeToFullOpacity(d);
                update(d);
            }

            // Function to fade ancestors and descendants to full opacity
            function fadeToFullOpacity(d) {
                // Fade ancestors
                let current = d;
                while (current) {
                    d3.select(`#node-${current.id}`)
                        .transition()
                        .duration(500)
                        .style('opacity', 1); // Full opacity for ancestors
                    current = current.parent;
                }

                // Fade descendants
                if (d.children || d._children) {
                    (d.children || d._children).forEach(child => {
                        d3.select(`#node-${child.id}`)
                            .transition()
                            .duration(500)
                            .style('opacity', 1); // Full opacity for descendants
                        fadeToFullOpacity(child); // Recursively fade descendants
                    });
                }
            }

            // Close the tooltip when clicking outside
            d3.select("body").on("click", function (event) {
                const isNodeClicked = event.target.closest('.node');
                if (!isNodeClicked && tooltipLocked) {
                    tooltipLocked = false; // Unlock tooltip
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0); // Hide tooltip
                }
            });

        }
    }).catch(function (error) {
        console.error("Error loading the JSON data:", error);
    });
});
