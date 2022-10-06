import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import AdminPanel from '../admin/AdminPanel/AdminPanel';
import UploadAttachments from '../admin/AdminPanel/UploadAttachments/UploadAttachments';
import ViewApplicants from '../admin/AdminPanel/ViewApplicants/ViewApplicants';
import ApplicantsDetails from '../admin/AdminPanel/ViewApplicants/ApplicantsDetails';
import AddTest from '../admin/AdminPanel/EntryTest/AddTest';
import ViewTest from '../admin/AdminPanel/EntryTest/ViewTest';
import AddFile from '../admin/AdminPanel/Learning Material/AddFile';
import AddVideo from '../admin/AdminPanel/Learning Material/AddVideo';
import ViewVideos from '../admin/AdminPanel/Learning Material/ViewVideos';
import VideoDetail from '../admin/AdminPanel/Learning Material/VideoDetail';
import ViewFiles from '../admin/AdminPanel/UploadAttachments/ViewFiles';
import ViewFile from '../admin/AdminPanel/Learning Material/ViewFiles';
import AddPaper from '../admin/AdminPanel/PastPapers/AddPaper';
import ViewPaper from '../admin/AdminPanel/PastPapers/ViewPaper';
import Navbar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar';
import AdminSidebar from './Navbar/AdminSidebar';
import DiscussionForm from './Discussion/DiscussionForm';
import ViewDiscussion from './Discussion/ViewDiscussion';
import DiscussionDetail from './Discussion/DiscussionDetail';
import Profile from './Profile';
import AddJob from '../AdminPanel/AddJob';
import UserDashboard from '../UserDashboard';
import UserProfileMain from '../../components/user/Screens/UserProfileMain';
import ViewTestMain from '../admin/AdminPanel/EntryTest/ViewTestMain';
import ViewPaperMain from '../admin/AdminPanel/PastPapers/ViewPaperMain';
import ViewMaterialMain from '../admin/AdminPanel/Learning Material/ViewMaterialMain';
import ViewFileMain from '../admin/AdminPanel/Learning Material/ViewFileMain';
import ViewVideosMain from '../admin/AdminPanel/Learning Material/ViewVideosMain';
import ViewVideoDetailMain from '../admin/AdminPanel/Learning Material/ViewVideoDetailMain';
import ViewJobMain from '../admin/AdminPanel/ViewJobs/ViewJobMain';
import AddDiscussionMain from './Discussion/AddDiscussionMain';
import ViewDiscussionMain from './Discussion/ViewDiscussionMain';
import DiscussionDetailMain from './Discussion/DiscussionDetailMain';
import ViewTestMainScreen from '../admin/AdminPanel/EntryTest/ViewTestMainScreen';

export default function User() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserDashboard/>}/>
        <Route path="/admin/AddJob" exact element={<AddJob/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/forgot" exact element={<ForgotPassword/>}/>
        <Route path="/upload" exact element={<UploadAttachments/>}/>
        <Route path="/viewApplicants" exact element={<ViewApplicants/>}/>
        <Route path="/applicantDetails" exact element={<ApplicantsDetails/>}/>
        <Route path="/addTest" exact element={<AddTest/>}/>
        <Route path="/viewTest" exact element={<ViewTestMainScreen/>}/>
        <Route path="/viewTests" exact element={<ViewTest/>}/>
        <Route path="/addFile" exact element={<AddFile/>}/>
        <Route path="/addVideo" exact element={<AddVideo/>}/>
        <Route path="/viewVideo" exact element={<ViewVideosMain/>}/>
        <Route path="/videoDetail" exact element={<ViewVideoDetailMain/>}/>
        <Route path="/viewFile" exact element={<ViewFileMain/>}/>
        <Route path="/viewFile" exact element={<ViewFile/>}/>
        <Route path="/addPaper" exact element={<AddPaper/>}/>
        <Route path="/viewPaper" exact element={<ViewPaperMain/>}/>
        <Route path="/navbar" exact element={<Navbar/>}/>
        <Route path="/sidebar" exact element={<Sidebar/>}/>
        <Route path="/admin/sidebar" exact element={<AdminSidebar/>}/>
        <Route path="/discussion" exact element={<AddDiscussionMain/>}/>
        <Route path="/viewDiscussion" exact element={<ViewDiscussionMain/>}/>
        <Route path="/discussionDetail" exact element={<DiscussionDetailMain/>}/>
        <Route path="/profile" exact element={<UserProfileMain/>}/>
        <Route path="/viewMaterial" exact element={<ViewMaterialMain/>}/>
        <Route path="/viewJobs" exact element={<ViewJobMain/>}/>
    </Routes>
    </BrowserRouter>
  )
}
