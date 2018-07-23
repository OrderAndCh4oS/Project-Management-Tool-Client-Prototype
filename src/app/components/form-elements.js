/* eslint-disable react/prop-types */

import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const Label = ({label, htmlFor}) => <label htmlFor={htmlFor} className="form-label">{label}</label>;

export const FormError = ({error}) => error ? <p className="form-error">{error}</p> : null;

export const Field = ({type, classes = [], children, error}) => (
    <div className={['form-field', type, ...classes].join(' ')}>
        {children}
        <FormError error={error}/>
    </div>
);

export const Input = ({label, name, type, error, classes = [], ...props}) => {
    return (
        <Field type={type} error={error}>
            <Label label={label} htmlFor={name}/>
            <input {...props} id={name} name={name} type={type}
                   className={['form-input', error ? 'form-error' : '', ...classes].join(' ')}/>
        </Field>
    );
};

export const TextArea = ({label, name, error, classes = [], ...props}) => (
    <Field type='text-area' error={error}>
        <Label label={label} htmlFor={name}/>
        <textarea {...props} id={name} name={name}
                  className={['form-text-area', error ? 'form-error' : '', ...classes].join(' ')}/>
    </Field>
);

export const Select = ({label, name, error, classes = [], options = [], initialField = 'Select an option', ...props}) => {
    return (
        <Field type='select' error={error}>
            <Label label={label} htmlFor={name}/>
            <select {...props} id={name} name={name}
                    className={['form-select', error ? 'form-error' : '', ...classes].join(' ')}>
                <option value="">{initialField}</option>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </Field>
    );
};

export const Switch = ({value = false, label, name, error, classes = [], onChange, onBlur, ...props}) => {
    classes = ['switch', classes, value ? 'on' : ''].join(' ');
    const title = [value ? 'on' : 'off'].join(' ');
    return (
        <Field type='switch' error={error}>
            <Label label={label} htmlFor={name}/>
            <button type='button' id={name} title={title} className={classes}
                    onBlur={() => {
                        onBlur(true);
                    }}
                    onClick={() => {
                        onChange(name, !value);
                    }}
                    {...props}
            />
        </Field>
    );
};

const StyledSlider = (props) =>
    <Slider
        {...props}
        style={{marginTop: 18}}
        handleStyle={{
            borderColor: '#332f2f',
            borderWidth: 1,
            height: 14,
            width: 14,
            marginLeft: -7,
            marginTop: -3,
            backgroundColor: '#fcfcfc'

        }}
        railStyle={{backgroundColor: '#332f2f', height: 8}}
        trackStyle={{backgroundColor: '#fcfcfc', height: 6, marginTop: 1, marginLeft: 1}}
    />;

export const MySlider = ({label, value, name, type, error, decimals = 0, classes = [], onChange, onBlur, ...props}) => {
    return (
        <Field type={type} error={error}>
            <Label label={label + ': ' + value.toFixed(decimals)} htmlFor={name}/>
            <StyledSlider
                name={name}
                id={name}
                value={value}
                className={['form-slider', ...classes].join(' ')}
                onChange={(value) => {
                    onChange(name, value);
                }}
                onLoad={() => {
                    onBlur(true);
                }}
                {...props}
            />
        </Field>
    );
};
