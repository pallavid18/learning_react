import React, { useState } from 'react'

const UseInput = (intinialValue ="") => {
    const [value , setValue] = useState(intinialValue);

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    return {
        value,
        onChange : handleChange
    };
};

export default UseInput