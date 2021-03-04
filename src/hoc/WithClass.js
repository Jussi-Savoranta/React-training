import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    ); // WrappedComponent takes in multiple props so it's needed to spread through that single props variable
};

export default withClass;