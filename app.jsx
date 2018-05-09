class App extends React.Component {
  render() {
    return (
      <div>minimal node-less react setup</div>
    )
  }
}

function renderRoot() {
  var domContainerNode = window.document.getElementById('root');
  ReactDOM.unmountComponentAtNode(domContainerNode);
  ReactDOM.render(<App />, domContainerNode);
}

$(document).ready (function() {
  renderRoot();
});

// Attach this function to the window object so it can be called
// from href="javascript:window.renderRoot..."
// Needed when using <script type="text/babel"...
window.renderRoot = renderRoot;
