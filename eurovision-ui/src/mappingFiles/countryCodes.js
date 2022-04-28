const countryCodes = [
    {
      "value": "AF",
      "label": "Afghanistan"
    },
    {
      "value": "AX",
      "label": "Åland Islands"
    },
    {
      "value": "AL",
      "label": "Albania"
    },
    {
      "value": "DZ",
      "label": "Algeria"
    },
    {
      "value": "AS",
      "label": "American Samoa"
    },
    {
      "value": "AD",
      "label": "Andorra"
    },
    {
      "value": "AO",
      "label": "Angola"
    },
    {
      "value": "AI",
      "label": "Anguilla"
    },
    {
      "value": "AQ",
      "label": "Antarctica"
    },
    {
      "value": "AG",
      "label": "Antigua and Barbuda"
    },
    {
      "value": "AR",
      "label": "Argentina"
    },
    {
      "value": "AM",
      "label": "Armenia"
    },
    {
      "value": "AW",
      "label": "Aruba"
    },
    {
      "value": "AU",
      "label": "Australia"
    },
    {
      "value": "AT",
      "label": "Austria"
    },
    {
      "value": "AZ",
      "label": "Azerbaijan"
    },
    {
      "value": "BS",
      "label": "Bahamas"
    },
    {
      "value": "BH",
      "label": "Bahrain"
    },
    {
      "value": "BD",
      "label": "Bangladesh"
    },
    {
      "value": "BB",
      "label": "Barbados"
    },
    {
      "value": "BY",
      "label": "Belarus"
    },
    {
      "value": "BE",
      "label": "Belgium"
    },
    {
      "value": "BZ",
      "label": "Belize"
    },
    {
      "value": "BJ",
      "label": "Benin"
    },
    {
      "value": "BM",
      "label": "Bermuda"
    },
    {
      "value": "BT",
      "label": "Bhutan"
    },
    {
      "value": "BO",
      "label": "Bolivia, Plurinational State of"
    },
    {
      "value": "BQ",
      "label": "Bonaire, Sint Eustatius and Saba"
    },
    {
      "value": "BA",
      "label": "Bosnia and Herzegovina"
    },
    {
      "value": "BW",
      "label": "Botswana"
    },
    {
      "value": "BV",
      "label": "Bouvet Island"
    },
    {
      "value": "BR",
      "label": "Brazil"
    },
    {
      "value": "IO",
      "label": "British Indian Ocean Territory"
    },
    {
      "value": "BN",
      "label": "Brunei Darussalam"
    },
    {
      "value": "BG",
      "label": "Bulgaria"
    },
    {
      "value": "BF",
      "label": "Burkina Faso"
    },
    {
      "value": "BI",
      "label": "Burundi"
    },
    {
      "value": "CV",
      "label": "Cabo Verde"
    },
    {
      "value": "KH",
      "label": "Cambodia"
    },
    {
      "value": "CM",
      "label": "Cameroon"
    },
    {
      "value": "CA",
      "label": "Canada"
    },
    {
      "value": "KY",
      "label": "Cayman Islands"
    },
    {
      "value": "CF",
      "label": "Central African Republic"
    },
    {
      "value": "TD",
      "label": "Chad"
    },
    {
      "value": "CL",
      "label": "Chile"
    },
    {
      "value": "CN",
      "label": "China"
    },
    {
      "value": "CX",
      "label": "Christmas Island"
    },
    {
      "value": "CC",
      "label": "Cocos (Keeling) Islands"
    },
    {
      "value": "CO",
      "label": "Colombia"
    },
    {
      "value": "KM",
      "label": "Comoros"
    },
    {
      "value": "CG",
      "label": "Congo"
    },
    {
      "value": "CD",
      "label": "Congo, Democratic Republic of the"
    },
    {
      "value": "CK",
      "label": "Cook Islands"
    },
    {
      "value": "CR",
      "label": "Costa Rica"
    },
    {
      "value": "HR",
      "label": "Croatia"
    },
    {
      "value": "CU",
      "label": "Cuba"
    },
    {
      "value": "CW",
      "label": "Curaçao"
    },
    {
      "value": "CY",
      "label": "Cyprus"
    },
    {
      "value": "CZ",
      "label": "Czech Republic"
    },
    {
      "value": "CI",
      "label": "Côte d'Ivoire"
    },
    {
      "value": "DK",
      "label": "Denmark"
    },
    {
      "value": "DJ",
      "label": "Djibouti"
    },
    {
      "value": "DM",
      "label": "Dominica"
    },
    {
      "value": "DO",
      "label": "Dominican Republic"
    },
    {
      "value": "EC",
      "label": "Ecuador"
    },
    {
      "value": "EG",
      "label": "Egypt"
    },
    {
      "value": "SV",
      "label": "El Salvador"
    },
    {
      "value": "GQ",
      "label": "Equatorial Guinea"
    },
    {
      "value": "ER",
      "label": "Eritrea"
    },
    {
      "value": "EE",
      "label": "Estonia"
    },
    {
      "value": "SZ",
      "label": "Eswatini"
    },
    {
      "value": "ET",
      "label": "Ethiopia"
    },
    {
      "value": "FK",
      "label": "Falkland Islands (Malvinas)"
    },
    {
      "value": "FO",
      "label": "Faroe Islands"
    },
    {
      "value": "FJ",
      "label": "Fiji"
    },
    {
      "value": "FI",
      "label": "Finland"
    },
    {
      "value": "FR",
      "label": "France"
    },
    {
      "value": "GF",
      "label": "French Guiana"
    },
    {
      "value": "PF",
      "label": "French Polynesia"
    },
    {
      "value": "TF",
      "label": "French Southern Territories"
    },
    {
      "value": "GA",
      "label": "Gabon"
    },
    {
      "value": "GM",
      "label": "Gambia"
    },
    {
      "value": "GE",
      "label": "Georgia"
    },
    {
      "value": "DE",
      "label": "Germany"
    },
    {
      "value": "GH",
      "label": "Ghana"
    },
    {
      "value": "GI",
      "label": "Gibraltar"
    },
    {
      "value": "GR",
      "label": "Greece"
    },
    {
      "value": "GL",
      "label": "Greenland"
    },
    {
      "value": "GD",
      "label": "Grenada"
    },
    {
      "value": "GP",
      "label": "Guadeloupe"
    },
    {
      "value": "GU",
      "label": "Guam"
    },
    {
      "value": "GT",
      "label": "Guatemala"
    },
    {
      "value": "GG",
      "label": "Guernsey"
    },
    {
      "value": "GN",
      "label": "Guinea"
    },
    {
      "value": "GW",
      "label": "Guinea-Bissau"
    },
    {
      "value": "GY",
      "label": "Guyana"
    },
    {
      "value": "HT",
      "label": "Haiti"
    },
    {
      "value": "HM",
      "label": "Heard Island and McDonald Islands"
    },
    {
      "value": "VA",
      "label": "Holy See"
    },
    {
      "value": "HN",
      "label": "Honduras"
    },
    {
      "value": "HK",
      "label": "Hong Kong"
    },
    {
      "value": "HU",
      "label": "Hungary"
    },
    {
      "value": "IS",
      "label": "Iceland"
    },
    {
      "value": "IN",
      "label": "India"
    },
    {
      "value": "ID",
      "label": "Indonesia"
    },
    {
      "value": "IR",
      "label": "Iran, Islamic Republic of"
    },
    {
      "value": "IQ",
      "label": "Iraq"
    },
    {
      "value": "IE",
      "label": "Ireland"
    },
    {
      "value": "IM",
      "label": "Isle of Man"
    },
    {
      "value": "IL",
      "label": "Israel"
    },
    {
      "value": "IT",
      "label": "Italy"
    },
    {
      "value": "JM",
      "label": "Jamaica"
    },
    {
      "value": "JP",
      "label": "Japan"
    },
    {
      "value": "JE",
      "label": "Jersey"
    },
    {
      "value": "JO",
      "label": "Jordan"
    },
    {
      "value": "KZ",
      "label": "Kazakhstan"
    },
    {
      "value": "KE",
      "label": "Kenya"
    },
    {
      "value": "KI",
      "label": "Kiribati"
    },
    {
      "value": "KP",
      "label": "Korea, Democratic People's Republic of"
    },
    {
      "value": "KR",
      "label": "Korea, Republic of"
    },
    {
      "value": "KW",
      "label": "Kuwait"
    },
    {
      "value": "KG",
      "label": "Kyrgyzstan"
    },
    {
      "value": "LA",
      "label": "Lao People's Democratic Republic"
    },
    {
      "value": "LV",
      "label": "Latvia"
    },
    {
      "value": "LB",
      "label": "Lebanon"
    },
    {
      "value": "LS",
      "label": "Lesotho"
    },
    {
      "value": "LR",
      "label": "Liberia"
    },
    {
      "value": "LY",
      "label": "Libya"
    },
    {
      "value": "LI",
      "label": "Liechtenstein"
    },
    {
      "value": "LT",
      "label": "Lithuania"
    },
    {
      "value": "LU",
      "label": "Luxembourg"
    },
    {
      "value": "MO",
      "label": "Macao"
    },
    {
      "value": "MG",
      "label": "Madagascar"
    },
    {
      "value": "MW",
      "label": "Malawi"
    },
    {
      "value": "MY",
      "label": "Malaysia"
    },
    {
      "value": "MV",
      "label": "Maldives"
    },
    {
      "value": "ML",
      "label": "Mali"
    },
    {
      "value": "MT",
      "label": "Malta"
    },
    {
      "value": "MH",
      "label": "Marshall Islands"
    },
    {
      "value": "MQ",
      "label": "Martinique"
    },
    {
      "value": "MR",
      "label": "Mauritania"
    },
    {
      "value": "MU",
      "label": "Mauritius"
    },
    {
      "value": "YT",
      "label": "Mayotte"
    },
    {
      "value": "MX",
      "label": "Mexico"
    },
    {
      "value": "FM",
      "label": "Micronesia, Federated States of"
    },
    {
      "value": "MD",
      "label": "Moldova"
    },
    {
      "value": "MC",
      "label": "Monaco"
    },
    {
      "value": "MN",
      "label": "Mongolia"
    },
    {
      "value": "ME",
      "label": "Montenegro"
    },
    {
      "value": "MS",
      "label": "Montserrat"
    },
    {
      "value": "MA",
      "label": "Morocco"
    },
    {
      "value": "MZ",
      "label": "Mozambique"
    },
    {
      "value": "MM",
      "label": "Myanmar"
    },
    {
      "value": "NA",
      "label": "Namibia"
    },
    {
      "value": "NR",
      "label": "Nauru"
    },
    {
      "value": "NP",
      "label": "Nepal"
    },
    {
      "value": "NL",
      "label": "Netherlands"
    },
    {
      "value": "NC",
      "label": "New Caledonia"
    },
    {
      "value": "NZ",
      "label": "New Zealand"
    },
    {
      "value": "NI",
      "label": "Nicaragua"
    },
    {
      "value": "NE",
      "label": "Niger"
    },
    {
      "value": "NG",
      "label": "Nigeria"
    },
    {
      "value": "NU",
      "label": "Niue"
    },
    {
      "value": "NF",
      "label": "Norfolk Island"
    },
    {
      "value": "MK",
      "label": "North Macedonia"
    },
    {
      "value": "MK",
      "label": "Macedonia"
    },
    {
      "value": "MP",
      "label": "Northern Mariana Islands"
    },
    {
      "value": "NO",
      "label": "Norway"
    },
    {
      "value": "OM",
      "label": "Oman"
    },
    {
      "value": "PK",
      "label": "Pakistan"
    },
    {
      "value": "PW",
      "label": "Palau"
    },
    {
      "value": "PS",
      "label": "Palestine, State of"
    },
    {
      "value": "PA",
      "label": "Panama"
    },
    {
      "value": "PG",
      "label": "Papua New Guinea"
    },
    {
      "value": "PY",
      "label": "Paraguay"
    },
    {
      "value": "PE",
      "label": "Peru"
    },
    {
      "value": "PH",
      "label": "Philippines"
    },
    {
      "value": "PN",
      "label": "Pitcairn"
    },
    {
      "value": "PL",
      "label": "Poland"
    },
    {
      "value": "PT",
      "label": "Portugal"
    },
    {
      "value": "PR",
      "label": "Puerto Rico"
    },
    {
      "value": "QA",
      "label": "Qatar"
    },
    {
      "value": "RO",
      "label": "Romania"
    },
    {
      "value": "RU",
      "label": "Russia"
    },
    {
      "value": "RW",
      "label": "Rwanda"
    },
    {
      "value": "RE",
      "label": "Réunion"
    },
    {
      "value": "BL",
      "label": "Saint Barthélemy"
    },
    {
      "value": "SH",
      "label": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
      "value": "KN",
      "label": "Saint Kitts and Nevis"
    },
    {
      "value": "LC",
      "label": "Saint Lucia"
    },
    {
      "value": "MF",
      "label": "Saint Martin (French part)"
    },
    {
      "value": "PM",
      "label": "Saint Pierre and Miquelon"
    },
    {
      "value": "VC",
      "label": "Saint Vincent and the Grenadines"
    },
    {
      "value": "WS",
      "label": "Samoa"
    },
    {
      "value": "SM",
      "label": "San Marino"
    },
    {
      "value": "ST",
      "label": "Sao Tome and Principe"
    },
    {
      "value": "SA",
      "label": "Saudi Arabia"
    },
    {
      "value": "SN",
      "label": "Senegal"
    },
    {
      "value": "RS",
      "label": "Serbia"
    },
    {
      "value": "SC",
      "label": "Seychelles"
    },
    {
      "value": "SL",
      "label": "Sierra Leone"
    },
    {
      "value": "SG",
      "label": "Singapore"
    },
    {
      "value": "SX",
      "label": "Sint Maarten (Dutch part)"
    },
    {
      "value": "SK",
      "label": "Slovakia"
    },
    {
      "value": "SI",
      "label": "Slovenia"
    },
    {
      "value": "SB",
      "label": "Solomon Islands"
    },
    {
      "value": "SO",
      "label": "Somalia"
    },
    {
      "value": "ZA",
      "label": "South Africa"
    },
    {
      "value": "GS",
      "label": "South Georgia and the South Sandwich Islands"
    },
    {
      "value": "SS",
      "label": "South Sudan"
    },
    {
      "value": "ES",
      "label": "Spain"
    },
    {
      "value": "LK",
      "label": "Sri Lanka"
    },
    {
      "value": "SD",
      "label": "Sudan"
    },
    {
      "value": "SR",
      "label": "Suriname"
    },
    {
      "value": "SJ",
      "label": "Svalbard and Jan Mayen"
    },
    {
      "value": "SE",
      "label": "Sweden"
    },
    {
      "value": "CH",
      "label": "Switzerland"
    },
    {
      "value": "SY",
      "label": "Syrian Arab Republic"
    },
    {
      "value": "TW",
      "label": "Taiwan, Province of China"
    },
    {
      "value": "TJ",
      "label": "Tajikistan"
    },
    {
      "value": "TZ",
      "label": "Tanzania, United Republic of"
    },
    {
      "value": "TH",
      "label": "Thailand"
    },
    {
      "value": "TL",
      "label": "Timor-Leste"
    },
    {
      "value": "TG",
      "label": "Togo"
    },
    {
      "value": "TK",
      "label": "Tokelau"
    },
    {
      "value": "TO",
      "label": "Tonga"
    },
    {
      "value": "TT",
      "label": "Trinidad and Tobago"
    },
    {
      "value": "TN",
      "label": "Tunisia"
    },
    {
      "value": "TR",
      "label": "Turkey"
    },
    {
      "value": "TM",
      "label": "Turkmenistan"
    },
    {
      "value": "TC",
      "label": "Turks and Caicos Islands"
    },
    {
      "value": "TV",
      "label": "Tuvalu"
    },
    {
      "value": "UG",
      "label": "Uganda"
    },
    {
      "value": "UA",
      "label": "Ukraine"
    },
    {
      "value": "AE",
      "label": "United Arab Emirates"
    },
    {
      "value": "GB",
      "label": "United Kingdom"
    },
    {
      "value": "UM",
      "label": "United States Minor Outlying Islands"
    },
    {
      "value": "US",
      "label": "United States"
    },
    {
      "value": "UY",
      "label": "Uruguay"
    },
    {
      "value": "UZ",
      "label": "Uzbekistan"
    },
    {
      "value": "VU",
      "label": "Vanuatu"
    },
    {
      "value": "VE",
      "label": "Venezuela, Bolivarian Republic of"
    },
    {
      "value": "VN",
      "label": "Viet Nam"
    },
    {
      "value": "VG",
      "label": "Virgin Islands, British"
    },
    {
      "value": "VI",
      "label": "Virgin Islands, U.S."
    },
    {
      "value": "WF",
      "label": "Wallis and Futuna"
    },
    {
      "value": "EH",
      "label": "Western Sahara"
    },
    {
      "value": "YE",
      "label": "Yemen"
    },
    {
      "value": "ZM",
      "label": "Zambia"
    },
    {
      "value": "ZW",
      "label": "Zimbabwe"
    },
    {
        "value": "Flag_of_Idaho",
        "label": "US, Idaho"
    },
    {
        "value": "Flag_of_Iowa",
        "label": "US, Iowa"
    },
    {
        "value": "Flag_of_Alabama",
        "label": "US, Alabama"
    },
    {
        "value": "Flag_of_Alaska",
        "label": "US, Alaska"
    },
    {
        "value": "Flag_of_Arizona",
        "label": "US, Arizona"
    },
    {
        "value": "Flag_of_Arkansas",
        "label": "US, Arkansas"
    },
    {
        "value": "Flag_of_Wyoming",
        "label": "US, Wyoming"
    },
    {
        "value": "Flag_of_Washington",
        "label": "US, Washington"
    },
    {
        "value": "Flag_of_Vermont",
        "label": "US, Vermont"
    },
    {
        "value": "Flag_of_Virginia",
        "label": "US, Virginia"
    },
    {
        "value": "Flag_of_Wisconsin",
        "label": "US, Wisconsin"
    },
    {
        "value": "Flag_of_Hawaii",
        "label": "US, Hawaii"
    },
    {
        "value": "Flag_of_Delaware",
        "label": "US, Delaware"
    },
    {
        "value": "Flag_of_Georgia_(U.S._state)",
        "label": "US, Georgia"
    },
    {
        "value": "Flag_of_West_Virginia",
        "label": "US, West Virginia"
    },
    {
        "value": "Flag_of_Illinois",
        "label": "US, Illinois"
    },
    {
        "value": "Flag_of_Indiana",
        "label": "US, Indiana"
    },
    {
        "value": "Flag_of_California",
        "label": "US, California"
    },
    {
        "value": "Flag_of_Kansas",
        "label": "US, Kansas"
    },
    {
        "value": "Flag_of_Kentucky",
        "label": "US, Kentucky"
    },
    {
        "value": "Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson",
        "label": "US, Colorado"
    },
    {
        "value": "Flag_of_Connecticut",
        "label": "US, Connecticut"
    },
    {
        "value": "Flag_of_Louisiana",
        "label": "US, Louisiana"
    },
    {
        "value": "Flag_of_Massachusetts",
        "label": "US, Massachusetts"
    },
    {
        "value": "Flag_of_Minnesota",
        "label": "US, Minnesota"
    },
    {
        "value": "Flag_of_Mississippi",
        "label": "US, Mississippi"
    },
    {
        "value": "Flag_of_Missouri",
        "label": "US, Missouri"
    },
    {
        "value": "Flag_of_Michigan",
        "label": "US, Michigan"
    },
    {
        "value": "Flag_of_Montana",
        "label": "US, Montana"
    },
    {
        "value": "Flag_of_Maine",
        "label": "US, Maine"
    },
    {
        "value": "Flag_of_Maryland",
        "label": "US, Maryland"
    },
    {
        "value": "Flag_of_Nebraska",
        "label": "US, Nebraska"
    },
    {
        "value": "Flag_of_Nevada",
        "label": "US, Nevada"
    },
    {
        "value": "Flag_of_New_Hampshire",
        "label": "US, New Hampshire"
    },
    {
        "value": "Flag_of_New_Jersey",
        "label": "US, New Jersey"
    },
    {
        "value": "Flag_of_New_York",
        "label": "US, New York"
    },
    {
        "value": "Flag_of_New_Mexico",
        "label": "US, New Mexico"
    },
    {
        "value": "Flag_of_Ohio",
        "label": "US, Ohio"
    },
    {
        "value": "Flag_of_Oklahoma",
        "label": "US, Oklahoma"
    },
    {
        "value": "Flag_of_Oregon",
        "label": "US, Oregon"
    },
    {
        "value": "Flag_of_Pennsylvania",
        "label": "US, Pennsylvania"
    },
    {
        "value": "Flag_of_Rhode_Island",
        "label": "US, Rhode Island"
    },
    {
        "value": "Flag_of_North_Dakota",
        "label": "US, North Dakota"
    },
    {
        "value": "Flag_of_North_Carolina",
        "label": "US, North Carolina"
    },
    {
        "value": "Flag_of_Tennessee",
        "label": "US, Tennessee"
    },
    {
        "value": "Flag_of_Texas",
        "label": "US, Texas"
    },
    {
        "value": "Flag_of_Florida",
        "label": "US, Florida"
    },
    {
        "value": "Flag_of_South_Dakota",
        "label": "US, South Dakota"
    },
    {
        "value": "Flag_of_South_Carolina",
        "label": "US, South Carolina"
    },
    {
        "value": "Flag_of_Utah_(2011-present)",
        "label": "US, Utah"
    },
    {
      "value": "Flag_of_the_United_States_Virgin_Islands",
      "label": "U.S. Virgin Islands"
    },
    {
      "value": "Flag_of_Northern_Mariana_Islands",
      "label": "Northern Mariana Islands"
    },
    {
      "value": "Flag_of_the_District_of_Columbia",
      "label": "US, Washington, D.C."
    }
  ];
  
  export default countryCodes;