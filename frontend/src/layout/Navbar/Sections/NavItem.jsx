import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../store/thunkFunction';
import ReportModal from './ReportModal'; // 모달 컴포넌트 import
import SettingModal from './SettingModal'; // 모달 컴포넌트 import

const routes = [
  {to: '/landingpage', name: '종합현황', auth: false},
  {to: '/ahupage', name: 'AHU', auth: false},
  {to: '/indoorenvpage', name: '실내환경', auth: false},
  {to: '/trend', name: '트렌드', auth: false},
  {to: '', name: '리포트', auth: false},
]

const NavItem = ({ mobile }) => {
  const navigate = useNavigate();
  

  const [checkedMenu, setCheckedMenu] = useState('종합현황');
  
  // 모달 상태 관리
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleClick = (name) => {
    setCheckedMenu(name);
  }
  const handleReportClick = () => {
    setIsReportModalOpen(prevState => !prevState);
  }

  const handleCloseModal = () => {
    setIsReportModalOpen(false);
  }
  
  return (
    <div>
      <ul className={`text-md justify-center w-full flex gap-6 ${mobile && "flex-col bg-gray-800 h-full"} items-center`}>
        {routes.map(({to, name, auth}) => {
          if (name === '리포트') {
            return (
              <li key={name} className='btn py-2 text-center cursor-pointer hover:text-gray-800'>
                <button onClick={handleReportClick}>
                  {name}
                </button>
              </li>
            );
          }
          return (
            <li key={name} className={`btn ${checkedMenu==name && "font-extrabold text-black"} py-2 text-center cursor-pointer hover:text-gray-800`}>
              <Link
                to={to}
                onClick={() => handleClick(name)}>
                  {name}
              </Link>
            </li>
            );
          }
          )
        }
        
      </ul>
      {isReportModalOpen && <ReportModal closeModal={handleCloseModal}/>}
    </div>
  )
}

export default NavItem;
