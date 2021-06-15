import { LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip ,
    ResponsiveContainer
} from 'recharts';

const Chart = ({ name, data })=> {

    return (
        <div className="chart">
            <h2>{name.split('_').map(i=>i.replace(i[0], i[0].toLocaleUpperCase())).join(' ')}</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone"
                          dataKey={name}
                          stroke="#3A80BA"
                          strokeWidth={4}
                    />
                    <CartesianGrid
                        stroke="#ccc" strokeDasharray="1 0"
                    />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="clicks"/>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
};

export default Chart;