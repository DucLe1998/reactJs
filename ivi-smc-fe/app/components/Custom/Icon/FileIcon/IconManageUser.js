import React from 'react';

const IconManageUser = ({ disabled }) => (
  <svg
    width="21"
    height="23"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={disabled ? 0.2 : 0.48} clipPath="url(#clip0)">
      <path
        d="M12 24.2615H10.5V20.3552C10.4994 19.7338 10.2622 19.138 9.84033 18.6986C9.4185 18.2592 8.84655 18.0121 8.25 18.0115H5.25C4.65345 18.0121 4.0815 18.2592 3.65967 18.6986C3.23784 19.138 3.0006 19.7338 3 20.3552V24.2615H1.5V20.3552C1.50119 19.3196 1.89666 18.3268 2.59966 17.5945C3.30267 16.8622 4.2558 16.4502 5.25 16.449H8.25C9.2442 16.4502 10.1973 16.8622 10.9003 17.5945C11.6033 18.3268 11.9988 19.3196 12 20.3552V24.2615Z"
        fill="black"
      />
      <path
        d="M6.75 8.63647C7.19501 8.63647 7.63002 8.77393 8.00004 9.03147C8.37005 9.289 8.65843 9.65505 8.82873 10.0833C8.99903 10.5116 9.04359 10.9828 8.95677 11.4375C8.86995 11.8921 8.65566 12.3097 8.34099 12.6375C8.02632 12.9653 7.62541 13.1885 7.18896 13.2789C6.7525 13.3694 6.3001 13.323 5.88896 13.1456C5.47783 12.9682 5.12643 12.6678 4.8792 12.2823C4.63196 11.8969 4.5 11.4438 4.5 10.9802C4.5 10.3586 4.73705 9.76248 5.15901 9.32294C5.58097 8.8834 6.15326 8.63647 6.75 8.63647ZM6.75 7.07397C6.00832 7.07397 5.2833 7.30307 4.66661 7.7323C4.04993 8.16152 3.56928 8.77159 3.28545 9.48537C3.00162 10.1991 2.92736 10.9846 3.07206 11.7423C3.21675 12.5 3.5739 13.1961 4.09835 13.7424C4.6228 14.2887 5.29098 14.6607 6.01841 14.8114C6.74584 14.9621 7.49984 14.8848 8.18506 14.5891C8.87029 14.2935 9.45596 13.7928 9.86801 13.1504C10.2801 12.508 10.5 11.7528 10.5 10.9802C10.5 10.4672 10.403 9.9593 10.2146 9.48537C10.0261 9.01144 9.74987 8.58082 9.40165 8.21809C9.05343 7.85536 8.64004 7.56763 8.18506 7.37132C7.73009 7.17501 7.24246 7.07397 6.75 7.07397Z"
        fill="black"
      />
      <path
        d="M22.5 10.199C22.3701 10.2008 22.241 10.2202 22.116 10.2568L21.3248 9.43256C21.6028 8.95741 21.7499 8.41169 21.7499 7.85522C21.7499 7.29875 21.6028 6.75302 21.3248 6.27787L22.116 5.45366C22.4407 5.54782 22.7863 5.5273 23.0986 5.3953C23.411 5.26329 23.6726 5.02724 23.8425 4.72401C24.0125 4.42078 24.0812 4.06745 24.038 3.71922C23.9949 3.37098 23.8422 3.04745 23.6038 2.79917C23.3655 2.55088 23.0549 2.39182 22.7206 2.34684C22.3863 2.30185 22.0471 2.37347 21.756 2.55051C21.4649 2.72755 21.2383 3.00003 21.1115 3.3254C20.9848 3.65077 20.9651 4.0107 21.0555 4.34897L20.265 5.17319C19.8089 4.88355 19.285 4.73033 18.7508 4.73033C18.2165 4.73033 17.6926 4.88355 17.2365 5.17319L16.4453 4.34897C16.5357 4.0107 16.516 3.65077 16.3892 3.3254C16.2625 3.00003 16.0359 2.72755 15.7448 2.55051C15.4537 2.37347 15.1145 2.30185 14.7802 2.34684C14.4459 2.39182 14.1353 2.55088 13.8969 2.79917C13.6586 3.04745 13.5059 3.37098 13.4627 3.71922C13.4195 4.06745 13.4883 4.42078 13.6582 4.72401C13.8282 5.02724 14.0898 5.26329 14.4021 5.3953C14.7145 5.5273 15.06 5.54782 15.3848 5.45366L16.176 6.27787C15.8979 6.75302 15.7509 7.29875 15.7509 7.85522C15.7509 8.41169 15.8979 8.95741 16.176 9.43256L15.3848 10.2568C15.06 10.1626 14.7145 10.1831 14.4021 10.3151C14.0898 10.4471 13.8282 10.6832 13.6582 10.9864C13.4883 11.2897 13.4195 11.643 13.4627 11.9912C13.5059 12.3395 13.6586 12.663 13.8969 12.9113C14.1353 13.1596 14.4459 13.3186 14.7802 13.3636C15.1145 13.4086 15.4537 13.337 15.7448 13.1599C16.0359 12.9829 16.2625 12.7104 16.3892 12.385C16.516 12.0597 16.5357 11.6997 16.4453 11.3615L17.2365 10.5373C17.6926 10.8269 18.2165 10.9801 18.7508 10.9801C19.285 10.9801 19.8089 10.8269 20.265 10.5373L21.0563 11.3615C20.9767 11.6764 20.9938 12.0095 21.1052 12.3138C21.2165 12.6181 21.4166 12.8785 21.6773 13.0584C21.9379 13.2382 22.2461 13.3286 22.5586 13.3167C22.8711 13.3048 23.1721 13.1913 23.4195 12.9921C23.6669 12.7929 23.8482 12.518 23.9379 12.206C24.0277 11.894 24.0214 11.5606 23.92 11.2525C23.8186 10.9444 23.6271 10.6772 23.3724 10.4882C23.1178 10.2993 22.8127 10.1981 22.5 10.199ZM17.25 7.85522C17.25 7.54619 17.338 7.24409 17.5028 6.98714C17.6676 6.73019 17.9019 6.52992 18.176 6.41166C18.4501 6.29339 18.7517 6.26245 19.0426 6.32274C19.3336 6.38303 19.6009 6.53184 19.8107 6.75036C20.0204 6.96888 20.1633 7.24729 20.2212 7.55039C20.2791 7.85349 20.2494 8.16765 20.1358 8.45316C20.0223 8.73867 19.83 8.9827 19.5834 9.15439C19.3367 9.32608 19.0467 9.41772 18.75 9.41772C18.3523 9.41731 17.971 9.25255 17.6898 8.95962C17.4086 8.66668 17.2504 8.26949 17.25 7.85522Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="25"
          fill="white"
          transform="translate(0 0.823975)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default IconManageUser;