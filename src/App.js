import './App.css'
import Book from './components/Bookings/BookTable';
import MainDash from './components/MainDash/MainDash';
import RootLayout from './components/RootLayout';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import Rooms from './components/Rooms/Rooms';
import Members from './components/Members/Members';
import CheckIn from './components/CheckInData/CheckIn';
import CheckOutData from './components/CheckOutData/CheckOutData';
// Olive Data
import OliveBookTable from './components/Bookings/OliveBooking';
import OliveCheckIn from './components/CheckInData/OliveCheckIn';
import OliveCheckOut from './components/CheckOutData/OliveCheckOuts';
import OliveRooms from './components/Rooms/OliveRooms';
// Kiara Data
import KiaraBookTable from './components/Bookings/KiaraBooking';
import KiaraCheckIn from './components/CheckInData/KiaraCheckIn';
import KiaraCheckOut from './components/CheckOutData/KiaraCheckOuts';
import KiaraRooms from './components/Rooms/KiaraRooms';

import HotelRosewood from './components/HotelRosewood/HotelRosewood';
import HotelMoonLight from './components/HotelMoonLight/HotelMoonLight';
import HotelOlive from './components/HotelOlive/HotelOlive';
import HotelKiara from './components/HotelKiara/HotelKiara';
import HotelTheBest from './components/HotelTheBest/HotelTheBest';



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
    <Route index element={<MainDash />}></Route>
    <Route path='/booktable' element={<Book />}></Route>
    <Route path='/Rooms' element={<Rooms />}></Route>
    <Route path='/Members' element={<Members />}></Route>
    <Route path='/CheckIn' element={<CheckIn />}></Route>
    <Route path='/CheckOutData' element={<CheckOutData />}></Route>

    <Route path='/oliveBooktable' element={<OliveBookTable />}></Route>
    <Route path='/oliveCheckOut' element={<OliveCheckOut />}></Route>
    <Route path='/oliveCheckIn' element={<OliveCheckIn />}></Route>
    <Route path='/oliveRooms' element={<OliveRooms />}></Route>

    <Route path='/kiaraBookTable' element={<KiaraBookTable />}></Route>
    <Route path='/kiaraCheckOut' element={<KiaraCheckOut />}></Route>
    <Route path='/kiaraCheckIn' element={<KiaraCheckIn />}></Route>
    <Route path='/kiaraRooms' element={<KiaraRooms />}></Route>

    <Route path='/HotelRosewood' element={<HotelRosewood />}></Route>
    <Route path='/HotelMoonLight' element={<HotelMoonLight />}></Route>
    <Route path='/HotelOlive' element={<HotelOlive />}></Route>
    <Route path='/HotelKiara' element={<HotelKiara />}></Route>
    <Route path='/HotelTheBest' element={<HotelTheBest />}></Route>


    </Route>
  ))
  return (
    <div className="App">
          <RouterProvider router={router}>
          <MainDash />
          </RouterProvider>
    </div>
  );
}

export default App;
