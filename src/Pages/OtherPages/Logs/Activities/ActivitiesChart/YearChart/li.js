{
    name: format(new Date(month12), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month12 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month12)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month12)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month12)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month12)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
    ki: month1,
  },
  {
    name: format(new Date(month11), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month11 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month11)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month11)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month11)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month11)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month10), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month10 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month10)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month10)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month10)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month10)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month9), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month9 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month9)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month9)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month9)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month9)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month8), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month8 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month8)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month8)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month8)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month8)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month7), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month7 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month7)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month7)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month7)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month7)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month6), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month6 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month6)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month6)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month6)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month6)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month5), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month5 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month5)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month5)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month5)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month5)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month4), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month4 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month4)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month4)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month4)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month4)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month3), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month3 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month3)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month3)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month3)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month3)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },
  {
    name: format(new Date(month2), "MMMM"),
    steps: data
      .filter(
        (d) =>
          d?.timestamp?.slice(0, 7) === month2 && typeof d.steps === "number"
      )
      .reduce((total, value) => value.steps + total, 0),
    distance: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month2)
      .reduce((total, value) => parseFloat(value.distance) + total, 0),
    calouries_burned: data
      .filter((d) => d?.timestamp?.slice(0, 7) === month2)
      .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
    floors: isNaN(
      data
        .filter((d) => d?.timestamp?.slice(0, 7) === month2)
        .reduce((total, value) => parseFloat(value.floors) + total, 0)
    )
      ? 0
      : data
          .filter((d) => d?.timestamp?.slice(0, 7) === month2)
          .reduce((total, value) => parseFloat(value.floors) + total, 0),
  },


  steps: (function () {
    const arr = [];
    for (
      let i = parseInt(month1.slice(8));
      i <= parseInt(month2.slice(8));
      i++
    ) {
      const dte = `2023-01-${i}`;
      if (dte) {
        const gtTE = data.filter((m) => m.d === dte);
        arr.push(gtTE);
      }
    }
    return arr.flat();
  })(),