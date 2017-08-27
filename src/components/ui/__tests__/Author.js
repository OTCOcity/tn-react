import React from 'react';
import ReactDom from 'react-dom';

import {shallow} from 'enzyme';

import Link from 'components/elements/Link';

import Author from 'components/ui/Author';

describe('Author', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Author/>, div);
  });

  describe('render', () => {
    it('should render Author name', () => {
      const itemProps = {id: 1, author: 'Ignat'};

      const item = shallow(<Author id={itemProps.id} author={itemProps.author} />);
      const header = <Link to="/posts/1" className='blog-list__item-author-link'>Ignat</Link>;


      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual Author', () => {
      const itemProps = {id: 1, author: 'Ignat'};
      const item = shallow(<Author id={itemProps.id} author={itemProps.author} />);

      expect(item).toMatchSnapshot();
    });
  });
});