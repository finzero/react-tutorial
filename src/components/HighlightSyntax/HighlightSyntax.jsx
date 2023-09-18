import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import buttons from '../../assets/mac-buttons.png';
import copyIcon from '../../assets/copy.png';
import './HighlightSyntax.css';

function copy(data) {
  navigator.clipboard.writeText(data);
}

const HighlightSyntax = ({ title, lang, children }) => (
  <div className="syntax-container">
    <div className="syntax-head">
      <span>
        <img className="left" src={buttons} alt="" srcSet="" />
      </span>
      <span className="syntax-title">{title}</span>
      <img
        className="right"
        role="button"
        src={copyIcon}
        onClick={() => copy(children)}
      />
    </div>
    <SyntaxHighlighter
      language={lang || 'html'}
      style={atomOneDarkReasonable}
      showInlineLineNumbers
      wrapLongLines
    >
      {children}
    </SyntaxHighlighter>
  </div>
);

export default HighlightSyntax;
