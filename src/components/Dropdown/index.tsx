import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const CustomToggle = React.forwardRef(
  ({ children, onClick }: any, ref: any) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <i className="fa-solid fa-ellipsis"></i>
    </a>
  )
);

const CustomMenu = React.forwardRef(
  (
    { children, style, className, 'aria-labelledby': labeledBy }: any,
    ref: any
  ) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled mb-0">
          {React.Children.toArray(children).filter(
            (child: any) =>
              !value || child?.props.children
          )}
        </ul>
      </div>
    );
  }
);

const FxDropDown = (props: any) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic"></Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>{props.children}</Dropdown.Menu>
    </Dropdown>
  );
};

export default FxDropDown;
