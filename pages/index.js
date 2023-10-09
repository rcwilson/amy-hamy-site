
import IndexTemplate from 'templates/IndexTemplate'
import React, { useEffect } from 'react';
import Image from 'next/image';
import friendImage from 'public/img/frands_card.jpg';
import Link from "next/link";

export default function Home() {

  const Countdown = function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;


    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      dayMonth = "10/10/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;

    const getTime = {
      d: (distance) => Math.floor(distance / (day)),
      h: (distance) => Math.floor((distance % (day)) / (hour)),
      m: (distance) => Math.floor((distance % (hour)) / (minute)),
      s: (distance) => Math.floor((distance % (minute)) / second)
    }
    const countDown = new Date(birthday).getTime();
    const [showCountdown, setShowCountdown] = React.useState(today < birthday);
    const [days, setDays] = React.useState(getTime.d(countDown - new Date().getTime()));
    const [hours, setHours] = React.useState(getTime.h(countDown - new Date().getTime()));
    const [minutes, setMinutes] = React.useState(getTime.m(countDown - new Date().getTime()));
    const [seconds, setSeconds] = React.useState(getTime.s(countDown - new Date().getTime()));


    if (showCountdown) {
      const x = setInterval(function () {

        const now = new Date().getTime();
        const distance = countDown - now;
        setDays(getTime.d(distance));
        setHours(getTime.h(distance));
        setMinutes(getTime.m(distance));
        setSeconds(getTime.s(distance));

        //do something later when date is reached
        if (distance <= 0) {
          clearInterval(x);
          setShowCountdown(false);
        }
        //seconds
      }, 1000);
    }


    return (
      <>
        <div className='card my-2 border border-secondary border-3 text-bg-light shadow'>
          <div className='card-header  text-bg-light py-1 text-bg-dark'>
            <h4 className="py-0 my-0 fs-5 text-center">{showCountdown ? <><i className='bi bi-clock fs-6 float-start'></i> Birthday Countdown</> : "🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈"}</h4>
          </div>
          <div className='card-body p-1 py-3'>
            {showCountdown
              ?
              <div id="countdown">
                <div className='w-100 d-flex my-1 badge text-bg-warning bg-gradient' id="days"><span className='w-25 px-2 py-1 badge border border-secondary text-bg-light'>{days}</span><span className="text-start ms-2 py-1 w-75"> D A Y S </span></div>
                <div className='w-100 d-flex my-1 badge text-bg-warning bg-gradient' id="hours"><span className='w-25 px-2 py-1 badge border border-secondary text-bg-light'>{hours}</span><span className="text-start ms-2 py-1 w-75"> H O U R S </span></div>
                <div className='w-100 d-flex my-1 badge text-bg-warning bg-gradient' id="minutes"><span className='w-25 px-2 py-1 badge border border-secondary text-bg-light'>{minutes}</span><span className="text-start ms-2 py-1 w-75"> M I N U T E S </span></div>
                <div className='w-100 d-flex my-1 badge text-bg-warning bg-gradient' id="seconds"><span className='w-25 px-2 py-1 badge border border-secondary text-bg-light'>{seconds}</span><span className="text-start ms-2 py-1 w-75"> S E C O N D S </span></div>
              </div>
              :
              <>
                <div>
                  <h5 className='text-center text-dark mb-1'>
                    TO MY FRIEND,
                  </h5>
                  <div className='px-3'>
                    <Image className='p-1' layout='responsive' style={{ width: '100%', height: 'auto' }} src={friendImage} />
                  </div>
                  <h5 className='text-center text-dark mb-1 mt-2'>
                    HAPPY BIRTHDAY!!
                  </h5>
                </div>
              </>
            }
          </div>
          {showCountdown
            ? null
            : (
              <div className='card-footer text-bg-dark'>
                <h4 className="py-0 my-0 fs-5 text-center">
                  🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈
                </h4>
              </div>
            )}
        </div>
        {showCountdown ? null : (
          <div className='card my-1 border border-secondary border-3 text-bg-light shadow p-1'>
            <Link className='btn btn-primary row' href={'/explore'} >
              <button type='button' className='btn btn-danger'>
                Let's Go Explore
                <i className='bi bi-arrow-right-circle-fill ms-2'></i>
              </button>
            </Link>
          </div>
        )
        }
      </>);
  }

  return (
    <>
      <IndexTemplate pageTitle='Home'>

        <Countdown />

      </IndexTemplate>
    </>
  )
}
