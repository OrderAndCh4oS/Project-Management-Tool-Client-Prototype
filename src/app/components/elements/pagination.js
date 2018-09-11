import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from './button';

class Pagination extends Component {
    next = () => {
        const {paginate, pagination} = this.props;
        paginate({url: pagination.next});
    };

    prev = () => {
        const {paginate, pagination} = this.props;
        paginate({url: pagination.prev});
    };

    render() {
        const {pagination} = this.props;
        return (<div className='pagination'>
            {pagination.prev
                ? <Button className={'prev'} onClick={this.prev}
                          iconRight={<FontAwesomeIcon
                              icon={['far', 'arrow-left']}/>}>
                    Prev
                </Button>
                : null}
            {pagination.next
                ? <Button className={'next'} onClick={this.next}
                          iconRight={<FontAwesomeIcon
                              icon={['far', 'arrow-right']}/>}>
                    Next
                </Button>
                : null}
        </div>);
    }
}

export default Pagination;
