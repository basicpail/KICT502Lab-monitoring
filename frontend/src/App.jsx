import { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GraphDetailPage from './pages/GraphDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { authUser, requestAllDeviceData } from './store/thunkFunction'
import ProtectedPage from './pages/ProtectedPage'
import ProtectedRoutes from './components/ProtectedRoutes'
import NotAuthRoutes from './components/NotAuthRoutes'
import Dashboard502 from './pages/502DashBoardPage'
import AHUPage from './pages/AHUPage'
import IndoorEnvPage from './pages/IndoorEnvPage'
import io from 'socket.io-client';
import { updateDeviceData } from './store/thunkFunction'

const socketAddr = import.meta.env.VITE_SOCKET_ADDR

const socket = io(socketAddr, { // <외부IP>를 실제 외부 IP로 변경
  transports: ['websocket', 'polling'], // 사용할 전송 프로토콜 명시
  withCredentials: true,
});

function Layout() {
  return (
    <div className='flex flex-col h-screen justify-between '>
      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />
      <Navbar />
      {/* <main className='mb-auto w-10/12 max-w-4xl mx-auto'> */}
      <main className='mb-auto mx-2 '>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
//루트 페이지에 왔을 때는 랜딩페이지 컴포넌트가 outlet 컴포넌트에 들어가게 되는거고
//로그인 페이지에 왔을 때는 로그인페이지 컴포넌트가 outlet 컴포넌트에 들어가게 되는 것이다.
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if(isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]); //eslint 경고 없애줄려고 dispatch 는 넣는거다?

  useEffect(() => {
    socket.on('kict502Lab', (newData) => {
      //console.log('socketNewData: ',newData);
      dispatch(updateDeviceData(newData));
    });

    return () => {
      socket.off('kict502Lab');
    };
  },[])

  // useEffect(() => {
  //   // MQTT 클라이언트 생성 및 연결
  //   const client = mqtt.connect(`mqtt://${brokerAddr}:${brokerPort}`); // 브로커 URL 및 포트는 실제 사용하는 값으로 변경
  //   //const client = mqtt.connect(`mqtt://${brokerAddr}:${brokerPort}`); // 브로커 URL 및 포트는 실제 사용하는 값으로 변경

  //   // 연결 시 실행되는 콜백
  //   client.on('connect', () => {
  //     console.log('Connected to MQTT Broker');
  //     // 특정 토픽에 subscribe
  //     client.subscribe(`${subTopic}`, (err) => {
  //       if (err) {
  //         console.error('Subscribe error:', err);
  //       }
  //     });
  //   });

  //   // 메시지 수신 시 실행되는 콜백
  //   client.on('message', (topic, message) => {
  //     const newData = message.toString();
  //     console.log('mqttNewData: ', newData);
  //     //dispatch(updateDeviceData(newData));
  //   });

  //   // useEffect clean-up 함수
  //   return () => {
  //     if (client.connected) {
  //       client.end();
  //     }
  //   };
  // }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>} />
        {/* <Route index element={<LoginPage/>} /> */}
        {/* <Route index element={<LandingPage/>} /> */}
        {/* 로그인 필요 */}
        <Route element={<ProtectedRoutes isAuth={isAuth}/>}>
          <Route path='/protected' element={<ProtectedPage />}/>
        </Route>

        {/* 로그인 불필요 */}
        <Route element={<NotAuthRoutes isAuth={isAuth}/>}>
          <Route path='/dashboard502' element={<Dashboard502/>} />
          <Route path='/landingpage' element={<LandingPage/>} />
          <Route path='/ahupage' element={<AHUPage/>} />
          <Route path='/indoorenvpage' element={<IndoorEnvPage/>} />
          <Route path='/trend' element={<GraphDetailPage/>} />
          <Route path='/graph' element={<GraphDetailPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
