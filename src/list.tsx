import React, { FunctionComponent, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { usePopper } from 'react-popper';

export const List: FunctionComponent = () => {
  const [copied, setCopied] = React.useState(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const [arrowElement, setArrowElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
  return (
    <>
      <ul>
        <li>
          {copied && (
            <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
              Popper element
              <div ref={setArrowElement} style={styles.arrow} />
            </div>
          )}
          <CopyToClipboard text="lorem code">
            <div
              className="code"
              title="Click to copy"
              ref={setReferenceElement}
              onClick={() => setCopied(true)}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro neque debitis expedita
              deserunt tempore, repudiandae quae, veritatis deleniti sapiente asperiores ducimus
              perferendis hic blanditiis corporis temporibus dolorem, accusamus earum similique.
            </div>
          </CopyToClipboard>
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
