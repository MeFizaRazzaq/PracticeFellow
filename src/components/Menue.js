import React from 'react'
import { Link } from 'react-router-dom';

export default function Menue(props) {
  console.log(props);
  
  return (
  
    <aside id="sidebar" 
    className={`sidebar-toggle sticky-top `}
    style={{
      width: props.isOpen ? '240px' : '100px' ,
      transition: 'width 0.3s',
      height: '100vh',
    }}
    onMouseEnter={() =>{ if((!props.isOpen)&&(props.hovToggle)){ props.setIsOpen(true)}}} // Open on hover
    onMouseLeave={() => {if((props.isOpen)&&(props.hovToggle)){props.setIsOpen(false)}}} // Close when mouse leaves
    >
      <div className="sidebar-logo">
        {props.isOpen && <a href="#">Practice Fellow.</a>}
        {!(props.isOpen) && <a href="#">PF.</a>}
      </div>

      {/* Sidebar Navigation */}
      <ul className="sidebar-nav p-0">
        {props.isOpen && <li className="sidebar-header">MAIN</li>}
        {!(props.isOpen) && <li className="sidebar-header"><i className="bx bx-radio-circle"></i></li>}

        <li className="sidebar-item">
        <Link to="/" className="sidebar-link">
          <i className="bx bxs-dashboard"></i>
          {props.isOpen && <span>Dashboard</span>}
        </Link>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="bx bx-user"></i>
            {props.isOpen && <span>Profile</span>}
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="bx bx-task "></i>
            {props.isOpen && <span>Task</span>}
          </a>
        </li>

        <li className="sidebar-item">
        <Link to="/Addpatientform" className="sidebar-link">
          <i className="bx bx-user"></i>
          {props.isOpen && <span>Patient</span>}
        </Link>
        </li>

        {props.isOpen && <li className="sidebar-header">PAGES</li>}
        {!(props.isOpen) && <li className="sidebar-header"><i className="bx bx-radio-circle"></i></li>}
        <li className="sidebar-item">
          <a
            href="#"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            aria-expanded="true"
            aria-controls="auth"
          >
            <i className="bx bx-user"></i>
            {props.isOpen && <span>Patient</span>}
          </a>
          <ul
            id="auth"
            className="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li className="sidebar-item">
              
              {props.isOpen && <a href="#" className="sidebar-link"><i className="bx bx-radio-circle"></i>Add Patient</a>}
              {(!props.isOpen) &&<li className="sidebar-header"><i className="bx bx-radio-circle"></i></li>}
            </li>
            <li className="sidebar-item">
              {props.isOpen && <a href="#" className="sidebar-link"><i className=" bx bx-radio-circle "></i>Register</a>}
              {(!props.isOpen) &&<li className="sidebar-header"><i className="bx bx-radio-circle"></i></li>}
            </li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="bx bx-bell"></i>
            {props.isOpen && <span>Notification</span>}
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="bx bx-cog"></i>
            {props.isOpen && <span>Setting</span>}
          </a>
        </li>
      </ul>
      {/* Sidebar Navigation Ends */}

      <div className="sidebar-footer">
        
        <a href="#" className="sidebar-link">
          <i className="bx bx-checkbox"></i>
          {props.isOpen && <span>Logout</span>}
        </a>
        <button className={`${props.hovToggle ? 'hovoff' : 'hovoff hovoffred'}`} onClick={()=>{props.handleHovToggle(!props.hovToggle)}}>Hover</button>
      </div>
    </aside>

  )
}



    /*
      <div
      className={`bg-primary menue-text border-end side-menu  position-fixed ${props.isOpen ? 'show' : ''}`}
      style={{
        width: props.isOpen ? '200px' : '70px',
        transition: 'width 0.3s',
        height: '100vh',
      }}
    >
      <div className='menue-head p-2 pt-3 ps-3 mx-auto'>
        {!(props.isOpen) && <h5 className='mx-auto'>AMS</h5>}
        {props.isOpen && <h5 className='mx-auto'>All Med Solutions</h5>}
        
      </div>
      <ul className="list-unstyled p-2 mx-2">
        <li className="pb-3 mx-auto">
        <i class="bx bx-home bx-sm"></i> 
        {props.isOpen && <span className="ms-2">Dashoard</span>}
        </li>
        <li className="mb-3">
          <i className="bx bx-file-blank bx-sm"></i>
          {props.isOpen && <span className="ms-2">Pages</span>}
        </li>
        <li className="mb-3">
          <i className="bx bx-task bx-sm"></i>
          {props.isOpen && <span className="ms-2">Tasks</span>}
        </li>
      </ul>
    </div>
      */