import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
// import './Donut.css';
const data = [
    { name: 'A', value: 15, },
    { name: 'B', value: 20, },
    { name: 'C', value: 25,}
  ];
const Donut = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 180;
    const height = 180;
    // const radius = Math.min(width, height) / 2;

    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);

    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value((d) => d.value);

    // Calculate the total sum of values
    const totalValue = d3.sum(data, (d) => d.value);

    // Calculate inner and outer radii based on the data values
    const radiusScale = d3
      .scaleLinear()
      .domain([0, totalValue])
      .range([40, 70]); // Adjust the range for inner and outer radii as needed

    // Create gradients for each color
    const grayGradient = g
      .append('defs')
      .append('linearGradient')
      .attr('id', 'gray-gradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '0%');

    grayGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('style', 'stop-color: #F1EFFC; stop-opacity: 1');

    grayGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('style', 'stop-color: #F1EFFC; stop-opacity: 1');

    const purpleGradient = g
      .append('defs')
      .append('linearGradient')
      .attr('id', 'purple-gradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '0%');

    purpleGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('style', 'stop-color: #B27CEC; stop-opacity: 1');

    purpleGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('style', 'stop-color: #6D44EA; stop-opacity: 1');

    const pinkGradient = g
      .append('defs')
      .append('linearGradient')
      .attr('id', 'pink-gradient')
      .attr('x1', '100%')
      .attr('x2', '0%')
      .attr('y1', '0%')
      .attr('y2', '0%');

    pinkGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('style', 'stop-color: #fc7cbc; stop-opacity: 1');

    pinkGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('style', 'stop-color: #EE51A5; stop-opacity: 1');

    const arc = d3
      .arc()
      .innerRadius((d) => radiusScale(40 + d.value))
      .outerRadius((d) => radiusScale(40 - d.value));

    const colors = (d, i) => {
      if (i === 0) return 'url(#gray-gradient)';
      if (i === 1) return 'url(#purple-gradient)';
      if (i === 2) return 'url(#pink-gradient)';
    };

    const arcs = g
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .style('fill', colors);
  }, [data]);

  return <svg ref={svgRef} />;
};

export default Donut;