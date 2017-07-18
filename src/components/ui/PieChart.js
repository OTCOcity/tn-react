import React, {PropTypes, DOM} from 'react';
import ReactDOM from 'react-dom';

import c3 from 'c3';

class PieChart extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.columns
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }

  render() {
    return DOM.div({ref: 'chart'}, null);
  }
}

PieChart.defaultProps = {
  columns: []
};
PieChart.propTypes = {
  columns: PropTypes.array
};

export default PieChart;
