import React from 'react';
import { ColorScheme } from '@mantine/core';

export function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" width={250} height={60} preserveAspectRatio="xMidYMid meet">
      <g 
        transform="translate(-25, 125) scale(0.100000,-0.100000)" 
        fill="#000000" 
        stroke="none"
      >
        <path fill={colorScheme === 'dark' ? '#fff' : '#000'} d="M286 983 c-3 -4 -6 -159 -6 -345 l0 -338 233 0 c129 0 315 3 415 7
        l182 6 17 36 c20 41 57 62 121 69 24 3 45 10 47 16 2 6 7 63 10 128 l7 116 49
        4 c27 1 49 3 49 3 -7 0 -42 -121 -46 -160 -6 -45 -4 -59 11 -75 36 -40 108
        -13 205 76 35 32 61 51 57 41 -18 -47 -19 -93 -3 -106 27 -23 65 -3 145 73 73
        70 137 114 148 102 3 -3 -6 -39 -20 -80 -14 -41 -23 -77 -19 -80 10 -11 22 -6
        22 8 0 19 113 122 161 146 l39 20 0 -22 c0 -13 -9 -47 -20 -76 -15 -40 -18
        -58 -10 -72 17 -32 48 -23 106 31 l54 52 -6 -32 c-5 -23 -2 -37 11 -51 29 -32
        74 -25 172 26 79 42 92 46 136 40 35 -4 47 -2 44 7 -2 7 -27 13 -59 15 -49 3
        -65 -2 -143 -43 -110 -58 -138 -57 -133 8 l3 42 60 5 c97 8 142 52 97 93 -21
        19 -64 22 -93 7 -11 -6 -60 -51 -109 -100 -81 -81 -120 -107 -120 -80 0 5 9
        33 21 61 25 65 22 103 -8 107 -28 4 -89 -28 -137 -72 -44 -41 -51 -44 -36 -16
        18 33 9 74 -17 78 -34 5 -78 -23 -162 -104 -43 -41 -86 -74 -95 -74 -22 0 -21
        40 4 110 10 30 16 58 14 62 -2 4 -36 -24 -74 -63 -82 -82 -153 -129 -193 -129
        l-30 0 6 63 c2 34 14 87 26 117 21 55 21 55 97 84 97 36 184 113 184 164 0 47
        -36 68 -87 51 -48 -16 -120 -90 -161 -166 -28 -54 -36 -61 -69 -67 -77 -12
        -73 -17 -73 99 l0 105 -30 0 c-47 0 -99 26 -110 55 l-10 25 -434 0 c-238 -1
        -436 -4 -440 -7z m867 -32 c7 -26 49 -52 97 -58 l40 -6 0 -93 c0 -86 -2 -93
        -21 -99 -13 -4 -25 -2 -29 5 -10 16 -51 9 -64 -13 -8 -12 -8 -22 0 -35 16 -25
        41 -26 61 -3 9 12 26 21 37 21 17 0 18 -5 12 -46 -3 -26 -6 -77 -6 -114 l0
        -67 -47 -7 c-61 -8 -112 -39 -126 -76 l-11 -30 -97 0 c-52 0 -231 -3 -397 -7
        l-302 -6 0 326 0 327 424 0 c406 0 424 -1 429 -19z m521 -47 c9 -23 -18 -67
        -59 -98 -40 -31 -144 -81 -152 -73 -6 7 68 116 98 143 50 45 102 58 113 28z
        m-454 -224 c-20 -13 -33 -13 -25 0 3 6 14 10 23 10 15 0 15 -2 2 -10z m1181
        -20 c5 0 9 -7 9 -16 0 -18 -58 -44 -101 -44 -28 0 -30 2 -18 17 21 25 72 54
        87 48 8 -3 18 -5 23 -5z"/>

        <path fill={colorScheme === 'dark' ? '#fff' : '#000'} d="M377 763 c-4 -3 -7 -22 -7 -40 0 -34 1 -34 37 -31 l37 3 -3 -104 -3
        -104 24 6 c13 4 30 7 39 7 14 0 18 17 24 100 l7 100 39 0 c38 0 39 1 39 35 l0
        35 -113 0 c-63 0 -117 -3 -120 -7z m163 -22 l35 -3 -29 -13 c-38 -16 -44 -34
        -45 -122 -1 -57 -4 -73 -16 -73 -11 0 -15 19 -17 88 l-3 87 -32 10 c-18 5 -33
        12 -33 16 0 14 48 17 140 10z"/>

        <path fill={colorScheme === 'dark' ? '#fff' : '#000'} d="M713 748 c-19 -23 -112 -242 -107 -250 3 -4 18 -8 34 -8 24 0 33 7
        50 40 27 52 51 52 75 0 16 -35 22 -40 52 -40 18 0 33 5 33 11 0 7 -12 48 -26
        93 -14 45 -31 99 -38 121 -10 31 -18 41 -38 43 -13 2 -29 -3 -35 -10z m52 -54
        c2 -10 12 -39 21 -64 9 -25 19 -61 21 -80 5 -31 3 -33 -11 -21 -9 7 -16 19
        -16 26 0 6 -9 20 -20 30 -19 17 -19 20 -4 36 14 15 14 21 2 46 -10 19 -20 27
        -33 24 -20 -3 -20 -3 -1 18 20 22 33 18 41 -15z m-27 -62 c-18 -8 -25 4 -15
        28 l10 25 6 -25 c4 -14 4 -26 -1 -28z m-29 -16 c10 -12 8 -17 -8 -26 -12 -6
        -23 -21 -27 -35 -6 -23 -34 -44 -34 -25 0 15 43 100 51 100 3 0 12 -6 18 -14z"/>

        <path fill={colorScheme === 'dark' ? '#fff' : '#000'} d="M928 735 c-38 -21 -58 -64 -58 -124 0 -102 26 -126 126 -116 l64 7 0
        59 0 59 -49 0 c-35 0 -51 -4 -55 -16 -9 -23 -8 -24 15 -24 25 0 23 -33 -3 -38
        -25 -5 -37 27 -28 76 9 50 34 74 72 69 20 -3 29 2 34 16 3 10 2 23 -4 29 -17
        17 -85 19 -114 3z m25 -40 c-38 -30 -52 -94 -34 -147 11 -30 10 -31 -4 -18
        -37 38 -20 172 23 183 40 11 45 5 15 -18z m77 -141 c0 -13 -6 -24 -13 -24 -9
        0 -12 10 -9 30 5 35 22 30 22 -6z"/>

        <path fill={colorScheme === 'dark' ? '#fff' : '#000'} d="M1685 719 c-10 -15 1 -23 20 -15 9 3 13 10 10 16 -8 13 -22 13 -30
        -1z"/>
      </g>
    </svg>
  );
}