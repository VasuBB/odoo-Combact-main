import React, { useEffect, useContext } from 'react';
import SvgColor from 'src/components/svg-color';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { curr_context } from '../../contexts.jsx/Trainee';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const NavigationConfig = () => {
  const now_context = useContext(curr_context);

  useEffect(() => {
    console.log(now_context.traineeID);
  }, [now_context.traineeID]);

  const navConfig = [
    {
      title: 'dashboard',
      path: `/${now_context.traineeID}`,
      icon: icon('ic_analytics'),
    },
    {
      title: 'student',
      path: '/user',
      icon: icon('ic_user'),
    },
    {
      title: 'your events',
      path: '/event',
      icon: icon('ic_calendar'),
    },
    {
      title: 'pdf bot',
      path: '/pdf',
      icon: <FaFilePdf className='w-[25px] h-[25px]' />,
    },
    {
      title: 'video bot',
      path: '/video',
      icon: <MdOutlineSlowMotionVideo className='w-[25px] h-[25px]' />,
    }
  ];

  return navConfig;
};

export default NavigationConfig;
