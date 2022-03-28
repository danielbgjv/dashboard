import React from "react";
import styles from "../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';

//data for bar chart
const data = {
    labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ],
    datasets: [
        {
            label: "Transações / mês",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [500000, 650000, 750000, 1200000, 1500000, 2000000, 2200000, 2500000, 3000000, 4000000, 5000000, 6000000],
        },
    ],
};

//doughnut chart data set

const data1 = {
    labels: ["Organic", "Social Media", "Websites"],
    datasets: [
        {
            data: [300, 50, 500],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
    ],
};

function Content() {
    return (
        <div className={styles.contentcontainer}>
            <div className={styles.contentwrapper}>
                <div className={styles.tabs}>
                    <div className={styles.categories}>
                        <h2>Tribunais</h2>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={styles.categories}>
                        <h2>Construtoras</h2>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={styles.categories}>
                        <h2>Usuários</h2>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={styles.categories}>
                        <h2>Projetos</h2>
                    </div>
                </div>
            </div>
            {/* chart started  */}
            <div className={styles.charts}>
                <div className={styles.bar}>
                    <h2>Transações</h2>
                    <Line data={data} width={400} height={400} />
                </div>
                <div className={styles.circle}>
                    <h2>Novos Usuários</h2>
                    <Doughnut data={data1} width={400} height={400} />
                </div>
            </div>
        </div>
    );
}

export default Content;