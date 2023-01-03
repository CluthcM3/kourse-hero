import React from "react";

const Footer = () => {
  return (
    <div className="md:w-[1140px] mx-auto  ">
      <div className="h-[165px]"></div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex items-start md:mx-6 mt-8">
          <div className="mt-1">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="50"
                height="50"
                rx="3"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                d="M18 35H32"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 15H32"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 35V30.828C29.9999 30.2976 29.7891 29.789 29.414 29.414L25 25L20.586 29.414C20.2109 29.789 20.0001 30.2976 20 30.828V35"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 15V19.172C20.0001 19.7024 20.2109 20.211 20.586 20.586L25 25L29.414 20.586C29.7891 20.211 29.9999 19.7024 30 19.172V15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="ml-6 w-full">
            <h1 className="text-white text-[18px]">Self-paced Learning</h1>
            <p className="text-[16px] text-gray-400">
              This feature allows learners to progress through the course at
              their own pace, rather than being tied to a fixed schedule. This
              can be especially useful for learners who have busy schedules or
              who prefer to learn at their own speed.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-start md:mx-12 mt-8">
          <div className="mt-1">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="50"
                height="50"
                rx="3"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                d="M34 24.5C34.0034 25.8199 33.6951 27.1219 33.1 28.3C32.3944 29.7117 31.3098 30.8992 29.9674 31.7293C28.6251 32.5594 27.0782 32.9994 25.5 33C24.1801 33.0034 22.8781 32.6951 21.7 32.1L16 34L17.9 28.3C17.3049 27.1219 16.9966 25.8199 17 24.5C17.0006 22.9218 17.4406 21.3748 18.2707 20.0325C19.1008 18.6902 20.2883 17.6056 21.7 16.9C22.8781 16.3049 24.1801 15.9966 25.5 16H26C28.0843 16.115 30.053 16.9948 31.5291 18.4709C33.0052 19.947 33.885 21.9157 34 24V24.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="ml-6 w-full">
            <h1 className="text-white text-[18px]">Instructor support</h1>
            <p className="text-[16px] text-gray-400">
              Providing learners with access to the instructor can be a valuable
              feature, as it allows them to ask questions and get feedback in
              real-time. This could be in the form of office hours, live Q&A
              sessions, or one-on-one consultations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
