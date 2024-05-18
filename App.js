import { useEffect } from "react";

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CRMLogin from "./components/role/CRMLogin";
import UserLogin from "./components/user/UserLogin";
import AdminLogin from "./components/admin/admin";
import EmployeeLogin from "./components/employee/EmployeeLogin";
import Side from "./components/admin/side/side";
import ClientSide from "./components/user/side/clientside";
import EmployeeSignup from "./components/employee/signup/EmployeeSignup";
import UserSignup from "./components/user/signup/UserSignup";

import Lead from "./components/admin/lead/Lead";
import Calendar from "./components/admin/calendar/calendar";
import EmployeeDetailsComponent from "./components/admin/employeedetails/EmployeeDetailsComponent";
import UserDetailsComponent from "./components/admin/clientdetails/userdetails";
import ErrorBoundary from "./components/ErrorBoundary";
import InvoiceForm from "./components/admin/invoice/components/InvoiceForm";
import Editor from "./components/admin/proposal/components/Editor";
import Count from "./components/admin/count/count";
import RegisterAdmin from "./components/admin/add/registeradmin";
import UploadPDF from "./components/admin/employeedetails/uploadpdf";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  
  
  
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <ErrorBoundary> 
    <Routes>
      <Route path="/crmlogin" element={<CRMLogin />} />
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path='/employeelogin' element={<EmployeeLogin/>}/>
  
      <Route path='/usersignup' element={<UserSignup/>}/>
      <Route path='/employeesignup' element={<EmployeeSignup/>}/>
      <Route path='/side' element={<Side/>}/>
      <Route path='/lead' element={<Lead/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
      <Route path='/employeedetails' element={<EmployeeDetailsComponent/>}/>
      <Route path='/userdetails' element={<UserDetailsComponent/>}/>
      <Route path='/invoice' element={<InvoiceForm/>}/>
      <Route path='/clientside' element={<ClientSide/>}/>
      <Route path='/proposal' element={<Editor/>}/>
      <Route path='/dashboard' element={<Count/>}/>
      <Route path='/addadmin' element={<RegisterAdmin/>}/>
      <Route path='/uploadpdf' element={<UploadPDF/>}/>
      <Route path='/' element={<HomePage/>}/>
      


    </Routes> 
    </ErrorBoundary> 
     

    </>
  );
}
export default App;
