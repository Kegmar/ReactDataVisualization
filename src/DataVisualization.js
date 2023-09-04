import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const DataVisualization = ({data}) => {
    if (!data || data.length === 0) return <p>No image data</p>;

    return (
        <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey={Object.keys(data[0])[1]} stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={Object.keys(data[0])[0]} />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default DataVisualization;