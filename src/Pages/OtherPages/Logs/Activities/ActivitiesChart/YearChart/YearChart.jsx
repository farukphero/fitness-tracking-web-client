import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const YearChart = ({ data, focus, setTotal }) => {
  const { user } = useContext(AuthContext);

  const janLastDate = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDate())
  );

  const decLastDate = new Date(janLastDate).setDate(
    janLastDate.getDate() - janLastDate.getDate()
  );

  const novLastDate = new Date(decLastDate).setDate(
    new Date(decLastDate).getDate() - new Date(decLastDate).getDate()
  );

  const octLastDate = new Date(novLastDate).setDate(
    new Date(novLastDate).getDate() - new Date(novLastDate).getDate()
  );

  const sepLastDate = new Date(octLastDate).setDate(
    new Date(octLastDate).getDate() - new Date(octLastDate).getDate()
  );

  const augLastDate = new Date(sepLastDate).setDate(
    new Date(sepLastDate).getDate() - new Date(sepLastDate).getDate()
  );

  const julLastDate = new Date(augLastDate).setDate(
    new Date(augLastDate).getDate() - new Date(augLastDate).getDate()
  );

  const junLastDate = new Date(julLastDate).setDate(
    new Date(julLastDate).getDate() - new Date(julLastDate).getDate()
  );

  const mayLastDate = new Date(junLastDate).setDate(
    new Date(junLastDate).getDate() - new Date(junLastDate).getDate()
  );

  const aprLastDate = new Date(mayLastDate).setDate(
    new Date(mayLastDate).getDate() - new Date(mayLastDate).getDate()
  );

  const marLastDate = new Date(aprLastDate).setDate(
    new Date(aprLastDate).getDate() - new Date(aprLastDate).getDate()
  );

  const febLastDate = new Date(marLastDate).setDate(
    new Date(marLastDate).getDate() - new Date(marLastDate).getDate()
  );

  const myData = [
    {
      name: format(new Date(janLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(janLastDate).toISOString().slice(8, 10));
          i >=
          new Date(decLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(janLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(decLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(decLastDate).toISOString().slice(8, 10));
          i >=
          new Date(novLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(decLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(octLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(octLastDate).toISOString().slice(8, 10));
          i >=
          new Date(sepLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(octLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(sepLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(sepLastDate).toISOString().slice(8, 10));
          i >=
          new Date(augLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(sepLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(augLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(augLastDate).toISOString().slice(8, 10));
          i >=
          new Date(julLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(augLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(julLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(julLastDate).toISOString().slice(8, 10));
          i >=
          new Date(junLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(julLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(junLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(junLastDate).toISOString().slice(8, 10));
          i >=
          new Date(mayLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(junLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(mayLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(mayLastDate).toISOString().slice(8, 10));
          i >=
          new Date(aprLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(mayLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(aprLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(aprLastDate).toISOString().slice(8, 10));
          i >=
          new Date(marLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(aprLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(marLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(marLastDate).toISOString().slice(8, 10));
          i >=
          new Date(febLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(marLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
    {
      name: format(new Date(febLastDate), "MMMM"),
      totals: (function () {
        const arr = [];
        for (
          let i = parseInt(new Date(febLastDate).toISOString().slice(8, 10));
          i >=
          new Date(janLastDate + 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(8, 10);
          i--
        ) {
          const date = new Date(febLastDate)
            .toISOString()
            .slice(0, 7)
            .concat(`-${i}`);
          if (date) {
            const da = data.filter((m) => m?.timestamp.slice(0, 10) === date);
            arr.push(da);
          }
        }
        const totalSteps = arr
          .flat()
          .reduce((total, value) => total + value.steps, 0);
        const totalDistance = arr
          .flat()
          .reduce((total, value) => total + parseFloat(value.distance), 0);
        const totalClories = arr
          .flat()
          .reduce((total, value) => total + value.calourie_burned, 0);

        return [totalSteps, totalDistance, totalClories];
      })(),
      steps: function () {
        return this.totals?.totalSteps;
      },
      distance: function () {
        return this.totals?.totalDistance;
      },
      calourie_burned: function () {
        return this.totals?.totalClories;
      },
    },
  ];

  // console.log(myData.map((data) => data.totals[0]));

  // const allValues = {
  //   totalSteps: myData.reduce((t, v) => t + v.steps, 0),
  //   totalDistance: myData.reduce((t, v) => t + v.distance, 0),
  //   totalCalouriesBurned: myData.reduce((t, v) => t + v.calouries_burned, 0),
  // };

  // setTotal({
  //   type: `yearly`,
  //   steps: allValues.totalSteps,
  //   kilometers: allValues.totalDistance,
  //   calouries: allValues.totalCalouriesBurned,
  // });

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData.reverse()}>
        <Bar dataKey="totals[0]" fill="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ stroke: `white` }} dataKey="name" />
        <YAxis tick={{ stroke: `yellow` }} />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YearChart;
