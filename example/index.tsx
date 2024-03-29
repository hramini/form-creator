import { Root, createRoot } from 'react-dom/client';
import { Form } from './form/form';

const root: Root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<Form />);
