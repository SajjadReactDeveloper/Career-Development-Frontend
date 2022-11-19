import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatcLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/authAction";
import Login from "./components/user/Screens/Login";
import Employer from "./components/admin/Employer";
import { ProSidebarProvider } from "react-pro-sidebar";
import EmployerDashboard from "./components/admin/EmployerDashboard";
import AddJobMain from "./components/admin/AdminPanel/AddJobs/AddJobMain";
import ViewApplicantMain from "./components/admin/AdminPanel/ViewApplicants/ViewApplicantMain";
import ApplicantDetailsMain from "./components/admin/AdminPanel/ViewApplicants/ApplicantDetailsMain";
import EmployerProfileMain from "./components/user/Navbar/EmployerProfileMain";
import AdminPanel from "./components/admin/AdminPanel/AdminPanel";
import AddTestMain from "./components/admin/AdminPanel/EntryTest/AddTestMain";
import AddPaperMain from "./components/admin/AdminPanel/PastPapers/AddPaperMain";
import LearningDashboard from "./components/admin/AdminPanel/Learning Material/LearningDashboard";
import AddFileMain from "./components/admin/AdminPanel/Learning Material/AddFileMain";
import AddVideoMain from "./components/admin/AdminPanel/Learning Material/AddVideoMain";
import ProfileMain from "./components/user/ProfileMain";
import UserDashboard from "./components/UserDashboard";
import AddJob from "./components/AdminPanel/AddJob";
import Signup from "./components/user/Screens/Signup";
import ForgotPassword from "./components/user/Screens/ForgotPassword";
import UploadAttachments from "./components/admin/AdminPanel/UploadAttachments/UploadAttachments";
import ViewApplicants from "./components/admin/AdminPanel/ViewApplicants/ViewApplicants";
import ApplicantsDetails from "./components/admin/AdminPanel/ViewApplicants/ApplicantsDetails";
import AddTest from "./components/admin/AdminPanel/EntryTest/AddTest";
import ViewTestMainScreen from "./components/admin/AdminPanel/EntryTest/ViewTestMainScreen";
import ViewTest from "./components/admin/AdminPanel/EntryTest/ViewTest";
import AddFile from "./components/admin/AdminPanel/Learning Material/AddFile";
import AddVideo from "./components/admin/AdminPanel/Learning Material/AddVideo";
import ViewVideosMain from "./components/admin/AdminPanel/Learning Material/ViewVideosMain";
import ViewVideoDetailMain from "./components/admin/AdminPanel/Learning Material/ViewVideoDetailMain";
import ViewFileMain from "./components/admin/AdminPanel/Learning Material/ViewFileMain";
import ViewFile from "./components/admin/AdminPanel/Learning Material/ViewFiles";
import AddPaper from "./components/admin/AdminPanel/PastPapers/AddPaper";
import ViewPaperMain from "./components/admin/AdminPanel/PastPapers/ViewPaperMain";
import Navbar from "./components/user/Navbar/Navbar";
import AdminSidebar from "./components/user/Navbar/AdminSidebar";
import AddDiscussionMain from "./components/user/Discussion/AddDiscussionMain";
import ViewDiscussionMain from "./components/user/Discussion/ViewDiscussionMain";
import DiscussionDetailMain from "./components/user/Discussion/DiscussionDetailMain";
import UserProfileMain from "./components/user/Screens/UserProfileMain";
import ViewMaterialMain from "./components/admin/AdminPanel/Learning Material/ViewMaterialMain";
import ViewJobMain from "./components/admin/AdminPanel/ViewJobs/ViewJobMain";
import Sidebars from "./components/user/Navbar/Sidebar";

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.authReducer);
  const { isLogged, isAdmin, user } = auth;
  console.log(user.role);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post("/user/refreshToken", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatcLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
  return (
    <ProSidebarProvider>
      <div className="App">
        {user.role === 1 ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<AdminPanel />} />
              <Route path="/addJob" exact element={<AddJobMain />} />
              <Route path="/addTest" exact element={<AddTestMain />} />
              <Route path="/addPaper" exact element={<AddPaperMain />} />
              <Route
                path="/addMaterial"
                exact
                element={<LearningDashboard />}
              />
              <Route path="/addFile" exact element={<AddFileMain />} />
              <Route path="/addVideo" exact element={<AddVideoMain />} />
              <Route path="/profile" exact element={<ProfileMain />} />
              <Route path="/login" exact element={<Login />} />
              <Route
                path="/viewApplicants"
                exact
                element={<ViewApplicantMain />}
              />
              <Route
                path="/applicantDetails"
                exact
                element={<ApplicantDetailsMain />}
              />
            </Routes>
          </BrowserRouter>
        ) : user.role === 2 ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<EmployerDashboard />} />
              <Route path="/addJob" exact element={<AddJobMain />} />
              <Route
                path="/viewApplicants"
                exact
                element={<ViewApplicantMain />}
              />
              <Route
                path="/applicantDetails"
                exact
                element={<ApplicantDetailsMain />}
              />
              <Route path="/profile" exact element={<EmployerProfileMain />} />
            </Routes>
          </BrowserRouter>
        ) : user.role === 0 ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<UserDashboard />} />
              <Route path="/admin/AddJob" exact element={<AddJob />} />
              <Route path="/upload" exact element={<UploadAttachments />} />
              <Route
                path="/viewApplicants"
                exact
                element={<ViewApplicants />}
              />
              <Route
                path="/applicantDetails"
                exact
                element={<ApplicantsDetails />}
              />
              <Route path="/addTest" exact element={<AddTest />} />
              <Route path="/viewTest" exact element={<ViewTestMainScreen />} />
              <Route path="/viewTests" exact element={<ViewTest />} />
              <Route path="/addFile" exact element={<AddFile />} />
              <Route path="/addVideo" exact element={<AddVideo />} />
              <Route path="/viewVideo" exact element={<ViewVideosMain />} />
              <Route
                path="/videoDetail"
                exact
                element={<ViewVideoDetailMain />}
              />
              <Route path="/viewFile" exact element={<ViewFileMain />} />
              <Route path="/viewFile" exact element={<ViewFile />} />
              <Route path="/addPaper" exact element={<AddPaper />} />
              <Route path="/viewPaper" exact element={<ViewPaperMain />} />
              <Route path="/navbar" exact element={<Navbar />} />
              <Route path="/sidebar" exact element={<Sidebars />} />
              <Route path="/admin/sidebar" exact element={<AdminSidebar />} />
              <Route path="/discussion" exact element={<AddDiscussionMain />} />
              <Route
                path="/viewDiscussion"
                exact
                element={<ViewDiscussionMain />}
              />
              <Route
                path="/discussionDetail"
                exact
                element={<DiscussionDetailMain />}
              />
              <Route path="/profile" exact element={<UserProfileMain />} />
              <Route
                path="/viewMaterial"
                exact
                element={<ViewMaterialMain />}
              />
              <Route path="/viewJobs" exact element={<ViewJobMain />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/forgot" exact element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </ProSidebarProvider>
  );
}
