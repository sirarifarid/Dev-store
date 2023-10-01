import React from 'react';
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import TimelineIcon from '@mui/icons-material/Timeline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
               <h3>Dev Store</h3>
            </div>
           <ul>
              <Link to="/"><li><HomeIcon sx={{ mr: '10px' }}/> Home</li></Link>
              <Link to="/post"><li><NoteAddIcon sx={{ mr: '10px' }}/>Posts</li></Link>
              <Link to="/products"><li><InventoryIcon sx={{ mr: '10px' }}/>Products</li></Link>
              <Link to="/order"><li><ShoppingCartIcon sx={{ mr: '10px' }}/>Orders</li></Link>
              <Link to="/"><li><AccountCircleIcon sx={{ mr: '10px' }}/>Customers</li></Link>
              <Link to="/"><li><BarChartIcon sx={{ mr: '10px' }}/>Reports</li></Link>
              <Link to="/"><li><DynamicFeedIcon sx={{ mr: '10px' }}/>Feedback</li></Link>
              <Link to="/"><li><TimelineIcon sx={{ mr: '10px' }}/>Analytics</li></Link>
           </ul>
        </div>
    );
};

export default Sidebar;