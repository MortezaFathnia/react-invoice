import React from 'react';

const SVG = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 37 13.685'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <rect id="group-6-a" width="394" height="310" x="52" y="78" rx="155" />
      <rect id="group-6-c" width="335" height="358" y="30" rx="10" />
      <filter
        id="group-6-b"
        width="164.8%"
        height="160.6%"
        x="-32.4%"
        y="-24.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="22" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="32.5"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0"
        />
      </filter>
      <rect id="group-6-e" width="295" height="42" rx="5" />
      <filter
        id="group-6-d"
        width="107.1%"
        height="150%"
        x="-3.6%"
        y="-17.9%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="3"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
        />
      </filter>
      <circle id="group-6-f" cx="35" cy="35" r="35" />
      <filter
        id="group-6-g"
        width="147.1%"
        height="147.1%"
        x="-23.6%"
        y="-19.3%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="5"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
        />
      </filter>
      <linearGradient id="group-6-h" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FF3379" />
        <stop offset="100%" stopColor="#FF1744" />
      </linearGradient>
      <rect id="group-6-k" width="120" height="28" x="127" y="155" rx="14" />
      <filter
        id="group-6-j"
        width="117.5%"
        height="175%"
        x="-8.8%"
        y="-26.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="3"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-19 -12)">
      <use
        fill="#2B4A83"
        transform="rotate(-30 249 233)"
        xlinkHref="#group-6-a"
      />
      <g transform="translate(83 24)">
        <use fill="#000" filter="url(#group-6-b)" xlinkHref="#group-6-c" />
        <use fill="#FFF" xlinkHref="#group-6-c" />
        <g transform="translate(20 326)">
          <use fill="#000" filter="url(#group-6-d)" xlinkHref="#group-6-e" />
          <use fill="#2ECC71" xlinkHref="#group-6-e" />
          <text fill="#FFF" fontSize="16">
            <tspan x="77" y="24">
              پرداخت ۱۰۰ هزار تومان
            </tspan>
          </text>
        </g>
        <text fill="#303030" fontSize="14">
          <tspan x="15" y="244">
            با استفاده از کارت‌های شتاب خود از هر بانکی، می‌توانید
          </tspan>
        </text>
        <text fill="#303030" fontSize="14">
          <tspan x="15" y="273">
            مبلغ مورد نظر را با امنیت و سرعت بیشتر پرداخت کنید.
          </tspan>
        </text>
        <path
          fill="#F2F3F5"
          d="M10,25.9996873 L325,25.9996873 C330.522847,25.9996873 335,30.4768398 335,35.9996873 L335,199.000748 L0,199.000748 L1.77635684e-15,35.9996873 C1.10000309e-15,30.4768398 4.4771525,25.9996873 10,25.9996873 Z"
        />
        <g transform="translate(134)">
          <mask id="group-6-i" fill="#fff">
            <use xlinkHref="#group-6-f" />
          </mask>
          <use fill="#000" filter="url(#group-6-g)" xlinkHref="#group-6-f" />
          <use fill="#FFF" xlinkHref="#group-6-f" />
          <rect
            width="60"
            height="21"
            x="5"
            y="49"
            fill="url(#group-6-h)"
            mask="url(#group-6-i)"
            rx="10.5"
          />
        </g>
        <text fill="#FFF" fontSize="14" fontWeight="400">
          <tspan x="163" y="64">
            %
          </tspan>
        </text>
        <text fill="#FF1744" fontSize="30">
          <tspan x="157" y="33">
            رد
          </tspan>
        </text>
        <text fill="#424242" fontSize="18" fontWeight="400">
          <tspan x="142" y="103">
            ردریسلر
          </tspan>
        </text>
        <text fill="#424242" fontSize="12">
          <tspan x="67" y="131">
            mohrechi
          </tspan>
          <tspan x="121.099" y="131">
            @
          </tspan>
          <tspan x="132.713" y="131">
            live
          </tspan>
          <tspan x="152.111" y="131">
            .
          </tspan>
          <tspan x="155.513" y="131">
            com
          </tspan>
        </text>
        <text fill="#424242" fontSize="12">
          <tspan x="186" y="131">
            افزایش اعتبار کاربر
          </tspan>
        </text>
        <rect width="91" height="24" x="234" y="36" fill="#FFF" rx="12" />
        <text fill="#424242" fontSize="13">
          <tspan x="242" y="50">
            ناصر یوسف‌پور
          </tspan>
        </text>
        <rect width="70" height="24" x="10" y="36" fill="#FFF" rx="12" />
        <text fill="#424242" fontSize="13">
          <tspan x="20" y="52">
            ۴۰۶۴۱۷۷۰
          </tspan>
        </text>
        <rect width="334" height="1" x="1" y="198" fill="#E5E7E9" />
        <use fill="#000" filter="url(#group-6-j)" xlinkHref="#group-6-k" />
        <use fill="#FFF" xlinkHref="#group-6-k" />
        <text fill="#424242" fontSize="13">
          <tspan x="136" y="171">
            پرداخت با کارت
          </tspan>
        </text>
        <text fill="#424242" fontSize="13" opacity=".705">
          <tspan x="24" y="171">
            پرداخت موبایلی
          </tspan>
        </text>
        <text fill="#424242" fontSize="13" opacity=".7">
          <tspan x="267" y="171">
            کیف‌پول
          </tspan>
        </text>
        <g
          fill="#424242"
          fillOpacity=".498"
          fillRule="nonzero"
          transform="translate(120 96)"
        >
          <path d="M1.425,4 C1.425,2.632 2.4675,1.52 3.75,1.52 L6.75,1.52 L6.75,0 L3.75,0 C1.68,0 0,1.792 0,4 C0,6.208 1.68,8 3.75,8 L6.75,8 L6.75,6.48 L3.75,6.48 C2.4675,6.48 1.425,5.368 1.425,4 Z M4.5,4.8 L10.5,4.8 L10.5,3.2 L4.5,3.2 L4.5,4.8 Z M11.25,0 L8.25,0 L8.25,1.52 L11.25,1.52 C12.5325,1.52 13.575,2.632 13.575,4 C13.575,5.368 12.5325,6.48 11.25,6.48 L8.25,6.48 L8.25,8 L11.25,8 C13.32,8 15,6.208 15,4 C15,1.792 13.32,0 11.25,0 Z" />
        </g>
        <g fillRule="nonzero" transform="translate(223 159)">
          <circle cx="10" cy="10" r="10" fill="#3497FD" />
          <circle cx="12" cy="10" r="8" fill="#FFF" />
          <path
            fill="#3497FD"
            d="M16.0023855,2.00033335 C17.1261472,2.84494698 18.0661575,3.92085847 18.7517224,5.15737368 C17.4296104,5.15737178 16.1075095,5.15731094 14.7854491,5.15708812 C14.5880544,5.13471264 14.3894337,5.14666667 14.1917326,5.13869732 C14.0525755,5.11172414 13.9103533,5.1383908 13.7705832,5.12030651 C13.6559471,5.10559387 13.5400851,5.11478927 13.4251425,5.10804598 C12.9656789,5.0789272 12.5040697,5.05624521 12.0449127,5.01363985 C11.5241464,4.97747126 11.0171732,4.84291188 10.5010046,4.77180077 C9.91648354,4.67739464 9.32215403,4.68597701 8.73518085,4.74758621 C8.46636859,4.78038314 8.17334177,4.82727969 7.96981687,5.02191571 C7.87234561,5.10528736 7.84077472,5.25425287 7.89441457,5.37011494 C7.99617702,5.53348659 8.18253718,5.61869732 8.36399311,5.66038314 C8.48506591,5.69685824 8.61318852,5.66252874 8.73579388,5.69042146 C8.90008507,5.7005364 9.06590882,5.68306513 9.2298935,5.7051341 C9.79173258,5.72413793 10.3560238,5.6959387 10.9111196,5.60521073 C10.9390123,5.60306513 10.9672115,5.60091954 10.9954107,5.59908046 C11.1808514,5.56689655 11.367518,5.54237548 11.5535717,5.51448276 C12.2760238,5.41915709 13.0064452,5.40015326 13.7319625,5.36 C14.0323456,5.3554023 14.3324222,5.34191571 14.6321923,5.3256705 C16.0358155,5.32590378 17.4394476,5.32595951 18.8430834,5.32595594 C19.0009114,5.62398753 19.144114,5.93095467 19.2717353,6.24590125 C17.5272133,6.24607326 15.7826913,6.24571052 14.0381694,6.24337165 C13.9854491,6.23295019 13.9321157,6.22773946 13.8793954,6.21885057 C13.7580161,6.20934866 13.6375563,6.19279693 13.51679,6.17992337 C12.7627671,6.0845977 12.0099701,5.95954023 11.2492038,5.93563218 C11.0092038,5.90314176 10.7652192,5.94390805 10.5252192,5.91019157 C9.53456783,5.9062069 8.544223,5.90927203 7.55357166,5.908659 C7.27893564,5.9405364 7.00154101,5.9062069 6.72690499,5.93869732 C6.43265212,5.94084291 6.10805442,5.91908046 5.85487434,6.09685824 C5.71479771,6.18329502 5.60567894,6.36444444 5.67311189,6.52873563 C5.74269043,6.69731801 5.9247594,6.77149425 6.08843756,6.81655172 C6.41640691,6.8983908 6.75724982,6.86804598 7.09165595,6.87356322 C7.46928047,6.90390805 7.84905059,6.88275862 8.22759465,6.8891954 C8.64629197,6.89532567 9.06590882,6.87386973 9.4836866,6.90482759 C10.1647594,6.90206897 10.8464452,6.9189272 11.5253724,6.86283525 C11.6580927,6.85670498 11.7911196,6.84812261 11.9232268,6.83249042 C12.2202383,6.8091954 12.5160238,6.7748659 12.8118092,6.74084291 C12.8933418,6.73195402 12.9751809,6.72183908 13.0567134,6.70988506 C13.2311196,6.69272031 13.4046061,6.66911877 13.5783992,6.64796935 C13.6059855,6.64521073 13.6335717,6.64275862 13.6614644,6.64 C14.1144912,6.56337165 14.5742613,6.62314176 15.0294337,6.58268199 C16.4865311,6.58244701 17.9438086,6.58275245 19.4011144,6.58263162 C19.5066348,6.87291168 19.5990937,7.16946164 19.6777805,7.47157088 L15.858859,7.47157088 C15.6783226,7.47678161 15.4980927,7.46544061 15.3190889,7.44551724 C14.7692038,7.40812261 14.2205448,7.35111111 13.6703533,7.31402299 C13.2216176,7.27386973 12.7719625,7.24321839 12.3220008,7.22268199 C11.6121157,7.17793103 10.9003916,7.15831418 10.1883609,7.1656705 C9.76046821,7.13471264 9.3304299,7.15586207 8.90161764,7.1497318 C8.18682836,7.14942529 7.47173258,7.15065134 6.75663679,7.14911877 C6.7088207,7.14881226 6.66100461,7.15187739 6.61410806,7.16168582 C6.42560231,7.17057471 6.23679005,7.16045977 6.0482843,7.16659004 C5.74851419,7.20245211 5.43311189,7.14114943 5.14621534,7.2594636 C4.96874407,7.32444444 4.8001617,7.4697318 4.79525748,7.67203065 C4.81088967,7.7759387 4.87096629,7.87402299 4.96322683,7.92735632 C5.17073641,8.05731801 5.424223,8.08551724 5.664223,8.08827586 C5.94468277,8.11494253 6.22851419,8.09318008 6.51020001,8.09931034 C7.02023833,8.12934866 7.53211572,8.10942529 8.04307357,8.11524904 C8.53349503,8.11524904 9.02391649,8.11494253 9.51433794,8.11524904 C10.0455257,8.15724138 10.5779395,8.10911877 11.1094337,8.09992337 C12.280315,8.04229885 13.4508897,7.95923372 14.6205448,7.87402299 C15.0125755,7.85103448 15.4042996,7.82835249 15.7960238,7.80842912 C17.117121,7.80890085 18.4382182,7.80864657 19.7593155,7.80864397 C19.8222971,8.09045699 19.8733844,8.37675901 19.9120229,8.66699561 C18.601728,8.66698435 17.2914301,8.6670317 15.9811272,8.66727969 C15.7092805,8.6764751 15.4416943,8.6194636 15.1713188,8.6010728 C15.0797019,8.58789272 14.9877479,8.57900383 14.8957939,8.57042146 C14.8041464,8.55754789 14.7121923,8.54835249 14.6199318,8.53977011 C14.5282843,8.52659004 14.4360238,8.51770115 14.3440697,8.50942529 C14.1405448,8.48367816 13.9361004,8.4640613 13.7313494,8.44781609 C13.2222307,8.39816092 12.7106598,8.36842912 12.1993954,8.35739464 C12.0032268,8.32551724 11.8027671,8.36260536 11.6059855,8.33501916 C11.2865985,8.31724138 10.9656789,8.34697318 10.646905,8.31478927 C9.3396253,8.31417625 8.03265212,8.31478927 6.72537243,8.31417625 C6.68797779,8.31509579 6.65088967,8.31908046 6.61410806,8.32643678 C6.30330346,8.33869732 5.99157932,8.3154023 5.68169426,8.34544061 C5.46713488,8.33471264 5.25410806,8.36291188 5.03985518,8.3610728 C4.82958698,8.3748659 4.60705825,8.43310345 4.46023833,8.59402299 C4.3498935,8.69793103 4.32200078,8.89164751 4.42468277,9.00934866 C4.56751802,9.17915709 4.80046821,9.22574713 5.01012338,9.2502682 C5.22376323,9.28122605 5.44046821,9.24873563 5.65441457,9.27693487 C6.00046821,9.29042146 6.34805442,9.26283525 6.69349503,9.29501916 C7.06131112,9.29655172 7.4288207,9.2937931 7.79663679,9.2959387 C8.00046821,9.31862069 8.2058322,9.30881226 8.41058315,9.31065134 C8.79893564,9.31034483 9.18759465,9.31095785 9.57625365,9.31003831 C10.0047594,9.33977011 10.4357173,9.32199234 10.8654491,9.32444444 C11.0944146,9.2937931 11.3261387,9.32597701 11.5557173,9.30114943 C12.4961004,9.26957854 13.4364835,9.20827586 14.3753341,9.13103448 C14.6698935,9.11356322 14.9638399,9.08321839 15.2583992,9.0605364 C15.3313494,9.05042146 15.4055257,9.04980843 15.4787824,9.03969349 C15.9308897,8.98452107 16.3863686,9.00904215 16.840928,9.00413793 C17.8776564,9.00435244 18.9143849,9.00396646 19.9511028,9.00413567 C19.9775577,9.271913 19.9934498,9.54279433 19.9983569,9.81635725 C18.8127852,9.81638607 17.6271858,9.81654039 16.441541,9.81701149 C16.2720391,9.8216092 16.1061847,9.78145594 15.938246,9.76551724 C15.8564069,9.75386973 15.7748743,9.74375479 15.6930353,9.73517241 C15.5097402,9.70911877 15.3252192,9.69440613 15.1413111,9.67386973 C15.0395487,9.65915709 14.9371732,9.64965517 14.8351042,9.64321839 C14.4694337,9.6067433 14.1031502,9.58283525 13.7365602,9.56689655 C13.5658322,9.54298851 13.3926521,9.56934866 13.2222307,9.54482759 C13.0199318,9.53072797 12.8164069,9.55402299 12.6147211,9.52766284 C12.1635333,9.51509579 11.7105065,9.54298851 11.2602383,9.50957854 C9.60506591,9.51049808 7.95020001,9.50957854 6.29533411,9.50988506 C6.19694331,9.51111111 6.09763296,9.50191571 6.00108124,9.52183908 C5.76230729,9.53318008 5.5226138,9.51233716 5.2847594,9.53992337 C5.00062147,9.53869732 4.692882,9.52306513 4.44276706,9.68183908 C4.30391649,9.75509579 4.20246055,9.9108046 4.22790116,10.0711111 C4.25027664,10.2050575 4.37441457,10.2844444 4.48567894,10.342069 C4.69226898,10.4315709 4.92062147,10.4475096 5.14284369,10.4481226 C5.43219235,10.4818391 5.7258322,10.4383142 6.01548737,10.4732567 C6.292882,10.4790805 6.57058315,10.4729502 6.84797779,10.4754023 C7.31602377,10.5155556 7.7877479,10.4662069 8.25610039,10.5057471 C8.80843756,10.51341 9.36169426,10.4895019 9.9134184,10.5219923 C10.4657556,10.5192337 11.0187058,10.524751 11.5713494,10.5192337 C11.7822307,10.4891954 11.996177,10.5207663 12.2076713,10.4971648 C13.0735717,10.4704981 13.9403916,10.4294253 14.8044529,10.3567816 C14.9767134,10.3531034 15.1474414,10.3282759 15.3193954,10.3175479 C15.4312728,10.3034483 15.5440697,10.2948659 15.6568667,10.2872031 C15.7485142,10.2737165 15.8407747,10.2645211 15.9330353,10.2562452 C16.1013111,10.2375479 16.2692805,10.2108812 16.4381694,10.1998467 C17.6248714,10.1991959 18.8114199,10.1994664 19.9980323,10.1994627 C19.9923514,10.4887662 19.9743848,10.7750582 19.9446324,11.0578385 C18.6030727,11.0578743 17.2614772,11.0579039 15.9198245,11.0577778 C15.8315793,11.0562452 15.744223,11.0433716 15.6568667,11.0317241 C15.5256789,11.0188506 15.3944912,11.004751 15.2632728,10.9918774 C15.1716559,10.9790038 15.0797019,10.9698084 14.9877479,10.9612261 C14.8961004,10.9483525 14.8038399,10.9391571 14.7118858,10.9305747 C14.5181694,10.9072797 14.3241464,10.8870498 14.1298169,10.869272 C14.0179395,10.8539464 13.9057556,10.8444444 13.7932651,10.8389272 C13.5079012,10.8098084 13.2216176,10.7895785 12.9350276,10.777931 C12.7008514,10.7589272 12.4651425,10.7518774 12.2300468,10.7478927 C12.0335717,10.7163218 11.8331119,10.75341 11.6363303,10.7258238 C11.3748743,10.7114176 11.1124989,10.7285824 10.8507364,10.7172414 C10.7741081,10.7009962 10.6956406,10.7046743 10.6180927,10.7049808 C9.29916553,10.7068199 7.98023833,10.7031418 6.66131112,10.7068199 C6.34805442,10.742069 6.03173258,10.7000766 5.71847587,10.7331801 C5.56767128,10.7457471 5.41472108,10.720613 5.26544905,10.7481992 C5.0380161,10.7460536 4.79709656,10.7506513 4.59724982,10.8738697 C4.47648354,10.9504981 4.34958698,11.0703448 4.36338009,11.2266667 C4.35418469,11.3314943 4.42836093,11.4182375 4.50652185,11.4777318 C4.67326515,11.5960153 4.88169426,11.634636 5.08215403,11.645364 C5.27924216,11.6714176 5.47939541,11.6392337 5.67679005,11.6683525 C5.9544912,11.6745134 6.23219235,11.6689655 6.5098935,11.6704981 C6.92767128,11.7017625 7.34790116,11.68 7.76690499,11.6855172 C8.49119618,11.7272031 9.21885902,11.6750958 9.9431502,11.7173946 C10.2404682,11.7149425 10.5377862,11.7195402 10.8351042,11.7152797 C11.0741847,11.6839847 11.3163303,11.7173946 11.5557173,11.691954 C12.38361,11.6643678 13.2115027,11.6159387 14.0381694,11.5527969 C14.3039165,11.5350192 14.5696636,11.5150958 14.8351042,11.4914943 C14.9577096,11.4829425 15.080315,11.4755556 15.2026138,11.4608429 C15.4619241,11.4433716 15.720315,11.4152031 15.9796253,11.395249 C17.2875434,11.3947794 18.5954616,11.3946696 19.9033797,11.3949195 C19.8650478,11.6694151 19.8155728,11.9403411 19.7554265,12.2072256 C18.4053764,12.2072141 17.0553233,12.2072611 15.7052651,12.2075096 C15.5986291,12.2062835 15.4931579,12.1906513 15.3868284,12.1872797 C15.3132651,12.1765517 15.2390582,12.1762452 15.1658322,12.1658238 C13.7383992,12.0613027 12.3100468,11.954023 10.8801617,11.9104981 C10.6456789,11.8850575 10.4090506,11.9141762 10.1745678,11.8945594 C10.0672881,11.8804598 9.95878239,11.8856705 9.85119618,11.885364 L6.97058315,11.885364 C6.66376323,11.8789272 6.35847587,11.9117241 6.05134944,11.9009962 C5.76506591,11.9362759 5.46866744,11.8801533 5.19096629,11.9770115 C5.02514254,12.0367816 4.84276706,12.1459004 4.80751802,12.3331801 C4.76276706,12.4864368 4.88659848,12.625931 5.01349503,12.6930268 C5.20108124,12.7831418 5.41165595,12.8211494 5.61885902,12.8205364 C5.96675174,12.8481533 6.31617702,12.8312644 6.66498928,12.8349425 C7.21487434,12.8668199 7.76659848,12.8441379 8.31740308,12.8508812 C8.84859082,12.857318 9.38100461,12.835249 9.91127281,12.8668199 C10.4185525,12.8622529 10.9276713,12.8800307 11.4331119,12.8386207 C11.6375563,12.8331034 11.8426138,12.8257471 12.0461387,12.8088889 C12.1993954,12.8009502 12.3529586,12.7950958 12.5056023,12.7782375 C12.7921923,12.7650881 13.0781694,12.7402299 13.3641464,12.7175479 C14.0449127,12.6700383 14.7247594,12.605977 15.4061387,12.5652107 C15.7914261,12.533977 16.1779395,12.5465134 16.5641464,12.5443678 L19.6732323,12.5443678 C19.5967478,12.8358555 19.5074371,13.1221479 19.4059398,13.4026054 L14.109587,13.4026054 C13.8076713,13.4127203 13.5094337,13.3520307 13.2102766,13.3213793 C13.0861387,13.3042146 12.9616943,13.2891954 12.8381694,13.269272 C12.7373264,13.2557854 12.63679,13.2392337 12.5353341,13.2294253 C12.2711196,13.1914176 12.0053724,13.1586207 11.7393188,13.1371648 C11.4567134,13.1114176 11.1731885,13.0921379 10.8893571,13.09459 C10.71679,13.07341 10.5426904,13.0819923 10.3692038,13.0807663 L7.67433794,13.0807663 C7.56215403,13.0810728 7.44997013,13.0758621 7.33839924,13.0899617 C7.1385525,13.1108046 6.93594714,13.0777011 6.73701993,13.108046 C6.4939548,13.1172414 6.24200078,13.0887356 6.01088967,13.1825287 C5.84905059,13.2398467 5.69272875,13.3649042 5.65533411,13.5399234 C5.62928047,13.6655939 5.71479771,13.782682 5.81104292,13.8544061 C6.01885902,13.9840613 6.27111955,14.0150192 6.51142606,14.0174713 C6.92889733,14.0536398 7.34943373,14.0073563 7.76659848,14.045977 C8.68644522,14.04659 9.60629197,14.045977 10.5261387,14.0462835 C10.7259855,14.0392337 10.9279778,14.0613027 11.1265985,14.0343295 C11.3003916,14.0318774 11.4744912,14.0260536 11.6470582,14.0045977 C11.9544912,13.9859004 12.2606981,13.9497318 12.5665985,13.9129502 C12.648131,13.9043985 12.7299701,13.8939464 12.8111962,13.8822989 C12.8930353,13.874023 12.9748743,13.863295 13.0564069,13.8516475 C13.230813,13.8347893 13.4042996,13.8102682 13.5780927,13.7903448 C13.6703533,13.7817931 13.7626138,13.7731801 13.8542613,13.7578544 C14.2772498,13.7443678 14.7014337,13.772567 15.1235333,13.7394636 C16.5079099,13.7399304 17.8924641,13.739864 19.2769254,13.7398058 C19.149888,14.0545712 19.0072955,14.3613902 18.8501005,14.6593103 L15.9504759,14.6593103 C15.3742613,14.6568582 14.7977096,14.6694253 14.2223839,14.6409195 C13.9882077,14.6216092 13.7524989,14.616092 13.5174031,14.6099617 C12.9034567,14.5744061 12.2867517,14.5449808 11.674951,14.4704981 C11.3371732,14.4183908 11.000315,14.3595402 10.6619241,14.3114176 C10.5509663,14.296092 10.440315,14.2816858 10.3290506,14.2712644 C10.1699701,14.2492261 10.0096636,14.2440153 9.8493571,14.2436782 C9.57410806,14.2041379 9.29885902,14.2599234 9.02299695,14.2452107 C8.81426131,14.2654406 8.60460614,14.2547126 8.39648354,14.2783142 C8.20246055,14.3285824 7.98759465,14.4125977 7.892882,14.6026054 C7.81318852,14.7488123 7.87387817,14.9370115 7.99985518,15.0363218 C8.20307357,15.2055172 8.47188583,15.2683831 8.72966361,15.2925977 C8.83081304,15.3085057 8.932882,15.3186207 9.035564,15.3229119 C9.57931879,15.3734866 10.1307364,15.3437548 10.6665219,15.2370881 C11.0070582,15.1727203 11.3472881,15.1071264 11.686905,15.0387739 C12.122154,14.9866667 12.5598552,14.9575479 12.9963303,14.9235556 C13.6442996,14.8867433 14.292269,14.8637548 14.9405448,14.8429119 C16.2105031,14.8432376 17.4804998,14.8433325 18.7505213,14.843333 C18.0684769,16.0727793 17.1348523,17.1433638 16.019168,17.9855665 C12.3901488,17.9853685 8.7611375,17.9837984 5.13211572,17.9855939 C4.68705825,17.984705 4.24292032,17.8415326 3.88675174,17.5736398 C3.355564,17.1889655 3.02851419,16.5511111 3.00399311,15.897318 C2.99571725,12.0009195 3.00338009,8.10390805 3.00031495,4.20720307 C3.00246055,3.68245211 3.17564062,3.15249042 3.52506591,2.75555556 C3.8606981,2.35157088 4.35081304,2.08245211 4.87311189,2.01869732 C4.97947204,2.01808429 5.08521917,2.00091954 5.19157932,2 C8.79524696,2.00054786 12.3988058,2.00044289 16.0023855,2.00033335 Z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
