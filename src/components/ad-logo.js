import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const AdLogo = ({ size }) => (
  <Svg width={`${size}px`} height={`${size}px`} viewBox="0 0 167 167" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="logo" fillOpacity="0.8" strokeWidth="2">
      <rect id="Rectangle-Copy-14" transform="translate(83.500000, 83.500000) scale(-1, -1) translate(-83.500000, -83.500000) " x="71.5" y="6.5" width="24" height="154" rx="12" />
      <rect id="Rectangle-Copy-15" transform="translate(115.911688, 115.911688) scale(-1, -1) rotate(45.000000) translate(-115.911688, -115.911688) " x="103.911688" y="57.9116882" width="24" height="116" rx="12" />
      <rect id="Rectangle-Copy-16" transform="translate(115.911688, 50.911688) scale(-1, 1) rotate(45.000000) translate(-115.911688, -50.911688) " x="103.911688" y="-7.08831175" width="24" height="116" rx="12" />
      <rect id="Rectangle-Copy-20" transform="translate(34.596194, 99.596194) scale(-1, 1) rotate(45.000000) translate(-34.596194, -99.596194) " x="22.5961941" y="64.6697872" width="24" height="69.8528137" rx="12" />
      <rect id="Rectangle-Copy-17" transform="translate(50.911688, 51.006836) rotate(45.000000) translate(-50.911688, -51.006836) " x="38.9116882" y="-6.9931637" width="24" height="116" rx="12" />
      <rect id="Rectangle-Copy-19" transform="translate(50.750000, 83.500000) scale(1, -1) rotate(90.000000) translate(-50.750000, -83.500000) " x="38.75" y="39.25" width="24" height="88.5" rx="12" />
    </g>
  </Svg>
);

AdLogo.propTypes = {
  size: PropTypes.number,
};

AdLogo.defaultProps = {
  size: 50,
};

const Svg = styled.svg`
  margin-top: -20px;
  margin-bottom: -20px;
  & > g {
    transition: all 0.5s;
    stroke: transparent;
    fill: #5D5D5D;

    &:hover {
      stroke: #5D5D5D;
      fill: transparent;
    }
  }
`;

export default AdLogo;
