import { Chart, registerables } from "chart.js"
import { Line } from "react-chartjs-2"

Chart.register(...registerables)

const Graph = (props) => {
    const date = props.data[0]
    const avg_price = props.data[1]

    const labels = date
    const data = {
        labels: labels,
        datasets: [
            {
                data: avg_price,
                backgroundColor: 'rgb(247, 143, 110)',
                borderColor: 'rgb(247, 143, 110)',
            },
        ],
    }

    const options = {
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { display: false },
            y: {
              position: 'right',
              min: 0
            }
        },
    }

    return (
        <Line height={300} width={560} data={data} options={options} />
    )
}

export default Graph
