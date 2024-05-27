import './Leftnav.css';

function Leftnav() {
  return (
    <div className="Leftnav">
      <div className="nav-title">JavaScript</div>
      <div>Vanilla JavaScript Example</div>
      <a href=''>Source</a>
      <hr/>
      <p className='nav-para'>JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, most known as the scripting language for Web pages, but used in many non-browser environments as well such as node.js or Apache CouchDB.</p>
      <div className='p-javascript'>JavaScript</div>
      <hr/>
      <em className='footer-para'>If you have other helpful links to share, or find any of the links above no longer work, please <a href="https://github.com/tastejs/todomvc/issues">let us know</a>.</em>
    </div>
  );
}

export default Leftnav;