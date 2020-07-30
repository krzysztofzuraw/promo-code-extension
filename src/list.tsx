import React, { FunctionComponent } from 'react';

export const List: FunctionComponent = () => {
  return (
    <>
      <ul>
        <li>
          <div className="code" title="click to copy">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro neque debitis expedita
            deserunt tempore, repudiandae quae, veritatis deleniti sapiente asperiores ducimus
            perferendis hic blanditiis corporis temporibus dolorem, accusamus earum similique.
          </div>
          <div className="valid-date align-right">Valid until 12/03/2020</div>
          <div className="url">https://www.onet.pl</div>
          <button className="button-default align-right">Edit</button>
        </li>
      </ul>
      <footer>
        <button className="button-primary">Add new</button>
      </footer>
    </>
  );
};
