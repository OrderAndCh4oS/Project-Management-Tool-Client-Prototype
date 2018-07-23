/* eslint-disable react/prop-types,indent */
import React from 'react';

export const Container = ({classes = [], children}) =>
    <div className={['container', ...classes].join(' ')}>{children}</div>;

export const ContainerPanel = ({classes = [], children}) =>
    <Container>
        <div className={['panel', ...classes].join(' ')}>
            {children}
        </div>
    </Container>;

export const Row = ({children}) => <div className={'row'}>{children}</div>;

export const Column = ({span = 12, push = false, classes = [], children}) => {
    classes = [
        'column',
        'col-' + span,
        push ? ' push-' + push : '',
        ...classes
    ].join(' ');
    return (
        <div className={classes}>
            <div>
                {children}
            </div>
        </div>
    );
};

export const Table = ({headers = [], rows = [], classes = []}) =>
    <table className={classes.join(' ')}>
        <thead>
        <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {rows.map(
            (row, index) =>
                <tr key={index}>
                    {row.map((data, index) => <td key={index}>{data}</td>)}
                </tr>
        )}
        </tbody>
    </table>;

export const PlotContainer = ({legend, children}) =>
    <div className='plot-container'>
        <div className='plot-holder'>
            {children}
        </div>
        {legend}
    </div>;