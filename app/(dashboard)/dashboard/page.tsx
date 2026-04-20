"use client";

import CalendarComponent from '@/components/dashboard/CalenderComponent';
import ContractsExpiringTable from '@/components/dashboard/ContractsExpiringSoon';
import EventsComponent from '@/components/dashboard/EventsComponent';
import Goals from '@/components/dashboard/Goals';
import LatestProjectActivity from '@/components/dashboard/LatestProjectActivity';
import LeadsOverview from '@/components/dashboard/LeadsOverview';
import OverviewComponent from '@/components/dashboard/Overview';
import PaymentRecordsChart from '@/components/dashboard/PaymentRecordsChart';
import StaffTicketsTable from '@/components/dashboard/StaffTicketsTable';
import StateCards from '@/components/dashboard/StateCards';
import ProjectsOverview from '@/components/dashboard/StatisticsByProjectStatus';
import TARdOverview from '@/components/dashboard/TARByDepartment';
import TARsOverview from '@/components/dashboard/TARByStatus';
import TaskManager from '@/components/dashboard/TaskManager';
import TodoItems from '@/components/dashboard/Todo';
import React from 'react'

export default function page() {
  return (
    <section className='w-[95%] mx-auto py-10'>
      <div>
        <StateCards />

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          <div className="col-span-1 md:col-span-3 lg:col-span-4">
            <OverviewComponent />
            <TaskManager />
            <EventsComponent />
            <CalendarComponent />
            <PaymentRecordsChart />
            <ContractsExpiringTable />
            <StaffTicketsTable />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <TodoItems />
            <LeadsOverview />
            <ProjectsOverview />
            <TARsOverview />
            <TARdOverview />
            <LatestProjectActivity />
            <Goals />
          </div>
        </div>
      </div>
    </section>
  )
}
