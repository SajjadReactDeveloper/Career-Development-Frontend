import React from 'react'
import AdminPanel from './AdminPanel/AdminPanel';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddJobMain from './AdminPanel/AddJobs/AddJobMain';
import AddTestMain from './AdminPanel/EntryTest/AddTestMain';
import AddPaperMain from './AdminPanel/PastPapers/AddPaperMain';
import LearningDashboard from './AdminPanel/Learning Material/LearningDashboard';
import AddFileMain from './AdminPanel/Learning Material/AddFileMain';
import AddVideoMain from './AdminPanel/Learning Material/AddVideoMain';
import ProfileMain from '../user/ProfileMain';
import Login from '../user/Screens/Login'
import ViewApplicantMain from '../../components/admin/AdminPanel/ViewApplicants/ViewApplicantMain'
import ApplicantDetailsMain from './AdminPanel/ViewApplicants/ApplicantDetailsMain';

export default function Admin() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" exact element={<AdminPanel />} />
    <Route path="/addJob" exact element={<AddJobMain />} />
    <Route path="/addTest" exact element={<AddTestMain />} />
    <Route path="/addPaper" exact element={<AddPaperMain />} />
    <Route path="/addMaterial" exact element={<LearningDashboard/>} />
    <Route path="/addFile" exact element={<AddFileMain/>} />
    <Route path="/addVideo" exact element={<AddVideoMain/>} />
    <Route path="/profile" exact element={<ProfileMain/>} />
    <Route path="/login" exact element={<Login/>} />
    <Route path="/viewApplicants" exact element={<ViewApplicantMain/>} />
    <Route path="/applicantDetails" exact element={<ApplicantDetailsMain/>} />
    </Routes>
    </BrowserRouter>
  )
}
