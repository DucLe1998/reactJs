import React from 'react';

const IconReconnect = ({ disabled }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={disabled ? 0.2 : 0.48}>
      <path
        d="M19.9391 9.09722L19.9215 9.11257L19.9051 9.12905L17.6 11.4341L10.79 4.62402L13.095 2.319C13.6413 1.77268 14.4693 1.8234 14.8732 2.28498L14.8886 2.30252L14.9051 2.319L16.7051 4.119L17.2 4.61397L17.695 4.119L20.2 1.61397L20.6101 2.02402L18.1051 4.52905L17.6101 5.02402L18.1051 5.519L19.9051 7.319C20.4514 7.86532 20.4007 8.69334 19.9391 9.09722ZM11.305 16.019L12.2101 16.924L9.90505 19.229L9.88857 19.2455L9.87322 19.2631C9.46934 19.7247 8.64132 19.7754 8.095 19.229L6.295 17.4291L5.80002 16.9341L5.30505 17.4291L1.80002 20.9341L1.38997 20.524L4.895 17.019L5.38997 16.524L4.895 16.029L3.095 14.229L3.07852 14.2126L3.06098 14.1972C2.5994 13.7933 2.54868 12.9653 3.095 12.419L5.4168 10.0972L6.4224 11.0358L6.9168 11.4972L7.395 11.019L9.70002 8.71397L10.1101 9.12402L7.80505 11.429L7.31007 11.924L7.80505 12.419L9.90505 14.519L10.4 15.014L10.895 14.519L13.2 12.214L13.6187 12.6326L11.2964 15.0378L10.8187 15.5326L11.305 16.019Z"
        stroke="black"
        strokeWidth="1.4"
      />
    </g>
  </svg>
);

export default IconReconnect;