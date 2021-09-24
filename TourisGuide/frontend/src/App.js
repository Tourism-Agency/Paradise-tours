import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import  MultipleSelect from './components/multipleselect';

import Guide from './components/guide';
import LoggedNavbar from './components/LoggedNavbar';

import GuideEditprofile from './components/guide_editprofile';
import GuideBookedDate from './components/guide_updateavailability';
import GuideMessage from './components/guide_message';
import UpdateGuideinfo from './components/guide_updateuserinfo';

import  BookingRequests from './components/booking_requests';
import GuideCurrentBookings from './components/guide_currentbookings';
import GuidePastBookings from './components/guide_pastbookings';
import GuideSignup from './components/guide_signup';

import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';
import StoreFn from './state/index';

const queryClient = new QueryClient();
const Store = StoreFn();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={Store}>
      <SnackbarProvider maxSnack={3}>
    

    <Router>
    <LoggedNavbar />  

      <switch>
      <Route exact path = "./components/LoggedNavbar" component = {LoggedNavbar} />

        <Route exact path = "/guide" component = {Guide} />
        <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>
        <Route exact path = "/guide_signup" component = {GuideSignup} />
        <Route exact path = "/guide_editprofile" component = {GuideEditprofile} />
        <Route exact path = "/guide_updateavailability" component = {GuideBookedDate} />
        <Route exact path = "/guide_message" component = {GuideMessage} />
        <Route exact path = "/guide_updateuserinfo" component = {UpdateGuideinfo} />

        <Route exact path = "/guide_currentbookings" component = {GuideCurrentBookings} />
        <Route exact path = "/guide_pastbookings" component = {GuidePastBookings} />
        <Route exact path = "/booking_requests" component = {BookingRequests} />

        </div>   
      </switch>

    </Router>
      
    </SnackbarProvider>
    </Provider>
    </QueryClientProvider>

  );
}
/*
              <Route exact path = "/multipleselect" component = {MultipleSelect} />
*/
      
export default App;