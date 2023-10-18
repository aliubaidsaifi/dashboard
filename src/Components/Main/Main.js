import React from 'react'
import {MdOutlineCurrencyExchange,MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {CgNotes} from 'react-icons/cg'
import {FiShoppingBag} from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'
import {BiUpArrowAlt,BiDownArrowAlt} from 'react-icons/bi'
import './Main.css'
import 'chart.js/auto';
import Donut from '../DonutChart/Donut'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Table from '../Table/Table'


const data = [
  { name: 'Jan', income: 7500, fill: 'rgb(242,239,255)' },
  { name: 'Feb', income: 5000, fill: 'rgb(242,239,255)' },
  { name: 'Mar', income: 12000, fill: 'rgb(242,239,255)' },
  { name: 'Apr', income: 9000, fill: 'rgb(242,239,255)' },
  { name: 'May', income: 11000, fill: 'rgb(242,239,255)' },
  { name: 'Jun', income: 4000, fill: 'rgb(242,239,255)' },
  { name: 'Jul', income: 11000, fill: 'rgb(242,239,255)' },
  { name: 'Aug', income: 13000, fill: 'rgb(90,50,234)' },
  { name: 'Sep', income: 12000, fill: 'rgb(242,239,255)' },
  { name: 'Oct', income: 10000, fill: 'rgb(242,239,255)' },
  { name: 'Nov', income: 9000, fill: 'rgb(242,239,255)' },
  { name: 'Dec', income: 11000, fill: 'rgb(242,239,255)' },
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <rect x={x} y={y} width={width} height={height} rx={10} ry={10} fill={fill} />
  );
};
 
const Main = () => { 
    return (
    <section className='main-container'>
    <div className='main-card'>
          <div className='card'>
            <div className='card-logo1'>
              <MdOutlineCurrencyExchange className='icon1'/>
            </div>
            <div className='card-inner1'>
              <p>Earning</p>
              <h3>$198k</h3>
              <h6><BiUpArrowAlt/>37.8%<span> this month</span></h6>
            </div>
          </div>
          <div className='card'>
            <div className='card-logo2'>
              <CgNotes className='icon2'/>
            </div>
            <div className='card-inner2'>
              <p>Order</p>
              <h3>$2.4k</h3>
              <h6><BiDownArrowAlt/>2%<span> this month</span></h6>
            </div>
          </div>
          <div className='card'>
            <div className='card-logo3'>
              <MdOutlineAccountBalanceWallet className='icon3'/>
            </div>
            <div className='card-inner3'>
              <p>Balance</p>
              <h3>$2.4k</h3>
              <h6><BiDownArrowAlt/>2%<span> this month</span></h6>
            </div>
          </div>
          <div className='card'>
            <div className='card-logo4'>
              <FiShoppingBag className='icon4'/>
            </div>
            <div className='card-inner4'>
              <p>Total Sales</p>
              <h3>$89k</h3>
              <h6><BiUpArrowAlt/>11%<span> this month</span></h6>
            </div>
          </div>
          
      </div>
      <div className='chart-container'>
          <div className='bar-chart'>
            <div className='sider'>
              <div className='sider_'>
                  <h3 className='sider_over' >Overview</h3>
                  Monthly Earning 
                </div>
                <span className='right_span'>Quarterly  <FiChevronDown /></span>
            </div>
            <ResponsiveContainer >
              <BarChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Bar dataKey="income" fill="blue" shape={<CustomBar />} dot={false} label={{ content: () => null }} name="Aug" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="donut-pie-chart">
              <div className='donutInner'>
                <h3>Customers</h3>
                Customers that buy products
              </div>
                <div className='donutBack'>
                <Donut/>
                <div className='donutInside'>
                  <h4>65%</h4>
                  <h6>Total new customers</h6>
                </div>
             </div>
            
        </div>
      </div>
    <div>
      <Table/>
    </div>
    </section>
  
  )
}

export default Main
