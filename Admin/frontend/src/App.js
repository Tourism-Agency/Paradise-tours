
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//MAIN
import LoggedNavbar from './components/LoggedNavbar';
import AdminMenu from './components/admin';
import AdminSignup from './components/admin_signup';
import AdminEditprofile from './components/admin_editprofile';
//
import FeedbackTable from './components/view_feedback';
import MessageTable from './components/view_message';
import GoogleAnalytics from './components/google_analytics';

//MANAGEUSERS
import  CustomerTables  from './components/manageuser/view_customer';
import  TransportTables from './components/manageuser/view_transport';
import  AdminTables from './components/manageuser/view_admin';
import  HotelTables from './components/manageuser/view_hotel';
import ViewmoreHotel from './components/manageuser/viewmore_hotel';
import  GuideTables from './components/manageuser/view_guide';
import  AddAdmin from './components/manageuser/add_admin';
import ManageUser from './components/manageuser/manageuser';
import EditAdmin from './components/manageuser/edit_admin';


// MANAGE PACKAGES
import ManagePackage from './components/managepackages/manage_package';
import Package from './components/managepackages/manage_package';
import Packagedetails from './components/managepackages/package-details';
import Packagelocation from './components/managepackages/package_location';
import Packagehotels from './components/managepackages/package_hotels';
import AdminViewPackages from './components/managepackages/manage_package';
import AddPackage from './components/managepackages/add_package';


// BOOKINGS
import AdminAssignTransport from './components/bookings/admin_assigntransport';
import ManageBookings from './components/bookings/manage_bookings';
import RejectedBookings from './components/bookings/rejected_bookings';
import  BookingRequests from './components/booking_requests';
import PendingBookings from './components/bookings/pending_bookings';
import AdminAssignGuide from './components/bookings/admin_assignguide';
import BookingHistory from './components/bookings/booking_history';
import CurrentBookings from './components/bookings/current_bookings';


//SAMPLES
import { customer_crud }  from './components/customer_crud';
import { add_customer } from './components/manageuser/add_customer';
import { edit_customer } from './components/edit_customer';
//import { TitlebarImageList } from './components/image_list';
import StandardImageList from './components/image_list2';
// import Navbar from './components/LoggedNavbar'
//import ViewRatings from './components/view_ratings';
//import  MultipleSelect from './components/multipleselect';

//GUIDE
import Guide from './components/guide';
import GuideEditprofile from './components/guide_editprofile';
import GuideBookedDate from './components/guide_updateavailability';
import GuideMessage from './components/guide_message';
import UpdateGuideinfo from './components/guide_updateuserinfo';
import GuideCurrentBookings from './components/guide_currentbookings';
import GuidePastBookings from './components/guide_pastbookings';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

function App() {
  return (

 
   
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
   
    
    <Router>
    
    <LoggedNavbar /> 
      <switch>

      <Route exact path = "./components/LoggedNavbar" component = {LoggedNavbar} />

     
        <Route exact path = "/admin" component = {AdminMenu} />
       
        <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>
        <Route exact path = "/image_list2" component = {StandardImageList} />
        <Route exact path = "/admin_signup" component = {AdminSignup} />
        <Route exact path = "/admin_editprofile" component = {AdminEditprofile} />
        
        <Route exact path = "/view_feedback" component = {FeedbackTable} />
        <Route exact path = "/view_message" component = {MessageTable} />

        <Route exact path = "/manageuser/add_admin" component = {AddAdmin} />
        <Route exact path = "/manageuser/manageuser" component = {ManageUser} />
        <Route exact path = "/manageuser/edit_admin" component = {EditAdmin} />
        <Route exact path = "/manageuser/view_customer" component = {CustomerTables} />
        <Route exact path = "/manageuser/view_transport" component = {TransportTables} />
        <Route exact path = "/manageuser/view_admin" component = {AdminTables} />
        <Route exact path = "/manageuser/view_guide" component = {GuideTables} />
        <Route exact path = "/manageuser/view_hotel" component = {HotelTables} />
        <Route exact path = "/manageuser/viewmore_hotel" component = {ViewmoreHotel} />

        <Route exact path = "/bookings/pending_bookings" component = {PendingBookings} />
        <Route exact path = "/bookings/admin_assignguide" component = {AdminAssignGuide} />
        <Route exact path = "/bookings/admin_assigntransport" component = {AdminAssignTransport} />
        <Route exact path = "/manage_bookings" component = {ManageBookings} />
        <Route exact path = "/bookings/rejected_bookings" component = {RejectedBookings} />
        <Route exact path = "/bookings/current_bookings" component = {CurrentBookings} />
        <Route exact path = "/bookings/booking_history" component = {BookingHistory} />
        

      
        <Route exact path = "/managepackages/admin_viewpackages" component = {AdminViewPackages} />
        <Route exact path = "/managepackages/manage_package" component = {ManagePackage} />
        <Route exact path = "/managepackages/package-details" component = {Packagedetails} />
        <Route exact path = "/managepackages/package_location" component = {Packagelocation} />
        <Route exact path = "/managepackages/package_hotels" component = {Packagehotels} />
        <Route exact path = "/managepackages/add-package" component = {AddPackage} />


        <Route exact path = "/image_list2" component = {StandardImageList} />
        <Route exact path = "/customer_crud" component = {customer_crud} />
        <Route exact path = "/google_analytics" component = {GoogleAnalytics} />

   
        <Route exact path = "/guide" component = {Guide} />
        <Route exact path = "/guide_editprofile" component = {GuideEditprofile} />
        <Route exact path = "/guide_updateavailability" component = {GuideBookedDate} />
        <Route exact path = "/guide_currentbookings" component = {GuideCurrentBookings} />
        <Route exact path = "/guide_pastbookings" component = {GuidePastBookings} />
        <Route exact path = "/guide_message" component = {GuideMessage} />
        <Route exact path = "/guide_updateuserinfo" component = {UpdateGuideinfo} />
        <Route exact path = "/booking_requests" component = {BookingRequests} />
       
     
        </div>
     
      </switch>
     

    </Router>
   
 
    </SnackbarProvider>
    </QueryClientProvider>
  

  );
}
/*

        <Route exact path = "/guide_message" component = {GuideMessage} />
        <Route exact path = "/guide_updateuserinfo" component = {UpdateGuideinfo} />
              <Route exact path = "/multipleselect" component = {MultipleSelect} />
                <Route exact path = "/view_ratings" component = {ViewRatings} />

                <Route exact path = "/add_customer" component = {add_customer} />

*/
      
export default App;
