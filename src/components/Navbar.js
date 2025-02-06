import React from 'react'


export default function Navbar(props) {
  console.log("props in nav,",props);
  
  return (

    <nav className="navbar navbar-expand ">
      <div className='row container-fluid'>
        <div className='col-1'>
          <button className="toggler-btn" type="button"
            onClick={()=>{props.setIsOpen(!props.isOpen);props.handleHovToggle(false)}}>
            {!props.isOpen && <i className="bx bx-x bx-md"></i>}
            {props.isOpen && <i className="bx bx-menu bx-md"></i>}
          </button>
        </div>
        <div className='col'>
          
        </div>
      </div>
      
      
    </nav>
    
  );
}







/*

<div className='navbar-right'>
        <div className='d-flex align-items-center'>
          <div className='me-sm-2 me-0 round'>
          <img
  src="/dp.png"
  alt="Profile Pic"
  width={32}
  height={32}
  className="rounded-circle"
/>
          </div>
          <div className='d-sm-block d-none'>
          <p className='fw-semibold mb-0 lh-1 name'>Fiza Razzaq</p><br/>
          <span className='op-7 fw-normal d-block fs-11 role'>Web Developer</span>
        </div>
        </div>
      </div>












          <div className="pos-f-t">
            <div className={`collapse ${this.state.isCollapsed ? 'show' : ''}`}id="navbarToggleExternalContent">
              <div className="bg-light p-4">
                <h4 className="text-white">Collapsed content</h4>
                <span className="text-muted">Toggleable via the navbar brand.</span>
              </div>
            </div>
            <nav className="navbar navbar-light bg-light">
            <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
            aria-controls="navbarToggleExternalContent"
            aria-expanded={this.state.isCollapsed}
            aria-label="Toggle navigation"
            style={{ border: "none", outline: "none", boxShadow: "none", background: "none" }}
          >
                <span>
                <i className="bx bx-menu bx-md dark" ></i>
                </span>
              </button>
            </nav>
          </div>
          */