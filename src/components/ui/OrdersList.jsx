import React, { useState, useMemo } from 'react';
import './OrdersList.css';
import { iconMap} from "../../data/content";
import MenuListComposition from './Menu';
import ImageAvatar from './Avatar';

const OrdersList = ({ data, itemsPerPage = 5 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);


  // Filter data based on search term and status
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = 
        item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [data, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Get unique statuses for filter dropdown
  const statuses = ['All', ...new Set(data.map(item => item.status))];

  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentData.map((_, index) => startIndex + index)));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual row selection
  const handleRowSelect = (index) => {
    const actualIndex = startIndex + index;
    const newSelected = new Set(selectedRows);
    if (newSelected.has(actualIndex)) {
      newSelected.delete(actualIndex);
    } else {
      newSelected.add(actualIndex);
    }
    setSelectedRows(newSelected);
    setSelectAll(newSelected.size === currentData.length);
  };

  // Get status color and dot
  const getStatusStyle = (status) => {
    const statusStyles = {
      'In Progress': { color: '#8A8CD9', dot: '#8A8CD9' },
      'Complete': { color: '#4AA785', dot: '#4AA785' },
      'Pending': { color: '#59A8D4', dot: '#59A8D4' },
      'Approved': { color: '#FFC555', dot: '#FFC555' },
      'Rejected': { color: '#9FA0A2', dot: '#9FA0A2' }
    };
    return statusStyles[status] || { color: '#666', dot: '#666' };
  };

  // Generate avatar initials
  const getAvatarInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="orders-list-container">
      {/* Header */}
      <div className="orders-header">
        <h1 className="orders-title">Order List</h1>
        
        {/* Toolbar */}
        <div className="orders-toolbar">
          <div className="toolbar-actions">
            <button className="action-btn add-btn">
            <img src={iconMap.Add} alt="Add" />
            </button>
         
<MenuListComposition 
  data={<img src={iconMap.Filter} alt="Filter" />}
  statuses={statuses}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
/>

            <button className="action-btn sort-btn">
            <img src={iconMap.ArrowsDownsUp} alt="Add" />
            </button>
          </div>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">    <img src={iconMap.Search} alt="Add" /></span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th className="checkbox-col">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="checkbox"
                />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th className="actions-col"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((order, index) => {
              const actualIndex = startIndex + index;
              const isSelected = selectedRows.has(actualIndex);
              const statusStyle = getStatusStyle(order.status);
              
              return (
                <tr 
                  key={order.orderId} 
                  className={`order-row ${isSelected ? 'selected' : ''}`}
                >
                  <td className="checkbox-col">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleRowSelect(index)}
                      className="checkbox"
                    />
                  </td>
                  <td className="order-id">#{order.orderId}</td>
                  <td className="user-cell">
                    <div className="user-info">
                  
                        <ImageAvatar text={order.user}></ImageAvatar>
                      
                   
                    </div>
                  </td>
                  <td className="project-cell">{order.project}</td>
                  <td className="address-cell">
                    <div className="address-info">
                      <span className="address-text">{order.address}</span>
                      {/* <span className="address-icon">
                      <img src={iconMap.Calendar}></img>

                      </span> */}
                    </div>
                  </td>
                  <td className="date-cell">
                    <div className="date-info">
                    <img src={iconMap.Calendar}></img>
                      <span className="date-text">{order.date}</span>

                    </div>
                  </td>
                  <td className="status-cell">
                    <div className="status-info">
                      <span 
                        className="status-dot"
                        style={{ backgroundColor: statusStyle.dot }}
                      ></span>
                      <span 
                        className="status-text"
                        style={{ color: statusStyle.color }}
                      >
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="actions-col">
                    <button className="more-actions">⋯</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
         <img src={iconMap.ArrowLineLeft} alt="left arrow" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
             <img src={iconMap.ArrowLineRight} alt="Right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
