import React from 'react'

const Jsx4 = () => {

    const age = 18;

  return (
    <div>
   { age>=18 && <h1>The Content for 18 or older</h1> }  {/* return içinde bu kullanım tek if mantığı  */}
   { age>17 || <h1>The Content for younger than 18</h1> } 

   </div>
  );
};

export default Jsx4;