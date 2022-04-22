import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import './style.css';

export default function Accordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="accordion-container">
      <div className="accordion-title" onClick={() => setExpanded(!expanded)}>
        {props.title}
      </div>
      {expanded && <div className="accordion-content">{props.children}</div>}
    </div>
  );
}
