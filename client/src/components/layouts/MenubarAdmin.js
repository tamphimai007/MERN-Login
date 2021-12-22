// rafce
import React from "react";
import { Link } from "react-router-dom";

const MenubarAdmin = () => {
  return (
    <nav>
      <ul className="nav flex-column">

        <li className="nav-item">
          <Link to="/admin/index">แดชบอร์ด</Link>
        </li>

        <li className="nav-item">
          {/* <a href=""></a> */}
          <Link to="/admin/manage-admin"> จัดการผู้ใช้งาน</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default MenubarAdmin;
