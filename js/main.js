const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const wrapper = React.createElement('div', {className: "wrapper"}, [
    React.createElement('h1', null, 'Salom Dunyo!'),
    React.createElement('h1', null, 'Salom Dunyo!'),
    React.createElement('h1', null, 'Salom Dunyo!')
]);

root.render(wrapper);