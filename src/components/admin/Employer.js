import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EmployerDashboard from './EmployerDashboard';
import AddJob from '../AdminPanel/AddJob';
import ViewJobs from './AdminPanel/ViewJobs/ViewJobs';
import ViewApplicants from './AdminPanel/ViewApplicants/ViewApplicants';
import ApplicantDetailsMain from './AdminPanel/ViewApplicants/ApplicantDetailsMain';
import AddJobMain from './AdminPanel/AddJobs/AddJobMain';
import ViewApplicantMain from './AdminPanel/ViewApplicants/ViewApplicantMain';
import EmployerProfileMain from '../user/Navbar/EmployerProfileMain';

export default function User() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<EmployerDashboard />}/>
        <Route path="/addJob" exact element={<AddJobMain />}/>
        <Route path="/viewApplicants" exact element={<ViewApplicantMain />}/>
        <Route path="/applicantDetails" exact element={<ApplicantDetailsMain />}/>
        <Route path="/profile" exact element={<EmployerProfileMain />}/>
    </Routes>
    </BrowserRouter>
  )
}
