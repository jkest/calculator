import React from 'react';
// import { connect } from 'react-redux';

import InputData from './input-data';
import ResultData from './result-data';


import './view-panel.css';

class ViewPanel extends React.Component {
  render() {
    const { stack, result } = this.props;
    return (
      <div className="view-panel">
        <InputData stack={stack} />
        <ResultData result={result} />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { stack, result } = state;
//   return { stack, result };
// }

// export default connect(mapStateToProps)(ViewPanel);
export default ViewPanel;