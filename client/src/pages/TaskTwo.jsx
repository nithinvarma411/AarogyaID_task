import React from 'react'
import Sidebar from './../components/Sidebar';
import Header from './../components/Header';
import ExecutionOverview from '../components/ExecutionOverview';
import TableComponents from '../components/TableComponent';

function TaskTwo() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <ExecutionOverview />
            <TableComponents />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskTwo;
