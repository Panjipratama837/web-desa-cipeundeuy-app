// 1. It should show the progress
// 2. Show the percentage of completion in text
// 3. Color, width

import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    margin-top: 5px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width, nama, jumlah }) => {
  return (
    <Container color={color} width={width}>
      <div className="row">
        <div className="col-md-3">
          <span>{nama}</span>
        </div>
        <div className="col-md-7">
          <progress value={value} max={max} />
        </div>
        <div className="col-md-2 ">
          <span>{jumlah}</span>
        </div>
      </div>
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px",
};

export default ProgressBar;
