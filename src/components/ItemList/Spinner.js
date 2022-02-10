import React from 'react';
import { Spinner } from 'reactstrap';

const SpinnerLoad = () => {
    return (
        <div>
        <Spinner color="warning" type="grow">Is loading...</Spinner>
        </div>
    );
}

export default SpinnerLoad;