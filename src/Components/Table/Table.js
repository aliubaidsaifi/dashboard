import React from 'react'
import { CiSearch } from 'react-icons/ci';
import tree from '../../Assets/tree.jpg'
import sphare from '../../Assets/sphare (1).jpg'
import './Table.css'
const Table = () => {
  return (
    <div className='Table'>
      <div className='serchBar2'>
        <h2>Product Sell</h2>
        <div className="search-bar2">
          <div className="search-icon2">
            <CiSearch />
          </div>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <div className='dropdown'>
            <select>
              <option value="">Last 30 days</option>
            </select>
          </div>
        </div>

      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="product-details">
                <img src={tree} alt="Product 1" />
                <div className='details'>
                  <h3>Abstract 3D</h3>
                  <p>Abstract 3D description goes here.</p>
                </div>

              </div>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <div class="product-details">
                <img src={sphare} alt="Product 2" />
                <div className='details'>
                  <h3>Sarphenes Illustration</h3>
                  <p>Sarphenes Illustration description goes here.</p>
                </div>

              </div>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
