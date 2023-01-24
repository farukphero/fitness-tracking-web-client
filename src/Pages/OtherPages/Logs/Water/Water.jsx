import React  from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 2400,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 3000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 3000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 3000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 3000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const Water = () => {
   const num = (
    <>
    
      <a href="#slide1" className="btn btn-xs mr-2 ml-2">
        1
      </a>
      <a href="#slide2" className="btn btn-xs mr-2">
        2
      </a>
      <a href="#slide3" className="btn btn-xs mr-2">
        3
      </a>
      <a href="#slide4" className="btn btn-xs mr-2">
        4
      </a> 
    </>
  );
  const chart =<>
    <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
  </>

  return (
    <div className='mb-24'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full pb-20">
        <div style={{ width: '100%' }}>
       

      
{chart}
         
       
      </div>
          <div className="absolute w-full text-center transform -translate-y-1/2 left-50 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            {num}
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full pb-20">
           {chart}
          <div className="absolute  w-full text-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            {num}
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full pb-20">
           {chart}
          <div className="absolute  w-full text-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            {num}
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full pb-20">
           {chart}
          <div className="absolute  w-full text-center  transform -translate-y-1/2  left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            {num}
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Water;
