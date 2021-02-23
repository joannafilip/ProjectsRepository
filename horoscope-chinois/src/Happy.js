import React, { useState } from 'react';

const Happy = () => {
  const [panda, setPanda] = useState(true);
  const handle = panda ? <div>sad</div> : <div>happy</div>;
  return (

    <div onClick={() => setPanda(false)}>{handle}</div>
  );
};

export default Happy;
